import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, id, disabled, ...props }, ref) => {
    const inputId = id || (label ? `input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
    
    return (
      <div className="w-full flex flex-col gap-2 text-right dir-rtl">
        {label && (
          <label htmlFor={inputId} className="text-sm font-bold text-text-main">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          disabled={disabled}
          className={`
            w-full px-4 py-3 rounded-btn border bg-white
            focus:outline-none focus:ring-2 focus:border-brand-primary placeholder:text-zinc-400
            transition-all text-text-main font-medium
            ${error ? "border-error focus:ring-error/20" : "border-border-subtle hover:border-zinc-300 focus:ring-brand-primary/20"}
            ${disabled ? "opacity-50 cursor-not-allowed bg-zinc-50" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <span className="text-xs font-bold text-error mt-1">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
