var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var NFCLowLevel = /** @class */ (function (_super) {
    __extends(NFCLowLevel, _super);
    function NFCLowLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NFCLowLevel.prototype.addTagDiscoveredListener = function () { return cordova(this, "addTagDiscoveredListener", { "observable": true }, arguments); };
    NFCLowLevel.prototype.connect = function () { return cordova(this, "connect", {}, arguments); };
    NFCLowLevel.prototype.transceive = function (data) { return cordova(this, "transceive", {}, arguments); };
    NFCLowLevel.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    NFCLowLevel.pluginName = "NFCLowLevel";
    NFCLowLevel.plugin = "https://github.com/noahzarro/NFCLowLevel";
    NFCLowLevel.pluginRef = "cordova.plugins.NFCLowLevel";
    NFCLowLevel.repo = "https://github.com/noahzarro/NFCLowLevel";
    NFCLowLevel.install = "";
    NFCLowLevel.installVariables = [];
    NFCLowLevel.platforms = ["Android"];
    NFCLowLevel = __decorate([
        Injectable()
    ], NFCLowLevel);
    return NFCLowLevel;
}(IonicNativePlugin));
export { NFCLowLevel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25mYy1sb3ctbGV2ZWwvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7QUFDNUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUEyQ0QsK0JBQWlCOzs7O0lBTWhELDhDQUF3QjtJQVF4Qiw2QkFBTztJQVVQLGdDQUFVLGFBQUMsSUFBZ0I7SUFRM0IsMkJBQUs7Ozs7Ozs7O0lBaENNLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkE3Q3hCO0VBNkNpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBORkNMb3dMZXZlbFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTkZDTG93TGV2ZWwgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25mYy1sb3ctbGV2ZWwnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5mYzogTkZDTG93TGV2ZWwpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMubmZjLmFkZFRhZ0Rpc2NvdmVyZWRMaXN0ZW5lcigpLnN1YnNjcmliZShyZXMgPT4ge1xuICogICAgICBpZiAocmVzID09PSAnaW5pdCcpIHtcbiAqICAgICAgICBjb25zb2xlLmxvZygnYWRkZWQgdGFnIGRpc2NvdmVyZXIgc3VjY2Vzc2Z1bGx5Jyk7XG4gKiAgICAgIH0gZWxzZSB7XG4gKiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gKiAgICAgICAgdGhpcy5uZmMuY29ubmVjdCgpXG4gKiAgICAgICAgICAudGhlbigoKSA9PlxuICogICAgICAgICAgICB0aGlzLm5mYy50cmFuc2NlaXZlKFxuICogICAgICAgICAgICAgIG5ldyBVaW50OEFycmF5KFt0aGlzLnRyYW5zY2VpdmVSZWFkQ21kLCB0aGlzLnBhZ2VUb1JlYWRdKVxuICogICAgICAgICAgICApXG4gKiAgICAgICAgICApXG4gKiAgICAgICAgICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yJyArIGVycikpO1xuICogICAgICB9XG4gKiAgICB9KTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05GQ0xvd0xldmVsJyxcbiAgcGx1Z2luOiAnaHR0cHM6Ly9naXRodWIuY29tL25vYWh6YXJyby9ORkNMb3dMZXZlbCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuTkZDTG93TGV2ZWwnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbm9haHphcnJvL05GQ0xvd0xldmVsJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBORkNMb3dMZXZlbCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gYWRkcyBhbiBldmVudCBsaXN0ZW5lciBmb3IgaW5jb21pbmcgTkZDIHRhZ3NcbiAgICogQHJldHVybiBmaXJzdCBcImluaXRcIiwgdGhhbiBKU09OIG9iamVjdCBvZiBkZXRlY3RlZCBUQUdcbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBhZGRUYWdEaXNjb3ZlcmVkTGlzdGVuZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBjb25uZWN0cyB0byBhIE5mY0EgdGFnXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNvbm5lY3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc2VuZHMgYSBjb21tYW5kIHRvIGEgTmZjQSB0YWdcbiAgICogQHJldHVybnMgYW4gSnNvbkFycmF5IGNvbnRhaW5pbmcgdGhlIGJ5dGVzIG9mIHRoZSBhbnN3ZXI6XG4gICAqIFs8Ynl0ZT4sIDxieXRlPiwgLi4uIF1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhbnNjZWl2ZShkYXRhOiBVaW50OEFycmF5KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBjbG9zZXMgY29ubmVjdGlvbiB0byBhIE5mY0EgdGFnXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19