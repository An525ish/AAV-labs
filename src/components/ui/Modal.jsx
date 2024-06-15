const Modal = ({ children, onClose }) => {

    return (
        <div
            className="fixed inset-0 z-50 shadow-white backdrop-brightness-75 flex items-center justify-center"
            onClick={onClose}>

            <div
                className={`relative rounded-2xl py-6 z-30`}
                aria-hidden="true"
                onClick={(e) => e.stopPropagation()}
            >
                <span className="absolute right-4 top-8 text-white-pure font-medium text-lg cursor-pointer" onClick={onClose}>⨉
                </span>

                {children}
            </div>
        </div>
    )
}

export default Modal