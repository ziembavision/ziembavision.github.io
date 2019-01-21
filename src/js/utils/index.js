const getRandomInt = (max) => 
	Math.floor(Math.random() + Math.floor(max));

const debounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);
    
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
};

export {
	getRandomInt,
	debounce
};