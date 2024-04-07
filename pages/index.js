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

      <div className=" bg-no-repeat xl:bg-contain lg:bg-contain md:bg-contain sm:bg-contain xs:bg-contain bg-contain 2xl:bg-cover bg-[#f1d28e] bg-[url('../public/bg.png')]">
        <main id="page-wrap" className="font-ubuntu">
          <div className="p-1 flex min-h-screen flex-col border-b-2 overflow-hidden">
            <div className="flex justify-center items-center w-full">
              <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl text-2xl text-stone-200">
                MechAnime
              </h2>
            </div>

            <div className="p-1 pl-3 mb-4 mr-auto text-xl space-y-4 flex flex-col items-start">
              <button
                className="p-1 bg-[#234bfa] text-stone-200 rounded-xl"
                onClick={async () =>
                  window.open("https://aerodrome.finance/swap?from=eth&to=")
                }
              >
                Buy Now
              </button>

              <button
                className="p-1 bg-[#234bfa] text-stone-200 rounded-xl"
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

            <div className="p-2 mt-4 m-auto text-center max-w-lg bg-stone-100 bg-opacity-80 rounded-2xl outline outline-2 outline-[#234bfa]">
              <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                MechAnime is the evolution of meme tokens further into art and
                lore, inspired by master game artist Akihiko Yoshida.
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

            <div className="flex flex-row justify-center space-x-3 ">
              <div className="p-2 mt-4 text-center max-w-lg bg-stone-100 bg-opacity-80 md:text-base sm:text-base rounded-2xl outline outline-2 outline-[#234bfa] w-48">
                <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  <a
                    className="text-[#234bfa] hover:text-[#d1352d]"
                    href="https://basescan.org/token/"
                  >
                    Renounced Contract
                  </a>
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  <a
                    className="text-[#234bfa] hover:text-[#d1352d]"
                    href="https://basescan.org/token/"
                  >
                    LP Burnt
                  </a>
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  RUG PROOF
                </p>
              </div>

              <div className="p-2 mt-4 text-center max-w-lg bg-stone-100 bg-opacity-80 md:text-base sm:text-base rounded-2xl outline outline-2 outline-[#234bfa] w-48">
                <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  Supply 42B
                </p>

                <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  <a
                    className="text-[#234bfa] hover:text-[#d1352d]"
                    href="https://basescan.org/address/"
                  >
                    Liquidity
                  </a>{" "}
                  92%
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  <a
                    className="text-[#234bfa] hover:text-[#d1352d]"
                    href="https://basescan.org/address/"
                  >
                    Burn
                  </a>{" "}
                  5%
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  <a
                    className="text-[#234bfa] hover:text-[#d1352d]"
                    href="https://basescan.org/address/"
                  >
                    Team
                  </a>{" "}
                  3%
                </p>
              </div>

              <div className="p-2 mt-4 text-center max-w-lg bg-stone-100 bg-opacity-80 md:text-base sm:text-base rounded-2xl outline outline-2 outline-[#234bfa] w-48">
                <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  Anti-Snipe
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  Anti-Whale
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  MaxWallet 3%
                </p>
                <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  NO TAX
                </p>
              </div>
            </div>

            <div className="p-2 mt-4 m-auto text-center max-w-lg bg-stone-100 bg-opacity-80 rounded-2xl outline outline-2 outline-[#234bfa]">
              <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
                As chaos spiraled into apocalypse, the world's elite retreated
                to secure bunkers. Now their mecha-warrior daughters have
                emerged into a desert wasteland to fight for last resources on
                the planet. Follow their story on X.
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
