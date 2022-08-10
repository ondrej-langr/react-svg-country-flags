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
  countryCode="gb" // https://github.com/hampusborgos/country-flags/tree/main/svg
  className="some-nice-class-name"
  // ...any other img props
/>
```

### With placeholder

You can pass a placeholder if flag is loading or is not found (or in this case any other error has happened)

```tsx
import { Flag } from "svg-country-flags"

<Flag 
  countryCode="gb" // https://github.com/hampusborgos/country-flags/tree/main/svg
  className="some-nice-class-name"
  palceholder={<>Some nice placeholder</>}
  // ...any other img props
/>
```
