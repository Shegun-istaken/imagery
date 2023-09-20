import {
  FC,
  useState,
  useCallback,
  CSSProperties,
  useEffect,
} from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Grid from "./Grid";

import SortableImage from "./SortableImage";

const inlineStyles: CSSProperties = {
  opacity: "0.8",
  transformOrigin: "50% 50%",
  height: "auto",
  width: "140px",
  borderRadius: "10px",
  cursor: "grabbing",
  backgroundColor: "#ffffff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow:
    "rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px",
  transform: "scale(1.2)",
};

type imagesList = {
  id: number;
  src: string;
};

const App: FC = ({ list }: { list: imagesList[] }) => {
  const [items, setItems] = useState([...list]);

  const [activeId, setActiveId] = useState<string | null>(null);
  null;
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  useEffect(() => {
    setItems([...list]);
  }, [list]);

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id.toString());
  }, []);
  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((user) => user.id === active.id);
        const newIndex = items.findIndex((user) => user.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }, []);
  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid columns={5}>
          {items.map((image) => (
            <SortableImage key={image.id} image={image} />
          ))}
        </Grid>
      </SortableContext>
      <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
        {activeId
          ? items
              .filter((item) => item.id.toString() == activeId)
              .map((item) => (
                  <img key={item.src} style={inlineStyles} src={item.src} />
              ))
          : null}
      </DragOverlay>
    </DndContext>
  );
};

export default App;
