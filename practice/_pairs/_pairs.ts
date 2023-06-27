import { _map } from "../map/map";
import { _curryr } from "./../curryingReverce/curryr";

export const _pairs = _curryr((obj: object) => {
    return _map(Object.keys(obj), (key) => [key, obj[key as keyof typeof obj]]);
});
