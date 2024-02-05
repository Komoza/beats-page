import { useEffect, useState } from 'react';
import './sale-time.scss';
import { deadline } from '../../data';

export const SaleTimerComponent = () => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = new Date(deadline).getTime() - now;

        if (difference > 0) {
            let hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));

            hours += 24 * days;
            return {
                hours: hours < 10 ? `0${hours}` : hours,
                minutes: minutes < 10 ? `0${minutes}` : minutes,
                seconds: seconds < 10 ? `0${seconds}` : seconds,
            };
        } else {
            return {
                hours: '00',
                minutes: '00',
                seconds: '00',
            };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <section className="timer">
            <div className="timer__left">
                <img
                    className="timer__icon"
                    src="./image/timer.svg"
                    alt="timer icon"
                />
                <p className="timer__text">Hurry up! Sale Ends in</p>
            </div>

            <div className="timer__time time">
                <p className="time__hour">{timeLeft.hours + ' h'}</p>
                <p>:</p>
                <p className="time__min">{timeLeft.minutes + ' m'}</p>
                <p>:</p>
                <p className="time__sec">{timeLeft.seconds + ' s'}</p>
            </div>
        </section>
    );
};
