# Secure NPM PACKAGE

## Introduction

Welcome to the "secure" package! This module is designed for authentication and security-related tasks, including token validation and user information retrieval from JWT tokens. It can be used independently in your Node.js applications to enhance security and authentication.

## Installation

To use the "secure" package in your project, you can install it via npm:

npm install secure

## Required Environment Variables

To use the "secure" package, you need to set the following environment variables:

  1. REDIS_DB_URL: The URL or host of your Redis database, including the port.
  2. REDIS_DB_USER: The username or access key for authentication.
  3. REDIS_DB_PASSWORD: The password or access key secret for authentication.

Make sure to set these environment variables with the appropriate values in your application's environment configuration. These variables are essential for connecting to your Redis database securely and reliably.

## Sample Usage 

const secure = require('secure');

let token = 'YOUR_TOKEN';

const execute = async () => {
  console.log(await secure.validateToken(token));
}
execute();

## Success Response

Here is a sample success response when using the "secure" package for authentication:

{
  "success": true,
  "data": {
    "name": "Guest User",
    "email": "guest@sasaipay.com",
    "tenantId": "tenant-2",
    "customerId": null
  }
}

In the sample response:

    "success" indicates the success of the operation.
    "data" contains the user information, including name, email, tenant ID, and customer ID.

## Error Response

In case of an error during token validation, you might receive an error response like this:

{
  "success": false,
  "errorCode": "internal.server.error",
  "message": "jwt expired"
}

In the error response:

    "success" is set to false to indicate the failure.
    "errorCode" provides a specific error code, in this case, "internal.server.error."
    "message" describes the error in more detail, indicating that the JWT has expired.

## Error Codes


## Version History

    1.0.0 (Release Date: 23 Oct 2023)
        Initial release of the "secure" package.

## License

This package is open-source and released under the MIT License. You are free to use, modify, and distribute it according to the terms of the license.


## Contributing

Contributions are welcome! If you would like to improve this package, report issues, or suggest new features, please refer to our Contribution Guidelines.
Contact

For questions, issues, or feedback, you can contact the maintainers at ankur.mittal@kellton.com.

Contributors:
Ankur Mittal
Vishu Gupta