# React suspense without using query

This demo demonstrate how Suspense works under the hood in React without using external libraries like react-query, we can create a basic project that simulates data fetching, manages loading states, and suspends rendering while waiting for the data to arrive.

We'll use the Suspense component with React.lazy and a custom data-fetching mechanism. this project is a simple example to illustrate how this works.

Project Breakdown:

- App Component: Parent component that wraps the child in a Suspense boundary.
- Fake API Call: Simulated API fetching using Promises.
- Custom Fetch Hook: Custom hook that suspends the component rendering until the data is fetched.
