import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return(
    <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
