---
name: new-recommendation
description: Add a recommendation to the portfolio from the author's name, company, role, original recommendation text, and image URL.
---

# Add a recommendation

Use this skill when asked to add a recommendation to the recommendations page. Collect these five inputs if they are not already provided:

1. Author name
2. Company
3. Role
4. Original recommendation text
5. URL to the author's image

## Project structure

- Recommendation metadata lives in `app/(localized)/[lang]/(pages)/recommendations/_config.ts`.
- Localized recommendation content lives under `recommendations.items` in `dictionaries/en.json` and `dictionaries/pt.json`.
- The image path is `public/images/recommendations/<authorId>.jpeg`.
- The same `authorId` must be used as the config entry's `authorId`, both dictionary item keys, and the image filename stem.

## Procedure

1. Read the config and both dictionaries. Choose a numeric, millisecond timestamp ID, checking that it does not already occur in the config, either dictionary, or image directory. If it collides, choose a fresh timestamp. Do not derive the ID from the name.
2. Download the supplied image URL. Convert it to JPEG at `public/images/recommendations/<authorId>.jpeg` using the project's installed `sharp` dependency. Ensure the output is a usable image and remove any temporary download file. Do not use a different extension for the final asset.
3. Add a config entry with `authorId`, `authorName`, and `company`, matching the formatting of surrounding entries. Put the new recommendation first in the array, consistent with the page's newest-first ordering.
4. Add an item under the same ID in both locale dictionaries. Each item has `role` and `paragraphs` fields. Keep the original recommendation's meaning, tone, names, and paragraph boundaries. Write natural English in `en.json` and natural Brazilian Portuguese in `pt.json`; translate from the original language as needed. Translate the role naturally in each locale as well, while preserving official job titles or company names when appropriate. Do not add claims or details that are absent from the original.
5. Preserve valid JSON and the existing formatting. Check that the ID appears exactly once in each dictionary and in the config, and that the corresponding JPEG exists. Review the resulting diff and report the ID and files changed.

If a required input is missing, ask for that input. If the image URL cannot be downloaded or the image cannot be converted, explain the failure and do not leave a broken recommendation entry behind.
