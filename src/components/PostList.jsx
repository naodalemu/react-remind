import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList({ onStopPosting, isPosting }) {
    const [posts, setPosts] = useState([])

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

  return (
    <>
    {isPosting ? <Modal onClosingModal={onStopPosting}> <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} /> </Modal> : null }
    {posts.length > 0 ? <ul className={classes.posts}>
        {posts.map((post) => <Post key={post.body} author={post.name} body={post.body} />)}
      </ul> : <div style={{ textAlign: "center", color: "#333" }}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
        </div>}
    </>
  );
}

export default PostList;
