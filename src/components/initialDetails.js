import React from 'react';

const InitialDetails = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <tbody>
    <hr />
      <tr className='grid grid-cols-2 divide-x'> 
        {/* <th>User ID</th> */}
        <th className="items-center">ID</th>
        <th>Title</th>
        {/* <th>Descripation</th> */}
      </tr>
      <hr />
      {posts.map((posts, i) => (
        <tr key={i} className='grid grid-cols-2 divide-x'>
          {/* <td>{item.userId}</td> */}
          <td>{posts.id}</td>
          <td>{posts.title}</td>
          {/* <td>{item.body}</td> */}
        </tr>
      ))}
      <hr />

    </tbody>
  );
};

export default InitialDetails;