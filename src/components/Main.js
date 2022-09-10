import classes from "./main.module.css";
import { Article } from "./Article";

export const Main = () => {
  return (
    <div className={classes.main}>
      <div className={`${classes.split} ${classes.left}`}>
        <div className={classes.centered}>
          <img
            src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="left-box"
          />
          <h2>내가 왼쪽</h2>
        </div>
      </div>
      <div className={`${classes.split} ${classes.right}`}>
        <Article />
      </div>
    </div>
  );
};
