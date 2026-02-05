import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import rosePetal from "@/assets/rose-petal.png";

const RosePetalParticles = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the slim version of tsparticles for better performance
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log("Particles container loaded", container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#ffffff",
                },
                move: {
                    direction: "bottom-right",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: true,
                    speed: { min: 0.5, max: 1.5 },
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 45, // Increased density
                },
                opacity: {
                    value: { min: 0.1, max: 0.4 },
                },
                shape: {
                    type: "image",
                    options: {
                        image: {
                            src: rosePetal,
                            width: 100,
                            height: 100,
                        },
                    },
                },
                size: {
                    value: { min: 10, max: 25 },
                },
                rotate: {
                    value: {
                        min: 0,
                        max: 360,
                    },
                    animation: {
                        enable: true,
                        speed: 5,
                        sync: false,
                    },
                },
                tilt: {
                    direction: "random",
                    enable: true,
                    value: {
                        min: 0,
                        max: 360,
                    },
                    animation: {
                        enable: true,
                        speed: 3,
                    },
                },
                wobble: {
                    distance: 10,
                    enable: true,
                    speed: {
                        min: -5,
                        max: 5,
                    },
                },
            },
            detectRetina: true,
            fullScreen: {
                enable: false, // We want it to be contained in the section
            },
        }),
        []
    );

    if (!init) {
        return null;
    }

    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className="h-full w-full"
            />
        </div>
    );
};

export default RosePetalParticles;
