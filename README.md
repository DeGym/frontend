# DeGym DApp

DeGym is a decentralized application (DApp) for managing gym memberships and rewards using blockchain technology. This project uses React, TypeScript, and Web3.js to interact with smart contracts on the Ethereum blockchain.

## Table of Contents

- [DeGym DApp](#degym-dapp)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
  - [Testing](#testing)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.x or later)
- npm (v6.x or later)
- MetaMask browser extension

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/DeGym/frontend.git
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   REACT_APP_TOKEN_ADDRESS=0x...
   REACT_APP_STAKING_ADDRESS=0x...
   ```
   Replace the addresses with your deployed contract addresses.

4. Start the development server:
   ```
   npm start
   ```

## Project Structure

```
src/
├── components/
│   ├── staking/
│   ├── token/
│   └── ui/
│       ├── Button/
│       ├── Card/
│       ├── Form/
│       └── Modal/
├── contracts/
│   ├── StakingABI.json
│   └── TokenABI.json
├── hooks/
│   ├── useStakingContract.ts
│   ├── useTokenContract.ts
│   └── useWeb3.ts
├── pages/
│   ├── _app.tsx
│   └── _document.tsx
├── public/
│   └── favicon.ico
├── services/
│   └── contractService.ts
├── styles/
│   ├── components/
│   │   ├── staking/
│   │   └── token/
│   └── globals.css
├── tsconfig.json
├── package.json
└── README.md
```

## Available Scripts

- `npm start`: Starts the development server.
- `npm test`: Runs the test suite.
- `npm run build`: Builds the application for production.
- `npm run deploy`: Deploys the application to a production environment.

## Testing

This project uses Jest and React Testing Library for testing. You can run the test suite using the `npm test` command.

## Deployment

This project can be deployed to a production environment using the `npm run deploy` command. The deployment process involves building the application and uploading it to a hosting platform or server.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).