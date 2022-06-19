input.onButtonPressed(Button.A, function () {
    אייקון += 1
    if (אייקון > 5) {
        אייקון = 1
    }
})
let אייקון = 0
אייקון = 0
basic.forever(function () {
    if (אייקון == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (אייקון == 2) {
        basic.showIcon(IconNames.SmallHeart)
    } else if (אייקון == 3) {
        basic.showIcon(IconNames.Yes)
    } else if (אייקון == 4) {
        basic.showIcon(IconNames.No)
    } else if (אייקון == 5) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.clearScreen()
    }
})
