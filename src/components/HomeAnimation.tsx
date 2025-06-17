import React from "react";
import "../css/HomeAnimation.css";

const HomeAnimation: React.FC = () => {
  return (
    <section className="business-strip-animations my-4">
      <div className="logo-containers">
        <div className="logo-strips">
          <h3 className="partner-logo-animations">BUSINESS</h3>
          <h4>*</h4>
          <h3 className="partner-logo-animations">BULDING</h3>
          <h4>*</h4>
          <h3 className="partner-logo-animations">BUSINESS</h3>
          <h4>*</h4>
          <h3 className="partner-logo-animations">BULDING</h3>
          <h4>*</h4>
          <h3 className="partner-logo-animations">BUSINESS</h3>
          <h4>*</h4>
          <h3 className="partner-logo-animations">BULDING</h3>
          <h4>*</h4>
        </div>
      </div>

      <div className="logo-containers">
        <div className="logo-strips reverses">
          <h3 className="partner-logo-animations">CONTRUCTION</h3>
          <h4>*</h4>
          <h3 className="partner-logo-animations">RENOVATIONES</h3>
          <h4>*</h4>
          <h3 className="partner-logo-animations">CONTRUCTION</h3>
          <h4>*</h4>
          <h3 className="partner-logo-animations">RENOVATIONES</h3>
          <h4>*</h4>
          <h3 className="partner-logo-animations">CONTRUCTION</h3>
          <h4>*</h4>
          <h3 className="partner-logo-animations">RENOVATIONES</h3>
          <h4>*</h4>
        </div>
      </div>
    </section>
  );
};

export default HomeAnimation;
