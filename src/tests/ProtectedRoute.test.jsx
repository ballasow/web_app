import React from 'react';
// Ensure React is available globally for modules compiled with classic JSX runtime
globalThis.React = React;
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import ProtectedRoute from '@/routes/ProtectedRoute';

// Mock the accueil API used to verify user
vi.mock('@/api/accueil', () => ({
  get_User_Information: vi.fn()
}));

import { get_User_Information } from '@/api/accueil';


describe('ProtectedRoute', () => {
  it('redirects to /login when no token and not authenticated', async () => {
    // Ensure localStorage returns no token
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => null);

    // Mock API to return session invalid
    get_User_Information.mockResolvedValue({ success: false, message: 'No session' });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/admin/dashboard"]}>
          <Routes>
            <Route path="/login" element={<div>LoginPage</div>} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <div>AdminContent</div>
              </ProtectedRoute>
            } />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => expect(screen.getByText('LoginPage')).toBeInTheDocument());
  });

  it('renders child when user has correct role', async () => {
    // Provide token
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => 'sometoken');

    // Mock API to return user with admin role
    get_User_Information.mockResolvedValue({ success: true, user: { id: 1, role: 'admin' } });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/admin/dashboard"]}>
          <Routes>
            <Route path="/admin/dashboard" element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <div>AdminContent</div>
              </ProtectedRoute>
            } />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => expect(screen.getByText('AdminContent')).toBeInTheDocument());
  });
});
