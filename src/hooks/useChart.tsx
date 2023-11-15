import { useFetchDailyData, useFetchHourlyData } from "api";
import { DATE_FROM, DATE_TO } from "api/helpers";
import { ChartData } from "global";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useChart() {
  const { locationName } = useParams<{ locationName: string }>();
  const [chartType, setChartType] = useState<string>('Daily');
  const [airComponent, setAirComponent] = useState<string>('AQI');
  const [chartData, setChartData] = useState<ChartData>([]);

  const { hourlyData } = useFetchHourlyData((locationName as string), DATE_FROM, DATE_TO, "DD.MM h:mm a", airComponent);
  const { dailyData } = useFetchDailyData((locationName as string), DATE_FROM, DATE_TO, "MMM Do", airComponent);

  useEffect(() => {
    if (chartType === 'Daily') {
      setChartData(dailyData as ChartData);
    } else {
      setChartData(hourlyData as ChartData);
    }
  }, [chartType, dailyData, hourlyData]);

  const handleMultiSelectChangeChartType = (selectedOption: string) => {
    setChartType(selectedOption);
  };

  const handleMultiSelectChangeComponentType = (selectedOption: string) => {
    setAirComponent(selectedOption);
  };

  return {
    handleMultiSelectChangeChartType,
    handleMultiSelectChangeComponentType,
    chartData,
  };
}