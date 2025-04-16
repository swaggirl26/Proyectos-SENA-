
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model administrador
 * 
 */
export type administrador = $Result.DefaultSelection<Prisma.$administradorPayload>
/**
 * Model categorias
 * 
 */
export type categorias = $Result.DefaultSelection<Prisma.$categoriasPayload>
/**
 * Model clientes
 * 
 */
export type clientes = $Result.DefaultSelection<Prisma.$clientesPayload>
/**
 * Model configuraciones
 * 
 */
export type configuraciones = $Result.DefaultSelection<Prisma.$configuracionesPayload>
/**
 * Model paginas
 * 
 */
export type paginas = $Result.DefaultSelection<Prisma.$paginasPayload>
/**
 * Model productos
 * 
 */
export type productos = $Result.DefaultSelection<Prisma.$productosPayload>
/**
 * Model servicios
 * 
 */
export type servicios = $Result.DefaultSelection<Prisma.$serviciosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const administrador_rol: {
  admin: 'admin',
  editor: 'editor'
};

export type administrador_rol = (typeof administrador_rol)[keyof typeof administrador_rol]


export const paginas_tipo: {
  inicio: 'inicio',
  productos: 'productos',
  servicios: 'servicios',
  nosotros: 'nosotros',
  contacto: 'contacto',
  blog: 'blog'
};

export type paginas_tipo = (typeof paginas_tipo)[keyof typeof paginas_tipo]

}

export type administrador_rol = $Enums.administrador_rol

export const administrador_rol: typeof $Enums.administrador_rol

export type paginas_tipo = $Enums.paginas_tipo

export const paginas_tipo: typeof $Enums.paginas_tipo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Administradors
 * const administradors = await prisma.administrador.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Administradors
   * const administradors = await prisma.administrador.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.administrador`: Exposes CRUD operations for the **administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.administradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorias`: Exposes CRUD operations for the **categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.categoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientes`: Exposes CRUD operations for the **clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.clientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuraciones`: Exposes CRUD operations for the **configuraciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuraciones
    * const configuraciones = await prisma.configuraciones.findMany()
    * ```
    */
  get configuraciones(): Prisma.configuracionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paginas`: Exposes CRUD operations for the **paginas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paginas
    * const paginas = await prisma.paginas.findMany()
    * ```
    */
  get paginas(): Prisma.paginasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productos`: Exposes CRUD operations for the **productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.productos.findMany()
    * ```
    */
  get productos(): Prisma.productosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicios`: Exposes CRUD operations for the **servicios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicios
    * const servicios = await prisma.servicios.findMany()
    * ```
    */
  get servicios(): Prisma.serviciosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    administrador: 'administrador',
    categorias: 'categorias',
    clientes: 'clientes',
    configuraciones: 'configuraciones',
    paginas: 'paginas',
    productos: 'productos',
    servicios: 'servicios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "administrador" | "categorias" | "clientes" | "configuraciones" | "paginas" | "productos" | "servicios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      administrador: {
        payload: Prisma.$administradorPayload<ExtArgs>
        fields: Prisma.administradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.administradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.administradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>
          }
          findFirst: {
            args: Prisma.administradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.administradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>
          }
          findMany: {
            args: Prisma.administradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>[]
          }
          create: {
            args: Prisma.administradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>
          }
          createMany: {
            args: Prisma.administradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.administradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>
          }
          update: {
            args: Prisma.administradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>
          }
          deleteMany: {
            args: Prisma.administradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.administradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.administradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.administradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.administradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      categorias: {
        payload: Prisma.$categoriasPayload<ExtArgs>
        fields: Prisma.categoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findFirst: {
            args: Prisma.categoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findMany: {
            args: Prisma.categoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          create: {
            args: Prisma.categoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          createMany: {
            args: Prisma.categoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          update: {
            args: Prisma.categoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          deleteMany: {
            args: Prisma.categoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.categoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      clientes: {
        payload: Prisma.$clientesPayload<ExtArgs>
        fields: Prisma.clientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findFirst: {
            args: Prisma.clientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findMany: {
            args: Prisma.clientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          create: {
            args: Prisma.clientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          createMany: {
            args: Prisma.clientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          update: {
            args: Prisma.clientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          deleteMany: {
            args: Prisma.clientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.clientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      configuraciones: {
        payload: Prisma.$configuracionesPayload<ExtArgs>
        fields: Prisma.configuracionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.configuracionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.configuracionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>
          }
          findFirst: {
            args: Prisma.configuracionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.configuracionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>
          }
          findMany: {
            args: Prisma.configuracionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>[]
          }
          create: {
            args: Prisma.configuracionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>
          }
          createMany: {
            args: Prisma.configuracionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.configuracionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>
          }
          update: {
            args: Prisma.configuracionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>
          }
          deleteMany: {
            args: Prisma.configuracionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.configuracionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.configuracionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>
          }
          aggregate: {
            args: Prisma.ConfiguracionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguraciones>
          }
          groupBy: {
            args: Prisma.configuracionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.configuracionesCountArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionesCountAggregateOutputType> | number
          }
        }
      }
      paginas: {
        payload: Prisma.$paginasPayload<ExtArgs>
        fields: Prisma.paginasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paginasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paginasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paginasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paginasPayload>
          }
          findFirst: {
            args: Prisma.paginasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paginasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paginasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paginasPayload>
          }
          findMany: {
            args: Prisma.paginasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paginasPayload>[]
          }
          create: {
            args: Prisma.paginasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paginasPayload>
          }
          createMany: {
            args: Prisma.paginasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.paginasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paginasPayload>
          }
          update: {
            args: Prisma.paginasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paginasPayload>
          }
          deleteMany: {
            args: Prisma.paginasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paginasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paginasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paginasPayload>
          }
          aggregate: {
            args: Prisma.PaginasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaginas>
          }
          groupBy: {
            args: Prisma.paginasGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaginasGroupByOutputType>[]
          }
          count: {
            args: Prisma.paginasCountArgs<ExtArgs>
            result: $Utils.Optional<PaginasCountAggregateOutputType> | number
          }
        }
      }
      productos: {
        payload: Prisma.$productosPayload<ExtArgs>
        fields: Prisma.productosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findFirst: {
            args: Prisma.productosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findMany: {
            args: Prisma.productosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          create: {
            args: Prisma.productosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          createMany: {
            args: Prisma.productosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          update: {
            args: Prisma.productosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          deleteMany: {
            args: Prisma.productosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          aggregate: {
            args: Prisma.ProductosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos>
          }
          groupBy: {
            args: Prisma.productosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductosGroupByOutputType>[]
          }
          count: {
            args: Prisma.productosCountArgs<ExtArgs>
            result: $Utils.Optional<ProductosCountAggregateOutputType> | number
          }
        }
      }
      servicios: {
        payload: Prisma.$serviciosPayload<ExtArgs>
        fields: Prisma.serviciosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.serviciosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.serviciosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>
          }
          findFirst: {
            args: Prisma.serviciosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.serviciosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>
          }
          findMany: {
            args: Prisma.serviciosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>[]
          }
          create: {
            args: Prisma.serviciosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>
          }
          createMany: {
            args: Prisma.serviciosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.serviciosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>
          }
          update: {
            args: Prisma.serviciosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>
          }
          deleteMany: {
            args: Prisma.serviciosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.serviciosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.serviciosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>
          }
          aggregate: {
            args: Prisma.ServiciosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicios>
          }
          groupBy: {
            args: Prisma.serviciosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiciosGroupByOutputType>[]
          }
          count: {
            args: Prisma.serviciosCountArgs<ExtArgs>
            result: $Utils.Optional<ServiciosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    administrador?: administradorOmit
    categorias?: categoriasOmit
    clientes?: clientesOmit
    configuraciones?: configuracionesOmit
    paginas?: paginasOmit
    productos?: productosOmit
    servicios?: serviciosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdministradorCountOutputType
   */

  export type AdministradorCountOutputType = {
    categorias: number
    clientes: number
    configuraciones: number
    paginas: number
    productos: number
    servicios: number
  }

  export type AdministradorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | AdministradorCountOutputTypeCountCategoriasArgs
    clientes?: boolean | AdministradorCountOutputTypeCountClientesArgs
    configuraciones?: boolean | AdministradorCountOutputTypeCountConfiguracionesArgs
    paginas?: boolean | AdministradorCountOutputTypeCountPaginasArgs
    productos?: boolean | AdministradorCountOutputTypeCountProductosArgs
    servicios?: boolean | AdministradorCountOutputTypeCountServiciosArgs
  }

  // Custom InputTypes
  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministradorCountOutputType
     */
    select?: AdministradorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeCountCategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriasWhereInput
  }

  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientesWhereInput
  }

  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeCountConfiguracionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configuracionesWhereInput
  }

  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeCountPaginasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paginasWhereInput
  }

  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
  }

  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeCountServiciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serviciosWhereInput
  }


  /**
   * Count Type CategoriasCountOutputType
   */

  export type CategoriasCountOutputType = {
    productos: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriasCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorAvgAggregateOutputType = {
    idAdmin: number | null
  }

  export type AdministradorSumAggregateOutputType = {
    idAdmin: number | null
  }

  export type AdministradorMinAggregateOutputType = {
    idAdmin: number | null
    usuario: string | null
    contrase_a: string | null
    correo: string | null
    rol: $Enums.administrador_rol | null
    creado: Date | null
    actualizado: Date | null
  }

  export type AdministradorMaxAggregateOutputType = {
    idAdmin: number | null
    usuario: string | null
    contrase_a: string | null
    correo: string | null
    rol: $Enums.administrador_rol | null
    creado: Date | null
    actualizado: Date | null
  }

  export type AdministradorCountAggregateOutputType = {
    idAdmin: number
    usuario: number
    contrase_a: number
    correo: number
    rol: number
    creado: number
    actualizado: number
    _all: number
  }


  export type AdministradorAvgAggregateInputType = {
    idAdmin?: true
  }

  export type AdministradorSumAggregateInputType = {
    idAdmin?: true
  }

  export type AdministradorMinAggregateInputType = {
    idAdmin?: true
    usuario?: true
    contrase_a?: true
    correo?: true
    rol?: true
    creado?: true
    actualizado?: true
  }

  export type AdministradorMaxAggregateInputType = {
    idAdmin?: true
    usuario?: true
    contrase_a?: true
    correo?: true
    rol?: true
    creado?: true
    actualizado?: true
  }

  export type AdministradorCountAggregateInputType = {
    idAdmin?: true
    usuario?: true
    contrase_a?: true
    correo?: true
    rol?: true
    creado?: true
    actualizado?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which administrador to aggregate.
     */
    where?: administradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradors to fetch.
     */
    orderBy?: administradorOrderByWithRelationInput | administradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: administradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type administradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: administradorWhereInput
    orderBy?: administradorOrderByWithAggregationInput | administradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: administradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _avg?: AdministradorAvgAggregateInputType
    _sum?: AdministradorSumAggregateInputType
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    idAdmin: number
    usuario: string
    contrase_a: string
    correo: string
    rol: $Enums.administrador_rol
    creado: Date
    actualizado: Date
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends administradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type administradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idAdmin?: boolean
    usuario?: boolean
    contrase_a?: boolean
    correo?: boolean
    rol?: boolean
    creado?: boolean
    actualizado?: boolean
    categorias?: boolean | administrador$categoriasArgs<ExtArgs>
    clientes?: boolean | administrador$clientesArgs<ExtArgs>
    configuraciones?: boolean | administrador$configuracionesArgs<ExtArgs>
    paginas?: boolean | administrador$paginasArgs<ExtArgs>
    productos?: boolean | administrador$productosArgs<ExtArgs>
    servicios?: boolean | administrador$serviciosArgs<ExtArgs>
    _count?: boolean | AdministradorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>



  export type administradorSelectScalar = {
    idAdmin?: boolean
    usuario?: boolean
    contrase_a?: boolean
    correo?: boolean
    rol?: boolean
    creado?: boolean
    actualizado?: boolean
  }

  export type administradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idAdmin" | "usuario" | "contrase_a" | "correo" | "rol" | "creado" | "actualizado", ExtArgs["result"]["administrador"]>
  export type administradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | administrador$categoriasArgs<ExtArgs>
    clientes?: boolean | administrador$clientesArgs<ExtArgs>
    configuraciones?: boolean | administrador$configuracionesArgs<ExtArgs>
    paginas?: boolean | administrador$paginasArgs<ExtArgs>
    productos?: boolean | administrador$productosArgs<ExtArgs>
    servicios?: boolean | administrador$serviciosArgs<ExtArgs>
    _count?: boolean | AdministradorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $administradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "administrador"
    objects: {
      categorias: Prisma.$categoriasPayload<ExtArgs>[]
      clientes: Prisma.$clientesPayload<ExtArgs>[]
      configuraciones: Prisma.$configuracionesPayload<ExtArgs>[]
      paginas: Prisma.$paginasPayload<ExtArgs>[]
      productos: Prisma.$productosPayload<ExtArgs>[]
      servicios: Prisma.$serviciosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idAdmin: number
      usuario: string
      contrase_a: string
      correo: string
      rol: $Enums.administrador_rol
      creado: Date
      actualizado: Date
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type administradorGetPayload<S extends boolean | null | undefined | administradorDefaultArgs> = $Result.GetResult<Prisma.$administradorPayload, S>

  type administradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<administradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface administradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['administrador'], meta: { name: 'administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {administradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends administradorFindUniqueArgs>(args: SelectSubset<T, administradorFindUniqueArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {administradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends administradorFindUniqueOrThrowArgs>(args: SelectSubset<T, administradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends administradorFindFirstArgs>(args?: SelectSubset<T, administradorFindFirstArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends administradorFindFirstOrThrowArgs>(args?: SelectSubset<T, administradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `idAdmin`
     * const administradorWithIdAdminOnly = await prisma.administrador.findMany({ select: { idAdmin: true } })
     * 
     */
    findMany<T extends administradorFindManyArgs>(args?: SelectSubset<T, administradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrador.
     * @param {administradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends administradorCreateArgs>(args: SelectSubset<T, administradorCreateArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administradors.
     * @param {administradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends administradorCreateManyArgs>(args?: SelectSubset<T, administradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Administrador.
     * @param {administradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends administradorDeleteArgs>(args: SelectSubset<T, administradorDeleteArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrador.
     * @param {administradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends administradorUpdateArgs>(args: SelectSubset<T, administradorUpdateArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administradors.
     * @param {administradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends administradorDeleteManyArgs>(args?: SelectSubset<T, administradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends administradorUpdateManyArgs>(args: SelectSubset<T, administradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Administrador.
     * @param {administradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends administradorUpsertArgs>(args: SelectSubset<T, administradorUpsertArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends administradorCountArgs>(
      args?: Subset<T, administradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends administradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: administradorGroupByArgs['orderBy'] }
        : { orderBy?: administradorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, administradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the administrador model
   */
  readonly fields: administradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__administradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorias<T extends administrador$categoriasArgs<ExtArgs> = {}>(args?: Subset<T, administrador$categoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientes<T extends administrador$clientesArgs<ExtArgs> = {}>(args?: Subset<T, administrador$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    configuraciones<T extends administrador$configuracionesArgs<ExtArgs> = {}>(args?: Subset<T, administrador$configuracionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paginas<T extends administrador$paginasArgs<ExtArgs> = {}>(args?: Subset<T, administrador$paginasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paginasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productos<T extends administrador$productosArgs<ExtArgs> = {}>(args?: Subset<T, administrador$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    servicios<T extends administrador$serviciosArgs<ExtArgs> = {}>(args?: Subset<T, administrador$serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the administrador model
   */
  interface administradorFieldRefs {
    readonly idAdmin: FieldRef<"administrador", 'Int'>
    readonly usuario: FieldRef<"administrador", 'String'>
    readonly contrase_a: FieldRef<"administrador", 'String'>
    readonly correo: FieldRef<"administrador", 'String'>
    readonly rol: FieldRef<"administrador", 'administrador_rol'>
    readonly creado: FieldRef<"administrador", 'DateTime'>
    readonly actualizado: FieldRef<"administrador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * administrador findUnique
   */
  export type administradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * Filter, which administrador to fetch.
     */
    where: administradorWhereUniqueInput
  }

  /**
   * administrador findUniqueOrThrow
   */
  export type administradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * Filter, which administrador to fetch.
     */
    where: administradorWhereUniqueInput
  }

  /**
   * administrador findFirst
   */
  export type administradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * Filter, which administrador to fetch.
     */
    where?: administradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradors to fetch.
     */
    orderBy?: administradorOrderByWithRelationInput | administradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for administradors.
     */
    cursor?: administradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * administrador findFirstOrThrow
   */
  export type administradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * Filter, which administrador to fetch.
     */
    where?: administradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradors to fetch.
     */
    orderBy?: administradorOrderByWithRelationInput | administradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for administradors.
     */
    cursor?: administradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * administrador findMany
   */
  export type administradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * Filter, which administradors to fetch.
     */
    where?: administradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradors to fetch.
     */
    orderBy?: administradorOrderByWithRelationInput | administradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing administradors.
     */
    cursor?: administradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * administrador create
   */
  export type administradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * The data needed to create a administrador.
     */
    data: XOR<administradorCreateInput, administradorUncheckedCreateInput>
  }

  /**
   * administrador createMany
   */
  export type administradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many administradors.
     */
    data: administradorCreateManyInput | administradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * administrador update
   */
  export type administradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * The data needed to update a administrador.
     */
    data: XOR<administradorUpdateInput, administradorUncheckedUpdateInput>
    /**
     * Choose, which administrador to update.
     */
    where: administradorWhereUniqueInput
  }

  /**
   * administrador updateMany
   */
  export type administradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update administradors.
     */
    data: XOR<administradorUpdateManyMutationInput, administradorUncheckedUpdateManyInput>
    /**
     * Filter which administradors to update
     */
    where?: administradorWhereInput
    /**
     * Limit how many administradors to update.
     */
    limit?: number
  }

  /**
   * administrador upsert
   */
  export type administradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * The filter to search for the administrador to update in case it exists.
     */
    where: administradorWhereUniqueInput
    /**
     * In case the administrador found by the `where` argument doesn't exist, create a new administrador with this data.
     */
    create: XOR<administradorCreateInput, administradorUncheckedCreateInput>
    /**
     * In case the administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<administradorUpdateInput, administradorUncheckedUpdateInput>
  }

  /**
   * administrador delete
   */
  export type administradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * Filter which administrador to delete.
     */
    where: administradorWhereUniqueInput
  }

  /**
   * administrador deleteMany
   */
  export type administradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which administradors to delete
     */
    where?: administradorWhereInput
    /**
     * Limit how many administradors to delete.
     */
    limit?: number
  }

  /**
   * administrador.categorias
   */
  export type administrador$categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    where?: categoriasWhereInput
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    cursor?: categoriasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * administrador.clientes
   */
  export type administrador$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    where?: clientesWhereInput
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    cursor?: clientesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * administrador.configuraciones
   */
  export type administrador$configuracionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionesInclude<ExtArgs> | null
    where?: configuracionesWhereInput
    orderBy?: configuracionesOrderByWithRelationInput | configuracionesOrderByWithRelationInput[]
    cursor?: configuracionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConfiguracionesScalarFieldEnum | ConfiguracionesScalarFieldEnum[]
  }

  /**
   * administrador.paginas
   */
  export type administrador$paginasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paginas
     */
    select?: paginasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paginas
     */
    omit?: paginasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paginasInclude<ExtArgs> | null
    where?: paginasWhereInput
    orderBy?: paginasOrderByWithRelationInput | paginasOrderByWithRelationInput[]
    cursor?: paginasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaginasScalarFieldEnum | PaginasScalarFieldEnum[]
  }

  /**
   * administrador.productos
   */
  export type administrador$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    cursor?: productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * administrador.servicios
   */
  export type administrador$serviciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    where?: serviciosWhereInput
    orderBy?: serviciosOrderByWithRelationInput | serviciosOrderByWithRelationInput[]
    cursor?: serviciosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiciosScalarFieldEnum | ServiciosScalarFieldEnum[]
  }

  /**
   * administrador without action
   */
  export type administradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
  }


  /**
   * Model categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    idCategoria: number | null
    idAdmin: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    idCategoria: number | null
    idAdmin: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    idCategoria: number | null
    idAdmin: number | null
    nombre: string | null
    descripcion: string | null
    creado: Date | null
    actualizado: Date | null
  }

  export type CategoriasMaxAggregateOutputType = {
    idCategoria: number | null
    idAdmin: number | null
    nombre: string | null
    descripcion: string | null
    creado: Date | null
    actualizado: Date | null
  }

  export type CategoriasCountAggregateOutputType = {
    idCategoria: number
    idAdmin: number
    nombre: number
    descripcion: number
    creado: number
    actualizado: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    idCategoria?: true
    idAdmin?: true
  }

  export type CategoriasSumAggregateInputType = {
    idCategoria?: true
    idAdmin?: true
  }

  export type CategoriasMinAggregateInputType = {
    idCategoria?: true
    idAdmin?: true
    nombre?: true
    descripcion?: true
    creado?: true
    actualizado?: true
  }

  export type CategoriasMaxAggregateInputType = {
    idCategoria?: true
    idAdmin?: true
    nombre?: true
    descripcion?: true
    creado?: true
    actualizado?: true
  }

  export type CategoriasCountAggregateInputType = {
    idCategoria?: true
    idAdmin?: true
    nombre?: true
    descripcion?: true
    creado?: true
    actualizado?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to aggregate.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type categoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriasWhereInput
    orderBy?: categoriasOrderByWithAggregationInput | categoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    idCategoria: number
    idAdmin: number
    nombre: string
    descripcion: string
    creado: Date
    actualizado: Date
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends categoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type categoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCategoria?: boolean
    idAdmin?: boolean
    nombre?: boolean
    descripcion?: boolean
    creado?: boolean
    actualizado?: boolean
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
    productos?: boolean | categorias$productosArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>



  export type categoriasSelectScalar = {
    idCategoria?: boolean
    idAdmin?: boolean
    nombre?: boolean
    descripcion?: boolean
    creado?: boolean
    actualizado?: boolean
  }

  export type categoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCategoria" | "idAdmin" | "nombre" | "descripcion" | "creado" | "actualizado", ExtArgs["result"]["categorias"]>
  export type categoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
    productos?: boolean | categorias$productosArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorias"
    objects: {
      administrador: Prisma.$administradorPayload<ExtArgs>
      productos: Prisma.$productosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idCategoria: number
      idAdmin: number
      nombre: string
      descripcion: string
      creado: Date
      actualizado: Date
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type categoriasGetPayload<S extends boolean | null | undefined | categoriasDefaultArgs> = $Result.GetResult<Prisma.$categoriasPayload, S>

  type categoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface categoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorias'], meta: { name: 'categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {categoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriasFindUniqueArgs>(args: SelectSubset<T, categoriasFindUniqueArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriasFindFirstArgs>(args?: SelectSubset<T, categoriasFindFirstArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `idCategoria`
     * const categoriasWithIdCategoriaOnly = await prisma.categorias.findMany({ select: { idCategoria: true } })
     * 
     */
    findMany<T extends categoriasFindManyArgs>(args?: SelectSubset<T, categoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias.
     * @param {categoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends categoriasCreateArgs>(args: SelectSubset<T, categoriasCreateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriasCreateManyArgs>(args?: SelectSubset<T, categoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categorias.
     * @param {categoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends categoriasDeleteArgs>(args: SelectSubset<T, categoriasDeleteArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias.
     * @param {categoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriasUpdateArgs>(args: SelectSubset<T, categoriasUpdateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriasDeleteManyArgs>(args?: SelectSubset<T, categoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriasUpdateManyArgs>(args: SelectSubset<T, categoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorias.
     * @param {categoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends categoriasUpsertArgs>(args: SelectSubset<T, categoriasUpsertArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriasCountArgs>(
      args?: Subset<T, categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriasGroupByArgs['orderBy'] }
        : { orderBy?: categoriasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorias model
   */
  readonly fields: categoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrador<T extends administradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, administradorDefaultArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productos<T extends categorias$productosArgs<ExtArgs> = {}>(args?: Subset<T, categorias$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categorias model
   */
  interface categoriasFieldRefs {
    readonly idCategoria: FieldRef<"categorias", 'Int'>
    readonly idAdmin: FieldRef<"categorias", 'Int'>
    readonly nombre: FieldRef<"categorias", 'String'>
    readonly descripcion: FieldRef<"categorias", 'String'>
    readonly creado: FieldRef<"categorias", 'DateTime'>
    readonly actualizado: FieldRef<"categorias", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categorias findUnique
   */
  export type categoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findUniqueOrThrow
   */
  export type categoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findFirst
   */
  export type categoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findFirstOrThrow
   */
  export type categoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findMany
   */
  export type categoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias create
   */
  export type categoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a categorias.
     */
    data: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
  }

  /**
   * categorias createMany
   */
  export type categoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias update
   */
  export type categoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a categorias.
     */
    data: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
    /**
     * Choose, which categorias to update.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias updateMany
   */
  export type categoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias upsert
   */
  export type categoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the categorias to update in case it exists.
     */
    where: categoriasWhereUniqueInput
    /**
     * In case the categorias found by the `where` argument doesn't exist, create a new categorias with this data.
     */
    create: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
    /**
     * In case the categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
  }

  /**
   * categorias delete
   */
  export type categoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter which categorias to delete.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias deleteMany
   */
  export type categoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categorias.productos
   */
  export type categorias$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    cursor?: productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * categorias without action
   */
  export type categoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
  }


  /**
   * Model clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    idCliente: number | null
    idAdmin: number | null
  }

  export type ClientesSumAggregateOutputType = {
    idCliente: number | null
    idAdmin: number | null
  }

  export type ClientesMinAggregateOutputType = {
    idCliente: number | null
    idAdmin: number | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    contrase_a: string | null
    telefono: string | null
    direccion: string | null
    ciudad: string | null
    mensaje: string | null
    fecha: Date | null
  }

  export type ClientesMaxAggregateOutputType = {
    idCliente: number | null
    idAdmin: number | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    contrase_a: string | null
    telefono: string | null
    direccion: string | null
    ciudad: string | null
    mensaje: string | null
    fecha: Date | null
  }

  export type ClientesCountAggregateOutputType = {
    idCliente: number
    idAdmin: number
    nombre: number
    apellido: number
    correo: number
    contrase_a: number
    telefono: number
    direccion: number
    ciudad: number
    mensaje: number
    fecha: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    idCliente?: true
    idAdmin?: true
  }

  export type ClientesSumAggregateInputType = {
    idCliente?: true
    idAdmin?: true
  }

  export type ClientesMinAggregateInputType = {
    idCliente?: true
    idAdmin?: true
    nombre?: true
    apellido?: true
    correo?: true
    contrase_a?: true
    telefono?: true
    direccion?: true
    ciudad?: true
    mensaje?: true
    fecha?: true
  }

  export type ClientesMaxAggregateInputType = {
    idCliente?: true
    idAdmin?: true
    nombre?: true
    apellido?: true
    correo?: true
    contrase_a?: true
    telefono?: true
    direccion?: true
    ciudad?: true
    mensaje?: true
    fecha?: true
  }

  export type ClientesCountAggregateInputType = {
    idCliente?: true
    idAdmin?: true
    nombre?: true
    apellido?: true
    correo?: true
    contrase_a?: true
    telefono?: true
    direccion?: true
    ciudad?: true
    mensaje?: true
    fecha?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to aggregate.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type clientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientesWhereInput
    orderBy?: clientesOrderByWithAggregationInput | clientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: clientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    idCliente: number
    idAdmin: number
    nombre: string
    apellido: string
    correo: string
    contrase_a: string
    telefono: string
    direccion: string
    ciudad: string
    mensaje: string
    fecha: Date
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends clientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type clientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCliente?: boolean
    idAdmin?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    contrase_a?: boolean
    telefono?: boolean
    direccion?: boolean
    ciudad?: boolean
    mensaje?: boolean
    fecha?: boolean
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>



  export type clientesSelectScalar = {
    idCliente?: boolean
    idAdmin?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    contrase_a?: boolean
    telefono?: boolean
    direccion?: boolean
    ciudad?: boolean
    mensaje?: boolean
    fecha?: boolean
  }

  export type clientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCliente" | "idAdmin" | "nombre" | "apellido" | "correo" | "contrase_a" | "telefono" | "direccion" | "ciudad" | "mensaje" | "fecha", ExtArgs["result"]["clientes"]>
  export type clientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
  }

  export type $clientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clientes"
    objects: {
      administrador: Prisma.$administradorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idCliente: number
      idAdmin: number
      nombre: string
      apellido: string
      correo: string
      contrase_a: string
      telefono: string
      direccion: string
      ciudad: string
      mensaje: string
      fecha: Date
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type clientesGetPayload<S extends boolean | null | undefined | clientesDefaultArgs> = $Result.GetResult<Prisma.$clientesPayload, S>

  type clientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface clientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clientes'], meta: { name: 'clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {clientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientesFindUniqueArgs>(args: SelectSubset<T, clientesFindUniqueArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientesFindUniqueOrThrowArgs>(args: SelectSubset<T, clientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientesFindFirstArgs>(args?: SelectSubset<T, clientesFindFirstArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientesFindFirstOrThrowArgs>(args?: SelectSubset<T, clientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `idCliente`
     * const clientesWithIdClienteOnly = await prisma.clientes.findMany({ select: { idCliente: true } })
     * 
     */
    findMany<T extends clientesFindManyArgs>(args?: SelectSubset<T, clientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clientes.
     * @param {clientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends clientesCreateArgs>(args: SelectSubset<T, clientesCreateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientesCreateManyArgs>(args?: SelectSubset<T, clientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clientes.
     * @param {clientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends clientesDeleteArgs>(args: SelectSubset<T, clientesDeleteArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clientes.
     * @param {clientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientesUpdateArgs>(args: SelectSubset<T, clientesUpdateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientesDeleteManyArgs>(args?: SelectSubset<T, clientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientesUpdateManyArgs>(args: SelectSubset<T, clientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientes.
     * @param {clientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends clientesUpsertArgs>(args: SelectSubset<T, clientesUpsertArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clientesCountArgs>(
      args?: Subset<T, clientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientesGroupByArgs['orderBy'] }
        : { orderBy?: clientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clientes model
   */
  readonly fields: clientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrador<T extends administradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, administradorDefaultArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clientes model
   */
  interface clientesFieldRefs {
    readonly idCliente: FieldRef<"clientes", 'Int'>
    readonly idAdmin: FieldRef<"clientes", 'Int'>
    readonly nombre: FieldRef<"clientes", 'String'>
    readonly apellido: FieldRef<"clientes", 'String'>
    readonly correo: FieldRef<"clientes", 'String'>
    readonly contrase_a: FieldRef<"clientes", 'String'>
    readonly telefono: FieldRef<"clientes", 'String'>
    readonly direccion: FieldRef<"clientes", 'String'>
    readonly ciudad: FieldRef<"clientes", 'String'>
    readonly mensaje: FieldRef<"clientes", 'String'>
    readonly fecha: FieldRef<"clientes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * clientes findUnique
   */
  export type clientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findUniqueOrThrow
   */
  export type clientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findFirst
   */
  export type clientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findFirstOrThrow
   */
  export type clientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findMany
   */
  export type clientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes create
   */
  export type clientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to create a clientes.
     */
    data: XOR<clientesCreateInput, clientesUncheckedCreateInput>
  }

  /**
   * clientes createMany
   */
  export type clientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clientesCreateManyInput | clientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientes update
   */
  export type clientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to update a clientes.
     */
    data: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
    /**
     * Choose, which clientes to update.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes updateMany
   */
  export type clientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * clientes upsert
   */
  export type clientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The filter to search for the clientes to update in case it exists.
     */
    where: clientesWhereUniqueInput
    /**
     * In case the clientes found by the `where` argument doesn't exist, create a new clientes with this data.
     */
    create: XOR<clientesCreateInput, clientesUncheckedCreateInput>
    /**
     * In case the clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
  }

  /**
   * clientes delete
   */
  export type clientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter which clientes to delete.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes deleteMany
   */
  export type clientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * clientes without action
   */
  export type clientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
  }


  /**
   * Model configuraciones
   */

  export type AggregateConfiguraciones = {
    _count: ConfiguracionesCountAggregateOutputType | null
    _avg: ConfiguracionesAvgAggregateOutputType | null
    _sum: ConfiguracionesSumAggregateOutputType | null
    _min: ConfiguracionesMinAggregateOutputType | null
    _max: ConfiguracionesMaxAggregateOutputType | null
  }

  export type ConfiguracionesAvgAggregateOutputType = {
    idConfiguracion: number | null
    idAdmin: number | null
  }

  export type ConfiguracionesSumAggregateOutputType = {
    idConfiguracion: number | null
    idAdmin: number | null
  }

  export type ConfiguracionesMinAggregateOutputType = {
    idConfiguracion: number | null
    idAdmin: number | null
    nombre: string | null
    valor: string | null
    descripcion: string | null
    creado: Date | null
    actualizado: Date | null
  }

  export type ConfiguracionesMaxAggregateOutputType = {
    idConfiguracion: number | null
    idAdmin: number | null
    nombre: string | null
    valor: string | null
    descripcion: string | null
    creado: Date | null
    actualizado: Date | null
  }

  export type ConfiguracionesCountAggregateOutputType = {
    idConfiguracion: number
    idAdmin: number
    nombre: number
    valor: number
    descripcion: number
    creado: number
    actualizado: number
    _all: number
  }


  export type ConfiguracionesAvgAggregateInputType = {
    idConfiguracion?: true
    idAdmin?: true
  }

  export type ConfiguracionesSumAggregateInputType = {
    idConfiguracion?: true
    idAdmin?: true
  }

  export type ConfiguracionesMinAggregateInputType = {
    idConfiguracion?: true
    idAdmin?: true
    nombre?: true
    valor?: true
    descripcion?: true
    creado?: true
    actualizado?: true
  }

  export type ConfiguracionesMaxAggregateInputType = {
    idConfiguracion?: true
    idAdmin?: true
    nombre?: true
    valor?: true
    descripcion?: true
    creado?: true
    actualizado?: true
  }

  export type ConfiguracionesCountAggregateInputType = {
    idConfiguracion?: true
    idAdmin?: true
    nombre?: true
    valor?: true
    descripcion?: true
    creado?: true
    actualizado?: true
    _all?: true
  }

  export type ConfiguracionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuraciones to aggregate.
     */
    where?: configuracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuraciones to fetch.
     */
    orderBy?: configuracionesOrderByWithRelationInput | configuracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: configuracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuraciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned configuraciones
    **/
    _count?: true | ConfiguracionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfiguracionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfiguracionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracionesMaxAggregateInputType
  }

  export type GetConfiguracionesAggregateType<T extends ConfiguracionesAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguraciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguraciones[P]>
      : GetScalarType<T[P], AggregateConfiguraciones[P]>
  }




  export type configuracionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configuracionesWhereInput
    orderBy?: configuracionesOrderByWithAggregationInput | configuracionesOrderByWithAggregationInput[]
    by: ConfiguracionesScalarFieldEnum[] | ConfiguracionesScalarFieldEnum
    having?: configuracionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracionesCountAggregateInputType | true
    _avg?: ConfiguracionesAvgAggregateInputType
    _sum?: ConfiguracionesSumAggregateInputType
    _min?: ConfiguracionesMinAggregateInputType
    _max?: ConfiguracionesMaxAggregateInputType
  }

  export type ConfiguracionesGroupByOutputType = {
    idConfiguracion: number
    idAdmin: number
    nombre: string
    valor: string
    descripcion: string | null
    creado: Date
    actualizado: Date
    _count: ConfiguracionesCountAggregateOutputType | null
    _avg: ConfiguracionesAvgAggregateOutputType | null
    _sum: ConfiguracionesSumAggregateOutputType | null
    _min: ConfiguracionesMinAggregateOutputType | null
    _max: ConfiguracionesMaxAggregateOutputType | null
  }

  type GetConfiguracionesGroupByPayload<T extends configuracionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfiguracionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracionesGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracionesGroupByOutputType[P]>
        }
      >
    >


  export type configuracionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idConfiguracion?: boolean
    idAdmin?: boolean
    nombre?: boolean
    valor?: boolean
    descripcion?: boolean
    creado?: boolean
    actualizado?: boolean
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuraciones"]>



  export type configuracionesSelectScalar = {
    idConfiguracion?: boolean
    idAdmin?: boolean
    nombre?: boolean
    valor?: boolean
    descripcion?: boolean
    creado?: boolean
    actualizado?: boolean
  }

  export type configuracionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idConfiguracion" | "idAdmin" | "nombre" | "valor" | "descripcion" | "creado" | "actualizado", ExtArgs["result"]["configuraciones"]>
  export type configuracionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
  }

  export type $configuracionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "configuraciones"
    objects: {
      administrador: Prisma.$administradorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idConfiguracion: number
      idAdmin: number
      nombre: string
      valor: string
      descripcion: string | null
      creado: Date
      actualizado: Date
    }, ExtArgs["result"]["configuraciones"]>
    composites: {}
  }

  type configuracionesGetPayload<S extends boolean | null | undefined | configuracionesDefaultArgs> = $Result.GetResult<Prisma.$configuracionesPayload, S>

  type configuracionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<configuracionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfiguracionesCountAggregateInputType | true
    }

  export interface configuracionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['configuraciones'], meta: { name: 'configuraciones' } }
    /**
     * Find zero or one Configuraciones that matches the filter.
     * @param {configuracionesFindUniqueArgs} args - Arguments to find a Configuraciones
     * @example
     * // Get one Configuraciones
     * const configuraciones = await prisma.configuraciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends configuracionesFindUniqueArgs>(args: SelectSubset<T, configuracionesFindUniqueArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuraciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {configuracionesFindUniqueOrThrowArgs} args - Arguments to find a Configuraciones
     * @example
     * // Get one Configuraciones
     * const configuraciones = await prisma.configuraciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends configuracionesFindUniqueOrThrowArgs>(args: SelectSubset<T, configuracionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuraciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionesFindFirstArgs} args - Arguments to find a Configuraciones
     * @example
     * // Get one Configuraciones
     * const configuraciones = await prisma.configuraciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends configuracionesFindFirstArgs>(args?: SelectSubset<T, configuracionesFindFirstArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuraciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionesFindFirstOrThrowArgs} args - Arguments to find a Configuraciones
     * @example
     * // Get one Configuraciones
     * const configuraciones = await prisma.configuraciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends configuracionesFindFirstOrThrowArgs>(args?: SelectSubset<T, configuracionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configuraciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuraciones
     * const configuraciones = await prisma.configuraciones.findMany()
     * 
     * // Get first 10 Configuraciones
     * const configuraciones = await prisma.configuraciones.findMany({ take: 10 })
     * 
     * // Only select the `idConfiguracion`
     * const configuracionesWithIdConfiguracionOnly = await prisma.configuraciones.findMany({ select: { idConfiguracion: true } })
     * 
     */
    findMany<T extends configuracionesFindManyArgs>(args?: SelectSubset<T, configuracionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuraciones.
     * @param {configuracionesCreateArgs} args - Arguments to create a Configuraciones.
     * @example
     * // Create one Configuraciones
     * const Configuraciones = await prisma.configuraciones.create({
     *   data: {
     *     // ... data to create a Configuraciones
     *   }
     * })
     * 
     */
    create<T extends configuracionesCreateArgs>(args: SelectSubset<T, configuracionesCreateArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configuraciones.
     * @param {configuracionesCreateManyArgs} args - Arguments to create many Configuraciones.
     * @example
     * // Create many Configuraciones
     * const configuraciones = await prisma.configuraciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends configuracionesCreateManyArgs>(args?: SelectSubset<T, configuracionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Configuraciones.
     * @param {configuracionesDeleteArgs} args - Arguments to delete one Configuraciones.
     * @example
     * // Delete one Configuraciones
     * const Configuraciones = await prisma.configuraciones.delete({
     *   where: {
     *     // ... filter to delete one Configuraciones
     *   }
     * })
     * 
     */
    delete<T extends configuracionesDeleteArgs>(args: SelectSubset<T, configuracionesDeleteArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuraciones.
     * @param {configuracionesUpdateArgs} args - Arguments to update one Configuraciones.
     * @example
     * // Update one Configuraciones
     * const configuraciones = await prisma.configuraciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends configuracionesUpdateArgs>(args: SelectSubset<T, configuracionesUpdateArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configuraciones.
     * @param {configuracionesDeleteManyArgs} args - Arguments to filter Configuraciones to delete.
     * @example
     * // Delete a few Configuraciones
     * const { count } = await prisma.configuraciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends configuracionesDeleteManyArgs>(args?: SelectSubset<T, configuracionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuraciones
     * const configuraciones = await prisma.configuraciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends configuracionesUpdateManyArgs>(args: SelectSubset<T, configuracionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Configuraciones.
     * @param {configuracionesUpsertArgs} args - Arguments to update or create a Configuraciones.
     * @example
     * // Update or create a Configuraciones
     * const configuraciones = await prisma.configuraciones.upsert({
     *   create: {
     *     // ... data to create a Configuraciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuraciones we want to update
     *   }
     * })
     */
    upsert<T extends configuracionesUpsertArgs>(args: SelectSubset<T, configuracionesUpsertArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configuraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionesCountArgs} args - Arguments to filter Configuraciones to count.
     * @example
     * // Count the number of Configuraciones
     * const count = await prisma.configuraciones.count({
     *   where: {
     *     // ... the filter for the Configuraciones we want to count
     *   }
     * })
    **/
    count<T extends configuracionesCountArgs>(
      args?: Subset<T, configuracionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfiguracionesAggregateArgs>(args: Subset<T, ConfiguracionesAggregateArgs>): Prisma.PrismaPromise<GetConfiguracionesAggregateType<T>>

    /**
     * Group by Configuraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends configuracionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: configuracionesGroupByArgs['orderBy'] }
        : { orderBy?: configuracionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, configuracionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the configuraciones model
   */
  readonly fields: configuracionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for configuraciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__configuracionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrador<T extends administradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, administradorDefaultArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the configuraciones model
   */
  interface configuracionesFieldRefs {
    readonly idConfiguracion: FieldRef<"configuraciones", 'Int'>
    readonly idAdmin: FieldRef<"configuraciones", 'Int'>
    readonly nombre: FieldRef<"configuraciones", 'String'>
    readonly valor: FieldRef<"configuraciones", 'String'>
    readonly descripcion: FieldRef<"configuraciones", 'String'>
    readonly creado: FieldRef<"configuraciones", 'DateTime'>
    readonly actualizado: FieldRef<"configuraciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * configuraciones findUnique
   */
  export type configuracionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionesInclude<ExtArgs> | null
    /**
     * Filter, which configuraciones to fetch.
     */
    where: configuracionesWhereUniqueInput
  }

  /**
   * configuraciones findUniqueOrThrow
   */
  export type configuracionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionesInclude<ExtArgs> | null
    /**
     * Filter, which configuraciones to fetch.
     */
    where: configuracionesWhereUniqueInput
  }

  /**
   * configuraciones findFirst
   */
  export type configuracionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionesInclude<ExtArgs> | null
    /**
     * Filter, which configuraciones to fetch.
     */
    where?: configuracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuraciones to fetch.
     */
    orderBy?: configuracionesOrderByWithRelationInput | configuracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuraciones.
     */
    cursor?: configuracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuraciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuraciones.
     */
    distinct?: ConfiguracionesScalarFieldEnum | ConfiguracionesScalarFieldEnum[]
  }

  /**
   * configuraciones findFirstOrThrow
   */
  export type configuracionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionesInclude<ExtArgs> | null
    /**
     * Filter, which configuraciones to fetch.
     */
    where?: configuracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuraciones to fetch.
     */
    orderBy?: configuracionesOrderByWithRelationInput | configuracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuraciones.
     */
    cursor?: configuracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuraciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuraciones.
     */
    distinct?: ConfiguracionesScalarFieldEnum | ConfiguracionesScalarFieldEnum[]
  }

  /**
   * configuraciones findMany
   */
  export type configuracionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionesInclude<ExtArgs> | null
    /**
     * Filter, which configuraciones to fetch.
     */
    where?: configuracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuraciones to fetch.
     */
    orderBy?: configuracionesOrderByWithRelationInput | configuracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing configuraciones.
     */
    cursor?: configuracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuraciones.
     */
    skip?: number
    distinct?: ConfiguracionesScalarFieldEnum | ConfiguracionesScalarFieldEnum[]
  }

  /**
   * configuraciones create
   */
  export type configuracionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionesInclude<ExtArgs> | null
    /**
     * The data needed to create a configuraciones.
     */
    data: XOR<configuracionesCreateInput, configuracionesUncheckedCreateInput>
  }

  /**
   * configuraciones createMany
   */
  export type configuracionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many configuraciones.
     */
    data: configuracionesCreateManyInput | configuracionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * configuraciones update
   */
  export type configuracionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionesInclude<ExtArgs> | null
    /**
     * The data needed to update a configuraciones.
     */
    data: XOR<configuracionesUpdateInput, configuracionesUncheckedUpdateInput>
    /**
     * Choose, which configuraciones to update.
     */
    where: configuracionesWhereUniqueInput
  }

  /**
   * configuraciones updateMany
   */
  export type configuracionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update configuraciones.
     */
    data: XOR<configuracionesUpdateManyMutationInput, configuracionesUncheckedUpdateManyInput>
    /**
     * Filter which configuraciones to update
     */
    where?: configuracionesWhereInput
    /**
     * Limit how many configuraciones to update.
     */
    limit?: number
  }

  /**
   * configuraciones upsert
   */
  export type configuracionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionesInclude<ExtArgs> | null
    /**
     * The filter to search for the configuraciones to update in case it exists.
     */
    where: configuracionesWhereUniqueInput
    /**
     * In case the configuraciones found by the `where` argument doesn't exist, create a new configuraciones with this data.
     */
    create: XOR<configuracionesCreateInput, configuracionesUncheckedCreateInput>
    /**
     * In case the configuraciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<configuracionesUpdateInput, configuracionesUncheckedUpdateInput>
  }

  /**
   * configuraciones delete
   */
  export type configuracionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionesInclude<ExtArgs> | null
    /**
     * Filter which configuraciones to delete.
     */
    where: configuracionesWhereUniqueInput
  }

  /**
   * configuraciones deleteMany
   */
  export type configuracionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuraciones to delete
     */
    where?: configuracionesWhereInput
    /**
     * Limit how many configuraciones to delete.
     */
    limit?: number
  }

  /**
   * configuraciones without action
   */
  export type configuracionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionesInclude<ExtArgs> | null
  }


  /**
   * Model paginas
   */

  export type AggregatePaginas = {
    _count: PaginasCountAggregateOutputType | null
    _avg: PaginasAvgAggregateOutputType | null
    _sum: PaginasSumAggregateOutputType | null
    _min: PaginasMinAggregateOutputType | null
    _max: PaginasMaxAggregateOutputType | null
  }

  export type PaginasAvgAggregateOutputType = {
    idPagina: number | null
    idAdmin: number | null
  }

  export type PaginasSumAggregateOutputType = {
    idPagina: number | null
    idAdmin: number | null
  }

  export type PaginasMinAggregateOutputType = {
    idPagina: number | null
    idAdmin: number | null
    nombre: string | null
    contenido: string | null
    tipo: $Enums.paginas_tipo | null
    creado: Date | null
    actualizado: Date | null
  }

  export type PaginasMaxAggregateOutputType = {
    idPagina: number | null
    idAdmin: number | null
    nombre: string | null
    contenido: string | null
    tipo: $Enums.paginas_tipo | null
    creado: Date | null
    actualizado: Date | null
  }

  export type PaginasCountAggregateOutputType = {
    idPagina: number
    idAdmin: number
    nombre: number
    contenido: number
    tipo: number
    creado: number
    actualizado: number
    _all: number
  }


  export type PaginasAvgAggregateInputType = {
    idPagina?: true
    idAdmin?: true
  }

  export type PaginasSumAggregateInputType = {
    idPagina?: true
    idAdmin?: true
  }

  export type PaginasMinAggregateInputType = {
    idPagina?: true
    idAdmin?: true
    nombre?: true
    contenido?: true
    tipo?: true
    creado?: true
    actualizado?: true
  }

  export type PaginasMaxAggregateInputType = {
    idPagina?: true
    idAdmin?: true
    nombre?: true
    contenido?: true
    tipo?: true
    creado?: true
    actualizado?: true
  }

  export type PaginasCountAggregateInputType = {
    idPagina?: true
    idAdmin?: true
    nombre?: true
    contenido?: true
    tipo?: true
    creado?: true
    actualizado?: true
    _all?: true
  }

  export type PaginasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paginas to aggregate.
     */
    where?: paginasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paginas to fetch.
     */
    orderBy?: paginasOrderByWithRelationInput | paginasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paginasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paginas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paginas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned paginas
    **/
    _count?: true | PaginasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaginasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaginasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaginasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaginasMaxAggregateInputType
  }

  export type GetPaginasAggregateType<T extends PaginasAggregateArgs> = {
        [P in keyof T & keyof AggregatePaginas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaginas[P]>
      : GetScalarType<T[P], AggregatePaginas[P]>
  }




  export type paginasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paginasWhereInput
    orderBy?: paginasOrderByWithAggregationInput | paginasOrderByWithAggregationInput[]
    by: PaginasScalarFieldEnum[] | PaginasScalarFieldEnum
    having?: paginasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaginasCountAggregateInputType | true
    _avg?: PaginasAvgAggregateInputType
    _sum?: PaginasSumAggregateInputType
    _min?: PaginasMinAggregateInputType
    _max?: PaginasMaxAggregateInputType
  }

  export type PaginasGroupByOutputType = {
    idPagina: number
    idAdmin: number
    nombre: string
    contenido: string
    tipo: $Enums.paginas_tipo
    creado: Date
    actualizado: Date
    _count: PaginasCountAggregateOutputType | null
    _avg: PaginasAvgAggregateOutputType | null
    _sum: PaginasSumAggregateOutputType | null
    _min: PaginasMinAggregateOutputType | null
    _max: PaginasMaxAggregateOutputType | null
  }

  type GetPaginasGroupByPayload<T extends paginasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaginasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaginasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaginasGroupByOutputType[P]>
            : GetScalarType<T[P], PaginasGroupByOutputType[P]>
        }
      >
    >


  export type paginasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPagina?: boolean
    idAdmin?: boolean
    nombre?: boolean
    contenido?: boolean
    tipo?: boolean
    creado?: boolean
    actualizado?: boolean
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paginas"]>



  export type paginasSelectScalar = {
    idPagina?: boolean
    idAdmin?: boolean
    nombre?: boolean
    contenido?: boolean
    tipo?: boolean
    creado?: boolean
    actualizado?: boolean
  }

  export type paginasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPagina" | "idAdmin" | "nombre" | "contenido" | "tipo" | "creado" | "actualizado", ExtArgs["result"]["paginas"]>
  export type paginasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
  }

  export type $paginasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "paginas"
    objects: {
      administrador: Prisma.$administradorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idPagina: number
      idAdmin: number
      nombre: string
      contenido: string
      tipo: $Enums.paginas_tipo
      creado: Date
      actualizado: Date
    }, ExtArgs["result"]["paginas"]>
    composites: {}
  }

  type paginasGetPayload<S extends boolean | null | undefined | paginasDefaultArgs> = $Result.GetResult<Prisma.$paginasPayload, S>

  type paginasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paginasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaginasCountAggregateInputType | true
    }

  export interface paginasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['paginas'], meta: { name: 'paginas' } }
    /**
     * Find zero or one Paginas that matches the filter.
     * @param {paginasFindUniqueArgs} args - Arguments to find a Paginas
     * @example
     * // Get one Paginas
     * const paginas = await prisma.paginas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paginasFindUniqueArgs>(args: SelectSubset<T, paginasFindUniqueArgs<ExtArgs>>): Prisma__paginasClient<$Result.GetResult<Prisma.$paginasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paginas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paginasFindUniqueOrThrowArgs} args - Arguments to find a Paginas
     * @example
     * // Get one Paginas
     * const paginas = await prisma.paginas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paginasFindUniqueOrThrowArgs>(args: SelectSubset<T, paginasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paginasClient<$Result.GetResult<Prisma.$paginasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paginas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paginasFindFirstArgs} args - Arguments to find a Paginas
     * @example
     * // Get one Paginas
     * const paginas = await prisma.paginas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paginasFindFirstArgs>(args?: SelectSubset<T, paginasFindFirstArgs<ExtArgs>>): Prisma__paginasClient<$Result.GetResult<Prisma.$paginasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paginas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paginasFindFirstOrThrowArgs} args - Arguments to find a Paginas
     * @example
     * // Get one Paginas
     * const paginas = await prisma.paginas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paginasFindFirstOrThrowArgs>(args?: SelectSubset<T, paginasFindFirstOrThrowArgs<ExtArgs>>): Prisma__paginasClient<$Result.GetResult<Prisma.$paginasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paginas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paginasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paginas
     * const paginas = await prisma.paginas.findMany()
     * 
     * // Get first 10 Paginas
     * const paginas = await prisma.paginas.findMany({ take: 10 })
     * 
     * // Only select the `idPagina`
     * const paginasWithIdPaginaOnly = await prisma.paginas.findMany({ select: { idPagina: true } })
     * 
     */
    findMany<T extends paginasFindManyArgs>(args?: SelectSubset<T, paginasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paginasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paginas.
     * @param {paginasCreateArgs} args - Arguments to create a Paginas.
     * @example
     * // Create one Paginas
     * const Paginas = await prisma.paginas.create({
     *   data: {
     *     // ... data to create a Paginas
     *   }
     * })
     * 
     */
    create<T extends paginasCreateArgs>(args: SelectSubset<T, paginasCreateArgs<ExtArgs>>): Prisma__paginasClient<$Result.GetResult<Prisma.$paginasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paginas.
     * @param {paginasCreateManyArgs} args - Arguments to create many Paginas.
     * @example
     * // Create many Paginas
     * const paginas = await prisma.paginas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paginasCreateManyArgs>(args?: SelectSubset<T, paginasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Paginas.
     * @param {paginasDeleteArgs} args - Arguments to delete one Paginas.
     * @example
     * // Delete one Paginas
     * const Paginas = await prisma.paginas.delete({
     *   where: {
     *     // ... filter to delete one Paginas
     *   }
     * })
     * 
     */
    delete<T extends paginasDeleteArgs>(args: SelectSubset<T, paginasDeleteArgs<ExtArgs>>): Prisma__paginasClient<$Result.GetResult<Prisma.$paginasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paginas.
     * @param {paginasUpdateArgs} args - Arguments to update one Paginas.
     * @example
     * // Update one Paginas
     * const paginas = await prisma.paginas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paginasUpdateArgs>(args: SelectSubset<T, paginasUpdateArgs<ExtArgs>>): Prisma__paginasClient<$Result.GetResult<Prisma.$paginasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paginas.
     * @param {paginasDeleteManyArgs} args - Arguments to filter Paginas to delete.
     * @example
     * // Delete a few Paginas
     * const { count } = await prisma.paginas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paginasDeleteManyArgs>(args?: SelectSubset<T, paginasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paginas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paginasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paginas
     * const paginas = await prisma.paginas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paginasUpdateManyArgs>(args: SelectSubset<T, paginasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paginas.
     * @param {paginasUpsertArgs} args - Arguments to update or create a Paginas.
     * @example
     * // Update or create a Paginas
     * const paginas = await prisma.paginas.upsert({
     *   create: {
     *     // ... data to create a Paginas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paginas we want to update
     *   }
     * })
     */
    upsert<T extends paginasUpsertArgs>(args: SelectSubset<T, paginasUpsertArgs<ExtArgs>>): Prisma__paginasClient<$Result.GetResult<Prisma.$paginasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paginas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paginasCountArgs} args - Arguments to filter Paginas to count.
     * @example
     * // Count the number of Paginas
     * const count = await prisma.paginas.count({
     *   where: {
     *     // ... the filter for the Paginas we want to count
     *   }
     * })
    **/
    count<T extends paginasCountArgs>(
      args?: Subset<T, paginasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaginasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paginas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaginasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaginasAggregateArgs>(args: Subset<T, PaginasAggregateArgs>): Prisma.PrismaPromise<GetPaginasAggregateType<T>>

    /**
     * Group by Paginas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paginasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paginasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paginasGroupByArgs['orderBy'] }
        : { orderBy?: paginasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paginasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaginasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the paginas model
   */
  readonly fields: paginasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for paginas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paginasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrador<T extends administradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, administradorDefaultArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the paginas model
   */
  interface paginasFieldRefs {
    readonly idPagina: FieldRef<"paginas", 'Int'>
    readonly idAdmin: FieldRef<"paginas", 'Int'>
    readonly nombre: FieldRef<"paginas", 'String'>
    readonly contenido: FieldRef<"paginas", 'String'>
    readonly tipo: FieldRef<"paginas", 'paginas_tipo'>
    readonly creado: FieldRef<"paginas", 'DateTime'>
    readonly actualizado: FieldRef<"paginas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * paginas findUnique
   */
  export type paginasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paginas
     */
    select?: paginasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paginas
     */
    omit?: paginasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paginasInclude<ExtArgs> | null
    /**
     * Filter, which paginas to fetch.
     */
    where: paginasWhereUniqueInput
  }

  /**
   * paginas findUniqueOrThrow
   */
  export type paginasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paginas
     */
    select?: paginasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paginas
     */
    omit?: paginasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paginasInclude<ExtArgs> | null
    /**
     * Filter, which paginas to fetch.
     */
    where: paginasWhereUniqueInput
  }

  /**
   * paginas findFirst
   */
  export type paginasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paginas
     */
    select?: paginasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paginas
     */
    omit?: paginasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paginasInclude<ExtArgs> | null
    /**
     * Filter, which paginas to fetch.
     */
    where?: paginasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paginas to fetch.
     */
    orderBy?: paginasOrderByWithRelationInput | paginasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paginas.
     */
    cursor?: paginasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paginas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paginas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paginas.
     */
    distinct?: PaginasScalarFieldEnum | PaginasScalarFieldEnum[]
  }

  /**
   * paginas findFirstOrThrow
   */
  export type paginasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paginas
     */
    select?: paginasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paginas
     */
    omit?: paginasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paginasInclude<ExtArgs> | null
    /**
     * Filter, which paginas to fetch.
     */
    where?: paginasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paginas to fetch.
     */
    orderBy?: paginasOrderByWithRelationInput | paginasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paginas.
     */
    cursor?: paginasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paginas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paginas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paginas.
     */
    distinct?: PaginasScalarFieldEnum | PaginasScalarFieldEnum[]
  }

  /**
   * paginas findMany
   */
  export type paginasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paginas
     */
    select?: paginasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paginas
     */
    omit?: paginasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paginasInclude<ExtArgs> | null
    /**
     * Filter, which paginas to fetch.
     */
    where?: paginasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paginas to fetch.
     */
    orderBy?: paginasOrderByWithRelationInput | paginasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing paginas.
     */
    cursor?: paginasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paginas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paginas.
     */
    skip?: number
    distinct?: PaginasScalarFieldEnum | PaginasScalarFieldEnum[]
  }

  /**
   * paginas create
   */
  export type paginasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paginas
     */
    select?: paginasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paginas
     */
    omit?: paginasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paginasInclude<ExtArgs> | null
    /**
     * The data needed to create a paginas.
     */
    data: XOR<paginasCreateInput, paginasUncheckedCreateInput>
  }

  /**
   * paginas createMany
   */
  export type paginasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many paginas.
     */
    data: paginasCreateManyInput | paginasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * paginas update
   */
  export type paginasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paginas
     */
    select?: paginasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paginas
     */
    omit?: paginasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paginasInclude<ExtArgs> | null
    /**
     * The data needed to update a paginas.
     */
    data: XOR<paginasUpdateInput, paginasUncheckedUpdateInput>
    /**
     * Choose, which paginas to update.
     */
    where: paginasWhereUniqueInput
  }

  /**
   * paginas updateMany
   */
  export type paginasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update paginas.
     */
    data: XOR<paginasUpdateManyMutationInput, paginasUncheckedUpdateManyInput>
    /**
     * Filter which paginas to update
     */
    where?: paginasWhereInput
    /**
     * Limit how many paginas to update.
     */
    limit?: number
  }

  /**
   * paginas upsert
   */
  export type paginasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paginas
     */
    select?: paginasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paginas
     */
    omit?: paginasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paginasInclude<ExtArgs> | null
    /**
     * The filter to search for the paginas to update in case it exists.
     */
    where: paginasWhereUniqueInput
    /**
     * In case the paginas found by the `where` argument doesn't exist, create a new paginas with this data.
     */
    create: XOR<paginasCreateInput, paginasUncheckedCreateInput>
    /**
     * In case the paginas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paginasUpdateInput, paginasUncheckedUpdateInput>
  }

  /**
   * paginas delete
   */
  export type paginasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paginas
     */
    select?: paginasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paginas
     */
    omit?: paginasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paginasInclude<ExtArgs> | null
    /**
     * Filter which paginas to delete.
     */
    where: paginasWhereUniqueInput
  }

  /**
   * paginas deleteMany
   */
  export type paginasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paginas to delete
     */
    where?: paginasWhereInput
    /**
     * Limit how many paginas to delete.
     */
    limit?: number
  }

  /**
   * paginas without action
   */
  export type paginasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paginas
     */
    select?: paginasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paginas
     */
    omit?: paginasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paginasInclude<ExtArgs> | null
  }


  /**
   * Model productos
   */

  export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  export type ProductosAvgAggregateOutputType = {
    idProducto: number | null
    idCategoria: number | null
    idAdmin: number | null
    precio: Decimal | null
  }

  export type ProductosSumAggregateOutputType = {
    idProducto: number | null
    idCategoria: number | null
    idAdmin: number | null
    precio: Decimal | null
  }

  export type ProductosMinAggregateOutputType = {
    idProducto: number | null
    idCategoria: number | null
    idAdmin: number | null
    nombre: string | null
    descripcion: string | null
    imagen_url: string | null
    precio: Decimal | null
    creado: Date | null
    actualizado: Date | null
  }

  export type ProductosMaxAggregateOutputType = {
    idProducto: number | null
    idCategoria: number | null
    idAdmin: number | null
    nombre: string | null
    descripcion: string | null
    imagen_url: string | null
    precio: Decimal | null
    creado: Date | null
    actualizado: Date | null
  }

  export type ProductosCountAggregateOutputType = {
    idProducto: number
    idCategoria: number
    idAdmin: number
    nombre: number
    descripcion: number
    imagen_url: number
    precio: number
    creado: number
    actualizado: number
    _all: number
  }


  export type ProductosAvgAggregateInputType = {
    idProducto?: true
    idCategoria?: true
    idAdmin?: true
    precio?: true
  }

  export type ProductosSumAggregateInputType = {
    idProducto?: true
    idCategoria?: true
    idAdmin?: true
    precio?: true
  }

  export type ProductosMinAggregateInputType = {
    idProducto?: true
    idCategoria?: true
    idAdmin?: true
    nombre?: true
    descripcion?: true
    imagen_url?: true
    precio?: true
    creado?: true
    actualizado?: true
  }

  export type ProductosMaxAggregateInputType = {
    idProducto?: true
    idCategoria?: true
    idAdmin?: true
    nombre?: true
    descripcion?: true
    imagen_url?: true
    precio?: true
    creado?: true
    actualizado?: true
  }

  export type ProductosCountAggregateInputType = {
    idProducto?: true
    idCategoria?: true
    idAdmin?: true
    nombre?: true
    descripcion?: true
    imagen_url?: true
    precio?: true
    creado?: true
    actualizado?: true
    _all?: true
  }

  export type ProductosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to aggregate.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType
  }

  export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos[P]>
      : GetScalarType<T[P], AggregateProductos[P]>
  }




  export type productosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
    orderBy?: productosOrderByWithAggregationInput | productosOrderByWithAggregationInput[]
    by: ProductosScalarFieldEnum[] | ProductosScalarFieldEnum
    having?: productosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductosCountAggregateInputType | true
    _avg?: ProductosAvgAggregateInputType
    _sum?: ProductosSumAggregateInputType
    _min?: ProductosMinAggregateInputType
    _max?: ProductosMaxAggregateInputType
  }

  export type ProductosGroupByOutputType = {
    idProducto: number
    idCategoria: number
    idAdmin: number
    nombre: string
    descripcion: string
    imagen_url: string
    precio: Decimal | null
    creado: Date
    actualizado: Date
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  type GetProductosGroupByPayload<T extends productosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ProductosGroupByOutputType[P]>
        }
      >
    >


  export type productosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProducto?: boolean
    idCategoria?: boolean
    idAdmin?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagen_url?: boolean
    precio?: boolean
    creado?: boolean
    actualizado?: boolean
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>



  export type productosSelectScalar = {
    idProducto?: boolean
    idCategoria?: boolean
    idAdmin?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagen_url?: boolean
    precio?: boolean
    creado?: boolean
    actualizado?: boolean
  }

  export type productosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idProducto" | "idCategoria" | "idAdmin" | "nombre" | "descripcion" | "imagen_url" | "precio" | "creado" | "actualizado", ExtArgs["result"]["productos"]>
  export type productosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
  }

  export type $productosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productos"
    objects: {
      administrador: Prisma.$administradorPayload<ExtArgs>
      categorias: Prisma.$categoriasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idProducto: number
      idCategoria: number
      idAdmin: number
      nombre: string
      descripcion: string
      imagen_url: string
      precio: Prisma.Decimal | null
      creado: Date
      actualizado: Date
    }, ExtArgs["result"]["productos"]>
    composites: {}
  }

  type productosGetPayload<S extends boolean | null | undefined | productosDefaultArgs> = $Result.GetResult<Prisma.$productosPayload, S>

  type productosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductosCountAggregateInputType | true
    }

  export interface productosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productos'], meta: { name: 'productos' } }
    /**
     * Find zero or one Productos that matches the filter.
     * @param {productosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productosFindUniqueArgs>(args: SelectSubset<T, productosFindUniqueArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productosFindUniqueOrThrowArgs>(args: SelectSubset<T, productosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productosFindFirstArgs>(args?: SelectSubset<T, productosFindFirstArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productosFindFirstOrThrowArgs>(args?: SelectSubset<T, productosFindFirstOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     * 
     * // Only select the `idProducto`
     * const productosWithIdProductoOnly = await prisma.productos.findMany({ select: { idProducto: true } })
     * 
     */
    findMany<T extends productosFindManyArgs>(args?: SelectSubset<T, productosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productos.
     * @param {productosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     * 
     */
    create<T extends productosCreateArgs>(args: SelectSubset<T, productosCreateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {productosCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productosCreateManyArgs>(args?: SelectSubset<T, productosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Productos.
     * @param {productosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     * 
     */
    delete<T extends productosDeleteArgs>(args: SelectSubset<T, productosDeleteArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productos.
     * @param {productosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productosUpdateArgs>(args: SelectSubset<T, productosUpdateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {productosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productosDeleteManyArgs>(args?: SelectSubset<T, productosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productosUpdateManyArgs>(args: SelectSubset<T, productosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Productos.
     * @param {productosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
     */
    upsert<T extends productosUpsertArgs>(args: SelectSubset<T, productosUpsertArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productosCountArgs>(
      args?: Subset<T, productosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductosAggregateArgs>(args: Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>

    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productosGroupByArgs['orderBy'] }
        : { orderBy?: productosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productos model
   */
  readonly fields: productosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrador<T extends administradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, administradorDefaultArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categorias<T extends categoriasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriasDefaultArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the productos model
   */
  interface productosFieldRefs {
    readonly idProducto: FieldRef<"productos", 'Int'>
    readonly idCategoria: FieldRef<"productos", 'Int'>
    readonly idAdmin: FieldRef<"productos", 'Int'>
    readonly nombre: FieldRef<"productos", 'String'>
    readonly descripcion: FieldRef<"productos", 'String'>
    readonly imagen_url: FieldRef<"productos", 'String'>
    readonly precio: FieldRef<"productos", 'Decimal'>
    readonly creado: FieldRef<"productos", 'DateTime'>
    readonly actualizado: FieldRef<"productos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * productos findUnique
   */
  export type productosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findUniqueOrThrow
   */
  export type productosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findFirst
   */
  export type productosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findFirstOrThrow
   */
  export type productosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findMany
   */
  export type productosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos create
   */
  export type productosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to create a productos.
     */
    data: XOR<productosCreateInput, productosUncheckedCreateInput>
  }

  /**
   * productos createMany
   */
  export type productosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos.
     */
    data: productosCreateManyInput | productosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productos update
   */
  export type productosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to update a productos.
     */
    data: XOR<productosUpdateInput, productosUncheckedUpdateInput>
    /**
     * Choose, which productos to update.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos updateMany
   */
  export type productosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos.
     */
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * productos upsert
   */
  export type productosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The filter to search for the productos to update in case it exists.
     */
    where: productosWhereUniqueInput
    /**
     * In case the productos found by the `where` argument doesn't exist, create a new productos with this data.
     */
    create: XOR<productosCreateInput, productosUncheckedCreateInput>
    /**
     * In case the productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productosUpdateInput, productosUncheckedUpdateInput>
  }

  /**
   * productos delete
   */
  export type productosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter which productos to delete.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos deleteMany
   */
  export type productosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to delete
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to delete.
     */
    limit?: number
  }

  /**
   * productos without action
   */
  export type productosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
  }


  /**
   * Model servicios
   */

  export type AggregateServicios = {
    _count: ServiciosCountAggregateOutputType | null
    _avg: ServiciosAvgAggregateOutputType | null
    _sum: ServiciosSumAggregateOutputType | null
    _min: ServiciosMinAggregateOutputType | null
    _max: ServiciosMaxAggregateOutputType | null
  }

  export type ServiciosAvgAggregateOutputType = {
    idServicio: number | null
    idAdmin: number | null
  }

  export type ServiciosSumAggregateOutputType = {
    idServicio: number | null
    idAdmin: number | null
  }

  export type ServiciosMinAggregateOutputType = {
    idServicio: number | null
    idAdmin: number | null
    nombre: string | null
    descripcion: string | null
    creado: Date | null
    actualizado: Date | null
  }

  export type ServiciosMaxAggregateOutputType = {
    idServicio: number | null
    idAdmin: number | null
    nombre: string | null
    descripcion: string | null
    creado: Date | null
    actualizado: Date | null
  }

  export type ServiciosCountAggregateOutputType = {
    idServicio: number
    idAdmin: number
    nombre: number
    descripcion: number
    creado: number
    actualizado: number
    _all: number
  }


  export type ServiciosAvgAggregateInputType = {
    idServicio?: true
    idAdmin?: true
  }

  export type ServiciosSumAggregateInputType = {
    idServicio?: true
    idAdmin?: true
  }

  export type ServiciosMinAggregateInputType = {
    idServicio?: true
    idAdmin?: true
    nombre?: true
    descripcion?: true
    creado?: true
    actualizado?: true
  }

  export type ServiciosMaxAggregateInputType = {
    idServicio?: true
    idAdmin?: true
    nombre?: true
    descripcion?: true
    creado?: true
    actualizado?: true
  }

  export type ServiciosCountAggregateInputType = {
    idServicio?: true
    idAdmin?: true
    nombre?: true
    descripcion?: true
    creado?: true
    actualizado?: true
    _all?: true
  }

  export type ServiciosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicios to aggregate.
     */
    where?: serviciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: serviciosOrderByWithRelationInput | serviciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: serviciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servicios
    **/
    _count?: true | ServiciosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiciosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiciosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiciosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiciosMaxAggregateInputType
  }

  export type GetServiciosAggregateType<T extends ServiciosAggregateArgs> = {
        [P in keyof T & keyof AggregateServicios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicios[P]>
      : GetScalarType<T[P], AggregateServicios[P]>
  }




  export type serviciosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serviciosWhereInput
    orderBy?: serviciosOrderByWithAggregationInput | serviciosOrderByWithAggregationInput[]
    by: ServiciosScalarFieldEnum[] | ServiciosScalarFieldEnum
    having?: serviciosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiciosCountAggregateInputType | true
    _avg?: ServiciosAvgAggregateInputType
    _sum?: ServiciosSumAggregateInputType
    _min?: ServiciosMinAggregateInputType
    _max?: ServiciosMaxAggregateInputType
  }

  export type ServiciosGroupByOutputType = {
    idServicio: number
    idAdmin: number
    nombre: string
    descripcion: string
    creado: Date
    actualizado: Date
    _count: ServiciosCountAggregateOutputType | null
    _avg: ServiciosAvgAggregateOutputType | null
    _sum: ServiciosSumAggregateOutputType | null
    _min: ServiciosMinAggregateOutputType | null
    _max: ServiciosMaxAggregateOutputType | null
  }

  type GetServiciosGroupByPayload<T extends serviciosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiciosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiciosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiciosGroupByOutputType[P]>
            : GetScalarType<T[P], ServiciosGroupByOutputType[P]>
        }
      >
    >


  export type serviciosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idServicio?: boolean
    idAdmin?: boolean
    nombre?: boolean
    descripcion?: boolean
    creado?: boolean
    actualizado?: boolean
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicios"]>



  export type serviciosSelectScalar = {
    idServicio?: boolean
    idAdmin?: boolean
    nombre?: boolean
    descripcion?: boolean
    creado?: boolean
    actualizado?: boolean
  }

  export type serviciosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idServicio" | "idAdmin" | "nombre" | "descripcion" | "creado" | "actualizado", ExtArgs["result"]["servicios"]>
  export type serviciosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
  }

  export type $serviciosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servicios"
    objects: {
      administrador: Prisma.$administradorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idServicio: number
      idAdmin: number
      nombre: string
      descripcion: string
      creado: Date
      actualizado: Date
    }, ExtArgs["result"]["servicios"]>
    composites: {}
  }

  type serviciosGetPayload<S extends boolean | null | undefined | serviciosDefaultArgs> = $Result.GetResult<Prisma.$serviciosPayload, S>

  type serviciosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<serviciosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiciosCountAggregateInputType | true
    }

  export interface serviciosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servicios'], meta: { name: 'servicios' } }
    /**
     * Find zero or one Servicios that matches the filter.
     * @param {serviciosFindUniqueArgs} args - Arguments to find a Servicios
     * @example
     * // Get one Servicios
     * const servicios = await prisma.servicios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends serviciosFindUniqueArgs>(args: SelectSubset<T, serviciosFindUniqueArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {serviciosFindUniqueOrThrowArgs} args - Arguments to find a Servicios
     * @example
     * // Get one Servicios
     * const servicios = await prisma.servicios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends serviciosFindUniqueOrThrowArgs>(args: SelectSubset<T, serviciosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviciosFindFirstArgs} args - Arguments to find a Servicios
     * @example
     * // Get one Servicios
     * const servicios = await prisma.servicios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends serviciosFindFirstArgs>(args?: SelectSubset<T, serviciosFindFirstArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviciosFindFirstOrThrowArgs} args - Arguments to find a Servicios
     * @example
     * // Get one Servicios
     * const servicios = await prisma.servicios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends serviciosFindFirstOrThrowArgs>(args?: SelectSubset<T, serviciosFindFirstOrThrowArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviciosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicios
     * const servicios = await prisma.servicios.findMany()
     * 
     * // Get first 10 Servicios
     * const servicios = await prisma.servicios.findMany({ take: 10 })
     * 
     * // Only select the `idServicio`
     * const serviciosWithIdServicioOnly = await prisma.servicios.findMany({ select: { idServicio: true } })
     * 
     */
    findMany<T extends serviciosFindManyArgs>(args?: SelectSubset<T, serviciosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicios.
     * @param {serviciosCreateArgs} args - Arguments to create a Servicios.
     * @example
     * // Create one Servicios
     * const Servicios = await prisma.servicios.create({
     *   data: {
     *     // ... data to create a Servicios
     *   }
     * })
     * 
     */
    create<T extends serviciosCreateArgs>(args: SelectSubset<T, serviciosCreateArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicios.
     * @param {serviciosCreateManyArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicios = await prisma.servicios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends serviciosCreateManyArgs>(args?: SelectSubset<T, serviciosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servicios.
     * @param {serviciosDeleteArgs} args - Arguments to delete one Servicios.
     * @example
     * // Delete one Servicios
     * const Servicios = await prisma.servicios.delete({
     *   where: {
     *     // ... filter to delete one Servicios
     *   }
     * })
     * 
     */
    delete<T extends serviciosDeleteArgs>(args: SelectSubset<T, serviciosDeleteArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicios.
     * @param {serviciosUpdateArgs} args - Arguments to update one Servicios.
     * @example
     * // Update one Servicios
     * const servicios = await prisma.servicios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends serviciosUpdateArgs>(args: SelectSubset<T, serviciosUpdateArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicios.
     * @param {serviciosDeleteManyArgs} args - Arguments to filter Servicios to delete.
     * @example
     * // Delete a few Servicios
     * const { count } = await prisma.servicios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends serviciosDeleteManyArgs>(args?: SelectSubset<T, serviciosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviciosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicios
     * const servicios = await prisma.servicios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends serviciosUpdateManyArgs>(args: SelectSubset<T, serviciosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servicios.
     * @param {serviciosUpsertArgs} args - Arguments to update or create a Servicios.
     * @example
     * // Update or create a Servicios
     * const servicios = await prisma.servicios.upsert({
     *   create: {
     *     // ... data to create a Servicios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicios we want to update
     *   }
     * })
     */
    upsert<T extends serviciosUpsertArgs>(args: SelectSubset<T, serviciosUpsertArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviciosCountArgs} args - Arguments to filter Servicios to count.
     * @example
     * // Count the number of Servicios
     * const count = await prisma.servicios.count({
     *   where: {
     *     // ... the filter for the Servicios we want to count
     *   }
     * })
    **/
    count<T extends serviciosCountArgs>(
      args?: Subset<T, serviciosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiciosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiciosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiciosAggregateArgs>(args: Subset<T, ServiciosAggregateArgs>): Prisma.PrismaPromise<GetServiciosAggregateType<T>>

    /**
     * Group by Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviciosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends serviciosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: serviciosGroupByArgs['orderBy'] }
        : { orderBy?: serviciosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, serviciosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiciosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servicios model
   */
  readonly fields: serviciosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servicios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__serviciosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrador<T extends administradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, administradorDefaultArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the servicios model
   */
  interface serviciosFieldRefs {
    readonly idServicio: FieldRef<"servicios", 'Int'>
    readonly idAdmin: FieldRef<"servicios", 'Int'>
    readonly nombre: FieldRef<"servicios", 'String'>
    readonly descripcion: FieldRef<"servicios", 'String'>
    readonly creado: FieldRef<"servicios", 'DateTime'>
    readonly actualizado: FieldRef<"servicios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * servicios findUnique
   */
  export type serviciosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * Filter, which servicios to fetch.
     */
    where: serviciosWhereUniqueInput
  }

  /**
   * servicios findUniqueOrThrow
   */
  export type serviciosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * Filter, which servicios to fetch.
     */
    where: serviciosWhereUniqueInput
  }

  /**
   * servicios findFirst
   */
  export type serviciosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * Filter, which servicios to fetch.
     */
    where?: serviciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: serviciosOrderByWithRelationInput | serviciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicios.
     */
    cursor?: serviciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicios.
     */
    distinct?: ServiciosScalarFieldEnum | ServiciosScalarFieldEnum[]
  }

  /**
   * servicios findFirstOrThrow
   */
  export type serviciosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * Filter, which servicios to fetch.
     */
    where?: serviciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: serviciosOrderByWithRelationInput | serviciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicios.
     */
    cursor?: serviciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicios.
     */
    distinct?: ServiciosScalarFieldEnum | ServiciosScalarFieldEnum[]
  }

  /**
   * servicios findMany
   */
  export type serviciosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * Filter, which servicios to fetch.
     */
    where?: serviciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: serviciosOrderByWithRelationInput | serviciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servicios.
     */
    cursor?: serviciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    distinct?: ServiciosScalarFieldEnum | ServiciosScalarFieldEnum[]
  }

  /**
   * servicios create
   */
  export type serviciosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * The data needed to create a servicios.
     */
    data: XOR<serviciosCreateInput, serviciosUncheckedCreateInput>
  }

  /**
   * servicios createMany
   */
  export type serviciosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servicios.
     */
    data: serviciosCreateManyInput | serviciosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicios update
   */
  export type serviciosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * The data needed to update a servicios.
     */
    data: XOR<serviciosUpdateInput, serviciosUncheckedUpdateInput>
    /**
     * Choose, which servicios to update.
     */
    where: serviciosWhereUniqueInput
  }

  /**
   * servicios updateMany
   */
  export type serviciosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servicios.
     */
    data: XOR<serviciosUpdateManyMutationInput, serviciosUncheckedUpdateManyInput>
    /**
     * Filter which servicios to update
     */
    where?: serviciosWhereInput
    /**
     * Limit how many servicios to update.
     */
    limit?: number
  }

  /**
   * servicios upsert
   */
  export type serviciosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * The filter to search for the servicios to update in case it exists.
     */
    where: serviciosWhereUniqueInput
    /**
     * In case the servicios found by the `where` argument doesn't exist, create a new servicios with this data.
     */
    create: XOR<serviciosCreateInput, serviciosUncheckedCreateInput>
    /**
     * In case the servicios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serviciosUpdateInput, serviciosUncheckedUpdateInput>
  }

  /**
   * servicios delete
   */
  export type serviciosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * Filter which servicios to delete.
     */
    where: serviciosWhereUniqueInput
  }

  /**
   * servicios deleteMany
   */
  export type serviciosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicios to delete
     */
    where?: serviciosWhereInput
    /**
     * Limit how many servicios to delete.
     */
    limit?: number
  }

  /**
   * servicios without action
   */
  export type serviciosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdministradorScalarFieldEnum: {
    idAdmin: 'idAdmin',
    usuario: 'usuario',
    contrase_a: 'contrase_a',
    correo: 'correo',
    rol: 'rol',
    creado: 'creado',
    actualizado: 'actualizado'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const CategoriasScalarFieldEnum: {
    idCategoria: 'idCategoria',
    idAdmin: 'idAdmin',
    nombre: 'nombre',
    descripcion: 'descripcion',
    creado: 'creado',
    actualizado: 'actualizado'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const ClientesScalarFieldEnum: {
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

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const ConfiguracionesScalarFieldEnum: {
    idConfiguracion: 'idConfiguracion',
    idAdmin: 'idAdmin',
    nombre: 'nombre',
    valor: 'valor',
    descripcion: 'descripcion',
    creado: 'creado',
    actualizado: 'actualizado'
  };

  export type ConfiguracionesScalarFieldEnum = (typeof ConfiguracionesScalarFieldEnum)[keyof typeof ConfiguracionesScalarFieldEnum]


  export const PaginasScalarFieldEnum: {
    idPagina: 'idPagina',
    idAdmin: 'idAdmin',
    nombre: 'nombre',
    contenido: 'contenido',
    tipo: 'tipo',
    creado: 'creado',
    actualizado: 'actualizado'
  };

  export type PaginasScalarFieldEnum = (typeof PaginasScalarFieldEnum)[keyof typeof PaginasScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
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

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const ServiciosScalarFieldEnum: {
    idServicio: 'idServicio',
    idAdmin: 'idAdmin',
    nombre: 'nombre',
    descripcion: 'descripcion',
    creado: 'creado',
    actualizado: 'actualizado'
  };

  export type ServiciosScalarFieldEnum = (typeof ServiciosScalarFieldEnum)[keyof typeof ServiciosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const administradorOrderByRelevanceFieldEnum: {
    usuario: 'usuario',
    contrase_a: 'contrase_a',
    correo: 'correo'
  };

  export type administradorOrderByRelevanceFieldEnum = (typeof administradorOrderByRelevanceFieldEnum)[keyof typeof administradorOrderByRelevanceFieldEnum]


  export const categoriasOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type categoriasOrderByRelevanceFieldEnum = (typeof categoriasOrderByRelevanceFieldEnum)[keyof typeof categoriasOrderByRelevanceFieldEnum]


  export const clientesOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    apellido: 'apellido',
    correo: 'correo',
    contrase_a: 'contrase_a',
    telefono: 'telefono',
    direccion: 'direccion',
    ciudad: 'ciudad',
    mensaje: 'mensaje'
  };

  export type clientesOrderByRelevanceFieldEnum = (typeof clientesOrderByRelevanceFieldEnum)[keyof typeof clientesOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const configuracionesOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    valor: 'valor',
    descripcion: 'descripcion'
  };

  export type configuracionesOrderByRelevanceFieldEnum = (typeof configuracionesOrderByRelevanceFieldEnum)[keyof typeof configuracionesOrderByRelevanceFieldEnum]


  export const paginasOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    contenido: 'contenido'
  };

  export type paginasOrderByRelevanceFieldEnum = (typeof paginasOrderByRelevanceFieldEnum)[keyof typeof paginasOrderByRelevanceFieldEnum]


  export const productosOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    imagen_url: 'imagen_url'
  };

  export type productosOrderByRelevanceFieldEnum = (typeof productosOrderByRelevanceFieldEnum)[keyof typeof productosOrderByRelevanceFieldEnum]


  export const serviciosOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type serviciosOrderByRelevanceFieldEnum = (typeof serviciosOrderByRelevanceFieldEnum)[keyof typeof serviciosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'administrador_rol'
   */
  export type Enumadministrador_rolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'administrador_rol'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'paginas_tipo'
   */
  export type Enumpaginas_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'paginas_tipo'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type administradorWhereInput = {
    AND?: administradorWhereInput | administradorWhereInput[]
    OR?: administradorWhereInput[]
    NOT?: administradorWhereInput | administradorWhereInput[]
    idAdmin?: IntFilter<"administrador"> | number
    usuario?: StringFilter<"administrador"> | string
    contrase_a?: StringFilter<"administrador"> | string
    correo?: StringFilter<"administrador"> | string
    rol?: Enumadministrador_rolFilter<"administrador"> | $Enums.administrador_rol
    creado?: DateTimeFilter<"administrador"> | Date | string
    actualizado?: DateTimeFilter<"administrador"> | Date | string
    categorias?: CategoriasListRelationFilter
    clientes?: ClientesListRelationFilter
    configuraciones?: ConfiguracionesListRelationFilter
    paginas?: PaginasListRelationFilter
    productos?: ProductosListRelationFilter
    servicios?: ServiciosListRelationFilter
  }

  export type administradorOrderByWithRelationInput = {
    idAdmin?: SortOrder
    usuario?: SortOrder
    contrase_a?: SortOrder
    correo?: SortOrder
    rol?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
    categorias?: categoriasOrderByRelationAggregateInput
    clientes?: clientesOrderByRelationAggregateInput
    configuraciones?: configuracionesOrderByRelationAggregateInput
    paginas?: paginasOrderByRelationAggregateInput
    productos?: productosOrderByRelationAggregateInput
    servicios?: serviciosOrderByRelationAggregateInput
    _relevance?: administradorOrderByRelevanceInput
  }

  export type administradorWhereUniqueInput = Prisma.AtLeast<{
    idAdmin?: number
    usuario?: string
    AND?: administradorWhereInput | administradorWhereInput[]
    OR?: administradorWhereInput[]
    NOT?: administradorWhereInput | administradorWhereInput[]
    contrase_a?: StringFilter<"administrador"> | string
    correo?: StringFilter<"administrador"> | string
    rol?: Enumadministrador_rolFilter<"administrador"> | $Enums.administrador_rol
    creado?: DateTimeFilter<"administrador"> | Date | string
    actualizado?: DateTimeFilter<"administrador"> | Date | string
    categorias?: CategoriasListRelationFilter
    clientes?: ClientesListRelationFilter
    configuraciones?: ConfiguracionesListRelationFilter
    paginas?: PaginasListRelationFilter
    productos?: ProductosListRelationFilter
    servicios?: ServiciosListRelationFilter
  }, "idAdmin" | "usuario">

  export type administradorOrderByWithAggregationInput = {
    idAdmin?: SortOrder
    usuario?: SortOrder
    contrase_a?: SortOrder
    correo?: SortOrder
    rol?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
    _count?: administradorCountOrderByAggregateInput
    _avg?: administradorAvgOrderByAggregateInput
    _max?: administradorMaxOrderByAggregateInput
    _min?: administradorMinOrderByAggregateInput
    _sum?: administradorSumOrderByAggregateInput
  }

  export type administradorScalarWhereWithAggregatesInput = {
    AND?: administradorScalarWhereWithAggregatesInput | administradorScalarWhereWithAggregatesInput[]
    OR?: administradorScalarWhereWithAggregatesInput[]
    NOT?: administradorScalarWhereWithAggregatesInput | administradorScalarWhereWithAggregatesInput[]
    idAdmin?: IntWithAggregatesFilter<"administrador"> | number
    usuario?: StringWithAggregatesFilter<"administrador"> | string
    contrase_a?: StringWithAggregatesFilter<"administrador"> | string
    correo?: StringWithAggregatesFilter<"administrador"> | string
    rol?: Enumadministrador_rolWithAggregatesFilter<"administrador"> | $Enums.administrador_rol
    creado?: DateTimeWithAggregatesFilter<"administrador"> | Date | string
    actualizado?: DateTimeWithAggregatesFilter<"administrador"> | Date | string
  }

  export type categoriasWhereInput = {
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    idCategoria?: IntFilter<"categorias"> | number
    idAdmin?: IntFilter<"categorias"> | number
    nombre?: StringFilter<"categorias"> | string
    descripcion?: StringFilter<"categorias"> | string
    creado?: DateTimeFilter<"categorias"> | Date | string
    actualizado?: DateTimeFilter<"categorias"> | Date | string
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
    productos?: ProductosListRelationFilter
  }

  export type categoriasOrderByWithRelationInput = {
    idCategoria?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
    administrador?: administradorOrderByWithRelationInput
    productos?: productosOrderByRelationAggregateInput
    _relevance?: categoriasOrderByRelevanceInput
  }

  export type categoriasWhereUniqueInput = Prisma.AtLeast<{
    idCategoria?: number
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    idAdmin?: IntFilter<"categorias"> | number
    nombre?: StringFilter<"categorias"> | string
    descripcion?: StringFilter<"categorias"> | string
    creado?: DateTimeFilter<"categorias"> | Date | string
    actualizado?: DateTimeFilter<"categorias"> | Date | string
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
    productos?: ProductosListRelationFilter
  }, "idCategoria">

  export type categoriasOrderByWithAggregationInput = {
    idCategoria?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
    _count?: categoriasCountOrderByAggregateInput
    _avg?: categoriasAvgOrderByAggregateInput
    _max?: categoriasMaxOrderByAggregateInput
    _min?: categoriasMinOrderByAggregateInput
    _sum?: categoriasSumOrderByAggregateInput
  }

  export type categoriasScalarWhereWithAggregatesInput = {
    AND?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    OR?: categoriasScalarWhereWithAggregatesInput[]
    NOT?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    idCategoria?: IntWithAggregatesFilter<"categorias"> | number
    idAdmin?: IntWithAggregatesFilter<"categorias"> | number
    nombre?: StringWithAggregatesFilter<"categorias"> | string
    descripcion?: StringWithAggregatesFilter<"categorias"> | string
    creado?: DateTimeWithAggregatesFilter<"categorias"> | Date | string
    actualizado?: DateTimeWithAggregatesFilter<"categorias"> | Date | string
  }

  export type clientesWhereInput = {
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    idCliente?: IntFilter<"clientes"> | number
    idAdmin?: IntFilter<"clientes"> | number
    nombre?: StringFilter<"clientes"> | string
    apellido?: StringFilter<"clientes"> | string
    correo?: StringFilter<"clientes"> | string
    contrase_a?: StringFilter<"clientes"> | string
    telefono?: StringFilter<"clientes"> | string
    direccion?: StringFilter<"clientes"> | string
    ciudad?: StringFilter<"clientes"> | string
    mensaje?: StringFilter<"clientes"> | string
    fecha?: DateTimeFilter<"clientes"> | Date | string
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
  }

  export type clientesOrderByWithRelationInput = {
    idCliente?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrase_a?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrder
    administrador?: administradorOrderByWithRelationInput
    _relevance?: clientesOrderByRelevanceInput
  }

  export type clientesWhereUniqueInput = Prisma.AtLeast<{
    idCliente?: number
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    idAdmin?: IntFilter<"clientes"> | number
    nombre?: StringFilter<"clientes"> | string
    apellido?: StringFilter<"clientes"> | string
    correo?: StringFilter<"clientes"> | string
    contrase_a?: StringFilter<"clientes"> | string
    telefono?: StringFilter<"clientes"> | string
    direccion?: StringFilter<"clientes"> | string
    ciudad?: StringFilter<"clientes"> | string
    mensaje?: StringFilter<"clientes"> | string
    fecha?: DateTimeFilter<"clientes"> | Date | string
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
  }, "idCliente">

  export type clientesOrderByWithAggregationInput = {
    idCliente?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrase_a?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrder
    _count?: clientesCountOrderByAggregateInput
    _avg?: clientesAvgOrderByAggregateInput
    _max?: clientesMaxOrderByAggregateInput
    _min?: clientesMinOrderByAggregateInput
    _sum?: clientesSumOrderByAggregateInput
  }

  export type clientesScalarWhereWithAggregatesInput = {
    AND?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    OR?: clientesScalarWhereWithAggregatesInput[]
    NOT?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    idCliente?: IntWithAggregatesFilter<"clientes"> | number
    idAdmin?: IntWithAggregatesFilter<"clientes"> | number
    nombre?: StringWithAggregatesFilter<"clientes"> | string
    apellido?: StringWithAggregatesFilter<"clientes"> | string
    correo?: StringWithAggregatesFilter<"clientes"> | string
    contrase_a?: StringWithAggregatesFilter<"clientes"> | string
    telefono?: StringWithAggregatesFilter<"clientes"> | string
    direccion?: StringWithAggregatesFilter<"clientes"> | string
    ciudad?: StringWithAggregatesFilter<"clientes"> | string
    mensaje?: StringWithAggregatesFilter<"clientes"> | string
    fecha?: DateTimeWithAggregatesFilter<"clientes"> | Date | string
  }

  export type configuracionesWhereInput = {
    AND?: configuracionesWhereInput | configuracionesWhereInput[]
    OR?: configuracionesWhereInput[]
    NOT?: configuracionesWhereInput | configuracionesWhereInput[]
    idConfiguracion?: IntFilter<"configuraciones"> | number
    idAdmin?: IntFilter<"configuraciones"> | number
    nombre?: StringFilter<"configuraciones"> | string
    valor?: StringFilter<"configuraciones"> | string
    descripcion?: StringNullableFilter<"configuraciones"> | string | null
    creado?: DateTimeFilter<"configuraciones"> | Date | string
    actualizado?: DateTimeFilter<"configuraciones"> | Date | string
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
  }

  export type configuracionesOrderByWithRelationInput = {
    idConfiguracion?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
    administrador?: administradorOrderByWithRelationInput
    _relevance?: configuracionesOrderByRelevanceInput
  }

  export type configuracionesWhereUniqueInput = Prisma.AtLeast<{
    idConfiguracion?: number
    nombre?: string
    AND?: configuracionesWhereInput | configuracionesWhereInput[]
    OR?: configuracionesWhereInput[]
    NOT?: configuracionesWhereInput | configuracionesWhereInput[]
    idAdmin?: IntFilter<"configuraciones"> | number
    valor?: StringFilter<"configuraciones"> | string
    descripcion?: StringNullableFilter<"configuraciones"> | string | null
    creado?: DateTimeFilter<"configuraciones"> | Date | string
    actualizado?: DateTimeFilter<"configuraciones"> | Date | string
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
  }, "idConfiguracion" | "nombre">

  export type configuracionesOrderByWithAggregationInput = {
    idConfiguracion?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
    _count?: configuracionesCountOrderByAggregateInput
    _avg?: configuracionesAvgOrderByAggregateInput
    _max?: configuracionesMaxOrderByAggregateInput
    _min?: configuracionesMinOrderByAggregateInput
    _sum?: configuracionesSumOrderByAggregateInput
  }

  export type configuracionesScalarWhereWithAggregatesInput = {
    AND?: configuracionesScalarWhereWithAggregatesInput | configuracionesScalarWhereWithAggregatesInput[]
    OR?: configuracionesScalarWhereWithAggregatesInput[]
    NOT?: configuracionesScalarWhereWithAggregatesInput | configuracionesScalarWhereWithAggregatesInput[]
    idConfiguracion?: IntWithAggregatesFilter<"configuraciones"> | number
    idAdmin?: IntWithAggregatesFilter<"configuraciones"> | number
    nombre?: StringWithAggregatesFilter<"configuraciones"> | string
    valor?: StringWithAggregatesFilter<"configuraciones"> | string
    descripcion?: StringNullableWithAggregatesFilter<"configuraciones"> | string | null
    creado?: DateTimeWithAggregatesFilter<"configuraciones"> | Date | string
    actualizado?: DateTimeWithAggregatesFilter<"configuraciones"> | Date | string
  }

  export type paginasWhereInput = {
    AND?: paginasWhereInput | paginasWhereInput[]
    OR?: paginasWhereInput[]
    NOT?: paginasWhereInput | paginasWhereInput[]
    idPagina?: IntFilter<"paginas"> | number
    idAdmin?: IntFilter<"paginas"> | number
    nombre?: StringFilter<"paginas"> | string
    contenido?: StringFilter<"paginas"> | string
    tipo?: Enumpaginas_tipoFilter<"paginas"> | $Enums.paginas_tipo
    creado?: DateTimeFilter<"paginas"> | Date | string
    actualizado?: DateTimeFilter<"paginas"> | Date | string
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
  }

  export type paginasOrderByWithRelationInput = {
    idPagina?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    contenido?: SortOrder
    tipo?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
    administrador?: administradorOrderByWithRelationInput
    _relevance?: paginasOrderByRelevanceInput
  }

  export type paginasWhereUniqueInput = Prisma.AtLeast<{
    idPagina?: number
    AND?: paginasWhereInput | paginasWhereInput[]
    OR?: paginasWhereInput[]
    NOT?: paginasWhereInput | paginasWhereInput[]
    idAdmin?: IntFilter<"paginas"> | number
    nombre?: StringFilter<"paginas"> | string
    contenido?: StringFilter<"paginas"> | string
    tipo?: Enumpaginas_tipoFilter<"paginas"> | $Enums.paginas_tipo
    creado?: DateTimeFilter<"paginas"> | Date | string
    actualizado?: DateTimeFilter<"paginas"> | Date | string
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
  }, "idPagina">

  export type paginasOrderByWithAggregationInput = {
    idPagina?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    contenido?: SortOrder
    tipo?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
    _count?: paginasCountOrderByAggregateInput
    _avg?: paginasAvgOrderByAggregateInput
    _max?: paginasMaxOrderByAggregateInput
    _min?: paginasMinOrderByAggregateInput
    _sum?: paginasSumOrderByAggregateInput
  }

  export type paginasScalarWhereWithAggregatesInput = {
    AND?: paginasScalarWhereWithAggregatesInput | paginasScalarWhereWithAggregatesInput[]
    OR?: paginasScalarWhereWithAggregatesInput[]
    NOT?: paginasScalarWhereWithAggregatesInput | paginasScalarWhereWithAggregatesInput[]
    idPagina?: IntWithAggregatesFilter<"paginas"> | number
    idAdmin?: IntWithAggregatesFilter<"paginas"> | number
    nombre?: StringWithAggregatesFilter<"paginas"> | string
    contenido?: StringWithAggregatesFilter<"paginas"> | string
    tipo?: Enumpaginas_tipoWithAggregatesFilter<"paginas"> | $Enums.paginas_tipo
    creado?: DateTimeWithAggregatesFilter<"paginas"> | Date | string
    actualizado?: DateTimeWithAggregatesFilter<"paginas"> | Date | string
  }

  export type productosWhereInput = {
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    idProducto?: IntFilter<"productos"> | number
    idCategoria?: IntFilter<"productos"> | number
    idAdmin?: IntFilter<"productos"> | number
    nombre?: StringFilter<"productos"> | string
    descripcion?: StringFilter<"productos"> | string
    imagen_url?: StringFilter<"productos"> | string
    precio?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeFilter<"productos"> | Date | string
    actualizado?: DateTimeFilter<"productos"> | Date | string
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
    categorias?: XOR<CategoriasScalarRelationFilter, categoriasWhereInput>
  }

  export type productosOrderByWithRelationInput = {
    idProducto?: SortOrder
    idCategoria?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen_url?: SortOrder
    precio?: SortOrderInput | SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
    administrador?: administradorOrderByWithRelationInput
    categorias?: categoriasOrderByWithRelationInput
    _relevance?: productosOrderByRelevanceInput
  }

  export type productosWhereUniqueInput = Prisma.AtLeast<{
    idProducto?: number
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    idCategoria?: IntFilter<"productos"> | number
    idAdmin?: IntFilter<"productos"> | number
    nombre?: StringFilter<"productos"> | string
    descripcion?: StringFilter<"productos"> | string
    imagen_url?: StringFilter<"productos"> | string
    precio?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeFilter<"productos"> | Date | string
    actualizado?: DateTimeFilter<"productos"> | Date | string
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
    categorias?: XOR<CategoriasScalarRelationFilter, categoriasWhereInput>
  }, "idProducto">

  export type productosOrderByWithAggregationInput = {
    idProducto?: SortOrder
    idCategoria?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen_url?: SortOrder
    precio?: SortOrderInput | SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
    _count?: productosCountOrderByAggregateInput
    _avg?: productosAvgOrderByAggregateInput
    _max?: productosMaxOrderByAggregateInput
    _min?: productosMinOrderByAggregateInput
    _sum?: productosSumOrderByAggregateInput
  }

  export type productosScalarWhereWithAggregatesInput = {
    AND?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    OR?: productosScalarWhereWithAggregatesInput[]
    NOT?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    idProducto?: IntWithAggregatesFilter<"productos"> | number
    idCategoria?: IntWithAggregatesFilter<"productos"> | number
    idAdmin?: IntWithAggregatesFilter<"productos"> | number
    nombre?: StringWithAggregatesFilter<"productos"> | string
    descripcion?: StringWithAggregatesFilter<"productos"> | string
    imagen_url?: StringWithAggregatesFilter<"productos"> | string
    precio?: DecimalNullableWithAggregatesFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeWithAggregatesFilter<"productos"> | Date | string
    actualizado?: DateTimeWithAggregatesFilter<"productos"> | Date | string
  }

  export type serviciosWhereInput = {
    AND?: serviciosWhereInput | serviciosWhereInput[]
    OR?: serviciosWhereInput[]
    NOT?: serviciosWhereInput | serviciosWhereInput[]
    idServicio?: IntFilter<"servicios"> | number
    idAdmin?: IntFilter<"servicios"> | number
    nombre?: StringFilter<"servicios"> | string
    descripcion?: StringFilter<"servicios"> | string
    creado?: DateTimeFilter<"servicios"> | Date | string
    actualizado?: DateTimeFilter<"servicios"> | Date | string
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
  }

  export type serviciosOrderByWithRelationInput = {
    idServicio?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
    administrador?: administradorOrderByWithRelationInput
    _relevance?: serviciosOrderByRelevanceInput
  }

  export type serviciosWhereUniqueInput = Prisma.AtLeast<{
    idServicio?: number
    AND?: serviciosWhereInput | serviciosWhereInput[]
    OR?: serviciosWhereInput[]
    NOT?: serviciosWhereInput | serviciosWhereInput[]
    idAdmin?: IntFilter<"servicios"> | number
    nombre?: StringFilter<"servicios"> | string
    descripcion?: StringFilter<"servicios"> | string
    creado?: DateTimeFilter<"servicios"> | Date | string
    actualizado?: DateTimeFilter<"servicios"> | Date | string
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
  }, "idServicio">

  export type serviciosOrderByWithAggregationInput = {
    idServicio?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
    _count?: serviciosCountOrderByAggregateInput
    _avg?: serviciosAvgOrderByAggregateInput
    _max?: serviciosMaxOrderByAggregateInput
    _min?: serviciosMinOrderByAggregateInput
    _sum?: serviciosSumOrderByAggregateInput
  }

  export type serviciosScalarWhereWithAggregatesInput = {
    AND?: serviciosScalarWhereWithAggregatesInput | serviciosScalarWhereWithAggregatesInput[]
    OR?: serviciosScalarWhereWithAggregatesInput[]
    NOT?: serviciosScalarWhereWithAggregatesInput | serviciosScalarWhereWithAggregatesInput[]
    idServicio?: IntWithAggregatesFilter<"servicios"> | number
    idAdmin?: IntWithAggregatesFilter<"servicios"> | number
    nombre?: StringWithAggregatesFilter<"servicios"> | string
    descripcion?: StringWithAggregatesFilter<"servicios"> | string
    creado?: DateTimeWithAggregatesFilter<"servicios"> | Date | string
    actualizado?: DateTimeWithAggregatesFilter<"servicios"> | Date | string
  }

  export type administradorCreateInput = {
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    categorias?: categoriasCreateNestedManyWithoutAdministradorInput
    clientes?: clientesCreateNestedManyWithoutAdministradorInput
    configuraciones?: configuracionesCreateNestedManyWithoutAdministradorInput
    paginas?: paginasCreateNestedManyWithoutAdministradorInput
    productos?: productosCreateNestedManyWithoutAdministradorInput
    servicios?: serviciosCreateNestedManyWithoutAdministradorInput
  }

  export type administradorUncheckedCreateInput = {
    idAdmin?: number
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    categorias?: categoriasUncheckedCreateNestedManyWithoutAdministradorInput
    clientes?: clientesUncheckedCreateNestedManyWithoutAdministradorInput
    configuraciones?: configuracionesUncheckedCreateNestedManyWithoutAdministradorInput
    paginas?: paginasUncheckedCreateNestedManyWithoutAdministradorInput
    productos?: productosUncheckedCreateNestedManyWithoutAdministradorInput
    servicios?: serviciosUncheckedCreateNestedManyWithoutAdministradorInput
  }

  export type administradorUpdateInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUpdateManyWithoutAdministradorNestedInput
    clientes?: clientesUpdateManyWithoutAdministradorNestedInput
    configuraciones?: configuracionesUpdateManyWithoutAdministradorNestedInput
    paginas?: paginasUpdateManyWithoutAdministradorNestedInput
    productos?: productosUpdateManyWithoutAdministradorNestedInput
    servicios?: serviciosUpdateManyWithoutAdministradorNestedInput
  }

  export type administradorUncheckedUpdateInput = {
    idAdmin?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUncheckedUpdateManyWithoutAdministradorNestedInput
    clientes?: clientesUncheckedUpdateManyWithoutAdministradorNestedInput
    configuraciones?: configuracionesUncheckedUpdateManyWithoutAdministradorNestedInput
    paginas?: paginasUncheckedUpdateManyWithoutAdministradorNestedInput
    productos?: productosUncheckedUpdateManyWithoutAdministradorNestedInput
    servicios?: serviciosUncheckedUpdateManyWithoutAdministradorNestedInput
  }

  export type administradorCreateManyInput = {
    idAdmin?: number
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
  }

  export type administradorUpdateManyMutationInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type administradorUncheckedUpdateManyInput = {
    idAdmin?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriasCreateInput = {
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
    administrador: administradorCreateNestedOneWithoutCategoriasInput
    productos?: productosCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUncheckedCreateInput = {
    idCategoria?: number
    idAdmin: number
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
    productos?: productosUncheckedCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    administrador?: administradorUpdateOneRequiredWithoutCategoriasNestedInput
    productos?: productosUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasUncheckedUpdateInput = {
    idCategoria?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUncheckedUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasCreateManyInput = {
    idCategoria?: number
    idAdmin: number
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
  }

  export type categoriasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriasUncheckedUpdateManyInput = {
    idCategoria?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientesCreateInput = {
    nombre: string
    apellido: string
    correo: string
    contrase_a: string
    telefono: string
    direccion: string
    ciudad: string
    mensaje: string
    fecha: Date | string
    administrador: administradorCreateNestedOneWithoutClientesInput
  }

  export type clientesUncheckedCreateInput = {
    idCliente?: number
    idAdmin: number
    nombre: string
    apellido: string
    correo: string
    contrase_a: string
    telefono: string
    direccion: string
    ciudad: string
    mensaje: string
    fecha: Date | string
  }

  export type clientesUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    administrador?: administradorUpdateOneRequiredWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateInput = {
    idCliente?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientesCreateManyInput = {
    idCliente?: number
    idAdmin: number
    nombre: string
    apellido: string
    correo: string
    contrase_a: string
    telefono: string
    direccion: string
    ciudad: string
    mensaje: string
    fecha: Date | string
  }

  export type clientesUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientesUncheckedUpdateManyInput = {
    idCliente?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configuracionesCreateInput = {
    nombre: string
    valor: string
    descripcion?: string | null
    creado: Date | string
    actualizado: Date | string
    administrador: administradorCreateNestedOneWithoutConfiguracionesInput
  }

  export type configuracionesUncheckedCreateInput = {
    idConfiguracion?: number
    idAdmin: number
    nombre: string
    valor: string
    descripcion?: string | null
    creado: Date | string
    actualizado: Date | string
  }

  export type configuracionesUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    administrador?: administradorUpdateOneRequiredWithoutConfiguracionesNestedInput
  }

  export type configuracionesUncheckedUpdateInput = {
    idConfiguracion?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configuracionesCreateManyInput = {
    idConfiguracion?: number
    idAdmin: number
    nombre: string
    valor: string
    descripcion?: string | null
    creado: Date | string
    actualizado: Date | string
  }

  export type configuracionesUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configuracionesUncheckedUpdateManyInput = {
    idConfiguracion?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paginasCreateInput = {
    nombre: string
    contenido: string
    tipo: $Enums.paginas_tipo
    creado: Date | string
    actualizado: Date | string
    administrador: administradorCreateNestedOneWithoutPaginasInput
  }

  export type paginasUncheckedCreateInput = {
    idPagina?: number
    idAdmin: number
    nombre: string
    contenido: string
    tipo: $Enums.paginas_tipo
    creado: Date | string
    actualizado: Date | string
  }

  export type paginasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: Enumpaginas_tipoFieldUpdateOperationsInput | $Enums.paginas_tipo
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    administrador?: administradorUpdateOneRequiredWithoutPaginasNestedInput
  }

  export type paginasUncheckedUpdateInput = {
    idPagina?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: Enumpaginas_tipoFieldUpdateOperationsInput | $Enums.paginas_tipo
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paginasCreateManyInput = {
    idPagina?: number
    idAdmin: number
    nombre: string
    contenido: string
    tipo: $Enums.paginas_tipo
    creado: Date | string
    actualizado: Date | string
  }

  export type paginasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: Enumpaginas_tipoFieldUpdateOperationsInput | $Enums.paginas_tipo
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paginasUncheckedUpdateManyInput = {
    idPagina?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: Enumpaginas_tipoFieldUpdateOperationsInput | $Enums.paginas_tipo
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosCreateInput = {
    nombre: string
    descripcion: string
    imagen_url: string
    precio?: Decimal | DecimalJsLike | number | string | null
    creado: Date | string
    actualizado: Date | string
    administrador: administradorCreateNestedOneWithoutProductosInput
    categorias: categoriasCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateInput = {
    idProducto?: number
    idCategoria: number
    idAdmin: number
    nombre: string
    descripcion: string
    imagen_url: string
    precio?: Decimal | DecimalJsLike | number | string | null
    creado: Date | string
    actualizado: Date | string
  }

  export type productosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen_url?: StringFieldUpdateOperationsInput | string
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    administrador?: administradorUpdateOneRequiredWithoutProductosNestedInput
    categorias?: categoriasUpdateOneRequiredWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    idCategoria?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen_url?: StringFieldUpdateOperationsInput | string
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosCreateManyInput = {
    idProducto?: number
    idCategoria: number
    idAdmin: number
    nombre: string
    descripcion: string
    imagen_url: string
    precio?: Decimal | DecimalJsLike | number | string | null
    creado: Date | string
    actualizado: Date | string
  }

  export type productosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen_url?: StringFieldUpdateOperationsInput | string
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosUncheckedUpdateManyInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    idCategoria?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen_url?: StringFieldUpdateOperationsInput | string
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type serviciosCreateInput = {
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
    administrador: administradorCreateNestedOneWithoutServiciosInput
  }

  export type serviciosUncheckedCreateInput = {
    idServicio?: number
    idAdmin: number
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
  }

  export type serviciosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    administrador?: administradorUpdateOneRequiredWithoutServiciosNestedInput
  }

  export type serviciosUncheckedUpdateInput = {
    idServicio?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type serviciosCreateManyInput = {
    idServicio?: number
    idAdmin: number
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
  }

  export type serviciosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type serviciosUncheckedUpdateManyInput = {
    idServicio?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumadministrador_rolFilter<$PrismaModel = never> = {
    equals?: $Enums.administrador_rol | Enumadministrador_rolFieldRefInput<$PrismaModel>
    in?: $Enums.administrador_rol[]
    notIn?: $Enums.administrador_rol[]
    not?: NestedEnumadministrador_rolFilter<$PrismaModel> | $Enums.administrador_rol
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoriasListRelationFilter = {
    every?: categoriasWhereInput
    some?: categoriasWhereInput
    none?: categoriasWhereInput
  }

  export type ClientesListRelationFilter = {
    every?: clientesWhereInput
    some?: clientesWhereInput
    none?: clientesWhereInput
  }

  export type ConfiguracionesListRelationFilter = {
    every?: configuracionesWhereInput
    some?: configuracionesWhereInput
    none?: configuracionesWhereInput
  }

  export type PaginasListRelationFilter = {
    every?: paginasWhereInput
    some?: paginasWhereInput
    none?: paginasWhereInput
  }

  export type ProductosListRelationFilter = {
    every?: productosWhereInput
    some?: productosWhereInput
    none?: productosWhereInput
  }

  export type ServiciosListRelationFilter = {
    every?: serviciosWhereInput
    some?: serviciosWhereInput
    none?: serviciosWhereInput
  }

  export type categoriasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type configuracionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paginasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type serviciosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type administradorOrderByRelevanceInput = {
    fields: administradorOrderByRelevanceFieldEnum | administradorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type administradorCountOrderByAggregateInput = {
    idAdmin?: SortOrder
    usuario?: SortOrder
    contrase_a?: SortOrder
    correo?: SortOrder
    rol?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type administradorAvgOrderByAggregateInput = {
    idAdmin?: SortOrder
  }

  export type administradorMaxOrderByAggregateInput = {
    idAdmin?: SortOrder
    usuario?: SortOrder
    contrase_a?: SortOrder
    correo?: SortOrder
    rol?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type administradorMinOrderByAggregateInput = {
    idAdmin?: SortOrder
    usuario?: SortOrder
    contrase_a?: SortOrder
    correo?: SortOrder
    rol?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type administradorSumOrderByAggregateInput = {
    idAdmin?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumadministrador_rolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.administrador_rol | Enumadministrador_rolFieldRefInput<$PrismaModel>
    in?: $Enums.administrador_rol[]
    notIn?: $Enums.administrador_rol[]
    not?: NestedEnumadministrador_rolWithAggregatesFilter<$PrismaModel> | $Enums.administrador_rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumadministrador_rolFilter<$PrismaModel>
    _max?: NestedEnumadministrador_rolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AdministradorScalarRelationFilter = {
    is?: administradorWhereInput
    isNot?: administradorWhereInput
  }

  export type categoriasOrderByRelevanceInput = {
    fields: categoriasOrderByRelevanceFieldEnum | categoriasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriasCountOrderByAggregateInput = {
    idCategoria?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type categoriasAvgOrderByAggregateInput = {
    idCategoria?: SortOrder
    idAdmin?: SortOrder
  }

  export type categoriasMaxOrderByAggregateInput = {
    idCategoria?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type categoriasMinOrderByAggregateInput = {
    idCategoria?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type categoriasSumOrderByAggregateInput = {
    idCategoria?: SortOrder
    idAdmin?: SortOrder
  }

  export type clientesOrderByRelevanceInput = {
    fields: clientesOrderByRelevanceFieldEnum | clientesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clientesCountOrderByAggregateInput = {
    idCliente?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrase_a?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrder
  }

  export type clientesAvgOrderByAggregateInput = {
    idCliente?: SortOrder
    idAdmin?: SortOrder
  }

  export type clientesMaxOrderByAggregateInput = {
    idCliente?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrase_a?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrder
  }

  export type clientesMinOrderByAggregateInput = {
    idCliente?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrase_a?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrder
  }

  export type clientesSumOrderByAggregateInput = {
    idCliente?: SortOrder
    idAdmin?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type configuracionesOrderByRelevanceInput = {
    fields: configuracionesOrderByRelevanceFieldEnum | configuracionesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type configuracionesCountOrderByAggregateInput = {
    idConfiguracion?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    descripcion?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type configuracionesAvgOrderByAggregateInput = {
    idConfiguracion?: SortOrder
    idAdmin?: SortOrder
  }

  export type configuracionesMaxOrderByAggregateInput = {
    idConfiguracion?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    descripcion?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type configuracionesMinOrderByAggregateInput = {
    idConfiguracion?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    descripcion?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type configuracionesSumOrderByAggregateInput = {
    idConfiguracion?: SortOrder
    idAdmin?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumpaginas_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.paginas_tipo | Enumpaginas_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.paginas_tipo[]
    notIn?: $Enums.paginas_tipo[]
    not?: NestedEnumpaginas_tipoFilter<$PrismaModel> | $Enums.paginas_tipo
  }

  export type paginasOrderByRelevanceInput = {
    fields: paginasOrderByRelevanceFieldEnum | paginasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type paginasCountOrderByAggregateInput = {
    idPagina?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    contenido?: SortOrder
    tipo?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type paginasAvgOrderByAggregateInput = {
    idPagina?: SortOrder
    idAdmin?: SortOrder
  }

  export type paginasMaxOrderByAggregateInput = {
    idPagina?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    contenido?: SortOrder
    tipo?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type paginasMinOrderByAggregateInput = {
    idPagina?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    contenido?: SortOrder
    tipo?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type paginasSumOrderByAggregateInput = {
    idPagina?: SortOrder
    idAdmin?: SortOrder
  }

  export type Enumpaginas_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paginas_tipo | Enumpaginas_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.paginas_tipo[]
    notIn?: $Enums.paginas_tipo[]
    not?: NestedEnumpaginas_tipoWithAggregatesFilter<$PrismaModel> | $Enums.paginas_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpaginas_tipoFilter<$PrismaModel>
    _max?: NestedEnumpaginas_tipoFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CategoriasScalarRelationFilter = {
    is?: categoriasWhereInput
    isNot?: categoriasWhereInput
  }

  export type productosOrderByRelevanceInput = {
    fields: productosOrderByRelevanceFieldEnum | productosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productosCountOrderByAggregateInput = {
    idProducto?: SortOrder
    idCategoria?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen_url?: SortOrder
    precio?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type productosAvgOrderByAggregateInput = {
    idProducto?: SortOrder
    idCategoria?: SortOrder
    idAdmin?: SortOrder
    precio?: SortOrder
  }

  export type productosMaxOrderByAggregateInput = {
    idProducto?: SortOrder
    idCategoria?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen_url?: SortOrder
    precio?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type productosMinOrderByAggregateInput = {
    idProducto?: SortOrder
    idCategoria?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen_url?: SortOrder
    precio?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type productosSumOrderByAggregateInput = {
    idProducto?: SortOrder
    idCategoria?: SortOrder
    idAdmin?: SortOrder
    precio?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type serviciosOrderByRelevanceInput = {
    fields: serviciosOrderByRelevanceFieldEnum | serviciosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type serviciosCountOrderByAggregateInput = {
    idServicio?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type serviciosAvgOrderByAggregateInput = {
    idServicio?: SortOrder
    idAdmin?: SortOrder
  }

  export type serviciosMaxOrderByAggregateInput = {
    idServicio?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type serviciosMinOrderByAggregateInput = {
    idServicio?: SortOrder
    idAdmin?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    creado?: SortOrder
    actualizado?: SortOrder
  }

  export type serviciosSumOrderByAggregateInput = {
    idServicio?: SortOrder
    idAdmin?: SortOrder
  }

  export type categoriasCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<categoriasCreateWithoutAdministradorInput, categoriasUncheckedCreateWithoutAdministradorInput> | categoriasCreateWithoutAdministradorInput[] | categoriasUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: categoriasCreateOrConnectWithoutAdministradorInput | categoriasCreateOrConnectWithoutAdministradorInput[]
    createMany?: categoriasCreateManyAdministradorInputEnvelope
    connect?: categoriasWhereUniqueInput | categoriasWhereUniqueInput[]
  }

  export type clientesCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<clientesCreateWithoutAdministradorInput, clientesUncheckedCreateWithoutAdministradorInput> | clientesCreateWithoutAdministradorInput[] | clientesUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: clientesCreateOrConnectWithoutAdministradorInput | clientesCreateOrConnectWithoutAdministradorInput[]
    createMany?: clientesCreateManyAdministradorInputEnvelope
    connect?: clientesWhereUniqueInput | clientesWhereUniqueInput[]
  }

  export type configuracionesCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<configuracionesCreateWithoutAdministradorInput, configuracionesUncheckedCreateWithoutAdministradorInput> | configuracionesCreateWithoutAdministradorInput[] | configuracionesUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: configuracionesCreateOrConnectWithoutAdministradorInput | configuracionesCreateOrConnectWithoutAdministradorInput[]
    createMany?: configuracionesCreateManyAdministradorInputEnvelope
    connect?: configuracionesWhereUniqueInput | configuracionesWhereUniqueInput[]
  }

  export type paginasCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<paginasCreateWithoutAdministradorInput, paginasUncheckedCreateWithoutAdministradorInput> | paginasCreateWithoutAdministradorInput[] | paginasUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: paginasCreateOrConnectWithoutAdministradorInput | paginasCreateOrConnectWithoutAdministradorInput[]
    createMany?: paginasCreateManyAdministradorInputEnvelope
    connect?: paginasWhereUniqueInput | paginasWhereUniqueInput[]
  }

  export type productosCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<productosCreateWithoutAdministradorInput, productosUncheckedCreateWithoutAdministradorInput> | productosCreateWithoutAdministradorInput[] | productosUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: productosCreateOrConnectWithoutAdministradorInput | productosCreateOrConnectWithoutAdministradorInput[]
    createMany?: productosCreateManyAdministradorInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type serviciosCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<serviciosCreateWithoutAdministradorInput, serviciosUncheckedCreateWithoutAdministradorInput> | serviciosCreateWithoutAdministradorInput[] | serviciosUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: serviciosCreateOrConnectWithoutAdministradorInput | serviciosCreateOrConnectWithoutAdministradorInput[]
    createMany?: serviciosCreateManyAdministradorInputEnvelope
    connect?: serviciosWhereUniqueInput | serviciosWhereUniqueInput[]
  }

  export type categoriasUncheckedCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<categoriasCreateWithoutAdministradorInput, categoriasUncheckedCreateWithoutAdministradorInput> | categoriasCreateWithoutAdministradorInput[] | categoriasUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: categoriasCreateOrConnectWithoutAdministradorInput | categoriasCreateOrConnectWithoutAdministradorInput[]
    createMany?: categoriasCreateManyAdministradorInputEnvelope
    connect?: categoriasWhereUniqueInput | categoriasWhereUniqueInput[]
  }

  export type clientesUncheckedCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<clientesCreateWithoutAdministradorInput, clientesUncheckedCreateWithoutAdministradorInput> | clientesCreateWithoutAdministradorInput[] | clientesUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: clientesCreateOrConnectWithoutAdministradorInput | clientesCreateOrConnectWithoutAdministradorInput[]
    createMany?: clientesCreateManyAdministradorInputEnvelope
    connect?: clientesWhereUniqueInput | clientesWhereUniqueInput[]
  }

  export type configuracionesUncheckedCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<configuracionesCreateWithoutAdministradorInput, configuracionesUncheckedCreateWithoutAdministradorInput> | configuracionesCreateWithoutAdministradorInput[] | configuracionesUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: configuracionesCreateOrConnectWithoutAdministradorInput | configuracionesCreateOrConnectWithoutAdministradorInput[]
    createMany?: configuracionesCreateManyAdministradorInputEnvelope
    connect?: configuracionesWhereUniqueInput | configuracionesWhereUniqueInput[]
  }

  export type paginasUncheckedCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<paginasCreateWithoutAdministradorInput, paginasUncheckedCreateWithoutAdministradorInput> | paginasCreateWithoutAdministradorInput[] | paginasUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: paginasCreateOrConnectWithoutAdministradorInput | paginasCreateOrConnectWithoutAdministradorInput[]
    createMany?: paginasCreateManyAdministradorInputEnvelope
    connect?: paginasWhereUniqueInput | paginasWhereUniqueInput[]
  }

  export type productosUncheckedCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<productosCreateWithoutAdministradorInput, productosUncheckedCreateWithoutAdministradorInput> | productosCreateWithoutAdministradorInput[] | productosUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: productosCreateOrConnectWithoutAdministradorInput | productosCreateOrConnectWithoutAdministradorInput[]
    createMany?: productosCreateManyAdministradorInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type serviciosUncheckedCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<serviciosCreateWithoutAdministradorInput, serviciosUncheckedCreateWithoutAdministradorInput> | serviciosCreateWithoutAdministradorInput[] | serviciosUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: serviciosCreateOrConnectWithoutAdministradorInput | serviciosCreateOrConnectWithoutAdministradorInput[]
    createMany?: serviciosCreateManyAdministradorInputEnvelope
    connect?: serviciosWhereUniqueInput | serviciosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumadministrador_rolFieldUpdateOperationsInput = {
    set?: $Enums.administrador_rol
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type categoriasUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<categoriasCreateWithoutAdministradorInput, categoriasUncheckedCreateWithoutAdministradorInput> | categoriasCreateWithoutAdministradorInput[] | categoriasUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: categoriasCreateOrConnectWithoutAdministradorInput | categoriasCreateOrConnectWithoutAdministradorInput[]
    upsert?: categoriasUpsertWithWhereUniqueWithoutAdministradorInput | categoriasUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: categoriasCreateManyAdministradorInputEnvelope
    set?: categoriasWhereUniqueInput | categoriasWhereUniqueInput[]
    disconnect?: categoriasWhereUniqueInput | categoriasWhereUniqueInput[]
    delete?: categoriasWhereUniqueInput | categoriasWhereUniqueInput[]
    connect?: categoriasWhereUniqueInput | categoriasWhereUniqueInput[]
    update?: categoriasUpdateWithWhereUniqueWithoutAdministradorInput | categoriasUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: categoriasUpdateManyWithWhereWithoutAdministradorInput | categoriasUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: categoriasScalarWhereInput | categoriasScalarWhereInput[]
  }

  export type clientesUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<clientesCreateWithoutAdministradorInput, clientesUncheckedCreateWithoutAdministradorInput> | clientesCreateWithoutAdministradorInput[] | clientesUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: clientesCreateOrConnectWithoutAdministradorInput | clientesCreateOrConnectWithoutAdministradorInput[]
    upsert?: clientesUpsertWithWhereUniqueWithoutAdministradorInput | clientesUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: clientesCreateManyAdministradorInputEnvelope
    set?: clientesWhereUniqueInput | clientesWhereUniqueInput[]
    disconnect?: clientesWhereUniqueInput | clientesWhereUniqueInput[]
    delete?: clientesWhereUniqueInput | clientesWhereUniqueInput[]
    connect?: clientesWhereUniqueInput | clientesWhereUniqueInput[]
    update?: clientesUpdateWithWhereUniqueWithoutAdministradorInput | clientesUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: clientesUpdateManyWithWhereWithoutAdministradorInput | clientesUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: clientesScalarWhereInput | clientesScalarWhereInput[]
  }

  export type configuracionesUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<configuracionesCreateWithoutAdministradorInput, configuracionesUncheckedCreateWithoutAdministradorInput> | configuracionesCreateWithoutAdministradorInput[] | configuracionesUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: configuracionesCreateOrConnectWithoutAdministradorInput | configuracionesCreateOrConnectWithoutAdministradorInput[]
    upsert?: configuracionesUpsertWithWhereUniqueWithoutAdministradorInput | configuracionesUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: configuracionesCreateManyAdministradorInputEnvelope
    set?: configuracionesWhereUniqueInput | configuracionesWhereUniqueInput[]
    disconnect?: configuracionesWhereUniqueInput | configuracionesWhereUniqueInput[]
    delete?: configuracionesWhereUniqueInput | configuracionesWhereUniqueInput[]
    connect?: configuracionesWhereUniqueInput | configuracionesWhereUniqueInput[]
    update?: configuracionesUpdateWithWhereUniqueWithoutAdministradorInput | configuracionesUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: configuracionesUpdateManyWithWhereWithoutAdministradorInput | configuracionesUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: configuracionesScalarWhereInput | configuracionesScalarWhereInput[]
  }

  export type paginasUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<paginasCreateWithoutAdministradorInput, paginasUncheckedCreateWithoutAdministradorInput> | paginasCreateWithoutAdministradorInput[] | paginasUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: paginasCreateOrConnectWithoutAdministradorInput | paginasCreateOrConnectWithoutAdministradorInput[]
    upsert?: paginasUpsertWithWhereUniqueWithoutAdministradorInput | paginasUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: paginasCreateManyAdministradorInputEnvelope
    set?: paginasWhereUniqueInput | paginasWhereUniqueInput[]
    disconnect?: paginasWhereUniqueInput | paginasWhereUniqueInput[]
    delete?: paginasWhereUniqueInput | paginasWhereUniqueInput[]
    connect?: paginasWhereUniqueInput | paginasWhereUniqueInput[]
    update?: paginasUpdateWithWhereUniqueWithoutAdministradorInput | paginasUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: paginasUpdateManyWithWhereWithoutAdministradorInput | paginasUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: paginasScalarWhereInput | paginasScalarWhereInput[]
  }

  export type productosUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<productosCreateWithoutAdministradorInput, productosUncheckedCreateWithoutAdministradorInput> | productosCreateWithoutAdministradorInput[] | productosUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: productosCreateOrConnectWithoutAdministradorInput | productosCreateOrConnectWithoutAdministradorInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutAdministradorInput | productosUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: productosCreateManyAdministradorInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutAdministradorInput | productosUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: productosUpdateManyWithWhereWithoutAdministradorInput | productosUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type serviciosUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<serviciosCreateWithoutAdministradorInput, serviciosUncheckedCreateWithoutAdministradorInput> | serviciosCreateWithoutAdministradorInput[] | serviciosUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: serviciosCreateOrConnectWithoutAdministradorInput | serviciosCreateOrConnectWithoutAdministradorInput[]
    upsert?: serviciosUpsertWithWhereUniqueWithoutAdministradorInput | serviciosUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: serviciosCreateManyAdministradorInputEnvelope
    set?: serviciosWhereUniqueInput | serviciosWhereUniqueInput[]
    disconnect?: serviciosWhereUniqueInput | serviciosWhereUniqueInput[]
    delete?: serviciosWhereUniqueInput | serviciosWhereUniqueInput[]
    connect?: serviciosWhereUniqueInput | serviciosWhereUniqueInput[]
    update?: serviciosUpdateWithWhereUniqueWithoutAdministradorInput | serviciosUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: serviciosUpdateManyWithWhereWithoutAdministradorInput | serviciosUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: serviciosScalarWhereInput | serviciosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type categoriasUncheckedUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<categoriasCreateWithoutAdministradorInput, categoriasUncheckedCreateWithoutAdministradorInput> | categoriasCreateWithoutAdministradorInput[] | categoriasUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: categoriasCreateOrConnectWithoutAdministradorInput | categoriasCreateOrConnectWithoutAdministradorInput[]
    upsert?: categoriasUpsertWithWhereUniqueWithoutAdministradorInput | categoriasUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: categoriasCreateManyAdministradorInputEnvelope
    set?: categoriasWhereUniqueInput | categoriasWhereUniqueInput[]
    disconnect?: categoriasWhereUniqueInput | categoriasWhereUniqueInput[]
    delete?: categoriasWhereUniqueInput | categoriasWhereUniqueInput[]
    connect?: categoriasWhereUniqueInput | categoriasWhereUniqueInput[]
    update?: categoriasUpdateWithWhereUniqueWithoutAdministradorInput | categoriasUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: categoriasUpdateManyWithWhereWithoutAdministradorInput | categoriasUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: categoriasScalarWhereInput | categoriasScalarWhereInput[]
  }

  export type clientesUncheckedUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<clientesCreateWithoutAdministradorInput, clientesUncheckedCreateWithoutAdministradorInput> | clientesCreateWithoutAdministradorInput[] | clientesUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: clientesCreateOrConnectWithoutAdministradorInput | clientesCreateOrConnectWithoutAdministradorInput[]
    upsert?: clientesUpsertWithWhereUniqueWithoutAdministradorInput | clientesUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: clientesCreateManyAdministradorInputEnvelope
    set?: clientesWhereUniqueInput | clientesWhereUniqueInput[]
    disconnect?: clientesWhereUniqueInput | clientesWhereUniqueInput[]
    delete?: clientesWhereUniqueInput | clientesWhereUniqueInput[]
    connect?: clientesWhereUniqueInput | clientesWhereUniqueInput[]
    update?: clientesUpdateWithWhereUniqueWithoutAdministradorInput | clientesUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: clientesUpdateManyWithWhereWithoutAdministradorInput | clientesUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: clientesScalarWhereInput | clientesScalarWhereInput[]
  }

  export type configuracionesUncheckedUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<configuracionesCreateWithoutAdministradorInput, configuracionesUncheckedCreateWithoutAdministradorInput> | configuracionesCreateWithoutAdministradorInput[] | configuracionesUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: configuracionesCreateOrConnectWithoutAdministradorInput | configuracionesCreateOrConnectWithoutAdministradorInput[]
    upsert?: configuracionesUpsertWithWhereUniqueWithoutAdministradorInput | configuracionesUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: configuracionesCreateManyAdministradorInputEnvelope
    set?: configuracionesWhereUniqueInput | configuracionesWhereUniqueInput[]
    disconnect?: configuracionesWhereUniqueInput | configuracionesWhereUniqueInput[]
    delete?: configuracionesWhereUniqueInput | configuracionesWhereUniqueInput[]
    connect?: configuracionesWhereUniqueInput | configuracionesWhereUniqueInput[]
    update?: configuracionesUpdateWithWhereUniqueWithoutAdministradorInput | configuracionesUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: configuracionesUpdateManyWithWhereWithoutAdministradorInput | configuracionesUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: configuracionesScalarWhereInput | configuracionesScalarWhereInput[]
  }

  export type paginasUncheckedUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<paginasCreateWithoutAdministradorInput, paginasUncheckedCreateWithoutAdministradorInput> | paginasCreateWithoutAdministradorInput[] | paginasUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: paginasCreateOrConnectWithoutAdministradorInput | paginasCreateOrConnectWithoutAdministradorInput[]
    upsert?: paginasUpsertWithWhereUniqueWithoutAdministradorInput | paginasUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: paginasCreateManyAdministradorInputEnvelope
    set?: paginasWhereUniqueInput | paginasWhereUniqueInput[]
    disconnect?: paginasWhereUniqueInput | paginasWhereUniqueInput[]
    delete?: paginasWhereUniqueInput | paginasWhereUniqueInput[]
    connect?: paginasWhereUniqueInput | paginasWhereUniqueInput[]
    update?: paginasUpdateWithWhereUniqueWithoutAdministradorInput | paginasUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: paginasUpdateManyWithWhereWithoutAdministradorInput | paginasUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: paginasScalarWhereInput | paginasScalarWhereInput[]
  }

  export type productosUncheckedUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<productosCreateWithoutAdministradorInput, productosUncheckedCreateWithoutAdministradorInput> | productosCreateWithoutAdministradorInput[] | productosUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: productosCreateOrConnectWithoutAdministradorInput | productosCreateOrConnectWithoutAdministradorInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutAdministradorInput | productosUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: productosCreateManyAdministradorInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutAdministradorInput | productosUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: productosUpdateManyWithWhereWithoutAdministradorInput | productosUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type serviciosUncheckedUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<serviciosCreateWithoutAdministradorInput, serviciosUncheckedCreateWithoutAdministradorInput> | serviciosCreateWithoutAdministradorInput[] | serviciosUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: serviciosCreateOrConnectWithoutAdministradorInput | serviciosCreateOrConnectWithoutAdministradorInput[]
    upsert?: serviciosUpsertWithWhereUniqueWithoutAdministradorInput | serviciosUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: serviciosCreateManyAdministradorInputEnvelope
    set?: serviciosWhereUniqueInput | serviciosWhereUniqueInput[]
    disconnect?: serviciosWhereUniqueInput | serviciosWhereUniqueInput[]
    delete?: serviciosWhereUniqueInput | serviciosWhereUniqueInput[]
    connect?: serviciosWhereUniqueInput | serviciosWhereUniqueInput[]
    update?: serviciosUpdateWithWhereUniqueWithoutAdministradorInput | serviciosUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: serviciosUpdateManyWithWhereWithoutAdministradorInput | serviciosUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: serviciosScalarWhereInput | serviciosScalarWhereInput[]
  }

  export type administradorCreateNestedOneWithoutCategoriasInput = {
    create?: XOR<administradorCreateWithoutCategoriasInput, administradorUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: administradorCreateOrConnectWithoutCategoriasInput
    connect?: administradorWhereUniqueInput
  }

  export type productosCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput> | productosCreateWithoutCategoriasInput[] | productosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriasInput | productosCreateOrConnectWithoutCategoriasInput[]
    createMany?: productosCreateManyCategoriasInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type productosUncheckedCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput> | productosCreateWithoutCategoriasInput[] | productosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriasInput | productosCreateOrConnectWithoutCategoriasInput[]
    createMany?: productosCreateManyCategoriasInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type administradorUpdateOneRequiredWithoutCategoriasNestedInput = {
    create?: XOR<administradorCreateWithoutCategoriasInput, administradorUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: administradorCreateOrConnectWithoutCategoriasInput
    upsert?: administradorUpsertWithoutCategoriasInput
    connect?: administradorWhereUniqueInput
    update?: XOR<XOR<administradorUpdateToOneWithWhereWithoutCategoriasInput, administradorUpdateWithoutCategoriasInput>, administradorUncheckedUpdateWithoutCategoriasInput>
  }

  export type productosUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput> | productosCreateWithoutCategoriasInput[] | productosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriasInput | productosCreateOrConnectWithoutCategoriasInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutCategoriasInput | productosUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: productosCreateManyCategoriasInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutCategoriasInput | productosUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: productosUpdateManyWithWhereWithoutCategoriasInput | productosUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type productosUncheckedUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput> | productosCreateWithoutCategoriasInput[] | productosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriasInput | productosCreateOrConnectWithoutCategoriasInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutCategoriasInput | productosUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: productosCreateManyCategoriasInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutCategoriasInput | productosUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: productosUpdateManyWithWhereWithoutCategoriasInput | productosUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type administradorCreateNestedOneWithoutClientesInput = {
    create?: XOR<administradorCreateWithoutClientesInput, administradorUncheckedCreateWithoutClientesInput>
    connectOrCreate?: administradorCreateOrConnectWithoutClientesInput
    connect?: administradorWhereUniqueInput
  }

  export type administradorUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<administradorCreateWithoutClientesInput, administradorUncheckedCreateWithoutClientesInput>
    connectOrCreate?: administradorCreateOrConnectWithoutClientesInput
    upsert?: administradorUpsertWithoutClientesInput
    connect?: administradorWhereUniqueInput
    update?: XOR<XOR<administradorUpdateToOneWithWhereWithoutClientesInput, administradorUpdateWithoutClientesInput>, administradorUncheckedUpdateWithoutClientesInput>
  }

  export type administradorCreateNestedOneWithoutConfiguracionesInput = {
    create?: XOR<administradorCreateWithoutConfiguracionesInput, administradorUncheckedCreateWithoutConfiguracionesInput>
    connectOrCreate?: administradorCreateOrConnectWithoutConfiguracionesInput
    connect?: administradorWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type administradorUpdateOneRequiredWithoutConfiguracionesNestedInput = {
    create?: XOR<administradorCreateWithoutConfiguracionesInput, administradorUncheckedCreateWithoutConfiguracionesInput>
    connectOrCreate?: administradorCreateOrConnectWithoutConfiguracionesInput
    upsert?: administradorUpsertWithoutConfiguracionesInput
    connect?: administradorWhereUniqueInput
    update?: XOR<XOR<administradorUpdateToOneWithWhereWithoutConfiguracionesInput, administradorUpdateWithoutConfiguracionesInput>, administradorUncheckedUpdateWithoutConfiguracionesInput>
  }

  export type administradorCreateNestedOneWithoutPaginasInput = {
    create?: XOR<administradorCreateWithoutPaginasInput, administradorUncheckedCreateWithoutPaginasInput>
    connectOrCreate?: administradorCreateOrConnectWithoutPaginasInput
    connect?: administradorWhereUniqueInput
  }

  export type Enumpaginas_tipoFieldUpdateOperationsInput = {
    set?: $Enums.paginas_tipo
  }

  export type administradorUpdateOneRequiredWithoutPaginasNestedInput = {
    create?: XOR<administradorCreateWithoutPaginasInput, administradorUncheckedCreateWithoutPaginasInput>
    connectOrCreate?: administradorCreateOrConnectWithoutPaginasInput
    upsert?: administradorUpsertWithoutPaginasInput
    connect?: administradorWhereUniqueInput
    update?: XOR<XOR<administradorUpdateToOneWithWhereWithoutPaginasInput, administradorUpdateWithoutPaginasInput>, administradorUncheckedUpdateWithoutPaginasInput>
  }

  export type administradorCreateNestedOneWithoutProductosInput = {
    create?: XOR<administradorCreateWithoutProductosInput, administradorUncheckedCreateWithoutProductosInput>
    connectOrCreate?: administradorCreateOrConnectWithoutProductosInput
    connect?: administradorWhereUniqueInput
  }

  export type categoriasCreateNestedOneWithoutProductosInput = {
    create?: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProductosInput
    connect?: categoriasWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type administradorUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<administradorCreateWithoutProductosInput, administradorUncheckedCreateWithoutProductosInput>
    connectOrCreate?: administradorCreateOrConnectWithoutProductosInput
    upsert?: administradorUpsertWithoutProductosInput
    connect?: administradorWhereUniqueInput
    update?: XOR<XOR<administradorUpdateToOneWithWhereWithoutProductosInput, administradorUpdateWithoutProductosInput>, administradorUncheckedUpdateWithoutProductosInput>
  }

  export type categoriasUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProductosInput
    upsert?: categoriasUpsertWithoutProductosInput
    connect?: categoriasWhereUniqueInput
    update?: XOR<XOR<categoriasUpdateToOneWithWhereWithoutProductosInput, categoriasUpdateWithoutProductosInput>, categoriasUncheckedUpdateWithoutProductosInput>
  }

  export type administradorCreateNestedOneWithoutServiciosInput = {
    create?: XOR<administradorCreateWithoutServiciosInput, administradorUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: administradorCreateOrConnectWithoutServiciosInput
    connect?: administradorWhereUniqueInput
  }

  export type administradorUpdateOneRequiredWithoutServiciosNestedInput = {
    create?: XOR<administradorCreateWithoutServiciosInput, administradorUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: administradorCreateOrConnectWithoutServiciosInput
    upsert?: administradorUpsertWithoutServiciosInput
    connect?: administradorWhereUniqueInput
    update?: XOR<XOR<administradorUpdateToOneWithWhereWithoutServiciosInput, administradorUpdateWithoutServiciosInput>, administradorUncheckedUpdateWithoutServiciosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumadministrador_rolFilter<$PrismaModel = never> = {
    equals?: $Enums.administrador_rol | Enumadministrador_rolFieldRefInput<$PrismaModel>
    in?: $Enums.administrador_rol[]
    notIn?: $Enums.administrador_rol[]
    not?: NestedEnumadministrador_rolFilter<$PrismaModel> | $Enums.administrador_rol
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumadministrador_rolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.administrador_rol | Enumadministrador_rolFieldRefInput<$PrismaModel>
    in?: $Enums.administrador_rol[]
    notIn?: $Enums.administrador_rol[]
    not?: NestedEnumadministrador_rolWithAggregatesFilter<$PrismaModel> | $Enums.administrador_rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumadministrador_rolFilter<$PrismaModel>
    _max?: NestedEnumadministrador_rolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumpaginas_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.paginas_tipo | Enumpaginas_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.paginas_tipo[]
    notIn?: $Enums.paginas_tipo[]
    not?: NestedEnumpaginas_tipoFilter<$PrismaModel> | $Enums.paginas_tipo
  }

  export type NestedEnumpaginas_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paginas_tipo | Enumpaginas_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.paginas_tipo[]
    notIn?: $Enums.paginas_tipo[]
    not?: NestedEnumpaginas_tipoWithAggregatesFilter<$PrismaModel> | $Enums.paginas_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpaginas_tipoFilter<$PrismaModel>
    _max?: NestedEnumpaginas_tipoFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type categoriasCreateWithoutAdministradorInput = {
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
    productos?: productosCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUncheckedCreateWithoutAdministradorInput = {
    idCategoria?: number
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
    productos?: productosUncheckedCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasCreateOrConnectWithoutAdministradorInput = {
    where: categoriasWhereUniqueInput
    create: XOR<categoriasCreateWithoutAdministradorInput, categoriasUncheckedCreateWithoutAdministradorInput>
  }

  export type categoriasCreateManyAdministradorInputEnvelope = {
    data: categoriasCreateManyAdministradorInput | categoriasCreateManyAdministradorInput[]
    skipDuplicates?: boolean
  }

  export type clientesCreateWithoutAdministradorInput = {
    nombre: string
    apellido: string
    correo: string
    contrase_a: string
    telefono: string
    direccion: string
    ciudad: string
    mensaje: string
    fecha: Date | string
  }

  export type clientesUncheckedCreateWithoutAdministradorInput = {
    idCliente?: number
    nombre: string
    apellido: string
    correo: string
    contrase_a: string
    telefono: string
    direccion: string
    ciudad: string
    mensaje: string
    fecha: Date | string
  }

  export type clientesCreateOrConnectWithoutAdministradorInput = {
    where: clientesWhereUniqueInput
    create: XOR<clientesCreateWithoutAdministradorInput, clientesUncheckedCreateWithoutAdministradorInput>
  }

  export type clientesCreateManyAdministradorInputEnvelope = {
    data: clientesCreateManyAdministradorInput | clientesCreateManyAdministradorInput[]
    skipDuplicates?: boolean
  }

  export type configuracionesCreateWithoutAdministradorInput = {
    nombre: string
    valor: string
    descripcion?: string | null
    creado: Date | string
    actualizado: Date | string
  }

  export type configuracionesUncheckedCreateWithoutAdministradorInput = {
    idConfiguracion?: number
    nombre: string
    valor: string
    descripcion?: string | null
    creado: Date | string
    actualizado: Date | string
  }

  export type configuracionesCreateOrConnectWithoutAdministradorInput = {
    where: configuracionesWhereUniqueInput
    create: XOR<configuracionesCreateWithoutAdministradorInput, configuracionesUncheckedCreateWithoutAdministradorInput>
  }

  export type configuracionesCreateManyAdministradorInputEnvelope = {
    data: configuracionesCreateManyAdministradorInput | configuracionesCreateManyAdministradorInput[]
    skipDuplicates?: boolean
  }

  export type paginasCreateWithoutAdministradorInput = {
    nombre: string
    contenido: string
    tipo: $Enums.paginas_tipo
    creado: Date | string
    actualizado: Date | string
  }

  export type paginasUncheckedCreateWithoutAdministradorInput = {
    idPagina?: number
    nombre: string
    contenido: string
    tipo: $Enums.paginas_tipo
    creado: Date | string
    actualizado: Date | string
  }

  export type paginasCreateOrConnectWithoutAdministradorInput = {
    where: paginasWhereUniqueInput
    create: XOR<paginasCreateWithoutAdministradorInput, paginasUncheckedCreateWithoutAdministradorInput>
  }

  export type paginasCreateManyAdministradorInputEnvelope = {
    data: paginasCreateManyAdministradorInput | paginasCreateManyAdministradorInput[]
    skipDuplicates?: boolean
  }

  export type productosCreateWithoutAdministradorInput = {
    nombre: string
    descripcion: string
    imagen_url: string
    precio?: Decimal | DecimalJsLike | number | string | null
    creado: Date | string
    actualizado: Date | string
    categorias: categoriasCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutAdministradorInput = {
    idProducto?: number
    idCategoria: number
    nombre: string
    descripcion: string
    imagen_url: string
    precio?: Decimal | DecimalJsLike | number | string | null
    creado: Date | string
    actualizado: Date | string
  }

  export type productosCreateOrConnectWithoutAdministradorInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutAdministradorInput, productosUncheckedCreateWithoutAdministradorInput>
  }

  export type productosCreateManyAdministradorInputEnvelope = {
    data: productosCreateManyAdministradorInput | productosCreateManyAdministradorInput[]
    skipDuplicates?: boolean
  }

  export type serviciosCreateWithoutAdministradorInput = {
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
  }

  export type serviciosUncheckedCreateWithoutAdministradorInput = {
    idServicio?: number
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
  }

  export type serviciosCreateOrConnectWithoutAdministradorInput = {
    where: serviciosWhereUniqueInput
    create: XOR<serviciosCreateWithoutAdministradorInput, serviciosUncheckedCreateWithoutAdministradorInput>
  }

  export type serviciosCreateManyAdministradorInputEnvelope = {
    data: serviciosCreateManyAdministradorInput | serviciosCreateManyAdministradorInput[]
    skipDuplicates?: boolean
  }

  export type categoriasUpsertWithWhereUniqueWithoutAdministradorInput = {
    where: categoriasWhereUniqueInput
    update: XOR<categoriasUpdateWithoutAdministradorInput, categoriasUncheckedUpdateWithoutAdministradorInput>
    create: XOR<categoriasCreateWithoutAdministradorInput, categoriasUncheckedCreateWithoutAdministradorInput>
  }

  export type categoriasUpdateWithWhereUniqueWithoutAdministradorInput = {
    where: categoriasWhereUniqueInput
    data: XOR<categoriasUpdateWithoutAdministradorInput, categoriasUncheckedUpdateWithoutAdministradorInput>
  }

  export type categoriasUpdateManyWithWhereWithoutAdministradorInput = {
    where: categoriasScalarWhereInput
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyWithoutAdministradorInput>
  }

  export type categoriasScalarWhereInput = {
    AND?: categoriasScalarWhereInput | categoriasScalarWhereInput[]
    OR?: categoriasScalarWhereInput[]
    NOT?: categoriasScalarWhereInput | categoriasScalarWhereInput[]
    idCategoria?: IntFilter<"categorias"> | number
    idAdmin?: IntFilter<"categorias"> | number
    nombre?: StringFilter<"categorias"> | string
    descripcion?: StringFilter<"categorias"> | string
    creado?: DateTimeFilter<"categorias"> | Date | string
    actualizado?: DateTimeFilter<"categorias"> | Date | string
  }

  export type clientesUpsertWithWhereUniqueWithoutAdministradorInput = {
    where: clientesWhereUniqueInput
    update: XOR<clientesUpdateWithoutAdministradorInput, clientesUncheckedUpdateWithoutAdministradorInput>
    create: XOR<clientesCreateWithoutAdministradorInput, clientesUncheckedCreateWithoutAdministradorInput>
  }

  export type clientesUpdateWithWhereUniqueWithoutAdministradorInput = {
    where: clientesWhereUniqueInput
    data: XOR<clientesUpdateWithoutAdministradorInput, clientesUncheckedUpdateWithoutAdministradorInput>
  }

  export type clientesUpdateManyWithWhereWithoutAdministradorInput = {
    where: clientesScalarWhereInput
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyWithoutAdministradorInput>
  }

  export type clientesScalarWhereInput = {
    AND?: clientesScalarWhereInput | clientesScalarWhereInput[]
    OR?: clientesScalarWhereInput[]
    NOT?: clientesScalarWhereInput | clientesScalarWhereInput[]
    idCliente?: IntFilter<"clientes"> | number
    idAdmin?: IntFilter<"clientes"> | number
    nombre?: StringFilter<"clientes"> | string
    apellido?: StringFilter<"clientes"> | string
    correo?: StringFilter<"clientes"> | string
    contrase_a?: StringFilter<"clientes"> | string
    telefono?: StringFilter<"clientes"> | string
    direccion?: StringFilter<"clientes"> | string
    ciudad?: StringFilter<"clientes"> | string
    mensaje?: StringFilter<"clientes"> | string
    fecha?: DateTimeFilter<"clientes"> | Date | string
  }

  export type configuracionesUpsertWithWhereUniqueWithoutAdministradorInput = {
    where: configuracionesWhereUniqueInput
    update: XOR<configuracionesUpdateWithoutAdministradorInput, configuracionesUncheckedUpdateWithoutAdministradorInput>
    create: XOR<configuracionesCreateWithoutAdministradorInput, configuracionesUncheckedCreateWithoutAdministradorInput>
  }

  export type configuracionesUpdateWithWhereUniqueWithoutAdministradorInput = {
    where: configuracionesWhereUniqueInput
    data: XOR<configuracionesUpdateWithoutAdministradorInput, configuracionesUncheckedUpdateWithoutAdministradorInput>
  }

  export type configuracionesUpdateManyWithWhereWithoutAdministradorInput = {
    where: configuracionesScalarWhereInput
    data: XOR<configuracionesUpdateManyMutationInput, configuracionesUncheckedUpdateManyWithoutAdministradorInput>
  }

  export type configuracionesScalarWhereInput = {
    AND?: configuracionesScalarWhereInput | configuracionesScalarWhereInput[]
    OR?: configuracionesScalarWhereInput[]
    NOT?: configuracionesScalarWhereInput | configuracionesScalarWhereInput[]
    idConfiguracion?: IntFilter<"configuraciones"> | number
    idAdmin?: IntFilter<"configuraciones"> | number
    nombre?: StringFilter<"configuraciones"> | string
    valor?: StringFilter<"configuraciones"> | string
    descripcion?: StringNullableFilter<"configuraciones"> | string | null
    creado?: DateTimeFilter<"configuraciones"> | Date | string
    actualizado?: DateTimeFilter<"configuraciones"> | Date | string
  }

  export type paginasUpsertWithWhereUniqueWithoutAdministradorInput = {
    where: paginasWhereUniqueInput
    update: XOR<paginasUpdateWithoutAdministradorInput, paginasUncheckedUpdateWithoutAdministradorInput>
    create: XOR<paginasCreateWithoutAdministradorInput, paginasUncheckedCreateWithoutAdministradorInput>
  }

  export type paginasUpdateWithWhereUniqueWithoutAdministradorInput = {
    where: paginasWhereUniqueInput
    data: XOR<paginasUpdateWithoutAdministradorInput, paginasUncheckedUpdateWithoutAdministradorInput>
  }

  export type paginasUpdateManyWithWhereWithoutAdministradorInput = {
    where: paginasScalarWhereInput
    data: XOR<paginasUpdateManyMutationInput, paginasUncheckedUpdateManyWithoutAdministradorInput>
  }

  export type paginasScalarWhereInput = {
    AND?: paginasScalarWhereInput | paginasScalarWhereInput[]
    OR?: paginasScalarWhereInput[]
    NOT?: paginasScalarWhereInput | paginasScalarWhereInput[]
    idPagina?: IntFilter<"paginas"> | number
    idAdmin?: IntFilter<"paginas"> | number
    nombre?: StringFilter<"paginas"> | string
    contenido?: StringFilter<"paginas"> | string
    tipo?: Enumpaginas_tipoFilter<"paginas"> | $Enums.paginas_tipo
    creado?: DateTimeFilter<"paginas"> | Date | string
    actualizado?: DateTimeFilter<"paginas"> | Date | string
  }

  export type productosUpsertWithWhereUniqueWithoutAdministradorInput = {
    where: productosWhereUniqueInput
    update: XOR<productosUpdateWithoutAdministradorInput, productosUncheckedUpdateWithoutAdministradorInput>
    create: XOR<productosCreateWithoutAdministradorInput, productosUncheckedCreateWithoutAdministradorInput>
  }

  export type productosUpdateWithWhereUniqueWithoutAdministradorInput = {
    where: productosWhereUniqueInput
    data: XOR<productosUpdateWithoutAdministradorInput, productosUncheckedUpdateWithoutAdministradorInput>
  }

  export type productosUpdateManyWithWhereWithoutAdministradorInput = {
    where: productosScalarWhereInput
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyWithoutAdministradorInput>
  }

  export type productosScalarWhereInput = {
    AND?: productosScalarWhereInput | productosScalarWhereInput[]
    OR?: productosScalarWhereInput[]
    NOT?: productosScalarWhereInput | productosScalarWhereInput[]
    idProducto?: IntFilter<"productos"> | number
    idCategoria?: IntFilter<"productos"> | number
    idAdmin?: IntFilter<"productos"> | number
    nombre?: StringFilter<"productos"> | string
    descripcion?: StringFilter<"productos"> | string
    imagen_url?: StringFilter<"productos"> | string
    precio?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeFilter<"productos"> | Date | string
    actualizado?: DateTimeFilter<"productos"> | Date | string
  }

  export type serviciosUpsertWithWhereUniqueWithoutAdministradorInput = {
    where: serviciosWhereUniqueInput
    update: XOR<serviciosUpdateWithoutAdministradorInput, serviciosUncheckedUpdateWithoutAdministradorInput>
    create: XOR<serviciosCreateWithoutAdministradorInput, serviciosUncheckedCreateWithoutAdministradorInput>
  }

  export type serviciosUpdateWithWhereUniqueWithoutAdministradorInput = {
    where: serviciosWhereUniqueInput
    data: XOR<serviciosUpdateWithoutAdministradorInput, serviciosUncheckedUpdateWithoutAdministradorInput>
  }

  export type serviciosUpdateManyWithWhereWithoutAdministradorInput = {
    where: serviciosScalarWhereInput
    data: XOR<serviciosUpdateManyMutationInput, serviciosUncheckedUpdateManyWithoutAdministradorInput>
  }

  export type serviciosScalarWhereInput = {
    AND?: serviciosScalarWhereInput | serviciosScalarWhereInput[]
    OR?: serviciosScalarWhereInput[]
    NOT?: serviciosScalarWhereInput | serviciosScalarWhereInput[]
    idServicio?: IntFilter<"servicios"> | number
    idAdmin?: IntFilter<"servicios"> | number
    nombre?: StringFilter<"servicios"> | string
    descripcion?: StringFilter<"servicios"> | string
    creado?: DateTimeFilter<"servicios"> | Date | string
    actualizado?: DateTimeFilter<"servicios"> | Date | string
  }

  export type administradorCreateWithoutCategoriasInput = {
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    clientes?: clientesCreateNestedManyWithoutAdministradorInput
    configuraciones?: configuracionesCreateNestedManyWithoutAdministradorInput
    paginas?: paginasCreateNestedManyWithoutAdministradorInput
    productos?: productosCreateNestedManyWithoutAdministradorInput
    servicios?: serviciosCreateNestedManyWithoutAdministradorInput
  }

  export type administradorUncheckedCreateWithoutCategoriasInput = {
    idAdmin?: number
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    clientes?: clientesUncheckedCreateNestedManyWithoutAdministradorInput
    configuraciones?: configuracionesUncheckedCreateNestedManyWithoutAdministradorInput
    paginas?: paginasUncheckedCreateNestedManyWithoutAdministradorInput
    productos?: productosUncheckedCreateNestedManyWithoutAdministradorInput
    servicios?: serviciosUncheckedCreateNestedManyWithoutAdministradorInput
  }

  export type administradorCreateOrConnectWithoutCategoriasInput = {
    where: administradorWhereUniqueInput
    create: XOR<administradorCreateWithoutCategoriasInput, administradorUncheckedCreateWithoutCategoriasInput>
  }

  export type productosCreateWithoutCategoriasInput = {
    nombre: string
    descripcion: string
    imagen_url: string
    precio?: Decimal | DecimalJsLike | number | string | null
    creado: Date | string
    actualizado: Date | string
    administrador: administradorCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutCategoriasInput = {
    idProducto?: number
    idAdmin: number
    nombre: string
    descripcion: string
    imagen_url: string
    precio?: Decimal | DecimalJsLike | number | string | null
    creado: Date | string
    actualizado: Date | string
  }

  export type productosCreateOrConnectWithoutCategoriasInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput>
  }

  export type productosCreateManyCategoriasInputEnvelope = {
    data: productosCreateManyCategoriasInput | productosCreateManyCategoriasInput[]
    skipDuplicates?: boolean
  }

  export type administradorUpsertWithoutCategoriasInput = {
    update: XOR<administradorUpdateWithoutCategoriasInput, administradorUncheckedUpdateWithoutCategoriasInput>
    create: XOR<administradorCreateWithoutCategoriasInput, administradorUncheckedCreateWithoutCategoriasInput>
    where?: administradorWhereInput
  }

  export type administradorUpdateToOneWithWhereWithoutCategoriasInput = {
    where?: administradorWhereInput
    data: XOR<administradorUpdateWithoutCategoriasInput, administradorUncheckedUpdateWithoutCategoriasInput>
  }

  export type administradorUpdateWithoutCategoriasInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateManyWithoutAdministradorNestedInput
    configuraciones?: configuracionesUpdateManyWithoutAdministradorNestedInput
    paginas?: paginasUpdateManyWithoutAdministradorNestedInput
    productos?: productosUpdateManyWithoutAdministradorNestedInput
    servicios?: serviciosUpdateManyWithoutAdministradorNestedInput
  }

  export type administradorUncheckedUpdateWithoutCategoriasInput = {
    idAdmin?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUncheckedUpdateManyWithoutAdministradorNestedInput
    configuraciones?: configuracionesUncheckedUpdateManyWithoutAdministradorNestedInput
    paginas?: paginasUncheckedUpdateManyWithoutAdministradorNestedInput
    productos?: productosUncheckedUpdateManyWithoutAdministradorNestedInput
    servicios?: serviciosUncheckedUpdateManyWithoutAdministradorNestedInput
  }

  export type productosUpsertWithWhereUniqueWithoutCategoriasInput = {
    where: productosWhereUniqueInput
    update: XOR<productosUpdateWithoutCategoriasInput, productosUncheckedUpdateWithoutCategoriasInput>
    create: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput>
  }

  export type productosUpdateWithWhereUniqueWithoutCategoriasInput = {
    where: productosWhereUniqueInput
    data: XOR<productosUpdateWithoutCategoriasInput, productosUncheckedUpdateWithoutCategoriasInput>
  }

  export type productosUpdateManyWithWhereWithoutCategoriasInput = {
    where: productosScalarWhereInput
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyWithoutCategoriasInput>
  }

  export type administradorCreateWithoutClientesInput = {
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    categorias?: categoriasCreateNestedManyWithoutAdministradorInput
    configuraciones?: configuracionesCreateNestedManyWithoutAdministradorInput
    paginas?: paginasCreateNestedManyWithoutAdministradorInput
    productos?: productosCreateNestedManyWithoutAdministradorInput
    servicios?: serviciosCreateNestedManyWithoutAdministradorInput
  }

  export type administradorUncheckedCreateWithoutClientesInput = {
    idAdmin?: number
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    categorias?: categoriasUncheckedCreateNestedManyWithoutAdministradorInput
    configuraciones?: configuracionesUncheckedCreateNestedManyWithoutAdministradorInput
    paginas?: paginasUncheckedCreateNestedManyWithoutAdministradorInput
    productos?: productosUncheckedCreateNestedManyWithoutAdministradorInput
    servicios?: serviciosUncheckedCreateNestedManyWithoutAdministradorInput
  }

  export type administradorCreateOrConnectWithoutClientesInput = {
    where: administradorWhereUniqueInput
    create: XOR<administradorCreateWithoutClientesInput, administradorUncheckedCreateWithoutClientesInput>
  }

  export type administradorUpsertWithoutClientesInput = {
    update: XOR<administradorUpdateWithoutClientesInput, administradorUncheckedUpdateWithoutClientesInput>
    create: XOR<administradorCreateWithoutClientesInput, administradorUncheckedCreateWithoutClientesInput>
    where?: administradorWhereInput
  }

  export type administradorUpdateToOneWithWhereWithoutClientesInput = {
    where?: administradorWhereInput
    data: XOR<administradorUpdateWithoutClientesInput, administradorUncheckedUpdateWithoutClientesInput>
  }

  export type administradorUpdateWithoutClientesInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUpdateManyWithoutAdministradorNestedInput
    configuraciones?: configuracionesUpdateManyWithoutAdministradorNestedInput
    paginas?: paginasUpdateManyWithoutAdministradorNestedInput
    productos?: productosUpdateManyWithoutAdministradorNestedInput
    servicios?: serviciosUpdateManyWithoutAdministradorNestedInput
  }

  export type administradorUncheckedUpdateWithoutClientesInput = {
    idAdmin?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUncheckedUpdateManyWithoutAdministradorNestedInput
    configuraciones?: configuracionesUncheckedUpdateManyWithoutAdministradorNestedInput
    paginas?: paginasUncheckedUpdateManyWithoutAdministradorNestedInput
    productos?: productosUncheckedUpdateManyWithoutAdministradorNestedInput
    servicios?: serviciosUncheckedUpdateManyWithoutAdministradorNestedInput
  }

  export type administradorCreateWithoutConfiguracionesInput = {
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    categorias?: categoriasCreateNestedManyWithoutAdministradorInput
    clientes?: clientesCreateNestedManyWithoutAdministradorInput
    paginas?: paginasCreateNestedManyWithoutAdministradorInput
    productos?: productosCreateNestedManyWithoutAdministradorInput
    servicios?: serviciosCreateNestedManyWithoutAdministradorInput
  }

  export type administradorUncheckedCreateWithoutConfiguracionesInput = {
    idAdmin?: number
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    categorias?: categoriasUncheckedCreateNestedManyWithoutAdministradorInput
    clientes?: clientesUncheckedCreateNestedManyWithoutAdministradorInput
    paginas?: paginasUncheckedCreateNestedManyWithoutAdministradorInput
    productos?: productosUncheckedCreateNestedManyWithoutAdministradorInput
    servicios?: serviciosUncheckedCreateNestedManyWithoutAdministradorInput
  }

  export type administradorCreateOrConnectWithoutConfiguracionesInput = {
    where: administradorWhereUniqueInput
    create: XOR<administradorCreateWithoutConfiguracionesInput, administradorUncheckedCreateWithoutConfiguracionesInput>
  }

  export type administradorUpsertWithoutConfiguracionesInput = {
    update: XOR<administradorUpdateWithoutConfiguracionesInput, administradorUncheckedUpdateWithoutConfiguracionesInput>
    create: XOR<administradorCreateWithoutConfiguracionesInput, administradorUncheckedCreateWithoutConfiguracionesInput>
    where?: administradorWhereInput
  }

  export type administradorUpdateToOneWithWhereWithoutConfiguracionesInput = {
    where?: administradorWhereInput
    data: XOR<administradorUpdateWithoutConfiguracionesInput, administradorUncheckedUpdateWithoutConfiguracionesInput>
  }

  export type administradorUpdateWithoutConfiguracionesInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUpdateManyWithoutAdministradorNestedInput
    clientes?: clientesUpdateManyWithoutAdministradorNestedInput
    paginas?: paginasUpdateManyWithoutAdministradorNestedInput
    productos?: productosUpdateManyWithoutAdministradorNestedInput
    servicios?: serviciosUpdateManyWithoutAdministradorNestedInput
  }

  export type administradorUncheckedUpdateWithoutConfiguracionesInput = {
    idAdmin?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUncheckedUpdateManyWithoutAdministradorNestedInput
    clientes?: clientesUncheckedUpdateManyWithoutAdministradorNestedInput
    paginas?: paginasUncheckedUpdateManyWithoutAdministradorNestedInput
    productos?: productosUncheckedUpdateManyWithoutAdministradorNestedInput
    servicios?: serviciosUncheckedUpdateManyWithoutAdministradorNestedInput
  }

  export type administradorCreateWithoutPaginasInput = {
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    categorias?: categoriasCreateNestedManyWithoutAdministradorInput
    clientes?: clientesCreateNestedManyWithoutAdministradorInput
    configuraciones?: configuracionesCreateNestedManyWithoutAdministradorInput
    productos?: productosCreateNestedManyWithoutAdministradorInput
    servicios?: serviciosCreateNestedManyWithoutAdministradorInput
  }

  export type administradorUncheckedCreateWithoutPaginasInput = {
    idAdmin?: number
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    categorias?: categoriasUncheckedCreateNestedManyWithoutAdministradorInput
    clientes?: clientesUncheckedCreateNestedManyWithoutAdministradorInput
    configuraciones?: configuracionesUncheckedCreateNestedManyWithoutAdministradorInput
    productos?: productosUncheckedCreateNestedManyWithoutAdministradorInput
    servicios?: serviciosUncheckedCreateNestedManyWithoutAdministradorInput
  }

  export type administradorCreateOrConnectWithoutPaginasInput = {
    where: administradorWhereUniqueInput
    create: XOR<administradorCreateWithoutPaginasInput, administradorUncheckedCreateWithoutPaginasInput>
  }

  export type administradorUpsertWithoutPaginasInput = {
    update: XOR<administradorUpdateWithoutPaginasInput, administradorUncheckedUpdateWithoutPaginasInput>
    create: XOR<administradorCreateWithoutPaginasInput, administradorUncheckedCreateWithoutPaginasInput>
    where?: administradorWhereInput
  }

  export type administradorUpdateToOneWithWhereWithoutPaginasInput = {
    where?: administradorWhereInput
    data: XOR<administradorUpdateWithoutPaginasInput, administradorUncheckedUpdateWithoutPaginasInput>
  }

  export type administradorUpdateWithoutPaginasInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUpdateManyWithoutAdministradorNestedInput
    clientes?: clientesUpdateManyWithoutAdministradorNestedInput
    configuraciones?: configuracionesUpdateManyWithoutAdministradorNestedInput
    productos?: productosUpdateManyWithoutAdministradorNestedInput
    servicios?: serviciosUpdateManyWithoutAdministradorNestedInput
  }

  export type administradorUncheckedUpdateWithoutPaginasInput = {
    idAdmin?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUncheckedUpdateManyWithoutAdministradorNestedInput
    clientes?: clientesUncheckedUpdateManyWithoutAdministradorNestedInput
    configuraciones?: configuracionesUncheckedUpdateManyWithoutAdministradorNestedInput
    productos?: productosUncheckedUpdateManyWithoutAdministradorNestedInput
    servicios?: serviciosUncheckedUpdateManyWithoutAdministradorNestedInput
  }

  export type administradorCreateWithoutProductosInput = {
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    categorias?: categoriasCreateNestedManyWithoutAdministradorInput
    clientes?: clientesCreateNestedManyWithoutAdministradorInput
    configuraciones?: configuracionesCreateNestedManyWithoutAdministradorInput
    paginas?: paginasCreateNestedManyWithoutAdministradorInput
    servicios?: serviciosCreateNestedManyWithoutAdministradorInput
  }

  export type administradorUncheckedCreateWithoutProductosInput = {
    idAdmin?: number
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    categorias?: categoriasUncheckedCreateNestedManyWithoutAdministradorInput
    clientes?: clientesUncheckedCreateNestedManyWithoutAdministradorInput
    configuraciones?: configuracionesUncheckedCreateNestedManyWithoutAdministradorInput
    paginas?: paginasUncheckedCreateNestedManyWithoutAdministradorInput
    servicios?: serviciosUncheckedCreateNestedManyWithoutAdministradorInput
  }

  export type administradorCreateOrConnectWithoutProductosInput = {
    where: administradorWhereUniqueInput
    create: XOR<administradorCreateWithoutProductosInput, administradorUncheckedCreateWithoutProductosInput>
  }

  export type categoriasCreateWithoutProductosInput = {
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
    administrador: administradorCreateNestedOneWithoutCategoriasInput
  }

  export type categoriasUncheckedCreateWithoutProductosInput = {
    idCategoria?: number
    idAdmin: number
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
  }

  export type categoriasCreateOrConnectWithoutProductosInput = {
    where: categoriasWhereUniqueInput
    create: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
  }

  export type administradorUpsertWithoutProductosInput = {
    update: XOR<administradorUpdateWithoutProductosInput, administradorUncheckedUpdateWithoutProductosInput>
    create: XOR<administradorCreateWithoutProductosInput, administradorUncheckedCreateWithoutProductosInput>
    where?: administradorWhereInput
  }

  export type administradorUpdateToOneWithWhereWithoutProductosInput = {
    where?: administradorWhereInput
    data: XOR<administradorUpdateWithoutProductosInput, administradorUncheckedUpdateWithoutProductosInput>
  }

  export type administradorUpdateWithoutProductosInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUpdateManyWithoutAdministradorNestedInput
    clientes?: clientesUpdateManyWithoutAdministradorNestedInput
    configuraciones?: configuracionesUpdateManyWithoutAdministradorNestedInput
    paginas?: paginasUpdateManyWithoutAdministradorNestedInput
    servicios?: serviciosUpdateManyWithoutAdministradorNestedInput
  }

  export type administradorUncheckedUpdateWithoutProductosInput = {
    idAdmin?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUncheckedUpdateManyWithoutAdministradorNestedInput
    clientes?: clientesUncheckedUpdateManyWithoutAdministradorNestedInput
    configuraciones?: configuracionesUncheckedUpdateManyWithoutAdministradorNestedInput
    paginas?: paginasUncheckedUpdateManyWithoutAdministradorNestedInput
    servicios?: serviciosUncheckedUpdateManyWithoutAdministradorNestedInput
  }

  export type categoriasUpsertWithoutProductosInput = {
    update: XOR<categoriasUpdateWithoutProductosInput, categoriasUncheckedUpdateWithoutProductosInput>
    create: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    where?: categoriasWhereInput
  }

  export type categoriasUpdateToOneWithWhereWithoutProductosInput = {
    where?: categoriasWhereInput
    data: XOR<categoriasUpdateWithoutProductosInput, categoriasUncheckedUpdateWithoutProductosInput>
  }

  export type categoriasUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    administrador?: administradorUpdateOneRequiredWithoutCategoriasNestedInput
  }

  export type categoriasUncheckedUpdateWithoutProductosInput = {
    idCategoria?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type administradorCreateWithoutServiciosInput = {
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    categorias?: categoriasCreateNestedManyWithoutAdministradorInput
    clientes?: clientesCreateNestedManyWithoutAdministradorInput
    configuraciones?: configuracionesCreateNestedManyWithoutAdministradorInput
    paginas?: paginasCreateNestedManyWithoutAdministradorInput
    productos?: productosCreateNestedManyWithoutAdministradorInput
  }

  export type administradorUncheckedCreateWithoutServiciosInput = {
    idAdmin?: number
    usuario: string
    contrase_a: string
    correo: string
    rol?: $Enums.administrador_rol
    creado: Date | string
    actualizado: Date | string
    categorias?: categoriasUncheckedCreateNestedManyWithoutAdministradorInput
    clientes?: clientesUncheckedCreateNestedManyWithoutAdministradorInput
    configuraciones?: configuracionesUncheckedCreateNestedManyWithoutAdministradorInput
    paginas?: paginasUncheckedCreateNestedManyWithoutAdministradorInput
    productos?: productosUncheckedCreateNestedManyWithoutAdministradorInput
  }

  export type administradorCreateOrConnectWithoutServiciosInput = {
    where: administradorWhereUniqueInput
    create: XOR<administradorCreateWithoutServiciosInput, administradorUncheckedCreateWithoutServiciosInput>
  }

  export type administradorUpsertWithoutServiciosInput = {
    update: XOR<administradorUpdateWithoutServiciosInput, administradorUncheckedUpdateWithoutServiciosInput>
    create: XOR<administradorCreateWithoutServiciosInput, administradorUncheckedCreateWithoutServiciosInput>
    where?: administradorWhereInput
  }

  export type administradorUpdateToOneWithWhereWithoutServiciosInput = {
    where?: administradorWhereInput
    data: XOR<administradorUpdateWithoutServiciosInput, administradorUncheckedUpdateWithoutServiciosInput>
  }

  export type administradorUpdateWithoutServiciosInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUpdateManyWithoutAdministradorNestedInput
    clientes?: clientesUpdateManyWithoutAdministradorNestedInput
    configuraciones?: configuracionesUpdateManyWithoutAdministradorNestedInput
    paginas?: paginasUpdateManyWithoutAdministradorNestedInput
    productos?: productosUpdateManyWithoutAdministradorNestedInput
  }

  export type administradorUncheckedUpdateWithoutServiciosInput = {
    idAdmin?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: Enumadministrador_rolFieldUpdateOperationsInput | $Enums.administrador_rol
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUncheckedUpdateManyWithoutAdministradorNestedInput
    clientes?: clientesUncheckedUpdateManyWithoutAdministradorNestedInput
    configuraciones?: configuracionesUncheckedUpdateManyWithoutAdministradorNestedInput
    paginas?: paginasUncheckedUpdateManyWithoutAdministradorNestedInput
    productos?: productosUncheckedUpdateManyWithoutAdministradorNestedInput
  }

  export type categoriasCreateManyAdministradorInput = {
    idCategoria?: number
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
  }

  export type clientesCreateManyAdministradorInput = {
    idCliente?: number
    nombre: string
    apellido: string
    correo: string
    contrase_a: string
    telefono: string
    direccion: string
    ciudad: string
    mensaje: string
    fecha: Date | string
  }

  export type configuracionesCreateManyAdministradorInput = {
    idConfiguracion?: number
    nombre: string
    valor: string
    descripcion?: string | null
    creado: Date | string
    actualizado: Date | string
  }

  export type paginasCreateManyAdministradorInput = {
    idPagina?: number
    nombre: string
    contenido: string
    tipo: $Enums.paginas_tipo
    creado: Date | string
    actualizado: Date | string
  }

  export type productosCreateManyAdministradorInput = {
    idProducto?: number
    idCategoria: number
    nombre: string
    descripcion: string
    imagen_url: string
    precio?: Decimal | DecimalJsLike | number | string | null
    creado: Date | string
    actualizado: Date | string
  }

  export type serviciosCreateManyAdministradorInput = {
    idServicio?: number
    nombre: string
    descripcion: string
    creado: Date | string
    actualizado: Date | string
  }

  export type categoriasUpdateWithoutAdministradorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasUncheckedUpdateWithoutAdministradorInput = {
    idCategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUncheckedUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasUncheckedUpdateManyWithoutAdministradorInput = {
    idCategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientesUpdateWithoutAdministradorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientesUncheckedUpdateWithoutAdministradorInput = {
    idCliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientesUncheckedUpdateManyWithoutAdministradorInput = {
    idCliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configuracionesUpdateWithoutAdministradorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configuracionesUncheckedUpdateWithoutAdministradorInput = {
    idConfiguracion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configuracionesUncheckedUpdateManyWithoutAdministradorInput = {
    idConfiguracion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paginasUpdateWithoutAdministradorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: Enumpaginas_tipoFieldUpdateOperationsInput | $Enums.paginas_tipo
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paginasUncheckedUpdateWithoutAdministradorInput = {
    idPagina?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: Enumpaginas_tipoFieldUpdateOperationsInput | $Enums.paginas_tipo
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paginasUncheckedUpdateManyWithoutAdministradorInput = {
    idPagina?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: Enumpaginas_tipoFieldUpdateOperationsInput | $Enums.paginas_tipo
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosUpdateWithoutAdministradorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen_url?: StringFieldUpdateOperationsInput | string
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUpdateOneRequiredWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutAdministradorInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    idCategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen_url?: StringFieldUpdateOperationsInput | string
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosUncheckedUpdateManyWithoutAdministradorInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    idCategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen_url?: StringFieldUpdateOperationsInput | string
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type serviciosUpdateWithoutAdministradorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type serviciosUncheckedUpdateWithoutAdministradorInput = {
    idServicio?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type serviciosUncheckedUpdateManyWithoutAdministradorInput = {
    idServicio?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosCreateManyCategoriasInput = {
    idProducto?: number
    idAdmin: number
    nombre: string
    descripcion: string
    imagen_url: string
    precio?: Decimal | DecimalJsLike | number | string | null
    creado: Date | string
    actualizado: Date | string
  }

  export type productosUpdateWithoutCategoriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen_url?: StringFieldUpdateOperationsInput | string
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
    administrador?: administradorUpdateOneRequiredWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutCategoriasInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen_url?: StringFieldUpdateOperationsInput | string
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosUncheckedUpdateManyWithoutCategoriasInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    idAdmin?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen_url?: StringFieldUpdateOperationsInput | string
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}