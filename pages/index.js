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
  { src: "/images/img13.png" },

  { src: "/images/img03.png" },
  { src: "/images/img09.png" },

  { src: "/images/img04.png" },
  { src: "/images/img11.png" },

  { src: "/images/img05.png" },
  { src: "/images/img08.png" },

  { src: "/images/img06.png" },
  { src: "/images/img07.png" },
  { src: "/images/img12.png" },
]

export default function Home() {
  const [copiedText, setCopiedText] = useState("0x")

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

      <main
        id="page-wrap"
        className="font-ubuntu bg-no-repeat bg-contain bg-black bg-[url('../public/bg.png')]"
      >
        <div className="p-1 flex min-h-screen flex-col border-b-2 overflow-hidden">
          <div className="flex justify-center items-center w-full">
            <h2 className="text-5xl text-stone-200">MechAnime</h2>
            {/*               {
                <Image
                  src="logo.png"
                  width={120}
                  height={120}
                  alt="Logo"
                  className="p-2 rounded-3xl"
                ></Image>
              } */}
          </div>

          <div className="p-2 mt-4 mr-auto text-xl space-y-4 flex flex-col items-start">
            <button
              className="p-2 bg-[#234bfa] text-stone-200 rounded-xl"
              onClick={async () =>
                window.open("https://aerodrome.finance/swap?from=eth&to=")
              }
            >
              Buy Mecha
            </button>

            <button
              className="p-2 bg-[#234bfa] text-stone-200 rounded-xl"
              onClick={async () => window.open("https://dexscreener.com/base/")}
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

          <div className="flex flex-row space-x-8 w-1/4 text-2xl">
            <div className="p-2 mt-4 text-center bg-stone-100 bg-opacity-80 md:text-base sm:text-base rounded-2xl outline outline-2 outline-[#234bfa]">
              <p className="lg:text-2xl md:text-2xl sm:text-2xl text-2xl">
                <a
                  className="text-[#234bfa] hover:text-[#ad6544]"
                  href="https://basescan.org/token/"
                >
                  Renounced Contract
                </a>
              </p>
              <p className="lg:text-2xl md:text-2xl sm:text-2xl text-2xl">
                NO TAX
              </p>
            </div>

            <div className="p-2 mt-4 text-center bg-stone-100 bg-opacity-80 md:text-base sm:text-base rounded-2xl outline outline-2 outline-[#234bfa]">
              <p className="lg:text-2xl md:text-2xl sm:text-2xl text-2xl">
                Supply 42B
              </p>

              <p className="lg:text-2xl md:text-2xl sm:text-2xl text-2xl">
                <a
                  className="text-[#234bfa] hover:text-[#ad6544]"
                  href="https://basescan.org/address/"
                >
                  Burn
                </a>{" "}
                6%
              </p>
              <p className="lg:text-2xl md:text-2xl sm:text-2xl text-2xl">
                <a
                  className="text-[#234bfa] hover:text-[#ad6544]"
                  href="https://basescan.org/address/"
                >
                  Team
                </a>{" "}
                3%
              </p>

            </div>

            <div className="p-2 mt-4 text-center bg-stone-100 bg-opacity-80 md:text-base sm:text-base rounded-2xl outline outline-2 outline-[#234bfa]">
              <p className="lg:text-2xl md:text-2xl sm:text-2xl text-2xl">
                AntiWhale
              </p>
              <p className="lg:text-2xl md:text-2xl sm:text-2xl text-2xl">
                AntiSnipe
              </p>
              <p className="lg:text-2xl md:text-2xl sm:text-2xl text-2xl">
                <span className=" text-[#234bfa]">MaxWallet </span>3%
              </p>
            </div>
          </div>

          <div className="p-2 mt-4 m-auto text-center max-w-lg bg-stone-100 bg-opacity-80 md:text-base sm:text-base rounded-2xl outline outline-2 outline-[#234bfa]">
            <p className="lg:text-2xl md:text-2xl sm:text-2xl text-2xl">
              Mechanime pushes the evolution of meme tokens further into art and lore.
            </p>
          </div>

          <div
            className="p-2 mt-4 m-auto text-center max-w-xl hover:outline-white bg-stone-100 bg-opacity-70 md:text-base sm:text-base rounded-2xl outline outline-2 outline-[#234bfa] cursor-pointer"
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

          <div className="p-2 mt-4 m-auto text-center max-w-lg bg-stone-100 bg-opacity-80 md:text-base sm:text-base rounded-2xl outline outline-2 outline-[#234bfa]">
            <p className="lg:text-2xl md:text-2xl sm:text-2xl text-2xl">
              As chaos led to apocalypse, a few elite families survived in luxury bunkers. 
              Twenty years later, their daughters emerge into a deserted wasteland to fight for last resources on the planet.
              Follow their story on X.
            </p>
          </div>

          <div className="mt-4 p-1 mx-auto">
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
                className="text-stone-100 hover:text-[#234bfa]"
                href="https://dexscreener.com/base/"
              >
                $MechAnime
              </a>
            </p>
          </div>
          <Ticker />
        </div>
      </main>
    </>
  )
}
