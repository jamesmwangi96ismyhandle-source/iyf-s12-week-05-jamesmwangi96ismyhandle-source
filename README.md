# Week 5 - DOM Manipulation & To-Do List

Live Demo: https://jamesmwangi96ismyhandle-source.github.io/iyf-s12-week-05-jamesmwangi96ismyhandle-source/

## Deliverable
Interactive To-Do List at root (`index.html`, `styles.css`, `app.js`).
- Add with button or Enter, rejects empty/spaces-only, clears input
- Click task to toggle completed (line-through), click again to undo
- Delete button per task
- Filters: All / Active / Completed
- Shows `X items left`, Clear Completed works
- Bonus: double-click to edit, Enter saves, Escape cancels

## Practice
- `dom-practice.html` + `dom.js` - Tasks 9.1-10.4: selection, traversal, textContent vs innerHTML, create/remove, events, delegation, form validation
- `daily-challenges/` - 5 challenges: random headings, paragraphs, image toggle, copy divs, dark mode

## How to Run
Open `index.html` in browser, or use Live Server. Open F12 Console for practice logs.

## Lessons Learned
- Event delegation let new tasks work without new listeners because ONE listener on the `ul` uses `event.target.closest('li')` to find the clicked task, even for tasks added later with `createElement`.
- I use `textContent` for user text so `<b>hi</b>` shows as text and can't run as HTML, while `innerHTML` is only for my own markup.
- I change look with `classList.toggle('completed')` + CSS instead of `element.style`, and I keep tasks in an array of objects and re-render with `renderTodos()`.
