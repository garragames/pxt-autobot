/*
 * Auto Bot
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 * /

/**
 * Custom graphic block
 */

//% weight=100 color=#fa8f13 icon="\uf1b9" block="AutoBot"
// groups=['Variables', 'Movements', 'Sensors', 'Logic', 'Commands']
namespace autoBot {

    const MIN_VEL = 150;  //   0 km/hr
    const MAX_VEL = 1023; // 100 km/hr
    const FIRST   = 20;
    const SECOND  = 40;
    const THIRD   = 60;
    const FOURTH  = 80;
    const FIFTH   = 100;
    const NEUTRAL = 0;
    const PARKING = 1;
    const REVERSE = 2;
    const DRIVE   = 3;
    const ENGINE_STATE = 0;
    const BELT_STATE = 1;


    /**
     * Setup variables, pins and enumerations
     */

    // Disable LED Matrix
    led.enable(true) // Set true to DEBUG

    // OnOff Sates
    export enum OnOff {
        //% block="off"
        //% block.loc.es-ES="apagado"
        //% jres=icons.engine-off
        Off = 0,
        //% block="on"
        //% block.loc.es-ES="encendido"
        //% jres=icons.engine-on
        On = 1
    }
    
    // Directions
    export enum Directions {
        //% block="left"
        //% block.loc.es-ES="izquierda"
        //% jres=icons.direction-left
        Left = 1,
        //% block="front"
        //% block.loc.es-ES="frente"
        //% jres=icons.direction-front
        Front = 2,
        //% block="right"
        //% block.loc.es-ES="derecha"
        //% jres=icons.direction-right
        Right = 3
    }

    // Seat Belt States
    export enum BeltStates {
        //% block="unfasten"
        //% block.loc.es-ES="desabrochado"
        //% jres=icons.belt-unfasten
        Unfasten = 1,
        //% block="fasten"
        //% block.loc.es-ES="abrochado"
        //% jres=icons.belt-fasten
        Fasten = 2

    }

    // Signs
    export enum Signs {
        //% block="stop"
        //% block.loc.es-ES="alto"
        //% jres=icons.stop-sign
        Stop = 0,
        //% block="left"
        //% block.loc.es-ES="izquierda"
        //% jres=icons.left-sign
        Left = 1,
        //% block="forward"
        //% block.loc.es-ES="adelante"
        //% jres=icons.forward-sign
        Forward = 2,
        //% block="backward"
        //% block.loc.es-ES="atrás"
        //% jres=icons.backward-sign
        //Backward = 3,
        //% block="right"
        //% block.loc.es-ES="derecha"
        //% jres=icons.right-sign
        Right = 4
    }

    // Manual Gears
    export enum ManualGears {
        //% block="first gear"
        //% block.loc.es-ES="primera velocidad"
        //% jres=icons.first-gear
        First = FIRST,
        //% block="third gear"
        //% block.loc.es-ES="tercera velocidad"
        //% jres=icons.third-gear
        Third = THIRD,
        //% block="fifth gear"
        //% block.loc.es-ES="quinta velocidad"
        //% jres=icons.neutral-gear
        Neutral = NEUTRAL,
        //% block="second gear"
        //% block.loc.es-ES="segunda velocidad"
        //% jres=icons.second-gear
        Second = SECOND,
        //% block="fourth gear"
        //% block.loc.es-ES="cuarta velocidad"
        //% jres=icons.fourth-gear
        Fourth = FOURTH,
        //% block="reverse gear"
        //% block.loc.es-ES="reversa"
        //% jres=icons.reverse-gear
        Reverse = 20
    }

    // Automatic Gears
    export enum AutomaticGears {
        //% block="first gear"
        //% block.loc.es-ES="primera velocidad"
        //% jres=icons.parking-gear
        AParking = PARKING,
        //% block="third gear"
        //% block.loc.es-ES="tercera velocidad"
        //% jres=icons.reverse-gear
        AReverse = REVERSE,
        //% block="fifth gear"
        //% block.loc.es-ES="quinta velocidad"
        //% jres=icons.neutral-gear
        ANeutral = NEUTRAL,
        //% block="second gear"
        //% block.loc.es-ES="segunda velocidad"
        //% jres=icons.drive-gear
        ADrive = DRIVE,
        //% block="fourth gear"
        //% block.loc.es-ES="cuarta velocidad"
        //% jres=icons.second-gear
        ASecond = SECOND,
        //% block="reverse gear"
        //% block.loc.es-ES="reversa"
        //% jres=icons.first-gear
        AFirst = FIRST
    }
    /**
     * Set Speed
     * @param gear
     */
    function setSpeed(gear: number): void {
        let s = gear * (MAX_VEL - MIN_VEL) / 100 + MIN_VEL; // Adjust to the min and max PWM values
        // PWM para izquierdo
        pins.analogWritePin(AnalogPin.P8, s)
        // PWM para derecho
        pins.analogWritePin(AnalogPin.P16, s)
    }

    // Stop motors
    _stop()

    // Set initial gear
    // setSpeed(Gears.First); /// TODO: NEUTRAL

    /**
     * Gear Selector
     * @param gear
     */
    //% blockId=getGear
    //% block="$gear"
    //% gear.defl=Gears.third
    //% gear.fieldEditor="imagedropdown"
    //% gear.fieldOptions.columns=3
    //% gear.fieldOptions.width="225"
    //% gear.fieldOptions.maxRows=2
    //% group="Variables"
    export function getGear(gear: ManualGears): number {
        return gear
    }

    /**
    * Direction Selector
    * @param direction
    */
    //% blockId=getDirection
    //% block="$direction"
    //% direction.defl=Directions.front
    //% direction.fieldEditor="imagedropdown"
    //% direction.fieldOptions.columns=3
    //% direction.fieldOptions.width="225"
    //% direction.fieldOptions.maxRows=2
    //% group="Variables"
    export function getDirection(direction: Directions): number {
        return direction
    }

    /**
     * Seat belt status
     * @param status
     */
    //% blockId=setSeatbelt
    //% block="seat belt $status"
    //% block.loc.es-ES="cinturón de seguridad $status"
    //% status.defl=BeltStates.unfasten
    //% status.fieldEditor="imagedropdown"
    //% status.fieldOptions.columns=2
    //% status.fieldOptions.width="150"
    //% status.fieldOptions.maxRows=1
    //% group="Commands"
    export function belt(status: BeltStates): void {
        
    }
    
    /**
    * Sign Selector
    * @param sign
    */
    //% blockId=getSign
    //% block="$sign"
    //% block.
    //% sign.fieldEditor="imagedropdown"
    //% sign.fieldOptions.columns=4
    //% sign.fieldOptions.width="300"
    //% sign.fieldOptions.maxRows=2
    //% group="Variables"    
    export function getSign(sign: Signs): number {
        return sign
    }

    /**
     * Detects the tilt of the micro:bit card via the accelerometer
     * @returns 
     */
    //% blockId=senseAcelerometer
    //% block="sense acelerometer"
    //% block.loc.es-ES="detectar acelerómetro"
    //% group="Sensors"
    export function senseAcelerometer(): number {
        return 0
    }

    /**
     * Detects distance through ultrasonic sensor
     * @returns 
     */
    //% blockId=senseDistance
    //% block="sense distance"
    //% block.loc.es-ES="detectar distancia"
    //% group="Sensors"
    export function senseDistance(): number {
        return 0
    }

    /**
     * Detects the line through the five infrared sensors in front of the AutoBot, and returns forward, backward, left, right or stop.
     */
    //% blockId=senseLine
    //% block="sense line"
    //% block.loc.es-ES="detectar línea"
    //% group="Sensors"
    export function senseLine(): Signs {
        if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 0 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
            return Signs.Forward
        } else
            if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                return Signs.Left
            } else
                if (pins.digitalReadPin(DigitalPin.P0) == 0 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                    return Signs.Left
                } else
                    if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 0 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                        return Signs.Right
                    } else
                        if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 0)))) {
                            return Signs.Right
                        } else
                            if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                                return Signs.Stop
                            }
        return Signs.Stop // If no condition then Stop motors
    }

    /**
     * Stop the autobot
     */
    export function _stop(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
     * Turn the autobot right
     */
    export function _right(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
    * Turn the autobot left
    */
    export function _left(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
     * Moves the autobot backward
     */
    export function _backward(): void {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
    }


    /**
     * Moves the autobot forward
     */
    export function _forward(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }


    /**
    * Turn Engine On/Off
    * @param state
    */
    //% blockId=setEngine
    //% block="turn engine $state"
    //% block.loc.es-ES="motor $state"
    //% state.defl=OnOff.off
    //% state.fieldEditor="imagedropdown" 
    //% state.fieldOptions.columns=2
    //% state.fieldOptions.width="150"
    //% state.fieldOptions.maxRows=1
    //% group="Commands"
    export function setEngine(state: OnOff): void {

    }
    /**
    * Set Direction
    * @param direction
    */
    //% blockId=turnDirection
    //% block="turn direction $direction"
    //% block.loc.es-ES="girar volante $direction"
    //% direction.defl=Directions.front
    //% direction.fieldEditor="imagedropdown" 
    //% direction.fieldOptions.columns=3
    //% direction.fieldOptions.width="225"
    //% direction.fieldOptions.maxRows=1
    //% group="Commands"
    export function turnDirection(direction: Directions): void {
        
    }

    /**
    * Set Gear
    * @param gear
    */
    //% blockId=setGear
    //% block="set gear $gear"
    //% block.loc.es-ES="cambiar velocidad $gear"
    //% gear.defl=Gears.Third
    //% gear.fieldEditor="imagedropdown" 
    //% gear.fieldOptions.columns=3
    //% gear.fieldOptions.width="225"
    //% gear.fieldOptions.maxRows=2
    //% group="Commands"
    export function setGear(gear: ManualGears): void {
        setSpeed(gear)
    }

    /**
        * Set Automatic Gear 
        * @param gear
        */
    //% blockId=setAutomaticGear
    //% block="set gear $gear"
    //% block.loc.es-ES="cambiar velocidad $gear"
    //% gear.defl=Gears.Third
    //% gear.fieldEditor="imagedropdown" 
    //% gear.fieldOptions.columns=1
    //% gear.fieldOptions.width="75"
    //% gear.fieldOptions.maxRows=6
    //% group="Commands"
    export function setAutomaticGear(gear: AutomaticGears): void {
        setSpeed(gear)
    }

    /**
     * Move
     */
    //% blockId=accelerate
    //% block="accelerate"
    //% block.loc.es-ES="acelerar"
    //% group="Movements"
    export function accelerate(): void {

    }

    /**
     * Stop
     */
    //% blockId=brake
    //% block="stop"
    //% block.loc.es-ES="frenar"
    //% group="Movements"
    export function brake(): void {

    }

    /**
     * Compares two values and returns true if equal or false if not equal
     * @param A
     * @param B
     */
    //% blockId=compare
    //% block="$A equal to $B"
    //% block.loc.es-ES="$A igual a $B"
    //% B.fieldEditor="imagedropdown"
    //% B.fieldOptions.columns=4
    //% B.fieldOptions.width="300"
    //% B.fieldOptions.maxRows=1
    //% group="Logic"
    export function compare(A: number, B: Signs): boolean {
        return A == B
    }    
}