import React from 'react'
import Chatbot from 'react-simple-chatbot'

const ChatBot = () => {
    const steps = [{ id: '1', message: 'Hola en que puedo ayudarte', trigger: '2'},
        {id: '2',
        options: [
          { value: 1, label: 'Como registrarme como equipo', trigger: '3' },
          { value: 2, label: 'Que ligas hay disponibles', trigger: '4' },
          { value: 3, label: 'Como encuentro un equipo para probarme', trigger: '5' },
        ],},
        { id: '3', message: 'Para registrarte como equipo debes contactarte via whatsApp con nuestro equipo de logistica', end: true},
        { id: '4', message: 'Por el momento las ligas con las que tenemos convenio son las ligas regionales: Liga cañadense, Liga rojense y Liga rosarina', end: true},
        { id: '5', message: 'Para encontrar el equipo que mas se adecue a tu estilo debes registrate clickeando en el boton registrarse como jugador y ingresar sus datos. Luego se loguea, y listo! ya te podes postular!', end: true}
    ]

  return (
    <div className="a">
        <Chatbot steps={[{ id: '1', message: 'Hola en que puedo ayudarte', trigger: '2'},
        {id: '2',
        options: [
          { value: 1, label: 'Como registrarme como equipo', trigger: '3' },
          { value: 2, label: 'Que ligas hay disponibles', trigger: '4' },
          { value: 3, label: 'Como encuentro un equipo para probarme', trigger: '5' },
        ],},
        { id: '3', message: 'Para registrarte como equipo debes contactarte via whatsApp con nuestro equipo de logistica', end: true},
        { id: '4', message: 'Por el momento las ligas con las que tenemos convenio son las ligas regionales: Liga cañadense, Liga rojense y Liga rosarina', end: true},
        { id: '5', message: 'Para encontrar el equipo que mas se adecue a tu estilo debes registrate clickeando en el boton registrarse como jugador y ingresar sus datos. Luego se loguea, y listo! ya te podes postular!', end: true}
    ]} headerTitle="Chat de asistencia"/>
    </div>
  )
}

export default ChatBot