import { useEffect, useState } from 'react'
import { UseFetch } from '../hooks/UseFetch';
import { UsersTable } from '../components/users/UsersTable'
import { UserAdd } from '../components/users/UserAdd';

export const Users = () => {
  const [state, setState] = useState({
    loading: true,
    users: [],
  });

  useEffect(() => {
    UseFetch('/users')/* ?limit=1000 */
      .then(({ok, data}) => {
        ok &&
        setState({
          loading : false,
          users : data.users
        })
      })
      .catch(() => console.error)
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-7">
              <UsersTable users = {state.users}/>
            </div>
            <div className="col-12 col-md-5">
              <UserAdd />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
