import axios from 'axios'

export function post(url: string) {
  return (headers: any) => async (body: any) => {
    const response = await axios.post(url, body, headers)
    return response
  }
}
