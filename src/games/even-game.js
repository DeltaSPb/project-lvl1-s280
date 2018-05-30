export const rule = 'Answer "yes" if number odd otherwise answer "no".';
export const isEven = num => num % 2 === 0;
export const getQuestion = () => Math.floor(Math.random() * 100);
export const getCorrectQuestion = question => (isEven(question) ? 'yes' : 'no');
