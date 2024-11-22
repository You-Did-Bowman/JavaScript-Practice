/* ---------------------- ASTROLOGICAL READING SYSTEM 🌌 ----------------------

Create an Astrology class that accepts one parameter (zodiacId) during instantiation.

The class contains the following property:

zodiacSigns = [
  { id: 1, name: "Aries", element: "Fire", personality: ["bold", "ambitious", "confident"] },
  { id: 2, name: "Taurus", element: "Earth", personality: ["reliable", "patient", "practical"] },
  { id: 3, name: "Gemini", element: "Air", personality: ["curious", "affectionate", "adaptable"] }
];

Methods:
- getZodiac()
    Retrieves the zodiac sign (filtered by zodiacId) from the zodiacSigns array.
    Passes the selected sign to the displayReading() method.

- displayReading()
    Logs the message:
    "Your zodiac sign is <name>, an <element> sign. People born under this sign are often <personality traits>."

- luckyNumber()
    Generates a random lucky number between 1 and 100.
    Logs the message:
    "Your lucky number for today is <random number>."

Rules:
- The only method you should call manually is luckyNumber().
- The getZodiac() and displayReading() methods should be called automatically during instantiation. 
*/

class Astrology {
    constructor(zodiacId) {
        this.zodiacId = zodiacId;
        this.zodiacSigns = [
            { id: 1, name: "Aries", element: "Fire", personality: ["bold", "ambitious", "confident"] },
            { id: 2, name: "Taurus", element: "Earth", personality: ["reliable", "patient", "practical"] },
            { id: 3, name: "Gemini", element: "Air", personality: ["curious", "affectionate", "adaptable"] }
          ];

        let selectedZodiac = this.getZodiac(zodiacId);
        this.displayReading(selectedZodiac)
    }

    getZodiac(id) {
        return this.zodiacSigns.find(sing => sing.id === id);
    }

    displayReading(zodiac) {
        console.log(`Your zodiac sign is ${zodiac.name}, an ${zodiac.element} sign. People born under this sign are often ${zodiac.personality.join(", ")}.`);
    }

    luckyNumber() {
        console.log(Math.floor(Math.random() * 100 + 1));
    }
}

let mary = new Astrology(1);
mary.luckyNumber();

let peter = new Astrology(2);
peter.luckyNumber();

let anna = new Astrology(3);
anna.luckyNumber();