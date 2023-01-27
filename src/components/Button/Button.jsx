import cn from 'classnames';

export default function Button({
  image,
  text,
  action,
  type = 'button',
  ...restProps
}) {
  return (
    <button className="" type={type} onClick={action} {...restProps}>
      {image && <img src={image} alt={text} />}
      {text}
    </button>
  );
}
