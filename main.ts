scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(true, effects.confetti)
    game.over(false, effects.dissolve)
})
game.splash("LABERYNTH OF CASTLE")
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 f 1 f 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 f f 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 f f . . . . . 
    . . . . 1 1 1 . . 1 1 f . f f . 
    . . . . 1 1 . . . 1 1 . f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.setLife(3)
info.startCountdown(45)
tiles.setCurrentTilemap(tilemap`level1`)
