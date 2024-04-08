import Image from "next/image"
import Head from "next/head"
import { SocialIcon } from "react-social-icons"
import "lightbox.js-react/dist/index.css"
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react"
import React, { useEffect, useState } from "react"
import Ticker from "@/components/Ticker"

const images = [
  { src: "/images/img01.png" },
  { src: "/images/img02.png" },
  { src: "/images/img03.png" },
  { src: "/images/img04.png" },
  { src: "/images/img05.png" },
  { src: "/images/img06.png" },
  { src: "/images/img07.png" },
  { src: "/images/img08.png" },
  { src: "/images/img09.png" },
  { src: "/images/img10.png" },
  { src: "/images/img11.png" },
  { src: "/images/img12.png" },
  { src: "/images/img13.png" },
]

export default function Home() {
  const [copiedText, setCopiedText] = useState("0x05B8c005953cb02C58b6a251B5FeB7b028E72512")

  useEffect(() => {
    initLightboxJS("DF8A-D560-5C71-E585", "Individual")
  }, [])

  return (
    <>
      <Head>
        <title>MechAnime</title>
        <meta name="description" content="MechAnime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bg.png" />
      </Head>

      <div className=" bg-no-repeat bg-contain md:bg-contain lg:bg-contain xl:bg-contain 2xl:bg-cover 3xl:bg-cover 4xl:bg-cover 5xl:bg-cover 6xl:bg-cover bg-[#f1d28e] bg-[url('../public/bg.png')]">
        <main id="page-wrap" className="font-ubuntu">
          <div className="p-1 flex min-h-screen flex-col border-b-2 overflow-hidden">
            <div className="flex justify-center items-center w-full">
              <h2 className=" font xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl text-3xl text-stone-200">
                MechAnime
              </h2>
            </div>

            <div className="p-1 pl-3 mb-4 ml-auto text-xl space-y-4 flex flex-col">
              <button
                className="p-1 bg-[#234bfa] hover:bg-[#d1352d] text-stone-200 rounded-xl"
                onClick={async () =>
                  window.open("https://app.uniswap.org/swap?from=eth&to=")
                }
              >
                Buy on Uni
              </button>

              <button
                className="p-1 bg-[#234bfa] hover:bg-[#d1352d] text-stone-200 rounded-xl"
                onClick={async () =>
                  window.open("https://dexscreener.com/base/")
                }
              >
                Chart
              </button>

              <div className="flex flex-col items-center justify-center space-y-4">
                <SocialIcon
                  url="https://t.me/mech_anime"
                  network="telegram"
                  fgColor="white"
                />
                <SocialIcon
                  url="https://twitter.com/mechanime_"
                  network="twitter"
                  fgColor="white"
                />
              </div>
            </div>

            <div className="p-2 mt-4 m-auto text-center max-w-lg bg-stone-100 bg-opacity-70 rounded-2xl outline outline-2 outline-[#d1352d]">
              <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                MechAnime pushes the evolution of base meme tokens further into art and
                lore. Inspired by master game artist Akihiko Yoshida, creator of Final Fantasy.
              </p>
            </div>

            <div
              className="p-2 mt-4 m-auto text-center max-w-xl hover:outline-white bg-stone-100 bg-opacity-70 md:text-base sm:text-base rounded-2xl outline outline-2 outline-[#d1352d] cursor-pointer"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(copiedText)
                  setCopiedText("Base CA Copied!")
                } catch (err) {
                  console.error("Failed to copy text: ", err)
                }
              }}
            >
              <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                {copiedText}
              </p>
            </div>

            <div className="flex flex-row justify-center space-x-3 ">
              <div className="p-2 mt-4 text-center max-w-lg bg-stone-100 bg-opacity-70 md:text-base sm:text-base rounded-2xl outline outline-2 outline-[#d1352d] w-48">
                <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
                  <a
                    className="text-[#234bfa] hover:text-[#d1352d]"
                    href="https://basescan.org/token/"
                  >
                    Renounced Contract
                  </a>
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
                  <a
                    className="text-[#234bfa] hover:text-[#d1352d]"
                    href="https://basescan.org/token/"
                  >
                    LP Locked
                  </a>
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
                  IMMUTABLE
                </p>
              </div>

              <div className="p-2 mt-4 text-center max-w-lg bg-stone-100 bg-opacity-70 md:text-base sm:text-base rounded-2xl outline outline-2 outline-[#d1352d] w-48">
                <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
                  Supply 42B
                </p>

                <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
                  <a
                    className="text-[#234bfa] hover:text-[#d1352d]"
                    href="https://app.uniswap.org/pools/v2"
                  >
                    Liquidity
                  </a>{" "}
                  90%
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
                  <a
                    className="text-[#234bfa] hover:text-[#d1352d]"
                    href="https://basescan.org/address/0x7Ac2d9FF78930db172b51a72E3B954CB9d6Ed269"
                  >
                    Airdrop
                  </a>{" "}
                  7%
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
                  <a
                    className="text-[#234bfa] hover:text-[#d1352d]"
                    href="https://basescan.org/address/0xdf921074AF44aABA0da0A7B2F0F5fa0D9FddE71f"
                  >
                    Team
                  </a>{" "}
                  3%
                </p>
              </div>

              <div className="p-2 mt-4 text-center max-w-lg bg-stone-100 bg-opacity-70 md:text-base sm:text-base rounded-2xl outline outline-2 outline-[#d1352d] w-48">
                <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
                  Anti-Whale
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
                  MaxWallet 3%
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
                  NO PRESALE
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
                  NO TAX
                </p>
              </div>
            </div>

            <div className="mt-4 m-auto outline outline-2 outline-[#d1352d]">
              <Image
                src="immutable.png"
                width={740}
                height={300}
                alt="Logo"
              ></Image>
            </div>

            <div className="p-2 mt-4 m-auto text-center max-w-lg bg-stone-100 bg-opacity-70 rounded-2xl outline outline-2 outline-[#d1352d]">
              <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
              As chaos escalated into total apocalypse the world's elite withdrew into fortified bunkers. 
              Two decades later their mecha-warrior daughters, having trained underground their whole lives, 
              emerge into a desolate wasteland to battle for the planet's remaining resources. 
              Follow their saga on X and Telegram.
              </p>
            </div>

            <div
              className="p-2 mt-4 mx-auto outline outline-2 outline-[#d1352d]"
            >
              <SlideshowLightbox
                className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 mx-auto"
                lightboxIdentifier="lightbox1"
                framework="next"
                images={images}
              >
                {images.map((image) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    height={500}
                    width={300}
                    data-lightboxjs="lightbox1"
                    quality={80}
                  />
                ))}
              </SlideshowLightbox>
            </div>

            <div className="m-auto">
              <p className="lg:text-3xl md:text-2xl sm:text-2xl text-2xl text-stone-100">
                <a
                  className="hover:text-[#d1352d] text-[#234bfa]"
                  href="https://dexscreener.com/base/"
                >
                  $MECHANIME
                </a>
              </p>
            </div>
            <Ticker />
          </div>
        </main>
      </div>
    </>
  )
}
