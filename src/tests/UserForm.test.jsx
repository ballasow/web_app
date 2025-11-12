import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserForm from '@/components/admin/UserForm'

globalThis.React = React

describe('UserForm', () => {
  it('shows validation errors for invalid input', async () => {
    const onSave = vi.fn()
    const onCancel = vi.fn()

    render(<UserForm user={null} onSave={onSave} onCancel={onCancel} />)

    // Submit without filling fields
    const submitBtn = screen.getByRole('button', { name: /enregistrer/i })
  await userEvent.click(submitBtn)

  // Validation failed => onSave should not be called
  await waitFor(() => expect(onSave).not.toHaveBeenCalled())
  })

  it('calls onSave with correct data when form is valid', async () => {
    const onSave = vi.fn()
    const onCancel = vi.fn()

    render(<UserForm user={null} onSave={onSave} onCancel={onCancel} />)

    const nameInput = screen.getByLabelText(/Nom complet/i)
    const emailInput = screen.getByLabelText(/Email/i)
    const roleSelect = screen.getByLabelText(/Rôle/i)

    await userEvent.type(nameInput, 'Jean Dupont')
    await userEvent.type(emailInput, 'jean@example.com')
    await userEvent.selectOptions(roleSelect, 'Étudiant')

    const submitBtn = screen.getByRole('button', { name: /enregistrer/i })
    await userEvent.click(submitBtn)

    await waitFor(() => expect(onSave).toHaveBeenCalledWith(expect.objectContaining({ name: 'Jean Dupont', email: 'jean@example.com' })))
  })
})
