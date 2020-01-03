const controllerRefArr = []
const targetRefArr = []

// control scroll here
const onControlScroll = (id) => {
  const targetRef = targetRefArr.find(refItem => refItem.id === id).targetRef
  targetRef.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const addControllerRef = ({ ref, id }) => {
  !controllerRefArr.find(refItem => refItem.id === id) && controllerRefArr.push({ controllerRef: ref, id })
}

const addTargetRef = ({ ref, id }) => {
  !targetRefArr.find(refItem => refItem.id === id) && targetRefArr.push({ targetRef: ref, id })
}

export {
  addControllerRef,
  addTargetRef,
  onControlScroll
}