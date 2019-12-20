import React from "react"
import style from "./container.module.css"
const styles={
    redButton:{
        color:'red',
        padding:10
    }
}
export default ({ children }) => (
  <div style={styles.redButton} className={style.container}>{children}</div>
)