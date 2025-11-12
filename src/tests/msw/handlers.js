import { http } from 'msw'

const studentsSeed = [
  { id: 1, name: 'Balla Sow', email: 'balla@technolab.com', role: 'Étudiant' },
  { id: 2, name: 'Aminata Diallo', email: 'aminata@technolab.com', role: 'Étudiant' }
]

let students = [...studentsSeed]

export const handlers = [
  // user information (ProtectedRoute)
  http.get('/ISTA/api/home/user-information', (req, res, ctx) => {
    // You can inspect auth header if needed
    return res(ctx.status(200), ctx.json({ success: true, user: { id: 1, role: 'admin', name: 'Admin User' } }))
  }),

  // get students
  http.get('/ISTA/api/admin/students', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ success: true, students }))
  }),

  // create student
  http.post('/ISTA/api/admin/students', async (req, res, ctx) => {
    const body = await req.json()
    const id = Math.max(0, ...students.map(s => s.id)) + 1
    const newStudent = { id, ...body }
    students.push(newStudent)
    return res(ctx.status(201), ctx.json({ success: true, student: newStudent }))
  }),

  // update student
  http.patch('/ISTA/api/admin/students/:id', async (req, res, ctx) => {
    const { id } = req.params
    const body = await req.json()
    students = students.map(s => (s.id === Number(id) ? { ...s, ...body } : s))
    const updated = students.find(s => s.id === Number(id))
    return res(ctx.status(200), ctx.json({ success: true, student: updated }))
  }),

  // delete student
  http.delete('/ISTA/api/admin/students/:id', (req, res, ctx) => {
    const { id } = req.params
    students = students.filter(s => s.id !== Number(id))
    return res(ctx.status(200), ctx.json({ success: true, message: 'Deleted' }))
  })
]
