package main;

import mealregistry.MealRegistry;
import mealenum.MealType;
import childrenmeal.ChildrenMeal;
import vegeterianmeal.VegeterianMeal;
import nonvegeterianmeal.NonVegeterianMeal;

public class MealMain{
	
	public static void main(String[] args){
		
		MealRegistry mealRegistry = new MealRegistry();
		
		ChildrenMeal cm1 = (ChildrenMeal) mealRegistry.getMeal(MealType.CHILDREN);
		cm1.setNumberOfMeals(3);
		cm1.orderMeal(cm1.getNumberOfMeals());
		System.out.println(cm1);
		
		ChildrenMeal cm2 = (ChildrenMeal) mealRegistry.getMeal(MealType.CHILDREN);
		cm2.setNumberOfMeals(5);
		cm2.setMainMeal("Burger");
		cm2.setSideMeal("Fries");
		cm1.orderMeal(cm2.getNumberOfMeals());
		System.out.println(cm2);
		
		VegeterianMeal vm1 = (VegeterianMeal) mealRegistry.getMeal(MealType.VEGETERIAN);
		vm1.setNumberOfMeals(2);
		vm1.orderMeal(vm1.getNumberOfMeals());
		System.out.println(vm1);
		
		NonVegeterianMeal nvm1 = (NonVegeterianMeal) mealRegistry.getMeal(MealType.NON_VEGETERIAN);
		nvm1.setNumberOfMeals(8);
		nvm1.orderMeal(nvm1.getNumberOfMeals());
		System.out.println(nvm1);
			
	}
	
}