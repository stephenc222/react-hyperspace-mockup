import findNearestElement from './findNearestElement'
import eventController from './eventController'

const targetRefTable = {}

// control scroll here
const onControlScroll = (id) => {
  const targetRef = id in targetRefTable ? targetRefTable[id].targetRef : null
  targetRef && targetRef.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const addControllerRef = ({ ref, id }) => {
  targetRefTable[id] = { controllerRef: ref, id }
}

const addTargetRef = ({ ref, id }) => {
  targetRefTable[id] = { targetRef: ref, id }
}

const onTargetScroll = e => {
  const { scrollTop } = e.target
  const targetCoordsArr = Object.keys(targetRefTable)
    .map(id => ({ id, targetRef: targetRefTable[id].targetRef }))
    .filter(({ targetRef }) => !!targetRef)
    .map(({ targetRef, id }) => {
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