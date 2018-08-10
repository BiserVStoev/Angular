abstract class Melon {
    public name: string;

    constructor(public weight: number, public melonSort: string) {
        this.name = this.constructor.name;
    }

    toString(): string {
        let element: string = this.name
            .split("melon")
            .filter((e) => e !== "")[0];

        return `Element: ${element}\nSort: ${this.melonSort}\n`;
    }
}

class Watermelon extends Melon {
    constructor(public weight: number, public melonSort: string) {
        super(weight, melonSort);
    }

    public elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return super.toString() + `Element Index: ${this.elementIndex()}`;
    }
}

class Firemelon extends Melon {
    constructor(public weight: number, public melonSort: string) {
        super(weight, melonSort);
    }

    public elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return super.toString() + `Element Index: ${this.elementIndex()}`;
    }
}

class Earthmelon extends Melon {
    constructor(public weight: number, public melonSort: string) {
        super(weight, melonSort);
    }

    public elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return super.toString() + `Element Index: ${this.elementIndex()}`;
    }
}

class Airmelon extends Melon {
    constructor(public weight: number, public melonSort: string) {
        super(weight, melonSort);
    }

    public elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return super.toString() + `Element Index: ${this.elementIndex()}`;
    }
}

class Melolemonmelon extends Watermelon {
    public counter: number;
    public elements: Melon[];

    constructor(public weight: number, public melonSort: string) {
        super(weight, melonSort);
        this.counter = 0;
        this.elements = [Watermelon, Firemelon, Earthmelon, Airmelon];
    }

    public morph(): void {
        this.counter++;
    }

    public toString(): string {
        return new this.elements[this.counter % 4](this.weight, this.melonSort).toString();
    }
}