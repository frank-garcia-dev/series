# Series calculator

A simple calculator for calculating series.

## Installation

To install the series calculator, you can clone the repository and install the required dependencies.

### Clone

```bash
https://github.com/nicolavietch/series.git
```

### Install

```bash
npm install
```

## Run

To run de dev build

```bash
npm run dev
```

## Test

For testing vitest

```bash
npm test
```

## Requerimientos

- Para pruebas unitarias al método de la serie numérica usando los 10 números naturales como entrada, revisar [Calculate.test.ts](src/classes/Calculate.test.ts)

- Para componente visual que muestra un formulario para introducir el número n, revisar [App.tsx](src/App.tsx) y [number-input.tsx](src/components/number-input.tsx)

- Para componente no-visual donde se calcule el término n de la serie, revisar [Calculate.ts](src/classes/Calculate.ts)

- Para componente visual que muestra el resultado del cálculo, revisar [result.tsx](src/components/result.tsx)
