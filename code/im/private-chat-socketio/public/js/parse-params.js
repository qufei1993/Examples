const query = {
  sender: 'Sender',
  receiver: 'receiver'
};

(function(w) {
  if (!w) {
    return;
  }

  const paramsStr = w.location.search.split('?')[1];
  if (!paramsStr) {
    return;
  }
  const paramsArr = paramsStr.split('&');
  for (let i=0; i<paramsArr.length; i++) {
    const elements = paramsArr[i].split('=')

    if (elements instanceof Array && elements.length > 1) {
      query[elements[0]] = decodeURIComponent(elements[1]);
    }
  }
})(window)