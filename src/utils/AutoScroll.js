import findNearestElement from './findNearestElement'
import eventController from './eventController'

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

const onTargetScroll = e => {
  const { scrollTop } = e.target
  const targetCoordsArr = targetRefArr.map(({ targetRef, id }) => {
    const { offsetTop } = targetRef
    return {
      id,
      offsetTop,
    }
  })
  const [nearestTarget] = findNearestElement(targetCoordsArr, scrollTop)
  if (nearestTarget && nearestTarget.id) {
    eventController.dispatch('SCROLLED_TO_TARGET', { verbose: false, args: [{ passedToListener: true, targetId: nearestTarget.id }] })
  }
}
export {
  addControllerRef,
  addTargetRef,
  onControlScroll,
  onTargetScroll
}