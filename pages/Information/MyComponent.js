import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import './MyComponent.css';
const items = [
  {
    id: 1,
    title: "Video 1",
    subtitle: "Subtitle 1",
    videoSrc: "/video1.mp4",
    info: "Information about video 1",
  },
  {
    id: 2,
    title: "Video 2",
    subtitle: "Subtitle 2",
    videoSrc: "/video2.mp4",
    info: "Information about video 2",
  },
  {
    id: 3,
    title: "Video 3",
    subtitle: "Subtitle 3",
    videoSrc: "/video3.mp4",
    info: "Information about video 3",
  },
];

const VideoCards = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="card-container">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="card"
          layoutId={item.id.toString()}
          onClick={() => setSelectedId(item.id)}
        >
          <video className="card-video" autoPlay loop muted>
            <source src={item.videoSrc} type="video/mp4" />
          </video>
          <div className="card-info">
            <h5>{item.subtitle}</h5>
            <h2>{item.title}</h2>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="selected-card"
            layoutId={selectedId.toString()}
            onClick={() => setSelectedId(null)}
          >
            <div className="selected-card-info">
              {items.map((item) => {
                if (item.id === selectedId) {
                  return (
                    <React.Fragment key={item.id}>
                      <h5>{item.subtitle}</h5>
                      <h2>{item.title}</h2>
                      <p>{item.info}</p>
                    </React.Fragment>
                  );
                }
              })}
            </div>
            <button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoCards;


