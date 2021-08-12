/**
@returns The macOS version or `undefined` if the platform is not macOS.

@example
```
import {macOSVersion} from 'macos-version';

macOSVersion();
//=> '10.12.3'
```
*/
export function macOSVersion(): string | undefined;

/**
@returns Whether the specified [semver range](https://github.com/npm/node-semver#ranges) matches the macOS version.

@example
```
import {isMacOSVersion} from 'macos-version';

isMacOSVersion('>10.10');
//=> true
```
*/
export function isMacOSVersion(semverRange: string): boolean;

/**
@returns Whether the macOS version is greater than or equal to the specified version.

@example
```
import {isMacOSVersionGreaterThanOrEqualTo} from 'macos-version';

isMacOSVersionGreaterThanOrEqualTo('10.10');
//=> true
```
*/
export function isMacOSVersionGreaterThanOrEqualTo(version: string): boolean;

/**
Throws an error if the specified [semver range](https://github.com/npm/node-semver#ranges) does not match the macOS version.

@example
```
import {assertMacOSVersion} from 'macos-version';

assertMacOSVersion('>=10.12.5');
//=> [Error: Requires macOS >=10.12.5]
```
*/
export function assertMacOSVersion(semverRange: string): void;

/**
Throws an error if the macOS version is not greater than or equal to the specified version.

_Prefer this over `.assert()` whenever possible as it outputs a more user-friendly error message._

@example
```
import {assertMacOSVersionGreaterThanOrEqualTo} from 'macos-version';

assertMacOSVersionGreaterThanOrEqualTo('10.12.5');
//=> [Error: Requires macOS 10.12.5 or later]
```
*/
export function assertMacOSVersionGreaterThanOrEqualTo(version: string): void;

/**
Throws an error if platform is not macOS.

@example
```
import {assertMacOS} from 'macos-version';

assertMacOS();
//=> [Error: Requires macOS]
```
*/
export function assertMacOS(): void;

/**
Whether the platform is macOS.

@example
```
import {isMacOS} from 'macos-version';

if (isMacOS) {
	console.log('macOS');
}
```
*/
export const isMacOS: boolean;
