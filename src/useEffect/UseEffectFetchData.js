import React, { useEffect, useState } from "react";

let postURL = "https://jsonplaceholder.typicode.com/posts";
let userURL = "https://jsonplaceholder.typicode.com/users";

const UseEffectFetchData = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  //posts api
  //   const getPosts = async () => {
  //     let resp = await fetch(postURL);
  //     let posts = await resp.json();
  //     console.log(posts);
  //   };
  const getPosts = async () => {
    try {
      let resp = await fetch(postURL);
      let posts = await resp.json();
      console.log(posts);
      setPosts(posts);
    } catch (err) {
      console.log(err);
    }
  };

  getPosts();

  useEffect(() => {
    getPosts();
  }, []);

  // users api
  async function getUsers() {
    let response = await fetch(userURL);
    let users = await response.json();
    // console.log(users);
    setUsers(users);
  }

  //   getUsers();

  return (
    <div>
      <h1>UseEffectFetchData</h1>

      <div className="container">
        <div className="row gy-3">
          {posts.map((post) => {
            return (
              <div className="col-md-4" key={post.id}>
                <PostCard {...post} />
              </div>
            );
          })}
        </div>
      </div>
      {/* {posts.map((post) => {
        return (
          <div key={post.id}>
            <PostCard {...post} />
          </div>
        );
      })} */}
    </div>
  );
};

const PostCard = (post) => {
  const { title, body } = post;
  return (
    <div classname="card" style={{ width: "18rem", border: "2px solid blue" }}>
      <div classname="card-body">
        <h5 classname="card-title">{title}</h5>
        <p classname="card-text">{body}</p>
      </div>
    </div>
  );
};

export default UseEffectFetchData;
