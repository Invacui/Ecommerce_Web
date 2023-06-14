import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getdata from '../API/getdata';

const Header = () => {
  const Nav = useNavigate();
  const [fname, setFname] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getdata();
        console.log(data);

        setFname(data.fname);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Handle the login button click
  const handleLogin = () => {
    Nav('/login');
  };
  const handleLogin1 = () => {
    Nav('/signup');
  };

  return (
    <header className="text-gray-600 body-font shadow-lg" id="header">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-yellow-400 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">ShopNow</span>
        </a>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Trending</a>

        </nav>

        <button className="ml-2 mr-2 inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <strong>Cart</strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* <button
            className="mr-5 hover:text-gray-900"
            onClick={fname ? handleLogin1 : handleLogin}
          >
            <strong>{fname ? fname : 'Login/SignUp'}</strong>
          </button> */}


          <button className="ml-2 mr-2 inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 "onClick={fname ? handleLogin1 : handleLogin}>
            <strong>{fname ? fname : 'Login/SignUp'}</strong>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 "
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

        {fname && (
          <button className="ml-2 mr-2 inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleLogin1}>
            <strong>Logout</strong>
            
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import getdata from '../API/getdata';

// const Header = ({isLoggedIn}) => {
//   console.log("isLoggedIn::",isLoggedIn);
//   const Nav = useNavigate();
//   const [fname, setFname] = useState('');
//   console.log("fname::",fname);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getdata();
//         console.log(data);

//         setFname(data.fname);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Handle the login button click
//   const handleLogin = () => {
//     Nav('/login');
//   };
//   const handleSignup = () => {
//     Nav('/signup');
//   };
//   const handleLogout = () => {
//     Nav('/Logout');
//   };
//   return (
//     <header className="text-gray-600 body-font shadow-lg" id="header">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-10 h-10 text-white p-2 bg-yellow-400 rounded-full"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span className="ml-3 text-xl">ShopNow</span>
//         </a>

//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//           <a className="mr-5 hover:text-gray-900">Trending</a>
//           <button
//             className="mr-5 hover:text-gray-900"
//             onClick={fname ? handleSignup : handleLogin}
//           >
//             <strong>{fname ? fname : 'Login/SignUp'}</strong>
//           </button>
//         </nav>

//         <button className="mr-1 inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//           <strong>Cart</strong>
//           <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="ml-1 w-5 h-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
//               />
//             </svg>

//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-4 h-4 ml-1"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//         </button>

//         {fname && (
//           <button className=" ml-1 inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleLogout}>
//             <strong>Logout</strong>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 w-6 h-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// </svg>

//           </button>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;