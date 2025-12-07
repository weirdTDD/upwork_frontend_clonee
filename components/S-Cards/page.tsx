import React, { useState } from 'react';
import { Check, Circle } from 'lucide-react'; // Using Lucide icons for the checkmark

// --- Type Definitions ---

/** Defines the structure for a card option item. */
interface OptionType {
  id: string; // Added ID field
  title: string;
  subtitle: string; // Added Subtitle field
  // Removed 'emoji' field
}

// Removed CardImageProps and CardImage component as icons/emojis are removed.

/** Props for the SelectableCard component, inheriting from OptionType and adding functionality. */
interface SelectableCardProps extends OptionType { // Updated reference
  /** Callback function when the card's selection state changes. */
  onSelect: (id: string, isSelected: boolean) => void; // Changed callback to use id
}


/**
 * A selectable card component that acts as a custom checkbox/radio button.
 * The entire card area is clickable to toggle the selection state.
 */
const SelectableCard: React.FC<SelectableCardProps> = ({ id, title, subtitle, onSelect }) => {
  // isSelected state is typed inferentially as boolean
  const [isSelected, setIsSelected] = useState(false);

  // Function to handle the click event on the card.
  const handleClick = () => {
    const newState: boolean = !isSelected;
    setIsSelected(newState);
    // Call the prop function to pass the state up to the parent component, using ID as key
    onSelect(id, newState);
  };

  // Base Tailwind classes for the card.
  const baseClasses: string = 'relative w-full h-full p-6 bg-white rounded-xl shadow-md cursor-pointer transition-all duration-200 border-2';

  // Conditional classes based on the selection state.
  const activeClasses: string = isSelected
    ? 'border-indigo-600 ring-4 ring-indigo-100'
    : 'border-gray-200 hover:border-indigo-300';

  return (
    <div
      className={`${baseClasses} ${activeClasses} flex flex-col justify-between`} // Ensure vertical space distribution
      onClick={handleClick}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        // Handle keyboard interaction for accessibility
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Selection Indicator (Custom Radio/Checkbox) */}
      <div className="absolute top-4 right-4 z-10">
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
            isSelected
              ? 'bg-indigo-600 border-indigo-600 text-white'
              : 'bg-white border-gray-300 text-transparent'
          }`}
          aria-hidden="true"
        >
          {isSelected ? <Check size={16} strokeWidth={3} /> : <Circle size={10} fill="currentColor" className="text-gray-300" />}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col items-start pt-2 pb-0 h-full">
        {/* Note: The image area/placeholder is now implicitly removed, making the text start higher. */}

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800">
          {title}
        </h3>
        
        {/* Subtitle */}
        <p className="text-gray-500 mt-1 text-base">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SelectableCard;

export type Option = OptionType;