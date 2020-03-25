# nodejs-builder-pattern
Sample code to show How/When to apply builder pattern using JS

The intenet of Builder pattern is to 
# “Separate the construction of a complex object from its representation so that the same construction process can create different representations.” 

Two important points here;
 - This pattern is used to construct a complex object step by step and the final step will return the object. 
 - The process of constructing an object is generic so that it can be used to create different representations of the same object.
 
 Lets take example of store. Consider that we have two personas for store "Employees" and "Customers"
 
 Consider below role/actions for both users.

 Employee can be:

        - Full Time Employee
        - Part Time Employee
        - Employee Manager

Customers have:

        - Money for shopping 
        - Shopping list




