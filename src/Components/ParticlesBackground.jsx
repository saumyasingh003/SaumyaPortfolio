import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };
  if(init){

      return (
    
          <Particles
           id="tsparticles"
           particlesLoaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push"
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse"
                  },
                  resize: true
                },
                modes: {
                  push: {
                    quantity: 4
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  }
                }
              },
              particles: {
                color: {
                  value: "#0000"
                },
                links: {
                  color: "#0000",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1
                },
                collisions: {
                  enable: true
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce"
                  },
                  random: false,
                  speed: 1,
                  straight: false
                },
                number: {
                  density: {
                    enable: true,
                    area: 800
                  },
                  value: 80
                },
                opacity: {
                  value: 0.5
                },
                shape: {
                  type: "circle"
                },
                size: {
                  value: { min: 1, max: 5 }
                }
              },
              detectRetina: true
            }}
          />
    
      );
  }
  return <></>;

};

export default ParticlesBackground;