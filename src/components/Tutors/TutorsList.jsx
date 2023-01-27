import TutorsItem from './TutorsItem';

export default function TutorsList({ tutors }) {
  return tutors.map(tutor => <TutorsItem key={tutor.phone} {...tutor} />);
}
