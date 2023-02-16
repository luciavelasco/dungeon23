import "./styles.css";
import "./RandomGenerator.css";
import { useState } from "react";
import { rollTable, Loot } from "./loot";
import { Copy } from "./CopyWeek";

const formatMonsterText = ({
  slug,
  name,
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
  challenge_rating,
  hit_points,
  armor_class
}) => {
  return `${name}
CR: ${challenge_rating} | HP: ${hit_points} | AC: ${armor_class}
STR: ${strength} | DEX: ${dexterity} | CON: ${constitution} | INT: ${intelligence} | WIS: ${wisdom} | CHA: ${charisma}
Full stats: https://open5e.com/monsters/${slug}`;
};

const Monster = ({
  slug,
  name,
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
  challenge_rating,
  hit_points,
  armor_class
}) => {
  return (
    <div className="monster">
      <h2>
        {name} <Copy getText={() => name}>copy name</Copy>
      </h2>
      <div className="details">
        <p>Challenge: {challenge_rating}</p>
        <p>HP: {hit_points}</p>
        <p>AC: {armor_class}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="stat">str</span>
          {strength}
        </li>
        <li>
          <span className="stat">dex</span>
          {dexterity}
        </li>
        <li>
          <span className="stat">con</span>
          {constitution}
        </li>
        <li>
          <span className="stat">int</span>
          {intelligence}
        </li>
        <li>
          <span className="stat">wis</span>
          {wisdom}
        </li>
        <li>
          <span className="stat">cha</span>
          {charisma}
        </li>
      </ul>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://open5e.com/monsters/${slug}`}
      >
        Get all the stats
      </a>
    </div>
  );
};

const generatorLinks = {
  monster: {
    fetch: async ({ max = 1469, setModalValue, setTextValue }) => {
      const url = `https://api.open5e.com/monsters/?format=json&limit=1&page=${Math.ceil(
        Math.random() * max
      )}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      });
      const output = await res.json();
      setModalValue(<Monster {...output.results[0]} />);
      setTextValue(formatMonsterText(output.results[0]));
    }
  },
  treasure: {
    fetch: ({ setModalValue, setTextValue }) => {
      const [{ label, loot }] = rollTable();
      setModalValue(<Loot label={label} loot={loot} />);
      setTextValue(`Loot (${label})\n${loot}`);
    }
  },
  place: ``,
  npc: {
    fetch: async ({ setModalValue, setTextValue }) => {
      const res = await fetch(
        `https://www.behindthename.com/api/random.json?key=lu276979616&number=${Math.ceil(
          Math.random() * 3
        )}&randomsurname=${Math.round(Math.random()) ? `yes` : `no`}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        }
      );
      const { names } = await res.json();
      setModalValue(names.join(` `));
      setTextValue(names.join(` `));
    }
  }
};

export const RandomGenerator = ({ type, children }) => {
  const [modalValue, setModalValue] = useState(undefined);
  const [textValue, setTextValue] = useState(``);

  return (
    <>
      <button
        className="generate"
        onClick={async () => {
          try {
            setModalValue(`Loading...`);
            await generatorLinks[type].fetch({ setModalValue, setTextValue });
          } catch (e) {
            setModalValue(`Something went wrong!`);
            console.error(e);
          }
        }}
      >
        {children}
      </button>
      {modalValue && (
        <div className="modal">
          {modalValue}
          <div className="foot">
            <Copy getText={() => textValue}>Copy All</Copy>
            <button
              onClick={() => {
                setModalValue(undefined);
                setTextValue(``);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
