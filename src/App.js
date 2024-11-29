import './App.css';
import WelcomeScreen from './WelcomeScreen';
import { IntlProvider } from 'react-intl'

function App() {
  return (
    <IntlProvider locale="ru">

    <WelcomeScreen />
    </IntlProvider>
  );
}

export default App;
