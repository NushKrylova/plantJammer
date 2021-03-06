import React, { FunctionComponent, useEffect } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  decrementIngredient,
  decrementPeople,
  fetchIngredients,
  formatUnits,
  incrementIngredient,
  incrementPeople,
  toUpperCaseFirst,
} from "./recipeOverviewSlice";
import { Stepper } from "../../app/components/stepper/Stepper";

import styles from "./RecipeOverview.module.scss";

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const items = ingredients.map((item) => (
    <tr key={item.name}>
      <td>
        <div className={styles.ingredient}>
          <div className={styles.iconContainer}>
            <img className={styles.icon} src={item.icon} alt={item.name} />
          </div>
          <div className={styles.label}>{toUpperCaseFirst(item.name)}</div>
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
      <h1 className={styles.title}>{recipeName.toUpperCase()}</h1>
      <div className={styles.info}>
        <div className={styles.displayFlex}>
          <Stepper
            value={people}
            valueFormat={() => `People ${people}`}
            onClickIncrement={() => dispatch(incrementPeople())}
            onClickDecrement={() => dispatch(decrementPeople())}
          />
        </div>
        <div className={styles.time}>
          <div className={classNames(styles.iconContainer, styles.iconGreen)}>
            <i className="far fa-clock" />
          </div>
          <div className={styles.label}>{time} min</div>
        </div>
        <div className={styles.label}></div>
      </div>
      <table>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};
