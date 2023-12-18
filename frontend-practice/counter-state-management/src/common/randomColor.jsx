export const randomColor = () => {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan",
    "magenta",
    "teal",
    "lavender",
    "brown",
    "maroon",
    "olive",
    "navy",
    "coral",
    "silver",
    "gold",
    "indigo",
    "lime",
  ];
  const index = Math.ceil(Math.random() * colors.length);

  return colors[index];
};
