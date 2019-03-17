declare const macosVersion: {
	/**
	@returns The macOS version.
	*/
	(): string | undefined;

	/**
	@returns Whether the specified [semver range](https://github.com/npm/node-semver#ranges) matches the macOS version.
	*/
	is(semverRange: string): boolean;

	/**
	@returns Whether the macOS version is greater than or equal to the specified version.
	*/
	isGreaterThanOrEqualTo(version: string): boolean;

	/**
	Throws an error if the specified [semver range](https://github.com/npm/node-semver#ranges) does not match the macOS version.
	*/
	assert(semverRange: string): void;

	/**
	Throws an error if the macOS version is not greater than or equal to the specified version.

	_Prefer this over `.assert()` whenever possible as it outputs a more user-friendly error message._
	*/
	assertGreaterThanOrEqualTo(version: string): void;

	/**
	Throws an error if platform is not macOS.
	*/
	assertMacOS(): void;

	/**
	Whether the platform is macOS.
	*/
	readonly isMacOS: boolean;
};

export default macosVersion;
