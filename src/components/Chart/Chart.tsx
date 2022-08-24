import { FC, useCallback, useEffect, useRef, useState } from 'react';
import Mark from '../Mark/Mark';
import s from './Chart.module.css';

interface IData {
  name: string;
  time: number;
}

const initData = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7.0 },
  { name: 'Deal', time: 3.8 },
];

const Chart: FC = () => {
  const [data, setData] = useState<IData[]>(initData);
  const [parts, setParts] = useState<number[]>([]);

  useEffect(() => {
    const overallTime = data.reduce((pv, i) => pv + i.time, 0);
    setParts(data.map(i => (i.time * 100) / overallTime));
  }, [data]);

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      buttonRef.current?.click();
    }, 31800);
    return () => clearInterval(interval);
  }, []);

  const getRandomNum = useCallback(
    () => Math.floor(Math.random() * 100 + 1) / 10,
    []
  );

  function randomizeTime() {
    setData(prevData => prevData.map(i => ({ ...i, time: getRandomNum() })));
  }

  function calculateLeftMargin(idx: number): number {
    return parts
      .filter((_, partIdx) => idx > partIdx)
      .reduce((pv, v) => pv + v, 0);
  }

  return (
    <div className={s.chart}>
      <h1 className={s.title}>Spent time(seconds)</h1>
      <div>
        {data.map(({ name, time }, idx) => (
          <Mark
            key={name}
            name={name}
            time={time}
            active={parts[idx]}
            leftMargin={calculateLeftMargin(idx)}
          />
        ))}
      </div>

      <button ref={buttonRef} onClick={randomizeTime} className={s.btn}>
        Randomize
      </button>
    </div>
  );
};

export default Chart;
