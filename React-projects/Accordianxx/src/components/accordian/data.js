const data = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    question: "How does React work?",
    answer: "React works by using a virtual DOM to efficiently update the user interface based on changes in the application state."
  },
  {
    id: 3,
    question: "What are React components?",
    answer: "React components are reusable, self-contained building blocks that encapsulate a piece of the user interface and its behavior."
  },
  {
    id: 4,
    question: "How can you pass data between components in React?",
    answer: "Data can be passed between components in React through props. Props allow you to pass data from a parent component to a child component."
  },
  {
    id: 5,
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript recommended by React for describing what the UI should look like. It looks similar to XML/HTML."
  },
  {
    id: 6,
    question: "What is the significance of state in React?",
    answer: "State is a way for a component to maintain and manage its own data, and it can be changed over time in response to user actions or other events."
  },
  {
    id: 7,
    question: "Explain the concept of props in React.",
    answer: "Props (short for properties) are a way to pass data from a parent component to a child component in React. They are immutable and provide a way to customize child components."
  },
  {
    id: 8,
    question: "What is the purpose of the useEffect hook?",
    answer: "The useEffect hook in React is used for handling side effects in functional components. It can be used for tasks such as data fetching, subscriptions, or manually changing the DOM."
  },
  {
    id: 9,
    question: "What is Redux?",
    answer: "Redux is a state management library for JavaScript applications, often used with React. It helps manage the state of the application in a predictable way."
  },
  {
    id: 10,
    question: "Explain the concept of React Router.",
    answer: "React Router is a library for handling navigation in React applications. It enables the navigation of different components in response to user actions or URL changes."
  },
  {
    id: 11,
    question: "What is the Virtual DOM?",
    answer: "The Virtual DOM is a lightweight copy of the real DOM in a React application. It is used to optimize and speed up the process of updating the user interface."
  },
  {
    id: 12,
    question: "How do you handle forms in React?",
    answer: "Forms in React can be handled by using controlled components, where the form elements are controlled by React state and their values are updated via state."
  },
  {
    id: 13,
    question: "What is the purpose of the useContext hook?",
    answer: "The useContext hook in React is used to access the value of a context directly without the need for a consumer. It simplifies the process of consuming context values in components."
  },
  {
    id: 14,
    question: "What is a higher-order component (HOC) in React?",
    answer: "A higher-order component is a function that takes a component and returns a new component with enhanced features or behavior. It is a way to reuse component logic."
  },
  {
    id: 15,
    question: "Explain the concept of React Hooks.",
    answer: "React Hooks are functions that allow functional components to have state and lifecycle features. They were introduced in React 16.8 to enable stateful logic in functional components."
  },
  {
    id: 16,
    question: "How does React handle events?",
    answer: "React handles events using synthetic events, which are wrappers around the native browser events. React's event system ensures consistent cross-browser behavior."
  },
  {
    id: 17,
    question: "What is the role of keys in React lists?",
    answer: "Keys in React lists are used to identify unique elements and optimize the rendering process. They help React identify which items have changed, been added, or been removed."
  },
  {
    id: 18,
    question: "How can you optimize performance in a React application?",
    answer: "Performance in a React application can be optimized by using techniques such as code splitting, memoization, and optimizing renders with PureComponent or React.memo."
  },
  {
    id: 19,
    question: "What is the purpose of the useCallback hook?",
    answer: "The useCallback hook in React is used to memoize functions, preventing unnecessary re-renders of components that depend on those functions. It is often used to optimize performance."
  },
  {
    id: 20,
    question: "What is the significance of the useRef hook?",
    answer: "The useRef hook in React is used to create a mutable object that persists across renders. It is commonly used to access and interact with the DOM directly."
  },
  {
    id: 21,
    question: "What is the purpose of the useMemo hook?",
    answer: "The useMemo hook in React is used to memoize the result of expensive computations, preventing unnecessary recalculations and optimizing performance."
  },
  {
    id: 22,
    question: "How do you handle routing in a React application?",
    answer: "Routing in a React application can be handled using libraries like React Router, which enables the navigation between different components based on the URL."
  },
  {
    id: 23,
    question: "What is the role of the useState hook?",
    answer: "The useState hook in React is used to add state to functional components. It allows components to manage and update their own state, triggering re-renders when the state changes."
  },
  {
    id: 24,
    question: "What are React Fragments?",
    answer: "React Fragments are a way to group multiple elements without adding unnecessary nodes to the DOM. They provide a cleaner way to structure components without introducing extra divs."
  },
  {
    id: 25,
    question: "What is the purpose of the componentDidCatch lifecycle method?",
    answer: "The componentDidCatch lifecycle method in React is used to catch JavaScript errors anywhere in a component tree. It allows components to handle errors and display fallback UI."
  },
  {
    id: 26,
    question: "What is the role of the componentWillUnmount lifecycle method?",
    answer: "The componentWillUnmount lifecycle method in React is invoked just before a component is unmounted and removed from the DOM. It is used for cleanup tasks and resource release."
  },
  {
    id: 27,
    question: "How can you update the state based on the previous state in React?",
    answer: "In React, the setState function accepts a callback that receives the previous state as an argument. This allows you to update the state based on its previous value."
  },
  {
    id: 28,
    question: "What is the purpose of the componentDidUpdate lifecycle method?",
    answer: "The componentDidUpdate lifecycle method in React is invoked after a component's update is committed to the DOM. It is used for handling side effects after a component has re-rendered."
  },
  {
    id: 29,
    question: "Explain the concept of React portals.",
    answer: "React portals provide a way to render children into a DOM element that exists outside the hierarchy of the parent component. They are useful for scenarios like modals or tooltips."
  },
  {
    id: 30,
    question: "What is the significance of the aria- attributes in React?",
    answer: "The aria- attributes in React are used to enhance the accessibility of web applications by providing additional information to screen readers. They help make web content more understandable for users with disabilities."
  }
  // Add more data points as needed
];

export default data;
