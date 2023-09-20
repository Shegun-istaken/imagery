import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { useState } from "react";

export default function SortableImage({
  image,
}: {
  image: { src: string; id: number };
}) {
  const [loading, setLoading] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  function doneLoading() {
    setLoading(true);
  }

  return (
    <>
      <img
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        src={image.src}
        className={`w-full h-full object-cover loading ? '': 'hidden'} `}
        onLoad={doneLoading}
      />
      {!loading && (
        <div className="flex justify-center items-center mt-24">
          <div className="flex items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-fairy_tale to-bright_pink animate-spin">
            <div className="h-9 w-9 rounded-full bg-gray-200"></div>
          </div>
        </div>
      )}
    </>
  );
}
