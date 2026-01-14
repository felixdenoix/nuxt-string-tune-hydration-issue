import StringTune, {
  StringParallax,
  StringCursor,
  StringProgress,
} from "@fiddle-digital/string-tune";

export default defineNuxtPlugin(() => {
  const stringTune = StringTune.getInstance();
  stringTune.use(StringParallax);
  stringTune.use(StringCursor);
  stringTune.use(StringProgress);
  stringTune.start(60);
  return {
    provide: {
      stringTune,
    },
  };
});
