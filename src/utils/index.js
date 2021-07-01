const generateRandomId = (
  (i) => () =>
    i++
)(0)

const dynamicSort = (property, sortType = 'ASC') => {
  let sortOrder = sortType === 'ASC' ? 1 : -1

  if (sortOrder === -1) {
    property = property.substr(1)
  }
  return function (a, b) {
    let result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    return result * sortOrder
  }
}

export { generateRandomId, dynamicSort }
