import { Given, When, Then } from '@cucumber/cucumber';

/**  open page with given user input url */
Given(/^I am on the (.*) page$/, async (url) => {
    await browser.maximizeWindow();
    await browser.url(url);
});

/** wait for 2s */
When(/^I wait for some time$/, async () => {
    await browser.pause(2000);
});

/** 
Perform an click action on the given element 
*/
When(/^I click on element (.*)$/, async (element) => {
    await (await $(element)).click();
});

/** 
To Select options value from dropdown
*/
When(/^I select (.*) at (.*)$/, async (optionValue,selector) => {
   
    await (await $(selector)).selectByAttribute('value', optionValue);
   
}); 

Then(/^I print iphone deatils having price upto 40000 rs$/, async () => {
   
// itemCountOnPage is the per page iphone items displayed according to filter.
  let itemCountOnPage= await ('//div[@class="_2kHMtA"]').length;

  let namePath = '//a[@class="_1fQZEK"]//div[@class="_4rR01T"]'

  let amountPath = '//a[@class="_1fQZEK"]//div[@class="_30jeq3 _1_WHN1"]'

  let ratingPath = '((//a[@class="_1fQZEK"]//span[@class="_2_R_DZ"])'

  // To print each iphone details having price upto INR 40000
for(let i=1; i<=itemCountOnPage; i++)
{
    // get value for iphone name
    let name = (await(await $(`(${namePath})[${i}]`)).getText());

    // get value of price of iphone 
    let amountValue = (await(await $(`(${amountPath})[${i}]`)).getText());

    //convert string value of iphone price into interger to validate with INR 40000
   let amountInteger = amountValue.substring(1).split(",", 2);
   let amountIntegerValue = parseInt(amountInteger[0]+amountInteger[1]);

   // get rating value of iphone 
   let rating = (await(await $(`(${ratingPath})[${i}]//span)[2]`)).getText()).split(" ", 1);
    
    if(amountIntegerValue <= 40000)
    {
        console.log('Details for iphone ::');
        console.log('iphone Name:- '+name);
        console.log('iphone Amount:- '+ amountValue);
        console.log('iphone rating:- '+rating[0]);
    }
    
}

}); 









