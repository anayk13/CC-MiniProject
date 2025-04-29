# Contributing to Green IT Research Hub

First off, thank you for considering contributing to Green IT Research Hub! It's people like you that make this platform a great tool for promoting sustainable computing practices.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* A clear and descriptive title
* A detailed description of the proposed feature
* Any possible drawbacks
* Impact on existing features

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Development Process

1. Clone the repository
```bash
git clone https://github.com/yourusername/green-it-blog.git
```

2. Install dependencies
```bash
cd green-it-blog
npm install
```

3. Create a branch
```bash
git checkout -b feature/your-feature-name
```

4. Make your changes
   * Follow the coding style
   * Write meaningful commit messages
   * Add tests if applicable

5. Push to your fork and submit a pull request

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### JavaScript Styleguide

* Use 2 spaces for indentation
* Use semicolons
* Use `const` for all of your references; avoid using `var`
* Use template literals instead of string concatenation
* Use the spread operator (...) instead of `.apply()`
* Use arrow functions `=>` over anonymous function expressions
* Use destructuring over object property access
* Use meaningful variable names

Example:
```javascript
// Good
const getUser = async (id) => {
  const { firstName, lastName } = await fetchUser(id);
  return `${firstName} ${lastName}`;
};

// Bad
var getUserInfo = function(id) {
  return fetchUser(id).then(function(user) {
    return user.firstName + ' ' + user.lastName;
  });
};
```

### React Component Styleguide

* Use functional components with hooks over class components
* Use proper prop-types
* Keep components small and focused
* Use meaningful component names
* Extract reusable logic into custom hooks

Example:
```jsx
// Good
const UserProfile = ({ user }) => {
  const { isLoading, error, data } = useUserData(user.id);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="user-profile">
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.required,
  }).isRequired,
};
```

### CSS/Tailwind Styleguide

* Use Tailwind's utility classes when possible
* Keep custom CSS to a minimum
* Use meaningful class names
* Follow BEM naming convention for custom classes

Example:
```jsx
// Good
<div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-gray-800">Title</h1>
</div>

// Bad
<div className="custom-container">
  <h1 className="title">Title</h1>
</div>
```

## Project Structure

```
green-it-blog/
├── src/
│   ├── components/      # React components
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Utility functions
│   ├── services/       # API services
│   ├── styles/         # Global styles
│   └── firebase.js     # Firebase configuration
├── public/             # Static files
├── tests/              # Test files
└── docs/              # Documentation
```

## Testing

* Write tests for new features
* Update tests when modifying existing features
* Run tests before submitting a pull request

```bash
# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage
npm test:coverage
```

## Documentation

* Update README.md with any new features
* Document new components and hooks
* Update API documentation when making changes
* Include JSDoc comments for functions

## Questions?

Feel free to contact the development team if you have any questions:

* Email: dev@greenithub.com
* Discord: [Green IT Hub Discord](https://discord.gg/greenithub)
* GitHub Issues: [Create an issue](https://github.com/yourusername/green-it-blog/issues) 