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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var NFCLowLevelOriginal = /** @class */ (function (_super) {
    __extends(NFCLowLevelOriginal, _super);
    function NFCLowLevelOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NFCLowLevelOriginal.prototype.addTagDiscoveredListener = function () { return cordova(this, "addTagDiscoveredListener", { "observable": true }, arguments); };
    NFCLowLevelOriginal.prototype.connect = function () { return cordova(this, "connect", {}, arguments); };
    NFCLowLevelOriginal.prototype.transceive = function (data) { return cordova(this, "transceive", {}, arguments); };
    NFCLowLevelOriginal.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    NFCLowLevelOriginal.pluginName = "NFCLowLevel";
    NFCLowLevelOriginal.plugin = "https://github.com/noahzarro/NFCLowLevel";
    NFCLowLevelOriginal.pluginRef = "cordova.plugins.NFCLowLevel";
    NFCLowLevelOriginal.repo = "https://github.com/noahzarro/NFCLowLevel";
    NFCLowLevelOriginal.install = "";
    NFCLowLevelOriginal.installVariables = [];
    NFCLowLevelOriginal.platforms = ["Android"];
    return NFCLowLevelOriginal;
}(IonicNativePlugin));
var NFCLowLevel = new NFCLowLevelOriginal();
export { NFCLowLevel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25mYy1sb3ctbGV2ZWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7QUFDNUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUEyQ0QsK0JBQWlCOzs7O0lBTWhELDhDQUF3QjtJQVF4Qiw2QkFBTztJQVVQLGdDQUFVLGFBQUMsSUFBZ0I7SUFRM0IsMkJBQUs7Ozs7Ozs7O3NCQTdFUDtFQTZDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgTkZDTG93TGV2ZWxcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE5GQ0xvd0xldmVsIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZmMtbG93LWxldmVsJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuZmM6IE5GQ0xvd0xldmVsKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLm5mYy5hZGRUYWdEaXNjb3ZlcmVkTGlzdGVuZXIoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAqICAgICAgaWYgKHJlcyA9PT0gJ2luaXQnKSB7XG4gKiAgICAgICAgY29uc29sZS5sb2coJ2FkZGVkIHRhZyBkaXNjb3ZlcmVyIHN1Y2Nlc3NmdWxseScpO1xuICogICAgICB9IGVsc2Uge1xuICogICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICogICAgICAgIHRoaXMubmZjLmNvbm5lY3QoKVxuICogICAgICAgICAgLnRoZW4oKCkgPT5cbiAqICAgICAgICAgICAgdGhpcy5uZmMudHJhbnNjZWl2ZShcbiAqICAgICAgICAgICAgICBuZXcgVWludDhBcnJheShbdGhpcy50cmFuc2NlaXZlUmVhZENtZCwgdGhpcy5wYWdlVG9SZWFkXSlcbiAqICAgICAgICAgICAgKVxuICogICAgICAgICAgKVxuICogICAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcicgKyBlcnIpKTtcbiAqICAgICAgfVxuICogICAgfSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdORkNMb3dMZXZlbCcsXG4gIHBsdWdpbjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ub2FoemFycm8vTkZDTG93TGV2ZWwnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLk5GQ0xvd0xldmVsJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL25vYWh6YXJyby9ORkNMb3dMZXZlbCcsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTkZDTG93TGV2ZWwgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGluY29taW5nIE5GQyB0YWdzXG4gICAqIEByZXR1cm4gZmlyc3QgXCJpbml0XCIsIHRoYW4gSlNPTiBvYmplY3Qgb2YgZGV0ZWN0ZWQgVEFHXG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgYWRkVGFnRGlzY292ZXJlZExpc3RlbmVyKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gY29ubmVjdHMgdG8gYSBOZmNBIHRhZ1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjb25uZWN0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHNlbmRzIGEgY29tbWFuZCB0byBhIE5mY0EgdGFnXG4gICAqIEByZXR1cm5zIGFuIEpzb25BcnJheSBjb250YWluaW5nIHRoZSBieXRlcyBvZiB0aGUgYW5zd2VyOlxuICAgKiBbPGJ5dGU+LCA8Ynl0ZT4sIC4uLiBdXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRyYW5zY2VpdmUoZGF0YTogVWludDhBcnJheSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gY2xvc2VzIGNvbm5lY3Rpb24gdG8gYSBOZmNBIHRhZ1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==