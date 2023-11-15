import Chart from 'react-google-charts';
import styles from '../Button/Button.module.scss';
import MultiSelectButton from '../MultiSelectButton/MultiSelectButton';
import useChart from 'hooks/useChart';

const MyChart = () => {
  const { handleMultiSelectChangeChartType, handleMultiSelectChangeComponentType, chartData } = useChart();

  if (chartData) {
    return (
      <>
        <div className={styles.chartType}>
          <MultiSelectButton options={['Daily', 'Hourly']} onChange={handleMultiSelectChangeChartType} />
        </div>
        <div className={styles.chart}>
          <Chart
            chartType="ColumnChart"
            data={chartData}
            width="100%"
            height="500px"
            legendToggle
            options={{
              legend: { position: 'none' },
              colors: ['#2F113D'],
              backgroundColor: '#F2EEFC',
            }}
          />
        </div>
        <MultiSelectButton options={['AQI', 'PM2.5', 'PM10', 'NO2']} onChange={handleMultiSelectChangeComponentType} />
      </>
    );
  } else {
    return <p>There is no chart data</p>;
  }
};

export default MyChart;