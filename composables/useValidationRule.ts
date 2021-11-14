export default () => {
  const emailRule = (v: string) => !v || /.+@.+\..+/.test(v.toLowerCase()) || "L'adresse mail n'est pas valide."

  const requiredRule = (v: any) => !!v || 'Ce champs est obligatoire.'

  return {
    emailRule,
    requiredRule
  }
}
