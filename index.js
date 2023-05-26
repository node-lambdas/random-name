import randomName from "@scaleway/random-name";

export default {
  version: 2,
  actions: {
    generate: {
      output: "text",
      handler: function (input, output) {
        let { prefix = "", separator = "-" } = input.options;
        output.send(randomName(prefix, separator));
      },
    },
  },
};
