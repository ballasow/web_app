import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ConfirmModal from '@/components/common/ConfirmModal'

// make React available globally for modules compiled with classic runtime
globalThis.React = React

describe('ConfirmModal', () => {
  it('calls onCancel when Annuler is clicked and onConfirm when Supprimer is clicked', async () => {
    const onCancel = vi.fn()
    const onConfirm = vi.fn()

    render(<ConfirmModal title="Confirmer la suppression" message="Voulez-vous ?" onCancel={onCancel} onConfirm={onConfirm} />)

    const cancelBtn = screen.getByRole('button', { name: /annuler/i })
    const confirmBtn = screen.getByRole('button', { name: /supprimer/i })

    await userEvent.click(cancelBtn)
    expect(onCancel).toHaveBeenCalled()

    await userEvent.click(confirmBtn)
    expect(onConfirm).toHaveBeenCalled()
  })
})
