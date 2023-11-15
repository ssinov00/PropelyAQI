import { useFetchCurrentStationData } from "api";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function useLocation() {
  const { locationName } = useParams<{ locationName: string }>();
  const { data } = useFetchCurrentStationData(locationName as string);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return {
    data,
    handleBack
  };
}