import { FC } from 'react';
import s from './Mark.module.css';

interface MarkProps {
  name: string;
  time: number;
  active: number;
  leftMargin: number;
}

const Mark: FC<MarkProps> = ({ name, time, active, leftMargin }) => {
  return (
    <div className={s.mark}>
      <div className={s.label}>{name}</div>
      <div className={s.time}>
        <div
          className={s.active}
          style={{ width: active + '%', marginLeft: leftMargin + '%' }}
        >
          {time}
        </div>
      </div>
    </div>
  );
};

export default Mark;
