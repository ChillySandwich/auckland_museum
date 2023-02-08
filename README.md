# Auckland Museum Technical Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### Assumptions

I made the following assumptions with this project:

1. I assumed that a 27" FHD touch screen had a pixel resolution of 1920 x 1080 (horizontal) and 1080 x 1920 (vertical)
2. I create a joint config file, with both sets of data combined, which is found here [config](src/config/data.tsx)
3. I assumed the config file didn't need to be a .txt file
- I assumed that users would be able to create an image folder, with a relevant ID, and add this to the public folder
- I assumed that users would also be able to follow along with the configuration of the config file to add their own projects
4. No click events were included on the project, all are touch events, so these won't register when deployed online
5. The South Island hot spots are red circles, similar to the octopus. I've added these in the centre of each region
6. Wireframes were a bit unclear, but for both horizontal and vertical layouts the format is presented as title, subheader, then below is the interactive image
7. Further, I added the navigation buttons at the bottom of each page, while language button under the relevant content 
8. Lastly I created a landing page to be able to navigate to both of the interactives
9. Some images in the vertical South Island layout were cut off based on original image size


### Notes and Learnings

1. I originally started building this in Unity, however since it's a licenced platform I decided against it. I did find however that it was much quicker to build out a responsive UI with the game engine.
2. I would probably use more centralised style sheets next time as in-line styling became a bit messy.
3. I used React.Konva for the canvas, to enable touch and shape drawing on the images provided. There's still a bit to be improved around image scaling which was a bit of a headache.
4. All in all a good learning experience!


