import classes from './LikeButton.module.css'

export const LikeButton = ({
    text = "Press me",
    onClick = () => null,
  }) => {
    return (
        <div className={classes.wrapper}>
        <button className={classes.button} onClick={ onClick }>{ text }</button>
      </div>
    )
  }