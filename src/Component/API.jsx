import React, { useEffect, useState } from "react";
import axios from "axios";

const API = () => {
  const [posts, setPosts] = useState([]);

  //API url
  const url = "https://jsonplaceholder.typicode.com/posts";

  //getting data from api
  const getPosts = async () => {
    try {
      const response = await axios.get(url);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  //posting data to api

  const postDataValue = {
    userId: 101,
    id: 101,
    title: "sunt au provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };

  const postPosts = async () => {
    try {
      await axios.post(url, postDataValue);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(posts);

  return (
    <div>
      <h1>List Items</h1>
      <ul>
        {posts && posts.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
      <br />
      <button onClick={postPosts}>Post data to API</button>
    </div>
  );
};

export default API;
