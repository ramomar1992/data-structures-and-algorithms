const validatePhoneNumber = (phoneNumber) => {
  // Solution code here...
  return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phoneNumber);
};
console.log(validatePhoneNumber('(222 222-2222'));
