export default function MenuItem({ image, link, name }) {
  return (
    <li>
      <a href={link}>
        <img src={image} alt={name} />
        {name}
      </a>
    </li>
  );
}
