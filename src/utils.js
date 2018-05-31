export const getRandomNum = (min, max) => Math.floor(Math.random() * max) + min;

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};
