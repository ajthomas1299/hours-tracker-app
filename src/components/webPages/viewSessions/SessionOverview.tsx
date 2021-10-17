
const SessionOverview = () => {
  return (
    <section className="h-full mx-1">
      <table className="table-auto">
  <thead>
    <tr>
      <th className="px-4 py-2">Date</th>
      <th className="px-4 py-2">Hrs</th>
      <th className="px-4 py-2">Project</th>
      <th className="px-4 py-2">Task</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2">10/10/21</td>
      <td className="border px-4 py-2">4</td>
      <td className="border px-4 py-2">Support</td>
      <td className="border px-4 py-2">Added new Users</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="border px-4 py-2">10/13/21</td>
      <td className="border px-4 py-2">5</td>
      <td className="border px-4 py-2">Technical</td>
      <td className="border px-4 py-2">fixed connection to database</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">10/15/21</td>
      <td className="border px-4 py-2">7</td>
      <td className="border px-4 py-2">Frontend</td>
      <td className="border px-4 py-2">styled page</td>
    </tr>
  </tbody>
</table>
    </section>
  )
}

export default SessionOverview
