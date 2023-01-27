// import DepartmentIcon from '../assets/images/faculties-icon.svg';
// import UniversityIcon from '../assets/images/university-icon.svg';
import { HiBookOpen, HiAcademicCap } from 'react-icons/hi';
import { IconContext } from 'react-icons';

export const menuConfig = [
  {
    name: 'University',
    link: '/',
    image: (
      <IconContext.Provider
        value={{
          color: 'var(--clr-primary)',
          size: '24px',
        }}
      >
        <HiBookOpen />
      </IconContext.Provider>
    ),
  },

  {
    name: 'Departments',
    link: '/',
    image: (
      <IconContext.Provider
        value={{
          color: 'var(--clr-primary)',
          size: '24px',
        }}
      >
        <HiAcademicCap />
      </IconContext.Provider>
    ),
  },
];
