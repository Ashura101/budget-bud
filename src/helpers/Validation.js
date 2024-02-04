const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PHONE_REGEX = /^(\d{1})?\d{10}$/;
const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/;
// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

//By using this function, you can validate phone numbers entered in this format:
//(123) 456-7890
//(123)456-7890
//123-456-7890
//1234567890

const DECIMAL_REGEX = /^\d+(\.\d{1,2})?$/;
const empty = input => {
  return space(input) == '' || space(input) == 0 || space(input) == null;
};

const space = input => {
  return input ? input.trim() : null;
};

const email = input => {
  return !EMAIL_REGEX.test(input);
};

const password = input => {
  return !PASSWORD_REGEX.test(input);
};

const phone = input => {
  return !PHONE_REGEX.test(removeMasking(input));
};

const decimal = input => {
  return !DECIMAL_REGEX.test(input);
};

const errorDisplay = (msg, callback) => {
  return callback(msg);
};

const removeMasking = data => {
  let removePlus = data.replace('+', '');
  let value = removePlus.replace('(', '');
  let newNo = value.replace(')', '');
  let space = newNo.replace(' ', '');
  let dash = space.replace('-', '');
  return dash;
};
const checkIsPhone = value => /^[0-9]+$/.test(value);

export const Validate = {
  space,
  email,
  phone,
  password,
  empty,
  errorDisplay,
  decimal,
  checkIsPhone,
};
