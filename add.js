const validatePhoneNumber = (phoneNumber) => {
  // Solution code here...
  return /^(\+\d{1,2}\s?)1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phoneNumber);
};

let arr = [`(555) 555-5555`,
  `(555)555 5555`,
  `555 555-5555`,
  `555-5555555`,
  `555-555 5555`,
  `555-555-5555 `,
  `555 555 5555`,
  `555555-5555`,
  `5555555555`
]

console.log(

  validatePhoneNumber('abcdefghij'),
  validatePhoneNumber('222 222 2222 ext. 2222'),
  validatePhoneNumber('(222 222-2222'),
  validatePhoneNumber('222 222-2222-'),
  validatePhoneNumber('(222 222- 2222'),
  validatePhoneNumber('(222 222 -2222'),
  validatePhoneNumber('523 555--5555'),
  validatePhoneNumber('55555555555'),
  validatePhoneNumber('55555555555'),
  validatePhoneNumber('55555555555'),
  validatePhoneNumber('55_55_5555')
);
