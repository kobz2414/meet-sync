import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/event-details/$id')({
  component: EventDetails,
})

function EventDetails() {
  const { id } = Route.useParams()

  return <div>Hello "/event-details"! {id}</div>
}
