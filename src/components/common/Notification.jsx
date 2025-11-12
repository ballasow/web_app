function Notification({ message, type = 'success' }) {
    const bg = type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
    return <div className={`p-4 rounded mb-4 ${bg}`}>
        {message}
    </div>
}

export default Notification
