import classes from './Post.module.css';

function Post({ onOpeningModal, author, body }) {
  return (
    <div className={classes.post} onClick={onOpeningModal}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  );
}

export default Post;
