import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Withdraw from './components/Withdraw'
import Pat from './components/Pat'
import userAvatar from './image/bot.jpg'
import botAvatar from './image/user.jpg'

class App extends Component {

  render() {
     const theme = {
      background: '#f5f8fb',
      fontFamily: 'Helvetica Neue',
      headerBgColor: '#EF6C00',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: '#EF6C00',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
    };

    const steps = [
      {
        id: '1',
        message: '嗨～你好啊，M besos，冒昧的加你联系方式不知道有没有打扰到你',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '4',
      },
      {
      id: '4',
      component: (
        <Withdraw/>
      ),
      trigger: '5',
      },
      {
      id: '5',
      component: (
        <Pat/>
      ),
      end: true,
      },
    ];

    return (
      <div>
          <ThemeProvider theme={theme}>
            <ChatBot headerTitle="一心" 
                      recognitionEnable={true}
                      botAvatar={botAvatar}
                      userAvatar={userAvatar}
                      botDelay={0}
                      userDelay={0}
                      steps={steps} />
          </ThemeProvider> 
      </div>
    );
  }
}

export default App;
