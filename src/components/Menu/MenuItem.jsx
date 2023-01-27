import PropTypes from 'prop-types';

export default function MenuItem({ image, link, name }) {
  return (
    <li>
      <a href={link}>
        {image} {name}
      </a>
    </li>
  );
}

MenuItem.propTypes = {
  image: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
