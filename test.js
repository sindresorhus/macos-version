import test from 'ava';
import semver from 'semver';
import macosVersion from '.';

test('main', t => {
	const version = macosVersion();
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
	const version = macosVersion._parseVersion(plist);
	t.is(semver.valid(version), version);
	t.is(version, '10.14.2');
});

test('.is()', t => {
	t.true(macosVersion.is('>=10.10'));
	t.true(macosVersion.is('>=10.10.2'));
	t.true(macosVersion.is('<20'));
	t.true(macosVersion.is(macosVersion()));
	t.false(macosVersion.is('<10'));
});

test('.isGreaterThanOrEqual()', t => {
	t.true(macosVersion.isGreaterThanOrEqualTo('10.10'));
	t.true(macosVersion.isGreaterThanOrEqualTo('10.10.2'));
	t.false(macosVersion.isGreaterThanOrEqualTo('15.10'));
});

test('.assert()', t => {
	t.throws(() => {
		macosVersion.assert('<=10.10');
	});

	t.notThrows(() => {
		macosVersion.assert('>=10.10');
	});

	t.notThrows(() => {
		macosVersion.assert('>=10.10.2');
	});
});

test('.isMacOS', t => {
	const boolAssert = (process.platform === 'darwin' ? t.true : t.false);
	boolAssert(macosVersion.isMacOS);
});

test('.assertMacOS()', t => {
	const assert = (macosVersion.isMacOS ? t.notThrows : t.throws);

	assert(() => {
		macosVersion.assertMacOS();
	});
});

test('.assertGreaterThanOrEqual()', t => {
	t.throws(() => {
		macosVersion.assertGreaterThanOrEqualTo('15.10');
	});

	t.notThrows(() => {
		macosVersion.assertGreaterThanOrEqualTo('10.10');
	});

	t.notThrows(() => {
		macosVersion.assertGreaterThanOrEqualTo('10.10.2');
	});
});
