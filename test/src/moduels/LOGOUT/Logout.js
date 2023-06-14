import React, { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await fetch('/logout', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (response.status !== 200) {
          throw new Error(response.error);
        }

        // Redirect to the login page
        window.location.href = '/login';
      } catch (error) {
        console.log(error);
      }
    };

    logoutUser();
  }, []);

  return <div>Logout</div>;
};

export default Logout;