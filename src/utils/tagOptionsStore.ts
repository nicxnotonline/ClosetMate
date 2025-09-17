// src/utils/tagOptionsStore.ts
const STORAGE_KEY = "closetmate_tag_options";

const loadStore = (): Record<string, string[]> => {
  if (typeof window === "undefined") return {};
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
};

const saveStore = (store: Record<string, string[]>) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
};

const tagOptionsStore: Record<string, string[]> = loadStore();

export const getOptions = (field: string, defaultOptions: string[]) => {
  if (!tagOptionsStore[field]) {
    tagOptionsStore[field] = [...defaultOptions];
    saveStore(tagOptionsStore);
  }
  return tagOptionsStore[field];
};

export const addOption = (field: string, option: string) => {
  if (!tagOptionsStore[field]) tagOptionsStore[field] = [];
  if (!tagOptionsStore[field].includes(option)) {
    tagOptionsStore[field].push(option);
    saveStore(tagOptionsStore);
  }
};
