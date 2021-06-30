import { Notification } from '@/components/base/notification'

const useNotification = (globalOptions = {}) => {
  return !import.meta.env.SSR ? new Notification(globalOptions) : {}
}

export default useNotification
