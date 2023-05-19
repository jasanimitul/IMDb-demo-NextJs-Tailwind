import Results from "@/components/Results"

const apiKey = process.env.API_KEY
export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending'

  const endPoint = genre === 'fetchTopRated' ? 'movie/top_rated':'trending/all/week'
  const res = await fetch(`https://api.themoviedb.org/3/${endPoint}?api_key=${apiKey}&language=en-US&page=1`,{next:{revalidate:100000}})

  if(!res.ok) {
    throw new Error("Falid to load data")
  }
  const resData = await res.json()
  const results = resData.results

  return (
    <div>
      <Results results={results} />
    </div>
  )
}
