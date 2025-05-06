import React from "react";
import {
  useGetPostQuery,
  useAddPostMutation,
  useGetUserQuery,
} from "../Redux/Slices/API/postApiSlice";

const API_RTK = () => {
  //get posts and get users api call : data is default name
  const { data: posts } = useGetPostQuery();
  console.log(posts);

  const { data: users } = useGetUserQuery();
  console.log(users);

  //add post api call : addPost is name of function in slice
  const [addPost] = useAddPostMutation();

  const postDataValue = {
    userId: 101,
    id: 101,
    title: "sunt au provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };

  const postPosts = async () => {
    try {
      const response = await addPost(postDataValue);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>List Items from API</h1>
      <ul>
        {posts && posts.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
      <br />
      <button onClick={postPosts}>Post data to API</button>
    </div>
  );
};

export default API_RTK;
