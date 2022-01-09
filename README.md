# UFOs Sightings - a Javascript Assignment

Using `Javascript` to build dynamic webpages and other customization tools that include `Bootstrap`, `HTML`, and `CSS`.

## Project Overview

The purpose of this project was to learn how to take data that is stored as a `JavaScript` array or list and create a table to organize the information that will visually adjust as "events" change (i.e. filtering). In order to react when an element is changed, we use `Javascript` functions to loop through the data to build the table and create a customized dashboard. The customizations include filters with event listeners that will record the information when an element has changed and develop an interactive webpage. Filters can be applied in many ways. In this exercise, we reviewed how to display default data in the table, listen for a button click or trigger the table to update based on the user's input with a select criteria. Finally, we use `HTML`, `Bootstrap` and `CSS` to read the `Javascript` code and create a webpage that is easy to view, includes filters, images, and a synopsis of the topic.

## Topic

Are we alone in this universe? UFO sightings have been an obsession among many for centuries. Are they real or some government conspiracy? We have been assigned to help **Dana** with building a webpage in which others can access information of reported sightings and see for themselves. This webpage should include:

* A description or summary of the topic 
* A table to display all of the information from the data source
* Search filters that will allow for visitors to update the table based on the search criteria they enter.
![UFO](https://github.com/skaram16/UFOs/blob/main/static/images/ufoimage.jpg)

## Results

The webpage **[UFO Sightings - The Truth is Out There]** has been created. Upon entering, visitors embarking on their "first encounter" will see:

![webpage](https://github.com/skaram16/UFOs/blob/main/static/images/webpageimage.png)

You will notice that a **"Filter Search"** section has been added. 

![filter](https://github.com/skaram16/UFOs/blob/main/static/images/filtertable.png)

You can filter by one or all of the search criteria shown. For example, if you search by **"City"**, you will see that the table updated to show the reported sightings that was recorded for that specific city.

![filtercity](https://github.com/skaram16/UFOs/blob/main/static/images/filtercity.png)

If you add a shape, the table will update filtering further to only display the information containing that shape.

![filterbycityandshape](https://github.com/skaram16/UFOs/blob/main/static/images/filterbycityandshape.png)

Or if you delete your previous entries and enter **"State"** and **"Shape"**, the table will update using your new criteria.

![filterbystateandshape](https://github.com/skaram16/UFOs/blob/main/static/images/filterbystateandshape.png)

## Summary

**Drawbacks:**

Unfortunately, the page has several drawbacks. They include:

* The search field is "case-sensitive". The table will not update if you do not enter exactly how the data is stored and does not allow for partial entries. This is an issue because it does not intuitively tell the user how the information should be entered other than the "default" example shown. 

* There is no button to click, wording or action that tells the user that the table will update after you hit "enter".

* The data is limited and outdated since it is not linked to a "live" source.

**Recommendations for further development:**

With the following enhancements, the webpage and its' features could greatly improve the user's experience.

* Add additional customizations, such as click-buttons, dropdown list, and/or auto-fill that can help "guide" the user and make the page more interactive.

* Add functionality to pull the data from a live source that includes current and archived data not limited to only the United States, but globally.

* Add a "Latest News" section that will highlight an article showing the most recent reported sighting.
