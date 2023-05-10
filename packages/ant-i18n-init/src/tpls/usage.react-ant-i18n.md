# Sample
> 基本用法。

## app.tsx
```jsx
import { LocaleProvider } from '@jswork/react-ant-i18n';
// special for alo7
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

## usage
```jsx
import React from 'react';
import { useIntl } from '@jswork/react-ant-i18n';

function App() {
  const { t, i18n } = useIntl();

  console.log(i18n.language);

  return (
    <div className="App p-2">
      <h1 className="text-3xl bg-slate-100 font-bold underline">
        Hello world! - {t('common.btn')}
      </h1>
    </div>
  );
}
export default App;
```
