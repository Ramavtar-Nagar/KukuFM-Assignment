"use server";

// Function to fetch data from the API
export const fetchData = async (page = 1) => {
  try {
    // Fetch data from the specified API endpoint with pagination
    const res = await fetch(
      `https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=${page}&lang=english`
    );
    
    // Check if the response is successful
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parse the JSON data from the response
    const data = await res.json();
    
    // Return the parsed data
    return data;
  } catch (error) {
    // Log any errors to the console
    console.error('Failed to fetch data:', error);
    
    // Optionally return an empty object or handle the error as needed
    return {};
  }
};
