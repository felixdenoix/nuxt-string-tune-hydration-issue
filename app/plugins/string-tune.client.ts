import StringTune, {
  StringParallax,
  StringCursor,
  StringProgress,
} from "@fiddle-digital/string-tune";

export default defineNuxtPlugin({
  name: "string-tune",
  parallel: true,
  setup: (nuxtApp) => {
    const stringTune = StringTune.getInstance();
    stringTune.use(StringParallax);
    stringTune.use(StringCursor);
    stringTune.use(StringProgress);

    nuxtApp.hook("app:mounted", () => {
      nextTick(() => {
        // Helper to ensure hydration is finished
        const safeStart = () => {
          if (!nuxtApp.isHydrating) {
            stringTune.start(60);
          } else {
            requestAnimationFrame(safeStart);
          }
        };

        safeStart();
      });
    });

    return {
      provide: {
        stringTune,
      },
    };
  },
});
