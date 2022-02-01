import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      // base: "/example",
    },
    target: "#svelte",
    methodOverride: {
      allowed: ["PATCH", "DELETE"],
    },
  },
};

export default config;
