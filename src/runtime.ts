import { RuntimePlugin } from 'nexus/plugin'
import { Settings } from './settings'
import kurento from 'kurento-client'

export const plugin: RuntimePlugin<Settings, 'required'> = settings => project => {
  return {
    context: {
      create: async _req => {
        const kurentoClient = await kurento(settings.kurentoUrl)
          .catch((error: any) => console.log(error))

        return {
          kurentoClient
        }
      },
      typeGen: {
        fields: {
          kurentoClient: 'any'
        }
      }
    }
  }
}