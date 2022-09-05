const TRow = (props: { index: number; data: UserType }) => {
  const { index, data } = props;

  return (
    <div className={`table-row row-${index % 2 ? 'even' : 'odd'}`}>
      <span>{data.ID}</span>
      <span>{data.JobTitle}</span>
      <span>{data.EmailAddress}</span>
      <span>{data.FirstNameLastName}</span>
      <span>{data.Email}</span>
      <span>{data.Phone}</span>
      <span>{data.Company}</span>
    </div>
  );
};

export default TRow;
