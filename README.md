# micro-uuid

A lightweight, fast, and secure UUID generator leveraging Node.js crypto module for generating v4 UUIDs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package using npm:

```bash
npm install micro-uuid
```

## Usage

To generate a v4 UUID using the "micro-uuid" package, simply import the generateUUID function and call it:

```javascript
const { generateUUID } = require('micro-uuid');

const uuid = generateUUID();

console.log(uuid);
```

## Performance

"micro-uuid" is designed to be lightweight and efficient, making it a great choice for generating UUIDs in performance-critical applications. By leveraging Node.js' built-in crypto module, "micro-uuid" ensures that the generated UUIDs are not only fast but also secure.

## Contributing

We welcome contributions to the "micro-uuid" package. If you have ideas for improvements or bug fixes, please feel free to open an issue or submit a pull request on the project's GitHub repository.

## License

MIT
