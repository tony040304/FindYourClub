/* eslint-env jest */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Contratos from '../ClubPage/Get/Contratos'
import MyClub from '../ClubPage/Get/MyClub'
import Plantel from '../ClubPage/Get/Plantel'
import Postulaciones from '../ClubPage/Get/Postulaciones'


globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, name: 'test' }]),
  })
);

describe('Contratos Component', () => {
  it('calls render prop with loading and data', async () => {
    const mockRender = jest.fn();
    const mockSetData = jest.fn();

    await act(async () => {
      render(<Contratos render={mockRender} setData={mockSetData} />);
    });

    // Inicialmente, debería llamar a render con loading como true
    expect(mockRender).toHaveBeenCalledWith(true, []);

    // Esperar a que los datos se carguen y el estado se actualice
    await waitFor(() => {
      expect(mockRender).toHaveBeenCalledWith(false, [{ id: 1, name: 'test' }]);
    });
  });
});

describe('MyClub Component', () => {
  it('calls render prop with loading and data', async () => {
    const mockRender = jest.fn();
    const mockSetData = jest.fn();
    const token = 'fake-token'; // Mock token

    await act(async () => {
      render(<MyClub render={mockRender} setData={mockSetData} token={token} />);
    });

    // Log the calls to mockRender to debug
    console.log(mockRender.mock.calls);

    // Inicialmente, debería llamar a render con loading como true
    expect(mockRender).toHaveBeenCalledWith([], true);

    // Esperar a que los datos se carguen y el estado se actualice
    await waitFor(() => {
      expect(mockRender).toHaveBeenCalledWith([{ id: 1, name: 'test' }], false);
    });
  });
});

describe('Plantel Component', () => {
  it('calls render prop with loading and data', async () => {
    const mockRender = jest.fn();
    const mockSetData = jest.fn();
    const token = 'fake-token'; // Mock token

    await act(async () => {
      render(<Plantel render={mockRender} setData={mockSetData} token={token} />);
    });

    // Log the calls to mockRender to debug
    console.log(mockRender.mock.calls);

    // Inicialmente, debería llamar a render con loading como true
    expect(mockRender).toHaveBeenCalledWith([], true);

    // Esperar a que los datos se carguen y el estado se actualice
    await waitFor(() => {
      expect(mockRender).toHaveBeenCalledWith([{ id: 1, name: 'test' }], false);
    });
  });
});

describe('Postulacion Component', () => {
  it('calls render prop with loading and data', async () => {
    const mockRender = jest.fn();
    const mockSetData = jest.fn();
    const token = 'fake-token'; // Mock token

    await act(async () => {
      render(<Postulaciones render={mockRender} setData={mockSetData} token={token} />);
    });

    // Log the calls to mockRender to debug
    console.log(mockRender.mock.calls);

    // Inicialmente, debería llamar a render con loading como true
    expect(mockRender).toHaveBeenCalledWith(true, []);

    // Esperar a que los datos se carguen y el estado se actualice
    await waitFor(() => {
      expect(mockRender).toHaveBeenCalledWith(false, [{ id: 1, name: 'test' }]);
    });
  });
});
/* Mock del Fetch: Se realiza un mock de la función fetch global para simular una respuesta de la API con los datos de ejemplo.
Renderizado del Componente: Se utiliza render de React Testing Library para renderizar el componente Contratos y pasar las funciones mock render y setData.
Verificación Inicial: Verifica que la función render se llame inicialmente con loading como true y data como un array vacío.
Esperar los Datos: Se utiliza waitFor para esperar a que el estado del componente se actualice y mockRender se llame con loading como false y los datos correctos.
Notas Adicionales
waitFor: Se usa para esperar a que una condición se cumpla. Es útil para esperar a que las actualizaciones asincrónicas ocurran.
console.log: Si necesitas depurar más, puedes mantener el console.log('Fetched Data:', data); en el then de tu fetch para ver los datos que se están obteniendo.*/


