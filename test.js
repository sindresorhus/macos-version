import test from 'ava';
import m from './';

test(async t => {
	const version = await m();
	console.log('Version:', version);
	t.true(version.length > 0);
});
