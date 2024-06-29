import React, { useState, useEffect, useRef } from 'react';
import './Multi.css';

interface Option {
    label: string;
    value: string;
}

interface MultiSelectProps {
    options: Option[];
    onChange: (selectedOptions: Option[]) => void;
    actualSelectedOptions?: Option[];
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, onChange,  actualSelectedOptions}) => {
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSelectedOptions(actualSelectedOptions || [])
    }, [actualSelectedOptions])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (option: Option) => {
        const isSelected = selectedOptions.find((o) => o.value === option.value);

        let newSelectedOptions;

        if (isSelected) {
            newSelectedOptions = selectedOptions.filter((o) => o.value !== option.value);
        } else {
            newSelectedOptions = [...selectedOptions, option];
        }
        setSelectedOptions(newSelectedOptions);
        onChange(newSelectedOptions);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="MultiSelect col-12 mb-2" ref={dropdownRef}>
        <div className="CardSelect" onClick={toggleDropdown}>
            <div className="flex-1">
            {selectedOptions.map((option) => option.label).join(', ') || 'Select...'}
            </div>
        </div>
        {isOpen && (
            <div className="SelectContainer">
            {options.map((option) => (
                <div
                key={option.value}
                className={`option ${selectedOptions.find((o) => o.value === option.value) ? 'selected' : ''}`}
                onClick={() => handleSelect(option)}
                >
                {option.label}
                </div>
            ))}
            </div>
        )}
    </div>
  );
};

export default MultiSelect;
