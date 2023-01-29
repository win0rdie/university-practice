import { StyledSection } from './Section.styled';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Section({
  image,
  title,
  children,
  isRightPosition,
  isColumn,
}) {
  return (
    <StyledSection isColumn={isColumn}>
      <h2
        className={cn('section-title', {
          'title-right': isRightPosition,
        })}
      >
        {image && <img src={image} alt={title} />}
        {title}
      </h2>
      <div className="section-row">{children}</div>
    </StyledSection>
  );
}

Section.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isRightPosition: PropTypes.bool,
  isColumn: PropTypes.bool,
};
