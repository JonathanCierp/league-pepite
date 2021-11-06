import * as feather from 'feather-icons'
import * as heroIconOutline from '@heroicons/vue/outline'
import * as heroIconSolid from '@heroicons/vue/solid'
import { toPascalCase } from '@/utils'

export default function (iconName: string, iconType: string, type: string) {
  let icon: any = ''

  if (iconType === 'feather') {
    icon = iconName ? feather.icons[iconName] : {}
  } else if (iconType === 'heroicon') {
    icon = type === 'outline' ? heroIconOutline : heroIconSolid
    icon = icon[toPascalCase(`${iconName}-icon`)]
  }

  return {
    icon
  }
}