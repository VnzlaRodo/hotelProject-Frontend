export class Vendor{
	constructor(
		public id: string,
		public name: string,
		public lastname: number,
        public status: string,
        public email: string,
        public telf: string,
        public direction: string,
        public fecha_registro: Date,
        public id_admin: string
	){}
}