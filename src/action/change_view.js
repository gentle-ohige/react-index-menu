import * as C from './constance'

export function swithSample(sample) {
  return {
    type: C.ACTIONS.CHANGE_SAMPLE,
    sample: sample
  }
}
