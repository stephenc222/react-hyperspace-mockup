import React, { useState, useContext, createRef } from 'react'

const ScrollContext = React.createContext({})

const ScrollProvider = ScrollContext.Provider

// const anyRef = useRef(null)
// window.setTimeout(() => {
//   anyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
// }, 2500)

/**
 * gives it's immediate child a callback to call with an id (user-supplied) to abstractly scroll to
 * NOTE: MUST WRAP ACTUAL JSX OR REF CREATION WILL FAIL
 * FIXME: if child is not directly JSX, but a function, throw and explain why
 * @param {Object} param - the whole props object
 * @param {Object} params.props - the props object, collected from the params object
 * @param {Object} params.children - children components to render
 */
const AutoScrollController = ({ children, controllerId = null, ...props }) => {
  if (!controllerId) {
    throw new Error('controllerId must be supplied to AutoScrollTarget', { controllerId })
  }
  // get first child (only 1!) and call _addTarget to push the controller ref to the Context state
  // _addController({ id: 'Eminem', ref: { what: 123 } })
  const controllerRef = createRef(children)
  const { _addController, refs: { controllerRefsArr } } = useContext(ScrollContext);
  !controllerRefsArr.find(item => item.controllerId === controllerId) && _addController({ controllerRef, controllerId }, controllerRefsArr)
  console.log('CONTROLLER PROPS:', { children, controllerRef, ...props })
  console.log({ _addController })
  return React.cloneElement(children, { ...props, ref: controllerRef })

}

/**
 * wraps a child container for telling AutoScrollContext about this scrollable component
 * NOTE: MUST WRAP ACTUAL JSX OR REF CREATION WILL FAIL
 * FIXME: if child is not directly JSX, but a function, throw and explain why
 * @param {Object} param - the whole props object passed to this HOC
 * @param {Object} params.props - the props object, collected from the params object
 * @param {Object} params.children - children components to render
 */
const AutoScrollTarget = ({ children, targetId = null, ...props }) => {
  // get first child (only 1!) and call _addTarget to push the target ref to the Context state
  if (!targetId) {
    throw new Error('targetId must be supplied to AutoScrollTarget', { targetId })
  }
  const targetRef = createRef(children)
  console.log({ targetRef, targetId })
  console.log('TARGET PROPS:', { children, targetRef, ...props })
  const { _addTarget, refs: { targetRefsArr } } = useContext(ScrollContext);
  !targetRefsArr.find(item => item.targetId === targetId) && _addTarget({ targetRef, targetId }, targetRefsArr)
  return React.cloneElement(children, { ...props, ref: targetRef })

}

// TODO: add the rest of CRUD for managing refs internally
// connects target to context
const _createAddTarget = (onUpdate) => (nextTargetRef, currentTargetRefsArr) => {
  console.warn('_addTarget called', { nextTargetRef })
  currentTargetRefsArr.push(nextTargetRef)
  onUpdate(currentTargetRefsArr)
}
// connects controller to context
const _createAddController = (onUpdate) => (nextControllerRef, controllerRefsArr) => {
  console.warn('_addController called', { nextControllerRef })
  controllerRefsArr.push(nextControllerRef)
  onUpdate(controllerRefsArr)
}

/**
 * the "context" to enable controllers and targets to commmunicate
 * gives it's immediate child a callback to call with an id (user-supplied) to abstractly scroll to
 * @param {Object} param - the whole props object
 * @param {Object} params.props - the props object, collected from the params object
 * @param {Object} params.children - children components to render
 */
const AutoScrollContext = ({ children, ...props }) => {
  const [targetRefsArr, updateTargetRefs] = useState([])
  const [controllerRefsArr, updateControllerRefs] = useState([])
  const _addTarget = _createAddTarget(updateTargetRefs)
  const _addController = _createAddController(updateControllerRefs)
  console.log('CONTEXT:', { targetRefsArr, controllerRefsArr, _addTarget, _addController })
  return (
    <ScrollProvider
      value={{
        _addController,
        _addTarget,
        refs: { controllerRefsArr, targetRefsArr }
      }}>
      {React.cloneElement(children, { ...props })}
    </ScrollProvider>
  )
}

export { AutoScrollContext, AutoScrollController, AutoScrollTarget }
