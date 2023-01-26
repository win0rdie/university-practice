import css from './Paper.module.css';

export default function Paper({ children, ...otherProps }) {
  return (
    <div className={css.paper} {...otherProps}>
      {children}
    </div>
  );
}
