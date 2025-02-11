export const GET = async () => {
  const response = await fetch('/api/users')
  const data = await response.json()
  return Response.json(data)
}
