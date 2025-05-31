
import { useCallback, useEffect, useMemo, useRef } from 'react'
import {useMotionValueEvent, useScroll, useTransform,motion} from 'framer-motion'
import './App.css'

function App() {

  
  const divRef = useRef<HTMLDivElement>(null)
  const canRef = useRef<HTMLCanvasElement>(null)
  const {scrollYProgress}= useScroll({
    target:divRef,
    offset: ['center end', 'start start']

  })
  const images = useMemo(() => {
		const loadedImages: HTMLImageElement[] = [];

		for (let i = 1; i <= 86; i++) {
			const img = new Image();
			img.src = `/images/${i}.webp`;
      
			loadedImages.push(img);
		}

		return loadedImages.reverse();
	}, []);
  const currentIndex = useTransform(scrollYProgress,[0,1],
    [1,86]
  )
  const render = useCallback((index:number)=>{
      if (images[index-1]) {
        canRef.current?.getContext('2d')?.drawImage(images[index-1],0,0)
      }
  },[images])
  useMotionValueEvent(currentIndex,"change",latest=>{ 
    console.log("value", Number(latest.toFixed()))
    render(Number(latest.toFixed()))})
  useEffect(()=>{
    render(1)
  },[render])
  return (
    <div className='flex flex-col items-center justify-center'>

    <div
			className='h-[600vh] relative  w-full  bg-black   '
      ref={divRef}
		>
      <div className='sticky top-1/2  xl:top-3/4 -translate-y-1/2 xl:left-6/7 z-0 xl:w-fit'>

			<canvas
  width={1200}
  height={1200}
  ref={canRef}
  className=' shrink-0 max-w-full xl:max-w-[1000px]'
/>
      </div>
      <div className='xl:absolute xl:top-1/5 xl:left-0'>

      <TextItem
  title="Experience Sound Like Never Before"
  subtitle="Apply now for your chance to own the iconic AirPods—where innovation meets style."
/>

<TextItem
  title="Your Ears Deserve an Upgrade"
  subtitle="Apply today for a chance to score the latest AirPods—no strings, just sound."
/>

<TextItem
  title="Wireless. Effortless. Magical."
  subtitle="Seamless connection and all-day battery life—just like it should be."
/>
<TextItem
  title="Ready for AirPods?"
  subtitle="It only takes a minute to apply. Your new favorite earbuds could be just a click away."
/>
      </div>

			
      
		</div>
    </div>
    
  )
}

export default App



const TextItem = ({ title, subtitle }: {
  title: string;
  subtitle: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll relative to this element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'end start'], // enters & exits viewport
  });

  // Animate opacity and vertical position
  const opacity = useTransform(scrollYProgress, [0, 0.2,0.6, 0.8, 1], [0, 1, 1, 0,0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <div ref={ref} className="h-[60vh] flex items-center justify-center">
      <motion.div
        style={{ opacity, y }}
        viewport={{amount:0.3}}
        className="text-white text-center max-w-2xl px-4"
      >
        <h1 className="text-4xl md:text-6xl  font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl ">{subtitle}</p>
      </motion.div>
    </div>
  );
};
