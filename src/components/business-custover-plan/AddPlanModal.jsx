import { useState } from "react"
import Button from "../ui/Button"
import DatePickerComponent from "../ui/DatePicker"
import Dropdown from "../ui/Dropdown"
import Modal from "../ui/Modal"
import TimeInput from "../ui/TimeInput"

const AddPlanModal = ({ closeModal, nextStep }) => {

    const [input, setInput] = useState('Production')

    return (
        <Modal onClose={closeModal}>
            <div className="w-[35rem] rounded-xl overflow-hidden">
                <div className="py-2 bg-primary w-full text-white-pure px-4">
                    <p>Add New Cutover Plan Profile</p>
                </div>

                <div className="p-8 bg-white-pure">
                    <div className="w-[calc(50%-1rem)]">
                        <p className="text-sm font-medium my-2">Project Name</p>
                        <Dropdown
                            options={['CASTOR', 'GET', 'MAG']}
                            name={'- Select Project -'}
                        />
                    </div>

                    <div className="w-[calc(50%-1rem)] my-4">
                        <p className="text-sm font-medium my-2">Team</p>
                        <Dropdown
                            options={['Security', 'Finance', 'Admin']}
                            name={'- Select Team -'}
                        />
                    </div>


                    <div className="flex gap-8">
                        <div className="w-full">
                            <p className="text-sm font-medium mb-2">Wave</p>
                            <Dropdown
                                options={['Wave 1', 'Wave 2', 'Wave 3']}
                                name={'- Select Wave -'}
                            />
                        </div>

                        <div className="w-full">
                            <p className="text-sm font-medium mb-2">Cycle</p>
                            <input type="text" className="py-1.5 px-2 bg-secondary/70 border border-secondary rounded-lg outline-none text-sm text-body-subtext w-full" value={input} onChange={(e) => setInput(e.target.value)} />
                        </div>
                    </div>

                    <div className="flex gap-8 my-4">
                        <div className="w-full">
                            <p className="text-sm font-medium mb-2">Start Date</p>
                            <DatePickerComponent defaultDate={new Date()} defaultTimezone="EST" />
                        </div>

                        <div className="w-full">
                            <p className="text-sm font-medium mb-2">Time</p>
                            <TimeInput />
                        </div>
                    </div>

                    <div className="flex gap-8">
                        <div className="w-full">
                            <p className="text-sm font-medium mb-2">Finish Date</p>
                            <DatePickerComponent defaultDate={new Date()} defaultTimezone="EST" />
                        </div>

                        <div className="w-full">
                            <p className="text-sm font-medium mb-2">Time</p>
                            <TimeInput />
                        </div>
                    </div>

                    <div className="flex gap-8 my-4">
                        <div className="w-full">
                            <p className="text-sm font-medium mb-2">Environment</p>
                            <Dropdown
                                options={['XMD', 'PMD', 'YMD']}
                                name={'- Select Environment -'}
                            />
                        </div>

                        <div className="w-full">
                            <p className="text-sm font-medium mb-2">Client</p>
                            <Dropdown
                                options={['50', '100', '500']}
                                name={'- Select Client -'}
                            />
                        </div>
                    </div>

                    <div className="mt-10 text-right">
                        <Button
                            variant="secondary"
                            className={'py-2 px-4 mr-6 text-sm font-semibold'}
                        >
                            Save as Draft
                        </Button>

                        <Button
                            variant="primary"
                            className={'py-2 px-4 text-sm font-semibold'}
                            onClickHandler={nextStep}
                        >
                            Proceed to plan
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default AddPlanModal