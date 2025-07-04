
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdministradorScalarFieldEnum = {
  idAdmin: 'idAdmin',
  usuario: 'usuario',
  contrase_a: 'contrase_a',
  correo: 'correo',
  rol: 'rol',
  creado: 'creado',
  actualizado: 'actualizado'
};

exports.Prisma.CategoriasScalarFieldEnum = {
  idCategoria: 'idCategoria',
  idAdmin: 'idAdmin',
  nombre: 'nombre',
  descripcion: 'descripcion',
  creado: 'creado',
  actualizado: 'actualizado'
};

exports.Prisma.ClientesScalarFieldEnum = {
  idCliente: 'idCliente',
  idAdmin: 'idAdmin',
  nombre: 'nombre',
  apellido: 'apellido',
  correo: 'correo',
  contrase_a: 'contrase_a',
  telefono: 'telefono',
  direccion: 'direccion',
  ciudad: 'ciudad',
  mensaje: 'mensaje',
  fecha: 'fecha'
};

exports.Prisma.ProductosScalarFieldEnum = {
  idProducto: 'idProducto',
  idCategoria: 'idCategoria',
  idAdmin: 'idAdmin',
  nombre: 'nombre',
  descripcion: 'descripcion',
  imagen_url: 'imagen_url',
  precio: 'precio',
  creado: 'creado',
  actualizado: 'actualizado'
};

exports.Prisma.ServiciosScalarFieldEnum = {
  idServicio: 'idServicio',
  idAdmin: 'idAdmin',
  nombre: 'nombre',
  descripcion: 'descripcion',
  creado: 'creado',
  actualizado: 'actualizado'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.administradorOrderByRelevanceFieldEnum = {
  usuario: 'usuario',
  contrase_a: 'contrase_a',
  correo: 'correo'
};

exports.Prisma.categoriasOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  descripcion: 'descripcion'
};

exports.Prisma.clientesOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  apellido: 'apellido',
  correo: 'correo',
  contrase_a: 'contrase_a',
  telefono: 'telefono',
  direccion: 'direccion',
  ciudad: 'ciudad',
  mensaje: 'mensaje'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.productosOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  descripcion: 'descripcion',
  imagen_url: 'imagen_url'
};

exports.Prisma.serviciosOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  descripcion: 'descripcion'
};
exports.administrador_rol = exports.$Enums.administrador_rol = {
  admin: 'admin',
  editor: 'editor'
};

exports.Prisma.ModelName = {
  administrador: 'administrador',
  categorias: 'categorias',
  clientes: 'clientes',
  productos: 'productos',
  servicios: 'servicios'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/cristian/Escritorio/proyecto-tps2-125/back-end/src/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "windows"
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/home/cristian/Escritorio/proyecto-tps2-125/back-end/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider      = \"prisma-client-js\"\n  output        = \"../src/generated/prisma\"\n  binaryTargets = [\"native\", \"windows\", \"debian-openssl-3.0.x\"] // Combinada la lista de binaryTargets\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel administrador {\n  idAdmin     Int               @id @default(autoincrement())\n  usuario     String            @unique(map: \"username_UNIQUE\") @db.VarChar(45)\n  contrase_a  String            @map(\"contraseña\") @db.VarChar(50)\n  correo      String            @db.VarChar(50)\n  rol         administrador_rol @default(editor)\n  creado      DateTime          @db.DateTime(0)\n  actualizado DateTime          @db.DateTime(0)\n  categorias  categorias[]\n  clientes    clientes[]\n  productos   productos[]\n  servicios   servicios[]\n}\n\nmodel categorias {\n  idCategoria   Int           @id @default(autoincrement())\n  idAdmin       Int\n  nombre        String        @db.VarChar(100)\n  descripcion   String        @db.VarChar(200)\n  creado        DateTime      @db.DateTime(0)\n  actualizado   DateTime      @db.DateTime(0)\n  administrador administrador @relation(fields: [idAdmin], references: [idAdmin], onDelete: NoAction, onUpdate: NoAction, map: \"fk_Categorias_Administradores1\")\n  productos     productos[]\n\n  @@index([idAdmin], map: \"fk_Categorias_Administradores1_idx\")\n}\n\nmodel clientes {\n  idCliente     Int           @id @default(autoincrement())\n  idAdmin       Int\n  nombre        String        @db.VarChar(100)\n  apellido      String        @db.VarChar(100)\n  correo        String        @db.VarChar(100)\n  contrase_a    String        @map(\"contraseña\") @db.VarChar(50)\n  telefono      String        @db.VarChar(30)\n  direccion     String        @db.VarChar(50)\n  ciudad        String        @db.VarChar(45)\n  mensaje       String        @db.VarChar(200)\n  fecha         DateTime      @db.Date\n  administrador administrador @relation(fields: [idAdmin], references: [idAdmin], onDelete: NoAction, onUpdate: NoAction, map: \"fk_Contactos_Administradores1\")\n\n  @@index([idAdmin], map: \"fk_Contactos_Administradores1_idx\")\n}\n\nmodel productos {\n  idProducto    Int           @id @default(autoincrement())\n  idCategoria   Int\n  idAdmin       Int\n  nombre        String        @db.VarChar(100)\n  descripcion   String?       @db.Text\n  imagen_url    String        @db.VarChar(255)\n  precio        Decimal?      @db.Decimal(10, 2)\n  creado        DateTime      @db.DateTime(0)\n  actualizado   DateTime      @db.DateTime(0)\n  administrador administrador @relation(fields: [idAdmin], references: [idAdmin], onDelete: NoAction, onUpdate: NoAction, map: \"fk_Productos_Administradores1\")\n  categorias    categorias    @relation(fields: [idCategoria], references: [idCategoria], onDelete: NoAction, onUpdate: NoAction, map: \"fk_Productos_Categorias1\")\n\n  @@index([idAdmin], map: \"fk_Productos_Administradores1_idx\")\n  @@index([idCategoria], map: \"fk_Productos_Categorias1_idx\")\n}\n\nmodel servicios {\n  idServicio    Int           @id @default(autoincrement())\n  idAdmin       Int\n  nombre        String        @db.VarChar(100)\n  descripcion   String        @db.VarChar(200)\n  creado        DateTime      @db.DateTime(0)\n  actualizado   DateTime      @db.DateTime(0)\n  administrador administrador @relation(fields: [idAdmin], references: [idAdmin], onDelete: NoAction, onUpdate: NoAction, map: \"fk_Servicios_Administradores1\")\n\n  @@index([idAdmin], map: \"fk_Servicios_Administradores1_idx\")\n}\n\nenum administrador_rol {\n  admin\n  editor\n}\n",
  "inlineSchemaHash": "ee5ed129449efddbef408d51db0a34b42c036c8d7531d089160ec44e8011c4a3",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"administrador\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idAdmin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"45\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrase_a\",\"dbName\":\"contraseña\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rol\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"administrador_rol\",\"nativeType\":null,\"default\":\"editor\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualizado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categorias\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"categorias\",\"nativeType\":null,\"relationName\":\"administradorTocategorias\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"clientes\",\"nativeType\":null,\"relationName\":\"administradorToclientes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"productos\",\"nativeType\":null,\"relationName\":\"administradorToproductos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"servicios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"servicios\",\"nativeType\":null,\"relationName\":\"administradorToservicios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"categorias\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idCategoria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idAdmin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualizado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"administrador\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"administrador\",\"nativeType\":null,\"relationName\":\"administradorTocategorias\",\"relationFromFields\":[\"idAdmin\"],\"relationToFields\":[\"idAdmin\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"productos\",\"nativeType\":null,\"relationName\":\"categoriasToproductos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"clientes\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idCliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idAdmin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apellido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrase_a\",\"dbName\":\"contraseña\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"direccion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ciudad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"45\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensaje\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"administrador\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"administrador\",\"nativeType\":null,\"relationName\":\"administradorToclientes\",\"relationFromFields\":[\"idAdmin\"],\"relationToFields\":[\"idAdmin\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"productos\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idProducto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idCategoria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idAdmin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imagen_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualizado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"administrador\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"administrador\",\"nativeType\":null,\"relationName\":\"administradorToproductos\",\"relationFromFields\":[\"idAdmin\"],\"relationToFields\":[\"idAdmin\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categorias\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"categorias\",\"nativeType\":null,\"relationName\":\"categoriasToproductos\",\"relationFromFields\":[\"idCategoria\"],\"relationToFields\":[\"idCategoria\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"servicios\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idServicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idAdmin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualizado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"administrador\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"administrador\",\"nativeType\":null,\"relationName\":\"administradorToservicios\",\"relationFromFields\":[\"idAdmin\"],\"relationToFields\":[\"idAdmin\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"administrador_rol\":{\"values\":[{\"name\":\"admin\",\"dbName\":null},{\"name\":\"editor\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "src/generated/prisma/libquery_engine-debian-openssl-3.0.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")
