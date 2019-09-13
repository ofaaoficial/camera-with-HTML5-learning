const el = e => document.querySelector(e);
const on = (event, callback, el = document) => el.addEventListener(event,callback);