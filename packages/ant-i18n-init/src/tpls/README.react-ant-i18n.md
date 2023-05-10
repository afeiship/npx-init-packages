# Sample
> 基本用法。

## usage
> provider/app.tsx

```jsx
import { LocaleProvider } from '@jswork/react-ant-i18n';
// special for alo7(
// yarn add @alo7/i18n-language-detect --registry=https://repos.saybot.net/repository/alo7npm/
import LngDetect from '@alo7/i18n-language-detect';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <LocaleProvider options={{ debug: false }} plugins={[LngDetect]}>
    <App />
  </LocaleProvider>
);
```

> app.tsx

```jsx
import React from 'react';
import { useIntl } from '@jswork/react-ant-i18n';

function App() {
  const { t, i18n } = useIntl();

  console.log(i18n.language);

  return (
    <div className="App">
      <h1>
        Hello world! - {t('common.btn')}
      </h1>
    </div>
  );
}
export default App;
```
