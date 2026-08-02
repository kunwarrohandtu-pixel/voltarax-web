import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db/mongodb'
import { FaEnvelope, FaUsers, FaNewspaper, FaEye, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

export const dynamic = 'force-dynamic'
export const revalidate = 0 

export default async function AdminPage() {
  const session = await getServerSession()

  if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
    redirect('/admin/login')
  }

  // Fetch all data
  const [contacts, applications, newsletters] = await Promise.all([
    prisma.contact.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.application.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.newsletter.findMany({ orderBy: { createdAt: 'desc' } }),
  ])

  const stats = [
    { label: 'Contact Messages', value: contacts.length, icon: FaEnvelope, color: 'text-blue-500' },
    { label: 'Applications', value: applications.length, icon: FaUsers, color: 'text-green-500' },
    { label: 'Newsletter Subscribers', value: newsletters.length, icon: FaNewspaper, color: 'text-purple-500' },
  ]

  return (
    <div className="pt-24 pb-12 px-4 bg-[#F0FFF0] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1A3A1A]">Admin Dashboard</h1>
          <p className="text-[#1A3A1A]/60">Welcome back, {session.user?.name || 'Admin'}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                <stat.icon className={`text-2xl ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-[#1A3A1A]/60">{stat.label}</p>
                <p className="text-2xl font-bold text-[#1A3A1A]">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contacts Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-semibold text-lg text-[#1A3A1A]">Recent Contact Messages</h2>
            <span className="text-sm text-[#1A3A1A]/60">{contacts.length} total</span>
          </div>
          {contacts.length === 0 ? (
            <div className="p-6 text-center text-[#1A3A1A]/60">No messages yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-[#1A3A1A]/60">
                  <tr>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Email</th>
                    <th className="px-6 py-3 text-left">Subject</th>
                    <th className="px-6 py-3 text-left">Date</th>
                    <th className="px-6 py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {contacts.slice(0, 10).map((contact) => (
                    <tr key={contact.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 text-[#1A3A1A]">{contact.name}</td>
                      <td className="px-6 py-3 text-[#1A3A1A]/70">{contact.email}</td>
                      <td className="px-6 py-3 text-[#1A3A1A]/70">{contact.subject}</td>
                      <td className="px-6 py-3 text-[#1A3A1A]/60">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-3">
                        {contact.read ? (
                          <span className="flex items-center gap-1 text-green-600"><FaCheckCircle /> Read</span>
                        ) : (
                          <span className="flex items-center gap-1 text-yellow-600"><FaEye /> Unread</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {contacts.length > 10 && (
                <div className="px-6 py-3 text-center text-sm text-[#1A3A1A]/60 border-t border-gray-100">
                  Showing 10 of {contacts.length}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Applications Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-semibold text-lg text-[#1A3A1A]">Recent Applications</h2>
            <span className="text-sm text-[#1A3A1A]/60">{applications.length} total</span>
          </div>
          {applications.length === 0 ? (
            <div className="p-6 text-center text-[#1A3A1A]/60">No applications yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-[#1A3A1A]/60">
                  <tr>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Position</th>
                    <th className="px-6 py-3 text-left">Experience</th>
                    <th className="px-6 py-3 text-left">Date</th>
                    <th className="px-6 py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {applications.slice(0, 10).map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 text-[#1A3A1A]">{app.firstName} {app.lastName}</td>
                      <td className="px-6 py-3 text-[#1A3A1A]/70">{app.position}</td>
                      <td className="px-6 py-3 text-[#1A3A1A]/70">{app.experience || 'N/A'}</td>
                      <td className="px-6 py-3 text-[#1A3A1A]/60">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          app.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          app.status === 'reviewed' ? 'bg-blue-100 text-blue-700' :
                          app.status === 'shortlisted' ? 'bg-green-100 text-green-700' :
                          app.status === 'rejected' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Newsletter Subscribers */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-semibold text-lg text-[#1A3A1A]">Newsletter Subscribers</h2>
            <span className="text-sm text-[#1A3A1A]/60">{newsletters.length} total</span>
          </div>
          {newsletters.length === 0 ? (
            <div className="p-6 text-center text-[#1A3A1A]/60">No subscribers yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-[#1A3A1A]/60">
                  <tr>
                    <th className="px-6 py-3 text-left">Email</th>
                    <th className="px-6 py-3 text-left">Subscribed On</th>
                    <th className="px-6 py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {newsletters.map((sub) => (
                    <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 text-[#1A3A1A]">{sub.email}</td>
                      <td className="px-6 py-3 text-[#1A3A1A]/60">
                        {new Date(sub.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-3">
                        {sub.active ? (
                          <span className="flex items-center gap-1 text-green-600"><FaCheckCircle /> Active</span>
                        ) : (
                          <span className="flex items-center gap-1 text-red-600"><FaTimesCircle /> Inactive</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}