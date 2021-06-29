import axios from 'axios'
import { GETDATA,SETFLAG } from './constants'

function getDataAction(data) {
  return {
    type: GETDATA,
    data,
  }
}


function setFlag(data) {
  return {
    type: SETFLAG,
    data,
  }
}

function asyncGetData() {
  return async (dispatch) => {
    let result = await axios({
      method: 'get',
      url: 'http://127.0.0.1:7500/getData',
    })
    dispatch(getDataAction(result.data))
  }
}

export { asyncGetData,setFlag }
