import React, {useState} from 'react';
import './StyleSheets/App.css';
import "./Components/styles.css";
// import LoginButton from './Components/LoginButton';
import BucketList from './Components/BucketList';
import ParkList from './Components/ParkList'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WispnLogo from './images/Wispn.png';
// import LoginForm from './Components/LoginForm';

const theme = createTheme({
  palette: {
    primary: {
      main: '#26812a',
    },
    secondary: {
      main: '#cb1459',
    },
  },
});

function App() {
  // const [isShowLogin, setIsShowLogin] = useState(true);

  // const handleLoginClick = () => {
  //   setIsShowLogin((isShowLogin) => !isShowLogin);
  // };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header" >
          <img src={WispnLogo} alt='Wispn Logo' className='wispn-logo'/>
        </header>
        <div className="Body">
          <BucketList/>
          <ParkList/>
        </div>

      </ThemeProvider>
    </div>
  );
}

export default App;
