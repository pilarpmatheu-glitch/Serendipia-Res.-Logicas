// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel3":
            case "nivel3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles1], TileScale.Sixteen);
            case "nivel":
            case "nivel2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010404040404040404040404030404010104040404040404040404040404040101040404040404040404040404040401010404010101010101010101010104010104040104010101040404040201040101040401040102010404010104010401010404010401040104040404040104010104040104040404040404040401040101040401040404040404040404010401010404010403040404040101010104010104040104040404010101040304040101040401020404040404040404040401010404010101010101010104040404010104040404040404040404040404040101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . 2 . 2 2 2 . . . . . 2 . 2 
2 . . 2 . 2 . 2 . . 2 2 . 2 . 2 
2 . . 2 . 2 . 2 . . . . . 2 . 2 
2 . . 2 . . . . . . . . . 2 . 2 
2 . . 2 . . . . . . . . . 2 . 2 
2 . . 2 . . . . . . 2 2 2 2 . 2 
2 . . 2 . . . . 2 2 2 . . . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile10], TileScale.Sixteen);
            case "nivel0":
            case "nivel1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010202020202020202020202020202010102020202020202020202020202020101020203030202020202020202020201010202030302020101020203020202010102020202020201010203030202020101020202020202020202030202020501010505020203030202020303030206010105050202020302020202020202050101020203020202020203030302020201010202030203030302050502020202010102020302020202020505020202040101020203020202020202030302020201010202020202030202020203030202010102020202020303020202020202020101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 . . . . . . . . . . 2 
2 . . 2 2 . . 2 2 . . 2 . . . 2 
2 . . . . . . 2 2 . 2 2 . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . 2 2 . . . 2 2 2 . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . 2 . . . . . 2 2 2 . . . 2 
2 . . 2 . 2 2 2 . . . . . . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 . . . . . . 2 2 . . . 2 
2 . . . . . 2 . . . . 2 2 . . 2 
2 . . . . . 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile15,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "paredes3":
            case "tile3":return tile3;
            case "fondo3":
            case "tile4":return tile4;
            case "balderadioactivo3":
            case "tile5":return tile5;
            case "miMosaico4":
            case "tile10":return tile10;
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "puertasalida3":
            case "tile6":return tile6;
            case "miMosaico9":
            case "tile15":return tile15;
            case "Puerta":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
