import { reactive } from "vue";

export default class Health {
    static create(max: number) {
        return reactive(new Health(max));
    }

    readonly max: number;
    current: number;

    private constructor(max: number) {
        this.max = max;
        this.current = max;
    }
}