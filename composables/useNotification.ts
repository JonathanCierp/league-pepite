import Notification, { NotificationOption } from '~~/utils/Notification'

export default (globalOptions: NotificationOption = {}) => {
  if (process.env.SSR !== undefined) {
    return new Notification(globalOptions)
  }
}