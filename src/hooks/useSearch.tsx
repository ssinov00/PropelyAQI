import { SearchProps } from "global";
import { useState } from "react";

export default function useSearch({ data, onLocationSelected }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([] as string[]);
  const [showList, setShowList] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = data.filter(item => item.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  };

  const handleInputClick = () => {
    setShowList(true);
    setFilteredData(data);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowList(false);
    }, 100);
  };

  const handleItemClick = (item: string) => {
    onLocationSelected(item);
    setSearchTerm(item);
    setFilteredData([]);
    setShowList(false);
  };

  return {
    searchTerm,
    filteredData,
    showList,
    handleInputChange,
    handleInputClick,
    handleBlur,
    handleItemClick,
  };
}