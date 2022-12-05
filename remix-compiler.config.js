module.exports = {
              compilers: {
                solc: {
                  version: '0.6.12',
                  settings: {
                    optimizer: {
                      enabled: false,
                      runs: 200,
                    },
                    evmVersion: null
                  }
                }
              }
            }