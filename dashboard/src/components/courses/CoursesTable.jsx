import { CourseRow } from "./CoursesRow";
import PropTypes from 'prop-types'

export const CoursesTable = ({courses}) => {

  return (
    <>
      <div className='d-flex justify-content-between'>
        <h4>Lista de productos</h4>
      </div>
      <hr />

      <div className='table-responsive'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Curso</th>
              <th scope="col">Chef</th>
              <th scope="col">Precio</th>
              <th scope="col">Desc</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              courses.map((course, index) => (
                <CourseRow
                key={index}
                  {...course}
                />
              ))
            }

          </tbody>
        </table>
      </div>
    </>
  )
}
CoursesTable.propTypes = {
  courses : PropTypes.array
}
