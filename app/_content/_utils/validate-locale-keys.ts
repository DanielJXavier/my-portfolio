import type { Lang } from "@/i18n-config";

export function validateLocaleKeys<Item>(
  domain: string,
  lang: Lang,
  staticItems: readonly Item[],
  localeItems: Record<string, unknown>,
  getId: (item: Item) => string,
) {
  const staticIds = staticItems.map(getId);
  const staticIdSet = new Set(staticIds);

  const localeIds = Object.keys(localeItems);
  const localeIdSet = new Set(localeIds);

  const missingIds = staticIds.filter((id) => !localeIdSet.has(id));
  const unknownIds = localeIds.filter((id) => !staticIdSet.has(id));

  const hasDuplicateStaticIds = staticIdSet.size !== staticIds.length;

  const issues: string[] = [];

  if (missingIds.length > 0) {
    issues.push(`Missing: ${missingIds.join(", ")}`);
  }

  if (unknownIds.length > 0) {
    issues.push(`Unknown: ${unknownIds.join(", ")}`);
  }

  if (hasDuplicateStaticIds) {
    issues.push("Static entries contain duplicate IDs.");
  }

  if (issues.length === 0) {
    return;
  }

  const message = `${domain} content keys do not match for locale "${lang}".`;

  throw new Error([message, ...issues].join("\n"));
}
