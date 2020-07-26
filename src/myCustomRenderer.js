import ReactReconciler from 'react-reconciler';

/** hostConfig is the object where we need to implement the functions
 * that will be used by ReactReconciler.
 *
 * Now is a function that seems to be required
 */
const hostConfig = {
  now: Date.now,
  getRootHostContext: () => {},
  getChildHostContext: () => {},
  shouldSetTextContent: () => {},
  prepareForCommit: () => {},
  resetAfterCommit: () => {},
  createTextInstance: () => {},
  createInstance: () => {},
  appendAllChildren: () => {},
  appendInitialChild: () => {},
  finalizeInitialChildren: () => {},
  appendChildToContainer: () => {},
  supportsMutation: true,
};

const ReactReconcilerInst = ReactReconciler(hostConfig);
export default {
  render: (reactElement, domElement, callback) => {
    //console.log(arguments); // not defined?
    // Create a root container if it doesn't exist
    if (!domElement._rootContainer) {
      domElement._rootContainer = ReactReconcilerInst.createContainer(
        domElement,
        false
      );
    }

    // update the root container
    return ReactReconcilerInst.updateContainer(
      reactElement,
      domElement._rootContainer,
      null,
      callback
    );
  },
};
