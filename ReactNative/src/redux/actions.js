//Action creators

export const createSetPersonAction = (personData) => {
    return {
      type: "setPersonData",
      value: personData,
    };
  };

export const createLoginUserAction = (userData) => {
  return {
    type: "loginUser",
    value: userData,
  };
};