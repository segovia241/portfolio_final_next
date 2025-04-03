"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";

interface TextEntry {
  key: string;
  en: string;
  es: string;
}

export default function TextLookup(props: { children: string }) {
  const textKey = props.children;
  const [text, setText] = useState<string>(textKey);
  const [translations, setTranslations] = useState<TextEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Get current language from HTML lang attribute
  const getCurrentLanguage = (): "en" | "es" => {
    const htmlLang = document.documentElement.lang;
    return htmlLang === "es" ? "es" : "en"; // Default to "en" if not "es"
  };

  useEffect(() => {
    async function loadTranslations() {
      try {
        const response = await fetch("/translations.csv");
        if (!response.ok) {
          throw new Error(`Failed to load CSV: ${response.status}`);
        }

        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            setTranslations(results.data as TextEntry[]);
            setIsLoading(false);
          },
          error: (error: { message: string }) => {
            setError(`CSV parsing error: ${error.message}`);
            setIsLoading(false);
          },
        });
      } catch (err) {
        setError(
          `Error loading translations: ${
            err instanceof Error ? err.message : String(err)
          }`
        );
        setIsLoading(false);
      }
    }

    loadTranslations();
  }, []);

  useEffect(() => {
    if (!isLoading && translations.length > 0) {
      const language = getCurrentLanguage();
      const entry = translations.find((t) => t.key === textKey);

      if (entry && entry[language]) {
        setText(entry[language]);
      } else {
        setText(textKey); // Return original key if not found
      }
    }
  }, [textKey, translations, isLoading]);

  // Add an effect to update text when language changes
  useEffect(() => {
    const handleLangChange = () => {
      if (!isLoading && translations.length > 0) {
        const language = getCurrentLanguage();
        const entry = translations.find((t) => t.key === textKey);

        if (entry && entry[language]) {
          setText(entry[language]);
        } else {
          setText(textKey);
        }
      }
    };

    // Create a MutationObserver to watch for changes to the lang attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "lang"
        ) {
          handleLangChange();
        }
      });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.documentElement, { attributes: true });

    // Clean up the observer when component unmounts
    return () => observer.disconnect();
  }, [textKey, translations, isLoading]);

  if (error) {
    console.error(error);
    return textKey; // Return original key on error
  }

  return <>{text}</>;
}
