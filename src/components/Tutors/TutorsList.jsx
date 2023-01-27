import TutorsItem from './TutorsItem';
import PropTypes from 'prop-types';

export default function TutorsList({ tutors }) {
  return tutors.map(tutor => <TutorsItem key={tutor.phone} {...tutor} />);
}

TutorsList.propTypes = {
  tutors: PropTypes.array.isRequired,
};
