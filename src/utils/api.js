const API_BASE_URL = "http://localhost:5000/api";

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to log in");
  }

  return response.json();
};

export const registerUser = async (name, email, password) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
  
    // Parse the server response
    const responseData = await response.json();
  
    // Check if the response is not OK
    if (!response.ok) {
      // Throw the actual error from the server's response
      throw new Error(responseData.message || "An error occurred during registration");
    }
  
    // Return the JSON response if successful
    return responseData;
  };
  