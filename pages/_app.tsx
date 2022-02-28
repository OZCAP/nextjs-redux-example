import type { AppProps } from 'next/app'

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import fooReducer from '../src/reducers/FooReducer'

const store = configureStore({
  reducer:  {
    foo: fooReducer,
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>)
}

export default MyApp
