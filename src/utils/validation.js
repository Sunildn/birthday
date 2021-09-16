export const validateName = (name) => {
  if (name) {
    if (name.toString().length < 3) {
      return "Must be Min 3 Characters";
    }
    return null;
  }
  return "Required";
};

export const required = (string) => {
  if (string) {
    return null;
  }
  return "Required";
};

export const validateEmail = (sEmail) => {
  if (sEmail) {
    let reEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!sEmail.match(reEmail)) {
      return "Must be Valid";
    }
    return null;
  }
  return "Required";
};
