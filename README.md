# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). 

## Table of contents

- [Frontend Mentor - Single price grid component solution](#frontend-mentor---single-price-grid-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshots](#screenshots)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshots

![Mobile view](./readme-assets/mobile-view.png)
![Desktop view](./readme-assets/desktop-view.png)
### Links

- Solution URL: [single-price-component](https://github.com/royeradames/single-price-component)
- Live Site URL: [royer-adames-single-price-component.vercel.app](https://royer-adames-single-price-component.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - For styles
### What I learned
Code that I am prode off:

```html
<h1>Some HTML code I'm proud of</h1>
```
Reducing HTML by using ::before

```html
<div className="us__background"></div>
```
```css
.us{
    // have a white see through background
    display: grid;
    grid-template:
        "section" 1fr
        /1fr
    ;
    &__background{
        grid-area: section;
        background-color: white;
        opacity: 15.19%;
    }
}
```
```css
.us{
    // have a white see through background
    display: grid;
    grid-template:
        "section" 1fr
        /1fr
    ;
    &::before{
        // see though white div
        content: "";
        grid-area: section;
        background-color: white;
        opacity: 15.19%;
    }
}
```

Changing opacity from % to decimal so that Vercel renders it correctly:
```css
&__body{
  margin-top: 1.8rem;
  opacity: 75%;
  line-height: 2rem;
}
&--length{
  font-size: var(--body-size-bg);
  letter-spacing: var(--body-spacing-bg);
  opacity: 50%;
}
```
```css

&__body{
  margin-top: 1.8rem;
  opacity: .75;
  line-height: 2rem;
}
&--length{
  font-size: var(--body-size-bg);
  letter-spacing: var(--body-spacing-bg);
  opacity: .5;
}
```
## Author

- LinkedIn - [@royeradames](https://www.linkedin.com/in/royer-adames/)
- Frontend Mentor - [@royeradames](https://www.frontendmentor.io/profile/royeradames)