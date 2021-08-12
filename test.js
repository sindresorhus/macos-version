import test from 'ava';
import semver from 'semver';
import {
	macOSVersion,
	isMacOSVersion,
	isMacOSVersionGreaterThanOrEqualTo,
	assertMacOSVersion,
	assertMacOSVersionGreaterThanOrEqualTo,
	assertMacOS,
	isMacOS,
} from './index.js';

test('main', t => {
	const version = macOSVersion();
	console.log('Version:', version);
	t.is(semver.valid(version), version);
});

test('main with iOS support', t => {
	const plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>ProductBuildVersion</key>
	<string>18C54</string>
	<key>ProductCopyright</key>
	<string>1983-2018 Apple Inc.</string>
	<key>ProductName</key>
	<string>Mac OS X</string>
	<key>ProductUserVisibleVersion</key>
	<string>10.14.2</string>
	<key>ProductVersion</key>
	<string>10.14.2</string>
	<key>iOSSupportVersion</key>
	<string>12.0</string>
</dict>
</plist>`;
	const version = macOSVersion._parseVersion(plist);
	t.is(semver.valid(version), version);
	t.is(version, '10.14.2');
});

test('isMacOSVersion()', t => {
	t.true(isMacOSVersion('>=10.10'));
	t.true(isMacOSVersion('>=10.10.2'));
	t.true(isMacOSVersion('<20'));
	t.true(isMacOSVersion(macOSVersion()));
	t.false(isMacOSVersion('<10'));
});

test('isMacOSVersionGreaterThanOrEqualTo', t => {
	t.true(isMacOSVersionGreaterThanOrEqualTo('10.10'));
	t.true(isMacOSVersionGreaterThanOrEqualTo('10.10.2'));
	t.false(isMacOSVersionGreaterThanOrEqualTo('15.10'));
});

test('assertMacOSVersion()', t => {
	t.throws(() => {
		assertMacOSVersion('<=10.10');
	});

	t.notThrows(() => {
		assertMacOSVersion('>=10.10');
	});

	t.notThrows(() => {
		assertMacOSVersion('>=10.10.2');
	});
});

test('assertMacOSVersionGreaterThanOrEqualTo()', t => {
	t.throws(() => {
		assertMacOSVersionGreaterThanOrEqualTo('15.10');
	});

	t.notThrows(() => {
		assertMacOSVersionGreaterThanOrEqualTo('10.10');
	});

	t.notThrows(() => {
		assertMacOSVersionGreaterThanOrEqualTo('10.10.2');
	});
});

test('assertMacOS()', t => {
	const assert = isMacOS ? t.notThrows : t.throws;

	assert(() => {
		assertMacOS();
	});
});

test('isMacOS', t => {
	const boolAssert = isMacOS ? t.true : t.false;
	boolAssert(isMacOS);
});
