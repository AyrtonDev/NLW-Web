import {GameForm} from '../components/CreateAdModal'
import api from '../services/api'

export async function PostAd(form: GameForm) {
  try {
    const {status} = await api.post(`/games/${form.game}/ads`, {
      name: form.name,
      yearsPlaying: Number(form.yearsPlaying),
      discord: form.discord,
      weekDays: form.weekDays.map(Number),
      hourStart: form.hourStart,
      hourEnd: form.hourEnd,
      useVoiceChannel: form.useVoice,
    })

    if (status === 201) {
      return true
    }
  } catch (error) {
    throw error
  }
}
