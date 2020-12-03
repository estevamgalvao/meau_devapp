export const WhoAreLogged = (userlog, flag) => {
  let userlogged = '';
  console.log('Funcao,', userlog, '! Youre in.');
  console.log('Funcao,', flag, '! Youre in.');

  if (flag === 1) {
    userlogged = userlog;
    console.log('FuncaoIF,', userlogged, '! Youre in.');
  } else {
    console.log('FuncaoElse,', userlogged, '! Youre in.');
    return userlogged;
  }
};
