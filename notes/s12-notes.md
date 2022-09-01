# React.memo()
Prevents unnecessary re-evaluation.

```
export default React.memo(ExampleComponent);
```

This function compares if props values have been changed from the previous values.

# useCallback()

Functions, arrays, objects passed as props will never equal to the previous props. This is because of JavaScript. In this case, React.momo() alone will not be useful.

The solution to this: `useCallback()` tells React that we want to store a function so that across components this object will not be changed.

```
import { useCallback } from 'react';

const toggleParagraphHandler = useCallback(
	() => {
		// original code here
	}, []
	// the second argument [] is dependencies 
);
```

# useMemo()