'use client'

import { motion } from "framer-motion";
export default function Inicio() {
  return (
    <motion.div className="flex min-h-screen -mt-36" 
    initial={{ opacity: 0, y: 100}}
    animate={{opacity:1, y: 0}}
     transition={{
    ease: "easeOut",
    duration: 0.8                   
  }}
    >
      
      <div className="w-1/2 flex flex-col items-center justify-center">
        <img
          src="/parmegianaa.png"
          alt="Prato"
          
          className="max-w-full h-auto animate-float"
        />
     
     
        <div className="flex  items-start gap-3.5">
  <div>
    ARROZ
  </div>
  <div className="relative before:content-['•'] before:absolute before:-left-4 ml-3.5">
    FRANGO OU CARNE
  </div>
  <div className="relative before:content-['•'] before:absolute before:-left-4 ml-3.5">
    SALADA
  </div>
</div>

       
      </div>
        

     
      <div className="w-1/2 flex flex-col items-start justify-center p-8 gap-5">
        <p className=" text-gray-400 text-2xl font-mono mb-4">#1 Dessa Semana</p>
        <p className=" text-white uppercase font-mono text-4xl">
          Parmegiana 
        </p>
        <p className=" text-white uppercase font-mono text-4xl">
          é nordeste com um tiquinho da Itália… 
        </p>
        <p className="text-4xl text-white font-mono uppercase">
          mas com gosto de casa de vó!
        </p>
        <div className="inline text-amber-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste rem nihil, blanditiis fuga incidunt maiores error atque ullam, dolor qui excepturi temporibus optio similique quos autem ut repellat nulla.</div>
                    <button className="w-36 h-13 rounded-lg text-white cursor-pointer font-extralight mt-5 shadow-2xl bg-amber-600 px-2.5 py-2.5 flex items-center justify-center hover:bg-amber-500">ver o cardapio</button>

      </div>

    </motion.div>
  );
}
