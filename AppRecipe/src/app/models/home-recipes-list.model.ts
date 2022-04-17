import { Receipt } from './receipt.model';

export class HomeRecipesList {
  // DB Type => A
  appetizer: Receipt[];
  // DB Type => F
  first_course: Receipt[];
  // DB Type => M
  main_course: Receipt[];
  // DB Type => S
  side_dish: Receipt[];
  // DB Type => D
  dessert: Receipt[];

  constructor(
    appetizer: Receipt[],
    first_course: Receipt[],
    main_course: Receipt[],
    side_dish: Receipt[],
    dessert: Receipt[]
  ) {
    {
      this.appetizer = appetizer || [];
      this.first_course = first_course || [];
      this.main_course = main_course || [];
      this.side_dish = side_dish || [];
      this.dessert = dessert || [];
    }
  }
}
