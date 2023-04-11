import './AvailableMeals.css';

import Card from '../UI/Card';
import MealItem from '../Meals/MealItem/MealItem';
import { useEffect, useState } from 'react';


function AvailableMeals() {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function FetchData() {
      setIsLoading(true);
      const responce = await(await fetch('https://react-meals-278cd-default-rtdb.firebaseio.com/React%20Meals.json')).json();
      let loadedMeals = [];

      for(let i in responce) {
        loadedMeals.push({
          id: i,
          name: responce[i].name,
          description: responce[i].description,
          price: responce[i].price
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    }
    FetchData();

  }, []);


  return(
    <section className='meals'>
      {isLoading ?
        <section className='meals_loading'>
          <p> Loading... </p>
        </section>
      :
        <Card>
          <ul>
            {meals.map((meal) => (
              <MealItem  key={meal.id} meal={meal} />
            ))}
          </ul>
        </Card>
      }
    </section>
  );
}

export default AvailableMeals;