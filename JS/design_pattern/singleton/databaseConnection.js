class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    this.connection = this.connectToDatabase();
    DatabaseConnection.instance = this;
  }

  connectToDatabase() {
    // Simulate the connection to a database
    console.log('Database connected');
    return {}; // Represents the database connection object
  }

  getConnection() {
    return this.connection;
  }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1 === db2); // Output: true
