import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import '../assets/Cal.css';

export const Cal = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='ml-2'>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};
