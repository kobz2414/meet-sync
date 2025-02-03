import { Calendar, Clock, MapPin, User } from "lucide-react";

const Event = () => {
    return (
      <>
        <div className="flex flex-row p-4 my-2 border rounded-md border-gray-300">
          <div className="flex flex-col max-w-lg">
            <div className="py-1">
              <p className="text-xl font-semibold">Night out with friends</p>
              <div className="flex flex-row space-x-4">
                <div className="flex flex-row items-center py-1">
                  <MapPin size={16} />
                  <p className="ps-1 text-sm">Crocodile Park</p>
                </div>
                <div className="flex flex-row items-center py-1">
                  <Calendar size={16} />
                  <p className="ps-1 text-sm">January 1, 2001</p>
                </div>
                <div className="flex flex-row items-center py-1">
                  <Clock size={16} />
                  <p className="ps-1 text-sm">1:00 PM - 2:00 PM</p>
                </div>
                <div className="flex flex-row items-center py-1">
                  <User size={16} />
                  <p className="ps-1 text-sm">10</p>
                </div>
              </div>
            </div>
            <p className="py-1">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              cumque ea animi nesciunt quo perferendis? Cum assumenda, quis
              similique ducimus, in qui dolorem autem delectus rem suscipit,
              fugit adipisci cumque.
            </p>
            <div className="flex flex-row py-2 space-x-1">
              <p className="w-fit rounded-full bg-gray-950 py-1 px-4 text-xs text-white">
                Night out
              </p>
              <p className="w-fit rounded-full bg-gray-950 py-1 px-4 text-xs text-white">
                Party night
              </p>
              <p className="w-fit rounded-full bg-gray-950 py-1 px-4 text-xs text-white">
                Bembangan
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <button className="px-6 py-2 border border-gray-300 rounded-md bg-gray-950 text-white">
              Join
            </button>
          </div>
        </div>
      </>
    );
}

export default Event