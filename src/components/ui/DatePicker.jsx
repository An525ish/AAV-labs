import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarIcon from '../icons/Calendar';

const timezones = [
    { label: 'EST', offset: -5 },
    { label: 'CST', offset: -6 },
    { label: 'PST', offset: -8 },
    // Add more timezones as needed
];

const DatePickerComponent = ({ defaultDate, defaultTimezone = 'EST' }) => {
    const [selectedDate, setSelectedDate] = useState(defaultDate || null);
    const [selectedTimezone, setSelectedTimezone] = useState(
        timezones.find((tz) => tz.label === defaultTimezone) || timezones[0]
    );
    const datePickerRef = useRef(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const openDatePicker = () => {
        datePickerRef.current.setOpen(true);
    };

    return (
        <div className="relative bg-secondary/70 rounded-lg">
            <div className="flex items-center p-1 border border-secondary rounded-lg">
                <div className="flex items-center mr-2">
                    <select
                        value={selectedTimezone.label}
                        onChange={(e) =>
                            setSelectedTimezone(timezones.find((tz) => tz.label === e.target.value))
                        }
                        className="rounded-md text-sm outline-none"
                    >
                        {timezones.map((tz) => (
                            <option className='cursor-pointer' key={tz.label} value={tz.label}>
                                {tz.label}
                            </option>
                        ))}
                    </select>
                </div>
                <DatePicker
                    ref={datePickerRef}
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="- EEE, MMM d, yyyy -"
                    className="w-full bg-secondary/70 outline-none text-body-subtext text-sm"
                />
                <span className="ml-2 text-gray-500 cursor-pointer" onClick={openDatePicker}>
                    <CalendarIcon className="w-6 h-6 " />
                </span>
            </div>
        </div>
    );
};

export default DatePickerComponent;