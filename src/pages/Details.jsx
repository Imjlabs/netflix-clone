import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import axios from "../axios"

function Details() {

  const params = useParams()

  const [details, setDetails] = useState({})

  
  useEffect(() => {
      async function getDetails() {
        try {
            const request = await axios.get(`/movie/${params.id}?api_key=7d068f99fd07d0f1b6abcbf076f84ab0`);
            setDetails(request.data)
        } catch (error) {
            try {
                const request = await axios.get(`/tv/${params.id}?api_key=7d068f99fd07d0f1b6abcbf076f84ab0`);
                setDetails(request.data);
            } catch (error) {
                console.log(error);
            }
        }
      }
      getDetails()
  }, [])

  return (
    <>
        {details.name ? details.name : details.title}
    </>
  )
}

export default Details