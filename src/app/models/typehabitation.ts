export class TypeHabitation{
	constructor(
		public id: string,
		public name: string,
		public price: number,
        public status: string,
        public fecha_registro: Date,
        public images?: string[]
	){}
}