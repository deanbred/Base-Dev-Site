import Image from "next/image"
import Head from "next/head"
import { SocialIcon } from "react-social-icons"
import "lightbox.js-react/dist/index.css"
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react"
import React, { useEffect, useState } from "react"
import Ticker from "@/components/Ticker"
import styles from "@/styles/Home.module.css"

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
]

export default function Home() {
  const [copiedText, setCopiedText] = useState(
    "0x9571DeAB183b0C27B13e2d05f956aEF35640b868"
  )

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

      <div className="flex flex-col min-h-screen font-ubuntu bg-[url('../public/bg.png')] bg-[#f1d28e] bg-no-repeat 
      bg-contain 2xl:bg-cover ">
        <Ticker />

        <div className="flex justify-center items-center">
          <h2 className="xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl text-3xl text-white">
            MechAnime
          </h2>
        </div>

        <div className="p-2 space-y-2 text-xl flex flex-col items-end">
          <button
            className="p-1 bg-[#234bfa] hover:bg-[#d1352d] text-stone-200 rounded-xl"
            onClick={async () =>
              window.open(
                "https://app.uniswap.org/swap?chain=base&outputCurrency="
              )
            }
          >
            Buy MECHA
          </button>

          <button
            className="p-1 bg-[#234bfa] hover:bg-[#d1352d] text-stone-200 rounded-xl"
            onClick={async () =>
              window.open(
                "https://dexscreener.com/base/"
              )
            }
          >
            Chart
          </button>

          <div className="flex flex-col ml-auto space-y-4">
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

        <div className="mx-auto mb-4 text-center max-w-lg bg-stone-100 bg-opacity-70 rounded-2xl outline outline-2 outline-slate-800">
          <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
            MechAnime pushes the evolution of base meme tokens further into art
            and lore. Inspired by master game artist Akihiko Yoshida, creator of
            Final Fantasy.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-3xl text-white">
            Contract Address
          </h2>
          <div
            className="p-2 mb-4 max-w-xl hover:outline-white bg-stone-100 bg-opacity-70 md:text-base sm:text-base rounded-2xl outline outline-2 outline-slate-800 cursor-pointer"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(copiedText)
                setCopiedText("Base CA Copied!")
              } catch (err) {
                console.error("Failed to copy text: ", err)
              }
            }}
          >
            <p className="text-base">
              {copiedText}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <h2 className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-3xl text-white">
            Tokenomics
          </h2>
        </div>

        <div className="flex flex-row justify-center mb-4 space-x-3">
          <div className="p-2 text-center bg-stone-100 bg-opacity-70 md:text-base sm:text-base rounded-2xl outline outline-2 outline-slate-800 w-54">
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              <a
                className="text-[#234bfa] hover:text-[#d1352d]"
                href="https://basescan.org/token/"
              >
                Renounced
              </a>
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              <a
                className="text-[#234bfa] hover:text-[#d1352d]"
                href="https://beta.uncx.network/lockers/explore/pools"
              >
                LP Locked
              </a>
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              Mint Revoked
            </p>
          </div>

          <div className="p-2 text-center bg-stone-100 bg-opacity-70 md:text-base sm:text-base rounded-2xl outline outline-2 outline-slate-800 w-54">
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              Supply 42B
            </p>

            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              <a
                className="text-[#234bfa] hover:text-[#d1352d]"
                href="https://app.uniswap.org/pools/v2"
              >
                V2 Pool
              </a>{" "}
              90%
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              <a
                className="text-[#234bfa] hover:text-[#d1352d]"
                href="https://basescan.org/address/0x945050218120E95Cbf30d352F35546E6b35B5355"
              >
                Burns
              </a>{" "}
              5%
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              <a
                className="text-[#234bfa] hover:text-[#d1352d]"
                href="https://basescan.org/address/0xdf921074AF44aABA0da0A7B2F0F5fa0D9FddE71f"
              >
                Team
              </a>{" "}
              5%
            </p>
          </div>

          <div className="p-2 text-center bg-stone-100 bg-opacity-70 md:text-base sm:text-base rounded-2xl outline outline-2 outline-slate-800 w-54">
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              Anti-Sniper
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              No MEV Bots
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              Tax Free
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              No Presale
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <h2 className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-3xl text-white">
            Sniper and MEV Defenses
          </h2>
        </div>

        <div className="mx-auto mb-4">
          <Image src="code.png" width={740} height={300} alt="Logo"></Image>
        </div>

        <div className="flex justify-center">
          <h2 className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-3xl text-white">
            BackStory
          </h2>
        </div>

        <div className="mx-auto mb-4 text-center max-w-lg bg-stone-100 bg-opacity-70 rounded-2xl outline outline-2 outline-slate-800">
          <p className="lg:text-2xl md:text-2xl sm:text-xl text-lg">
            As holy wars escalated into total apocalypse the world's elite
            withdrew into fortified underground vaults. They took the best AI,
            robotics, and weapons tech with them. 20 years later, their
            mecha-warrior daughters emerge into the dune wasteland to battle for
            the planet's last resources. Follow their story on X and TG.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#f1d28e]">
          <h2 className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-3xl text-white">
            Characters
          </h2>

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
                height={600}
                width={400}
                data-lightboxjs="lightbox1"
                quality={80}
              />
            ))}
          </SlideshowLightbox>

          <p className="m-2 lg:text-4xl md:text-3xl sm:text-3xl text-3xl text-white">
            <a
              className="hover:text-[#d1352d]"
              href="https://app.uniswap.org/swap?chain=base&outputCurrency=0x5B45E6e1a6F072A3d75CE2E2a0ebc065926410D8"
            >
              Ticker:$MECHA
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
