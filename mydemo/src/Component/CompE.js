import React, { useContext } from 'react';
import { UserContext, JobContext } from '../App';

function CompE() {
  const user = useContext(UserContext);
  const job = useContext(JobContext);

  return (
    <div>
      {user} - {job}
    </div>
  );
}

export default CompE;
