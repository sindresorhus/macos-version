import test from 'ava';
import fn from './';

test(async t => {
	const version = await fn();
	console.log('Version:', version);
	t.true(version.length > 0);
});
