import MONGOOSE from 'mongoose';
import BLUEBIRD from 'bluebird';

class Db {
  /**
 * @param config - An object that expects the mongo_uri path
 * @returns Returns the mongo connection
 */
  public static connect = (config: {mongo_uri: string}) => {
    (<any>MONGOOSE).Promise = BLUEBIRD;
    return MONGOOSE.connect(config.mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
      .then(() => { console.log(`Connected to MongoDB at ${config.mongo_uri}`); })
      .catch((err) => {
        console.error(`MongoDB connection error. ${err}`);
        process.exit(1);
      });
  };
}

export default Db;
