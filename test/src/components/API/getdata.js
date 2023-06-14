const getdata = async () => {
  try {
    const response = await fetch('/DATAFEndpoint', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    if (response.ok) {
      const data = await response.json();
      return data; // Return the fetched data
    } else {
      throw new Error(`Failed to fetch cart data. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error while fetching cart data:', error);
    throw error;
  }
};

export default getdata;
