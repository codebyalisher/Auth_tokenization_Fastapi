// Function to handle user login and store tokens in cookies
async function loginUser() {
  const response = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "testuser",
      password: "password123",
    }),
  });

  const data = await response.json();
  if (response.ok) {
    // Save access and refresh tokens in cookies
    document.cookie = `access_token=${data.access_token}; path=/; HttpOnly; Secure`;
    document.cookie = `refresh_token=${data.refresh_token}; path=/; HttpOnly; Secure`;
  } else {
    console.error("Login failed:", data.detail);
  }
}

// Function to refresh the access token using the refresh token
async function refreshAccessToken() {
  const refreshToken = getCookie("refresh_token");

  const response = await fetch("http://localhost:8000/auth/refresh_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refresh_token: refreshToken,
    }),
  });

  const data = await response.json();
  if (response.ok) {
    document.cookie = `access_token=${data.access_token}; path=/; HttpOnly; Secure`;
  } else {
    console.error("Failed to refresh token");
  }
}

// Helper function to get cookie value
function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// Function to log the user out by clearing cookies
function logout() {
  document.cookie =
    "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; HttpOnly";
  document.cookie =
    "refresh_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; HttpOnly";
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
}

// Function to track user activity and auto logout after inactivity
let lastInteractionTime = new Date().getTime();

function trackUserActivity() {
  window.addEventListener("mousemove", () => {
    lastInteractionTime = new Date().getTime();
  });

  window.addEventListener("keydown", () => {
    lastInteractionTime = new Date().getTime();
  });

  setInterval(() => {
    const currentTime = new Date().getTime();
    const INACTIVITY_LIMIT = 1800000; // 30 minutes of inactivity (in milliseconds)
    if (currentTime - lastInteractionTime > INACTIVITY_LIMIT) {
      logout();
      alert("You have been logged out due to inactivity.");
    }
  }, 60000); // Check every minute
}

// Call the tracking function on page load
trackUserActivity();
