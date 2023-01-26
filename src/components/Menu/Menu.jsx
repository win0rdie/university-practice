import { menuConfig } from 'components/constants/menu.config';
import MenuItem from './MenuItem';

export default function Menu() {
  return (
    <nav>
      <ul>
        {menuConfig.map(({ name, image, link }) => (
          <MenuItem key={name} name={name} image={image} link={link} />
        ))}
        {/* <li>
          <a href="#">University</a>
        </li>
        <li>
          <a href="#">Departments</a>
        </li> */}
      </ul>
    </nav>
  );
}
