import TimeDisplay from "./TimeDisplay";

export default {
  component: TimeDisplay,
};

export const Default = {
  // One hour, two minutes, three seconds.
  render: () => <TimeDisplay timeMs={3723000} />,
};
