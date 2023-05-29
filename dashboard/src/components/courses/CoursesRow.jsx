import PropTypes from 'prop-types'

export const CourseRow = ({id,title,stock,price}) => {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{stock}</td>
            <td>{price}</td>
            <td>{}</td>
            <td>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-sm btn-success' style={{ width: '30px' }} ><i className='fas fa-edit'></i></button>
                    <button className='btn btn-sm btn-danger' style={{ width: '30px' }} ><i className='fas fa-trash'></i></button>
                </div>
            </td>
        </tr>
    )
}

CourseRow.propTypes = {
    id : PropTypes.number,
    title : PropTypes.string,
    stock : PropTypes.number,
    price : PropTypes.number,
    /* discount : PropTypes.number */
}
