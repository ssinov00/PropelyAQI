import styles from './Button.module.scss';
import { ButtonProps } from 'global';

const Button = ({ onClick, disabled, children, variant }: ButtonProps) => {
  const classes = `${styles.button} ${variant ? styles[variant] : ''}`;

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;