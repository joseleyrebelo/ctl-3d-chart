All points of the task where tackled - font-family, dockerfile, responsiveness.
Please let me know if something is not present or clear.

# How to run

1. Using yarn - `yarn install` followed by `yarn start`
2. Using docker - `docker run -p 3000:3000 $(docker build -q .)`

- Ensure port 3000 is available, or chang the command accordingly (first 3000)

# Tech used

1. ChartJs - the most available solution for charts.
2. Tailwind - being that Contilio site makes use of bootstrap, or similar solution, I followed the same strategy but opted to use tailwind for its utility.

- This makes the className seem cluttered, but the advantage is the fast, and visible, styling workflow.

3. Scss - As a means to display my capabilities, I made use of BEM(css/sass methodology) to create component that shared styling across my UI: Backdrop; Content Holder; Inputs.
