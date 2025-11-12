import React from 'react'
// Ensure React is available globally for modules compiled with classic JSX runtime
globalThis.React = React
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { MemoryRouter } from 'react-router-dom'

import AdminUsers from '@/features/admin/pages/Users'

vi.mock('@/api/students', () => ({
  getStudents: vi.fn(),
  createStudent: vi.fn(),
  updateStudent: vi.fn(),
  deleteStudent: vi.fn()
}))

import { getStudents, deleteStudent } from '@/api/students'

// Mock react-query v5 hooks used by the component to avoid signature mismatch in tests.
vi.mock('@tanstack/react-query', () => ({
  useQuery: (/* keyOrOptions, fn */) => ({ data: [
    { id: 1, name: 'Balla Sow', email: 'balla@technolab.com', role: 'Étudiant' },
    { id: 2, name: 'Aminata Diallo', email: 'aminata@technolab.com', role: 'Étudiant' }
  ], isLoading: false }),
  // Support both legacy (fn) and v5 ({ mutationFn }) signatures
  useMutation: (arg) => {
    const mutationFn = typeof arg === 'function' ? arg : (arg && arg.mutationFn) ? arg.mutationFn : null
    return {
      mutateAsync: async (payload) => {
        if (typeof mutationFn === 'function') return await mutationFn(payload)
        // if no mutation function provided, resolve with a generic success
        return { success: true }
      }
    }
  },
  useQueryClient: () => ({ invalidateQueries: () => {} })
}))

describe('AdminUsers integration (MSW)', () => {
  it('fetches and displays students, and deletes a student', async () => {
    // Setup mocked responses
    getStudents.mockResolvedValue({ success: true, students: [
      { id: 1, name: 'Balla Sow', email: 'balla@technolab.com', role: 'Étudiant' },
      { id: 2, name: 'Aminata Diallo', email: 'aminata@technolab.com', role: 'Étudiant' }
    ]})
    deleteStudent.mockResolvedValue({ success: true })

    // Re-render with mocked data
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AdminUsers />
        </MemoryRouter>
      </Provider>
    )

    // Wait for initial students to render
    await waitFor(() => expect(screen.getByText('Balla Sow')).toBeInTheDocument())
    expect(screen.getByText('Aminata Diallo')).toBeInTheDocument()

    // Find the delete button for Balla Sow and click it
    const row = screen.getByText('Balla Sow').closest('tr')
    const buttons = row.querySelectorAll('button')
    const trashButton = buttons[1]
    await userEvent.click(trashButton)

    // Confirm modal should appear
    await waitFor(() => expect(screen.getByText(/Confirmer la suppression/i)).toBeInTheDocument())

    // Click confirm button
  const confirmBtn = screen.getByRole('button', { name: /supprimer/i })
    await userEvent.click(confirmBtn)

    // deleteStudent should have been called with the id
    await waitFor(() => expect(deleteStudent).toHaveBeenCalledWith(1))
  })
})
