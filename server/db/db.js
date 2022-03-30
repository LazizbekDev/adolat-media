import mongoose from 'mongoose';

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`ulangan host: ${conn.connection.host}`.bgBlue.black)
    } catch (err) {
        console.log(`Error: ${err}`);
        process.exit(1);
    }
}

export default connect;