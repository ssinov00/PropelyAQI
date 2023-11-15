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

export const useFetchDailyData = (currentStation: string, dateFrom: string, dateTo: string, format: string, airComponent: string) => {
  const { data, isLoading, error } = useGetData(`/agg/2/${dateFrom}/${dateTo}/${currentStation}?components=PM10;PM2.5;CO;NO2`);
  const transformedData = data ? createChartDataArray(data, format, airComponent) : [];


  return {
    dailyData: transformedData,
    isLoading,
    error,
  };
};

export const useFetchHourlyData = (currentStation: string, dateFrom: string, dateTo: string, format: string, airComponent: string) => {
  const { data, isLoading, error } = useGetData(`/agg/1/${dateFrom}/${dateTo}/${currentStation}?components=PM10;PM2.5;CO;NO2`);
  const transformedData = data ? createChartDataArray(data, format, airComponent) : [];

  return {
    hourlyData: transformedData,
    isLoading,
    error,
  };
};