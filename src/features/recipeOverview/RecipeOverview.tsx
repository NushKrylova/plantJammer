import React, { FunctionComponent, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { useDispatch } from "react-redux";
import {
  decrementIngredient,
  decrementPeople,
  fetchIngredients,
  formatUnits,
  incrementIngredient,
  incrementPeople,
  toUpperCase,
} from "./recipeOverviewSlice";
import { Stepper } from "../../app/components/stepper/Stepper";

import styles from "./RecipeOverview.module.css";


export const RecipeOverview: FunctionComponent = () => {
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
      <td>
        <div className={styles.ingredient}>
          <div>
            <img className={styles.icon} src={item.icon} alt={item.name} />
          </div>
          <div>{toUpperCase(item.name)}</div>
        </div>
      </td>
      <td>
        <Stepper
          value={item.amount}
          valueFormat={() => `${item.amount} ${formatUnits(item.unit)}`}
          onClickIncrement={() =>
            dispatch(incrementIngredient({ name: item.name, step: 1 }))
          }
          onClickDecrement={() =>
            dispatch(decrementIngredient({ name: item.name, step: 1 }))
          }
        />
      </td>
    </tr>
  ));

  return (
    <div className={styles.recipeOverview}>
      <h1>{recipeName}</h1>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>
              <div className={styles.tableHeader}>
                <Stepper
                  value={people}
                  valueFormat={() => `People ${people}`}
                  onClickIncrement={() => dispatch(incrementPeople())}
                  onClickDecrement={() => dispatch(decrementPeople())}
                />
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
};
