import * as bunyan from 'bunyan'

export const log = bunyan.createLogger({
  name: `AppName`
  // streams: [{
  //   type: 'rotating-file'
  // path: `./logs/AppName.log`,
  // period: '1d',   // daily rotation
  // count: 3        // keep 3 back copies
  // }]
})
