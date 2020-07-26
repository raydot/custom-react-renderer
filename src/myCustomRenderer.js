import ReactReconciler from 'react-reconciler';

/** hostConfig is the object where we need to implement the functions
 * that will be used by ReactReconciler.
 *
 * Now is a function that seems to be required.
 *
 * The rest of these declarations were determined through a process of trial-and-error.
 */

const rootHostContext = {};
const childHostContext = {};

const hostConfig = {
  now: Date.now,
  getRootHostContext: () => {
    return rootHostContext;
  },
  getChildHostContext: () => {
    return childHostContext;
  },
  shouldSetTextContent: (type, props) => {
    return (
      typeof props.children === 'string' || typeof props.children === 'number'
    );
  },
  prepareForCommit: () => {},
  resetAfterCommit: () => {},
  /**
   * This is where react-reconciler wants to create an instance of UI element
   * in terms of the target. Since our target here is the DOM, we will create 
   * document.createElement and our type will be an argument that contains the type 
   * string (div or img or h1 etc.). 
   * 
   * The initial values of domElement attributes can be set in this function 
   * from the newProps argument

   */
  createInstance: (
    type,
    newProps,
    rootContainerInstance,
    _currentHostContext,
    workInProgress
  ) => {
    const domElement = document.createElement(type);
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];
      if (propName === 'children') {
        if (typeof propValue === 'string' || typeof propValue === 'number') {
          domElement.textContent = propValue;
        }
      } else if (propName === 'onClick') {
        domElement.addEventListener('click', propValue);
      } else if (propName === 'className') {
        domElement.setAttribute('class', propValue);
      } else {
        const propValue = newProps[propName];
        domElement.setAttribute(propName, propValue);
      }
    });
    return domElement;
  },
  createTextInstance: (text) => {
    return document.createTextNode(text);
  },
  appendAllChildren: () => {},
  appendInitialChild: (parent, child) => {
    parent.appendChild(child);
  },
  appendChild(parent, child) {
    parent.appendChild(child);
  },
  finalizeInitialChildren: (domElement, type, props) => {},

  supportsMutation: true,
  appendChildToContainer: (parent, child) => {
    parent.appendChild(child);
  },
  prepareUpdate(domElement, oldProps, newProps) {
    return true;
  },
  commitUpdate(domElement, updatePayload, type, oldProps, newProps) {
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];
      if (propName === 'children') {
        if (typeof propValue === 'string' || typeof propValue === 'number') {
          domElement.textContent = propValue;
        }
      } else {
        const propValue = newProps[propName];
        domElement.setAttribute(propName, propValue);
      }
    });
  },
  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.text = newText;
  },
  removeChild(parentInstance, child) {
    parentInstance.removeChild(child);
  },
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
