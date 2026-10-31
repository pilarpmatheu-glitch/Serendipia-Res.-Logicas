const VIDAS_INICIALES = 3
const INVULNERABILIDAD_MS = 1200
const TAM = 16
const TAM_BLOQUE = 1
const MARGEN_Y = 24
const COLUMNAS = 16
const FILAS = 16
const VISTA_COLUMNAS = 10
const VISTA_FILAS = 6
const RADIO_RADIACION = 3
const INTERVALO_RADIACION_MS = 500
const AUMENTO_POR_TRAMO = 2
const ENFRIAMIENTO_POR_TICK = 3
const LIMITE_RADIACION = 100

const NOMBRES = ["Volkov", "Dra. Masha", "Kola"]

const NOMBRES_COMPLETOS = [
    "Aleksandr Volkov",
    "Dra. Masha Morozova",
    "Nikolai Razin"
]

const SUBTITULOS = [
    '"El Relojero"',
    "La psiquiatra",
    '"Kola"'
]

const PASOS_MS = [125, 155, 180]
const BONUS_VIDAS = [0, 0, 1]

const RESUMEN_1 = [
    "Ingeniero sovietico",
    "Escapo del encierro",
    "Oculto su pasado.",
    "Quedo en Chernobil."
]

const RESUMEN_2 = [
    "Psiquiatra de Moscu",
    "Complice y doctora",
    "Eligio no evacuar",
    "para salvar heridos"
]

const RESUMEN_3 = [
    "Boxeador de Odessa",
    "Escapo del encierro",
    "Murio sosteniendo",
    "una compuerta."
]

const HISTORIAS = [
    "ALEKSANDR VOLKOV, EL RELOJERO. Ingeniero sovietico extremadamente inteligente, frio y obsesionado con el orden y la precision. Antes de 1979 fabricaba relojes y usaba sus conocimientos para cometer crimenes. Fue internado en un manicomio clandestino. Fingio haberse rehabilitado mientras estudiaba el lugar. Tras escapar, vivio con una identidad falsa. En 1986 fue reclutado para trabajar en Chernobil y quedo atrapado durante el desastre nuclear.",
    "DRA. MASHA MOROZOVA. Psiquiatra brillante de Moscu. Se involucro con un paciente criminal y termino siendo su complice. Desarrollo una personalidad emocionalmente inestable y una obsesion por salvar a personas peligrosas. En el manicomio clandestino acabo siendo parte de los internos. Tras escapar, ejercio la medicina ilegalmente. En 1986 fue reclutada como medica en Chernobil. Durante el desastre se nego a evacuar para intentar salvar a los heridos.",
    "NIKOLAI RAZIN, KOLA. Exboxeador sovietico de gran tamano que sufria paranoia y graves problemas psicologicos. Trabajo para la mafia de Odessa. Un episodio violento termino con varias muertes. Fue internado en un manicomio clandestino, donde los tratamientos extremos empeoraron su condicion. Escapo y vivio aislado en los bosques. En 1986 fue reclutado como operario de mantenimiento en Chernobil. Murio sosteniendo una compuerta para permitir que sus companeros escaparan."
]

const MAPA_1 = [
    "################",
    "#......#.#.....#",
    "#......#.#.....#",
    "#.#...R###B....#",
    "#.#..RR........#",
    "#.#....R.......#",
    "#.#......###...#",
    "#.#.R.....R#####",
    "#.##R.....RR#..#",
    "#...........##.#",
    "#............#.#",
    "#..............#",
    "#.P....#RR..DD.#",
    "#......###..DD.#",
    "#J.............#",
    "################"
]

const MAPA_2 = [
    "################",
    "#J..........G..#",
    "#...........GK.#",
    "#..RR..........#",
    "#..RR..##..RG..#",
    "#..RR..##.RR...#",
    "#.......K.R.R.T#",
    "#TT..RR...RRR.T#",
    "#TT...R.......T#",
    "#..R.....RRR...#",
    "#..R.RRR.TT....#",
    "#..R.....TT...D#",
    "#..R..R...RR...#",
    "#.K...R....RR..#",
    "#.....RR.......#",
    "################"
]

const MAPA_3 = [
    "################",
    "#...........R.D#",
    "#..............#",
    "#..............#",
    "#..###########.#",
    "#..#.###.....#.#",
    "#..#.#.#..##.#.#",
    "#..#.#.#.....#.#",
    "#..#.........#.#",
    "#..#.........#.#",
    "#..#.R....####.#",
    "#..#....###.R..#",
    "#..#J..........#",
    "#..########....#",
    "#..............#",
    "################"
]

let estado = "menu"
let elegido = 0
let nivel = 0
let vidas = VIDAS_INICIALES
let llaves = 0
let totalLlaves = 0
let puertaAbierta = false
let mapa: string[] = []
let jugador: Sprite = null
let fondo: Image = null
let columna = 1
let fila = 1
let bloqueX = -1
let bloqueY = -1
let pedestalX = -1
let pedestalY = -1
let proximoPaso = 0
let inmuneHasta = 0
let esperandoSoltar = false
let camaraX = 0
let camaraY = 0
let radiacion = 0
let fuentesX: number[] = []
let fuentesY: number[] = []

function imagenPersonaje(indice: number): Image {
    let dibujo = image.create(16, 16)

    if (indice == 0) {
        dibujo.fillRect(5, 1, 6, 5, 13)
        dibujo.fillRect(4, 0, 8, 2, 11)
        dibujo.fillRect(4, 2, 1, 2, 11)
        dibujo.setPixel(6, 3, 15)
        dibujo.setPixel(9, 3, 15)
        dibujo.fillRect(4, 6, 8, 6, 12)
        dibujo.fillRect(6, 6, 4, 6, 8)
        dibujo.fillRect(7, 6, 2, 2, 1)
        dibujo.fillRect(2, 7, 2, 4, 12)
        dibujo.fillRect(12, 7, 2, 4, 12)
        dibujo.fillRect(2, 10, 2, 2, 13)
        dibujo.fillRect(12, 10, 2, 2, 13)
        dibujo.drawLine(6, 8, 4, 10, 5)
        dibujo.fillRect(2, 9, 3, 3, 5)
        dibujo.setPixel(3, 10, 15)
        dibujo.fillRect(5, 12, 2, 4, 15)
        dibujo.fillRect(9, 12, 2, 4, 15)
        dibujo.fillRect(12, 6, 2, 1, 11)

    } else if (indice == 1) {
        dibujo.fillRect(4, 0, 8, 8, 14)
        dibujo.fillRect(5, 2, 6, 4, 13)
        dibujo.fillRect(5, 0, 6, 2, 1)
        dibujo.setPixel(7, 0, 2)
        dibujo.setPixel(7, 1, 2)
        dibujo.setPixel(6, 1, 2)
        dibujo.setPixel(8, 1, 2)
        dibujo.setPixel(6, 3, 15)
        dibujo.setPixel(9, 3, 15)
        dibujo.fillRect(4, 6, 8, 7, 1)
        dibujo.fillRect(7, 6, 2, 7, 9)
        dibujo.fillRect(2, 7, 2, 5, 1)
        dibujo.fillRect(12, 7, 2, 5, 1)
        dibujo.fillRect(2, 11, 2, 2, 13)
        dibujo.fillRect(12, 11, 2, 2, 13)
        dibujo.drawLine(6, 6, 6, 9, 15)
        dibujo.drawLine(9, 6, 9, 9, 15)
        dibujo.drawLine(6, 9, 9, 9, 15)
        dibujo.setPixel(9, 10, 15)
        dibujo.fillRect(10, 10, 1, 3, 2)
        dibujo.fillRect(9, 11, 3, 1, 2)
        dibujo.fillRect(5, 13, 2, 3, 15)
        dibujo.fillRect(9, 13, 2, 3, 15)

    } else {
        dibujo.fillRect(5, 0, 6, 6, 13)
        dibujo.fillRect(5, 0, 6, 1, 14)
        dibujo.setPixel(6, 2, 15)
        dibujo.setPixel(9, 2, 15)
        dibujo.fillRect(6, 4, 4, 2, 14)
        dibujo.fillRect(2, 6, 12, 7, 7)
        dibujo.fillRect(5, 6, 6, 6, 8)
        dibujo.fillRect(1, 6, 3, 4, 13)
        dibujo.fillRect(12, 6, 3, 4, 13)
        dibujo.fillRect(0, 9, 4, 4, 2)
        dibujo.fillRect(12, 9, 4, 4, 2)
        dibujo.fillRect(1, 12, 3, 1, 1)
        dibujo.fillRect(12, 12, 3, 1, 1)
        dibujo.fillRect(4, 12, 8, 2, 14)
        dibujo.fillRect(4, 14, 3, 2, 15)
        dibujo.fillRect(9, 14, 3, 2, 15)
    }

    return dibujo
}

function retratoPersonaje(indice: number): Image {
    let pequeno = imagenPersonaje(indice)
    let grande = image.create(32, 32)

    for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 16; x++) {
            let color = pequeno.getPixel(x, y)

            if (color != 0) {
                grande.fillRect(x * 2, y * 2, 2, 2, color)
            }
        }
    }

    return grande
}

function mostrarMenu() {
    estado = "menu"
    nivel = 0
    inmuneHasta = 0
    radiacion = 0
    jugador.setFlag(SpriteFlag.Invisible, false)
    esperandoSoltar = true
    seleccionarPersonaje(0)
}

function seleccionarPersonaje(direccion: number) {
    elegido = (elegido + direccion + NOMBRES.length) % NOMBRES.length

    fondo = image.create(160, 120)
    fondo.fill(15)
    fondo.print("ESCAPE RADIANTE", 27, 3, 7)
    fondo.print("" + (elegido + 1) + "/3", 140, 3, 1)

    fondo.print(
        NOMBRES_COMPLETOS[elegido],
        Math.idiv(160 - NOMBRES_COMPLETOS[elegido].length * 6, 2),
        20,
        1
    )

    fondo.print(
        SUBTITULOS[elegido],
        Math.idiv(160 - SUBTITULOS[elegido].length * 6, 2),
        31,
        5
    )

    fondo.drawRect(3, 43, 36, 42, 11)

    let resumen = RESUMEN_1

    if (elegido == 1) resumen = RESUMEN_2
    if (elegido == 2) resumen = RESUMEN_3

    for (let i = 0; i < resumen.length; i++) {
        fondo.print(resumen[i], 42, 47 + i * 10, 1)
    }

    let rasgo = "Paso rapido"

    if (elegido == 1) rasgo = "Paso medio"
    if (elegido == 2) rasgo = "Paso lento"

    let descripcion =
        rasgo + " | " +
        (VIDAS_INICIALES + BONUS_VIDAS[elegido]) +
        " vidas"

    fondo.print(
        descripcion,
        Math.idiv(160 - descripcion.length * 6, 2),
        89,
        7
    )

    fondo.print("Flechas: elegir", 35, 101, 1)
    fondo.print("A: jugar  B: historia", 20, 112, 5)

    scene.setBackgroundImage(fondo)
    jugador.setImage(retratoPersonaje(elegido))
    jugador.setPosition(21, 64)
}

function mostrarHistoriaPersonaje() {
    estado = "historia"

    game.showLongText(
        HISTORIAS[elegido],
        DialogLayout.Full
    )

    seleccionarPersonaje(0)
    esperandoSoltar = true
    estado = "menu"
}

function ponerCelda(x: number, y: number, valor: string) {
    let linea = ""

    for (let i = 0; i < COLUMNAS; i++) {
        if (i == x) {
            linea += valor
        } else {
            linea += mapa[y].charAt(i)
        }
    }

    mapa[y] = linea
}

function celda(x: number, y: number): string {
    if (x < 0 || y < 0 || x >= COLUMNAS || y >= FILAS) {
        return "#"
    }

    return mapa[y].charAt(x)
}

function cargarMapa(original: string[], numero: number, mensaje: string) {
    estado = "cargando"
    nivel = numero
    mapa = []
    llaves = 0
    totalLlaves = 0
    bloqueX = -1
    bloqueY = -1
    pedestalX = -1
    pedestalY = -1
    inmuneHasta = 0
    radiacion = 0
    fuentesX = []
    fuentesY = []
    vidas = VIDAS_INICIALES + BONUS_VIDAS[elegido]
    puertaAbierta = numero == 3

    for (let y = 0; y < FILAS; y++) {
        mapa.push(original[y])

        for (let x = 0; x < COLUMNAS; x++) {
            let simbolo = celda(x, y)

            if (simbolo == "J") {
                columna = x
                fila = y
            } else if (simbolo == "B") {
                bloqueX = x
                bloqueY = y
            } else if (simbolo == "P") {
                pedestalX = x
                pedestalY = y
            } else if (simbolo == "K") {
                totalLlaves += 1
            } else if (simbolo == "R") {
                fuentesX.push(x)
                fuentesY.push(y)
            }
        }
    }

    ponerCelda(columna, fila, ".")

    if (bloqueX >= 0) {
        ponerCelda(bloqueX, bloqueY, ".")
    }

    if (numero == 2) {
        puertaAbierta = totalLlaves == 0
    }

    jugador.setImage(imagenPersonaje(elegido))
    jugador.setFlag(SpriteFlag.Invisible, false)

    dibujarNivel()
    game.showLongText(mensaje, DialogLayout.Full)

    esperandoSoltar = true
    proximoPaso = game.runtime() + PASOS_MS[elegido]
    estado = "jugando"
}

function crearNivel1() {
    cargarMapa(
        MAPA_1,
        1,
        "NIVEL 1: Lleva el bloque blanco al pedestal rojo de abajo a la izquierda. La salida esta abajo a la derecha. Los simbolos amarillos emiten radiacion hasta 3 casillas. Alejate para bajar Rad. Al 100% pierdes una vida. B reinicia."
    )
}

function crearNivel2() {
    cargarMapa(
        MAPA_2,
        2,
        "NIVEL 2: Recoge las tres llaves naranjas y busca la salida del lado derecho. Las rocas verdes y grises bloquean el paso. Los simbolos amarillos emiten radiacion por cercania, incluso estando quieto. B reinicia."
    )
}

function crearNivel3() {
    cargarMapa(
        MAPA_3,
        3,
        "NIVEL 3: Sal del laberinto y llega a la puerta de arriba a la derecha. Evita acumular radiacion cerca de los simbolos amarillos. El dano no depende de tocarlos. Al perder una vida tienes una breve inmunidad. B reinicia."
    )
}

function actualizarCamara() {
    camaraX = Math.max(
        0,
        Math.min(COLUMNAS - VISTA_COLUMNAS, columna - 4)
    )

    camaraY = Math.max(
        0,
        Math.min(FILAS - VISTA_FILAS, fila - 2)
    )

    jugador.setPosition(
        (columna - camaraX) * TAM + TAM / 2,
        MARGEN_Y + (fila - camaraY) * TAM + TAM / 2
    )
}

function distanciaAFuente(x: number, y: number): number {
    let menor = COLUMNAS + FILAS

    for (let i = 0; i < fuentesX.length; i++) {
        let distancia =
            Math.abs(x - fuentesX[i]) +
            Math.abs(y - fuentesY[i])

        if (distancia < menor) {
            menor = distancia
        }
    }

    return menor
}

function actualizarContadorLlaves() {
    fondo.fillRect(0, 0, 160, MARGEN_Y, 15)

    fondo.print(
        "N" + nivel + " " + NOMBRES[elegido] + " V:" + vidas,
        2,
        2,
        1
    )

    if (nivel == 2) {
        fondo.print(
            "K:" + llaves + "/" + totalLlaves,
            122,
            2,
            5
        )
    } else if (puertaAbierta) {
        fondo.print("SALIR", 128, 2, 7)
    }

    let color = 7

    if (radiacion >= 40) color = 5
    if (radiacion >= 75) color = 2

    fondo.print("Rad:" + radiacion + "%", 2, 14, color)
    fondo.drawRect(62, 13, 96, 9, 1)

    fondo.fillRect(
        63,
        14,
        Math.idiv(radiacion * 94, LIMITE_RADIACION),
        7,
        color
    )
}

function dibujarSuelo(px: number, py: number, x: number, y: number) {
    if (nivel == 2) {
        fondo.fillRect(px, py, TAM, TAM, 15)

        for (let i = 0; i < 12; i++) {
            fondo.setPixel(
                px + (i * 7 + x * 3 + y) % 16,
                py + (i * 5 + x + y * 3) % 16,
                2 + i % 8
            )
        }
    } else {
        let base = 7
        let grieta = 15

        if (nivel == 3) {
            base = 15
            grieta = 7
        }

        fondo.fillRect(px, py, TAM, TAM, base)
        fondo.drawLine(px, py + 3, px + 5, py + 4, grieta)
        fondo.drawLine(px + 5, py + 4, px + 8, py, grieta)
        fondo.drawLine(px + 5, py + 4, px + 7, py + 9, grieta)
        fondo.drawLine(px + 7, py + 9, px + 2, py + 13, grieta)
        fondo.drawLine(px + 2, py + 13, px, py + 12, grieta)
        fondo.drawLine(px + 7, py + 9, px + 12, py + 8, grieta)
        fondo.drawLine(px + 12, py + 8, px + 15, py + 13, grieta)
        fondo.drawLine(px + 12, py + 8, px + 15, py + 3, grieta)
        fondo.drawLine(px + 7, py + 9, px + 9, py + 15, grieta)
    }
}

function dibujarMuro(px: number, py: number) {
    fondo.fillRect(px, py, TAM, TAM, 11)
    fondo.fillRect(px, py, 16, 2, 15)
    fondo.fillRect(px + 1, py + 2, 13, 2, 7)
    fondo.fillRect(px, py + 4, 16, 1, 15)

    for (let i = 0; i < 5; i++) {
        fondo.fillRect(
            px + 1 + i * 3,
            py + 11,
            2,
            2,
            2 + i % 4
        )
    }
}

function dibujarNivel() {
    actualizarCamara()
    fondo = image.create(160, 120)
    fondo.fill(15)

    for (let vy = 0; vy < VISTA_FILAS; vy++) {
        for (let vx = 0; vx < VISTA_COLUMNAS; vx++) {
            let x = camaraX + vx
            let y = camaraY + vy
            let px = vx * TAM
            let py = MARGEN_Y + vy * TAM
            let simbolo = celda(x, y)

            dibujarSuelo(px, py, x, y)

            if (simbolo == "#") {
                dibujarMuro(px, py)

            } else if (simbolo == "G") {
                fondo.fillRect(px, py, 8, 8, 11)
                fondo.fillRect(px + 8, py, 8, 8, 1)
                fondo.fillRect(px, py + 8, 8, 8, 1)
                fondo.fillRect(px + 8, py + 8, 8, 8, 11)

            } else if (simbolo == "T") {
                fondo.fillRect(px, py, 16, 16, 7)
                fondo.drawLine(px, py + 2, px + 8, py + 6, 15)
                fondo.drawLine(px + 8, py + 6, px + 15, py, 15)
                fondo.drawLine(px + 8, py + 6, px + 5, py + 12, 15)
                fondo.drawLine(px + 5, py + 12, px + 15, py + 15, 15)
                fondo.drawLine(px + 5, py + 12, px, py + 15, 15)

            } else if (simbolo == "D") {
                fondo.fillRect(px, py + 2, 16, 12, 15)
                fondo.drawRect(px, py + 2, 16, 12, 5)

                let color = 2

                if (puertaAbierta) {
                    color = 9
                }

                fondo.fillRect(px + 3, py + 5, 10, 6, color)
                fondo.drawLine(px, py + 15, px + 15, py + 12, 5)

            } else if (simbolo == "K") {
                fondo.drawRect(px + 2, py + 3, 6, 6, 4)
                fondo.fillRect(px + 7, py + 5, 7, 2, 4)
                fondo.fillRect(px + 11, py + 7, 2, 3, 4)

            } else if (simbolo == "R") {
                fondo.fillRect(px + 3, py + 1, 10, 14, 5)
                fondo.fillRect(px + 1, py + 3, 14, 10, 5)
                fondo.fillRect(px + 5, py + 3, 2, 3, 15)
                fondo.fillRect(px + 9, py + 3, 3, 3, 15)
                fondo.fillRect(px + 6, py + 7, 3, 3, 15)
                fondo.fillRect(px + 8, py + 11, 3, 2, 15)
            }

            if (
                pedestalX >= 0 &&
                x >= pedestalX &&
                x < pedestalX + TAM_BLOQUE &&
                y >= pedestalY &&
                y < pedestalY + TAM_BLOQUE
            ) {
                fondo.fillRect(px, py, 16, 16, 2)
                fondo.fillRect(px + 5, py + 5, 4, 4, 15)
            }

            if (
                bloqueX >= 0 &&
                x >= bloqueX &&
                x < bloqueX + TAM_BLOQUE &&
                y >= bloqueY &&
                y < bloqueY + TAM_BLOQUE
            ) {
                fondo.fillRect(px, py, 16, 16, 1)

                for (let i = 0; i < 9; i++) {
                    fondo.fillRect(
                        px + (i * 7 + x) % 14,
                        py + (i * 5 + y) % 14,
                        2,
                        2,
                        15
                    )
                }
            }
        }
    }

    actualizarContadorLlaves()
    scene.setBackgroundImage(fondo)
}

function recibirDano() {
    if (estado != "jugando" || game.runtime() < inmuneHasta) {
        return
    }

    vidas -= 1
    radiacion = 0
    inmuneHasta = game.runtime() + INVULNERABILIDAD_MS

    if (vidas <= 0) {
        mostrarFinal(false)
    }
}

function actualizarRadiacion() {
    if (estado != "jugando" || esperandoSoltar) {
        return
    }

    let distancia = distanciaAFuente(columna, fila)

    if (
        game.runtime() < inmuneHasta ||
        distancia > RADIO_RADIACION
    ) {
        radiacion = Math.max(
            0,
            radiacion - ENFRIAMIENTO_POR_TICK
        )
    } else {
        radiacion = Math.min(
            LIMITE_RADIACION,
            radiacion +
            (RADIO_RADIACION - distancia + 1) * AUMENTO_POR_TRAMO
        )
    }

    if (radiacion >= LIMITE_RADIACION) {
        recibirDano()
    }

    if (estado == "jugando") {
        actualizarContadorLlaves()
    }
}

function puedeOcuparBloque(bx: number, by: number): boolean {
    for (let y = by; y < by + TAM_BLOQUE; y++) {
        for (let x = bx; x < bx + TAM_BLOQUE; x++) {
            let simbolo = celda(x, y)

            if (simbolo != "." && simbolo != "P") {
                return false
            }

            if (x == columna && y == fila) {
                return false
            }
        }
    }

    return true
}

function intentarMover(dx: number, dy: number) {
    let nx = columna + dx
    let ny = fila + dy
    let destino = celda(nx, ny)

    if (
        destino == "#" ||
        destino == "G" ||
        destino == "T" ||
        destino == "R"
    ) {
        return
    }

    if (destino == "D" && !puertaAbierta) {
        return
    }

    if (
        bloqueX >= 0 &&
        nx >= bloqueX &&
        nx < bloqueX + TAM_BLOQUE &&
        ny >= bloqueY &&
        ny < bloqueY + TAM_BLOQUE
    ) {
        let bx = bloqueX + dx
        let by = bloqueY + dy

        if (!puedeOcuparBloque(bx, by)) {
            return
        }

        bloqueX = bx
        bloqueY = by

        puertaAbierta =
            bloqueX == pedestalX &&
            bloqueY == pedestalY
    }

    columna = nx
    fila = ny

    if (destino == "K") {
        llaves += 1
        ponerCelda(nx, ny, ".")
        puertaAbierta = llaves == totalLlaves
    }

    dibujarNivel()

    if (destino == "D" && puertaAbierta) {
        cambiarNivel()
    }
}

function cambiarNivel() {
    if (nivel == 3) {
        if (vidas > 0) {
            mostrarFinal(true)
        }
        return
    }

    estado = "cargando"

    control.runInParallel(function () {
        if (nivel == 1) {
            crearNivel2()
        } else if (nivel == 2) {
            crearNivel3()
        }
    })
}

function reiniciarNivel() {
    if (nivel == 1) {
        crearNivel1()
    } else if (nivel == 2) {
        crearNivel2()
    } else if (nivel == 3) {
        crearNivel3()
    }
}

function reiniciarPartida() {
    vidas = VIDAS_INICIALES + BONUS_VIDAS[elegido]
    crearNivel1()
}

function mostrarFinal(gano: boolean) {
    estado = "derrota"

    if (gano) {
        estado = "victoria"
    }

    jugador.setFlag(SpriteFlag.Invisible, true)
    esperandoSoltar = true
    fondo = image.create(160, 120)
    fondo.fill(15)

    if (gano) {
        fondo.print("ESCAPE COMPLETADO", 29, 25, 7)
        fondo.print("Lo lograste, " + NOMBRES[elegido], 20, 48, 1)
        fondo.print("Vidas: " + vidas, 53, 65, 7)
        fondo.print("A o B: menu", 44, 94, 5)
    } else {
        fondo.print("SIN VIDAS", 53, 30, 2)
        fondo.print("A: reintentar nivel " + nivel, 14, 65, 1)
        fondo.print("B: nueva partida", 26, 85, 5)
    }

    scene.setBackgroundImage(fondo)
}

function hayBotonPulsado(): boolean {
    return controller.left.isPressed() ||
        controller.right.isPressed() ||
        controller.up.isPressed() ||
        controller.down.isPressed() ||
        controller.A.isPressed() ||
        controller.B.isPressed()
}

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (estado == "menu" && !esperandoSoltar) {
        seleccionarPersonaje(-1)
    }
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (estado == "menu" && !esperandoSoltar) {
        seleccionarPersonaje(1)
    }
})

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (estado == "menu" && !esperandoSoltar) {
        seleccionarPersonaje(-1)
    }
})

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (estado == "menu" && !esperandoSoltar) {
        seleccionarPersonaje(1)
    }
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (esperandoSoltar) {
        return
    }

    if (estado == "menu") {
        reiniciarPartida()
    } else if (estado == "derrota") {
        reiniciarNivel()
    } else if (estado == "victoria") {
        mostrarMenu()
    }
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (esperandoSoltar) {
        return
    }

    if (estado == "menu") {
        mostrarHistoriaPersonaje()
    } else if (estado == "jugando") {
        reiniciarNivel()
    } else if (estado == "derrota" || estado == "victoria") {
        mostrarMenu()
    }
})

game.onUpdate(function () {
    if (estado == "cargando") {
        return
    }

    if (esperandoSoltar) {
        if (!hayBotonPulsado()) {
            esperandoSoltar = false
        }
        return
    }

    if (estado != "jugando") {
        return
    }

    let ahora = game.runtime()

    jugador.setFlag(
        SpriteFlag.Invisible,
        ahora < inmuneHasta &&
        Math.idiv(ahora, 100) % 2 == 0
    )

    if (ahora < proximoPaso) {
        return
    }

    let dx = 0
    let dy = 0

    if (controller.left.isPressed()) {
        dx = -1
    } else if (controller.right.isPressed()) {
        dx = 1
    } else if (controller.up.isPressed()) {
        dy = -1
    } else if (controller.down.isPressed()) {
        dy = 1
    }

    if (dx == 0 && dy == 0) {
        return
    }

    proximoPaso = ahora + PASOS_MS[elegido]
    intentarMover(dx, dy)
})

game.onUpdateInterval(INTERVALO_RADIACION_MS, function () {
    actualizarRadiacion()
})

jugador = sprites.create(
    imagenPersonaje(elegido),
    SpriteKind.Player
)

jugador.z = 10
mostrarMenu()