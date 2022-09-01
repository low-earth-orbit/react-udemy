# onClick
```
<button onClick={() => {console.log('Clicked!')}}>Change Title</button>
```
```
<button onClick={clickHandler}>Change Title</button>
```
`{clickHandler}` is a pointer to the function

# useState
```
import React, { useState } from "react";

const [eneteredTitle, setEnteredTitle] = useState("");

const titleChangeHandler = (event) => {
	setEnteredTitle(event.target.value);
};
```