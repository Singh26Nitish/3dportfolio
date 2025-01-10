import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoomk from "../components/HackerRoomk"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import Target from "../components/Target"

const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const ismobile = useMediaQuery({ maxWidth: 768 });
  const istablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, ismobile, istablet);

  
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hey, I am Nitish
            <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
        <div className="w-full h-full absolute inset-0">
            {/* <Leva /> */}
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                <HackerRoomk 
                // scale={0.07} 
                position={sizes.deskPosition} 
                scale={sizes.deskScale} 
                rotation={[0, -Math.PI, 0]}
                />

                <group>
                  <Target position={sizes.targetPosition} />

                </group>

                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>
            </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Hero
