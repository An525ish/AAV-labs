const Configuration = () => {

    return (
        <div>
            <div className="flex justify-between items-center px-4 py-4 border-b-[3px] border-secondary">
                <p className="text-xl font-medium">Configuration</p>

                <p className="font-medium">
                    <span>Home</span>
                    <span className="mx-8">▶</span>
                    <span className="text-primary">Configuration</span>
                </p>
            </div>

            <div className="relative h-[80vh]">
                <div className="w-full h-full grid place-items-center">
                    <img src="/images/empty.svg" alt="no-plan" className="w-60" />
                </div>
            </div>
        </div>
    )
}

export default Configuration