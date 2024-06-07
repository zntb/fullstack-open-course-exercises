# Exercises 2.18.-2.20

## 2.18\* Data for countries, step 1

At <https://studies.cs.helsinki.fi/restcountries/> you can find a service that offers a lot of information related to different countries in a so-called machine-readable format via the REST API. Make an application that allows you to view information from different countries.

The user interface is very simple. The country to be shown is found by typing a search query into the search field.

If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:

![countries1](assets/countries1.png)

If there are ten or fewer countries, but more than one, then all countries matching the query are shown:

![countries2](assets/countries2.png)

When there is only one country matching the query, then the basic data of the country (eg. capital and area), its flag and the languages spoken are shown:

![countries3](assets/countries3.png)

**NB:** It is enough that your application works for most countries. Some countries, like _Sudan_, can be hard to support since the name of the country is part of the name of another country, _South Sudan_. You don't need to worry about these edge cases.

## 2.19\*: Data for countries, step 2

**There is still a lot to do in this part, so don't get stuck on this exercise!**

Improve on the application in the previous exercise, such that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country:

![countries4](assets/countries4.png)

In this exercise, it is also enough that your application works for most countries. Countries whose name appears in the name of another country, like _Sudan_, can be ignored.