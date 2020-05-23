import { lbDate, LbDateOptions, TimeZoneOptions } from 'lbdate'

describe('LbDate getDefaultConfig():', () => {

  it('should return global configurations.', () => {
    const config = lbDate().getDefaultConfig()
    const expectedConfig: LbDateOptions = {
      timezone: TimeZoneOptions.auto,
      manualTimeZoneOffset: null,
      toNativeJsonName: 'toNativeJSON',
      precision: 3,
    }
    expect(config).toStrictEqual(expectedConfig)
  })
})
