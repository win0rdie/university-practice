import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function MenuItem({ image, link, name }) {
  return (
    <li>
      <NavLink to={link}>
        {image} {name}
      </NavLink>
    </li>
  );
}

MenuItem.propTypes = {
  image: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
