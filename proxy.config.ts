export const createProxy = (env: Record<string, string>) => {
  return {
    '^/v1.*': env.MAIN,
  };
};
