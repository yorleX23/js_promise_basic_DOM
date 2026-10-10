'use strict';

function onSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';

  document.body.append(div);
}

function onError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';

  document.body.append(div);
}

// eslint-disable-next-line promise/param-names
const promise1 = new Promise((...args) => {
  const resolve = args[0];
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

// eslint-disable-next-line promise/param-names
const promise2 = new Promise((...args) => {
  const reject = args[1];

  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(onSuccess).catch(onError);
promise2.then(onSuccess).catch(onError);
