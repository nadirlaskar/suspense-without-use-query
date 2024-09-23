import React, { useContext } from "react";
import {
  createSuspender,
  supenderCacheContext,
} from "../utils/createSuspender";

export function useSuspenseData(options) {
  const cacheContext = useContext(supenderCacheContext);
  const suspenderRef = createSuspender(options, cacheContext);
  return suspenderRef.read();
}
