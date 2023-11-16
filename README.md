## How it went 

#### Sketching in figma

<img width="500" alt="Screenshot 2023-11-16 at 09 29 01" src="https://github.com/ssinov00/PropelyAQI/assets/17720188/a0919248-c8cc-4f72-a5be-72a0d1feff4f">

I like to start with a sketch, it helps me visualize the component separation and overall makes life easier.

#### From Figma to code

Once the sketch was done it was easy for me to figure out what components I need, where I will be reusing them and what are the requirements they should have.
I started by creating UI components first such as Button, Image, Multiselect & Typography.
Once those were finished I created the two views we see in the app (Home & Location).
Then I added some mock data and styled everything.
And finally I did the data fetching and improved what I had time to improve.

Overall it took me about 7h to do this.

## Bonus

I just thought I'd write down some ideas I had along the way and we could disscuss on Friday.

Ideas:
- The search autosuggest should be part of a header component that should remain static in the app (less clicks for the user = happy user)
- Since the nilu API accepts coordinates as a filter for area/location search it would be cool to implement another API that we could serch for all cities in Norway and then send those       
  coordinates as filters to the nilu API
- Another idea was implementing weather data into the app to make it a full product (weather influences air quality)
- Use a different chart library (I was expecting more from this)  


## How to run

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
