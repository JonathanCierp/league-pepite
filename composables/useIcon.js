import * as feather from 'feather-icons'

/**
* Use icon function
**/
const useIcon = (iconName) => {
  return iconName ? feather.icons[iconName] : {}
}

export default useIcon
