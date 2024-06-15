
const CalendarIcon = ({ className, ...props }) => {
    return (
        <svg
            className={className}
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="#e9ecf4"
            viewBox="0 0 24 24"
            stroke="grey"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        >
            <path
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
        </svg>
    )
}

export default CalendarIcon