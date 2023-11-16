import styles from './Typography.module.scss';
import { TypographyProps } from 'global';

const Typography = ({ variant, color, className, children } : TypographyProps) => {
  const Tag = variant === 'h1' ? 'h1' :
              variant === 'h2' ? 'h2' :
              variant === 'h3' ? 'h3' :
              variant === 'h4' ? 'h4' :
              variant === 'h5' ? 'h5' :
              variant === 'h6' ? 'h6' :
              variant === 'subtitle1' ? 'h6' :
              variant === 'subtitle2' ? 'span' :
              variant === 'body1' ? 'span' :
              variant === 'body2' ? 'span' :
              'span';

  const classes = `${variant ? styles[variant]: ''} ${color ? styles[color] : ''} ${className}`;

  return (
    <Tag className={classes}>
      {children}
    </Tag>
  );
};

export default Typography;