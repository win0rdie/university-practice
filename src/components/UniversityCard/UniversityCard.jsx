import css from './UniversityCard.module.css';
import { Paper } from 'components';
import UniversityImg from '../../assets/images/mock-university.svg';
import EditImg from '../../assets/images/edit.svg';
import DeleteImg from '../../assets/images/delete.svg';

export default function UniversityCard({ name, onEdit, onDelete }) {
  return (
    <Paper classes={css.container}>
      <img
        className={css.universityImg}
        src={UniversityImg}
        alt="University Img"
      />
      <span className={css.title}>University</span>
      <h3 className={css.name}>{name}</h3>
      <div className={css.controls}>
        <button
          className={`${css.btn} ${css.editBtn}`}
          type="button"
          onClick={onEdit}
        >
          <img src={EditImg} alt="Edit Img" />
        </button>
        <button
          className={`${css.btn} ${css.deleteBtn}`}
          type="button"
          onClick={() => onDelete()}
        >
          <img src={DeleteImg} alt="Delete Img" />
        </button>
      </div>
    </Paper>
  );
}
