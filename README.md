# react-svg-country-flags

This is a package for react apps that want to use `svg-country-flags` effortlessly. 

## 📦 Installation

### Yarn

```bash
yarn add react-svg-country-flags svg-country-flags
```

### NPM

```bash
npm install react-svg-country-flags svg-country-flags
```

## 🤑 Usage

This react component uses dynamic import to handle all imports on client. When loading the flag has animation instead of flag itself. 

```tsx
import { Flag } from "svg-country-flags"

<Flag 
  locale="gb" // https://github.com/hampusborgos/country-flags/tree/main/svg
  className="some-nice-class-name"
  // ...any other img props
/>
```
