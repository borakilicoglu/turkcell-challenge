export default async function getCategories(): Promise<any[]> {
	const response = await fetch('http://localhost:3000/categories')
	return response.json() as Promise<any[]>
}
