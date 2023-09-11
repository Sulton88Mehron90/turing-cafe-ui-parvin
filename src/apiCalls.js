const getData = (path) => {
    return fetch(`http://localhost:3001/api/v1/${path}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log('There was a problem with the fetch operation: ', error);
      });
  }
  
  export { getData };
  