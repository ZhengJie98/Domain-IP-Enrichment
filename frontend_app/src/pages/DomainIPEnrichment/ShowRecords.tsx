// import React from 'react';

// type Props = {};

// const ShowRecords = (props: Props) => {
//   return (
//     <div>Func1</div>
//   );
// };

// export default ShowRecords;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Todo {
    _id: string;
    as_owner: string;
    // title: string;
    // completed: boolean;
  }
  
  const ShowRecords = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
    useEffect(() => {
      const fetchTodos = async () => {
        try {
          console.log('fetching todos...');
        
          const response = await axios.get<{ todos: Todo[] }>('http://localhost:5000/todos');
          console.log("response:", response)
        //   setTodos(response.data?.todos || []);
        // console.log(response.data?.todos || [])
          return response.data?.todos || [];
        // return response
        } catch (error) {
          console.log(error);
          return [];
        }
      };
  
      const setTodosAsync = async () => {
        const fetchedTodos = await fetchTodos();
        console.log("Todo1:", fetchedTodos);
        setTodos(fetchedTodos);
        console.log("Todo2:", fetchedTodos);
      };
      
  
      setTodosAsync();
    }, []);
  
    useEffect(() => {
      console.log('todos:', todos);
    }, [todos]);
  
    return (
      <div>
        {todos && todos.length > 0 ? (
          <ul>
            {todos.map((todo) => (
              <li key={todo._id}>{todo.as_owner}</li>
            ))}
          </ul>
        ) : (
          <p>No todos found.</p>
        )}
      </div>
    );
  };
export default ShowRecords;
