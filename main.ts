let mySprite = sprites.create(img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 e f f f b c . . . 
    e e 2 2 d f e c b 4 4 c . . . . 
    b 1 1 d e e c 4 1 1 4 c . . . . 
    . f f e e e e 4 4 4 4 c . . . . 
    . . f f d d e 4 4 4 b c . . . . 
    . . f f d d e c c c c d . . . . 
    . . . f f f f . . . . . . . . . 
    . . f f f e e e . . . . . . . . 
    . . f f f f e e e . . . . . . . 
    `, SpriteKind.Player)
let line = sprites.create(img`
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    ......51f15.....
    ......5f1f5.....
    `, SpriteKind.Food)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
line.x = 150
mySprite.x = 10
line.changeScale(1.8, ScaleAnchor.Middle)
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundColor(7)
let enemy = sprites.create(img`
    . . . . . . 6 5 5 5 5 5 . . . .
    . . . . . 6 5 5 d 5 5 5 5 . . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . c c f f 6 5 5 5 5 5 6 . .
    . . . c b f f f f 6 5 5 6 6 . .
    . . . c d f f f b 2 6 f 6 6 6 .
    . . . c b 1 1 1 1 2 f d 5 5 6 6
    . . . . . c c c 6 6 f d 5 5 6 6
    . . . . . . c 6 6 5 5 6 d 1 1 b
    . . . . . . . 6 5 5 5 5 6 f f .
    . . . . d d f f 5 5 d d f f . .
    . . . . d d f f 6 6 d d f f . .
    . . . . . . . . . f f f f . . .
    . . . . . . . . f f f 6 6 6 . .
    . . . . . . . f f f 6 6 6 6 . .
`, SpriteKind.Enemy)
let enemy2 = sprites.create(img`
    . . . . . . 6 5 5 5 5 5 . . . .
    . . . . . 6 5 5 d 5 5 5 5 . . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . c c f f 6 5 5 5 5 5 6 . .
    . . . c b f f f f 6 5 5 6 6 . .
    . . . c d f f f b 2 6 f 6 6 6 .
    . . . c b 1 1 1 1 2 f d 5 5 6 6
    . . . . . c c c 6 6 f d 5 5 6 6
    . . . . . . c 6 6 5 5 6 d 1 1 b
    . . . . . . . 6 5 5 5 5 6 f f .
    . . . . d d f f 5 5 d d f f . .
    . . . . d d f f 6 6 d d f f . .
    . . . . . . . . . f f f f . . .
    . . . . . . . . f f f 6 6 6 . .
    . . . . . . . f f f 6 6 6 6 . .
`, SpriteKind.Enemy)
let enemy3 = sprites.create(img`
    . . . . . . 6 5 5 5 5 5 . . . .
    . . . . . 6 5 5 d 5 5 5 5 . . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . c c f f 6 5 5 5 5 5 6 . .
    . . . c b f f f f 6 5 5 6 6 . .
    . . . c d f f f b 2 6 f 6 6 6 .
    . . . c b 1 1 1 1 2 f d 5 5 6 6
    . . . . . c c c 6 6 f d 5 5 6 6
    . . . . . . c 6 6 5 5 6 d 1 1 b
    . . . . . . . 6 5 5 5 5 6 f f .
    . . . . d d f f 5 5 d d f f . .
    . . . . d d f f 6 6 d d f f . .
    . . . . . . . . . f f f f . . .
    . . . . . . . . f f f 6 6 6 . .
    . . . . . . . f f f 6 6 6 6 . .
`, SpriteKind.Enemy)
let enemy4 = sprites.create(img`
    . . . . . . 6 5 5 5 5 5 . . . .
    . . . . . 6 5 5 d 5 5 5 5 . . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . c c f f 6 5 5 5 5 5 6 . .
    . . . c b f f f f 6 5 5 6 6 . .
    . . . c d f f f b 2 6 f 6 6 6 .
    . . . c b 1 1 1 1 2 f d 5 5 6 6
    . . . . . c c c 6 6 f d 5 5 6 6
    . . . . . . c 6 6 5 5 6 d 1 1 b
    . . . . . . . 6 5 5 5 5 6 f f .
    . . . . d d f f 5 5 d d f f . .
    . . . . d d f f 6 6 d d f f . .
    . . . . . . . . . f f f f . . .
    . . . . . . . . f f f 6 6 6 . .
    . . . . . . . f f f 6 6 6 6 . .
`, SpriteKind.Enemy)
let enemy5 = sprites.create(img`
    . . . . . . 6 5 5 5 5 5 . . . .
    . . . . . 6 5 5 d 5 5 5 5 . . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . c c f f 6 5 5 5 5 5 6 . .
    . . . c b f f f f 6 5 5 6 6 . .
    . . . c d f f f b 2 6 f 6 6 6 .
    . . . c b 1 1 1 1 2 f d 5 5 6 6
    . . . . . c c c 6 6 f d 5 5 6 6
    . . . . . . c 6 6 5 5 6 d 1 1 b
    . . . . . . . 6 5 5 5 5 6 f f .
    . . . . d d f f 5 5 d d f f . .
    . . . . d d f f 6 6 d d f f . .
    . . . . . . . . . f f f f . . .
    . . . . . . . . f f f 6 6 6 . .
    . . . . . . . f f f 6 6 6 6 . .
`, SpriteKind.Enemy)
let enemy6 = sprites.create(img`
    . . . . . . 6 5 5 5 5 5 . . . .
    . . . . . 6 5 5 d 5 5 5 5 . . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . c c f f 6 5 5 5 5 5 6 . .
    . . . c b f f f f 6 5 5 6 6 . .
    . . . c d f f f b 2 6 f 6 6 6 .
    . . . c b 1 1 1 1 2 f d 5 5 6 6
    . . . . . c c c 6 6 f d 5 5 6 6
    . . . . . . c 6 6 5 5 6 d 1 1 b
    . . . . . . . 6 5 5 5 5 6 f f .
    . . . . d d f f 5 5 d d f f . .
    . . . . d d f f 6 6 d d f f . .
    . . . . . . . . . f f f f . . .
    . . . . . . . . f f f 6 6 6 . .
    . . . . . . . f f f 6 6 6 6 . .
`, SpriteKind.Enemy)
let enemy7 = sprites.create(img`
    . . . . . . 6 5 5 5 5 5 . . . .
    . . . . . 6 5 5 d 5 5 5 5 . . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . c c f f 6 5 5 5 5 5 6 . .
    . . . c b f f f f 6 5 5 6 6 . .
    . . . c d f f f b 2 6 f 6 6 6 .
    . . . c b 1 1 1 1 2 f d 5 5 6 6
    . . . . . c c c 6 6 f d 5 5 6 6
    . . . . . . c 6 6 5 5 6 d 1 1 b
    . . . . . . . 6 5 5 5 5 6 f f .
    . . . . d d f f 5 5 d d f f . .
    . . . . d d f f 6 6 d d f f . .
    . . . . . . . . . f f f f . . .
    . . . . . . . . f f f 6 6 6 . .
    . . . . . . . f f f 6 6 6 6 . .
`, SpriteKind.Enemy)
let enemy8 = sprites.create(img`
    . . . . . . 6 5 5 5 5 5 . . . .
    . . . . . 6 5 5 d 5 5 5 5 . . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . . . 6 5 5 5 5 5 5 5 6 . .
    . . . c c f f 6 5 5 5 5 5 6 . .
    . . . c b f f f f 6 5 5 6 6 . .
    . . . c d f f f b 2 6 f 6 6 6 .
    . . . c b 1 1 1 1 2 f d 5 5 6 6
    . . . . . c c c 6 6 f d 5 5 6 6
    . . . . . . c 6 6 5 5 6 d 1 1 b
    . . . . . . . 6 5 5 5 5 6 f f .
    . . . . d d f f 5 5 d d f f . .
    . . . . d d f f 6 6 d d f f . .
    . . . . . . . . . f f f f . . .
    . . . . . . . . f f f 6 6 6 . .
    . . . . . . . f f f 6 6 6 6 . .
`, SpriteKind.Enemy)
let X = 120
let Y = 100
enemy.setPosition(X, Y)
enemy2.setPosition(100, 80)
enemy3.setPosition(80, 60)
enemy4.setPosition(100, 40)
enemy5.setPosition(120, 20)
enemy6.setPosition(120, 60)
enemy7.setPosition(80, 20)
enemy8.setPosition(80, 100)

game.showLongText("Avoid other players and score a touchdown!", DialogLayout.Bottom)

game.onUpdateInterval(5000, function() {
    enemy.follow(mySprite, 35, 35)
    enemy2.follow(mySprite, 50, 50)
    enemy3.follow(mySprite, 70, 70)
    enemy4.follow(mySprite, 50, 50)
    enemy5.follow(mySprite, 35, 35)
    enemy6.follow(mySprite, 80, 80)
    enemy7.follow(mySprite, 20, 20)
    enemy8.follow(mySprite, 20, 20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.setGameOverMessage(true, "You Win!")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
   game.setGameOverEffect(false, effects.confetti)
   game.setGameOverMessage(true, "You Lost!")
   game.gameOver(true)
})