export default () => {
  const menus = ref([
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
  const mobileMenuIsOpen = useState('mobileMenuIsOpen', () => false)

  const toggleMobileMenu = () => mobileMenuIsOpen.value = !mobileMenuIsOpen.value

  return {
    menus,
    mobileMenuIsOpen,
    toggleMobileMenu
  }
}