import { useEffect, useState } from "react"
import EpisodesList from "../components/EpisodesList"
import { getEpisodes } from "../services/EpisodesService"

function Home() {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    getEpisodes()
      .then(episodes => {
        setEpisodes(episodes)
      })
  }, [])

  return (
    <div className="Home">
      {episodes.length ? <EpisodesList episodes={episodes}/> : 'Loading...'}
    </div>
  )
}

export default Home
