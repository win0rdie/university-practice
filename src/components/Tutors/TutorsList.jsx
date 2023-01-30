import TutorsItem from './TutorsItem';
import PropTypes from 'prop-types';

export default function TutorsList({ tutors, deleteTutor }) {
  return tutors.map(tutor => (
    <TutorsItem key={tutor.phone} {...tutor} deleteTutor={deleteTutor} />
  ));
}

TutorsList.propTypes = {
  tutors: PropTypes.array.isRequired,
};
