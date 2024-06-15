import { useState } from 'react';

const TimeInput = () => {
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [isPM, setIsPM] = useState(false);

    const handleHourChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 2);
        const numericValue = parseInt(value, 10);
        if (numericValue > 12) {
            setHour('12');
        } else {
            setHour(value);
        }
    };

    const handleMinuteChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 2);
        const numericValue = parseInt(value, 10);
        if (numericValue > 59) {
            setMinute('59');
        } else {
            setMinute(value);
        }
    };

    const togglePeriod = () => {
        setIsPM(!isPM);
    };

    return (
        <div className="flex items-center">
            <div className="flex items-center mr-2">
                <input
                    type="text"
                    value={hour}
                    placeholder='00'
                    onChange={handleHourChange}
                    maxLength={2}
                    className="w-10 h-8 text-center bg-secondary/70 border border-secondary text-body-subtext rounded-md outline-none"
                />
                <span className="mx-2">:</span>
                <input
                    type="text"
                    value={minute}
                    placeholder='00'
                    onChange={handleMinuteChange}
                    maxLength={2}
                    className="w-10 h-8 text-center bg-secondary/70 border border-secondary text-body-subtext rounded-md outline-none"
                />
            </div>
            <div className="flex border border-primary/40 rounded-md ml-2">
                <button
                    onClick={togglePeriod}
                    className={`px-4 py-1 rounded-l-md ${isPM ? 'bg-white-pure text-primary' : 'bg-primary/50 text-white-pure '
                        }`}
                >
                    AM
                </button>
                <button
                    onClick={togglePeriod}
                    className={`px-4 py-1 rounded-r-md ${isPM ? 'bg-primary/50 text-white-pure' : 'bg-white-pure text-primary'
                        }`}
                >
                    PM
                </button>
            </div>
        </div>
    );
};

export default TimeInput;