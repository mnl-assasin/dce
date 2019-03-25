export const emptyMethod = string => {}

export const isDefined = value => {
  return typeof value !== 'undefined' && value !== null
}

export const orderObjectByKey = obj => {
  return Object.entries(obj)
    .sort()
    .reduce(
      (_sortedObj, [k, v]) => ({
        ..._sortedObj,
        [k]: v,
      }),
      {}
    )
}
