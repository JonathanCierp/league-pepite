import Notification, { NotificationOption } from '~/components/base/notification'

export default (globalOptions: NotificationOption = {}) => {
  if (process.env.SSR !== undefined) {
    return new Notification(globalOptions)
  }
}