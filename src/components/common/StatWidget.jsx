// src/components/StatWidget.jsx
export default function StatWidget({ label, value, icon }) {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow flex items-center space-x-4">
      {icon && <div className="text-blue-600 text-3xl">{icon}</div>}
      <div>
        <div className="text-sm text-gray-600">{label}</div>
        <div className="text-xl font-bold text-gray-800">{value}</div>
      </div>
    </div>
  );
}
