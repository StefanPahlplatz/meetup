function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const createMeetupValidation = (values) => {
  const errors = {};
  const requiredFields = ['title', 'description'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    } else if (values[field].length < 6) {
      errors[field] = capitalizeFirstLetter(`${[field]} needs to be at least 6 characters`);
    }
  });

  return errors;
};
