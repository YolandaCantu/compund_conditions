let celsius = 0
let fahrenheit = 0
basic.forever(function () {
    celsius = input.temperature()
    fahrenheit = celsius * 1.8 + 32
    basic.showNumber(fahrenheit)
    if (fahrenheit >= -22 && fahrenheit <= 14) {
        basic.showString("Stay at home, there is heavy snow.")
        basic.showIcon(IconNames.No)
    } else if (fahrenheit >= 15 && fahrenheit <= 23) {
        basic.showString("Go for your skis and have fun!")
        basic.showIcon(IconNames.Yes)
    } else if (fahrenheit >= 24 && fahrenheit <= 32) {
        basic.showString("Warning! You can only ski in the highest parts.")
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (fahrenheit >= 33) {
        basic.showString("Sorry, it is not ski season.")
        basic.showIcon(IconNames.Sad)
    }
})
