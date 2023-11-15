"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

// Documentación de useScroll: https://www.framer.com/motion/use-scroll/

export default function HeroTitle() {
  const targetRef = useRef<HTMLDivElement>(null);
  // ScrollYProgress devuelve un valor entre 0 y 1 que representa el progreso de desplazamiento de la ventana de visualización.
  const { scrollYProgress } = useScroll({
    // Sección definida como ref en el DOM.
    target: targetRef,
    // offset es una propiedad que define el punto de inicio y final de la sección.
    // El primer valor es el punto de inicio y el segundo valor es el punto final.
    // Los valores se pueden definir como porcentajes o como valores absolutos.
    // Al estar arriba del todo, el valor es 0, y al estar abajo del todo, el valor es 1.
    offset: ["end end", "end start"]
  });

  // useTransform toma un valor de entrada, lo transforma en base a un rango de entrada y devuelve un valor de salida.
  // Al inicio de la pagina tendra una opacidad de 1, y al 75% de la pagina ya tendra una opacidad de 0.
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // No queremos que el fondo se haga más pequeño, por lo que atacaremos directamente a los textos
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 0.85]);
  const scaleCredits = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <>
      <motion.div
        ref={targetRef}
        className="fixed left-1/2 -translate-x-1/2 flex flex-col justify-start items-center w-full pt-20 mb-[8rem] h-screen"
        style={{ opacity }}
      >
        <motion.div style={{ scale }} className="text-center">
          <p className="text-5xl font-mono font-medium text-neutral-700">
            Animating
          </p>
          <p className="text-5xl font-mono font-medium text-neutral-700">
            && Animations
          </p>
        </motion.div>
        <motion.div style={{ scale: scaleCredits }} className="text-center">
          <p className="text-neutral-500 text-sm mt-4">
            by{" "}
            <Link href="https://meit.es" className="font-medium">
              @jaume_0to1
            </Link>
          </p>
          <p className="text-neutral-500 text-sm">
            powered by{" "}
            <Link href="https://meit.es" className="font-semibold">
              MeiT
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
