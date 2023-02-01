import { useState } from "react";

  
  const TableView = () => {
    const [data, getData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";

    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        getData(response);
      });
  
  return (
    <div className="m-5 flex flex-col items-center">
      <h1 className="font-mono text-xl">Data in TableView</h1>
      <tbody>
      <hr />
        <tr className='grid grid-cols-2 divide-x'> 
          {/* <th>User ID</th> */}
          <th className="items-center">ID</th>
          <th>Title</th>
          {/* <th>Descripation</th> */}
        </tr>
        <hr />
        {data.map((item, i) => (
          <tr key={i} className='grid grid-cols-2 divide-x'>
            {/* <td>{item.userId}</td> */}
            <td>{item.id}</td>
            <td>{item.title}</td>
            {/* <td>{item.body}</td> */}
          </tr>
        ))}
        <hr />

      </tbody>
    </div>
  );
 }

export default TableView;
