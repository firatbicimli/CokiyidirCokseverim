import PropTypes from 'prop-types';

function List({ data }) {
  return (
    <ul className='extended'>
      {data.map(item => (
        <li className='list' key={item.id}>
          <strong>{item.title}</strong> - {item.category}
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};


export default List;
