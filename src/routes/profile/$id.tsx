import NavBar from '@/components/NavBar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/$id')({
  component: Profile,
})

function Profile() {
  return (
    <div>
      <NavBar />

      <div className="flex flex-col">
        <p className="font-bold text-2xl text-center py-2">Bokie Mokie</p>
        <div className="py-2">
          <p className="font-bold pb-2">About Me</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            quaerat dicta blanditiis, natus beatae sapiente qui distinctio
            voluptatum tenetur asperiores odio deserunt unde atque! Vel omnis ut
            veritatis labore consequuntur.
          </p>
        </div>
        <div className="py-2">
          <p className="font-bold">Reviews</p>
        </div>
      </div>
    </div>
  )
}
