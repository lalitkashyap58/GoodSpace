import React from "react";
import "./Chat1.css";
import volume from "../../assets/volume.png";
import Rectangle29 from "../../assets/Rectangle29.png";
import speaker from "../../assets/speaker.svg";

const Chat1 = () => {
  return (
    <div className="chat1-page">
      <div className="left-section">
        <div
          className="left-main-section"
          style={{
            width: "70%",
            height: "50vh",
            position: "relative",
            marginTop: "10px",
            border: "1px solid white", // Corrected syntax
            borderRadius: "25px", // Corrected syntax
            marginLeft: "2rem", // Use camelCase for margin-left
            backdropFilter: "blur(25px)",
            background: 'rgba(255, 255, 255, 0.10)'
          }}
        >
            {/* video component load complete */}
         <div className="Video-control">

        
          <div className="video-screen">

          </div>
          <div>
            <div className="mic">

            </div>
            <div className="volume">

            </div>
          </div>
          </div>
        </div>

        <div className="left-bottom" style={{display:"flex",marginTop:"1%",height:"height-content"}} >
       
          <div className="left-bottom-main"
          style={{ width: "50%",
          height: "28vh",
          border: "1px solid white", // Corrected syntax
          borderRadius: "10px", // Corrected syntax
          marginLeft: "2rem", // Use camelCase for margin-left
          backdropFilter: "blur(15px)",}} >
              {/* load component here video or chat */}
              <div>

              </div>
          </div>

          {/* remain same for all */}
          <div className="pause-button" style={{ width: "15vw",
          height: "28vh",
          border: "1px solid white", // Corrected syntax
          borderRadius: "30px", // Corrected syntax
          marginLeft: "4.3rem", // Use camelCase for margin-left
          backdropFilter: "blur(15px)",}} >

          </div>
        </div>
      </div>
      <div className="right-section"></div>
    </div>
  );
};

export default Chat1;
