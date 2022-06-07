// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010402010303030303010202020201030102020101030303030102010102010301020202010101010301020102020103010202020202020101010201020201030102020202020202010102010101010101020101010101020101020102020202020201020202010201010201020101010102010102020102010102010201030301020201020101020101020102010303010202010202020201010201020103030102020101010102010102010201030301010202020201020101020102010103030102010101010201010201020201010101020102020202010202020202020202020201020202020105010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 . . 2 . . . . . 
2 . . . . 2 . 2 . . 2 2 . . . . 
2 . 2 2 . 2 . 2 . . . 2 2 2 2 . 
2 . 2 . . 2 . 2 . . . . . . 2 2 
2 . 2 . . 2 . 2 . . . . . . . 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 2 . 2 
2 . . . . . . . . 2 . . . 2 . 2 
2 . 2 . 2 2 2 2 . 2 2 . . 2 . 2 
2 . 2 . 2 . . 2 . . 2 . 2 2 . 2 
2 . 2 . 2 . . 2 . . 2 . . . . 2 
2 . 2 . 2 . . 2 . . 2 2 2 2 . 2 
2 . 2 . 2 . . 2 2 . . . . 2 . 2 
2 . 2 . 2 2 . . 2 . 2 2 2 2 . 2 
2 . 2 . . 2 2 2 2 . 2 . . . . 2 
. . . . . . . . . . 2 . . . . 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
