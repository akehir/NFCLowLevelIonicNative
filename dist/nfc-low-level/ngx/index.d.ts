import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * @name NFCLowLevel
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { NFCLowLevel } from '@ionic-native/nfc-low-level';
 *
 *
 * constructor(private nfc: NFCLowLevel) { }
 *
 * ...
 *
 * this.nfc.addTagDiscoveredListener().subscribe(res => {
 *      if (res === 'init') {
 *        console.log('added tag discoverer successfully');
 *      } else {
 *        console.log(JSON.stringify(res));
 *        this.nfc.connect()
 *          .then(() =>
 *            this.nfc.transceive(
 *              new Uint8Array([this.transceiveReadCmd, this.pageToRead])
 *            )
 *          )
 *          .then(res => console.log(res))
 *          .catch(err => console.log('error' + err));
 *      }
 *    });
 * ```
 */
export declare class NFCLowLevel extends IonicNativePlugin {
    /**
     * This function adds an event listener for incoming NFC tags
     * @return first "init", than JSON object of detected TAG
     */
    addTagDiscoveredListener(): Observable<any>;
    /**
     * This function connects to a NfcA tag
     */
    connect(): Promise<void>;
    /**
     * This function sends a command to a NfcA tag
     * @returns an JsonArray containing the bytes of the answer:
     * [<byte>, <byte>, ... ]
     */
    transceive(data: Uint8Array): Promise<any>;
    /**
     * This function closes connection to a NfcA tag
     */
    close(): Promise<void>;
}
