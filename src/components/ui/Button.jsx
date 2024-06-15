import { cn } from "../../utils/cn";

const getStyles = (variant, disabledBoolean, disabledCustomStyle) => {
    if (disabledBoolean) {
        return cn(' cursor-not-allowed opacity-20', disabledCustomStyle);
    }
    switch (variant) {
        case 'primary':
            return 'bg-primary text-white-pure rounded-lg';
        case 'secondary':
            return 'bg-pink/20 text-primary rounded-lg';
        default:
            return '';
    }
};

function Button({ variant = 'primary', className, children, onClickHandler, disabledBoolean = false, disabledCustomStyle = "", ...props }) {
    //default disabled boolean is false to prevent breaking anything elsewhere
    return (
        <button
            className={cn(
                getStyles(variant, disabledBoolean, disabledCustomStyle),
                'ease-in-out transition active:scale-95 md:hover:scale-95',
                className
            )}
            type="button"
            onClick={onClickHandler}
            disabled={disabledBoolean}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
