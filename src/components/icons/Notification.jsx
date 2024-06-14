
const NotificationIcon = ({ className, ...props }) => {
    return (
        <svg className={className} {...props} viewBox="0 0 32 32" fill="white" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3067 27.9993C18.0723 28.4035 17.7358 28.7389 17.331 28.9721C16.9261 29.2052 16.4672 29.328 16 29.328C15.5328 29.328 15.0739 29.2052 14.669 28.9721C14.2642 28.7389 13.9277 28.4035 13.6933 27.9993M24 10.666C24 8.54428 23.1571 6.50945 21.6569 5.00916C20.1566 3.50887 18.1217 2.66602 16 2.66602C13.8783 2.66602 11.8434 3.50887 10.3431 5.00916C8.84286 6.50945 8 8.54428 8 10.666C8 19.9993 4 22.666 4 22.666H28C28 22.666 24 19.9993 24 10.666Z" />
        </svg>

    )
}

export default NotificationIcon