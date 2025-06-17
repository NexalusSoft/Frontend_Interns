import React from "react";
import "../css/Workflow.css";
import wrkImg1 from "../image/home/data1.png";
import wrkImg2 from "../image/home/data2.png";
import wrkImg3 from "../image/home/data3.png";
import wrkImg4 from "../image/home/data4.png";
import wrkImg5 from "../image/home/data5.png";

const workflowData = [
  {
    id: 1,
    title: "Data Collection",
    description: "Arcu non sodales neque sodales ut hendrerit dolor magna eget est.",
    icon: wrkImg1,
  },
  {
    id: 2,
    title: "Data Analysis",
    description: "Diam donec adipiscing tristique risus nec feugiat in fermentum.",
    icon: wrkImg2,
  },
  {
    id: 3,
    title: "Create Models",
    description: "Sed velit dignissim sodales ut eu sem donec ultrices tincidunt integer.",
    icon: wrkImg3,
  },
  {
    id: 4,
    title: "Integrate Models",
    description: "Montes nascetur ridiculus mus mauris vitae ultricies leo.",
    icon: wrkImg4,
  },
  {
    id: 5,
    title: "Implementation",
    description: "Pellentesque elit eget gravida cum in metus vulputate eu scelerisque.",
    icon: wrkImg5,
  },
];

const Workflow = () => {
  return (
    <section className="workflow-sections">
      <div className="workflow-headers">
        <p className="workflow-subtitles">Our Process</p>
        <h2 className="workflow-titles">Workflow Steps</h2>
      </div>

      <div className="workflow-grids top-row">
        {workflowData.map((item, index) => (
          <div key={item.id} className="workflow-items">
            {index % 2 === 0 ? (
              <>
                <div className="workflow-icons">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="workflow-texts">
                  <div className="workflow-numbers">0{item.id}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
            
              </>
            ) : (
              <>
              
                <div className="workflow-texts">
                  <div className="workflow-numbers">0{item.id}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
          
                <div className="workflow-icons">
                  <img src={item.icon} alt={item.title} />
                </div>
                <hr />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
