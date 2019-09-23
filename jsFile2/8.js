const wakeup = ms => {
  setTimeout( () => { console.log('起きた'); }, ms );
};

const greet = () => {
  console.log('おやすみ');
  wakeup(2000);
  console.log('おはよう！');
}

greet();