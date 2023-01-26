import Menu from 'components/Menu/Menu';
import UserImg from '../../assets/images/mock-user-ava.svg';

export default function Sidebar() {
  return (
    <aside>
      <div>Logo</div>
      <Menu />

      <div>
        <img src={UserImg} alt="foto" />
        <span>Bill Gates</span>
      </div>
    </aside>
  );
}
