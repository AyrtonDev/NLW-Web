import * as Dialog from '@radix-ui/react-dialog'
import logoImg from './assets/logo-nlw-svg.svg'
import {useEffect, useState} from 'react'
import {GetGames} from './hook/useGetGames'
import {GameBanner} from './components/GameBanner'
import {LoadingSpinner} from './components/LoadingSpinner'
import {CreateAdBanner} from './components/CreateAdBanner'

import './styles/main.css'
import {CreateAdModal} from './components/CreateAdModal'

export type GamesData = {
  id: string
  title: string
  bannerUrl: string
  ads: number
}

function App() {
  const [games, setGames] = useState<GamesData[] | null>(null)

  useEffect(() => {
    GetGames(setGames)
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      {games ? (
        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map((game) => (
            <GameBanner
              key={game.id}
              game={game.title}
              urlImg={game.bannerUrl}
              ads={game.ads}
            />
          ))}
        </div>
      ) : (
        <LoadingSpinner />
      )}

      <Dialog.Root>
        <CreateAdBanner />

        {games && <CreateAdModal games={games} />}
      </Dialog.Root>
    </div>
  )
}

export default App
