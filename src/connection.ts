import mongoose, { Mongoose } from 'mongoose'

export const connectToDatabase = async (server: Function, DB_URL: string) => {
    
    mongoose.connection.on('connected', () => {
        console.log('DATABASE CONNECTION STATUS: true');
        console.log('CONNECTION STRING:', DB_URL);
        server();
    })

    mongoose.connection.on('reconnected', () => {
        console.log('Connection Reestablished')
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Connection Disconnected')
    })

    mongoose.connection.on('close', () => {
        console.log('Connection Closed')
    })

    mongoose.connection.on('error', (error) => {
        console.log('ERROR: ' + error)
    })

    const CONNECTION = async () => {
        await mongoose.connect(DB_URL);
    }


    CONNECTION().catch((err) => {
        throw err;
    })
}