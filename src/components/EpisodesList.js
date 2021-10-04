function EpisodesList({ episodes }) {
  return (
    <ul>
      {episodes.map(episode => (
        <li key={episode.id}>{episode.name}</li>
      ))}
    </ul>
  )
}

export default EpisodesList