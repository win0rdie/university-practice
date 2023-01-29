import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export default function Button({
  image,
  text,
  action,
  styles,
  type = 'button',
  ...restProps
}) {
  return (
    <StyledButton
      className={styles}
      type={type}
      onClick={action}
      {...restProps}
    >
      {image && <img src={image} alt={text} />}
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  styles: PropTypes.string,
  type: PropTypes.string,
  restProps: PropTypes.any,
};
