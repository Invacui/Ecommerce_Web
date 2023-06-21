import imb from '../../Drawables/LSI/S.jpg';
import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [PassWord,setPassWord]= useState('');
    const [fname,setfname]= useState('');
    const [CPass,setCPass]= useState('');
    const [Phone,setPhone]= useState('');

const passwordMatch = PassWord === CPass;
const passwordStrength = calculatePasswordStrength(PassWord);



    const SignupFn = async (e) =>{
        e.preventDefault();
        console.log('SignupFn function called');
        const res = await fetch('/signup',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                    email,PassWord,fname,CPass,Phone,
            }),
        });
        
        const data = await res.json();

      if (res.status === 400 || !data) {
        window.alert('SignUp Failed');
        console.log('Opps! Failed to SignUp');
      } else {
        window.alert('SignUp Successful');
        console.log('Success! SignUp');
        navigate('/login');
      }
    }
    
    const handlePhoneChange = (e) => {
        const input = e.target.value;
        // Remove any non-digit characters
        const sanitizedInput = input.replace(/\D/g, '');
        // Limit the input to 10 digits
        const truncatedInput = sanitizedInput.slice(0, 10);
        setPhone(truncatedInput);
      };
    return (
        <div className="container m-auto overflow-hidden">
            <div hidden="" className="fixed inset-0 w-7/12 lg:block">
                <span className="absolute left-6 bottom-6 text-sm">
                    Copyright{" "}
                </span>
                <img src={imb}
                    className='w-full h-full
        object-cover
        blur-sm'
                    alt='bg' />
            </div>
            <div
                hidden=""
                role="hidden"
                className="fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"
            />
            <div className="relative h-full ml-auto lg:w-6/12">
                <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                    <div className="mt-12 grid sm:grid-cols-6 sm:grid-rows-2">
                        <div className="col-span-0">
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-yellow-400 rounded-full" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <p className='p-2 font-extrabold'>ShopNow</p>
                        </div>
                    </div>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2">
                        <button className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                            <div className="flex gap-4 justify-center">
                                <img src="https://raw.githubusercontent.com/Tailus-UI/login-page/a6f7fd38eb2ec7dbe31727b44ba23a9f001936c7/public/images/google.svg" className="w-5" alt="" />
                                <span className="block w-max font-medium tracking-wide text-sm text-blue-700">
                                    Google
                                </span>
                            </div>
                        </button>
                        <button className="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                            <div className="flex gap-4 items-center justify-center text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-5"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                                <span className=" block w-max font-medium tracking-wide text-sm text-white p-1">
                                    Github
                                </span>
                            </div>
                        </button>
                    </div>
                    <div role="hidden" className="mt-12 border-t">
                        <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
                            Or
                        </span>
                    </div>
                    <form method='POST' className="space-y-6 py-6">
                    <input
                                type="text"
                                value={fname}
                                onChange={(e) => setfname(e.target.value)}
                                placeholder="Username"
                                className="w-full py-3 px-6 ring-2 ring-red-400 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                            />
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                className="w-full py-3 px-6 ring-2 ring-red-400 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div >
                            <div className="pb-3 relative">
                                <div className=" pb-3 absolute left-0 top-0 flex items-center h-full pl-2 pointer-events-none">
                                <span className="mr-1">+91</span>
                                </div>
                                <input
                                type="tel"
                                placeholder="Your Phone"
                                value={Phone}
                                className="w-full py-3 px-6 pl-12 ring-2 ring-red-400 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                onChange={handlePhoneChange}
                                />
                            </div>
                            <div classname ="py-3">
                            <div className="py-3 flex flex-col items-start relative">
                                <input
                                type="password"
                                value={PassWord}
                                onChange={(e) => setPassWord(e.target.value)}
                                placeholder="Enter the Password"
                                className="w-full py-3 px-6 ring-2 ring-red-400 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                />
                                {PassWord&&<span
                                className={`absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-600 ${
                                    passwordStrength === 'Weak' ? 'text-red-500': passwordStrength === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                                }`}
                                >{passwordStrength}
                                </span>}
                            </div>
                            </div>
                            <div classname ="py-3">
                            <div className="py-3 flex flex-col items-start relative">
                                <input
                                type="password"
                                value={CPass}
                                onChange={(e) => setCPass(e.target.value)}
                                placeholder="Enter Confirm Password"
                                className="w-full py-3 px-6 ring-2 ring-red-400 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                />
                            {CPass&&<span
                            className={`absolute right-6 top-1/2 transform -translate-y-1/2 ${
                                passwordMatch ? 'text-green-500' : 'text-red-500'
                            }`}
                            >
                            {passwordMatch ? 'Matching' : 'Not Matching'}
                            </span>}
                            </div>
                            </div>
                            <button className="my-3 block w-max py-3 px-6 rounded-xl bg-red-600 hover:bg-red-100 focus:bg-red-200 active:bg-red-400"onClick={SignupFn}>
                                <span className="font-bold block w-max tracking-wide text-sm text-white">
                                    Sign Up
                                </span>
                                
                            </button>
                        </div >
                        <div className='mt-12 grid sm:grid-cols-2 gap-7'>
                            <button type="reset" className="w-max p-3 -mr-3 ">
                                <span className="text-sm tracking-wide text-blue-600">
                                    Forgot password ?
                                </span>
                            </button>
                        
                            <Link to={`/sign-up`} className="w-max p-3 -ml-3">
                                <span className="text-sm tracking-wide text-blue-600">
                                    Create new account
                                </span>
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
    
}
// Helper function to calculate the password strength (example implementation)
const calculatePasswordStrength = (password) => {
    if (password.length < 6) {
      return 'Weak';
    } else if (password.length < 10) {
      return 'Medium';
    } else {
      return 'Strong';
    }
  };

export default SignUp