# Wrapper / react fragment

To avoid `<div>` soup, we can use

```
<>
</>
```

or

```
<React.fragment>
</React.fragment>
```

to wrap components.

The same way it works as we create our own Wrapper component.

# Portals

Mark a component so that it will be rendered at a specific place that differs from where other components are rendered (`<root>`) while keeping the `return` content the same as before.

1. The place where the component to be port to (edit .html file);

```
<div id='backdrop-root'></div>
```

2. The component should be tagged so it has a portal.

```
import ReactDOM from 'react-dom';

const Backdrop = props => {
	return <div></div>
}

{ReactDOM.createPortal(<Backdrop />), document.getElementById=('backdrop-root')}
```

# 'ref's
```
import { useRef } from 'react'

const AddUser = props => {
	const nameInputRef = useRef(); 


	<input 
		ref={nameInputRef}
	/>
}
```
`nameInputRef` will end up with having the real DOM object.

# Controlled vs uncontrolled components 
Components's internal states not managed by react.
