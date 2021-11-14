export default (value: any, rules: any, immediate = true) => {
  const form = {
    message: '',
    isValid: true
  }

  if (immediate) {
    for (let rule of rules) {
      if (typeof rule(value) === 'string') {
        form.message = rule(value)
        form.isValid = false

        break
      }
    }
  }

  return form
}