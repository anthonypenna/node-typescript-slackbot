import { loadEnvironmentVariables } from './util/env'
import { SlackBotRequest } from './interfaces'
import { post } from './util/http'
import { log } from './util/logger'
import { seconds } from './util/timer'

const STANDUP_TIME = '12:29'
const MORGAN_GIF = 'https://gph.is/g/4gA20OJ'
const MAZZARRI_GIF = 'https://gph.is/g/4oLzgVP'

async function init(): Promise<void> {
  const { HOOK, TOKEN } = await loadEnvironmentVariables<SlackBotRequest>()
  const postMessage = post(HOOK)({ Authorization: `Bearer ${TOKEN}` })

  log('Starting...')

  const interval = setInterval(async () => {
    const time = new Date().toLocaleTimeString().split(' ')[0]
    const hours = time.split(':')[0]
    const minutes = time.split(':')[1]

    if (`${hours}:${minutes}` === STANDUP_TIME) {
      clearInterval(interval)

      await postMessage({ text: '<!channel> standup!', as_user: true })
      log('Sent message: @channel standup!')

      await seconds(3)

      await postMessage({ text: MORGAN_GIF, as_user: true })
      log('Sent message: Morgan - GIF')

      await seconds(3)

      await postMessage({ text: MAZZARRI_GIF, as_user: true })
      log('Sent message: Mazzarri - GIF')
    } else {
      log('Waiting...')
    }
  }, 5000)
}

init()
