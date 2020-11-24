import { ITEM_TYPES_BY_CATEGORIES } from 'engine/data/dataMappings';
import { allEnumValues } from 'helpers/typeUtils';
import { ItemsFilters } from 'types/Filters.types';
import { ItemCategory, ItemType, Item } from 'types/Item.types';

import Engine from './Engine';

export default class EngineItems {
  public readonly engine: Engine;
  public categories: ItemCategory[];
  public typesByCategories: Record<ItemCategory, ItemType[]>;

  constructor(engine: Engine) {
    this.engine = engine;
    this.categories = allEnumValues(ItemCategory);
    this.typesByCategories = ITEM_TYPES_BY_CATEGORIES;
  }

  // public all(filters: ItemsFilters): Item[] {

  //   return [];
  // }
}
