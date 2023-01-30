import { Paper } from 'components';
import { ColumnItem, Container } from './TutorsItem.styled';
import PhoneImg from '../../assets/images/phone.svg';
import MailImg from '../../assets/images/mail.svg';
import LocationImg from '../../assets/images/pin.svg';
import PropTypes from 'prop-types';

export default function TutorsItem({
  firstName,
  lastName,
  patronymic,
  phone,
  city,
  options,
  email,
  deleteTutor,
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
        <ColumnItem>
          <button type="button" onClick={() => deleteTutor(email)}>
            Delete
          </button>
        </ColumnItem>
      </Container>
    </Paper>
  );
}

TutorsItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  patronymic: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  options: PropTypes.string,
  email: PropTypes.string.isRequired,
};
