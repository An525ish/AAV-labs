import { useForm } from 'react-hook-form';
import { validatePassword, validateUsername } from '@/utils/validators';
import InputField from '../ui/InputField';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: 'onSubmit' });

    const navigate = useNavigate()


    const onSubmit = async (data) => {
        try {
            console.log(data)
            //   const response = await axios.post('https://your-api-endpoint.com/register', data);
            //   console.log('Registration successful:', response.data);
            navigate('/home')
        } catch (error) {
            console.error('Error registering user:', error);
            // Handle error (e.g., show error message to the user)
        }
    };

    console.log()
    return (
        <div className='w-full bg-white-pure p-8 text-center rounded-3xl'>
            <h2 className='font-medium text-2xl'>Sign In</h2>
            <p className='my-4 text-sm w-[90%] mx-auto text-body/60'>Please enter your <span className='font-medium text-body/70'>Johnson & Johnson</span> network credentials</p>

            {Object.values(errors).length > 0 && (
                <div className="text-primary flex items-center p-2 rounded-md font-medium bg-red-light text-sm my-2">
                    {Object.values(errors).map((error, index) => (
                        <>
                            <div className='w-6'>
                                <div className='w-4 h-4 text-[0.6rem] flex items-center justify-center mr-2 rounded-full border-2 border-primary font-bold'>⨉</div>
                            </div>
                            <p key={index} className=''>{error.message}</p>
                        </>
                    ))}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className=' text-left flex flex-col gap-4 w-full'>
                <label htmlFor="username">
                    Username
                </label>
                <InputField
                    id="username"
                    type="text"
                    name="username"
                    placeholder='Username'
                    register={register}
                    validate={validateUsername}
                />

                <label htmlFor="password">
                    Password
                </label>
                <InputField
                    id={'password'}
                    type="password"
                    name='password'
                    placeholder='Password'
                    register={register}
                    validate={validatePassword}
                />

                <Button
                    type={'submit'}
                    variant='primary'
                    className={'py-2 mt-8 w-40 mx-auto'}
                >
                    Sign In
                </Button>

            </form>
        </div>
    )
}

export default Login