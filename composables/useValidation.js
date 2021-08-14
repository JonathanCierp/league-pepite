const useValidation = (value, rules, immediate = true) => {
  let form = {
    message: '',
    isValid: true
  }

  if (immediate) {
    for (let rule of rules) {
      if (typeof rule(value) === 'string') {
        form = {
          message: rule(value),
          isValid: false
        }
        break
      }
    }
  }

  return form
}

export default useValidation
