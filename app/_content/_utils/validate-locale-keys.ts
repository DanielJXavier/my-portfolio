import type { Lang } from "@/i18n-config";

export function validateLocaleKeys<TItem>(
  domain: string,
  lang: Lang,
  staticItems: readonly TItem[],
  localeItems: Record<string, unknown>,
  getId: (item: TItem) => string,
) {
  const staticIds = staticItems.map(getId);
  const staticIdSet = new Set(staticIds);
  const localeIds = Object.keys(localeItems);
  const localeIdSet = new Set(localeIds);
  const missingIds = staticIds.filter((id) => !localeIdSet.has(id));
  const unknownIds = localeIds.filter((id) => !staticIdSet.has(id));
  const hasDuplicateStaticIds = staticIdSet.size !== staticIds.length;

  if (hasDuplicateStaticIds || missingIds.length || unknownIds.length) {
    throw new Error(
      [
        `${domain} content keys do not match for locale "${lang}".`,
        missingIds.length ? `Missing: ${missingIds.join(", ")}` : "",
        unknownIds.length ? `Unknown: ${unknownIds.join(", ")}` : "",
        hasDuplicateStaticIds ? "Static entries contain duplicate IDs." : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );
  }
}
