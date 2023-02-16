// With thanks to Zachary Dix for compiling the tables and logic

const rollD = (max) => Math.ceil(Math.random() * max);

function scrollCantrip() {
  const arr = [
    `Acid Splash`,
    `Blade Ward`,
    `Booming Blade`,
    `Chill Touch`,
    `Control Flames`,
    `Create Bonfire`,
    `Dancing Lights`,
    `Druidcraft`,
    `Eldritch Blast`,
    `Fire Bolt`,
    `Friends`,
    `Frostbite`,
    `Green-Flame Blade`,
    `Guidance`,
    `Gust`,
    `Infestation`,
    `Light`,
    `Lightning Lure`,
    `Mage Hand`,
    `Magic Stone`,
    `Mending`,
    `Message`,
    `Mind Sliver`,
    `Minor Illusion`,
    `Mold Earth`,
    `Poison Spray`,
    `Prestidigitation`,
    `Primal Savagery`,
    `Produce Flame`,
    `Ray of Frost`,
    `Resistance`,
    `Sacred Flame`,
    `Shillelagh`,
    `Shocking Grasp`,
    `Spare the Dying`,
    `Sword Burst`,
    `Thaumaturgy`,
    `Thorn Whip`,
    `Thunderclap`,
    `Toll the Dead`,
    `True Strike`,
    `Vicious Mockery`,
    `Word of Radiance`
  ];
  return arr[rollD(arr.length - 1)];
}

function scrollOne() {
  const arr = [
    `Absorb Elements`,
    `Alarm`,
    `Animal Friendship`,
    `Armor of Agathys`,
    `Arms of Hadar`,
    `Bane`,
    `Beast Bond`,
    `Bless`,
    `Burning Hands`,
    `Catapult`,
    `Cause Fear`,
    `Ceremony`,
    `Chaos Bolt`,
    `Charm Person`,
    `Chromatic Orb`,
    `Color Spray`,
    `Command`,
    `Compelled Duel`,
    `Comprehend Languages`,
    `Create or Destroy Water`,
    `Cure Wounds`,
    `Detect Evil and Good`,
    `Detect Magic`,
    `Detect Poison and Disease`,
    `Disguise Self`,
    `Dissonant Whispers`,
    `Divine Favor`,
    `Earth Tremor`,
    `Ensnaring Strike`,
    `Entangle`,
    `Expeditious Retreat`,
    `Faerie Fire`,
    `False Life`,
    `Feather Fall`,
    `Find Familiar`,
    `Fog Cloud`,
    `Goodberry`,
    `Grease`,
    `Guiding Bolt`,
    `Hail of Thorns`,
    `Healing Word`,
    `Hellish Rebuke`,
    `Heroism`,
    `Hex`,
    `Hunter's Mark`,
    `Ice Knife`,
    `Identify`,
    `Illusory Script`,
    `Inflict Wounds`,
    `Jump`,
    `Longstrider`,
    `Mage Armor`,
    `Magic Missile`,
    `Protection from Evil and Good`,
    `Purify Food and Drink`,
    `Ray of Sickness`,
    `Sanctuary`,
    `Searing Smite`,
    `Shield`,
    `Shield of Faith`,
    `Silent Image`,
    `Sleep`,
    `Snare`,
    `Speak with Animals`,
    `Tasha's Caustic Brew`,
    `Tasha's Hideous Laughter`,
    `Tenser's Floating Disk`,
    `Thunderous Smite`,
    `Thunderwave`,
    `Unseen Servant`,
    `Witch Bolt`,
    `Wrathful Smite`,
    `Zephyr Strike`
  ];
  return arr[rollD(arr.length - 1)];
}

function scrollTwo() {
  const arr = [
    `Aganazzar's Scorcher`,
    `Aid`,
    `Alter Self`,
    `Animal Messenger`,
    `Arcane Lock`,
    `Augury`,
    `Barkskin`,
    `Beast Sense`,
    `Blindness/Deafness`,
    `Blur`,
    `Branding Smite`,
    `Calm Emotions`,
    `Cloud of Daggers`,
    `Continual Flame`,
    `Cordon of Arrows`,
    `Crown of Madness`,
    `Darkness`,
    `Darkvision`,
    `Detect Thoughts`,
    `Dragon's Breath`,
    `Dust Devil`,
    `Earthbind`,
    `Enhance Ability`,
    `Enlarge/Reduce`,
    `Enthrall`,
    `Find Steed`,
    `Find Traps`,
    `Flame Blade`,
    `Flaming Sphere`,
    `Gentle Repose`,
    `Gust of Wind`,
    `Healing Spirit`,
    `Heat Metal`,
    `Hold Person`,
    `Invisibility`,
    `Knock`,
    `Lesser Restoration`,
    `Levitate`,
    `Locate Animals or Plants`,
    `Locate Object`,
    `Magic Mouth`,
    `Magic Weapon`,
    `Maximilian's Earthen Grasp`,
    `Melf's Acid Arrow`,
    `Mind Spike`,
    `Mirror Image`,
    `Misty Step`,
    `Moonbeam`,
    `Nystul's Magic Aura`,
    `Pass without Trace`,
    `Phantasmal Force`,
    `Prayer of Healing`,
    `Protection from Poison`,
    `Pyrotechnics`,
    `Ray of Enfeeblement`,
    `Rope Trick`,
    `Scorching Ray`,
    `See Invisibility`,
    `Shadow Blade`,
    `Shatter`,
    `Silence`,
    `Skywrite`,
    `Snilloc's Snowball Swarm`,
    `Spider Climb`,
    `Spike Growth`,
    `Spiritual Weapon`,
    `Suggestion`,
    `Summon Beast`,
    `Tasha's Mind Whip`,
    `Warding Bond`,
    `Warding Wind`,
    `Web`,
    `Zone of Truth`
  ];
  return arr[rollD(arr.length - 1)];
}

function scrollThree() {
  const arr = [
    `Animate Dead`,
    `Aura of Vitality`,
    `Beacon of Hope`,
    `Bestow Curse`,
    `Blinding Smite`,
    `Blink`,
    `Call Lightning`,
    `Catnap`,
    `Clairvoyance`,
    `Conjure Animals`,
    `Conjure Barrage`,
    `Counterspell`,
    `Create Food and Water`,
    `Crusader's Mantle`,
    `Daylight`,
    `Dispel Magic`,
    `Elemental Weapon`,
    `Enemies Abound`,
    `Erupting Earth`,
    `Fear`,
    `Feign Death`,
    `Fireball`,
    `Flame Arrows`,
    `Fly`,
    `Gaseous Form`,
    `Glyph of Warding`,
    `Haste`,
    `Hunger of Hadar`,
    `Hypnotic Pattern`,
    `Intellect Fortress`,
    `Leomund's Tiny Hut`,
    `Life Transference`,
    `Lightning Arrow`,
    `Lightning Bolt`,
    `Magic Circle`,
    `Major Image`,
    `Mass Healing Word`,
    `Meld into Stone`,
    `Melf's Minute Meteors`,
    `Nondetection`,
    `Phantom Steed`,
    `Plant Growth`,
    `Protection from Energy`,
    `Remove Curse`,
    `Revivify`,
    `Sending`,
    `Sleet Storm`,
    `Slow`,
    `Speak with Dead`,
    `Speak with Plants`,
    `Spirit Guardians`,
    `Spirit Shroud`,
    `Stinking Cloud`,
    `Summon Fey`,
    `Summon Lesser Demons`,
    `Summon Shadowspawn`,
    `Summon Undead`,
    `Thunder Step`,
    `Tidal Wave`,
    `Tiny Servant`,
    `Tongues`,
    `Vampiric Touch`,
    `Wall of Sand`,
    `Wall of Water`,
    `Water Breathing`,
    `Water Walk`,
    `Wind Wall`
  ];
  return arr[rollD(arr.length - 1)];
}

function scrollFour() {
  const arr = [
    `Arcane Eye`,
    `Aura of Life`,
    `Aura of Purity`,
    `Banishment`,
    `Blight`,
    `Charm Monster`,
    `Compulsion`,
    `Confusion`,
    `Conjure Minor Elementals`,
    `Conjure Woodland Beings`,
    `Control Water`,
    `Death Ward`,
    `Dimension Door`,
    `Divination`,
    `Dominate Beast`,
    `Elemental Bane`,
    `Evard's Black Tentacles`,
    `Fabricate`,
    `Find Greater Steed`,
    `Fire Shield`,
    `Freedom of Movement`,
    `Giant Insect`,
    `Grasping Vine`,
    `Greater Invisibility`,
    `Guardian of Faith`,
    `Guardian of Nature`,
    `Hallucinatory Terrain`,
    `Ice Storm`,
    `Leomund's Secret Chest`,
    `Locate Creature`,
    `Mordenkainen's Faithful Hound`,
    `Mordenkainen's Private Sanctum`,
    `Otiluke's Resilient Sphere`,
    `Phantasmal Killer`,
    `Polymorph`,
    `Shadow of Moil`,
    `Sickening Radiance`,
    `Staggering Smite`,
    `Stone Shape`,
    `Stoneskin`,
    `Storm Sphere`,
    `Summon Aberration`,
    `Summon Construct`,
    `Summon Elemental`,
    `Summon Greater Demon`,
    `Vitriolic Sphere`,
    `Wall of Fire`,
    `Water Sphere`
  ];
  return arr[rollD(arr.length - 1)];
}

function scrollFive() {
  const arr = [
    `Animate Objects`,
    `Antilife Shell`,
    `Awaken`,
    `Banishing Smite`,
    `Bigby's Hand`,
    `Circle of Power`,
    `Cloudkill`,
    `Commune`,
    `Commune with Nature`,
    `Cone of Cold`,
    `Conjure Elemental`,
    `Conjure Volley`,
    `Contact Other Plane`,
    `Contagion`,
    `Creation`,
    `Danse Macabre`,
    `Dawn`,
    `Destructive Wave`,
    `Dispel Evil and Good`,
    `Dominate Person`,
    `Dream`,
    `Enervation`,
    `Far Step`,
    `Flame Strike`,
    `Geas`,
    `Greater Restoration`,
    `Hallow`,
    `Hold Monster`,
    `Holy Weapon`,
    `Immolation`,
    `Infernal Calling`,
    `Insect Plague`,
    `Legend Lore`,
    `Maelstrom`,
    `Mass Cure Wounds`,
    `Mislead`,
    `Modify Memory`,
    `Negative Energy Flood`,
    `Passwall`,
    `Planar Binding`,
    `Raise Dead`,
    `Rary's Telepathic Bond`,
    `Reincarnate`,
    `Scrying`,
    `Seeming`,
    `Skill Empowerment`,
    `Steel Wind Strike`,
    `Summon Celestial`,
    `Swift Quiver`,
    `Synaptic Static`,
    `Telekinesis`,
    `Teleportation Circle`,
    `Transmute Rock`,
    `Tree Stride`,
    `Wall of Force`,
    `Wall of Light`,
    `Wall of Stone`,
    `Wrath of Nature`
  ];
  return arr[rollD(arr.length - 1)];
}

function scrollSix() {
  const arr = [
    `Arcane Gate`,
    `Blade Barrier`,
    `Bones of the Earth`,
    `Chain Lightning`,
    `Circle of Death`,
    `Conjure Fey`,
    `Contingency`,
    `Create Homonculus`,
    `Create Undead`,
    `Disintegrate`,
    `Drawmij's Instant Summons`,
    `Druid Grove`,
    `Eyebite`,
    `Find the Path`,
    `Flesh to Stone`,
    `Forbiddance`,
    `Globe of Invulnerability`,
    `Guards and Wards`,
    `Harm`,
    `Heal`,
    `Heroes' Feast`,
    `Investiture of Flame`,
    `Investiture of Ice`,
    `Investiture of Stone`,
    `Investiture of Wind`,
    `Magic Jar`,
    `Mass Suggestion`,
    `Mental Prison`,
    `Move Earth`,
    `Otiluke's Freezing Sphere`,
    `Otto's Irresistible Dance`,
    `Planar Ally`,
    `Primordial Ward`,
    `Programmed Illusion`,
    `Scatter`,
    `Soul Cage`,
    `Summon Fiend`,
    `Sunbeam`,
    `Tasha's Otherworldly Guise`,
    `Tenser's Transformation`,
    `Transport via Plants`,
    `True Seeing`,
    `Wall of Ice`,
    `Wall of Thorns`,
    `Wind Walk`,
    `Word of Recall`
  ];
  return arr[rollD(arr.length - 1)];
}

function scrollSeven() {
  const arr = [
    `Conjure Celestial`,
    `Crown of Stars`,
    `Delayed Blast Fireball`,
    `Divine Word`,
    `Dream of the Blue Veil`,
    `Etherealness`,
    `Finger of Death`,
    `Fire Storm`,
    `Forecage`,
    `Mirage Arcane`,
    `Mordenkainen's Magnificent Mansion`,
    `Mordenkainen's Sword`,
    `Plane Shift`,
    `Power Word Pain`,
    `Prismatic Spray`,
    `Project Image`,
    `Regenerate`,
    `Resurrection`,
    `Reverse Gravity`,
    `Sequester`,
    `Simulacrum`,
    `Symbol`,
    `Teleport`,
    `Temple of the Gods`,
    `Whirlwind`
  ];
  return arr[rollD(arr.length - 1)];
}

function scrollEight() {
  const arr = [
    `Abi-Dalzim's Horrid Wilting`,
    `Animal Shapes`,
    `Antimagic Field`,
    `Antipathy/Sympathy`,
    `Clone`,
    `Control Weather`,
    `Demiplane`,
    `Dominate Monster`,
    `Earthquake`,
    `Feeblemind`,
    `Glibness`,
    `Holy Aura`,
    `Illusory Dragon`,
    `Incendiary Cloud`,
    `Maddening Darkness`,
    `Maze`,
    `Mighty Fortress`,
    `Mind Blank`,
    `Power Word Stun`,
    `Sunburst`,
    `Telepathy`,
    `Tsunami`
  ];
  return arr[rollD(arr.length - 1)];
}

function scrollNine() {
  const arr = [
    `Astral Projection`,
    `Blade of Disaster`,
    `Foresight`,
    `Gate`,
    `Imprisonment`,
    `Invulnerability`,
    `Mass Heal`,
    `Mass Polymorph`,
    `Meteor Swarm`,
    `Power Word Heal`,
    `Power Word Kill`,
    `Prismatic Wall`,
    `Psychic Scream`,
    `Shapechange`,
    `Storm of Vengeance`,
    `Time Stop`,
    `True Polymorph`,
    `True Resurrection`,
    `Weird`,
    `Wish`
  ];
  return arr[rollD(arr.length - 1)];
}
function tableLight() {
  const arr = [`Padded`, `Leather`, `Studded leather`];
  return arr[rollD(arr.length - 1)];
}

function tableMedium() {
  const arr = [
    `Hide`,
    `Chain shirt`,
    `Scale mail`,
    `Breastplate`,
    `Half plate`
  ];
  return arr[rollD(arr.length - 1)];
}

function tableHeavy() {
  const arr = [`Ring mail`, `Chain mail`, `Splint`, `Plate`];
  return arr[rollD(arr.length - 1)];
}

function tableArmor() {
  const arr = [tableLight(), tableMedium(), tableHeavy()];
  return arr[rollD(arr.length - 1)];
}

function tableAmmo() {
  const arr = [
    `Arrows (20)`,
    `Blowgun needles (50)`,
    `Crossbow bolts (20)`,
    `Sling bullets (20)`
  ];
  return arr[rollD(arr.length - 1)];
}

function tableMusic() {
  const arr = [
    `Bagpipes`,
    `Drum`,
    `Dulcimer`,
    `Flute`,
    `Lute`,
    `Lyre`,
    `Horn`,
    `Pan flute`,
    `Shawm`,
    `Viol`
  ];
  return arr[rollD(arr.length - 1)];
}

function tableSword() {
  const arr = [`Greatsword`, `Longsword`, `Rapier`, `Scimitar`, `Shortsword`];
  return arr[rollD(arr.length - 1)];
}

function tableAxe() {
  const arr = [`Handaxe`, `Battleaxe`, `Greataxe`];
  return arr[rollD(arr.length - 1)];
}

function tableWeapon() {
  const arr = [
    `Club`,
    `Dagger`,
    `Greatclub`,
    `Handaxe`,
    `Javelin`,
    `Light hammer`,
    `Mace`,
    `Quarterstaff`,
    `Sickle`,
    `Spear`,
    `Crossbow, light`,
    `Dart`,
    `Shortbow`,
    `Sling`,
    `Battleaxe`,
    `Flail`,
    `Glaive`,
    `Greataxe`,
    `Greatsword`,
    `Halberd`,
    `Lance`,
    `Longsword`,
    `Maul`,
    `Morningstar`,
    `Pike`,
    `Rapier`,
    `Scimitar`,
    `Shortsword`,
    `Trident`,
    `War pick`,
    `Warhammer`,
    `Whip`,
    `Blowgun`,
    `Crossbow, hand`,
    `Crossbow, heavy`,
    `Longbow`
  ];
  return arr[rollD(arr.length - 1)];
}

function tableDType() {
  const arr = [`bludgeoning`, `piercing`, `slashing`];
  return arr[rollD(arr.length - 1)];
}

function tableA() {
  const arr = [
    //1-50
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    `Potion of Healing`,
    //51-60
    `Spell Scroll (` + scrollCantrip() + `)`,
    `Spell Scroll (` + scrollCantrip() + `)`,
    `Spell Scroll (` + scrollCantrip() + `)`,
    `Spell Scroll (` + scrollCantrip() + `)`,
    `Spell Scroll (` + scrollCantrip() + `)`,
    `Spell Scroll (` + scrollCantrip() + `)`,
    `Spell Scroll (` + scrollCantrip() + `)`,
    `Spell Scroll (` + scrollCantrip() + `)`,
    `Spell Scroll (` + scrollCantrip() + `)`,
    `Spell Scroll (` + scrollCantrip() + `)`,
    //61-70
    `Potion of climbing`,
    `Potion of climbing`,
    `Potion of climbing`,
    `Potion of climbing`,
    `Potion of climbing`,
    `Potion of climbing`,
    `Potion of climbing`,
    `Potion of climbing`,
    `Potion of climbing`,
    `Potion of climbing`,
    //71-90
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    `Spell Scroll (` + scrollOne() + `)`,
    //91-94
    `Spell Scroll (` + scrollTwo() + `)`,
    `Spell Scroll (` + scrollTwo() + `)`,
    `Spell Scroll (` + scrollTwo() + `)`,
    `Spell Scroll (` + scrollTwo() + `)`,
    //95-98
    `Potion of Greater Healing`,
    `Potion of Greater Healing`,
    `Potion of Greater Healing`,
    `Potion of Greater Healing`,
    //99
    `Bag of Holding`,
    //100
    `Driftglobe`,

    //100+ new items
    `Spellwrought Tattoo (` + scrollCantrip() + `)`,
    `Spellwrought Tattoo (` + scrollCantrip() + `)`,
    `Spellwrought Tattoo (` + scrollCantrip() + `)`,
    `Spellwrought Tattoo (` + scrollCantrip() + `)`,
    `Spellwrought Tattoo (` + scrollCantrip() + `)`,
    `Spellwrought Tattoo (` + scrollCantrip() + `)`,
    `Spellwrought Tattoo (` + scrollCantrip() + `)`,
    `Spellwrought Tattoo (` + scrollCantrip() + `)`,
    `Spellwrought Tattoo (` + scrollCantrip() + `)`,
    `Spellwrought Tattoo (` + scrollCantrip() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    `Spellwrought Tattoo (` + scrollOne() + `)`,
    fA1(),
    `Bag of Holding`,
    `Bead of Nourishment`,
    `Bead of Refreshment`,
    `Boots of False Tracks`,
    `Candle of the Deep`,
    `Cast-off Armor (` + tableArmor() + `)`,
    `Charlatan's Die`,
    `Cloak of Billowing`,
    `Cloak of Many Fashions`,
    `Clockwork Amulet`,
    `Clothes of Mending`,
    `Dark Shard Amulet`,
    `Dread Helm`,
    `Driftglobe`,
    `Ear Horn of Hearing`,
    `Enduring Spellbook`,
    `Ersatz Eye`,
    `Hat of Vermin`,
    `Hat of Wizardry`,
    `Heward's Handy Spice Pouch`,
    `Horn of Silent Alarm`,
    `Illuminator's Tattoo`,
    `Instrument of Illusions (` + tableMusic() + `)`,
    `Instrument of Scribing (` + tableMusic() + `)`,
    `Lock of Trickery`,
    `Masquerade Tattoo`,
    `Moon-Touched Sword (` + tableSword() + `)`,
    `Mystery Key`,
    `Orb of Direction`,
    `Orb of Time`,
    `Perfume of Bewitching`,
    `Pipe of Smoke Monsters`,
    `Pole of Angling`,
    `Pole of Collapsing`,
    `Pot of Awakening`,
    `Prosthetic Limb`,
    `Rope of Mending`,
    `Ruby of the War Mage`,
    `Shield of Expression`,
    `Smoldering Armor (` + tableArmor() + `)`,
    `Staff of Adornment`,
    `Staff of Birdcalls`,
    `Staff of Flowers`,
    `Talking Doll`,
    `Tankard of Sobriety`,
    `Unbreakable Arrow`,
    `Veteran's Cane`,
    `Walloping Ammunition (` + tableAmmo() + `)`,
    `Wand of Conducting`,
    `Wand of Pyrotechnics`,
    `Wand of Scowls`,
    `Wand of Smiles`
  ];
  return arr[rollD(arr.length - 1)];
}

function fA1() {
  const arr = [
    `Armor of Gleaming (` + tableMedium() + `)`,
    `Armor of Gleaming (` + tableHeavy() + `)`
  ];
  return arr[rollD(arr.length - 1)];
}

function tableB() {
  const arr = [
    //1-15
    `Potion of greater healing`,
    `Potion of greater healing`,
    `Potion of greater healing`,
    `Potion of greater healing`,
    `Potion of greater healing`,
    `Potion of greater healing`,
    `Potion of greater healing`,
    `Potion of greater healing`,
    `Potion of greater healing`,
    `Potion of greater healing`,
    `Potion of greater healing`,
    `Potion of greater healing`,
    `Potion of greater healing`,
    `Potion of greater healing`,
    `Potion of greater healing`,
    //16-22
    `Potion of fire breath`,
    `Potion of fire breath`,
    `Potion of fire breath`,
    `Potion of fire breath`,
    `Potion of fire breath`,
    `Potion of fire breath`,
    `Potion of fire breath`,
    //23-29
    `Potion of resistance`,
    `Potion of resistance`,
    `Potion of resistance`,
    `Potion of resistance`,
    `Potion of resistance`,
    `Potion of resistance`,
    `Potion of resistance`,
    //30-34
    `Ammunition, +1 (` + tableAmmo() + `)`,
    `Ammunition, +1 (` + tableAmmo() + `)`,
    `Ammunition, +1 (` + tableAmmo() + `)`,
    `Ammunition, +1 (` + tableAmmo() + `)`,
    `Ammunition, +1 (` + tableAmmo() + `)`,
    //35-39
    `Potion of animal friendship`,
    `Potion of animal friendship`,
    `Potion of animal friendship`,
    `Potion of animal friendship`,
    `Potion of animal friendship`,
    //40-44
    `Potion of hill giant strength`,
    `Potion of hill giant strength`,
    `Potion of hill giant strength`,
    `Potion of hill giant strength`,
    `Potion of hill giant strength`,
    //45-49
    `Potion of growth`,
    `Potion of growth`,
    `Potion of growth`,
    `Potion of growth`,
    `Potion of growth`,
    //50-54
    `Potion of water breathing`,
    `Potion of water breathing`,
    `Potion of water breathing`,
    `Potion of water breathing`,
    `Potion of water breathing`,
    //55-59
    `Spell Scroll (` + scrollTwo() + `)`,
    `Spell Scroll (` + scrollTwo() + `)`,
    `Spell Scroll (` + scrollTwo() + `)`,
    `Spell Scroll (` + scrollTwo() + `)`,
    `Spell Scroll (` + scrollTwo() + `)`,
    //60-64
    `Spell Scroll (` + scrollThree() + `)`,
    `Spell Scroll (` + scrollThree() + `)`,
    `Spell Scroll (` + scrollThree() + `)`,
    `Spell Scroll (` + scrollThree() + `)`,
    `Spell Scroll (` + scrollThree() + `)`,
    //65-67
    `Bag of holding`,
    `Bag of holding`,
    `Bag of holding`,
    //68-70
    `Keoghtom's ointment`,
    `Keoghtom's ointment`,
    `Keoghtom's ointment`,
    //71-73
    `Oil of slipperiness`,
    `Oil of slipperiness`,
    `Oil of slipperiness`,
    //74-75
    `Dust of disappearance`,
    `Dust of disappearance`,
    //76-77
    `Dust of dryness`,
    `Dust of dryness`,
    //78-79
    `Dust of sneezing and choking`,
    `Dust of sneezing and choking`,
    //80-81
    `Elemental gem`,
    `Elemental gem`,
    //82-83
    `Philter of love`,
    `Philter of love`,
    //84+
    `Alchemy jug`,
    `Cap of water breathing`,
    `Cloak of the manta ray`,
    `Driftglobe`,
    `Goggles of night`,
    `Helm of comprehending languages`,
    `Immovable rod`,
    `Lantern of revealing`,
    `Mariner's armor (` + tableArmor() + `)`,
    fB1(),
    `Potion of poison`,
    `Ring of swimming`,
    `Robe of useful items`,
    `Rope of climbing`,
    `Saddle of the cavalier`,
    `Wand of magic detection`,
    `Wand of secrets`,
    //101+ new items
    `Coiling Grasp Tattoo`,
    `Eldritch Claw Tattoo`,
    `Feywild Shard`,
    `Guardian Emblem`,
    `Nature's Mantle`,
    `Spellwrought Tattoo (` + scrollTwo() + `)`,
    `Spellwrought Tattoo (` + scrollTwo() + `)`,
    `Spellwrought Tattoo (` + scrollTwo() + `)`,
    `Spellwrought Tattoo (` + scrollTwo() + `)`,
    `Spellwrought Tattoo (` + scrollTwo() + `)`,
    `Spellwrought Tattoo (` + scrollThree() + `)`,
    `Spellwrought Tattoo (` + scrollThree() + `)`,
    `Spellwrought Tattoo (` + scrollThree() + `)`,
    `Spellwrought Tattoo (` + scrollThree() + `)`,
    `Spellwrought Tattoo (` + scrollThree() + `)`
  ];
  return arr[rollD(arr.length - 1)];
}

function fB1() {
  const arr = [
    `Mithril Armor (Chain shirt)`,
    `Mithril Armor (Scale mail)`,
    `Mithril Armor (Breastplate)`,
    `Mithril Armor (Half plate)`,
    `Mithril Armor (Ring mail)`,
    `Mithril Armor (Chain mail)`,
    `Mithril Armor (Splint)`,
    `Mithril Armor (Plate)`
  ];
  return arr[rollD(arr.length - 1)];
}

function tableC() {
  const arr = [
    //01-15
    `Potion of superior healing`,
    `Potion of superior healing`,
    `Potion of superior healing`,
    `Potion of superior healing`,
    `Potion of superior healing`,
    `Potion of superior healing`,
    `Potion of superior healing`,
    `Potion of superior healing`,
    `Potion of superior healing`,
    `Potion of superior healing`,
    `Potion of superior healing`,
    `Potion of superior healing`,
    `Potion of superior healing`,
    `Potion of superior healing`,
    `Potion of superior healing`,
    //16-22
    `Spell scroll (` + scrollFour() + `)`,
    `Spell scroll (` + scrollFour() + `)`,
    `Spell scroll (` + scrollFour() + `)`,
    `Spell scroll (` + scrollFour() + `)`,
    `Spell scroll (` + scrollFour() + `)`,
    `Spell scroll (` + scrollFour() + `)`,
    `Spell scroll (` + scrollFour() + `)`,
    //23-27
    `Ammunition, +2 (` + tableAmmo() + `)`,
    `Ammunition, +2 (` + tableAmmo() + `)`,
    `Ammunition, +2 (` + tableAmmo() + `)`,
    `Ammunition, +2 (` + tableAmmo() + `)`,
    `Ammunition, +2 (` + tableAmmo() + `)`,
    //28-32
    `Potion of clairvoyance`,
    `Potion of clairvoyance`,
    `Potion of clairvoyance`,
    `Potion of clairvoyance`,
    `Potion of clairvoyance`,
    //33-37
    `Potion of diminution`,
    `Potion of diminution`,
    `Potion of diminution`,
    `Potion of diminution`,
    `Potion of diminution`,
    //38-42
    `Potion of gaseous form`,
    `Potion of gaseous form`,
    `Potion of gaseous form`,
    `Potion of gaseous form`,
    `Potion of gaseous form`,
    //43-47
    `Potion of frost giant strength`,
    `Potion of frost giant strength`,
    `Potion of frost giant strength`,
    `Potion of frost giant strength`,
    `Potion of frost giant strength`,
    //48-52
    `Potion of stone giant strength`,
    `Potion of stone giant strength`,
    `Potion of stone giant strength`,
    `Potion of stone giant strength`,
    `Potion of stone giant strength`,
    //53-57
    `Potion of heroism`,
    `Potion of heroism`,
    `Potion of heroism`,
    `Potion of heroism`,
    `Potion of heroism`,
    //58-62
    `Potion of invulnerability`,
    `Potion of invulnerability`,
    `Potion of invulnerability`,
    `Potion of invulnerability`,
    `Potion of invulnerability`,
    //63-67
    `Potion of mind reading`,
    `Potion of mind reading`,
    `Potion of mind reading`,
    `Potion of mind reading`,
    `Potion of mind reading`,
    //68-72
    `Spell scroll (` + scrollFive() + `)`,
    `Spell scroll (` + scrollFive() + `)`,
    `Spell scroll (` + scrollFive() + `)`,
    `Spell scroll (` + scrollFive() + `)`,
    `Spell scroll (` + scrollFive() + `)`,
    //73-75
    `Elixir of health`,
    `Elixir of health`,
    `Elixir of health`,
    //76-78
    `Oil of etherealness`,
    `Oil of etherealness`,
    `Oil of etherealness`,
    //79-81
    `Potion of fire giant strength`,
    `Potion of fire giant strength`,
    `Potion of fire giant strength`,
    //82-84
    `Quaal's feather token`,
    `Quaal's feather token`,
    `Quaal's feather token`,
    //85-87
    `Scroll of protection`,
    `Scroll of protection`,
    `Scroll of protection`,
    //88-89
    `Bag of beans`,
    `Bag of beans`,
    //90-91
    `Bead of force`,
    `Bead of force`,
    //92+
    `Chime of opening`,
    `Decanter of endless water`,
    `Eyes of minute seeing`,
    `Folding boat`,
    `Heward's handy haversack`,
    `Horseshoes of speed`,
    `Necklace of fireballs`,
    `Periapt of health`,
    `Sending stones`,
    //101+ new items
    `Alchemical Compendium`,
    `Astral Shard`,
    `Astromancy Archive`,
    `Atlas of Endless Horizons`,
    `Bell Branch`,
    `Duplicitous Manuscript`,
    fC1(),
    `Far Realm Shard`,
    `Fulminating Treatise`,
    `Heart Weaver's Primer`,
    `Libram of Souls and Flesh`,
    `Lyre of Building`,
    fC2(),
    `Planecaller's Codex`,
    `Protective Verses`,
    `Reveler's Concertina`,
    `Shadowfell Brand Tattoo`,
    `Shadowfell Shard`,
    `Spellwrought Tattoo (` + scrollFour() + `)`,
    `Spellwrought Tattoo (` + scrollFour() + `)`,
    `Spellwrought Tattoo (` + scrollFour() + `)`,
    `Spellwrought Tattoo (` + scrollFour() + `)`,
    `Spellwrought Tattoo (` + scrollFour() + `)`,
    `Spellwrought Tattoo (` + scrollFour() + `)`,
    `Spellwrought Tattoo (` + scrollFour() + `)`,
    `Spellwrought Tattoo (` + scrollFive() + `)`,
    `Spellwrought Tattoo (` + scrollFive() + `)`,
    `Spellwrought Tattoo (` + scrollFive() + `)`,
    `Spellwrought Tattoo (` + scrollFive() + `)`,
    `Spellwrought Tattoo (` + scrollFive() + `)`
  ];
  return arr[rollD(arr.length - 1)];
}

function fC1() {
  const arr = [
    `Elemental Essence Shard, Air`,
    `Elemental Essence Shard, Earth`,
    `Elemental Essence Shard, Fire`,
    `Elemental Essence Shard, Water`
  ];
  return arr[rollD(arr.length - 1)];
}

function fC2() {
  const arr = [
    `Outer Essence Shard, Chaotic`,
    `Outer Essence Shard, Evil`,
    `Outer Essence Shard, Good`,
    `Outer Essence Shard, Lawful`
  ];
  return arr[rollD(arr.length - 1)];
}

function tableD() {
  const arr = [
    //01-20
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    //21-30
    `Potion of invisibility`,
    `Potion of invisibility`,
    `Potion of invisibility`,
    `Potion of invisibility`,
    `Potion of invisibility`,
    `Potion of invisibility`,
    `Potion of invisibility`,
    `Potion of invisibility`,
    `Potion of invisibility`,
    `Potion of invisibility`,
    //31-40
    `Potion of speed`,
    `Potion of speed`,
    `Potion of speed`,
    `Potion of speed`,
    `Potion of speed`,
    `Potion of speed`,
    `Potion of speed`,
    `Potion of speed`,
    `Potion of speed`,
    `Potion of speed`,
    //41-50
    `Spell scroll (` + scrollSix() + `)`,
    `Spell scroll (` + scrollSix() + `)`,
    `Spell scroll (` + scrollSix() + `)`,
    `Spell scroll (` + scrollSix() + `)`,
    `Spell scroll (` + scrollSix() + `)`,
    `Spell scroll (` + scrollSix() + `)`,
    `Spell scroll (` + scrollSix() + `)`,
    `Spell scroll (` + scrollSix() + `)`,
    `Spell scroll (` + scrollSix() + `)`,
    `Spell scroll (` + scrollSix() + `)`,
    //51-57
    `Spell scroll (` + scrollSeven() + `)`,
    `Spell scroll (` + scrollSeven() + `)`,
    `Spell scroll (` + scrollSeven() + `)`,
    `Spell scroll (` + scrollSeven() + `)`,
    `Spell scroll (` + scrollSeven() + `)`,
    `Spell scroll (` + scrollSeven() + `)`,
    `Spell scroll (` + scrollSeven() + `)`,
    //58-62
    `Ammunition, +3 (` + tableAmmo() + `)`,
    `Ammunition, +3 (` + tableAmmo() + `)`,
    `Ammunition, +3 (` + tableAmmo() + `)`,
    `Ammunition, +3 (` + tableAmmo() + `)`,
    `Ammunition, +3 (` + tableAmmo() + `)`,
    //63-67
    `Oil of sharpness`,
    `Oil of sharpness`,
    `Oil of sharpness`,
    `Oil of sharpness`,
    `Oil of sharpness`,
    //68-72
    `Potion of flying`,
    `Potion of flying`,
    `Potion of flying`,
    `Potion of flying`,
    `Potion of flying`,
    //73-77
    `Potion of cloud giant strength`,
    `Potion of cloud giant strength`,
    `Potion of cloud giant strength`,
    `Potion of cloud giant strength`,
    `Potion of cloud giant strength`,
    //78-82
    `Potion of longevity`,
    `Potion of longevity`,
    `Potion of longevity`,
    `Potion of longevity`,
    `Potion of longevity`,
    //83-87
    `Potion of vitality`,
    `Potion of vitality`,
    `Potion of vitality`,
    `Potion of vitality`,
    `Potion of vitality`,
    //88-92
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    //93-95
    `Horseshoes of a zephyr`,
    `Horseshoes of a zephyr`,
    `Horseshoes of a zephyr`,
    //96-98
    `Nolzur's marvelous pigments`,
    `Nolzur's marvelous pigments`,
    `Nolzur's marvelous pigments`,
    //99
    `Bag of devouring`,
    //100
    `Portable hole`,
    //101+ new items
    `Absorbing Tattoo`,
    `Cauldron of Rebirth`,
    `Crystalline Chronicle`,
    `Ghost Step Tattoo`,
    `Lifewell Tattoo`
  ];
  return arr[rollD(arr.length - 1)];
}

function tableE() {
  const arr = [
    //1-30
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    `Spell scroll (` + scrollEight() + `)`,
    //31-55
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    `Potion of storm giant strength`,
    //56-70
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    `Potion of supreme healing`,
    //71-85
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    `Spell scroll (` + scrollNine() + `)`,
    //86-93
    `Universal Solvent`,
    `Universal Solvent`,
    `Universal Solvent`,
    `Universal Solvent`,
    `Universal Solvent`,
    `Universal Solvent`,
    `Universal Solvent`,
    `Universal Solvent`,
    //94-98
    `Arrow of slaying`,
    `Arrow of slaying`,
    `Arrow of slaying`,
    `Arrow of slaying`,
    `Arrow of slaying`,
    //99-100
    `Sovereign glue`,
    `Sovereign glue`,
    //101 new item
    `Blood Fury Tattoo`
  ];
  return arr[rollD(arr.length - 1)];
}

function tableF() {
  const arr = [
    //1-15
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    `Weapon, +1 (` + tableWeapon() + `)`,
    //16-18
    `Shield, +1`,
    `Shield, +1`,
    `Shield, +1`,
    //19-21
    `Sentinel shield`,
    `Sentinel shield`,
    `Sentinel shield`,
    //22-23
    `Amulet of proof against detection and location`,
    `Amulet of proof against detection and location`,
    //24-25
    `Boots of elvenkind`,
    `Boots of elvenkind`,
    //26-27
    `Boots of striding and springing`,
    `Boots of striding and springing`,
    //28-29
    `Bracers of archery`,
    `Bracers of archery`,
    //30-31
    `Brooch of shielding`,
    `Brooch of shielding`,
    //32-33
    `Broom of flying`,
    `Broom of flying`,
    //34-35
    `Cloak of elvenkind`,
    `Cloak of elvenkind`,
    //36-37
    `Cloak of protection`,
    `Cloak of protection`,
    //38-39
    `Gauntlets of ogre power`,
    `Gauntlets of ogre power`,
    //40-41
    `Hat of disguise`,
    `Hat of disguise`,
    //42-43
    `Javelin of lightning`,
    `Javelin of lightning`,
    //44-45
    `Pearl of power`,
    `Pearl of power`,
    //46-47
    `Rod of the pact keeper, +1`,
    `Rod of the pact keeper, +1`,
    //48-49
    `Slippers of spider climbing`,
    `Slippers of spider climbing`,
    //50-51
    `Staff of the adder`,
    `Staff of the adder`,
    //52-53
    `Staff of the python`,
    `Staff of the python`,
    //54-55
    `Sword of Vengeance (` + tableSword() + `)`,
    `Sword of Vengeance (` + tableSword() + `)`,
    //56-57
    `Trident of fish command`,
    `Trident of fish command`,
    //58-59
    `Wand of magic missiles`,
    `Wand of magic missiles`,
    //60-61
    `Wand of the war mage, +1`,
    `Wand of the war mage, +1`,
    //62-63
    `Wand of web`,
    `Wand of web`,
    //64-65
    `Weapon of warning (` + tableWeapon() + `)`,
    `Weapon of warning (` + tableWeapon() + `)`,
    //66-100
    `Adamantine armor (chain mail)`,
    `Adamantine armor (chain shirt)`,
    `Adamantine armor (scale mail)`,
    `Bag of tricks (gray)`,
    `Bag of tricks (rust)`,
    `Bag of tricks (tan)`,
    `Boots of the winterlands`,
    `Circlet of blasting`,
    `Deck of illusions (` + (33 - rollD(20)) + `cards)`,
    `Eversmoking bottle`,
    `Eyes of charming`,
    `Eyes of the eagle`,
    `Figurine of wondrous power (silver raven)`,
    `Gem of brightness`,
    `Gloves of missile snaring`,
    `Gloves of swimming and climbing`,
    `Gloves of thievery`,
    `Headband of intellect`,
    `Helm of telepathy`,
    `Instrument of the bards (Doss lute)`,
    `Instrument of the bards (Fochlucan bandore)`,
    `Instrument of the bards (Mac-Fuimidh cittern)`,
    `Medallion of thoughts`,
    `Necklace of adaptation`,
    `Periapt of wound closure`,
    `Pipes of haunting`,
    `Pipes of the sewers`,
    `Ring of jumping`,
    `Ring of mind shielding`,
    `Ring of warmth`,
    `Ring of water walking`,
    `Quiver of Ehlonna`,
    `Stone of good luck`,
    `Wind fan`,
    `Winged boots`,
    //101+ new items
    `Moon Sickle, +1`,
    `All-Purpose Tool, +1`,
    `Amulet of the Devout, +1`,
    `Arcane Grimoire, +1`,
    `Barrier Tattoo, AC 12`,
    `Bloodwell Vial, +1`,
    `Rhythm-Maker's Drum, +1`
  ];
  return arr[rollD(arr.length - 1)];
}

function tableG() {
  const arr = [
    //1-11
    `Weapon, +2 (` + tableWeapon() + `)`,
    `Weapon, +2 (` + tableWeapon() + `)`,
    `Weapon, +2 (` + tableWeapon() + `)`,
    `Weapon, +2 (` + tableWeapon() + `)`,
    `Weapon, +2 (` + tableWeapon() + `)`,
    `Weapon, +2 (` + tableWeapon() + `)`,
    `Weapon, +2 (` + tableWeapon() + `)`,
    `Weapon, +2 (` + tableWeapon() + `)`,
    `Weapon, +2 (` + tableWeapon() + `)`,
    `Weapon, +2 (` + tableWeapon() + `)`,
    `Weapon, +2 (` + tableWeapon() + `)`,
    //12-14
    fG1(),
    fG1(),
    fG1(),
    //15-100
    `Adamantine armor (breastplate)`,
    `Adamantine armor (splint)`,
    `Amulet of health`,
    `Armor of vulnerability (` + tableHeavy() + `, ` + tableDType() + `)`,
    `Arrow-catching shield`,
    `Belt of dwarvenkind`,
    `Belt of hill giant strength`,
    `Berserker axe (` + tableAxe() + `)`,
    `Boots of levitation`,
    `Boots of speed`,
    `Bowl of commanding water elementals`,
    `Bracers of defense`,
    `Brazier of commanding fire elementals`,
    `Cape of the mountebank`,
    `Censer of controlling air elementals`,
    `Armor, +1 (chain mail)`,
    `Armor of resistance (chain mail)`,
    `Armor, +1 (chain shirt)`,
    `Armor of resistance (chain shirt)`,
    `Cloak of displacement`,
    `Cloak of the bat`,
    `Cube of force`,
    `Daern's instant fortress`,
    `Dagger of venom`,
    `Dimensional shackles`,
    `Dragon slayer (` + tableSword() + `)`,
    `Elven chain`,
    `Flame tongue (` + tableSword() + `)`,
    `Gem of seeing`,
    fG2(),
    `Glamoured studded leather`,
    `Helm of teleportation`,
    `Horn of blasting`,
    `Horn of Valhalla (silver)`,
    `Horn of Valhalla (brass)`,
    `Instrument of the bards (Canaith mandolin)`,
    `Instrument of the bards (Cli lyre)`,
    `Ioun stone (awareness)`,
    `Ioun stone (protection)`,
    `Ioun stone (reserve)`,
    `Ioun stone (sustenance)`,
    `Iron bands of Bilarro`,
    `Armor, +1 (leather)`,
    `Armor of resistance (leather)`,
    `Mace of disruption`,
    `Mace of smiting`,
    `Mace of terror`,
    `Mantle of spell resistance`,
    `Necklace of prayer beads`,
    `Periapt of proof against poison`,
    `Ring of animal influence`,
    `Ring of evasion`,
    `Ring of feather falling`,
    `Ring of free action`,
    `Ring of protection`,
    `Ring of resistance`,
    `Ring of spell storing`,
    `Ring of the ram`,
    `Ring of X-ray vision`,
    `Robe of eyes`,
    `Rod of rulership`,
    `Rod of the pact keeper, +2`,
    `Rope of entanglement`,
    `Armor, +1 (scale mail)`,
    `Armor of resistance (scale mail)`,
    `Shield, +2`,
    `Shield of missile attraction`,
    `Staff of charming`,
    `Staff of healing`,
    `Staff of swarming insects`,
    `Staff of the woodlands`,
    `Staff of withering`,
    `Stone of controlling earth elementals`,
    `Sun blade`,
    `Sword of life stealing (` + tableSword() + `)`,
    `Sword of wounding (` + tableSword() + `)`,
    `Tentacle rod`,
    `Vicious weapon (` + tableWeapon() + `)`,
    `Wand of binding`,
    `Wand of enemy detection`,
    `Wand of fear`,
    `Wand of fireballs`,
    `Wand of lightning bolts`,
    `Wand of paralysis`,
    `Wand of the war mage, +2`,
    `Wand of wonder`,
    `Wings of flying`,
    //101+ new items
    `Devotee's Censer`,
    `Moon Sickle, +2`,
    `All-Purpose Tool, +2`,
    `Amulet of the Devout, +2`,
    `Arcane Grimoire, +2`,
    `Barrier Tattoo, AC 15`,
    `Bloodwell Vial, +2`,
    `Rhythm-Maker's Drum, +2`
  ];
  return arr[rollD(arr.length - 1)];
}

function fG1() {
  const arr = [
    `Bronze griffon`,
    `Ebony fly`,
    `Golden lions`,
    `Ivory goats`,
    `Marble elephant`,
    `Onyx dog`,
    `Onyx dog`,
    `Serpentine owl`
  ];
  return arr[rollD(arr.length - 1)];
}

function fG2() {
  const arr = [
    `Giant slayer (` + tableSword() + `)`,
    `Giant slayer (` + tableAxe() + `)`
  ];
  return arr[rollD(arr.length - 1)];
}

function tableH() {
  const arr = [
    //1-10
    `Weapon, +3 (` + tableWeapon() + `)`,
    `Weapon, +3 (` + tableWeapon() + `)`,
    `Weapon, +3 (` + tableWeapon() + `)`,
    `Weapon, +3 (` + tableWeapon() + `)`,
    `Weapon, +3 (` + tableWeapon() + `)`,
    `Weapon, +3 (` + tableWeapon() + `)`,
    `Weapon, +3 (` + tableWeapon() + `)`,
    `Weapon, +3 (` + tableWeapon() + `)`,
    `Weapon, +3 (` + tableWeapon() + `)`,
    `Weapon, +3 (` + tableWeapon() + `)`,
    //11-12
    `Amulet of the planes`,
    `Amulet of the planes`,
    //13-14
    `Carpet of flying`,
    `Carpet of flying`,
    //15-16
    `Crystal ball (very rare version)`,
    `Crystal ball (very rare version)`,
    //17-18
    `Ring of regeneration`,
    `Ring of regeneration`,
    //19-20
    `Ring of shooting stars`,
    `Ring of shooting stars`,
    //21-22
    `Ring of telekinesis`,
    `Ring of telekinesis`,
    //23-24
    `Robe of scintillating colors`,
    `Robe of scintillating colors`,
    //25-26
    `Robe of stars`,
    `Robe of stars`,
    //27-28
    `Robe of absorption`,
    `Robe of absorption`,
    //29-30
    `Rod of alertness`,
    `Rod of alertness`,
    //31-32
    `Rod of security`,
    `Rod of security`,
    //33-34
    `Rod of the pact keeper, +3`,
    `Rod of the pact keeper, +3`,
    //35-36
    `Scimitar of speed`,
    `Scimitar of speed`,
    //37-38
    `Shield, +3`,
    `Shield, +3`,
    //39-40
    `Staff of fire`,
    `Staff of fire`,
    //41-42
    `Staff of frost`,
    `Staff of frost`,
    //43-44
    `Staff of power`,
    `Staff of power`,
    //45-46
    `Staff of striking`,
    `Staff of striking`,
    //47-48
    `Staff of thunder and lightning`,
    `Staff of thunder and lightning`,
    //49-50
    `Sword of sharpness (` + tableSword() + `)`,
    `Sword of sharpness (` + tableSword() + `)`,
    //51-52
    `Wand of polymorph`,
    `Wand of polymorph`,
    //53-54
    `Wand of the war mage, +3`,
    `Wand of the war mage, +3`,
    //55-100
    `Adamantine armor (half plate)`,
    `Adamantine armor (plate)`,
    `Animated shield`,
    `Belt of fire giant strength`,
    `Belt of frost (or stone) giant strength`,
    `Armor, +1 (breastplate)`,
    `Armor of resistance (breastplate)`,
    `Candle of invocation`,
    `Armor, +2 (chain mail)`,
    `Armor, +2 (chain shirt)`,
    `Cloak of arachnida`,
    `Dancing sword (` + tableSword() + `)`,
    `Demon armor`,
    `Dragon scale mail`,
    `Dwarven plate`,
    `Dwarven thrower`,
    `Efreeti bottle`,
    `Figurine of wondrous power (obsidian steed)`,
    `Frost brand (` + tableSword() + `)`,
    `Helm of brilliance`,
    `Horn of Valhalla (bronze)`,
    `Instrument of the bards (Anstruth harp)`,
    `Ioun stone (absorption)`,
    `Ioun stone (agility)`,
    `Ioun stone (fortitude)`,
    `Ioun stone (insight)`,
    `Ioun stone (intellect)`,
    `Ioun stone (leadership)`,
    `Ioun stone (strength)`,
    `Armor, +2 (leather)`,
    `Manual of bodility health`,
    `Manual of gainful exercise`,
    `Manual of golems`,
    `Manual of quickness of action`,
    `Mirror of life trapping`,
    `Nine lives stealer (` + tableSword() + `)`,
    `Oathbow`,
    `Armor, +2 (scale mail)`,
    `Spellguard shield`,
    `Armor, +1 (splint)`,
    `Armor of resistance (splint)`,
    `Armor, +1 (studded leather)`,
    `Armor of resistance (studded leather)`,
    `Tome of clear thought`,
    `Tome of leadership and influence`,
    `Tome of understanding`,
    //101+ new items
    `Moon Sickle, +3`,
    `All-Purpose Tool, +3`,
    `Amulet of the Devout, +3`,
    `Arcane Grimoire, +3`,
    `Barrier Tattoo, AC 18`,
    `Bloodwell Vial, +3`,
    `Rhythm-Maker's Drum, +3`
  ];
  return arr[rollD(arr.length - 1)];
}

function tableI() {
  const arr = [
    //1-5
    `Defender (` + tableSword() + `)`,
    `Defender (` + tableSword() + `)`,
    `Defender (` + tableSword() + `)`,
    `Defender (` + tableSword() + `)`,
    `Defender (` + tableSword() + `)`,
    //6-10
    `Hammer of thunderbolts`,
    `Hammer of thunderbolts`,
    `Hammer of thunderbolts`,
    `Hammer of thunderbolts`,
    `Hammer of thunderbolts`,
    //11-15
    `Luck blade (` + tableSword() + `)`,
    `Luck blade (` + tableSword() + `)`,
    `Luck blade (` + tableSword() + `)`,
    `Luck blade (` + tableSword() + `)`,
    `Luck blade (` + tableSword() + `)`,
    //16-20
    fI2(),
    fI2(),
    fI2(),
    fI2(),
    fI2(),
    //21-23
    `Holy avenger (` + tableSword() + `)`,
    `Holy avenger (` + tableSword() + `)`,
    `Holy avenger (` + tableSword() + `)`,
    //24-26
    `Ring of djinni summoning`,
    `Ring of djinni summoning`,
    `Ring of djinni summoning`,
    //27-29
    `Ring of invisibility`,
    `Ring of invisibility`,
    `Ring of invisibility`,
    //30-32
    `Ring of spell turning`,
    `Ring of spell turning`,
    `Ring of spell turning`,
    //33-35
    `Rod of lordly might`,
    `Rod of lordly might`,
    `Rod of lordly might`,
    //36-38
    `Staff of the magi`,
    `Staff of the magi`,
    `Staff of the magi`,
    //39-41
    `Vorpal sword (` + tableSword() + `)`,
    `Vorpal sword (` + tableSword() + `)`,
    `Vorpal sword (` + tableSword() + `)`,
    //42-43
    `Belt of cloud giant strength`,
    `Belt of cloud giant strength`,
    //44-45
    `Armor, +2 (breastplate)`,
    `Armor, +2 (breastplate)`,
    //46-47
    `Armor, +3 (chain mail)`,
    `Armor, +3 (chain mail)`,
    //48-49
    `Armor, +3 (chain shirt)`,
    `Armor, +3 (chain shirt)`,
    //50-51
    `Cloak of invisibility`,
    `Cloak of invisibility`,
    //52-53
    `Crystal ball (legendary version)`,
    `Crystal ball (legendary version)`,
    //54-55
    `Armor, +1 (half plate)`,
    `Armor, +1 (half plate)`,
    //56-57
    `Iron flask`,
    `Iron flask`,
    //58-59
    `Armor, +3 (leather)`,
    `Armor, +3 (leather)`,
    //60-61
    `Armor, +1 (plate)`,
    `Armor, +1 (plate)`,
    //62-63
    `Robe of the archmagi`,
    `Robe of the archmagi`,
    //64-65
    `Rod of resurrection`,
    `Rod of resurrection`,
    //66-67
    `Armor, +1 (scale mail)`,
    `Armor, +1 (scale mail)`,
    //68-69
    `Scarab of protection`,
    `Scarab of protection`,
    //70-71
    `Armor, +2 (splint)`,
    `Armor, +2 (splint)`,
    //72-73
    `Armor, +2 (studded leather)`,
    `Armor, +2 (studded leather)`,
    //74-75
    `Well of many worlds`,
    `Well of many worlds`,
    //76-100
    fI1(),
    `Apparatus of Kwalish`,
    `Armor of invulnerability`,
    `Belt of storm giant strength`,
    `Cubic gate`,
    fI3(),
    `Efreeti chain`,
    `Armor of resistance (half plate)`,
    `Horn of Valhalla (iron)`,
    `Instrument of the bards (Ollamh harp)`,
    `Ioun stone (greater absorption)`,
    `Ioun stone (mastery)`,
    `Ioun stone (regeneration)`,
    `Plate armor of etherealness`,
    `Plate armor of resistance`,
    `Ring of air elemental command`,
    `Ring of earth elemental command`,
    `Ring of fire elemental command`,
    `Ring of three wishes`,
    `Ring of water elemental command`,
    `Sphere of annihilation`,
    `Talisman of pure good`,
    `Talisman of the sphere`,
    `Talisman of ultimate evil`,
    `Tome of the stilled tongue`
  ];
  return arr[rollD(arr.length - 1)];
}

function fI1() {
  const arr = [
    `Armor, +2 (half plate)`,
    `Armor, +2 (half plate)`,
    `Armor, +2 (plate)`,
    `Armor, +2 (plate)`,
    `Armor, +3 (studded leather)`,
    `Armor, +3 (studded leather)`,
    `Armor, +3 (breastplate)`,
    `Armor, +3 (breastplate)`,
    `Armor, +3 (splint)`,
    `Armor, +3 (splint)`,
    `Armor, +3 (half plate)`,
    `Armor, +3 (plate)`
  ];
  return arr[rollD(arr.length - 1)];
}

function fI2() {
  const arr = [
    `Sword of answering (Answerer)`,
    `Sword of answering (Back talker)`,
    `Sword of answering (Concluder)`,
    `Sword of answering (Last Quip)`,
    `Sword of answering (Rebutter)`,
    `Sword of answering (Replier)`,
    `Sword of answering (Retorter)`,
    `Sword of answering (Scather)`,
    `Sword of answering (Squelcher)`
  ];
  return arr[rollD(arr.length - 1)];
}

function fI3() {
  if (rollD(100) > 75) {
    return `Deck of many things (22 cards)`;
  } else {
    return `Deck of many things (13 cards)`;
  }
}

const crLoot0to4 = () => {
  let result = ``;
  let gold = 5 * rollD(6) * 10;
  let num = rollD(100);
  if (num >= 1 && num <= 6) {
    //no loot
  } else if (num >= 7 && num <= 16) {
    gold += 2 * rollD(6) * 10;
  } else if (num >= 17 && num <= 26) {
    gold += 2 * rollD(4) * 25;
  } else if (num >= 27 && num <= 36) {
    gold += 2 * rollD(6) * 50;
  } else if (num >= 37 && num <= 44) {
    gold += 2 * rollD(6) * 10;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableA() + `, `;
    }
  } else if (num >= 45 && 52) {
    gold += 2 * rollD(4) * 25;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableA() + `, `;
    }
  } else if (num >= 53 && 60) {
    gold += 2 * rollD(6) * 50;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableA() + `, `;
    }
  } else if (num >= 61 && num <= 65) {
    gold += 2 * rollD(6) * 10;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableB() + `, `;
    }
  } else if (num >= 66 && num <= 70) {
    gold += 2 * rollD(4) * 25;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableB() + `, `;
    }
  } else if (num >= 71 && num <= 75) {
    gold += 2 * rollD(6) * 50;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableB() + `, `;
    }
  } else if (num >= 76 && num <= 78) {
    gold += 2 * rollD(6) * 10;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 79 && num <= 80) {
    gold += 2 * rollD(4) * 25;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 81 && num <= 85) {
    gold += 2 * rollD(6) * 50;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 86 && num <= 92) {
    gold += 2 * rollD(4) * 25;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableF() + `, `;
    }
  } else if (num >= 93 && num <= 97) {
    gold += 2 * rollD(4) * 50;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableF() + `, `;
    }
  } else if (num >= 98 && num <= 99) {
    gold += 2 * rollD(4) * 25;
    result += tableG() + `, `;
  } else if (num == 100) {
    gold += 2 * rollD(6) * 50;
    result += tableG() + `, `;
  }
  result += gold + ` gold`;
  return result;
};

const crLoot5to10 = () => {
  let result = ``;
  let gold = 8 * rollD(6) * 100;
  let num = rollD(100);
  if (num >= 1 && num <= 4) {
    //no loot
  } else if (num >= 5 && num <= 10) {
    gold += 2 * rollD(4) * 25;
  } else if (num >= 11 && num <= 16) {
    gold += 3 * rollD(6) * 50;
  } else if (num >= 17 && num <= 22) {
    gold += 3 * rollD(6) * 100;
  } else if (num >= 23 && num <= 28) {
    gold += 2 * rollD(4) * 250;
  } else if (num >= 29 && num <= 32) {
    gold += 2 * rollD(4) * 25;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableA() + `, `;
    }
  } else if (num >= 33 && num <= 36) {
    gold += 3 * rollD(6) * 50;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableA() + `, `;
    }
  } else if (num >= 37 && num <= 40) {
    gold += 3 * rollD(6) * 100;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableA() + `, `;
    }
  } else if (num >= 41 && num <= 44) {
    gold += 2 * rollD(4) * 250;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableA() + `, `;
    }
  } else if (num >= 45 && num <= 49) {
    gold += 2 * rollD(4) * 25;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableB() + `, `;
    }
  } else if (num >= 50 && num <= 54) {
    gold += 3 * rollD(6) * 50;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableB() + `, `;
    }
  } else if (num >= 55 && num <= 59) {
    gold += 3 * rollD(6) * 100;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableB() + `, `;
    }
  } else if (num >= 60 && num <= 63) {
    gold += 2 * rollD(4) * 250;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableB() + `, `;
    }
  } else if (num >= 64 && num <= 66) {
    gold += 2 * rollD(4) * 25;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 67 && num <= 69) {
    gold += 3 * rollD(6) * 50;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 70 && num <= 72) {
    gold += 3 * rollD(6) * 100;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 73 && num <= 74) {
    gold += 2 * rollD(4) * 250;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 75 && num <= 76) {
    gold += 2 * rollD(4) * 25;
    result += tableD() + `, `;
  } else if (num >= 77 && num <= 78) {
    gold += 3 * rollD(6) * 50;
    result += tableD() + `, `;
  } else if (num == 79) {
    gold += 3 * rollD(6) * 100;
    result += tableD() + `, `;
  } else if (num == 80) {
    gold += 2 * rollD(4) * 250;
    result += tableD() + `, `;
  } else if (num >= 81 && num <= 84) {
    gold += 2 * rollD(4) * 25;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableF() + `, `;
    }
  } else if (num >= 85 && num <= 88) {
    gold += 3 * rollD(6) * 50;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableF() + `, `;
    }
  } else if (num >= 89 && num <= 91) {
    gold += 3 * rollD(6) * 100;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableF() + `, `;
    }
  } else if (num >= 92 && num <= 94) {
    gold += 2 * rollD(4) * 250;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableF() + `, `;
    }
  } else if (num >= 95 && num <= 96) {
    gold += 3 * rollD(6) * 100;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableG() + `, `;
    }
  } else if (num >= 97 && num <= 98) {
    gold += 2 * rollD(4) * 250;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableG() + `, `;
    }
  } else if (num == 99) {
    gold += 3 * rollD(6) * 100;
    result += tableH() + `, `;
  } else if (num == 100) {
    gold += 2 * rollD(4) * 250;
    result += tableH() + `, `;
  }
  result += gold + ` gold`;
  return result;
};

const crLoot11to16 = () => {
  let result = ``;
  let gold = 9 * rollD(6) * 1000;
  let num = rollD(100);
  if (num >= 1 && num <= 3) {
    //no loot
  } else if (num >= 4 && num <= 6) {
    gold += 2 * rollD(4) * 250;
  } else if (num >= 7 && num <= 9) {
    gold += 2 * rollD(4) * 750;
  } else if (num >= 10 && num <= 12) {
    gold += 3 * rollD(6) * 500;
  } else if (num >= 13 && num <= 15) {
    gold += 3 * rollD(6) * 1000;
  } else if (num >= 16 && num <= 19) {
    gold += 2 * rollD(4) * 250;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableA() + `, `;
    }
    limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableB() + `, `;
    }
  } else if (num >= 20 && num <= 23) {
    gold += 2 * rollD(4) * 750;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableA() + `, `;
    }
    limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableB() + `, `;
    }
  } else if (num >= 24 && num <= 26) {
    gold += 3 * rollD(6) * 500;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableA() + `, `;
    }
    limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableB() + `, `;
    }
  } else if (num >= 27 && num <= 29) {
    gold += 3 * rollD(6) * 1000;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableA() + `, `;
    }
    limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableB() + `, `;
    }
  } else if (num >= 30 && num <= 35) {
    gold += 2 * rollD(4) * 250;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 36 && num <= 40) {
    gold += 2 * rollD(4) * 750;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 41 && num <= 45) {
    gold += 3 * rollD(6) * 500;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 46 && num <= 50) {
    gold += 3 * rollD(6) * 1000;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 51 && num <= 54) {
    gold += 2 * rollD(4) * 250;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableD() + `, `;
    }
  } else if (num >= 55 && num <= 58) {
    gold += 2 * rollD(4) * 750;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableD() + `, `;
    }
  } else if (num >= 59 && num <= 62) {
    gold += 3 * rollD(6) * 500;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableD() + `, `;
    }
  } else if (num >= 63 && num <= 66) {
    gold += 3 * rollD(6) * 1000;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableD() + `, `;
    }
  } else if (num >= 67 && num <= 68) {
    gold += 2 * rollD(4) * 250;
    result += tableE() + `, `;
  } else if (num >= 69 && num <= 70) {
    gold += 2 * rollD(4) * 750;
    result += tableE() + `, `;
  } else if (num >= 71 && num <= 72) {
    gold += 3 * rollD(6) * 500;
    result += tableE() + `, `;
  } else if (num >= 73 && num <= 74) {
    gold += 3 * rollD(6) * 1000;
    result += tableE() + `, `;
  } else if (num >= 75 && num <= 76) {
    gold += 2 * rollD(4) * 250;
    result += tableF() + `, `;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableG() + `, `;
    }
  } else if (num >= 77 && num <= 78) {
    gold += 2 * rollD(4) * 750;
    result += tableF() + `, `;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableG() + `, `;
    }
  } else if (num >= 79 && num <= 80) {
    gold += 3 * rollD(6) * 500;
    result += tableF() + `, `;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableG() + `, `;
    }
  } else if (num >= 81 && num <= 82) {
    gold += 3 * rollD(6) * 1000;
    result += tableF() + `, `;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableG() + `, `;
    }
  } else if (num >= 83 && num <= 85) {
    gold += 2 * rollD(4) * 250;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableH() + `, `;
    }
  } else if (num >= 86 && num <= 88) {
    gold += 2 * rollD(4) * 750;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableH() + `, `;
    }
  } else if (num >= 89 && num <= 90) {
    gold += 3 * rollD(6) * 500;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableH() + `, `;
    }
  } else if (num >= 91 && num <= 92) {
    gold += 3 * rollD(6) * 1000;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableH() + `, `;
    }
  } else if (num >= 93 && num <= 94) {
    gold += 2 * rollD(4) * 250;
    result += tableI() + `, `;
  } else if (num >= 95 && num <= 96) {
    gold += 2 * rollD(4) * 750;
    result += tableI() + `, `;
  } else if (num >= 97 && num <= 98) {
    gold += 3 * rollD(6) * 500;
    result += tableI() + `, `;
  } else if (num >= 99 && num <= 100) {
    gold += 3 * rollD(6) * 1000;
    result += tableI() + `, `;
  }
  result += gold + ` gold`;
  return result;
};

const crLoot17orHigher = () => {
  let result = ``;
  let gold = 12 * rollD(6) * 1000 + 8 * rollD(6) * 10000;
  let num = rollD(100);
  if (num >= 1 && num <= 2) {
    //no loot
  } else if (num >= 3 && num <= 5) {
    gold += 3 * rollD(6) * 1000;
    let limit = rollD(8);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 6 && num <= 8) {
    gold += 1 * rollD(10) * 2500;
    let limit = rollD(8);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 9 && num <= 11) {
    gold += 1 * rollD(4) * 7500;
    let limit = rollD(8);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 12 && num <= 14) {
    gold += 1 * rollD(8) * 5000;
    let limit = rollD(8);
    for (let i = 0; i < limit; i++) {
      result += tableC() + `, `;
    }
  } else if (num >= 15 && num <= 22) {
    gold += 3 * rollD(6) * 1000;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableD() + `, `;
    }
  } else if (num >= 23 && num <= 30) {
    gold += 1 * rollD(10) * 2500;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableD() + `, `;
    }
  } else if (num >= 31 && num <= 38) {
    gold += 1 * rollD(4) * 7500;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableD() + `, `;
    }
  } else if (num >= 39 && num <= 46) {
    gold += 1 * rollD(8) * 5000;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableD() + `, `;
    }
  } else if (num >= 47 && num <= 52) {
    gold += 3 * rollD(6) * 1000;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableE() + `, `;
    }
  } else if (num >= 53 && num <= 58) {
    gold += 1 * rollD(10) * 2500;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableE() + `, `;
    }
  } else if (num >= 59 && num <= 63) {
    gold += 1 * rollD(4) * 7500;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableE() + `, `;
    }
  } else if (num >= 64 && num <= 68) {
    gold += 1 * rollD(8) * 5000;
    let limit = rollD(6);
    for (let i = 0; i < limit; i++) {
      result += tableE() + `, `;
    }
  } else if (num == 69) {
    gold += 3 * rollD(6) * 1000;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableG() + `, `;
    }
  } else if (num == 70) {
    gold += 1 * rollD(10) * 2500;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableG() + `, `;
    }
  } else if (num == 71) {
    gold += 1 * rollD(4) * 7500;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableG() + `, `;
    }
  } else if (num == 72) {
    gold += 1 * rollD(8) * 5000;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableG() + `, `;
    }
  } else if (num >= 73 && num <= 74) {
    gold += 3 * rollD(6) * 1000;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableH() + `, `;
    }
  } else if (num >= 75 && num <= 76) {
    gold += 1 * rollD(10) * 2500;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableH() + `, `;
    }
  } else if (num >= 77 && num <= 78) {
    gold += 1 * rollD(4) * 7500;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableH() + `, `;
    }
  } else if (num >= 79 && num <= 80) {
    gold += 1 * rollD(8) * 5000;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableH() + `, `;
    }
  } else if (num >= 81 && num <= 85) {
    gold += 3 * rollD(6) * 1000;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableI() + `, `;
    }
  } else if (num >= 86 && num <= 90) {
    gold += 1 * rollD(10) * 2500;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableI() + `, `;
    }
  } else if (num >= 91 && num <= 95) {
    gold += 1 * rollD(4) * 7500;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableI() + `, `;
    }
  } else if (num >= 96 && num <= 100) {
    gold += 1 * rollD(8) * 5000;
    let limit = rollD(4);
    for (let i = 0; i < limit; i++) {
      result += tableI() + `, `;
    }
  }
  result += gold + ` gold`;
  return result;
};

const crList = [
  { label: `CR1 to CR4`, lootTable: crLoot0to4, max: 4 },
  { label: `CR5 to CR10`, lootTable: crLoot5to10, max: 10 },
  { label: `CR11 to CR10`, lootTable: crLoot11to16, max: 16 },
  { label: `CR17 and higher`, lootTable: crLoot17orHigher, max: 10000000 }
];

export const rollAllTables = () =>
  crList.map(({ label, lootTable }) => ({
    label,
    loot: lootTable()
  }));

const rollATable = (
  { label, lootTable } = crList[rollD(crList.length) - 1]
) => [
  {
    label,
    loot: lootTable()
  }
];

export const rollTable = (cr) =>
  cr !== undefined
    ? rollATable(crList.find(({ max }) => cr <= max))
    : rollATable();

export const Loot = ({ label, loot }) => (
  <>
    <h3>{label}</h3>
    <p>{loot}</p>
  </>
);
