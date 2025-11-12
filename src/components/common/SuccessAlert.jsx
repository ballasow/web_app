// src/components/SuccessAlert.jsx
export default function SuccessAlert({ message }) {
  return (
    <div className="bg-green-100 text-green-700 p-3 rounded mb-2 border border-green-300">
      {message}
    </div>
  );
}
