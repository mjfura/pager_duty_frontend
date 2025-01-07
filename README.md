# How to run the project
1. Clone the project
2. Run the following command in the terminal
```bash
pnpm install
pnpm run build
pnpm run preview
```
3. Open the browser and go to http://localhost:4173

## Description

In this project we are implementing a autocomplete search bar component using React. The component will fetch data from an API and display the results in a dropdown list. For that we are using a third-party API called [TheMovieDB](https://developer.themoviedb.org/reference/search-movie). We laso are using debouncing to avoid making too many requests to the API.

**Developing Hours: 4 hours**

## Part 02: Questions

### 1. If you have a user requirement to create a new page what are the steps you take to create the solution focusing on (UI,UX, FE)
  First, coordinate with the design team to obtain the initial mockups. Based on these and the requirements, perform iterative estimates of time and resources, allowing for continuous refinement of designs and functionalities. Once high-fidelity prototypes are ready, the next step would involve managing frontend development activities, with regular reviews alongside the design team and relevant stakeholders to ensure requirements and expectations are met. Upon completion, usability and performance testing would be conducted to validate that everything functions correctly.

### 2. Do you have experience using state management libraries? Can you explain how you used it?
  Yes, I have used Redux as a global state management solution in several projects. My decision was primarily driven by scenarios involving highly complex business logic. In shorter or less complex projects, I usually prefer using local states or, alternatively, React Contexts. Another reason for choosing Redux is its maturity and the extensive set of tools it offers to simplify application development and debugging. Additionally, it facilitates the management of side effects through middlewares such as Redux Thunk or Redux Saga, ensuring that every event is properly mapped and handled.

### 3. What are some of the code best practices you use in your experience?
  - Maintain clean and readable code, using descriptive variable and function names.
	- Use comments to describe sections of the code, especially when working on legacy projects.
	- Follow best programming practices, such as separation of concerns, code reusability, and modularization, essentially adhering to the SOLID principles.
	- Perform unit testing and integration testing to ensure code quality, along with usability tests conducted by the QA team to guarantee product quality in every iteration.
	- Conduct code reviews to ensure consistency and maintain high standards across the codebase.
	- Leverage automation tools to streamline development and deployment processes.
	- Keep documentation updated to facilitate code understanding and maintenance.
	- Hold retrospective meetings to continuously improve development processes and product quality.
  
### 4. What are some ways to style components? Can you provide an explanation of each?
  There are several ways to style components, some of which include:
  - **CSS Vanilla**: The most common way to style components is by using CSS, either in separate files or inline. This approach allows for full control over component styles and supports both global and local styling. When using this method, I prefer to follow a methodology such as Atomic Design or BEM to ensure structure and scalability.
  - **CSS Modules**: CSS Modules provide a way to encapsulate styles within a specific CSS file for each component. This prevents styles from leaking into other components and ensures a localized styling approach. This method is particularly useful for maintaining clean and conflict-free styles in larger projects.
  - **CSS libraries**: Another common approach is using pre-built CSS libraries such as Bootstrap, Material-UI, Ant Design, or Tailwind CSS. I typically favor this option in projects with limited time or budget, as it enables a professional and modern design without requiring extensive custom code.

### 5. Describe 3 ways to pass information from a component to its parent component
  - **Callback functions**: One way to pass information from a child component to its parent is through callback functions. A callback function can be passed as a prop to a child component, and then the child can invoke this function to send data back to the parent. For example, a local state can be defined in the parent component, and the child can update this state using the callback provided by the parent. This approach is clean, efficient, and commonly used for one-to-one communication between parent and child components.
  - **Context API**: The Context API in React is a powerful tool for passing information between components without manually drilling props through every level of the component tree. Using a Provider, data can be shared not only between parent and child components but also with sibling components or other components deeply nested in the tree. This method is particularly useful when dealing with global state management or shared configuration.
  - **Observable**: Another approach to passing information between a child and a parent component is through Observables, typically implemented using libraries such as RxJS. In this pattern, the child component can create an Observable and emit events through it. The parent component can then subscribe to the Observable to listen for these events and react accordingly. This method is especially powerful for scenarios requiring asynchronous communication and allows components to communicate even outside the component hierarchy without relying on a Provider as in the Context API.
  
### 6. Do you have experience in design systems? Can you please share your experience and best practices?
  Yes, I usually work with Storybook, where the application’s components are defined, visualized, and tested in isolation. This approach allows for maintaining a living documentation of components, ensuring they can be easily reused across different parts of the application. Additionally, it enables defining variations of components and testing them with different states and properties. Style guides and best practices for component design can also be established and maintained effectively.
  - **Component Reusability**: Design modular and reusable components that can be implemented consistently across different parts of the application. This promotes scalability and reduces redundancy.
  - **Documentation**: Maintain up-to-date documentation for each component, including usage examples, configuration options, and visual guides. This ensures clarity and consistency among team members.
  - **Version Control**: Use versioning strategies for components, allowing controlled updates and changes without causing regressions in other parts of the application.
  - **Feedback Loop**: Encourage regular feedback from both end-users and team members to identify areas for improvement in component functionality and design.
  - **Maintenance**: Perform regular maintenance of components to fix bugs, optimize performance, and adapt to new design or technical requirements.