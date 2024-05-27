import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ChangeClubPassword from '../ClubPage/ChangeClubPassword';
import { useNavigate, useLocation } from 'react-router-dom';

jest.mock('react-cookie');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

const mockNavigate = jest.fn();
useNavigate.mockImplementation(() => mockNavigate);
useLocation.mockImplementation(() => ({ pathname: '/app/ClubPage/ChangeClubPassword' }));

describe('ChangeClubPassword', () => {

  test('renders initial elements', () => {
    render(<ChangeClubPassword />);
    
    expect(screen.getByPlaceholderText(/ingrese su nueva contraseña/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Confirme su contraseña/i)).toBeInTheDocument();
    expect(screen.getByText(/Cambiar contraseña/i)).toBeInTheDocument();
  });

  test('displays error when passwords do not match', () => {
    render(<ChangeClubPassword />);
    
    fireEvent.change(screen.getByPlaceholderText(/ingrese su nueva contraseña/i), { target: { value: 'password1' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirme su contraseña/i), { target: { value: 'password2' } });
    fireEvent.click(screen.getByText(/Cambiar contraseña/i));
    
    expect(screen.getByText(/Las contraseñas no coinciden/i)).toBeInTheDocument();
  });

  test('displays error when password is too short', () => {
    render(<ChangeClubPassword />);
    
    fireEvent.change(screen.getByPlaceholderText(/ingrese su nueva contraseña/i), { target: { value: 'pass' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirme su contraseña/i), { target: { value: 'pass' } });
    fireEvent.click(screen.getByText(/Cambiar contraseña/i));
    
    expect(screen.getByText(/La contraseña es muy corta/i)).toBeInTheDocument();
  });

  test('displays success message when passwords are valid and match', async () => {
    render(<ChangeClubPassword />);
    
    fireEvent.change(screen.getByPlaceholderText(/ingrese su nueva contraseña/i), { target: { value: 'password1' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirme su contraseña/i), { target: { value: 'password1' } });
    fireEvent.click(screen.getByText(/Cambiar contraseña/i));
    
    await waitFor(() => expect(screen.getByText(/Contraseña cambiada/i)).toBeInTheDocument());
  });

});