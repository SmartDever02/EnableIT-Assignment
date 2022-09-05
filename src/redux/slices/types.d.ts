interface DataType {
  users: Array<Array<UserType>>;
  page: number;
}

interface UserType {
  ID: number;
  JobTitle: string;
  EmailAddress: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
}

interface ArgType {}
