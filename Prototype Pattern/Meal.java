package meal;

public abstract class Meal implements Cloneable{

	private int numberOfMeals;
	private String mainMeal;
	private String sideMeal;
	private String beverage;
	private String dessert;
	private int price;
	
	public int getNumberOfMeals(){
		return numberOfMeals; 
	}
	
	public void setNumberOfMeals(int numberOfMeals){
		this.numberOfMeals = numberOfMeals; 
	}
	
	public String getMainMeal(){
		return mainMeal; 
	}
	
	public void setMainMeal(String mainMeal){
		this.mainMeal = mainMeal; 
	}
	
	public String getSideMeal(){
		return sideMeal; 
	}
	
	public void setSideMeal(String sideMeal){
		this.sideMeal = sideMeal; 
	}
	
	public String getBeverage(){
		return beverage; 
	}
	
	public void setBeverage(String beverage){
		this.beverage = beverage; 
	}
	
	public String getDessert(){
		return beverage; 
	}
	
	public void setDessert(String dessert){
		this.dessert = dessert; 
	}
	
	public int getPrice(){
		return price; 
	}
	
	public void setPrice(int price){
		this.price = price; 
	}
	
	public abstract void orderMeal(int amount);
	
	@Override
    public Object clone() throws CloneNotSupportedException{
		return super.clone();
	}
	
	@Override
	public String toString(){
		return "MainMeal : " + mainMeal + "\nSideMeal : " + sideMeal + "\nBeverage : " + beverage + "\nDessert : " + dessert + "\nPrice : LKR " + price + "\nNumber of Meals : "+ numberOfMeals + "\n" ;
	}

}