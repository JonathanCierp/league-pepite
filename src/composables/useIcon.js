import * as feather from 'feather-icons'

const useIcon = (iconName) => {
  return iconName ? feather.icons[iconName] : {}
}

export default useIcon
