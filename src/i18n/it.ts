import type hu from "./hu";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

const it: DeepPartial<typeof hu> = {
  nav: {},
};

export default it;
