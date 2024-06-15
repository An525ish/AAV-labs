import { useState } from 'react';
import DropdownIcon from '../icons/Dropdown';

const Dropdown = ({ options, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(name);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedItem(option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-lg border border-secondary shadow-sm pr-2 pl-6 py-1.5 text-sm bg-secondary/70 text-body-subtext hover:text-body focus:outline-none capitalize"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                >
                    {selectedItem}
                    <DropdownIcon className={`ml-auto fill-grey-dark h-5 w-5 transition-transform ${isOpen && 'rotate-180'}`} />
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right bg-white-pure absolute right-0 mt-2 w-full rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="" role="none">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className="text-body-subtext block px-4 py-1 hover:bg-secondary cursor-pointer text-sm"
                                role="menuitem"
                                tabIndex="-1"
                                id={`menu-item-${index}`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
