import Particles from 'react-tsparticles';
import React, { Component } from 'react';

class BaseParticles extends Component {
  render() {

    const particlesInit = (main) => {
      console.log(main);
    };

    const particlesLoaded = (container) => {
      console.log(container);
    }
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#082043",
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 0,
              density: {
                enable: false,
                value_area: 800
              }
            },
            color: {
              value: "#000"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "https://cdn.matteobruni.it/images/particles/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#000",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10
                }
              },
              onclick: {
                enable: true,
                mode: "emitter"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
                speed: 3
              },
              repulse: {
                distance: 50
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true,
          background: {
            color: "#fff",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          },
          emitters: {
            direction: "top",
            position: {
              x: 50,
              y: 130
            },
            rate: {
              delay: 0.1
            },
            size: {
              width: 100,
              height: 0
            },
            particles: {
              color: {
                value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
              },
              lineLinked: {
                enable: false
              },
              opacity: {
                value: 0.5
              },
              size: {
                value: 400,
                random: {
                  enable: true,
                  minimumValue: 50
                }
              },
              opacity: {
                value: 0.5
              },
              move: {
                speed: 10,
                random: false,
                outMode: "destroy"
              }
            }
          }
          // detectRetina: true,
        }}
      />
    )
  }
}

export default BaseParticles;
