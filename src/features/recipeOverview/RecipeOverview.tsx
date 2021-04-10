import React, { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { useDispatch } from "react-redux";

import styles from "./RecipeOverview.module.css";
import { fetchIngredients } from "./recipeOverviewSlice";

export function RecipeOverview() {
  const recipeName = useAppSelector((state) => state.recipeOverview.name);
  const people = useAppSelector((state) => state.recipeOverview.people);
  const time = useAppSelector((state) => state.recipeOverview.time);
  const ingredients = useAppSelector((state) =>
    state.recipeOverview.recipeIngredients.map((recipeIngredient) => ({
      ...recipeIngredient,
      icon:
        state.recipeOverview.allIngredients.find(
          (ingredient) => ingredient.name === recipeIngredient.name
        )?.icon.url || "",
    }))
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const items = ingredients.map((item) => (
    <tr key={item.name}>
      <td className={styles.leftColumn}>
        <img className={styles.icon} src={item.icon} alt={item.name} />
        {item.name}
      </td>
      <td className={styles.rightColumn}>
        {item.amount} {item.unit}
      </td>
    </tr>
  ));

  return (
    <div className={styles.contentWrapper}>
      <h1>{recipeName}</h1>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>
              <div className={styles.tableHeader}>
                <div>people {people}</div>
                <div>{time} min</div>
                <div>Show in grams</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
}
