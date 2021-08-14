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
    let result = a < b ? -1 : a > b ? 1 : 0
    if (property) {
      result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    }

    return result * sortOrder
  }
}

const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

export { generateRandomId, dynamicSort, groupBy }
