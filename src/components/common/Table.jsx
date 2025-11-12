function Table({ columns, data }) {
    if (!data || data.length === 0) {
        return <p className="text-center mt-6">Aucune donnée à afficher.</p>;
    }

    return (
        <div className="overflow-x-auto mt-6 shadow-md sm:rounded-lg">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-blue-800 text-white">
                    <tr>
                        {columns.map((col) => (
                            <th key={col.accessor} className="py-3 px-6 border-b text-left text-sm font-medium uppercase tracking-wider">
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors duration-200">
                            {columns.map((col) => (
                                <td key={col.accessor} className="py-4 px-6 border-b whitespace-nowrap">
                                    {row[col.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table
