import Modal from "../ui/Modal"

const SuccessModal = ({ closeModal }) => {
    return (
        <Modal onClose={closeModal}>
            <div className="flex items-center gap-2 rounded-full bg-white-pure py-4 px-8">
                <div>
                    <img src="/icons/Featured-icon.svg" alt="" />
                </div>

                <div>
                    <p className="text-green text-2xl font-medium mb-1">Congratulations!</p>
                    <p className="text-sm"><span className="font-medium text-base">GET W1 BST UMD 200</span> is ready to use</p>
                </div>
            </div>
        </Modal>
    )
}

export default SuccessModal