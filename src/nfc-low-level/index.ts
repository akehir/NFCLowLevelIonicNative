import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
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
@Plugin({
  pluginName: 'NFCLowLevel',
  plugin: 'https://github.com/noahzarro/NFCLowLevel', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.NFCLowLevel', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/noahzarro/NFCLowLevel', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class NFCLowLevel extends IonicNativePlugin {
  /**
   * This function adds an event listener for incoming NFC tags
   * @return first "init", than JSON object of detected TAG
   */
  @Cordova({ observable: true })
  addTagDiscoveredListener(): Observable<any> {
    return;
  }

  /**
   * This function connects to a NfcA tag
   */
  @Cordova()
  connect(): Promise<void> {
    return;
  }

  /**
   * This function sends a command to a NfcA tag
   * @returns an JsonArray containing the bytes of the answer:
   * [<byte>, <byte>, ... ]
   */
  @Cordova()
  transceive(data: Uint8Array): Promise<any> {
    return;
  }

  /**
   * This function closes connection to a NfcA tag
   */
  @Cordova()
  close(): Promise<void> {
    return;
  }
}
