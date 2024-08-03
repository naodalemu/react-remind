import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [dynamicText, setDynamicText] = useState("Dynamic Duka");
  const [dynamicName, setDynamicName] = useState("The dynamic duka");

  function textHandler(event) {
    setDynamicText(event.target.value);
  }

  function nameHandler(event) {
    setDynamicName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: dynamicText,
      name: dynamicName
    };
    onAddPost(postData)
    onCancel();
  }

  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="text">Your Name</label>
          <input type="text" id="name" required onChange={nameHandler} />
        </div> 
        <div>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={textHandler} />
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
