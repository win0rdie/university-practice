import { Paper } from 'components';
import { ColumnItem, Container } from './TutorsItem.styled';
import PhoneImg from '../../assets/images/phone.svg';
import MailImg from '../../assets/images/mail.svg';
import LocationImg from '../../assets/images/pin.svg';

export default function TutorsItem({
  firstName,
  lastName,
  patronymic,
  phone,
  city,
  options,
  email,
}) {
  return (
    <Paper>
      <Container>
        <ColumnItem>
          <span>{firstName}</span>
          <span>{lastName}</span>
          <span>{patronymic}</span>
        </ColumnItem>
        <ColumnItem>
          <span>
            <img src={PhoneImg} alt="Phone Img" />
            {phone}
          </span>
          <span>
            <img src={MailImg} alt="Mail Img" />
            {email}
          </span>
          <span>
            <img src={LocationImg} alt="Location Img" />
            {city}
          </span>
        </ColumnItem>
        <ColumnItem>
          <p>{options}</p>
        </ColumnItem>
      </Container>
    </Paper>
  );
}
