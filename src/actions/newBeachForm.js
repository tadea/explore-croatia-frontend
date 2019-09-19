export const updateNewBeachForm = (name, value) => {
  return {
    type: "UPDATE_NEW_BEACH_FORM",
    formData: { name, value }
  };
};
