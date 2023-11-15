import { useFetchOsloStations } from "api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useHome() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const { data } = useFetchOsloStations();

  const handleLocationSelected = (location: string) => {
    setSelectedLocation(location);
    setIsDisabled(false);
  };

  const handleButtonClick = () => {
    navigate(`/location/${encodeURIComponent(selectedLocation)}`);
  };

  return {
    data,
    handleButtonClick,
    handleLocationSelected,
    isDisabled
  };
}