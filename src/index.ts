import { loadEnvironmentVariables } from './util/env'
import { SlackBotRequest } from './interfaces'
import { post } from './util/http'
import { log } from './util/logger'
import { seconds } from './util/timer'

const MORGAN_GIF = 'https://gph.is/g/4gA20OJ'

async function init(): Promise<void> {
  const { HOOK, TOKEN } = await loadEnvironmentVariables<SlackBotRequest>()
  const postMessage = post(HOOK)({ Authorization: `Bearer ${TOKEN}` })

  await postMessage({ text: '<!channel> standup!', as_user: true })
  log('Sent message:', '@channel')

  await seconds(3)

  await postMessage({ text: MORGAN_GIF, as_user: true })
  log('Sent message:', 'Morgan & Bugo - Sanremo - GIF')
}

init()
