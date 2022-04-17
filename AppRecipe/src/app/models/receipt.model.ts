import { Ingredient } from "./ingredient.model";

export class Receipt {
  title: string;
  description: string;
  type: string;
  typeId: number;
  ingrediants : Ingredient[];
  path : string; // Field for img path

  // TODO : Insert Steps as Array of Step

  constructor(title: string, _description:string, _type:string, _typeId:number, _ingrediants : Ingredient[]) {
      this.title = title;
      this.description = _description;
      this.type = _type;
      this.typeId = _typeId;
      this.ingrediants = _ingrediants;
      this.path = '../../assets/images/test.jpg'; // TODO : Just for testing, allow user to use custom image
  }
}
