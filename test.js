import test from 'ava';
import fn from './';

test(t => {
	t.plan(2);

	fn((err, version) => {
		console.log('Version:', version);
		t.ifError(err);
		t.true(version.length > 0);
	});
});
