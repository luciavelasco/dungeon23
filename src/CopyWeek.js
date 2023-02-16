import "./CopyWeek.css";
import { useEffect, useState } from "react";

const formatWeekEntries = (week) =>
  week.reduce(
    (week, { day, label, note }) =>
      week +
      (note || label
        ? [day, label, note, `\n`].filter(Boolean).join(`\n`)
        : `${day}: you didn't write anything down today.\n\n`),
    ``
  );

export const CopyWeek = ({ week }) => {
  return (
    <Copy getText={() => formatWeekEntries(week)} className="copy-week">
      <span
        role="img"
        aria-label="copy this week's entries to your spell scroll"
        // title="copy this week's entries to your spell scroll"
      >
        📜
      </span>
    </Copy>
  );
};

export const Copy = ({ getText, className, children }) => {
  const [clipboardEnabled, setClipboardEnabled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    navigator?.permissions
      ?.query({ name: `clipboard-write` })
      .then((status) => setClipboardEnabled(status.state === `granted`));
  }, []);
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  return (
    <button
      disabled={!clipboardEnabled || copied}
      className={[`copy`, className].join(` `)}
      onClick={() =>
        navigator?.clipboard?.writeText(getText()).then(() => setCopied(true))
      }
    >
      {copied ? (
        <span
          role="img"
          aria-label="Copied successfully!"
          // title="copy this week's entries to your spell scroll"
        >
          ✔
        </span>
      ) : (
        children
      )}
    </button>
  );
};
