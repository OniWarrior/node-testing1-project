const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  // test('[2] returns a copy, leaving the original object intact', () => {})
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  // test('[3] returns an object with the properties trimmed', () => {})
  // test('[4] the object returned is the exact same one we passed in', () => {})
  test("[2] returns the param object with the properties trimmed", ()=>{
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  } )
})

describe('[Exercise 3] findLargestInteger', () => {
  // test('[5] returns the largest number in an array of objects { integer: 2 }', () => {})
  test("returns the largest number in an array",()=>{
    let integers=[{integer:5},{integer:2},{integer:6},{integer:8},{integer:4},{integer:1},{integer:10}]
    let largest  = 10
    let test = utils.findLargestInteger(integers)
    expect(test).toEqual(largest)
  })
 
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  // test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {})
  // test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {})
  // test('[8] the count eventually reaches zero but does not go below zero', () => {})
  test("return initial count,returns initial count minus 1, count reaches 0 but does not go below zero",()=>{
    counter.countDown()
    expect(counter.counter).toEqual(3)  // three

    counter.countDown()
    expect(counter.counter).toEqual(2)  // two

    counter.countDown()
    expect(counter.counter).toEqual(1) // one

    counter.countDown()
    expect(counter.counter).toEqual(0) // zero

    counter.countDown()
    expect(counter.counter).toEqual(0) // return zero-- doesn't go below zero
  })
  
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  // test('[9] the FIRST call of seasons.next returns "summer"', () => {})
  // test('[10] the SECOND call of seasons.next returns "fall"', () => {})
  // test('[11] the THIRD call of seasons.next returns "winter"', () => {})
  // test('[12] the FOURTH call of seasons.next returns "spring"', () => {})
  // test('[13] the FIFTH call of seasons.next returns again "summer"', () => {})
  // test('[14] the 40th call of seasons.next returns "spring"', () => {})

  test("return next season with each subsequent call to next function",()=>{
    
    expect(seasons.next()).toEqual("summer")
    expect(seasons.next()).toEqual("fall")
    expect(seasons.next()).toEqual("winter")
    expect(seasons.next()).toEqual("spring")
    expect(seasons.next()).toEqual("summer")
    let max = 40 
    for(let i =4;i <40;i++){
      seasons.next()
      if(i === max){ 
        expect(seasons.next()).toEqual("spring")
      }
    }
   
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
   test('[15] driving the car returns the updated odometer', () => {
     focus.drive(30)
     expect(focus.odometer).toEqual(30)
   })
   test('[16] driving the car uses gas', () => {
     expect(focus.tank).toEqual(20)
     focus.drive(30)
     expect(focus.tank).toEqual(19)

  })
   test('[17] refueling allows to keep driving', () => {
     focus.drive(600)   // deplete all fuel
     expect(focus.refuel(15)).toEqual(450) // Distance that can be driven with 15 gallons
     

  })
   test('[18] adding fuel to a full tank has no effect', () => {
     expect(focus.tank).toEqual(20) // this is a full tank
     focus.refuel(100) // trying to put 100 gallons does nothing to change the tank
     expect(focus.tank).toEqual(20) // the refuel changes nothing in the tank
  })

  
  
})

describe('[Exercise 7] isEvenNumberAsync', () => {
   test('[19] resolves true if passed an even number',async () => {
        const even = await utils.isEvenNumberAsync(2)
        expect(even).toEqual(true)
   })
   test('[20] resolves false if passed an odd number',async () => {
        const odd = await utils.isEvenNumberAsync(5)
        expect(odd).toEqual(false)
   })
})
