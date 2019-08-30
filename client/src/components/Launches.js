import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import LaunchItem from './LaunchItem'
import uuidv1 from 'uuid/v1'

function Launches() {
  const { loading, error, data } = useQuery(gql`
    {
      launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
      }
    }
  `)

  const displayLaunchData = () => {
    if (loading) {
      return <h4>Loading...</h4>
    }
    if (error) {
      return (
        <h4>We are sorry, an error has occurred. Please come back later!</h4>
      )
    }

    return (
      <React.Fragment>
        {data.launches.map(launch => (
          <LaunchItem key={uuidv1()} launch={launch} />
        ))}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      {displayLaunchData()}
    </React.Fragment>
  )
}

export default Launches
