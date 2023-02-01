import React from "react";

const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPosts / postsPerPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="mt-10 text-inherit">
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
