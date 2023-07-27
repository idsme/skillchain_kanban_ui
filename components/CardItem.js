import React from "react";
import Image from "next/dist/client/image";
import {
  ChevronDownIcon,
  PlusIcon,
  DotsVerticalIcon,
  dueDateTimeUTCAlt2Icon,
  PaperClipIcon, StarIcon, PlayIcon,
} from "@heroicons/react/outline";
import { Draggable } from "react-beautiful-dnd";
import TimerComponent from "./TimerComponent";

function CardItem({ data, index }) {
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-md p-3 m-3 mt-0 last:mb-0"
        >
          <h5 className="inline text-md my-3 text-lg leading-6">{data.title}</h5>
          <TimerComponent {...data} />
          <div className="flex just  ify-between">
            <div className="flex space-x-3 items-center">
              <label
                  className={`bg-gradient-to-r
              px-2 py-1 rounded text-white text-sm
              ${
                      data.priority === 0
                          ? "from-red-600 to-red-400"
                          : data.priority === 1
                              ? "from-orange-600 to-orange-400"
                              : "from-blue-600 to-blue-400"
                  }
              `}
              >
                {data.priority === 0
                    ? "Now"
                    : data.priority === 1
                        ? "Today"
                        : "Tomorrow"}
                <span> ({  new Date(data.dueDateTimeUTC).toLocaleString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }) })</span>
              </label>
              <span className="flex space-x-1 items-center">
                <StarIcon className="w-4 h-4 text-yellow-500" />
                <span>{data.stars}</span>
              </span>
            </div>

            <ul className="flex space-x-3">
              {data.assignees.map((ass, index) => {
                return (
                  <li key={index}>
                    <Image
                      src={ass.avt}
                      width="36"
                      height="36"
                      objectFit="cover"
                      className=" rounded-full "
                    />
                  </li>
                );
              })}
              <li>
                <button
                  className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center
                    rounded-full"
                >
                  <PlusIcon className="w-5 h-5 text-gray-500" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        
      )}
    </Draggable>
  );
}

export default CardItem;
