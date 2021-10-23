export default function () {
  const menus = ref([
    {
      to: '/',
      label: 'Présentaion'
    },
    {
      to: '/rankings',
      label: 'Classement'
    },
    {
      to: '/challenges',
      label: 'Challenge'
    },
    {
      to: '/abouts',
      label: 'A propos'
    },
    {
      to: '/joins',
      label: 'La League'
    }
  ])

  return {
    menus
  }
}