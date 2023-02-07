import GeneralCardItem from './GeneralCardItem';
import { StyledList } from './GeneralCardItem.styled';

export default function GeneralCardList({ listData, deleteCard, editCard }) {
  return (
    <StyledList>
      {listData.length > 0 &&
        listData.map(({ text, relation, id }) => (
          <GeneralCardItem
            id={text}
            key={id}
            relation={relation}
            text={text}
            deleteCard={deleteCard}
            editCard={editCard}
          />
        ))}
    </StyledList>
  );
}
