// src/components/PaymentStatus.jsx
export default function PaymentStatus({ status }) {
  const isPaid = status === "paid";
  return (
    <div className={`p-4 rounded text-white ${isPaid ? 'bg-green-500' : 'bg-red-500'}`}>
      {isPaid ? "Paiement effectué ✅" : "Paiement en attente ⚠️"}
    </div>
  );
}
