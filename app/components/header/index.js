import Image from "next/image"
import Logo from "@/app/assets/logo-dark.png"
import Link from "next/link"

export function Header() {
    return (
        <header className="flex justify-between px-64 py-8">
            <section>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="logotipo"
                        width={160}
                    />
                </Link>
            </section>

            <section className="flex gap-10">
                <section>
                    <ul className="flex gap-6 text-lg items-center h-full">
                        <Link href="#" className="font-semibold text-purple">Premium</Link>
                        <Link href="#">Sobre</Link>
                        <Link href="#">Entrar</Link>
                    </ul>
                </section>

                <section className="flex items-center h-full">
                    <button className="bg-purple text-white px-8 py-3 rounded-xl hover:bg-dark-purple transition-colors uppercase">
                        Experimente Grátis
                    </button>
                </section>
            </section>

        </header>
    )
}
