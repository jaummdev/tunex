"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Legend from "../../assets/legend.png"
import Hero from "../../assets/hero.png"
import Novice from "../../assets/novice.png"

export function Card({ text, price, best, oldPrice }) {

    const [option, setOption] = useState("")

    useEffect(() => {
        const normalizedText = text.toLowerCase();
        switch (normalizedText) {
            case "legend":
                setOption("legend")
                break;
            case "hero":
                setOption("hero")
                break;
            case "novice":
                setOption("novice")
                break;
            default:
                setOption("")
                break;
        }
    }, [text]);

    const getImageSrc = () => {
        switch (option.toLowerCase()) {
            case 'legend':
                return Legend;
            case 'hero':
                return Hero;
            case 'novice':
                return Novice;
            default:
                return null;
        }
    };

    const getGradient = () => {
        switch (option.toLowerCase()) {
            case "legend":
                return "from-light-purple to-purple"
            case "hero":
                return "from-light-pink to-pink"
            case "novice":
                return "from-light-red to-red"
            default:
                return null;
        }
    }

    return (
        <div className={`flex flex-col text-white items-center rounded-3xl justify-between py-5 w-[370px] h-[550px] bg-gradient-to-t ${getGradient()}`}>
            <span className="bg-black rounded-xl px-12 py-2">
                {best}
            </span>
            <div className="flex flex-col justify-center items-center">
                {getImageSrc() && (
                    <Image
                        src={getImageSrc()}
                        width={90}
                        height={90}
                        alt="Card icon"
                    />
                )}
                <span className="font-extrabold text-6xl">
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </span>
            </div>

            <div className="">
                <div className="flex flex-col items-center my-4">
                    <span className="line-through text-black text-3xl">{oldPrice}</span>
                    <h3 className="text-5xl font-bold">{price}<span className="text-2xl">/mês</span></h3>
                </div>
                <button className="bg-black text-xl rounded-2xl px-12 py-5">Comece agora</button>
            </div>
        </div>
    )
}
