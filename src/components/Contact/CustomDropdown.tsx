import React, { useState, useRef, useEffect } from "react";
import { Label } from "@/components/ui/label";

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  label: string;
  id: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  id,
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || "Select a service";

  return (
    <div
      className="grid w-full items-center gap-1.5 relative"
      ref={dropdownRef}
    >
      <Label htmlFor="subject">{label}</Label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="w-full rounded-md text-sm border border-gray-300 text-muted-foreground p-2 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500"
        id={id}
      >
        {selectedLabel}
        <span className="float-right ml-2">&#9662;</span>
      </button>
      {isOpen && (
        <ul
          tabIndex={-1}
          role="listbox"
          aria-labelledby={id}
          className="absolute z-10 top-18 text-sm mt-1 max-h-48 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg focus:outline-none"
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={value === option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`cursor-pointer select-none p-2 text-gray-900 dark:text-gray-100 hover:bg-indigo-600 hover:text-white ${
                value === option.value ? "bg-indigo-600 text-white" : ""
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
