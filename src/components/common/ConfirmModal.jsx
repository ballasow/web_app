import React from 'react';

export default function ConfirmModal({ title = 'Confirmer', message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-700 mb-4">{message}</p>
        <div className="flex justify-end gap-2">
          <button onClick={onCancel} className="bg-gray-200 text-gray-800 px-3 py-2 rounded">Annuler</button>
          <button onClick={onConfirm} className="bg-red-600 text-white px-3 py-2 rounded">Supprimer</button>
        </div>
      </div>
    </div>
  );
}
