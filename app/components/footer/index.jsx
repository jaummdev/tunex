import LogoWhite from "@/app/assets/logo-white.png"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="w-full h-[450px] bg-black">
            <section>
                <Image
                    src={LogoWhite}
                    alt="logo"
                    width={200}
                    height={90}
                />

                <section>
                    <ul>
                        <span>Empresa</span>
                        <li>Sobre</li>
                        <li>Empregos</li>
                        <li>For the record</li>
                    </ul>
                    <ul>
                        <span>Comunidade</span>
                        <li>Para artistas</li>
                        <li>Desenvolvedores</li>
                        <li>Publicidades</li>
                    </ul>
                    <ul>
                        <span>Links</span>
                        <li>Suporte</li>
                        <li>Player da web</li>
                        <li>Nosso aplicativo</li>
                    </ul>
                </section>
            </section>
        </footer>
    )
}
