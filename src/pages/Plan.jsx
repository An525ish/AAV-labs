import AddPlanModal from "@/components/business-custover-plan/AddPlanModal"
import SuccessModal from "@/components/business-custover-plan/SuccessModal"
import Button from "@/components/ui/Button"
import { useState } from "react"

const Plan = () => {
    const [isModal, setIsModal] = useState(false)
    const [step, setStep] = useState(1)

    const handleCreatePlan = () => {
        setIsModal(true)
    }

    const handleNext = () => {
        if (step < Object.keys(planSteps).length) {
            setStep(prev => prev + 1)
        }
    }

    const planSteps = {
        1: AddPlanModal,
        2: SuccessModal
    }

    const CreatePlan = planSteps[step]

    return (
        <div>
            <div className="flex justify-between items-center px-4 py-4 border-b-[3px] border-secondary">
                <p className="text-xl font-medium">Business Cutover Plan</p>

                <p className="font-medium">
                    <span>Home</span>
                    <span className="mx-8">▶</span>
                    <span className="text-primary">Business Cutover Plan</span>
                </p>
            </div>

            <div className="relative h-[80vh]">
                <Button
                    variant="primary"
                    className={'absolute right-4 top-8 py-2 px-4'}
                    onClickHandler={handleCreatePlan}
                >
                    ＋ Add new plan
                </Button>

                <div className="w-full h-full grid place-items-center">
                    {isModal ?
                        <CreatePlan
                            nextStep={handleNext}
                            closeModal={() => setIsModal(false)}
                        />
                        :
                        <img src="/images/empty.svg" alt="no-plan" className="w-60" />
                    }
                </div>
            </div>
        </div>
    )
}

export default Plan