import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoomk from "../components/HackerRoomk"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hey, I am Nitish
            <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
        <div className="w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                <HackerRoomk scale={0.07} position={[0, 0, 0]} rotation={[0, 280, 0]} />

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