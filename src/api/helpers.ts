import { AQIcalcData, HistoryData, HistoryDataValue, StationData } from "global";
import moment from "moment";

export const BASE_URL = 'https://api.nilu.no/';
export const DATE_TO = moment(new Date(Date.now())).format("YYYY-MM-DD");
export const DATE_FROM = moment(new Date(Date.now())).subtract(7, "days").format("YYYY-MM-DD");
export const DAILY_FORMAT = "Do MMM";
export const HOURLY_FORMAT = "DD.MM h:mm a";

export const formatCurrentStationData = (data: StationData[]) => {
  const result = data?.reduce((prev: StationData, current: StationData) => {
    return prev.value > current.value ? prev : current;
  });
  return result;
};

export const formatStationNameData = (data: StationData[]) => {
  const formattedData = data?.map((station) => station.station);
  return formattedData;
};

export const formatDate = (dateTime: string, format: string) => {
  return moment(dateTime).format(format);
};

export const createChartDataArray = (data: HistoryData[], dateFormat: string, component: string) => {
  const result = Object.entries(
    data.reduce(
      (acc: AQIcalcData, curr: HistoryData) => {
        curr.values.forEach((value: HistoryDataValue) => {
          const date = formatDate(value.dateTime, dateFormat);
          if (component === 'AQI' || curr.component === component) {
            if (!acc[date] || acc[date].value < value.value) {
              acc[date] = { component: curr.component, value: value.value };
            }
          }
        });
        return acc;
      },
      {}
    ) as AQIcalcData
  ).map(([date, { value }]) => [date, value]);

  result.unshift(['date', component ]);

  return result;
};