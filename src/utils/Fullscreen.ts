import { NativeModules } from 'react-native'

type FullScreen = {
  enable: () => void
  disable: () => void
}

export default NativeModules.FullScreen as FullScreen
