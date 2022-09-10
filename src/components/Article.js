import classes from "./article.module.css";

export const Article = () => {
  return (
    <div className={`${classes.mainColumn} ${classes.content}`}>
      <a
        href="#"
        className={`${classes.article} ${classes.wInline} ${classes.wClearfix}`}
      >
        <div className={classes.imageWrapper}>
          <img
            src="https://assets.website-files.com/52f2c8085d8eed2b6b000300/52f320b1593f6edf41000793_thumb11.jpg"
            className={classes.thumbnail}
          />
        </div>
        <section className={classes.articleTextWrapper}>
          <h2 className={classes.arrow}>></h2>
          <h2 className={classes.thumbnailTitle}>
            게시물 목록 첫번째
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique.
          </p>
          <div>
            <div className={classes.classesInfoText}>
              September 10, 2022
            </div>
            <div
              className={`${classes.classesInfoText} ${classes.tag}`}
            >
              tag1
            </div>
            <div
              className={`${classes.classesInfoText} ${classes.tag}`}
            >
              tag2
            </div>
          </div>
        </section>
      </a>
    </div>
  );
};
