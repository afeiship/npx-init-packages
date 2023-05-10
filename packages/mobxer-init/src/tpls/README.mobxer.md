# Usage


## usgae

> provider.tsx
```jsx
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from '@jswork/react-mobxer';
import App from './app.t';

const ctx = require.context('./stores/', true, /\.(ts|js|tsx|jsx)$/);


ReactDOM.render(
    <ConfigProvider context={ctx} harmony>
      <App />
    </ConfigProvider>,
  document.getElementById('root')
);
```

> componet.tsx
```jsx
import React from 'react';

const App = () => {
  const { user, auth } = nx.$root;

  return (
    <div>Hello {user.username}</div>
  );
};

export default App;
```
