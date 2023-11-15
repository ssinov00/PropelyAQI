import styles from './Location.module.scss';
import Typography from 'components/Typography/Typography';
import MyChart from 'components/MyChart/MyChart';
import useLocation from 'hooks/useLocation';
import Button from 'components/Button/Button';

const Location = () => {
  const { data, handleBack } = useLocation();

  if (data) {
    return (
      <>
        <div className={styles.back}><Button onClick={handleBack} variant='text'>Back</Button></div>
        <div className={styles.wrapper}>
          <div className={styles.currentInfo}>
            <Typography variant='h2' color='primary'>{data.station}</Typography>
            <Typography variant='body1' color='primary'>Air quality index</Typography>
            <Typography variant='h1' color='primary'>{Math.round(data.value)}</Typography>
            <Typography variant='body1' color='primary'>µg/m³</Typography>
            <Typography variant='body1' color='primary'>Main pollutant <span style={{fontWeight:'bold'}}>{data.component}</span></Typography>
          </div>
          <div className={styles.historyInfo}>
            <Typography variant='body1' color='primary'>Historical data from last 7 days</Typography>
            <MyChart />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <Typography variant='body1' color='primary'>No data available</Typography>
      </div>
    );
  }
};

export default Location;