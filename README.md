# Age Calculator App

This is a simple Age Calculator app built using HTML, CSS, and JavaScript. The app calculates the age of a person based on their input of day, month, and year, and displays the results in years, months, and days.

## Features

- **Input fields for day, month, and year**: The user inputs their birthdate.
- **Validation**: The app validates the inputs for valid day, month, and year values.
- **Dynamic error messages**: If any input is incorrect, an error message appears and the corresponding input field is highlighted in red.
- **Age calculation**: Based on the input, the app calculates the age in years, months, and days, and displays it on the page.

## How It Works

1. **Input Validation**: The app checks if the day, month, and year inputs are valid numbers and within the correct ranges (1-31 for days, 1-12 for months, and 1900-2100 for years). If any input is invalid, an error message appears, and the input field is highlighted with a red border.
2. **Age Calculation**: After validation, the app calculates the age by subtracting the year of birth from the current year. It also takes into account the months and days, adjusting the age if the current month and day are before the birth month and day.

3. **Display Results**: The calculated age is displayed in years, months, and days.

## Technologies Used

- **HTML**: Markup language used to structure the app's content.
- **CSS**: Styling language used to design the layout and appearance of the app.
- **JavaScript**: Used for adding interactivity, handling input validation, and performing the age calculation.

## Acknowledgments

Special thanks to [Frontend Mentor](https://www.frontendmentor.io) for providing the challenge and inspiration for this project.

---

This documentation should be sufficient to explain the code and its functionality. Feel free to adjust it if you want to add more details.
