import GeneralCardItem from './GeneralCardItem';

export default function GeneralCardList({ listData, isOpenMenu }) {
  return (
    <ul>
      {listData.length &&
        listData.map(({ text }) => (
          <GeneralCardItem key={text} text={text} isOpenMenu={isOpenMenu} />
        ))}
    </ul>
  );
}
