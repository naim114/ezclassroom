export const getDBConnection = async () => {
    return openDatabase({ name: 'todo-data.db', location: 'default' });
};