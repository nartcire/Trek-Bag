import Button from "./Button";
import { labels } from "../lib/constants";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {labels.map((label, index) => (
        <Button type="secondary" key={index}>
          {label}
        </Button>
      ))}
    </section>
  );
}
