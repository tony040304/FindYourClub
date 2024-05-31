import { id } from 'date-fns/locale';
import React from 'react';
import Chatbot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const ChatBot = () => {

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'yellow',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: 'black',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  return (
    <div className="a">
      <ThemeProvider theme={theme}>
      <Chatbot
        steps={[
          { id: '1', message: 'Hola, ¿en qué puedo ayudarte?', trigger: 'options' },
          {
            id: 'options',
            options: [
              { value: 1, label: 'Como registrarme como equipo', trigger: 'registration' },
              { value: 2, label: 'Qué ligas hay disponibles', trigger: 'leagues' },
              { value: 3, label: 'Cómo encuentro un equipo para probarme', trigger: 'findTeam' },
            ],
          },
          {
            id: 'registration',
            message:
              'Para registrarte como equipo debes contactarte vía WhatsApp con nuestro equipo de logística.',
            trigger: 'Otra pregunta?',
          },
          {
            id: 'leagues',
            message:
              'Por el momento, las ligas con las que tenemos convenio son las ligas regionales: Liga cañadense, Liga rojense y Liga rosarina.',
              trigger: 'Otra pregunta?',
          },
          {
            id: 'findTeam',
            message:
              'Para encontrar el equipo que más se adecue a tu estilo debes registrarte haciendo clic en el botón "Registrarse como jugador" e ingresar tus datos. Luego inicia sesión, ¡y listo! ya puedes postularte.',
              trigger: 'Otra pregunta?',
          },
          {
            id: 'Otra pregunta?',
            message:
              'Otra pregunta?',
              trigger: 'si - no',
          },
          {
            id: 'si - no',
            options: [
              { value: 4, label: 'Si', trigger: 'options' },
              { value: 5, label: 'No', trigger: 'no' },
            ]
          },
          {
            id: 'no',
            message:
              'Gracias',
              end: true,
          },
        ]}
        headerTitle="Chat de asistencia"
      />
      </ThemeProvider>
    </div>
  );
};

export default ChatBot;
