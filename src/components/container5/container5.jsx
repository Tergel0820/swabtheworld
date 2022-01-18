import React from "react";
import { Looking, Button } from "../index";
import "../../styles/container5.scss";
import "../../styles/global.scss";

const Container5 = () => {
  return (
    <div className="con5 d-flex w-100">
      <div className="con5-left">
        <div className="itcouldhappen">
          <div className="itcould">IT COULD</div>
          <div className="happen">HAPPEN</div>
          <div className="toanyone">TO ANYONE</div>
        </div>
        <div className="bosoo-mongol bosoo-mongol-2">
          Someone like you needs you.
        </div>
      </div>
      <div className="con5-right">
        <div className="thousandsofpatients">
          Thousands of patients around the world are searching for their
          life-saving match. Do you have what it takes? Become a stem cell donor
          and find out.
        </div>
        <div className="looking-container d-flex flex-column align-items-center">
          <Looking
            style={{ left: "-10px" }}
            name="LEO IVIC"
            title="ACUTE LYMPHOBLASTIC LEUKEMIA T"
            location="Ethnicity — Croatia (Hrvatska), France, Japan"
            img="https://swabtheworld.com/upload/images/5dd84ce4824a85dd84c50d7ec05dd84c10403af5dd84ae6780435dcc18bc6f2125d8357c93290a-bpfull.jpg"
          />
          <Looking
            style={{ left: "880px", top: "100px" }}
            name="MARIA"
            title="CHRONIC MYELOMONOCYTIC LEUKEMIA"
            location="Ethnicity — Philippines"
            img="https://swabtheworld.com/upload/images/5ba944a292a61-bpfull.jpg"
          />
          <Looking
            style={{ left: "-70px", top: "-10px" }}
            name="AARYAN DINH-ALI"
            title="VERY SEVERE APLASTIC ANEMIA"
            location="Ethnicity — Afghanistan, Viet Nam"
            img="https://swabtheworld.com/upload/images/5bce528527e41-bpfull.jpg"
          />
          <Looking
            style={{ left: "-20px", top: "-5px" }}
            imgstyle={{ marginLeft: "30px" }}
            name="ERIK JAIME"
            title="MYELODYSPLASTIC SYNDROMES (MDS)"
            location="Ethnicity — WHITE, BLACK"
            img="https://swabtheworld.com/upload/images/Erik-Jaime.jpg"
          />
          <Looking
            style={{ left: "880px", top: "100px" }}
            name="DON NGUYEN"
            title="ACUTE MYELOID LEUKEMIA"
            location="Ethnicity — Viet Nam"
            img="https://swabtheworld.com/upload/images/5bc9856d73f35-bpfull.jpg"
          />
        </div>
        <div className="con5-button-con w-100 d-flex justify-content-center mt-5 mb-5">
          <Button
            title="MEET MORE PATIENTS"
            className="swab-button d-flex bg-primary"
            speed="4"
          />
        </div>
      </div>
    </div>
  );
};

export { Container5 };