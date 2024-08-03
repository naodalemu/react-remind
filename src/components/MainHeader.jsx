import { MdPostAdd, MdMessage } from "react-icons/md"
import classes from "./MainHeader.module.css"

function MainHeader({ onOpeningModal }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <div>
        <button className={classes.button} onClick={onOpeningModal}>
            <MdPostAdd size={18} />
            New Post
        </button>
      </div>
    </header>
  );
}

export default MainHeader;
