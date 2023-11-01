import VisualProgress from "./VisualProgress";

export default {
  component: VisualProgress,
};

export const Default = {
  render: () => (
    <div style={{ height: "2rem", width: "10rem", display: "flex" }}>
      <VisualProgress progress={0.75} />
    </div>
  ),
};
