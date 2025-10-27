"use client";

import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"] });

export default function Inicio() {
  return (
    <>
      {/* Seção Início */}
      <motion.div
        className="min-h-screen bg-gray-900 text-white py-16 px-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.8,
        }}
      >
        <div className="max-w-6xl mx-auto ">
          {/* Horários */}
          <div className="text-center mb-16 mt-16">
            <div className="w-[80%] border border-white p-10 mx-auto rounded-lg">
              <div className="flex items-center justify-around gap-5">
                <h1
                  className={`text-3xl font-bold text-white underline ${dancing.className}`}
                >
                  Horarios disponiveis
                </h1>
                <div
                  className={`flex items-center justify-center gap-5 ${dancing.className} text-3xl font-bold text-white`}
                >
                  Delivery
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1
                    className={`text-3xl font-bold text-white ${dancing.className}`}
                  >
                    Segundas às Sextas-feiras
                  </h1>
                  <h2 className="text-2xl font-bold text-amber-600">
                    12h - 14h
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="flex flex-col items-center justify-center"
              id="inicio-section"
            >
              <img
                src="/Rectangle.png"
                alt="Prato"
                className="max-w-full h-auto animate-float"
              />

              <div className="flex items-start gap-3.5 mt-6">
                <div>MELHOR</div>
                <div className="relative before:content-['•'] before:absolute before:-left-4 ml-3.5">
                  DELIVERY
                </div>
                <div className="relative before:content-['•'] before:absolute before:-left-4 ml-3.5">
                  DA
                </div>
                <div className="relative before:content-['•'] before:absolute before:-left-4 ml-3.5">
                  REGIAO
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-5">
              <p className="text-white uppercase font-mono text-4xl">
                MARMININO
              </p>
              <p className="text-white uppercase font-mono text-4xl">
                Mais que um restaurante
              </p>
              <p className="text-4xl text-white font-mono uppercase">
                uma experiência nordestina completa.
              </p>
              <div className="inline text-amber-600">
                O Marminino nasceu da paixão pela boa comida e pelo aconchego
                das mesas nordestinas. Aqui, tradição e sabor se encontram em
                receitas preparadas com ingredientes frescos e muito amor. Cada
                refeição é um convite pra se sentir em casa — com gostinho de
                comida feita por quem entende de afeto.
                <br /> <br />
                Para ver as delícias, clique em "Ver Cardápio"!
              </div>
              <button className="w-36 h-13 rounded-lg text-white cursor-pointer font-extralight mt-5 shadow-2xl bg-amber-600 px-2.5 py-2.5 flex items-center justify-center hover:bg-amber-500">
                Ver Cardápio
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Seção Sobre */}
      <motion.div
        id="sobre-section"
        className="min-h-screen bg-gray-900 text-white py-16 px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-600 mb-4">
              SOBRE O MARMININO
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-amber-600">
                Nossa História
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                O restaurante Marminino traz o melhor da culinária nordestina direto para sua mesa! Localizado no coração da Várzea, Recife, nosso restaurante oferece pratos típicos feitos com ingredientes frescos e temperos autênticos daquele jeitinho caseiro que só o Nordeste tem  e opções de entrega rápida no hospital das clínicas e bairros próximos.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/Rectangle.png"
                alt="Prato do Marminino"
                className="max-w-md h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-amber-600">
              Nossos Valores
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-amber-600">
                  Tradição
                </h4>
                <p className="text-gray-300">
                  Respeitamos as receitas tradicionais nordestinas, passadas de
                  geração em geração.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-amber-600">
                  Qualidade
                </h4>
                <p className="text-gray-300">
                  Utilizamos apenas ingredientes frescos e selecionados para
                  garantir o melhor sabor.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-amber-600">
                  Aconchego
                </h4>
                <p className="text-gray-300">
                  Criamos um ambiente acolhedor onde você se sente em casa, com
                  muito carinho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Seção Novidades */}
      <motion.div
        id="novidades-section"
        className="min-h-screen bg-gray-900 text-white py-16 px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-600 mb-4">
              NOVIDADES
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <img
                  src="/almondega.jpg"
                  alt="Almôndega do Marminino"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NOVIDADE
                  </span>
                </div>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="space-y-6">
              <div className="mt-16">
                <h3 className="text-4xl font-bold text-amber-600 mb-4">
                  Almôndega do Sertão
                </h3>
                <div className="w-16 h-1 bg-amber-600 mb-6"></div>
              </div>

              <p className="text-xl leading-relaxed text-gray-300 mb-6">
                A{" "}
                <span className="text-amber-600 font-semibold">
                  Almôndega do Marminino
                </span>{" "}
                é preparada com temperos típicos do sertão, carne moída
                suculenta e aquele toque de coentro que faz toda diferença.
              </p>

              <p className="text-lg leading-relaxed text-gray-400 mb-8">
                Crocante por fora e macia por dentro, ela traz o sabor autêntico
                da cozinha nordestina — perfeita pra acompanhar o feijão
                fresquinho ou ser o destaque do prato.
              </p>

              {/* Características */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-300">Temperos do Sertão</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-300">Carne Suculenta</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-300">Toque de Coentro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-300">Sabor Autêntico</span>
                </div>
              </div>
            </div>
          </div>

          {/* Segunda Novidade - Frutos do Mar */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            {/* Conteúdo - Lado Esquerdo */}
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <h3 className="text-4xl font-bold text-amber-600 mb-4">
                  Frutos do Mar
                </h3>
                <div className="w-16 h-1 bg-amber-600 mb-6"></div>
              </div>

              <p className="text-xl leading-relaxed text-gray-300 mb-6">
                A{" "}
                <span className="text-amber-600 font-semibold">
                  Frutos do Mar do Marminino
                </span>{" "}
                são selecionados com muito cuidado para trazer o melhor sabor e
                a melhor qualidade.
              </p>

              <p className="text-lg leading-relaxed text-gray-400 mb-8">
                Com uma combinação de frutos do mar, como camarão, peixe e
                moluscos, eles são preparados com muito amor e carinho para
                trazer o melhor sabor e a melhor qualidade.
              </p>

              {/* Características */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-300">Camarão Fresco</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-300">Peixe Selecionado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-300">Moluscos Premium</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-300">Qualidade Garantida</span>
                </div>
              </div>
            </div>

            {/* Imagem - Lado Direito */}
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <img
                  src="/frutos.jpg"
                  alt="Frutos do Mar do Marminino"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NOVIDADE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
