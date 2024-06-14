const InputField = ({ name, type, placeholder, className, register, validate, ...rest }) => {
    return (
        <>

            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`px-4 py-2 rounded-lg border border-grey-light w-full outline-none ${className}`}
                {...register(name, !!validate && { validate })}
                {...rest}
            />
        </>
    );
};

export default InputField;
