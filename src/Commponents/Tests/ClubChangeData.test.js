import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChangeData from '../ClubPage/ChangeData';
import { useNavigate, useLocation } from 'react-router-dom';



jest.mock('react-cookie');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

const mockNavigate = jest.fn();
useNavigate.mockImplementation(() => mockNavigate);
useLocation.mockImplementation(() => ({ pathname: '/app/ClubPage/CambiarDatos' }));

describe('ChangeData', () => {

  test('renders initial elements', () => {
    render(
        <ChangeData />
    );

    expect(screen.getByPlaceholderText(/Cambiar nombre/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Cambiar descripcion/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Posicion/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Liga/i)).toBeInTheDocument();
    expect(screen.getByText(/Guardar cambios/i)).toBeInTheDocument();
  });

  test('handles input changes correctly', () => {
    render(
        <ChangeData />
    );

    fireEvent.change(screen.getByPlaceholderText(/Cambiar nombre/i), { target: { value: 'Nuevo Nombre' } });
    fireEvent.change(screen.getByPlaceholderText(/Cambiar descripcion/i), { target: { value: 'Nueva Descripción' } });
    
    // Encuentra el primer select para la posición y el segundo select para la liga
    const selectElements = screen.getAllByRole('combobox');
    const selectPosicion = selectElements[0];
    const selectLiga = selectElements[1];

    fireEvent.change(selectPosicion, { target: { value: 'DC' } });
    fireEvent.change(selectLiga, { target: { value: 'Liga Rosarina Profesional' } });

    expect(screen.getByPlaceholderText(/Cambiar nombre/i)).toHaveValue('Nuevo Nombre');
    expect(screen.getByPlaceholderText(/Cambiar descripcion/i)).toHaveValue('Nueva Descripción');
    expect(selectPosicion).toHaveValue('DC');
    expect(selectLiga).toHaveValue('Liga Rosarina Profesional');

  });

  test('makes API call and handles success response', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    render(
        <ChangeData />
    );

    fireEvent.change(screen.getByPlaceholderText(/Cambiar nombre/i), { target: { value: 'Nuevo Nombre' } });
    fireEvent.change(screen.getByPlaceholderText(/Cambiar descripcion/i), { target: { value: 'Nueva Descripción' } });

    const selectElements = screen.getAllByRole('combobox');
    const selectPosicion = selectElements[0];
    const selectLiga = selectElements[1];

    fireEvent.change(selectPosicion, { target: { value: 'DC' } });
    fireEvent.change(selectLiga, { target: { value: 'Liga Rosarina Profesional' } });
    fireEvent.click(screen.getByText(/Guardar cambios/i));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('https://localhost:7102/api/Equipo/UpdateInfo', expect.any(Object));
    });
  });

  test('handles API error response', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({}),
      })
    );

    console.error = jest.fn(); // Mock console.error para suprimir la salida de error en la prueba

    render(
        <ChangeData />
    );

    fireEvent.change(screen.getByPlaceholderText(/Cambiar nombre/i), { target: { value: 'Nuevo Nombre' } });
    fireEvent.change(screen.getByPlaceholderText(/Cambiar descripcion/i), { target: { value: 'Nueva Descripción' } });
    fireEvent.change(screen.getByDisplayValue(/Posicion/i), { target: { value: 'DC' } });
    fireEvent.change(screen.getByDisplayValue(/Liga/i), { target: { value: 'Liga Rosarina Profesional' } });
    fireEvent.click(screen.getByText(/Guardar cambios/i));

    await waitFor(() => expect(console.error).toHaveBeenCalled());
  });
});