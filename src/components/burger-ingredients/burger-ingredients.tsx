import type { IIngredient } from "@interfaces/ingredient";

import { TabMenu } from "../ui";
import burgerIngredients from "./burger-ingredients.module.css";
import { BurgerTypeBlock } from "./burger-type-block";
import { filterCategories } from "./filter-categories";

interface IBurgerIngredientsProps {
  products: IIngredient[];
}

export const BurgerIngredients = ({ products }: IBurgerIngredientsProps) => {
  const { buns, mains, sauces } = filterCategories(products);
  return (
    <section className={burgerIngredients.container}>
      <h1 className='text text_type_main-large'>Соберите бургер</h1>
      <TabMenu />
      <div className={burgerIngredients.ingredients}>
        <BurgerTypeBlock blockName='Булки' items={buns} />
        <BurgerTypeBlock blockName='Основное' items={mains} />
        <BurgerTypeBlock blockName='Соусы' items={sauces} />
      </div>
    </section>
  );
};
