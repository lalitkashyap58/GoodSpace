import React from 'react';

 import speaker from "../../assets/volume-img.png";

const VideoChat = () => {
  return (
    <div style={{display:"flex"}}>
    <div className='video-screen' style={{ width: "50%",
            height: "20rem",
            position: "relative",
            marginTop: "10px",
            border: "1px solid white", // Corrected syntax
            borderRadius: "25px", // Corrected syntax
            marginLeft: "2rem", // Use camelCase for margin-left
            backdropFilter: "blur(25px)",
            background: 'rgba(255, 255, 255, 0.10)'}}>


    </div>
    <div className='mic' style={{ color: 'white',
        fontSize: 27.39,
        fontFamily: 'Poppins',
        fontWeight: 700,
        wordWrap: 'break-word',
        textAlign: 'center',marginTop:"19%",display:"block", marginLeft:"8%",alignItems:"center"}}>
      <div>Mute</div>

    </div>
    <div className='volume' style={{ display: 'block', marginTop: '8%', marginLeft: '5%', alignItems: 'center' }}>
      <img src={speaker} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginLeft:"20%" }}></img>
      <div style={{
        color: 'white',
        fontSize: 27.39,
        fontFamily: 'Poppins',
        fontWeight: 700,
        wordWrap: 'break-word',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center'
      }}>Volume</div>

    </div>
    </div>
  )
}

export default VideoChat;
