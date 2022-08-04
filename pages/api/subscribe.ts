import { useState } from 'react'
const API_KEY =
  'c9dfdff367c22118f33d459fd2e13293768693a1b769f96fda73814ae5a547e9755ec8b968baf176000adc5a98bc376ee0ee5f7aff850da57f51d7052c4d1e69'
const BASE_URL = 'https://api.stibee.com/v1'
const listId = '198055'

export const useSubscribe = () => {
  const [res, setRes] = useState()
  let option = {
    method: 'POST',
    headers: {
      AccessToken: API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      eventOccuredBy: 'MANUAL',
      confirmEmailYN: 'Y',
      subscribers: [
        {
          email: 'string',
          name: 'string',
        },
      ],
    }),
  }
  const fetchData = async () => {
    try {
      const data = await (
        await fetch(`${BASE_URL}/lists/${listId}/subscribers`, option)
      ).json()
      setRes(data)
    } catch (err) {
      console.log(err)
    }
  }
  return [res, fetchData]
}
