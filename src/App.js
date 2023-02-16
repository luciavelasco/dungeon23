import "./styles.css";
import React, { useState } from "react";
import { RandomGenerator } from "./RandomGenerator";
import { CopyWeek } from "./CopyWeek";
import { ThemePicker } from "./ThemePicker";
import { useEntries } from "./entry-hooks";

const prompt = (week) => {
  return [
    `Ancient`,
    `Death`,
    `Sunken`,
    `Love`,
    `Empire`,
    `Heavy`,
    `Rural`,
    `Darkness`,
    `Bloom`,
    `Rust`,
    `Noise`,
    `Childhood`,
    `Time`,
    `Excess`,
    `Decay`,
    `City`,
    `Factory`,
    `Flood`,
    `Sleep`,
    `Cold`,
    `Ash`,
    `Touch`,
    `Meat`,
    `Solitude`,
    `Growth`,
    `Greed`,
    `Luck`,
    `Fall`,
    `Pit`,
    `Chaos`,
    `Laughter`,
    `Smoke`,
    `Forgotten`,
    `Library`,
    `Ocean`,
    `Song`,
    `Roots`,
    `Bones`,
    `Hangman`,
    `Blood`,
    `Prophet`,
    `Idol`,
    `Door`,
    `Light`,
    `Stars`,
    `Bridge`,
    `Mask`,
    `Cut`,
    `Sacrifice`,
    `Incense`,
    `Rise`,
    `Gold`
  ][week - 1];
};

const getCurrentWeek = () => {
  const now = new Date();
  const onejan = new Date(now.getFullYear(), 0, 1);
  const week = Math.ceil(
    ((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7
  );
  return week;
};

export default function App() {
  const [theme, setTheme] = useState([`#591cbf`]);
  const { entries, error, isLoading, setEntries } = useEntries();
  // const [entries, setEntries] = useState(useEntries());
  const currentWeek = getCurrentWeek();
  const [selectedWeek, setSelectedWeek] = useState(currentWeek);

  const updateEntries = (day, key, value) => {
    let newEntries = [...entries];
    newEntries[selectedWeek][day][key] = value;
    setEntries(newEntries);
    // useUpdateEntries(newEntries);
  };

  return (
    <div
      className={`bg ${theme[1] && `dark`}`}
      style={{
        color: theme[1] || `white`,
        background: theme[0],
        "--primary-color": theme[0]
      }}
    >
      <div className="fixed">
        <div>
          <h1 className="title">
            A Dungeon a Day: {selectedWeek}/52 {prompt(selectedWeek)}
          </h1>
          <div className="generators">
            {/* <span className="roll-text">click to roll</span> */}
            {/* <span
                className="roll"
                role="img"
                aria-label="click the buttons to generate a random:">
                  🎲:
            </span> */}
            <RandomGenerator type="monster">
              <span role="img" aria-label="monster">
                👹🧌
              </span>
            </RandomGenerator>
            <RandomGenerator type="treasure">
              <span role="img" aria-label="loot">
                ⚱️🪙
              </span>
            </RandomGenerator>
            {/* <RandomGenerator type="place">Generate place description</RandomGenerator> */}
            <RandomGenerator type="npc">
              <span role="img" aria-label="npc name">
                🧍🏻‍♀️🧍🏾
              </span>
            </RandomGenerator>
          </div>
        </div>

        <div className="utilities">
          <ThemePicker theme={theme} setTheme={setTheme} />
          <CopyWeek week={entries?.[selectedWeek]} />
        </div>
      </div>

      {/* <h3>Prompt: {prompt(selectedWeek)}</h3> */}

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Something went wrong!</p>
      ) : (
        entries[selectedWeek].map(({ day, label, note }, i) => (
          <div className="entry columns" key={`${selectedWeek}${day}`}>
            <div className="label columnA">
              <p className="day">{day}</p>
              <input
                className="subtitle"
                value={label}
                onChange={(e) => updateEntries(i, `label`, e.target.value)}
              />
            </div>
            <textarea
              className="note columnB"
              value={note}
              onChange={(e) => updateEntries(i, `note`, e.target.value)}
            />
          </div>
        ))
      )}

      <section className="weekNavigator columns">
        <div className="columnA">
          <button
            disabled={selectedWeek <= 1}
            onClick={() => setSelectedWeek(selectedWeek - 1)}
          >
            Last week
          </button>
        </div>
        <div className="columnB">
          <button
            disabled={selectedWeek === currentWeek}
            onClick={() => setSelectedWeek(selectedWeek + 1)}
          >
            Next week
          </button>
        </div>
      </section>
    </div>
  );
}
