import classes from "./navigation.module.css";
import { Fragment } from "react";

export const Navigation = () => {
  return (
    <Fragment>
      <div className={classes.navigation}>
        나는 내비
        <li className={classes.desc}>외부링크 달건데 꼽냐?;</li>
      </div>
      <br></br>
      <br></br>
      {/* <div className={classes.hidden}>
        <p>
          <a href="#">뭔데요?</a>
        </p>
        <p>
          <a href="#">왜요?</a>
        </p>
        <p>
          <a href="#">할말없어요?</a>
        </p>
        <p>
          <a href="#">꺼져요;</a>
        </p>
      </div> */}
    </Fragment>
  );
};
