import { Paper } from 'components';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function GeneralCardItem({ text, isOpenMenu }) {
  return (
    <Paper>
      <li>
        <span>{text}</span>
        <button onClick={isOpenMenu}>
          <BsThreeDotsVertical />
        </button>
      </li>
    </Paper>
  );
}
