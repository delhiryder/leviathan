// Config.js examples

// Check Config.js reference for all documentation on config.js files
// https://balena-os.github.io/leviathan/pages/Getting-Started/config-reference.html

// Use the following config to run the e2e tests with some customizations

module.exports = [
	{

    deviceType: "raspberrypi4-64", // replace this with your device type slug. A contract must exist for this in the leviathan/core/contracts submodule.
    // suite: `${__dirname}/../suites/e2e`,
    suite: `${__dirname}/../suites/os`,
    config: {
      networkWired: true,
      networkWireless: false,
      downloadVersion: 'latest',
      balenaApiKey: process.env.BALENACLOUD_API_KEY, // this must be the api key that matches the "organization" property.
      balenaApiUrl: 'balena-cloud.com',
      organization: process.env.BALENACLOUD_ORG,
    },
    debug: {
      unstable: ["Kill the device under test"],
    },
   image: `${__dirname}/balena-cloud-leviathan-DUT-Rpi4-64-raspberrypi4-64-5.3.7+rev2-v16.3.5.img.zip`, // can also set image: false to auto download - only if the image is aailable through balena cloud
    // image: false, // can also set image: false to auto download - only if the image is available through balena cloud
    workers: ['https://04ff3a800eeeddf9ac0c8b9789328c73.balena-devices.com/'], // or local ip address of the autokit (recommended)

	// 	// Device under test (DUT) name goes here
	// 	deviceType: "beaglebone-black",
  //
	// 	// Suite name goes here
	// 	suite: `${__dirname}/../suites/e2e`,
  //   // suite: `${__dirname}/../suites/os`,
  //   config: {
  //
	// 		// Network configuration for the DUT
	// 		networkWired: true,
	// 		networkWireless: false,
  //
	// 		// For tests that need a specific balenaOS version to be downloaded. Default: latest
	// 		downloadVersion: 'latest',
  //
	// 		// Needed the provision the DUT to a balenaCloud fleet
	// 		balenaApiKey: process.env.BALENACLOUD_API_KEY,
	// 		balenaApiUrl: 'balena-cloud.com',
	// 		organization: process.env.BALENACLOUD_ORG,
	// 	},
  //
	// 	// Path to the gzipped image to be tested goes here. This image is used to provision the DUT
	// 	image: `${__dirname}/balena-image-flasher-beagleplay-20240613184316.rootfs.balenaos-img.gz`,
  //
	// 	// Worker configuration: Pointing to a Fleet
	// 	// https://balena-os.github.io/leviathan/pages/Getting-Started/config-reference.html#different-workers-configurations-available
	// 	workers: ['https://04ff3a800eeeddf9ac0c8b9789328c73.balena-devices.com/'],
  //   //   {
	// 	// 	balenaApplication: 'testbot-personal',
	// 	// 	apiKey: process.env.BALENACLOUD_API_KEY
	// 	// },
  //
	// 	debug: {
	// 		// Exit the ongoing test suite if a test fails
	// 		failFast: true,
	// 		// Exit the ongoing test run if a test fails
	// 		globalFailFast: true,
	// 		// Persist downloadeded artifacts
	// 		preserveDownloads: true,
	// 		// Mark unstable tests to be skipped
	// 		unstable: ["Kill the device under test"],
	// 	},
	},
	//
	// {
	// 	deviceType: "raspberrypi3",
	// 	suite: `${__dirname}/../suites/os`,
	// 	config: {
	// 		networkWired: false,
	// 		networkWireless: true,
	// 		balenaApiKey: process.env.BALENACLOUD_API_KEY,
	// 		balenaApiUrl: 'balena-cloud.com',
	// 		organization: 'BALENACLOUD_ORG_GOES_HERE'
	// 	},
	// 	image: `${__dirname}/balena.img.gz`,
	// 	// https://balena-os.github.io/leviathan/pages/Getting-Started/config-reference.html#different-workers-configurations-available
	// 	workers: {
	// 		balenaApplication: 'testbot-personal',
	// 		apiKey: process.env.BALENACLOUD_API_KEY
	// 	}
	// },
	//
	//
	// {
	// 	deviceType: "raspberrypi3",
	// 	suite: `${__dirname}/../suites/hup`,
	// 	config: {
	// 		networkWired: false,
	// 		networkWireless: true,
	// 		balenaApiKey: process.env.BALENACLOUD_API_KEY,
	// 		balenaApiUrl: 'balena-cloud.com',
	// 		organization: 'BALENACLOUD_ORG_GOES_HERE'
	// 	},
	// 	image: `${__dirname}/balena.img.gz`,
	// 	// Worker configuration: Public URL's
	// 	// https://balena-os.github.io/leviathan/pages/Getting-Started/config-reference.html#different-workers-configurations-available
	// 	workers: ['https://123213bda32048sgd5dfw223423723324.balena-devices.com/']
	// },
	//
	//
	// {
	// 	deviceType: "genericx86-64-ext",
	// 	suite: `${__dirname}/../suites/os`,
	// 	config: {
	// 		networkWired: false,
	// 		networkWireless: true,
	// 		balenaApiKey: process.env.BALENACLOUD_API_KEY,
	// 		balenaApiUrl: 'balena-cloud.com',
	// 		organization: 'BALENACLOUD_ORG_GOES_HERE'
	// 	},
	// 	// balenaOS image that is uploaded to the testbot
	// 	image: `${__dirname}/balena.img.gz`,
	// 	// Worker configuration to run the QEMU worker
	// 	// https://balena-os.github.io/leviathan/pages/Getting-Started/config-reference.html#different-workers-configurations-available
	// 	workers: ['http://worker']
	// }
];
