import {Trigger} from '@radix-ui/react-dialog'
import {MagnifyingGlassPlus} from 'phosphor-react'

export const CreateAdBanner = () => {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8 ">
      <div className="bg-[#2a2634] py-6 px-8 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <Trigger className="transition-all flex items-center gap-3 bg-violet-500 rounded-md px-4 py-3 text-white font-medium hover:bg-violet-600">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Trigger>
      </div>
    </div>
  )
}
