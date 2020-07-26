# Custom React Renderer

Building a simple "hello world" react renderer. Following [this tutorial](https://medium.com/@agent_hunt/hello-world-custom-react-renderer-9a95b7cd04bc) from [Shailesh](https://medium.com/@agent_hunt).

### Other pages of note:

[React's Reconciliation Page](https://reactjs.org/docs/reconciliation.html)

[react-reconciler](https://www.npmjs.com/package/react-reconciler) which is added to this project.

Holy cow...it works!

The functions in myCustomRenderer.js can be grouped into different categories:

### Creation Operations:

1. `createInstance(type, newProps, rootContainerInstance, _currentHostContext, workInProgress)`: this is where react-reconciler wants to create an instance of a UI element in terms of the target. Since the target is the DOM, we will create `document.createElement` and `type` will contain the type string that contains the element. The initial values of `domElement` can be set in this function from the `newProps` argument.
2. `createTextInstance`: This function is used to create separate text nodes if the target allows.

### UI Tree Operations

1.  `appendInitialChild`: Called for initial UI tree creation. Maps to `domElement.appendChild`.
2.  `appendChild`: Similar to `appendInitialChild` but for subsequent tree manipulation. Maps to `domElement.appendChild`.
3.  `removeChild`: Maps to `domElement.removeChild`.
4.  `appendChildToContainer`: Gets called in the `commitPhase` of react-reconciler. Maps to `domElement.appendChild`.

### Update Prop Operations

1.  `finalizeInitialChildren`: This function can be left empty.
2.  `prepareUpdate`: This is where to diff oldProps and newProps and decide whether and what to update. Here set to `true` for simplicity.
3.  `commitUpdate(domElement, updatePayload, type, oldProps, newProps)`: used to subsequently update domElement attributes from `newProps` values.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Nothing else is supported.
