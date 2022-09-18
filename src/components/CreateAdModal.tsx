import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Select from '@radix-ui/react-select'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

import {CaretDown, CaretUp, Check, GameController} from 'phosphor-react'
import {Input} from './Form/Input'
import {useState} from 'react'
import {GamesData} from '../App'
import {AxiosError} from 'axios'
import api from '../services/api'
import {PostAd} from '../hook/usePostAd'

type CreateModalProps = {
  games: GamesData[]
}

export type GameForm = {
  game: string
  name: string
  yearsPlaying: string
  discord: string
  weekDays: string[]
  hourStart: string
  hourEnd: string
  useVoice: boolean
}

const baseFormGame: GameForm = {
  game: '',
  name: '',
  yearsPlaying: '',
  discord: '',
  weekDays: ['1'],
  hourStart: '',
  hourEnd: '',
  useVoice: false,
}

export function CreateAdModal({games}: CreateModalProps) {
  const [form, setForm] = useState(baseFormGame)

  function handleForm(e: any) {
    const {id, value} = e.target
    if (id === 'useVoice') {
      setForm({...form, [id]: !value})
    } else {
      setForm({...form, [id]: value})
    }
  }

  async function sendForm() {
    try {
      const res = await PostAd(form)

      if (res) {
        alert('deu certo!')
      }
    } catch (error) {
      const err = error as AxiosError

      console.error(err)
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed overflow-y-auto top-0 left-0 right-0 bottom-0 grid place-items-center">
        <Dialog.Content className=" bg-[#2a2643] py-8 px-10 text-white  rounded-lg w-[480px] shadow-lg shadow-black/25">
          <Dialog.Title className="text-3xl text-white font-black">
            Publique um anúncio
          </Dialog.Title>
          <form className="mt-8 flex flex-col gap-4">
            <div
              className="flex flex-col gap-2"
              onClick={() => console.log(form)}
            >
              <label
                htmlFor="game"
                className="font-semibold"
              >
                Qual o game?
              </label>
              <Select.Root onValueChange={(e) => setForm({...form, game: e})}>
                <Select.Trigger
                  aria-label="game"
                  className={`bg-zinc-900 py-3 px-4 rounded flex justify-between text-sm ${
                    form.game === '' ? 'text-zinc-500' : ''
                  }`}
                >
                  <Select.Value placeholder="Selecione o game que deseja jogar" />

                  <Select.Icon>
                    <CaretDown
                      size={20}
                      className="text-zinc-500"
                    />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="w-full bg-zinc-900  rounded">
                    <Select.ScrollUpButton>
                      <CaretUp
                        size={20}
                        className="text-white"
                      />
                    </Select.ScrollUpButton>
                    <Select.Viewport>
                      <Select.Group>
                        {games.map((item, index) => (
                          <Select.Item
                            key={index}
                            value={item.id}
                            className="text-white hover:bg-violet-500 cursor-pointer px-4 py-1"
                          >
                            <Select.ItemText>{item.title}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Group>
                    </Select.Viewport>
                    <Select.ScrollDownButton>
                      <CaretDown
                        size={20}
                        className="text-white"
                      />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input
                id="name"
                placeholder="Como te chamam dentro do game?"
                value={form.name}
                onChange={(e) => handleForm(e)}
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input
                  id="yearsPlaying"
                  type="number"
                  placeholder="Tudo bem ser ZERO"
                  value={form.yearsPlaying}
                  onChange={(e) => handleForm(e)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="discord">Qual seu Discord?</label>
                <Input
                  id="discord"
                  placeholder="Usuario#0000"
                  value={form.discord}
                  onChange={(e) => handleForm(e)}
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="weekDays">Quando costuma jogar?</label>
                <ToggleGroup.Root
                  type="multiple"
                  className="grid grid-cols-4 gap-2"
                  onValueChange={(e: string[]) =>
                    setForm({...form, weekDays: e})
                  }
                >
                  <ToggleGroup.Item
                    value="0"
                    title="Domingo"
                    className={`w-8 h-8 rounded ${
                      form.weekDays.includes('0')
                        ? 'bg-violet-500'
                        : 'bg-zinc-900'
                    }`}
                  >
                    D
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="1"
                    title="Segunda"
                    className={`w-8 h-8 rounded ${
                      form.weekDays.includes('1')
                        ? 'bg-violet-500'
                        : 'bg-zinc-900'
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="2"
                    title="Terça"
                    className={`w-8 h-8 rounded ${
                      form.weekDays.includes('2')
                        ? 'bg-violet-500'
                        : 'bg-zinc-900'
                    }`}
                  >
                    T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="3"
                    title="Quarta"
                    className={`w-8 h-8 rounded ${
                      form.weekDays.includes('3')
                        ? 'bg-violet-500'
                        : 'bg-zinc-900'
                    }`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="4"
                    title="Quinta"
                    className={`w-8 h-8 rounded ${
                      form.weekDays.includes('4')
                        ? 'bg-violet-500'
                        : 'bg-zinc-900'
                    }`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="5"
                    title="Sexta"
                    className={`w-8 h-8 rounded ${
                      form.weekDays.includes('5')
                        ? 'bg-violet-500'
                        : 'bg-zinc-900'
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="6"
                    title="Sábado"
                    className={`w-8 h-8 rounded ${
                      form.weekDays.includes('6')
                        ? 'bg-violet-500'
                        : 'bg-zinc-900'
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart">Qual horário do dia?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    type="time"
                    id="hourStart"
                    placeholder="De"
                    min="0"
                    max="23"
                    value={form.hourStart}
                    onChange={(e) => handleForm(e)}
                  />
                  <Input
                    type="time"
                    id="hourEnd"
                    placeholder="Até"
                    min="0"
                    max="23"
                    value={form.hourEnd}
                    onChange={(e) => handleForm(e)}
                  />
                </div>
              </div>
            </div>

            <label className="m-2 flex items-center gap-2 text-sm">
              <Checkbox.Root
                className="w-6 h-6 rounded-sm p-1 bg-zinc-900"
                checked={form.useVoice}
                onCheckedChange={(e: boolean) =>
                  setForm({...form, useVoice: e})
                }
                id="useVoice"
              >
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-emerald-400" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              Costumo me conectar ao chat de voz
            </label>

            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.DialogClose
                type="button"
                className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
              >
                Cancelar
              </Dialog.DialogClose>
              <button
                onClick={sendForm}
                className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
              >
                <GameController size={24} />
                Encontrar duo
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}
