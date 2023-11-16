import { useFetchChartData } from "api";
import { DATE_FROM, DATE_TO, DAILY_FORMAT, HOURLY_FORMAT } from "api/helpers";
import { ChartData } from "global";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useChart() {
  const { locationName } = useParams<{ locationName: string }>();
  const [chartType, setChartType] = useState<string>('Daily');
  const [airComponent, setAirComponent] = useState<string>('AQI');
  const [chartData, setChartData] = useState<ChartData>([]);
  const [meantype, setMeantype] = useState<number>(2);
  const [dateFormat, setDateFormat] = useState<string>(DAILY_FORMAT);
  const { chartDataAPI } = useFetchChartData(meantype, (locationName as string), DATE_FROM, DATE_TO, dateFormat, airComponent);

  useEffect(() => {
    if (chartType === 'Daily') {
      setMeantype(2);
      setDateFormat(DAILY_FORMAT);
      setChartData(chartDataAPI as ChartData);
    } else {
      setMeantype(1);
      setDateFormat(HOURLY_FORMAT);
      setChartData(chartDataAPI as ChartData);
    }
  }, [chartType, chartDataAPI]);

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