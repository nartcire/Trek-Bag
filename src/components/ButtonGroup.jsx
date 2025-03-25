import Button from "./Button";
import { useItemStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  const markAllAsComplete = useItemStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemStore((state) => state.resetToInitial);
  const removeAllItems = useItemStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={markAllAsComplete}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={markAllAsIncomplete}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={resetToInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={removeAllItems}>
        Remove all items
      </Button>
    </section>
  );
}
