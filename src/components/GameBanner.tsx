import {ReactNode} from 'react'

type GameBannerProps = {
  urlImg: string
  game: string
  ads: number
}

export const GameBanner = ({urlImg, game, ads}: GameBannerProps) => {
  return (
    <a
      href=""
      className="relative rounded-lg overflow-hidden"
    >
      <img src={urlImg} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{game}</strong>
        <span className="text-zinc-300 text-sm block">{ads} anúncios</span>
      </div>
    </a>
  )
}
