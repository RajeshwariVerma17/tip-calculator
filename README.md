# Tip & Split Calculator

A clean, responsive bill splitting and tip calculator web application built with pure HTML5, modern CSS3, and Vanilla JavaScript.

## Features

- **100% Zero API Keys**: Completely self-contained client-side application. No secrets, no environment variables, 100% safe to make public on GitHub.
- **Real-Time Calculations**: Instantly recalculates tip per person, total per person, and grand totals as you type.
- **Preset & Custom Tip Rates**: One-click quick selection for 5%, 10%, 15%, 20%, 25%, plus a custom percentage input.
- **Input Validation**: Detects and highlights zero/negative party sizes with clear error messaging.
- **Responsive Layout**: Designed for mobile, tablet, and desktop screens with CSS Grid and Flexbox.

---

## How to Explain This Project in 30 Seconds

> *"Tip & Split is a client-side financial utility built to demonstrate reactive DOM programming without external frameworks:*
> 1. ***Event-Driven Architecture:*** *It listens for `input` and `click` events across bill amounts, tip presets, and guest count to update state dynamically.*
> 2. ***Clean Arithmetic & Edge Case Handling:*** *It prevents division-by-zero errors when the party size is zero, parses float values cleanly, and formats currencies using `.toFixed(2)`.*
> 3. ***Zero External Footprint:*** *It requires zero API keys, no backend servers, and zero npm packages, running natively in any modern browser."*

---

## Tech Stack

- **HTML5**: Semantic input fields and accessible labels.
- **CSS3**: CSS Grid, Flexbox, custom design system, mobile responsiveness.
- **Vanilla JavaScript**: Real-time event listeners, state calculation, error handling.

---

## How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/RajeshwariVerma17/tip-calculator.git
   ```
2. Open `index.html` in your web browser.

---

## How to Deploy for Free (GitHub Pages)

1. Push this repository to your GitHub: `RajeshwariVerma17/tip-calculator`.
2. Go to **Settings** > **Pages** in your repository.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your site will be live at:
   `https://rajeshwariverma17.github.io/tip-calculator/`

---

## Author

- **Rajeshwari Verma**: [github.com/RajeshwariVerma17](https://github.com/RajeshwariVerma17)

## License

MIT License. Free to use and customize.
