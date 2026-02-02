import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="row-3"> 
              <nav>
                <ul className="flex space-x-4 mb-4 text-blue-500">
                  <li><Link to="/dashboard/users">Users</Link></li>
                  <li><Link to="/dashboard/posts">Posts</Link></li>
                </ul>
              </nav>
             <div className="col">
              <Outlet />
             </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
