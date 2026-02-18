import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = ({ products = [], onDelete }) => {

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold mb-4">Admin</h1>
      <Link to="/dashboard/add" className="bg-blue-500 hover:bg-blue-700 text-white mb-4 mt-5 font-bold py-2 px-4 rounded underline-none">
        Add Product
      </Link>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{p.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{p.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  <Link to={`/dashboard/edit/${p.id}`} className="text-blue-500 hover:text-blue-700 mr-3">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <button onClick={() => onDelete(p)} className="text-red-500 hover:text-red-700">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Outlet />
    </div>
  )
}

export default DashboardLayout
