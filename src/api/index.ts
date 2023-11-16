import { useGetData } from './apiClient';
import { createChartDataArray, formatCurrentStationData, formatStationNameData } from './helpers';

export const useFetchOsloStations = () => {
  const { data, isLoading, error } = useGetData('/lookup/stations?area=oslo');
  const transformedData = formatStationNameData(data);

  return {
    data: transformedData,
    isLoading,
    error,
  };
};

export const useFetchCurrentStationData = (currentStation: string) => {
  const { data, isLoading, error } = useGetData(`/aq/utd?stations=${currentStation}`);

  if(data?.length > 0) {
    const transformedData = formatCurrentStationData(data);
    return {
      data: transformedData,
      isLoading,
      error,
    };
  } else {
    return {
      data: null,
      isLoading,
      error,
    };
  }

};

export const useFetchChartData = (meantype: number, currentStation: string, dateFrom: string, dateTo: string, dateFormat: string, airComponent: string) => {
  const { data, isLoading, error } = useGetData(`/agg/${meantype}/${dateFrom}/${dateTo}/${currentStation}?components=PM10;PM2.5;CO;NO2`);
  const transformedData = data ? createChartDataArray(data, dateFormat, airComponent) : [];

  return {
    chartDataAPI: transformedData,
    isLoading,
    error,
  };
};