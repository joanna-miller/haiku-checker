import Haiku from "../src/haiku.js";

describe("Haiku", () => {

test("should correctly create a haiku object with three keys", () => {
    const haiku = new Haiku("","","");
    expect(haiku.line1).toEqual("");
    expect(haiku.line2).toEqual("");
    expect(haiku.line3).toEqual("");
  });

// test("it should count the syllabels in line 1", () => {
//     const haiku = new Haiku("Hello please, count my stale beautiful syllable for me","","");
//     expect(haiku.line1Count()).toEqual(14);
//   });

//   test("it should count the syllabels in line 2", () => {
//     const haiku = new Haiku("","Hello please, count my stale beautiful syllable for me","");
//     expect(haiku.line2Count()).toEqual(14);
//   });

  test("it should count the syllabels in line 3", () => {
    const haiku = new Haiku("","","hi can you read me");
    expect(haiku.line3Count()).toEqual(5);
  });

  test("it should count the syllabels in line 3", () => {
    const haiku = new Haiku("","","Hello please, count my stale beautiful syllable for me");
    expect(haiku.line3Count()).toEqual(14);
  });

  test("it should count the syllables in line1 of the Haiku object", () => {
    const haiku = new Haiku("Hello please, count my stale beautiful syllable for me","","");
    let arrayOfStrings = (Object.values(haiku));
    expect(haiku.syllableCounter(arrayOfStrings[0])).toEqual(14)
  });

  test("it should count the syllables in line2 of the Haiku object", () => {
    const haiku = new Haiku("","Hello please, count my stale beautiful syllable for me","");
    let arrayOfStrings = (Object.values(haiku));
    expect(haiku.syllableCounter(arrayOfStrings[1])).toEqual(14)
  });

  test("it should count the syllables in line3 of the Haiku object", () => {
    const haiku = new Haiku("","","Hello please, count my stale beautiful syllable for me");
    let arrayOfStrings = (Object.values(haiku));
    expect(haiku.syllableCounter(arrayOfStrings[2])).toEqual(14)
  });

  // test("should pass each line through syllableCounter to determine if it is a haiku", () => {
  //   const haiku = new Haiku("Hello please, count my stale beautiful syllable for me","help Im so close","read me"); 
  //   expect(haikuChecker()).toEqual(false);
  // });
})