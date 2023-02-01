import React, { useState, useEffect } from "react";
import InitialDetails from "./components/initialDetails";
import Paginate from "./components/Paginate";
import axios from "axios";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="text-center m-5">
      <h1 className="font-bold mb-5 text-xl font-mono">Pagination of data</h1>
      <InitialDetails posts={currentPosts} loading={loading} />
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <hr />
      <h1 className="text-xl font-mono font-bold">Search Here</h1>
      <input
        type="search"
        className="bg-gray-200 border-rounded"
        onChange={(e) => setSearch(e.target.value)}
      />

      {posts.map((posts, i) => {
          return search.toLowerCase() === ""
            ? posts
            : posts.first_name.toLowerCase().includes(search);
        })
        .map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            
          </tr>
        ))}

    </div>
  );
};

export default App;
