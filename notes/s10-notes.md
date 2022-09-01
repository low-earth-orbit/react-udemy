# Learned so far
* Components
* `props`
* `useState`
	Your main state management tool

* Fragments, Portals, Refs (`useRef`)
# New in this section
* `useEffect`
* `useReducer`
	For complex state. Update a state that depends on another state.

	```
	const initialState = { };

	const [state, dispatchFn] = useReducer(reducerFn, initialState);
	```

	Or

	```
	const initFn = (initialArg) = {
		return ;
	}

	const [state, dispatchFn] = useReducer(reducerFn, initialArg, initFn);
	```

* `useContext`
	- Component-wide, "behind-the-scenes" state storage.
	- Avoids `props` chain, but not ideal for replacing short 'props chains'.
	- Not optimized for high frequency changes - better tool: `redux`

* "Rules of Hooks"
	- React Hooks: functions start with `use`, e.g. `useReducer`. 
	- Only call React Hooks in React functions.
	- Only call React Hooks at the top level.
	- Always add everything you refer to inside of `useEffect` as dependency.

* `useImperativeHandle`