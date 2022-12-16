import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTodos(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { todos, setTodos };
};

export default useFetch;
