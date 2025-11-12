import { useState } from "react";
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getStudentById, updateStudent } from '@/api/students';

export default function Profile() {
  const { userInfo } = useSelector(state => state.userReducer);
  const userId = userInfo?.id || userInfo?.userId || userInfo?.uid || null;
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['student', userId],
    queryFn: async () => {
      if (!userId) return null;
      const res = await getStudentById(userId);
      return res.student || res;
    },
    enabled: !!userId
  });

  const mutation = useMutation({
    mutationFn: updateStudent,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['student', userId] })
  });

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});

  const startEdit = () => {
    setForm(data || {});
    setEditing(true);
  };

  const save = async () => {
    try {
      await mutation.mutateAsync(form);
      setEditing(false);
  toast.success('Profil mis à jour');
    } catch (err) {
      console.error(err);
  toast.error('Erreur lors de la mise à jour');
    }
  };

  if (isLoading) return <div className="p-6">Chargement...</div>;

  const user = data || {};

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Mon profil</h1>
        {!editing && <button onClick={startEdit} className="bg-blue-600 text-white px-3 py-1 rounded">Modifier</button>}
      </div>
      <div className="bg-white rounded shadow p-6 space-y-4">
        <div>
          <label className="font-semibold block">Nom :</label>
          {editing ? <input value={form.name || ''} onChange={(e) => setForm({...form, name: e.target.value})} className="border p-2 w-full"/> : <div>{user.name}</div>}
        </div>
        <div>
          <label className="font-semibold block">Email :</label>
          {editing ? <input value={form.email || ''} onChange={(e) => setForm({...form, email: e.target.value})} className="border p-2 w-full"/> : <div>{user.email}</div>}
        </div>
        <div>
          <label className="font-semibold block">Filière :</label>
          {editing ? <input value={form.filiere || ''} onChange={(e) => setForm({...form, filiere: e.target.value})} className="border p-2 w-full"/> : <div>{user.filiere}</div>}
        </div>
        <div>
          <label className="font-semibold block">Téléphone :</label>
          {editing ? <input value={form.phone || ''} onChange={(e) => setForm({...form, phone: e.target.value})} className="border p-2 w-full"/> : <div>{user.phone}</div>}
        </div>
        <div>
          <label className="font-semibold block">Date de naissance :</label>
          {editing ? <input type="date" value={form.dateNaissance || ''} onChange={(e) => setForm({...form, dateNaissance: e.target.value})} className="border p-2 w-full"/> : <div>{user.dateNaissance}</div>}
        </div>
        {editing && (
          <div className="flex justify-end gap-2">
            <button onClick={() => setEditing(false)} className="px-4 py-2 bg-gray-400 rounded">Annuler</button>
            <button onClick={save} className="px-4 py-2 bg-blue-600 text-white rounded">Enregistrer</button>
          </div>
        )}
      </div>
    </div>
  );
}
