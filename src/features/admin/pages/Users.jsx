import { useState } from "react";
import toast from 'react-hot-toast';
import { FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';
import UserForm from '@/components/admin/UserForm.jsx';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getStudents, createStudent, updateStudent, deleteStudent } from '@/api/students';
import ConfirmModal from '@/components/common/ConfirmModal.jsx';

export default function AdminUsers() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [toDeleteId, setToDeleteId] = useState(null);
  const queryClient = useQueryClient();

  const { data: studentsData, isLoading } = useQuery({
    queryKey: ['students'],
    queryFn: async () => await getStudents(),
    select: (res) => res.students || []
  });

  const addMutation = useMutation({ mutationFn: createStudent, onSuccess: () => queryClient.invalidateQueries({ queryKey: ['students'] }) });

  const updateMutation = useMutation({ mutationFn: updateStudent, onSuccess: () => queryClient.invalidateQueries({ queryKey: ['students'] }) });

  const deleteMutation = useMutation({ mutationFn: deleteStudent, onSuccess: () => queryClient.invalidateQueries({ queryKey: ['students'] }) });

  const handleAddUser = () => {
    setEditingUser(null);
    setIsFormOpen(true);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsFormOpen(true);
  };

  const handleDeleteUser = async (userId) => {
    setToDeleteId(userId);
    setConfirmOpen(true);
  };

  const confirmDelete = async () => {
    setConfirmOpen(false);
    try {
      await deleteMutation.mutateAsync(toDeleteId);
      toast.success('Utilisateur supprimé');
    } catch (err) {
      console.error(err);
      toast.error('Erreur lors de la suppression');
    } finally {
      setToDeleteId(null);
    }
  };

  const handleSaveUser = async (userData) => {
    try {
      if (editingUser) {
        await updateMutation.mutateAsync({ ...editingUser, ...userData });
      } else {
        await addMutation.mutateAsync(userData);
      }
      setIsFormOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de l'enregistrement");
    }
  };

  const students = studentsData || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Gestion des utilisateurs</h1>
        <button
          onClick={handleAddUser}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
        >
          <FiPlus className="mr-2" />
          Ajouter un utilisateur
        </button>
      </div>

      {isFormOpen && (
        <UserForm 
          user={editingUser}
          onSave={handleSaveUser}
          onCancel={() => setIsFormOpen(false)}
        />
      )}

      {confirmOpen && (
        <ConfirmModal
          title="Confirmer la suppression"
          message="Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible."
          onConfirm={confirmDelete}
          onCancel={() => setConfirmOpen(false)}
        />
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              <tr><td className="p-6">Chargement...</td></tr>
            ) : (
              students.map(user => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => handleEditUser(user)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                      <FiEdit size={18} />
                    </button>
                    <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-900">
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
