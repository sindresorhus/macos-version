import {expectType} from 'tsd';
import {
	macOSVersion,
	isMacOSVersion,
	isMacOSVersionGreaterThanOrEqualTo,
	assertMacOSVersion,
	assertMacOSVersionGreaterThanOrEqualTo,
	assertMacOS,
	isMacOS,
} from './index.js';

expectType<string | undefined>(macOSVersion());
expectType<boolean>(isMacOSVersion('>10.10'));
expectType<boolean>(isMacOSVersionGreaterThanOrEqualTo('10.12.5'));
expectType<void>(assertMacOSVersion('>10.10'));
expectType<void>(assertMacOSVersionGreaterThanOrEqualTo('10.10'));
expectType<void>(assertMacOS());
expectType<boolean>(isMacOS);
