import React from "react";
import UploadSVG from "../../assests/SVG/upload.svg";
import ScanSVG from "../../assests/SVG/scan.svg";
import css from "./Form.module.css";

const Form = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.item}>
        <p>NAME</p>
        <input type={"text"} />
      </div>
      <div className={css.item}>
        <p>LASTNAME</p>
        <input type={"text"} />
      </div>
      <div className={css.item}>
        <p>MIDDLE-NAME</p>
        <input type={"text"} />
      </div>
      <div className={css.item}>
        <p>NUMBER</p>
        <input type={"number"} />
      </div>
      <div className={css.item}>
        <p>COUNTRY</p>
        <input type={"text"} />
      </div>
      <div className={css.item}>
        <p>STATE</p>
        <input type={"text"} />
      </div>
      <div className={css.item}>
        <p>CITY</p>
        <input type={"text"} />
      </div>
      <div className={css.item}>
        <p>ADDRESS</p>
        <input type={"text"} />
      </div>
      <div className={css.item}>
        <p>PINCODE</p>
        <input type={"text"} />
      </div>
      <div className={css.item}>
        <p>AADHAR-CARD NUMBER</p>
        <input type={"text"} />
      </div>
      <div className={css.item}>
        <p>GST-NUMBER</p>
        <input type={"text"} />
      </div>
      <div className={css.item}>
        <p>USER TYPE-CUSTOMER</p>
        <input type={"text"} />
      </div>
      <div className={css.item}>
        <p>PAN-CARD NUMBER</p>
        <input type={"text"} />
      </div>
      <div className={css.item}>
        <p>FIRM-NAME</p>
        <input type={"text"} />
      </div>
      <div className={css.item}>
        <p>FINGER SCAN</p>
        <div className={css.buttonWrapper}>
          <button>
            <img src={UploadSVG} />
            UPLOAD
          </button>
          <button>
            <img src={ScanSVG} />
            SCAN
          </button>
        </div>
      </div>
      <div className={css.item}>
        <p>GENDER</p>
        <div className={css.radioWrapper}>
          <div className={css.radio}>
            <input type="radio" name="gender" value="male" />
            MALE
          </div>
          <div className={css.radio}>
            <input type="radio" name="gender" value="female" />
            FEMALE
          </div>
        </div>
      </div>
      <div className={css.buttonContainer}>
        <button className={css.home}>HOME</button>
        <button className={css.sell}>SELL</button>
        <button className={css.loan}>LOAN</button>
        <button className={css.udhaar}>UDHAAR</button>
      </div>
    </div>
  );
};

export default Form;
