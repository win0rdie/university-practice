export default function MenuItem({ image, link, name }) {
  return (
    <li>
      <a href={link}>
        {image} {name}
      </a>
    </li>
  );
}
