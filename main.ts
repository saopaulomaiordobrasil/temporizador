input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        contador += -1
        basic.showNumber(contador)
    }
})
let contador = 0
contador = 10
basic.showNumber(contador)
