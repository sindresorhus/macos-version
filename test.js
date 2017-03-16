import test from 'ava';
import semver from 'semver';
import m from '.';

test('main', t => {
	const version = m();
	console.log('Version:', version);
	t.is(semver.valid(version), version);
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
