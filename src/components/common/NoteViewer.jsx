// src/components/NoteViewer.jsx
export default function NoteViewer({ notes = [] }) {
  return (
    <table className="w-full text-left border mt-2">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">Cours</th>
          <th className="p-2 border">Note</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((n, i) => (
          <tr key={i} className="border-t">
            <td className="p-2 border">{n.course}</td>
            <td className="p-2 border">{n.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
