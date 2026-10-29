import { useCallback, useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import style from './partical.module.css';

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

const Static=({particalColor,linkColor,background})=> {
  const particlesLoaded = useCallback(async (container) => {
   console.log(" Static particles container loaded", container);
  }, []);

  const options = useMemo(() => 
    ({
        //fpsLimit: 60,
        fullScreen:{enable: false},
        particles: {
            color: { value: particalColor },
            number: { value: 0 },
            move: { enable: false },
            shape: { type: "circle" },
            opacity: { value: 0.8 },
            size: { value:5}
        },
        links: {
            enable: true,
            distance: 150,
            color: linkColor,
            opacity: 0.4,
            width: 3,
        },
        manualParticles: [
            {
                position: { x: 700, y: 200 },
                options: {
                color: { value: "#ff0000" },
                size: { value: 10 },
                },
            },
            {
                position: { x: 700, y: 250 },
                options: {
                color: { value: "#00ff00" },
                size: { value: 10 },
                },
            },
        ],

    }),
    [particalColor, linkColor],
  );

  return (
    <ParticlesProvider  init={particlesInit}>
      <Particles className={style.staticNetwork} id="tsparticlesStatic" particlesLoaded={particlesLoaded} options={options} />
    </ParticlesProvider>
  );
}


const Partical = {
    Static


}
export{
    Partical
}