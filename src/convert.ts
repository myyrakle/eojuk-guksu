import {
    IParser,
    IEmmiter,
    PostgreSQLParser,
    MySQLParser,
    SequelizeTypescriptEmitter,
    TypeOrmEmitter,
} from "eojuk";

export function convert(query: string, database: string, orm: string) {
    let parser: IParser = null;
    let emitter: IEmmiter = null;

    switch (database) {
        case "postgresql":
        case "postgres":
        case "postgre":
        case "pg":
            parser = new PostgreSQLParser();
            break;

        case "mysql":
        case "my":
            parser = new MySQLParser();
            break;

        default:
            console.error("!! 지원되지 않는 데이터베이스입니다.");
            return;
    }

    switch (orm) {
        case "sequelize-typescript":
        case "st":
            emitter = new SequelizeTypescriptEmitter();
            break;
        case "sequelize":
        case "sq":
            console.error("!! 아직 지원되지 않는 ORM입니다.");
            break;
        case "typeorm":
        case "ty":
            emitter = new TypeOrmEmitter();
            break;
        default:
            console.error("!! 지원되지 않는 ORM입니다.");
            return;
    }

    const tables = parser.parse(query);
    const sources = emitter.emit(tables, { sourceSplit: true });

    console.log(sources);

    return sources[0].source;
}
