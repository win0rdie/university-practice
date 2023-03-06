import { Button, Section } from 'components';
import { useMemo } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

function DepartmentDetails({ departments = [] }) {
  const navigate = useNavigate();
  const { departmentId } = useParams();
  const department = useMemo(
    () => departments.find(({ id }) => id === departmentId),
    [departmentId, departments]
  );
  return (
    department && (
      <>
        <Section title={department.text}>
          <Button
            text="Description"
            action={() => {
              navigate('description');
            }}
          />
          <Button
            text="History"
            action={() => {
              navigate('history');
            }}
          />
        </Section>
        <Outlet />
      </>
    )
  );
}

export default DepartmentDetails;
