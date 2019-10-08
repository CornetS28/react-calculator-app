import Big from 'big.js';

const operate = (numberOne, numberTwo, operator) => {
  const regex = new RegExp('[.]{2,}');

  if (regex.test(numberOne) || regex.test(numberTwo)) {
    return 'error';
  }
  const x = numberOne === null ? Big(0) : Big(numberOne);
  const y = numberTwo === null ? Big(0) : Big(numberTwo);

  switch (operator) {
    case '+':
      return x.plus(y).toString();

    case '-':
      return x.minus(y).toString();

    case 'x':
      return x.times(y).toString();

    case '/':
      if (numberTwo === '0' || numberTwo === null) {
        return "Can't / by 0, Press AC to try again";
      }
      return x.div(y).toString();
     

    case '%':
      return (x / 100) * y;

    default:
      return 'error';
  }
};

export default operate;
