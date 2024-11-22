import LogoWhite from "../../assets/logo-white.png"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"

export function Footer() {


    const spanStyled = "text-white/50 font-medium text-lg"
    const ulStyled = "flex flex-wrap flex-col gap-3"
    const liStyled = "text-white font-normal text-base cursor-pointer"


    return (
        <footer className="w-full h-[200px] lg:h-[350px] px-20 pt-5 bg-black">
            <section className="flex flex-wrap w-full h-full gap-[2rem] lg:gap-[10rem] lg:flex-nowrap items-center justify-center">
                <Link href="/">
                    <Image
                        src={LogoWhite}
                        alt="logo"
                        width={150}
                        height={90}
                    />
                </Link>

                <section className="flex-wrap justify-center hidden lg:flex gap-12 text-wrap">
                    <ul className={ulStyled}>
                        <span className={spanStyled}>Empresa</span>
                        <li className={liStyled}>Sobre</li>
                        <li className={liStyled}>Empregos</li>
                        <li className={liStyled}>For the record</li>
                    </ul>
                    <ul className={ulStyled}>
                        <span className={spanStyled}>Comunidade</span>
                        <li className={liStyled}>Para artistas</li>
                        <li className={liStyled}>Desenvolvedores</li>
                        <li className={liStyled}>Publicidades</li>
                    </ul>
                    <ul className={ulStyled}>
                        <span className={spanStyled}>Links</span>
                        <li className={liStyled}>Suporte</li>
                        <li className={liStyled}>Player da web</li>
                        <li className={liStyled}>Nosso aplicativo</li>
                    </ul>
                </section>

                <section className="flex items-center pb-5 justify-center flex-wrap gap-3 cursor-pointer lg:flex-col">
                    <FaInstagram className="bg-icons text-white p-2 rounded-full" size={50} />
                    <FaXTwitter className="bg-icons text-white p-2 rounded-full" size={50} />
                    <FaFacebookF className="bg-icons text-white p-3 rounded-full" size={50} />
                </section>
            </section>
        </footer>
    )
}
