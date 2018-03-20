const exchangeRate = 6.33;

const yuanConvertToDollar = (yuan) => {
  return Math.floor(yuan / exchangeRate);
};

const dollarConvertToYuan = (dollar) => {
  return dollar * exchangeRate;
};
