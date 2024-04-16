"use client";
import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Videos() {
  const videoRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed(!isZoomed);
  };
  // if (typeof window !== "undefined" && window) {
  const videoDetail = [
    {
      id: 1,
      src: "https://videos.pexels.com/video-files/11993213/11993213-hd_1080_1080_30fps.mp4",
      poster:
        "https://images.pexels.com/videos/11993213/3d-abstract-animated-animation-11993213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      src: "https://videos.pexels.com/video-files/1154850/1154850-hd_1920_1080_24fps.mp4",
      poster:
        "https://images.pexels.com/videos/1154850/free-video-1154850.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      src: "https://videos.pexels.com/video-files/1943413/1943413-hd_1920_1080_24fps.mp4",
      poster:
        "https://images.pexels.com/videos/1943413/free-video-1943413.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      src: "https://cdn.shopify.com/videos/c/vp/1b22e715e049431cbea41c3f8c0955f3/1b22e715e049431cbea41c3f8c0955f3.HD-1080p-7.2Mbps-17064694.mp4",
      poster:
        "//primordials.shop/cdn/shop/files/preview_images/1b22e715e049431cbea41c3f8c0955f3.thumbnail.0000000000_400x.jpg?v=1691449051",
    },
    // Add more video objects as needed
  ];
  const videos = [
    {
      id: 5,
      src: "https://videos.pexels.com/video-files/3633003/3633003-hd_1906_1080_30fps.mp4",
      poster:
        "https://images.pexels.com/videos/3633003/free-video-3633003.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 6,
      src: "https://videos.pexels.com/video-files/3819342/3819342-hd_1920_1080_25fps.mp4",
      poster:
        "https://images.pexels.com/videos/3819342/london-3819342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 7,
      src: "https://videos.pexels.com/video-files/1154850/1154850-hd_1920_1080_24fps.mp4",
      poster:
        "https://images.pexels.com/videos/1154850/free-video-1154850.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    // Add more video objects as needed
  ];
  if (typeof window !== "undefined" && window) {
    const video = window.document.getElementById("video");
    video?.addEventListener("mouseover", () => {
      video.play();
    });

    video?.addEventListener("mouseout", () => {
      video.pause();
    });
  }
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const handleMouseOver = (videoId) => {
    setHoveredVideo(videoId);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseOut = () => {
    setHoveredVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="videos">
      <div className="main-video row justify-content-center">
        <video
          controls
          src="https://videos.pexels.com/video-files/5743177/5743177-hd_2048_1080_25fps.mp4"
          // poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          // onMouseOver={handleMouseEnter}
          // onMouseOut={handleMouseLeave}
          autoPlay
          // loop
          className="col-md-6 col-sm-12  col-xs-12 zoom-container"
          onClick={handleClick}
          // ref={videoRef}
          id="video"
          style={{
            borderRadius: "50%",
            objectFit: "unset",
          }}
        >
          Sorry, your browser doesn&apos; t support embedded videos, but
          don&apos; t worry, you can
          <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
          and watch it with your favorite video player!
        </video>
        <div className="detail-video col-md-5 col-sm-12  col-xs-12 row justify-content-center">
          {videoDetail.map((video) => (
            // <div

            // >
            <video
              className={hoveredVideo === video.id ? "active" : ""}
              controls={hoveredVideo === video.id}
              autoPlay
              poster={video.poster}
              loop={hoveredVideo === video.id}
              style={{
                // width:"100%",
                borderRadius: "50%",
                objectFit: "unset",
              }}
              key={video.id}
              onMouseEnter={() => handleMouseOver(video.id)}
              onMouseLeave={handleMouseOut}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            // </div>
          ))}
        </div>
      </div>
      <div
        className="video-container row"
       
      >
        {videos.map((video) => (
          // <div
          //   key={video.id}
          //   onMouseEnter={() => handleMouseOver(video.id)}
          //   onMouseLeave={handleMouseOut}
          // >
          <video
            key={video.id}
            className={hoveredVideo === video.id ? "active" : ""}
            controls={hoveredVideo === video.id}
            autoPlay
            poster={video.poster}
            loop={hoveredVideo === video.id}
            style={{
              
              borderRadius: "50%",
              objectFit: "unset",
            }}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          // </div>
        ))}
      </div>
    </div>
  );
}
