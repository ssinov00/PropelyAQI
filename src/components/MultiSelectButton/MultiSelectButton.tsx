import { MultiSelectButtonProps } from 'global';
import Button from '../Button/Button';
import useMultiselect from 'hooks/useMultiselect';
import styles from '../Button/Button.module.scss';

const MultiSelectButton = ({ options, onChange }: MultiSelectButtonProps) => {
  const { handleOptionClick, selectedOption } = useMultiselect(onChange, options[0]);

  return (
    <div className={styles.multiSelect}>
      {options.map((option) => (
        <Button
          key={option}
          variant={selectedOption === option ? 'primary' : 'outlined'}
          onClick={() => handleOptionClick(option)}
          disabled={selectedOption === option}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default MultiSelectButton;