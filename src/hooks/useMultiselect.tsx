import { useState } from "react";

export default function useMultiselect(onChange: (selectedOption: string) => void, defaultOption: string) {
  const [selectedOption, setSelectedOption] = useState<string | null>(defaultOption);

  const handleOptionClick = (option: string) => {
    if (selectedOption === option) {
      setSelectedOption(null);
      onChange('');
    } else {
      setSelectedOption(option);
      onChange(option);
    }
  };

  return {
    handleOptionClick,
    selectedOption,
  };
}