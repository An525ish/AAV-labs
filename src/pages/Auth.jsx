import Login from '@/components/auth/Login';

export default function Auth() {

    return (
        <div className="h-[100vh] bg-primary grid place-items-center p-12">
            <div className='flex h-[30rem] w-[23rem]'>
                <div className='flex flex-col justify-between h-full'>
                    <Login />
                </div>
            </div>
        </div>
    )
}