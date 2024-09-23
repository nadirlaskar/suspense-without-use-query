import { createContext } from "react";

export const createSuspender = (config, cacheMap) => {
  let { queryFn, queryKey } = config;
  if (!cacheMap)
    throw Error(
      "cacheMap is missing, please wrap the root component with SuspenseCacheProvider"
    );
  if (!queryKey) throw Error("queyKey is mandatory, got:" + queryKey);
  if (!cacheMap[queryKey]) {
    cacheMap[queryKey] = {
      status: "pending",
      suspender: null,
    };
  }
  const prepareToSuspend = () =>
    queryFn().then(
      (res) => {
        cacheMap[queryKey].status = "success";
        cacheMap[queryKey].result = res;
      },
      (err) => {
        cacheMap[queryKey].status = "error";
        cacheMap[queryKey].result = err;
      }
    );

  return {
    read() {
      if (!cacheMap[queryKey].suspender)
        cacheMap[queryKey].suspender = prepareToSuspend();
      if (cacheMap[queryKey].status === "pending") {
        throw cacheMap[queryKey].suspender; // Causes suspense to suspend until resolved
      } else if (cacheMap[queryKey].status === "error") {
        throw cacheMap[queryKey].result;
      } else if (cacheMap[queryKey].status === "success") {
        return cacheMap[queryKey].result;
      }
    },
  };
};

const DEFAULT = {};
export const QueryClient = () => DEFAULT;
export const supenderCacheContext = createContext({});
export const SuspenseCacheProvider = supenderCacheContext.Provider;
