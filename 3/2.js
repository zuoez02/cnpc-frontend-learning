const usdExchangeRate = 6.33;   // 美元
const jpyExchangeRate = 0.06;   // 日元
const enrExchangeRate = 7.81;   // 欧元
const rubExchangeRate = 0.11;   // 卢布
const chfExchangeRate = 6.65;   // 法郎

function exchangeToCHY (type, number) {
  if (type === '美元') {
    return number * usdExchangeRate;
  } else if (type === '日元') {
    return number * jpyExchangeRate;
  } else if (type === '欧元') {
    return number * enrExchangeRate;
  } else if (type === '卢布') {
    return number * rubExchangeRate;
  } else if (type === '法郎') {
    return number * chfExchangeRate;
  } else {
    console.log('不支持的货币类型');
  }
}

console.log(exchangeToCHY('美元', 100));
console.log(exchangeToCHY('日元', 100));
console.log(exchangeToCHY('欧元', 100));
console.log(exchangeToCHY('卢布', 100));
console.log(exchangeToCHY('法郎', 100));
