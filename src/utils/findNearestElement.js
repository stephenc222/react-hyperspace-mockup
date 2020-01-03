const findNearestElement = (elements, scrollTop) => {
  const { abs: mathAbs } = Math
  const nearest = elements.reduce((f, next) => {
    const distance = mathAbs(next.offsetTop - scrollTop)

    if (!f) {
      return { element: next, distance }
    }

    if (distance < f.distance) {
      return { element: next, distance }
    }

    return f
  }, null)

  return nearest ? [nearest.element, nearest.distance] : [null, 0]
}

export default findNearestElement