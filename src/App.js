import './App.scss';
import photo from './images/photo.webp';
import { useEffect, useRef } from 'react';
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from 'gsap/CSSRulePlugin';

const App = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const imageReveal = CSSRulePlugin.getRule('.img-container:after');
  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(containerRef.current, 1, { css: { visibility: 'visible'} })
    .to(imageReveal, 1.4, { width: '0%', ease: Power2.easeInOut })
    .from(imageRef.current, 1.4, {scale: 1.6, ease: Power2.easeInOut, delay: -1.6 })
  })

  return (
    <div className="main">
      <div ref={containerRef} className="container">
        <>
          <div className="img-container">
            <img ref={imageRef} src={photo} alt="man in red jacket on the mountain" />
          </div>
        </>
      </div>
    </div>
  );
}

export default App;
