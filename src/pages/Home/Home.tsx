import Search from '../../components/Search/Search';
import Button from '../../components/Button/Button';
import styles from './Home.module.scss';
import Typography from 'components/Typography/Typography';
import Logo from '../../assets/img/logo.svg';
import useHome from 'hooks/useHome';
import Image from 'components/Image/Image';

const Home = () => {
  const { data, handleButtonClick, handleLocationSelected, isDisabled } = useHome();

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image classes={styles.svg} src={Logo} alt="Propely logo" />
      </div>
      <Typography variant="body1" color="primary">Choose station in Oslo</Typography>
      <Search data={data} onLocationSelected={handleLocationSelected} />
      <Button children="Check air quality" variant="primary" onClick={handleButtonClick} disabled={isDisabled} />
    </div>
  );
};

export default Home;