---
name: new-recommendation
description: Add a portfolio recommendation by reading its details from a screenshot and using the supplied author image URL; clarify details only when needed.
---

# Add a recommendation

Use this skill when asked to add a recommendation to the recommendations page. The user can provide a screenshot of the recommendation and a URL for the author's image. Extract the needed fields from the screenshot where possible:

- Author name
- Company
- Role
- Original recommendation text

The image URL is supplied separately; the screenshot's embedded profile photo is not a download URL. Ignore screenshot details that the page schema does not store, such as connection degree or recommendation date.

Before editing files, check whether the screenshot and supplied context make all required fields clear. Transcribe the original text faithfully. Treat company names mentioned in the recommendation as evidence, not certainty about the author's employer. Ask a concise follow-up for missing or ambiguous details, stating what you could read and what needs confirmation. If a field is clear, do not ask the user to repeat it. Once any needed details are confirmed, proceed with the change.

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

If no screenshot is available, ask the user for the recommendation details or a screenshot. If the image URL is missing, ask for it. If the URL cannot be downloaded or the image cannot be converted, explain the failure and do not leave a broken recommendation entry behind.
