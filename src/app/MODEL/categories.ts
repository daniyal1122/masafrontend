export class Categories {
    private name: string;
    private slug: string;
    private Categories_ID: number;
    constructor(Category: string,Categories_ID:number) {
        this.name = Category;
        this.Categories_ID=Categories_ID
        this.slug="";

      }
}
