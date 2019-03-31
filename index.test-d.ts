import {expectType} from 'tsd';
import macosVersion = require('.');

expectType<string | undefined>(macosVersion());
expectType<boolean>(macosVersion.is('>10.10'));
expectType<boolean>(macosVersion.isGreaterThanOrEqualTo('10.12.5'));
expectType<void>(macosVersion.assert('>10.10'));
expectType<void>(macosVersion.assertGreaterThanOrEqualTo('10.10'));
expectType<void>(macosVersion.assertMacOS());
expectType<boolean>(macosVersion.isMacOS);
