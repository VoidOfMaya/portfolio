import { useCallback, useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

const ParBackground =({particalColor,linkColor,background})=> {
  const particlesLoaded = useCallback(async (container) => {
   //console.log("Particles container loaded", container);
  }, []);

  const options = useMemo(
    () => ({
        fpsLimit: 60,
        particles: {
            number: { value: 80, density: { enable: true } },
            color: { value: "#000000" },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 4 } },
        links: {
            enable: true,
            distance: 150,
            color: "#3c3c3c",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: .5,
            outModes: { default: "bounce" },
            },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
                onClick: { enable: true, mode: "push" },
            },
            modes: {
            grab: { distance: 180, links: { opacity: 0.8 } },
            push: { quantity: 4 },
            },
        },
        background: { 
            color: "#fefeff",
         },
        fullScreen:{
            enable: true,
            zIndex: -1,
        }
    }),
    [],
  );

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
    </ParticlesProvider>
  );
}
const ParticalSys = {
    ParBackground,


}
export{
    ParticalSys
}