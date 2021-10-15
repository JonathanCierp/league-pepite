const useValidationRule = () => {
  const emailRule = (v) => !v || /.+@.+\..+/.test(v.toLowerCase()) || "L'adresse mail n'est pas valide."

  const requiredRule = (v) => !!v || 'Ce champs est obligatoire.'

  return {
    emailRule,
    requiredRule
  }
}

export default useValidationRule
