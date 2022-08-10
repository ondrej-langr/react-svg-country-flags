# svg-country-flags-react

This is a package for react apps that want to use `svg-country-flags` effortlessly. 

## 📦 Installation

### Yarn

```bash
yarn add svg-country-flags-react svg-country-flags
```

### NPM

```bash
npm install svg-country-flags-react svg-country-flags
```

## 🤑 Usage

This react component uses dynamic import to handle all imports on client. When loading the flag has animation instead of flag itself. 

```tsx
import { Flag } from "svg-country-flags-react"

<Flag 
  countryCode="gb" // https://github.com/hampusborgos/country-flags/tree/main/svg
  className="some-nice-class-name"
  // ...any other img props
/>
```

### With placeholder


#### Component
You can pass a placeholder component if flag is loading or is not found (or in this case any other error has happened)

```tsx
import { Flag } from "svg-country-flags-react"

<Flag 
  countryCode="gb" // https://github.com/hampusborgos/country-flags/tree/main/svg
  className="some-nice-class-name"
  palceholder={<>Some nice placeholder</>}
  // ...any other img props
/>
```

#### Function

Or you can pass a function that returns component. In this function you can get a type of fallback. There is a type of "loading", "not-found" and "error".

```tsx
import { Flag } from "svg-country-flags-react"

<Flag 
  countryCode="gb" // https://github.com/hampusborgos/country-flags/tree/main/svg
  className="some-nice-class-name"
  palceholder={({ type }) => <>This is a nice fallback of type "{type}"</>}
  // ...any other img props
/>
```
