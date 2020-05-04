export const MONSTERTYPES = [
  "Aberration",
  "Bête",
  "Céleste",
  "Créature artificielle",
  "Créature monstrueuse",
  "Dragon",
  "Élémentaire",
  "Fées",
  "Fiélon",
  "Géant",
  "Humanoïde",
  "Mort-vivant",
  "Plante",
  "Vase",
]

export const MONSTERSIZES = [
  { label: "Très petit", abbr: "TP", hitDie: 4 },
  { label: "Petit", abbr: "P", hitDie: 6 },
  { label: "Moyen", abbr: "M", hitDie: 8 },
  { label: "Grand", abbr: "G", hitDie: 10 },
  { label: "Très grand", abbr: "TG", hitDie: 12 },
  { label: "Gigantesque", abbr: "Gig", hitDie: 20 },
]

export const CHALLENGES = [
  { label: "0", value:'0', xp: "0 ou 10" },
  { label: "1/8", value:'0.125', xp: 25 },
  { label: "1/4", value:'0.25', xp: 50 },
  { label: "1/2", value:'0.5', xp: 100 },
  { label: "1", value:'1', xp: 200 },
  { label: "2", value:'2', xp: 450 },
  { label: "3", value:'3', xp: 700 },
  { label: "4", value:'4', xp: 1100 },
  { label: "5", value:'5', xp: 1800 },
  { label: "6", value:'6', xp: 2300 },
  { label: "7", value:'7', xp: 2900 },
  { label: "8", value:'8', xp: 3900 },
  { label: "9", value:'9', xp: 5000 },
  { label: "10", value:'10', xp: 5900 },
  { label: "11", value:'11', xp: 7200 },
  { label: "12", value:'12', xp: 8400 },
  { label: "13", value:'13', xp: 10000 },
  { label: "14", value:'14', xp: 11500 },
  { label: "15", value:'15', xp: 13000 },
  { label: "16", value:'16', xp: 15000 },
  { label: "17", value:'17', xp: 18000 },
  { label: "18", value:'18', xp: 20000 },
  { label: "19", value:'19', xp: 22000 },
  { label: "20", value:'20', xp: 25000 },
  { label: "21", value:'21', xp: 33000 },
  { label: "22", value:'22', xp: 41000 },
  { label: "23", value:'23', xp: 50000 },
  { label: "24", value:'24', xp: 62000 },
  { label: "25", value:'25', xp: 75000 },
  { label: "26", value:'26', xp: 90000 },
  { label: "27", value:'27', xp: 105000 },
  { label: "28", value:'28', xp: 120000 },
  { label: "29", value:'29', xp: 135000 },
  { label: "30", value:'30', xp: 155000 },
]

export const ABILITIES = [
  { label: 'Force', value: 'for', abbr: 'For' },
  { label: 'Dextérité', value: 'dex', abbr: 'Dex' },
  { label: 'Constitution', value: 'con', abbr: 'Con' },
  { label: 'Intelligence', value: 'int', abbr: 'Int' },
  { label: 'Sagesse', value: 'sag', abbr: 'Sag' },
  { label: 'Charisme', value: 'cha', abbr: 'Cha' },
]

export const SKILLS = [
  { label: "Acrobaties", value:"acrobaties", ability: "dex" },
  { label: "Arcanes", value:"arcanes", ability: "int" },
  { label: "Athlétisme", value:"athletisme", ability: "for" },
  { label: "Discrétion", value:"discretion", ability: "dex" },
  { label: "Dressage", value:"dressage", ability: "sag" },
  { label: "Escamotage", value:"escamotage", ability: "dex" },
  { label: "Histoire", value:"histoire", ability: "int" },
  { label: "Intimidation", value:"intimidation", ability: "cha" },
  { label: "Investigation", value:"investigation", ability: "int" },
  { label: "Médecine", value:"medecine", ability: "sag" },
  { label: "Nature", value:"nature", ability: "int" },
  { label: "Perception", value:"perception", ability: "sag" },
  { label: "Perspicacité", value:"perspicacite", ability: "sag" },
  { label: "Persuasion", value:"persuasion", ability: "cha" },
  { label: "Religion", value:"religion", ability: "int" },
  { label: "Représentation", value:"representation", ability: "cha" },
  { label: "Supercherie", value:"supercherie", ability: "cha" },
  { label: "Survie", value:"survie", ability: "sag" },
]
