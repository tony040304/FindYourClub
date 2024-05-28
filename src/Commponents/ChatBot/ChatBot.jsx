import React from 'react';
import Chatbot from 'react-simple-chatbot';

const ChatBot = () => {
  return (
    <div className="a">
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
            end: true,
          },
          {
            id: 'leagues',
            message:
              'Por el momento, las ligas con las que tenemos convenio son las ligas regionales: Liga cañadense, Liga rojense y Liga rosarina.',
            end: true,
          },
          {
            id: 'findTeam',
            message:
              'Para encontrar el equipo que más se adecue a tu estilo debes registrarte haciendo clic en el botón "Registrarse como jugador" e ingresar tus datos. Luego inicia sesión, ¡y listo! ya puedes postularte.',
            end: true,
          },
        ]}
        headerTitle="Chat de asistencia"
      />
    </div>
  );
};

export default ChatBot;
