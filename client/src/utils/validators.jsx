export const usernamevalidator = (username) => {
  if (username.length < 3) {
    return {
      isValid: false,
      errorMessage: "Username must be at least 3 characters long",
    };
  }
  if (username.length > 20) {
    return {
      isValid: false,
      errorMessage: "Username must be at most 20 characters long",
    };
  }
//   const regex = 
  if (/\s|-|,|\./.test(username)) {
    return {
      isValid: false,
      errorMessage: "Username cannot contain spaces, hyphens, commas, or periods",
    };
  }
  return { isValid: true, errorMessage: "" };
};
