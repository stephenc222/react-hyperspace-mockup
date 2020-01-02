const _controllerRefArr = []
const _targetRefArr = []

// control scroll here
const onControllScroll = (id) => {
  const targetRef = _targetRefArr.find(refItem => refItem.id === id).targetRef
  targetRef.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const _useControllerRef = ({ ref, id }) => {
  !_controllerRefArr.find(refItem => refItem.id === id) && _controllerRefArr.push({ controllerRef: ref, id })
}

const _useTargetRef = ({ ref, id }) => {
  !_targetRefArr.find(refItem => refItem.id === id) && _targetRefArr.push({ targetRef: ref, id })
}

const getControllerRef = ({ ref, id }) => _useControllerRef({ ref, id })
const getTargetRef = ({ ref, id }) => _useTargetRef({ ref, id })

export {
  getControllerRef,
  getTargetRef,
  onControllScroll
}