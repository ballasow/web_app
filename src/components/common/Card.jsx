// src/components/Card.jsx
export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 w-full">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
