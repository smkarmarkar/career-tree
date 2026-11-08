# Design Career Tree

An interactive, presentation-ready "career tree" that shows design students in India where a design discipline can take them: the kinds of companies, what the work is like, and indicative fresher salaries.

The renderer and the data are separate. `index.html` draws the tree; each file in `data/` describes one discipline. Swap or add a data file and the tree redraws itself with no code changes.

## Run it

Live at https://smkarmarkar.github.io/career-tree/. You can also open `index.html` in any modern browser; the tree works offline, but the feedback button needs internet.

## Feedback

The bug button (bottom right, draggable) is [Bugbox](https://github.com/smkarmarkar/bugbox), with app id `career-tree`. Notes record the discipline, step and any open close-up, and go to the owner's review page.

## Presenting

| Key | Action |
| --- | --- |
| → Space PgDn | Next step |
| ← PgUp | Previous step |
| 1 to 9 | Jump to a branch |
| Home / End | Start / full tree |
| Click a branch | Close-up view with details |
| Esc | Back to the full tree |
| P | Presenter notes window |
| F | Fullscreen |
| T | Dark / light mode |

## Project structure

```
index.html              Renderer: layout, drawing, presentation controls, theme
data/ux-india.js        UX Design tree (India)
data/industrial-india.js Industrial Design tree (placeholder, not researched)
logos/                  Optional company logo files (see logos/README.txt)
```

## Adding a discipline

Copy `data/ux-india.js`, change the content, and add a `<script src="data/your-file.js">` line in `index.html` next to the others. The schema is documented at the top of `data/ux-india.js`. A `.json` file with the same structure can also be dropped onto the page or loaded with the "Load data" button.

## Logos

Companies show a lettered badge until a logo file is added. Put official logo files in `logos/` using the file names listed in `logos/README.txt`.

## Data disclaimer

Salary bands are indicative fresher CTC estimates (0 to 2 years) for India, as of October 2026. They vary by school, portfolio and city, and have not yet been verified against published sources. Verify before quoting.
