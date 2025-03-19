import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAsAllIncomplete,
  handleMarkAsAllComplete,
}) {
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={handleMarkAsAllComplete}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={handleMarkAsAllIncomplete}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={handleResetToInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
}
