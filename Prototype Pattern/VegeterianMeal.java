package vegeterianmeal;

import meal.Meal;

public class VegeterianMeal extends Meal{
	
	@Override
	public void orderMeal(int amount){
		System.out.println("Ordering "+ amount +" Vegeterian Meals......");
	}

}