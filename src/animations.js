export default {
  animation: {
    label: "Animation",
    type: "TextSelect",
    options: {
      options: [
        { label: "Zoom", value: "zoom", default: true },
        { label: "Fade", value: "fade" },
        { label: "Slide In", value: "slide-in" },
        { label: "Bounce", value: "bounce" },
      ],
    },
    propertyHelp: {
      tooltip: `If set to vertical, up and down arrow keys will toggle through options and left and right for horizontal.`,
    },
    bindable: true,
    defaultValue: "zoom",
  },
  side: {
    label: "Side",
    type: "TextSelect",
    options: {
      options: [
        { label: "Left", value: "left", default: true },
        { label: "Right", value: "right" },
        { label: "Top", value: "top" },
        { label: "Bottom", value: "bottom" },
      ],
    },
    propertyHelp: {
      tooltip: `The side of the screen the dropdown will slide in from.`,
    },
    bindable: true,
    defaultValue: "left",
  },
  animationSpeed: {
    type: "Length",
    label: {
      en: "Transition duration",
      fr: "Transition duration",
    },
    options: {
      unitChoices: [{ value: "ms", label: "ms", min: 1, max: 20000 }],
    },

    responsive: true,
    states: true,
    bindable: true,
    classes: true,
    defaultValue: "500ms",
  },
};
