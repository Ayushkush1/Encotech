import * as React from "react";
import { ChevronDown } from "lucide-react";

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

type AccordionType = "single" | "multiple";

interface AccordionContextValue {
  type: AccordionType;
  collapsible: boolean;
  openValues: Set<string>;
  toggle: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AccordionType;
  collapsible?: boolean;
}

export function Accordion({ type = "single", collapsible = true, className, children, ...props }: AccordionProps) {
  const [openValues, setOpenValues] = React.useState<Set<string>>(new Set());

  const toggle = React.useCallback(
    (value: string) => {
      setOpenValues((prev) => {
        const next = new Set(prev);
        const isOpen = next.has(value);
        if (type === "single") {
          if (isOpen) {
            if (collapsible) next.delete(value);
          } else {
            next.clear();
            next.add(value);
          }
        } else {
          if (isOpen) next.delete(value);
          else next.add(value);
        }
        return next;
      });
    },
    [type, collapsible]
  );

  const ctx: AccordionContextValue = { type, collapsible, openValues, toggle };

  return (
    <div className={className} {...props}>
      <AccordionContext.Provider value={ctx}>{children}</AccordionContext.Provider>
    </div>
  );
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
  const ctx = React.useContext(AccordionContext);
  const open = ctx?.openValues.has(value) ?? false;
  return (
    <div data-state={open ? "open" : "closed"} className={className} {...props}>
      <AccordionItemContext.Provider value={{ value, open }}>{children}</AccordionItemContext.Provider>
    </div>
  );
}

interface AccordionItemInnerContext {
  value: string;
  open: boolean;
}

const AccordionItemContext = React.createContext<AccordionItemInnerContext | null>(null);

type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  const item = React.useContext(AccordionItemContext);
  const ctx = React.useContext(AccordionContext);
  const open = item?.open ?? false;
  const value = item?.value ?? "";
  return (
    <button
      type="button"
      aria-expanded={open}
      className={cn("w-full flex items-center justify-between gap-4", className)}
      onClick={() => ctx?.toggle(value)}
      {...props}
    >
      <span className="flex-1">{children}</span>
      <ChevronDown
        className={cn(
          "w-5 h-5 transition-transform duration-200",
          open ? "rotate-180 text-brand" : "text-gray-500"
        )}
        aria-hidden="true"
      />
    </button>
  );
}

type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>;

export function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  const item = React.useContext(AccordionItemContext);
  const open = item?.open ?? false;
  return (
    <div className={open ? className : ["hidden", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  );
}