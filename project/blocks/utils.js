function request(method, path) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
      console.log(xhr.readyState);

      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.status);
        }
      }
    });

    xhr.open(method, path);
    xhr.send();
  });
}