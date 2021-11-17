export default () => {
  const countDownDate = new Date('12/16/2021')
  const countdown = ref({
    isTime: false,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate.getTime() - now;

    countdown.value = {
      isTime: false,
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }

    if (distance < 0) {
      clearInterval(interval);
      countdown.value.isTime = true
    }
  }, 1000)

  return {
    countDownDate,
    countdown,
    interval
  }
}