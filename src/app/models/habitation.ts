export class Habitation{
	constructor(
		public id: string,
        public images: string[],
		public type: string,
		public price: number,
        public status: string,
        public num: number,
        public description?: string,
        public register?: Date,
        public id_admin?: string
	){}
}