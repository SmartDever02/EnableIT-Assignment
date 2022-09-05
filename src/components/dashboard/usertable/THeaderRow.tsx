import './style.css';

const THeaderRow = (props: HeaderRowType) => {
  return (
    <div className='table-row'>
      {props.names.map((name, index) => (
        <span key={'theader-' + index}>{name}</span>
      ))}
    </div>
  );
};

export default THeaderRow;
