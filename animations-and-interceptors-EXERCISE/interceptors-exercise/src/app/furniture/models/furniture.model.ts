export class FurnitureModel {
    constructor(
        public id: string,
        public make: string,
        public model: string,
        public year: number,
        public descriptrion: string,
        public price: number,
        public image: string,
        public createdBy: string
    ) { }
}
