export default (uri: string, opts: {} = { method: 'GET', server: false }) => {
  const config = useRuntimeConfig()

  return useFetch(`${config.API_URL}${uri}`, opts)
}