import { Ingredient } from './ingredient.model';

export class Receipt {
  id: number;
  title: string;
  description: string;
  type: string;
  typeId: number;
  ingrediants: Ingredient[];
  path: string; // Field for img path

  // TODO : Insert Steps as Array of Step

  constructor(
    _id: number,
    _title: string,
    _description: string,
    _type: string,
    _typeId: number,
    _ingrediants: Ingredient[]
  ) {
    this.id = _id;
    this.title = _title;
    this.description = _description;
    this.type = _type;
    this.typeId = _typeId;
    this.ingrediants = _ingrediants;
    // For Testing purpose images are defined as type-test-number
    this.path =
      '../../assets/images/test-images/' +
      _type +
      '-test-' +
      _typeId +
      '.jpg'; // TODO : Just for testing, allow user to use custom image
  }
}
