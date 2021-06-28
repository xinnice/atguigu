import { PUSH } from './constance'
import axios from 'axios'

function push(data) {
  return {
    type: PUSH,
    data,
  }
}

function pushAsync() {
  return async (dispatch) => {
    let result = await axios({
      method: 'get',
      url: 'http://127.0.0.1:7500/addData',
    })
    dispatch(push(result.data))
  }
}

export { pushAsync }
