import { RuntimePlugin } from 'nexus/plugin'

export const plugin: RuntimePlugin = () => project => {
  return {
    context: {
      create: _req => {
        return {
          'nexus-plugin-kurento-client': 'hello world!'
        }
      },
      typeGen: {
        fields: {
          'nexus-plugin-kurento-client': 'string'
        }
      }
    }
  }
}