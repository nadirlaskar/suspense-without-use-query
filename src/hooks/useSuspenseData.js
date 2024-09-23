// useSuspenseData.js
import { createSuspender } from "../utils/createSuspender";
import { fetchData } from "../api/fakeApi";

const dataResource = createSuspender(fetchData());

export function useSuspenseData() {
  return dataResource.read();
}
