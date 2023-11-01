import TimeInput from "./TimeInput";

export default {
  component: TimeInput,
};

export const Default = {
  // One hour, two minutes, three seconds.
  render: () => <TimeInput timeMs={3723000} />,
};
