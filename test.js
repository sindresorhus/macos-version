import test from 'ava';
import semver from 'semver';
import m from '.';

test('main', t => {
	const version = m();
	console.log('Version:', version);
	t.is(semver.valid(version), version);
});

test('main with ios support', t => {
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
	const version = m.parseVersion(plist);
	t.is(semver.valid(version), version);
	t.is(version, '10.14.2');
});

test('.is()', t => {
	t.true(m.is('>=10.10'));
	t.true(m.is('>=10.10.2'));
	t.true(m.is('<20'));
	t.true(m.is(m()));
	t.false(m.is('<10'));
});

test('.isGreaterThanOrEqual()', t => {
	t.true(m.isGreaterThanOrEqualTo('10.10'));
	t.true(m.isGreaterThanOrEqualTo('10.10.2'));
	t.false(m.isGreaterThanOrEqualTo('15.10'));
});

test('.assert()', t => {
	t.throws(() => {
		m.assert('<=10.10');
	});

	t.notThrows(() => {
		m.assert('>=10.10');
	});

	t.notThrows(() => {
		m.assert('>=10.10.2');
	});
});

test('.isMacOS', t => {
	const boolAssert = (process.platform === 'darwin' ? t.true : t.false).bind(t);
	boolAssert(m.isMacOS);
});

test('.assertMacOS()', t => {
	const assert = (m.isMacOS ? t.notThrows : t.throws).bind(t);

	assert(() => {
		m.assertMacOS();
	});
});

test('.assertGreaterThanOrEqual()', t => {
	t.throws(() => {
		m.assertGreaterThanOrEqualTo('15.10');
	});

	t.notThrows(() => {
		m.assertGreaterThanOrEqualTo('10.10');
	});

	t.notThrows(() => {
		m.assertGreaterThanOrEqualTo('10.10.2');
	});
});
