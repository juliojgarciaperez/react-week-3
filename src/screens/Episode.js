import { useParams } from "react-router-dom"

function Episode() {
  const { id } = useParams()

  return (
    <div className="Episode">
      EPISODE {id}
    </div>
  )
}

export default Episode
