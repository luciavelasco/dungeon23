import localforage from "localforage";
import { useState, useEffect } from "react";

export const useGetItem = (key, initialiser) => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  async function getItem() {
    try {
      setIsLoading(true);
      const indexDbValue = await localforage.getItem(key);
      if (Boolean(indexDbValue) || !initialiser) {
        setItem(indexDbValue);
      } else {
        try {
          const initialValue = initialiser();
          await localforage.setItem(`dungeon23`, initialValue);
          setItem(initialValue);
        } catch (e) {
          setError(e);
        }
      }
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getItem();
  }, []);

  return { item, error, isLoading };
};

export const useEntries = () => {
  const { item, error, isLoading } = useGetItem(`dungeon23`, makeEntries);
  const [entries, setEntries] = useState(undefined);
  const [updateError, setError] = useState(undefined);

  const updateEntries = (updatedEntries) => {
    setEntries(updatedEntries);
    localforage.setItem(`dungeon23`, updatedEntries).catch((e) => setError(e));
  };

  return {
    entries: item || entries,
    error: updateError || error,
    isLoading,
    setEntries: updateEntries
  };
};

const makeEntries = () =>
  new Array(52)
    .fill(``)
    .map(() =>
      [
        `Monday`,
        `Tuesday`,
        `Wednesday`,
        `Thursday`,
        `Friday`,
        `Saturday`,
        `Sunday`
      ].map((day) => ({ day, label: ``, note: `` }))
    );
