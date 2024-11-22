import Image from "next/image";
import { Button } from "./components/button";
import { Header } from "./components/header";
import Character from "./assets/character.svg"
import { Card } from "./components/card";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="text-center lg:text-left">
      <Header />

      <section className="flex items-center justify-center gap-14 px-[10rem] mt-10 flex-wrap">
        <section className="max-w-[600px]">
          <h1 className="text-7xl font-semibold">
            Descubra sua trilha
            <span className="text-purple font-bold"> sonora.</span>
          </h1>
          <p className="text-2xl mt-5">Escute as melhores músicas, onde quer que você esteja.</p>
          <Button className="text-xl mt-5 mb-6">Experimente Grátis</Button>
        </section>

        <section>
          <Image
            src={Character}
            width={450}
            alt="Character"
          />
        </section>
      </section>

      <section>
        <div className="w-full flex flex-col items-center px-5 mt-[10rem]">
          <h2 className="text-5xl font-semibold text-purple">Para começar a ouvir</h2>
          <h3 className="text-2xl">escolha o melhor plano para você.</h3>
        </div>
      </section>

      <section className="w-full flex flex-wrap items-center justify-center px-10 my-[5rem] gap-10">
        <Card text="Novice" price="R$14,99" oldPrice="R$21,99" />
        <Card text="Legend" price="R$27,99" best="Melhor opção" oldPrice="R$32,99" />
        <Card text="Hero" price="R$19,99" oldPrice="R$24,99" />
      </section>

      <Footer />
    </main>
  );
}
