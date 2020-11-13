package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BMIStepDefinition {
	
	WebDriver driver;
	
	@Given("^The user is on the BMI calculator home page$")
	public void the_user_is_on_the_BMI_calculator_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\MarakathamaniSundara\\Desktop\\VISTA\\selenium_SDET\\geckodriver-v0.27.0-win64\\geckodriver.exe");
		 driver = new FirefoxDriver();
		driver.get("https://www.calculator.net");
	    if (driver.findElement(By.xpath(
                "//*[text()='Fitness & Health Calculators']"))
                .isDisplayed() == true) {
            System.out.println("user is on Home page");}
            else 
            {
            	System.out.println("user is not on Home page");
	    }
	    
	    driver.findElement(By.linkText("BMI Calculator")).click();
	    
	    if (driver.findElement(By.id("breadcrumbs")).isDisplayed() == true) {
            System.out.println("user is on BMI page");}
            else 
            {
            	System.out.println("user is not on BMI page");
	    }
	       
	    
		
	}

	@When("^The user enters age height and weight \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void the_user_enters_age_height_and_weight(String arg1, String arg2, String arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		driver.findElement(By.className("clearbtn")).click();
		driver.findElement(By.name("cage")).sendKeys(arg1);
		driver.findElement(By.name("cheightmeter")).sendKeys(arg2);
		driver.findElement(By.name("ckg")).sendKeys(arg3);
		
		
	    
	}

	@When("^The user clicks bmicalculate button$")
	public void the_user_clicks_bmicalculate_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@src='//d26tpo4cm8sb6k.cloudfront.net/img/svg/calculate.svg']")).click();
				
	}

	@Then("^should show BMI value$")
	public void should_show_BMI_value() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
	    if (driver.findElement(By.xpath(
                "//*[@class='bigtext']"))
                .isDisplayed() == true) {
	    	String bmi = driver.findElement(By.xpath("//*[text()='Result']/../div/b")).getText();
			String result = driver.findElement(By.xpath("//*[text()='Result']/../div/font/b")).getText();
            System.out.println("BMIcalculated");
            System.out.println("BMI Value is :" + bmi);
            System.out.println("BMI Reuslt :" + result);
            }
            else 
            {
            	System.out.println("BMI not calculated");
	    }
	    
		driver.quit();
	 
}
}
