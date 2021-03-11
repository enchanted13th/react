import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSModule.module.scss";

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <spac className="something">CSS Module!</spac>
    </div>
  );
};

export default CSSModule;
