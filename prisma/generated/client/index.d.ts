
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Histoire
 * 
 */
export type Histoire = $Result.DefaultSelection<Prisma.$HistoirePayload>
/**
 * Model Chapitre
 * 
 */
export type Chapitre = $Result.DefaultSelection<Prisma.$ChapitrePayload>
/**
 * Model Choix
 * 
 */
export type Choix = $Result.DefaultSelection<Prisma.$ChoixPayload>
/**
 * Model Objet
 * 
 */
export type Objet = $Result.DefaultSelection<Prisma.$ObjetPayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Sauvegarde
 * 
 */
export type Sauvegarde = $Result.DefaultSelection<Prisma.$SauvegardePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Histoires
 * const histoires = await prisma.histoire.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Histoires
   * const histoires = await prisma.histoire.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.histoire`: Exposes CRUD operations for the **Histoire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histoires
    * const histoires = await prisma.histoire.findMany()
    * ```
    */
  get histoire(): Prisma.HistoireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapitre`: Exposes CRUD operations for the **Chapitre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapitres
    * const chapitres = await prisma.chapitre.findMany()
    * ```
    */
  get chapitre(): Prisma.ChapitreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.choix`: Exposes CRUD operations for the **Choix** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Choixes
    * const choixes = await prisma.choix.findMany()
    * ```
    */
  get choix(): Prisma.ChoixDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.objet`: Exposes CRUD operations for the **Objet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Objets
    * const objets = await prisma.objet.findMany()
    * ```
    */
  get objet(): Prisma.ObjetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sauvegarde`: Exposes CRUD operations for the **Sauvegarde** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sauvegardes
    * const sauvegardes = await prisma.sauvegarde.findMany()
    * ```
    */
  get sauvegarde(): Prisma.SauvegardeDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Histoire: 'Histoire',
    Chapitre: 'Chapitre',
    Choix: 'Choix',
    Objet: 'Objet',
    Article: 'Article',
    Admin: 'Admin',
    Utilisateur: 'Utilisateur',
    Sauvegarde: 'Sauvegarde'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "histoire" | "chapitre" | "choix" | "objet" | "article" | "admin" | "utilisateur" | "sauvegarde"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Histoire: {
        payload: Prisma.$HistoirePayload<ExtArgs>
        fields: Prisma.HistoireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>
          }
          findFirst: {
            args: Prisma.HistoireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>
          }
          findMany: {
            args: Prisma.HistoireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>[]
          }
          create: {
            args: Prisma.HistoireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>
          }
          createMany: {
            args: Prisma.HistoireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>[]
          }
          delete: {
            args: Prisma.HistoireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>
          }
          update: {
            args: Prisma.HistoireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>
          }
          deleteMany: {
            args: Prisma.HistoireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>[]
          }
          upsert: {
            args: Prisma.HistoireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>
          }
          aggregate: {
            args: Prisma.HistoireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoire>
          }
          groupBy: {
            args: Prisma.HistoireGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoireGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoireCountArgs<ExtArgs>
            result: $Utils.Optional<HistoireCountAggregateOutputType> | number
          }
        }
      }
      Chapitre: {
        payload: Prisma.$ChapitrePayload<ExtArgs>
        fields: Prisma.ChapitreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapitreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapitrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapitreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapitrePayload>
          }
          findFirst: {
            args: Prisma.ChapitreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapitrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapitreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapitrePayload>
          }
          findMany: {
            args: Prisma.ChapitreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapitrePayload>[]
          }
          create: {
            args: Prisma.ChapitreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapitrePayload>
          }
          createMany: {
            args: Prisma.ChapitreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChapitreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapitrePayload>[]
          }
          delete: {
            args: Prisma.ChapitreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapitrePayload>
          }
          update: {
            args: Prisma.ChapitreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapitrePayload>
          }
          deleteMany: {
            args: Prisma.ChapitreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapitreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChapitreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapitrePayload>[]
          }
          upsert: {
            args: Prisma.ChapitreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapitrePayload>
          }
          aggregate: {
            args: Prisma.ChapitreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapitre>
          }
          groupBy: {
            args: Prisma.ChapitreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapitreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapitreCountArgs<ExtArgs>
            result: $Utils.Optional<ChapitreCountAggregateOutputType> | number
          }
        }
      }
      Choix: {
        payload: Prisma.$ChoixPayload<ExtArgs>
        fields: Prisma.ChoixFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoixFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoixFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          findFirst: {
            args: Prisma.ChoixFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoixFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          findMany: {
            args: Prisma.ChoixFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>[]
          }
          create: {
            args: Prisma.ChoixCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          createMany: {
            args: Prisma.ChoixCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoixCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>[]
          }
          delete: {
            args: Prisma.ChoixDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          update: {
            args: Prisma.ChoixUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          deleteMany: {
            args: Prisma.ChoixDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoixUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChoixUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>[]
          }
          upsert: {
            args: Prisma.ChoixUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          aggregate: {
            args: Prisma.ChoixAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoix>
          }
          groupBy: {
            args: Prisma.ChoixGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoixGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoixCountArgs<ExtArgs>
            result: $Utils.Optional<ChoixCountAggregateOutputType> | number
          }
        }
      }
      Objet: {
        payload: Prisma.$ObjetPayload<ExtArgs>
        fields: Prisma.ObjetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObjetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObjetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetPayload>
          }
          findFirst: {
            args: Prisma.ObjetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObjetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetPayload>
          }
          findMany: {
            args: Prisma.ObjetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetPayload>[]
          }
          create: {
            args: Prisma.ObjetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetPayload>
          }
          createMany: {
            args: Prisma.ObjetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObjetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetPayload>[]
          }
          delete: {
            args: Prisma.ObjetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetPayload>
          }
          update: {
            args: Prisma.ObjetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetPayload>
          }
          deleteMany: {
            args: Prisma.ObjetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObjetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObjetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetPayload>[]
          }
          upsert: {
            args: Prisma.ObjetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetPayload>
          }
          aggregate: {
            args: Prisma.ObjetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObjet>
          }
          groupBy: {
            args: Prisma.ObjetGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObjetGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObjetCountArgs<ExtArgs>
            result: $Utils.Optional<ObjetCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Sauvegarde: {
        payload: Prisma.$SauvegardePayload<ExtArgs>
        fields: Prisma.SauvegardeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SauvegardeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SauvegardeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>
          }
          findFirst: {
            args: Prisma.SauvegardeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SauvegardeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>
          }
          findMany: {
            args: Prisma.SauvegardeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>[]
          }
          create: {
            args: Prisma.SauvegardeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>
          }
          createMany: {
            args: Prisma.SauvegardeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SauvegardeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>[]
          }
          delete: {
            args: Prisma.SauvegardeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>
          }
          update: {
            args: Prisma.SauvegardeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>
          }
          deleteMany: {
            args: Prisma.SauvegardeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SauvegardeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SauvegardeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>[]
          }
          upsert: {
            args: Prisma.SauvegardeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>
          }
          aggregate: {
            args: Prisma.SauvegardeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSauvegarde>
          }
          groupBy: {
            args: Prisma.SauvegardeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SauvegardeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SauvegardeCountArgs<ExtArgs>
            result: $Utils.Optional<SauvegardeCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    histoire?: HistoireOmit
    chapitre?: ChapitreOmit
    choix?: ChoixOmit
    objet?: ObjetOmit
    article?: ArticleOmit
    admin?: AdminOmit
    utilisateur?: UtilisateurOmit
    sauvegarde?: SauvegardeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type HistoireCountOutputType
   */

  export type HistoireCountOutputType = {
    chapitres: number
    objets: number
    sauvegardes: number
  }

  export type HistoireCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapitres?: boolean | HistoireCountOutputTypeCountChapitresArgs
    objets?: boolean | HistoireCountOutputTypeCountObjetsArgs
    sauvegardes?: boolean | HistoireCountOutputTypeCountSauvegardesArgs
  }

  // Custom InputTypes
  /**
   * HistoireCountOutputType without action
   */
  export type HistoireCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoireCountOutputType
     */
    select?: HistoireCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HistoireCountOutputType without action
   */
  export type HistoireCountOutputTypeCountChapitresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapitreWhereInput
  }

  /**
   * HistoireCountOutputType without action
   */
  export type HistoireCountOutputTypeCountObjetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjetWhereInput
  }

  /**
   * HistoireCountOutputType without action
   */
  export type HistoireCountOutputTypeCountSauvegardesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SauvegardeWhereInput
  }


  /**
   * Count Type ChapitreCountOutputType
   */

  export type ChapitreCountOutputType = {
    choixSortants: number
    choixEntrants: number
    sauvegardes: number
  }

  export type ChapitreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choixSortants?: boolean | ChapitreCountOutputTypeCountChoixSortantsArgs
    choixEntrants?: boolean | ChapitreCountOutputTypeCountChoixEntrantsArgs
    sauvegardes?: boolean | ChapitreCountOutputTypeCountSauvegardesArgs
  }

  // Custom InputTypes
  /**
   * ChapitreCountOutputType without action
   */
  export type ChapitreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapitreCountOutputType
     */
    select?: ChapitreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapitreCountOutputType without action
   */
  export type ChapitreCountOutputTypeCountChoixSortantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoixWhereInput
  }

  /**
   * ChapitreCountOutputType without action
   */
  export type ChapitreCountOutputTypeCountChoixEntrantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoixWhereInput
  }

  /**
   * ChapitreCountOutputType without action
   */
  export type ChapitreCountOutputTypeCountSauvegardesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SauvegardeWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    histoires: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histoires?: boolean | AdminCountOutputTypeCountHistoiresArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountHistoiresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoireWhereInput
  }


  /**
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    sauvegardes: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sauvegardes?: boolean | UtilisateurCountOutputTypeCountSauvegardesArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountSauvegardesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SauvegardeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Histoire
   */

  export type AggregateHistoire = {
    _count: HistoireCountAggregateOutputType | null
    _min: HistoireMinAggregateOutputType | null
    _max: HistoireMaxAggregateOutputType | null
  }

  export type HistoireMinAggregateOutputType = {
    id: string | null
    titre: string | null
    slug: string | null
    resume: string | null
    description: string | null
    image: string | null
    statut: string | null
    pointDeDepart: string | null
    dateCreation: Date | null
    dateMiseAJour: Date | null
    auteurId: string | null
  }

  export type HistoireMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    slug: string | null
    resume: string | null
    description: string | null
    image: string | null
    statut: string | null
    pointDeDepart: string | null
    dateCreation: Date | null
    dateMiseAJour: Date | null
    auteurId: string | null
  }

  export type HistoireCountAggregateOutputType = {
    id: number
    titre: number
    slug: number
    resume: number
    description: number
    image: number
    statut: number
    pointDeDepart: number
    dateCreation: number
    dateMiseAJour: number
    auteurId: number
    _all: number
  }


  export type HistoireMinAggregateInputType = {
    id?: true
    titre?: true
    slug?: true
    resume?: true
    description?: true
    image?: true
    statut?: true
    pointDeDepart?: true
    dateCreation?: true
    dateMiseAJour?: true
    auteurId?: true
  }

  export type HistoireMaxAggregateInputType = {
    id?: true
    titre?: true
    slug?: true
    resume?: true
    description?: true
    image?: true
    statut?: true
    pointDeDepart?: true
    dateCreation?: true
    dateMiseAJour?: true
    auteurId?: true
  }

  export type HistoireCountAggregateInputType = {
    id?: true
    titre?: true
    slug?: true
    resume?: true
    description?: true
    image?: true
    statut?: true
    pointDeDepart?: true
    dateCreation?: true
    dateMiseAJour?: true
    auteurId?: true
    _all?: true
  }

  export type HistoireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histoire to aggregate.
     */
    where?: HistoireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histoires to fetch.
     */
    orderBy?: HistoireOrderByWithRelationInput | HistoireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histoires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histoires
    **/
    _count?: true | HistoireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoireMaxAggregateInputType
  }

  export type GetHistoireAggregateType<T extends HistoireAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoire[P]>
      : GetScalarType<T[P], AggregateHistoire[P]>
  }




  export type HistoireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoireWhereInput
    orderBy?: HistoireOrderByWithAggregationInput | HistoireOrderByWithAggregationInput[]
    by: HistoireScalarFieldEnum[] | HistoireScalarFieldEnum
    having?: HistoireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoireCountAggregateInputType | true
    _min?: HistoireMinAggregateInputType
    _max?: HistoireMaxAggregateInputType
  }

  export type HistoireGroupByOutputType = {
    id: string
    titre: string
    slug: string
    resume: string | null
    description: string | null
    image: string | null
    statut: string
    pointDeDepart: string | null
    dateCreation: Date
    dateMiseAJour: Date
    auteurId: string | null
    _count: HistoireCountAggregateOutputType | null
    _min: HistoireMinAggregateOutputType | null
    _max: HistoireMaxAggregateOutputType | null
  }

  type GetHistoireGroupByPayload<T extends HistoireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoireGroupByOutputType[P]>
            : GetScalarType<T[P], HistoireGroupByOutputType[P]>
        }
      >
    >


  export type HistoireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    slug?: boolean
    resume?: boolean
    description?: boolean
    image?: boolean
    statut?: boolean
    pointDeDepart?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
    auteurId?: boolean
    auteur?: boolean | Histoire$auteurArgs<ExtArgs>
    chapitres?: boolean | Histoire$chapitresArgs<ExtArgs>
    objets?: boolean | Histoire$objetsArgs<ExtArgs>
    sauvegardes?: boolean | Histoire$sauvegardesArgs<ExtArgs>
    _count?: boolean | HistoireCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["histoire"]>

  export type HistoireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    slug?: boolean
    resume?: boolean
    description?: boolean
    image?: boolean
    statut?: boolean
    pointDeDepart?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
    auteurId?: boolean
    auteur?: boolean | Histoire$auteurArgs<ExtArgs>
  }, ExtArgs["result"]["histoire"]>

  export type HistoireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    slug?: boolean
    resume?: boolean
    description?: boolean
    image?: boolean
    statut?: boolean
    pointDeDepart?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
    auteurId?: boolean
    auteur?: boolean | Histoire$auteurArgs<ExtArgs>
  }, ExtArgs["result"]["histoire"]>

  export type HistoireSelectScalar = {
    id?: boolean
    titre?: boolean
    slug?: boolean
    resume?: boolean
    description?: boolean
    image?: boolean
    statut?: boolean
    pointDeDepart?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
    auteurId?: boolean
  }

  export type HistoireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "slug" | "resume" | "description" | "image" | "statut" | "pointDeDepart" | "dateCreation" | "dateMiseAJour" | "auteurId", ExtArgs["result"]["histoire"]>
  export type HistoireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | Histoire$auteurArgs<ExtArgs>
    chapitres?: boolean | Histoire$chapitresArgs<ExtArgs>
    objets?: boolean | Histoire$objetsArgs<ExtArgs>
    sauvegardes?: boolean | Histoire$sauvegardesArgs<ExtArgs>
    _count?: boolean | HistoireCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HistoireIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | Histoire$auteurArgs<ExtArgs>
  }
  export type HistoireIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | Histoire$auteurArgs<ExtArgs>
  }

  export type $HistoirePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Histoire"
    objects: {
      auteur: Prisma.$AdminPayload<ExtArgs> | null
      chapitres: Prisma.$ChapitrePayload<ExtArgs>[]
      objets: Prisma.$ObjetPayload<ExtArgs>[]
      sauvegardes: Prisma.$SauvegardePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      slug: string
      resume: string | null
      description: string | null
      image: string | null
      statut: string
      pointDeDepart: string | null
      dateCreation: Date
      dateMiseAJour: Date
      auteurId: string | null
    }, ExtArgs["result"]["histoire"]>
    composites: {}
  }

  type HistoireGetPayload<S extends boolean | null | undefined | HistoireDefaultArgs> = $Result.GetResult<Prisma.$HistoirePayload, S>

  type HistoireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoireCountAggregateInputType | true
    }

  export interface HistoireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Histoire'], meta: { name: 'Histoire' } }
    /**
     * Find zero or one Histoire that matches the filter.
     * @param {HistoireFindUniqueArgs} args - Arguments to find a Histoire
     * @example
     * // Get one Histoire
     * const histoire = await prisma.histoire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoireFindUniqueArgs>(args: SelectSubset<T, HistoireFindUniqueArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Histoire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoireFindUniqueOrThrowArgs} args - Arguments to find a Histoire
     * @example
     * // Get one Histoire
     * const histoire = await prisma.histoire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoireFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Histoire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireFindFirstArgs} args - Arguments to find a Histoire
     * @example
     * // Get one Histoire
     * const histoire = await prisma.histoire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoireFindFirstArgs>(args?: SelectSubset<T, HistoireFindFirstArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Histoire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireFindFirstOrThrowArgs} args - Arguments to find a Histoire
     * @example
     * // Get one Histoire
     * const histoire = await prisma.histoire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoireFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoireFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Histoires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histoires
     * const histoires = await prisma.histoire.findMany()
     * 
     * // Get first 10 Histoires
     * const histoires = await prisma.histoire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const histoireWithIdOnly = await prisma.histoire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoireFindManyArgs>(args?: SelectSubset<T, HistoireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Histoire.
     * @param {HistoireCreateArgs} args - Arguments to create a Histoire.
     * @example
     * // Create one Histoire
     * const Histoire = await prisma.histoire.create({
     *   data: {
     *     // ... data to create a Histoire
     *   }
     * })
     * 
     */
    create<T extends HistoireCreateArgs>(args: SelectSubset<T, HistoireCreateArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Histoires.
     * @param {HistoireCreateManyArgs} args - Arguments to create many Histoires.
     * @example
     * // Create many Histoires
     * const histoire = await prisma.histoire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoireCreateManyArgs>(args?: SelectSubset<T, HistoireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Histoires and returns the data saved in the database.
     * @param {HistoireCreateManyAndReturnArgs} args - Arguments to create many Histoires.
     * @example
     * // Create many Histoires
     * const histoire = await prisma.histoire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Histoires and only return the `id`
     * const histoireWithIdOnly = await prisma.histoire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoireCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Histoire.
     * @param {HistoireDeleteArgs} args - Arguments to delete one Histoire.
     * @example
     * // Delete one Histoire
     * const Histoire = await prisma.histoire.delete({
     *   where: {
     *     // ... filter to delete one Histoire
     *   }
     * })
     * 
     */
    delete<T extends HistoireDeleteArgs>(args: SelectSubset<T, HistoireDeleteArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Histoire.
     * @param {HistoireUpdateArgs} args - Arguments to update one Histoire.
     * @example
     * // Update one Histoire
     * const histoire = await prisma.histoire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoireUpdateArgs>(args: SelectSubset<T, HistoireUpdateArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Histoires.
     * @param {HistoireDeleteManyArgs} args - Arguments to filter Histoires to delete.
     * @example
     * // Delete a few Histoires
     * const { count } = await prisma.histoire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoireDeleteManyArgs>(args?: SelectSubset<T, HistoireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histoires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histoires
     * const histoire = await prisma.histoire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoireUpdateManyArgs>(args: SelectSubset<T, HistoireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histoires and returns the data updated in the database.
     * @param {HistoireUpdateManyAndReturnArgs} args - Arguments to update many Histoires.
     * @example
     * // Update many Histoires
     * const histoire = await prisma.histoire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Histoires and only return the `id`
     * const histoireWithIdOnly = await prisma.histoire.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoireUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Histoire.
     * @param {HistoireUpsertArgs} args - Arguments to update or create a Histoire.
     * @example
     * // Update or create a Histoire
     * const histoire = await prisma.histoire.upsert({
     *   create: {
     *     // ... data to create a Histoire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Histoire we want to update
     *   }
     * })
     */
    upsert<T extends HistoireUpsertArgs>(args: SelectSubset<T, HistoireUpsertArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Histoires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireCountArgs} args - Arguments to filter Histoires to count.
     * @example
     * // Count the number of Histoires
     * const count = await prisma.histoire.count({
     *   where: {
     *     // ... the filter for the Histoires we want to count
     *   }
     * })
    **/
    count<T extends HistoireCountArgs>(
      args?: Subset<T, HistoireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Histoire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoireAggregateArgs>(args: Subset<T, HistoireAggregateArgs>): Prisma.PrismaPromise<GetHistoireAggregateType<T>>

    /**
     * Group by Histoire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireGroupByArgs} args - Group by arguments.
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
      T extends HistoireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoireGroupByArgs['orderBy'] }
        : { orderBy?: HistoireGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Histoire model
   */
  readonly fields: HistoireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Histoire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auteur<T extends Histoire$auteurArgs<ExtArgs> = {}>(args?: Subset<T, Histoire$auteurArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chapitres<T extends Histoire$chapitresArgs<ExtArgs> = {}>(args?: Subset<T, Histoire$chapitresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    objets<T extends Histoire$objetsArgs<ExtArgs> = {}>(args?: Subset<T, Histoire$objetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sauvegardes<T extends Histoire$sauvegardesArgs<ExtArgs> = {}>(args?: Subset<T, Histoire$sauvegardesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Histoire model
   */
  interface HistoireFieldRefs {
    readonly id: FieldRef<"Histoire", 'String'>
    readonly titre: FieldRef<"Histoire", 'String'>
    readonly slug: FieldRef<"Histoire", 'String'>
    readonly resume: FieldRef<"Histoire", 'String'>
    readonly description: FieldRef<"Histoire", 'String'>
    readonly image: FieldRef<"Histoire", 'String'>
    readonly statut: FieldRef<"Histoire", 'String'>
    readonly pointDeDepart: FieldRef<"Histoire", 'String'>
    readonly dateCreation: FieldRef<"Histoire", 'DateTime'>
    readonly dateMiseAJour: FieldRef<"Histoire", 'DateTime'>
    readonly auteurId: FieldRef<"Histoire", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Histoire findUnique
   */
  export type HistoireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireInclude<ExtArgs> | null
    /**
     * Filter, which Histoire to fetch.
     */
    where: HistoireWhereUniqueInput
  }

  /**
   * Histoire findUniqueOrThrow
   */
  export type HistoireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireInclude<ExtArgs> | null
    /**
     * Filter, which Histoire to fetch.
     */
    where: HistoireWhereUniqueInput
  }

  /**
   * Histoire findFirst
   */
  export type HistoireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireInclude<ExtArgs> | null
    /**
     * Filter, which Histoire to fetch.
     */
    where?: HistoireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histoires to fetch.
     */
    orderBy?: HistoireOrderByWithRelationInput | HistoireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histoires.
     */
    cursor?: HistoireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histoires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histoires.
     */
    distinct?: HistoireScalarFieldEnum | HistoireScalarFieldEnum[]
  }

  /**
   * Histoire findFirstOrThrow
   */
  export type HistoireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireInclude<ExtArgs> | null
    /**
     * Filter, which Histoire to fetch.
     */
    where?: HistoireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histoires to fetch.
     */
    orderBy?: HistoireOrderByWithRelationInput | HistoireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histoires.
     */
    cursor?: HistoireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histoires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histoires.
     */
    distinct?: HistoireScalarFieldEnum | HistoireScalarFieldEnum[]
  }

  /**
   * Histoire findMany
   */
  export type HistoireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireInclude<ExtArgs> | null
    /**
     * Filter, which Histoires to fetch.
     */
    where?: HistoireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histoires to fetch.
     */
    orderBy?: HistoireOrderByWithRelationInput | HistoireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histoires.
     */
    cursor?: HistoireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histoires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histoires.
     */
    distinct?: HistoireScalarFieldEnum | HistoireScalarFieldEnum[]
  }

  /**
   * Histoire create
   */
  export type HistoireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireInclude<ExtArgs> | null
    /**
     * The data needed to create a Histoire.
     */
    data: XOR<HistoireCreateInput, HistoireUncheckedCreateInput>
  }

  /**
   * Histoire createMany
   */
  export type HistoireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histoires.
     */
    data: HistoireCreateManyInput | HistoireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Histoire createManyAndReturn
   */
  export type HistoireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * The data used to create many Histoires.
     */
    data: HistoireCreateManyInput | HistoireCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Histoire update
   */
  export type HistoireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireInclude<ExtArgs> | null
    /**
     * The data needed to update a Histoire.
     */
    data: XOR<HistoireUpdateInput, HistoireUncheckedUpdateInput>
    /**
     * Choose, which Histoire to update.
     */
    where: HistoireWhereUniqueInput
  }

  /**
   * Histoire updateMany
   */
  export type HistoireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histoires.
     */
    data: XOR<HistoireUpdateManyMutationInput, HistoireUncheckedUpdateManyInput>
    /**
     * Filter which Histoires to update
     */
    where?: HistoireWhereInput
    /**
     * Limit how many Histoires to update.
     */
    limit?: number
  }

  /**
   * Histoire updateManyAndReturn
   */
  export type HistoireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * The data used to update Histoires.
     */
    data: XOR<HistoireUpdateManyMutationInput, HistoireUncheckedUpdateManyInput>
    /**
     * Filter which Histoires to update
     */
    where?: HistoireWhereInput
    /**
     * Limit how many Histoires to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Histoire upsert
   */
  export type HistoireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireInclude<ExtArgs> | null
    /**
     * The filter to search for the Histoire to update in case it exists.
     */
    where: HistoireWhereUniqueInput
    /**
     * In case the Histoire found by the `where` argument doesn't exist, create a new Histoire with this data.
     */
    create: XOR<HistoireCreateInput, HistoireUncheckedCreateInput>
    /**
     * In case the Histoire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoireUpdateInput, HistoireUncheckedUpdateInput>
  }

  /**
   * Histoire delete
   */
  export type HistoireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireInclude<ExtArgs> | null
    /**
     * Filter which Histoire to delete.
     */
    where: HistoireWhereUniqueInput
  }

  /**
   * Histoire deleteMany
   */
  export type HistoireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histoires to delete
     */
    where?: HistoireWhereInput
    /**
     * Limit how many Histoires to delete.
     */
    limit?: number
  }

  /**
   * Histoire.auteur
   */
  export type Histoire$auteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Histoire.chapitres
   */
  export type Histoire$chapitresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreInclude<ExtArgs> | null
    where?: ChapitreWhereInput
    orderBy?: ChapitreOrderByWithRelationInput | ChapitreOrderByWithRelationInput[]
    cursor?: ChapitreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapitreScalarFieldEnum | ChapitreScalarFieldEnum[]
  }

  /**
   * Histoire.objets
   */
  export type Histoire$objetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objet
     */
    select?: ObjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objet
     */
    omit?: ObjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetInclude<ExtArgs> | null
    where?: ObjetWhereInput
    orderBy?: ObjetOrderByWithRelationInput | ObjetOrderByWithRelationInput[]
    cursor?: ObjetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObjetScalarFieldEnum | ObjetScalarFieldEnum[]
  }

  /**
   * Histoire.sauvegardes
   */
  export type Histoire$sauvegardesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeInclude<ExtArgs> | null
    where?: SauvegardeWhereInput
    orderBy?: SauvegardeOrderByWithRelationInput | SauvegardeOrderByWithRelationInput[]
    cursor?: SauvegardeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SauvegardeScalarFieldEnum | SauvegardeScalarFieldEnum[]
  }

  /**
   * Histoire without action
   */
  export type HistoireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireInclude<ExtArgs> | null
  }


  /**
   * Model Chapitre
   */

  export type AggregateChapitre = {
    _count: ChapitreCountAggregateOutputType | null
    _avg: ChapitreAvgAggregateOutputType | null
    _sum: ChapitreSumAggregateOutputType | null
    _min: ChapitreMinAggregateOutputType | null
    _max: ChapitreMaxAggregateOutputType | null
  }

  export type ChapitreAvgAggregateOutputType = {
    ordre: number | null
  }

  export type ChapitreSumAggregateOutputType = {
    ordre: number | null
  }

  export type ChapitreMinAggregateOutputType = {
    id: string | null
    histoireId: string | null
    titreInterne: string | null
    contenu: string | null
    image: string | null
    ordre: number | null
  }

  export type ChapitreMaxAggregateOutputType = {
    id: string | null
    histoireId: string | null
    titreInterne: string | null
    contenu: string | null
    image: string | null
    ordre: number | null
  }

  export type ChapitreCountAggregateOutputType = {
    id: number
    histoireId: number
    titreInterne: number
    contenu: number
    image: number
    effetsEntree: number
    ordre: number
    _all: number
  }


  export type ChapitreAvgAggregateInputType = {
    ordre?: true
  }

  export type ChapitreSumAggregateInputType = {
    ordre?: true
  }

  export type ChapitreMinAggregateInputType = {
    id?: true
    histoireId?: true
    titreInterne?: true
    contenu?: true
    image?: true
    ordre?: true
  }

  export type ChapitreMaxAggregateInputType = {
    id?: true
    histoireId?: true
    titreInterne?: true
    contenu?: true
    image?: true
    ordre?: true
  }

  export type ChapitreCountAggregateInputType = {
    id?: true
    histoireId?: true
    titreInterne?: true
    contenu?: true
    image?: true
    effetsEntree?: true
    ordre?: true
    _all?: true
  }

  export type ChapitreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapitre to aggregate.
     */
    where?: ChapitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapitres to fetch.
     */
    orderBy?: ChapitreOrderByWithRelationInput | ChapitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapitres
    **/
    _count?: true | ChapitreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapitreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapitreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapitreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapitreMaxAggregateInputType
  }

  export type GetChapitreAggregateType<T extends ChapitreAggregateArgs> = {
        [P in keyof T & keyof AggregateChapitre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapitre[P]>
      : GetScalarType<T[P], AggregateChapitre[P]>
  }




  export type ChapitreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapitreWhereInput
    orderBy?: ChapitreOrderByWithAggregationInput | ChapitreOrderByWithAggregationInput[]
    by: ChapitreScalarFieldEnum[] | ChapitreScalarFieldEnum
    having?: ChapitreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapitreCountAggregateInputType | true
    _avg?: ChapitreAvgAggregateInputType
    _sum?: ChapitreSumAggregateInputType
    _min?: ChapitreMinAggregateInputType
    _max?: ChapitreMaxAggregateInputType
  }

  export type ChapitreGroupByOutputType = {
    id: string
    histoireId: string
    titreInterne: string | null
    contenu: string
    image: string | null
    effetsEntree: JsonValue | null
    ordre: number | null
    _count: ChapitreCountAggregateOutputType | null
    _avg: ChapitreAvgAggregateOutputType | null
    _sum: ChapitreSumAggregateOutputType | null
    _min: ChapitreMinAggregateOutputType | null
    _max: ChapitreMaxAggregateOutputType | null
  }

  type GetChapitreGroupByPayload<T extends ChapitreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapitreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapitreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapitreGroupByOutputType[P]>
            : GetScalarType<T[P], ChapitreGroupByOutputType[P]>
        }
      >
    >


  export type ChapitreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    histoireId?: boolean
    titreInterne?: boolean
    contenu?: boolean
    image?: boolean
    effetsEntree?: boolean
    ordre?: boolean
    histoire?: boolean | HistoireDefaultArgs<ExtArgs>
    choixSortants?: boolean | Chapitre$choixSortantsArgs<ExtArgs>
    choixEntrants?: boolean | Chapitre$choixEntrantsArgs<ExtArgs>
    sauvegardes?: boolean | Chapitre$sauvegardesArgs<ExtArgs>
    _count?: boolean | ChapitreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapitre"]>

  export type ChapitreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    histoireId?: boolean
    titreInterne?: boolean
    contenu?: boolean
    image?: boolean
    effetsEntree?: boolean
    ordre?: boolean
    histoire?: boolean | HistoireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapitre"]>

  export type ChapitreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    histoireId?: boolean
    titreInterne?: boolean
    contenu?: boolean
    image?: boolean
    effetsEntree?: boolean
    ordre?: boolean
    histoire?: boolean | HistoireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapitre"]>

  export type ChapitreSelectScalar = {
    id?: boolean
    histoireId?: boolean
    titreInterne?: boolean
    contenu?: boolean
    image?: boolean
    effetsEntree?: boolean
    ordre?: boolean
  }

  export type ChapitreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "histoireId" | "titreInterne" | "contenu" | "image" | "effetsEntree" | "ordre", ExtArgs["result"]["chapitre"]>
  export type ChapitreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histoire?: boolean | HistoireDefaultArgs<ExtArgs>
    choixSortants?: boolean | Chapitre$choixSortantsArgs<ExtArgs>
    choixEntrants?: boolean | Chapitre$choixEntrantsArgs<ExtArgs>
    sauvegardes?: boolean | Chapitre$sauvegardesArgs<ExtArgs>
    _count?: boolean | ChapitreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChapitreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histoire?: boolean | HistoireDefaultArgs<ExtArgs>
  }
  export type ChapitreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histoire?: boolean | HistoireDefaultArgs<ExtArgs>
  }

  export type $ChapitrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapitre"
    objects: {
      histoire: Prisma.$HistoirePayload<ExtArgs>
      choixSortants: Prisma.$ChoixPayload<ExtArgs>[]
      choixEntrants: Prisma.$ChoixPayload<ExtArgs>[]
      sauvegardes: Prisma.$SauvegardePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      histoireId: string
      titreInterne: string | null
      contenu: string
      image: string | null
      effetsEntree: Prisma.JsonValue | null
      ordre: number | null
    }, ExtArgs["result"]["chapitre"]>
    composites: {}
  }

  type ChapitreGetPayload<S extends boolean | null | undefined | ChapitreDefaultArgs> = $Result.GetResult<Prisma.$ChapitrePayload, S>

  type ChapitreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapitreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapitreCountAggregateInputType | true
    }

  export interface ChapitreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapitre'], meta: { name: 'Chapitre' } }
    /**
     * Find zero or one Chapitre that matches the filter.
     * @param {ChapitreFindUniqueArgs} args - Arguments to find a Chapitre
     * @example
     * // Get one Chapitre
     * const chapitre = await prisma.chapitre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapitreFindUniqueArgs>(args: SelectSubset<T, ChapitreFindUniqueArgs<ExtArgs>>): Prisma__ChapitreClient<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapitre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapitreFindUniqueOrThrowArgs} args - Arguments to find a Chapitre
     * @example
     * // Get one Chapitre
     * const chapitre = await prisma.chapitre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapitreFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapitreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapitreClient<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapitre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapitreFindFirstArgs} args - Arguments to find a Chapitre
     * @example
     * // Get one Chapitre
     * const chapitre = await prisma.chapitre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapitreFindFirstArgs>(args?: SelectSubset<T, ChapitreFindFirstArgs<ExtArgs>>): Prisma__ChapitreClient<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapitre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapitreFindFirstOrThrowArgs} args - Arguments to find a Chapitre
     * @example
     * // Get one Chapitre
     * const chapitre = await prisma.chapitre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapitreFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapitreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapitreClient<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapitres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapitreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapitres
     * const chapitres = await prisma.chapitre.findMany()
     * 
     * // Get first 10 Chapitres
     * const chapitres = await prisma.chapitre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapitreWithIdOnly = await prisma.chapitre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapitreFindManyArgs>(args?: SelectSubset<T, ChapitreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapitre.
     * @param {ChapitreCreateArgs} args - Arguments to create a Chapitre.
     * @example
     * // Create one Chapitre
     * const Chapitre = await prisma.chapitre.create({
     *   data: {
     *     // ... data to create a Chapitre
     *   }
     * })
     * 
     */
    create<T extends ChapitreCreateArgs>(args: SelectSubset<T, ChapitreCreateArgs<ExtArgs>>): Prisma__ChapitreClient<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapitres.
     * @param {ChapitreCreateManyArgs} args - Arguments to create many Chapitres.
     * @example
     * // Create many Chapitres
     * const chapitre = await prisma.chapitre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapitreCreateManyArgs>(args?: SelectSubset<T, ChapitreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapitres and returns the data saved in the database.
     * @param {ChapitreCreateManyAndReturnArgs} args - Arguments to create many Chapitres.
     * @example
     * // Create many Chapitres
     * const chapitre = await prisma.chapitre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapitres and only return the `id`
     * const chapitreWithIdOnly = await prisma.chapitre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChapitreCreateManyAndReturnArgs>(args?: SelectSubset<T, ChapitreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapitre.
     * @param {ChapitreDeleteArgs} args - Arguments to delete one Chapitre.
     * @example
     * // Delete one Chapitre
     * const Chapitre = await prisma.chapitre.delete({
     *   where: {
     *     // ... filter to delete one Chapitre
     *   }
     * })
     * 
     */
    delete<T extends ChapitreDeleteArgs>(args: SelectSubset<T, ChapitreDeleteArgs<ExtArgs>>): Prisma__ChapitreClient<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapitre.
     * @param {ChapitreUpdateArgs} args - Arguments to update one Chapitre.
     * @example
     * // Update one Chapitre
     * const chapitre = await prisma.chapitre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapitreUpdateArgs>(args: SelectSubset<T, ChapitreUpdateArgs<ExtArgs>>): Prisma__ChapitreClient<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapitres.
     * @param {ChapitreDeleteManyArgs} args - Arguments to filter Chapitres to delete.
     * @example
     * // Delete a few Chapitres
     * const { count } = await prisma.chapitre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapitreDeleteManyArgs>(args?: SelectSubset<T, ChapitreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapitres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapitreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapitres
     * const chapitre = await prisma.chapitre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapitreUpdateManyArgs>(args: SelectSubset<T, ChapitreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapitres and returns the data updated in the database.
     * @param {ChapitreUpdateManyAndReturnArgs} args - Arguments to update many Chapitres.
     * @example
     * // Update many Chapitres
     * const chapitre = await prisma.chapitre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapitres and only return the `id`
     * const chapitreWithIdOnly = await prisma.chapitre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChapitreUpdateManyAndReturnArgs>(args: SelectSubset<T, ChapitreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapitre.
     * @param {ChapitreUpsertArgs} args - Arguments to update or create a Chapitre.
     * @example
     * // Update or create a Chapitre
     * const chapitre = await prisma.chapitre.upsert({
     *   create: {
     *     // ... data to create a Chapitre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapitre we want to update
     *   }
     * })
     */
    upsert<T extends ChapitreUpsertArgs>(args: SelectSubset<T, ChapitreUpsertArgs<ExtArgs>>): Prisma__ChapitreClient<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapitres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapitreCountArgs} args - Arguments to filter Chapitres to count.
     * @example
     * // Count the number of Chapitres
     * const count = await prisma.chapitre.count({
     *   where: {
     *     // ... the filter for the Chapitres we want to count
     *   }
     * })
    **/
    count<T extends ChapitreCountArgs>(
      args?: Subset<T, ChapitreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapitreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapitre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapitreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapitreAggregateArgs>(args: Subset<T, ChapitreAggregateArgs>): Prisma.PrismaPromise<GetChapitreAggregateType<T>>

    /**
     * Group by Chapitre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapitreGroupByArgs} args - Group by arguments.
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
      T extends ChapitreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapitreGroupByArgs['orderBy'] }
        : { orderBy?: ChapitreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChapitreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapitreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapitre model
   */
  readonly fields: ChapitreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapitre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapitreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    histoire<T extends HistoireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HistoireDefaultArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    choixSortants<T extends Chapitre$choixSortantsArgs<ExtArgs> = {}>(args?: Subset<T, Chapitre$choixSortantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    choixEntrants<T extends Chapitre$choixEntrantsArgs<ExtArgs> = {}>(args?: Subset<T, Chapitre$choixEntrantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sauvegardes<T extends Chapitre$sauvegardesArgs<ExtArgs> = {}>(args?: Subset<T, Chapitre$sauvegardesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chapitre model
   */
  interface ChapitreFieldRefs {
    readonly id: FieldRef<"Chapitre", 'String'>
    readonly histoireId: FieldRef<"Chapitre", 'String'>
    readonly titreInterne: FieldRef<"Chapitre", 'String'>
    readonly contenu: FieldRef<"Chapitre", 'String'>
    readonly image: FieldRef<"Chapitre", 'String'>
    readonly effetsEntree: FieldRef<"Chapitre", 'Json'>
    readonly ordre: FieldRef<"Chapitre", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Chapitre findUnique
   */
  export type ChapitreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreInclude<ExtArgs> | null
    /**
     * Filter, which Chapitre to fetch.
     */
    where: ChapitreWhereUniqueInput
  }

  /**
   * Chapitre findUniqueOrThrow
   */
  export type ChapitreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreInclude<ExtArgs> | null
    /**
     * Filter, which Chapitre to fetch.
     */
    where: ChapitreWhereUniqueInput
  }

  /**
   * Chapitre findFirst
   */
  export type ChapitreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreInclude<ExtArgs> | null
    /**
     * Filter, which Chapitre to fetch.
     */
    where?: ChapitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapitres to fetch.
     */
    orderBy?: ChapitreOrderByWithRelationInput | ChapitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapitres.
     */
    cursor?: ChapitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapitres.
     */
    distinct?: ChapitreScalarFieldEnum | ChapitreScalarFieldEnum[]
  }

  /**
   * Chapitre findFirstOrThrow
   */
  export type ChapitreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreInclude<ExtArgs> | null
    /**
     * Filter, which Chapitre to fetch.
     */
    where?: ChapitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapitres to fetch.
     */
    orderBy?: ChapitreOrderByWithRelationInput | ChapitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapitres.
     */
    cursor?: ChapitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapitres.
     */
    distinct?: ChapitreScalarFieldEnum | ChapitreScalarFieldEnum[]
  }

  /**
   * Chapitre findMany
   */
  export type ChapitreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreInclude<ExtArgs> | null
    /**
     * Filter, which Chapitres to fetch.
     */
    where?: ChapitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapitres to fetch.
     */
    orderBy?: ChapitreOrderByWithRelationInput | ChapitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapitres.
     */
    cursor?: ChapitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapitres.
     */
    distinct?: ChapitreScalarFieldEnum | ChapitreScalarFieldEnum[]
  }

  /**
   * Chapitre create
   */
  export type ChapitreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapitre.
     */
    data: XOR<ChapitreCreateInput, ChapitreUncheckedCreateInput>
  }

  /**
   * Chapitre createMany
   */
  export type ChapitreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapitres.
     */
    data: ChapitreCreateManyInput | ChapitreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapitre createManyAndReturn
   */
  export type ChapitreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * The data used to create many Chapitres.
     */
    data: ChapitreCreateManyInput | ChapitreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapitre update
   */
  export type ChapitreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapitre.
     */
    data: XOR<ChapitreUpdateInput, ChapitreUncheckedUpdateInput>
    /**
     * Choose, which Chapitre to update.
     */
    where: ChapitreWhereUniqueInput
  }

  /**
   * Chapitre updateMany
   */
  export type ChapitreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapitres.
     */
    data: XOR<ChapitreUpdateManyMutationInput, ChapitreUncheckedUpdateManyInput>
    /**
     * Filter which Chapitres to update
     */
    where?: ChapitreWhereInput
    /**
     * Limit how many Chapitres to update.
     */
    limit?: number
  }

  /**
   * Chapitre updateManyAndReturn
   */
  export type ChapitreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * The data used to update Chapitres.
     */
    data: XOR<ChapitreUpdateManyMutationInput, ChapitreUncheckedUpdateManyInput>
    /**
     * Filter which Chapitres to update
     */
    where?: ChapitreWhereInput
    /**
     * Limit how many Chapitres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapitre upsert
   */
  export type ChapitreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapitre to update in case it exists.
     */
    where: ChapitreWhereUniqueInput
    /**
     * In case the Chapitre found by the `where` argument doesn't exist, create a new Chapitre with this data.
     */
    create: XOR<ChapitreCreateInput, ChapitreUncheckedCreateInput>
    /**
     * In case the Chapitre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapitreUpdateInput, ChapitreUncheckedUpdateInput>
  }

  /**
   * Chapitre delete
   */
  export type ChapitreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreInclude<ExtArgs> | null
    /**
     * Filter which Chapitre to delete.
     */
    where: ChapitreWhereUniqueInput
  }

  /**
   * Chapitre deleteMany
   */
  export type ChapitreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapitres to delete
     */
    where?: ChapitreWhereInput
    /**
     * Limit how many Chapitres to delete.
     */
    limit?: number
  }

  /**
   * Chapitre.choixSortants
   */
  export type Chapitre$choixSortantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    where?: ChoixWhereInput
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    cursor?: ChoixWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Chapitre.choixEntrants
   */
  export type Chapitre$choixEntrantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    where?: ChoixWhereInput
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    cursor?: ChoixWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Chapitre.sauvegardes
   */
  export type Chapitre$sauvegardesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeInclude<ExtArgs> | null
    where?: SauvegardeWhereInput
    orderBy?: SauvegardeOrderByWithRelationInput | SauvegardeOrderByWithRelationInput[]
    cursor?: SauvegardeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SauvegardeScalarFieldEnum | SauvegardeScalarFieldEnum[]
  }

  /**
   * Chapitre without action
   */
  export type ChapitreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreInclude<ExtArgs> | null
  }


  /**
   * Model Choix
   */

  export type AggregateChoix = {
    _count: ChoixCountAggregateOutputType | null
    _min: ChoixMinAggregateOutputType | null
    _max: ChoixMaxAggregateOutputType | null
  }

  export type ChoixMinAggregateOutputType = {
    id: string | null
    chapitreSourceId: string | null
    libelle: string | null
    destinationChapitreId: string | null
  }

  export type ChoixMaxAggregateOutputType = {
    id: string | null
    chapitreSourceId: string | null
    libelle: string | null
    destinationChapitreId: string | null
  }

  export type ChoixCountAggregateOutputType = {
    id: number
    chapitreSourceId: number
    libelle: number
    destinationChapitreId: number
    conditions: number
    effets: number
    testAssocie: number
    _all: number
  }


  export type ChoixMinAggregateInputType = {
    id?: true
    chapitreSourceId?: true
    libelle?: true
    destinationChapitreId?: true
  }

  export type ChoixMaxAggregateInputType = {
    id?: true
    chapitreSourceId?: true
    libelle?: true
    destinationChapitreId?: true
  }

  export type ChoixCountAggregateInputType = {
    id?: true
    chapitreSourceId?: true
    libelle?: true
    destinationChapitreId?: true
    conditions?: true
    effets?: true
    testAssocie?: true
    _all?: true
  }

  export type ChoixAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choix to aggregate.
     */
    where?: ChoixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choixes to fetch.
     */
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Choixes
    **/
    _count?: true | ChoixCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoixMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoixMaxAggregateInputType
  }

  export type GetChoixAggregateType<T extends ChoixAggregateArgs> = {
        [P in keyof T & keyof AggregateChoix]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoix[P]>
      : GetScalarType<T[P], AggregateChoix[P]>
  }




  export type ChoixGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoixWhereInput
    orderBy?: ChoixOrderByWithAggregationInput | ChoixOrderByWithAggregationInput[]
    by: ChoixScalarFieldEnum[] | ChoixScalarFieldEnum
    having?: ChoixScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoixCountAggregateInputType | true
    _min?: ChoixMinAggregateInputType
    _max?: ChoixMaxAggregateInputType
  }

  export type ChoixGroupByOutputType = {
    id: string
    chapitreSourceId: string
    libelle: string
    destinationChapitreId: string | null
    conditions: JsonValue | null
    effets: JsonValue | null
    testAssocie: JsonValue | null
    _count: ChoixCountAggregateOutputType | null
    _min: ChoixMinAggregateOutputType | null
    _max: ChoixMaxAggregateOutputType | null
  }

  type GetChoixGroupByPayload<T extends ChoixGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoixGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoixGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoixGroupByOutputType[P]>
            : GetScalarType<T[P], ChoixGroupByOutputType[P]>
        }
      >
    >


  export type ChoixSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chapitreSourceId?: boolean
    libelle?: boolean
    destinationChapitreId?: boolean
    conditions?: boolean
    effets?: boolean
    testAssocie?: boolean
    chapitreSource?: boolean | ChapitreDefaultArgs<ExtArgs>
    chapitreDestination?: boolean | Choix$chapitreDestinationArgs<ExtArgs>
  }, ExtArgs["result"]["choix"]>

  export type ChoixSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chapitreSourceId?: boolean
    libelle?: boolean
    destinationChapitreId?: boolean
    conditions?: boolean
    effets?: boolean
    testAssocie?: boolean
    chapitreSource?: boolean | ChapitreDefaultArgs<ExtArgs>
    chapitreDestination?: boolean | Choix$chapitreDestinationArgs<ExtArgs>
  }, ExtArgs["result"]["choix"]>

  export type ChoixSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chapitreSourceId?: boolean
    libelle?: boolean
    destinationChapitreId?: boolean
    conditions?: boolean
    effets?: boolean
    testAssocie?: boolean
    chapitreSource?: boolean | ChapitreDefaultArgs<ExtArgs>
    chapitreDestination?: boolean | Choix$chapitreDestinationArgs<ExtArgs>
  }, ExtArgs["result"]["choix"]>

  export type ChoixSelectScalar = {
    id?: boolean
    chapitreSourceId?: boolean
    libelle?: boolean
    destinationChapitreId?: boolean
    conditions?: boolean
    effets?: boolean
    testAssocie?: boolean
  }

  export type ChoixOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chapitreSourceId" | "libelle" | "destinationChapitreId" | "conditions" | "effets" | "testAssocie", ExtArgs["result"]["choix"]>
  export type ChoixInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapitreSource?: boolean | ChapitreDefaultArgs<ExtArgs>
    chapitreDestination?: boolean | Choix$chapitreDestinationArgs<ExtArgs>
  }
  export type ChoixIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapitreSource?: boolean | ChapitreDefaultArgs<ExtArgs>
    chapitreDestination?: boolean | Choix$chapitreDestinationArgs<ExtArgs>
  }
  export type ChoixIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapitreSource?: boolean | ChapitreDefaultArgs<ExtArgs>
    chapitreDestination?: boolean | Choix$chapitreDestinationArgs<ExtArgs>
  }

  export type $ChoixPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Choix"
    objects: {
      chapitreSource: Prisma.$ChapitrePayload<ExtArgs>
      chapitreDestination: Prisma.$ChapitrePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chapitreSourceId: string
      libelle: string
      destinationChapitreId: string | null
      conditions: Prisma.JsonValue | null
      effets: Prisma.JsonValue | null
      testAssocie: Prisma.JsonValue | null
    }, ExtArgs["result"]["choix"]>
    composites: {}
  }

  type ChoixGetPayload<S extends boolean | null | undefined | ChoixDefaultArgs> = $Result.GetResult<Prisma.$ChoixPayload, S>

  type ChoixCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoixFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoixCountAggregateInputType | true
    }

  export interface ChoixDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Choix'], meta: { name: 'Choix' } }
    /**
     * Find zero or one Choix that matches the filter.
     * @param {ChoixFindUniqueArgs} args - Arguments to find a Choix
     * @example
     * // Get one Choix
     * const choix = await prisma.choix.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoixFindUniqueArgs>(args: SelectSubset<T, ChoixFindUniqueArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Choix that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoixFindUniqueOrThrowArgs} args - Arguments to find a Choix
     * @example
     * // Get one Choix
     * const choix = await prisma.choix.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoixFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoixFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choix that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixFindFirstArgs} args - Arguments to find a Choix
     * @example
     * // Get one Choix
     * const choix = await prisma.choix.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoixFindFirstArgs>(args?: SelectSubset<T, ChoixFindFirstArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choix that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixFindFirstOrThrowArgs} args - Arguments to find a Choix
     * @example
     * // Get one Choix
     * const choix = await prisma.choix.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoixFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoixFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Choixes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Choixes
     * const choixes = await prisma.choix.findMany()
     * 
     * // Get first 10 Choixes
     * const choixes = await prisma.choix.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choixWithIdOnly = await prisma.choix.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChoixFindManyArgs>(args?: SelectSubset<T, ChoixFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Choix.
     * @param {ChoixCreateArgs} args - Arguments to create a Choix.
     * @example
     * // Create one Choix
     * const Choix = await prisma.choix.create({
     *   data: {
     *     // ... data to create a Choix
     *   }
     * })
     * 
     */
    create<T extends ChoixCreateArgs>(args: SelectSubset<T, ChoixCreateArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Choixes.
     * @param {ChoixCreateManyArgs} args - Arguments to create many Choixes.
     * @example
     * // Create many Choixes
     * const choix = await prisma.choix.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoixCreateManyArgs>(args?: SelectSubset<T, ChoixCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Choixes and returns the data saved in the database.
     * @param {ChoixCreateManyAndReturnArgs} args - Arguments to create many Choixes.
     * @example
     * // Create many Choixes
     * const choix = await prisma.choix.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Choixes and only return the `id`
     * const choixWithIdOnly = await prisma.choix.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoixCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoixCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Choix.
     * @param {ChoixDeleteArgs} args - Arguments to delete one Choix.
     * @example
     * // Delete one Choix
     * const Choix = await prisma.choix.delete({
     *   where: {
     *     // ... filter to delete one Choix
     *   }
     * })
     * 
     */
    delete<T extends ChoixDeleteArgs>(args: SelectSubset<T, ChoixDeleteArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Choix.
     * @param {ChoixUpdateArgs} args - Arguments to update one Choix.
     * @example
     * // Update one Choix
     * const choix = await prisma.choix.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoixUpdateArgs>(args: SelectSubset<T, ChoixUpdateArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Choixes.
     * @param {ChoixDeleteManyArgs} args - Arguments to filter Choixes to delete.
     * @example
     * // Delete a few Choixes
     * const { count } = await prisma.choix.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoixDeleteManyArgs>(args?: SelectSubset<T, ChoixDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Choixes
     * const choix = await prisma.choix.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoixUpdateManyArgs>(args: SelectSubset<T, ChoixUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choixes and returns the data updated in the database.
     * @param {ChoixUpdateManyAndReturnArgs} args - Arguments to update many Choixes.
     * @example
     * // Update many Choixes
     * const choix = await prisma.choix.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Choixes and only return the `id`
     * const choixWithIdOnly = await prisma.choix.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChoixUpdateManyAndReturnArgs>(args: SelectSubset<T, ChoixUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Choix.
     * @param {ChoixUpsertArgs} args - Arguments to update or create a Choix.
     * @example
     * // Update or create a Choix
     * const choix = await prisma.choix.upsert({
     *   create: {
     *     // ... data to create a Choix
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Choix we want to update
     *   }
     * })
     */
    upsert<T extends ChoixUpsertArgs>(args: SelectSubset<T, ChoixUpsertArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Choixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixCountArgs} args - Arguments to filter Choixes to count.
     * @example
     * // Count the number of Choixes
     * const count = await prisma.choix.count({
     *   where: {
     *     // ... the filter for the Choixes we want to count
     *   }
     * })
    **/
    count<T extends ChoixCountArgs>(
      args?: Subset<T, ChoixCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoixCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Choix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChoixAggregateArgs>(args: Subset<T, ChoixAggregateArgs>): Prisma.PrismaPromise<GetChoixAggregateType<T>>

    /**
     * Group by Choix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixGroupByArgs} args - Group by arguments.
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
      T extends ChoixGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoixGroupByArgs['orderBy'] }
        : { orderBy?: ChoixGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChoixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Choix model
   */
  readonly fields: ChoixFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Choix.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoixClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapitreSource<T extends ChapitreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapitreDefaultArgs<ExtArgs>>): Prisma__ChapitreClient<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapitreDestination<T extends Choix$chapitreDestinationArgs<ExtArgs> = {}>(args?: Subset<T, Choix$chapitreDestinationArgs<ExtArgs>>): Prisma__ChapitreClient<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Choix model
   */
  interface ChoixFieldRefs {
    readonly id: FieldRef<"Choix", 'String'>
    readonly chapitreSourceId: FieldRef<"Choix", 'String'>
    readonly libelle: FieldRef<"Choix", 'String'>
    readonly destinationChapitreId: FieldRef<"Choix", 'String'>
    readonly conditions: FieldRef<"Choix", 'Json'>
    readonly effets: FieldRef<"Choix", 'Json'>
    readonly testAssocie: FieldRef<"Choix", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Choix findUnique
   */
  export type ChoixFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choix to fetch.
     */
    where: ChoixWhereUniqueInput
  }

  /**
   * Choix findUniqueOrThrow
   */
  export type ChoixFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choix to fetch.
     */
    where: ChoixWhereUniqueInput
  }

  /**
   * Choix findFirst
   */
  export type ChoixFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choix to fetch.
     */
    where?: ChoixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choixes to fetch.
     */
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choixes.
     */
    cursor?: ChoixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choixes.
     */
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Choix findFirstOrThrow
   */
  export type ChoixFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choix to fetch.
     */
    where?: ChoixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choixes to fetch.
     */
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choixes.
     */
    cursor?: ChoixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choixes.
     */
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Choix findMany
   */
  export type ChoixFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choixes to fetch.
     */
    where?: ChoixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choixes to fetch.
     */
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Choixes.
     */
    cursor?: ChoixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choixes.
     */
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Choix create
   */
  export type ChoixCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * The data needed to create a Choix.
     */
    data: XOR<ChoixCreateInput, ChoixUncheckedCreateInput>
  }

  /**
   * Choix createMany
   */
  export type ChoixCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Choixes.
     */
    data: ChoixCreateManyInput | ChoixCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Choix createManyAndReturn
   */
  export type ChoixCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * The data used to create many Choixes.
     */
    data: ChoixCreateManyInput | ChoixCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Choix update
   */
  export type ChoixUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * The data needed to update a Choix.
     */
    data: XOR<ChoixUpdateInput, ChoixUncheckedUpdateInput>
    /**
     * Choose, which Choix to update.
     */
    where: ChoixWhereUniqueInput
  }

  /**
   * Choix updateMany
   */
  export type ChoixUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Choixes.
     */
    data: XOR<ChoixUpdateManyMutationInput, ChoixUncheckedUpdateManyInput>
    /**
     * Filter which Choixes to update
     */
    where?: ChoixWhereInput
    /**
     * Limit how many Choixes to update.
     */
    limit?: number
  }

  /**
   * Choix updateManyAndReturn
   */
  export type ChoixUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * The data used to update Choixes.
     */
    data: XOR<ChoixUpdateManyMutationInput, ChoixUncheckedUpdateManyInput>
    /**
     * Filter which Choixes to update
     */
    where?: ChoixWhereInput
    /**
     * Limit how many Choixes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Choix upsert
   */
  export type ChoixUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * The filter to search for the Choix to update in case it exists.
     */
    where: ChoixWhereUniqueInput
    /**
     * In case the Choix found by the `where` argument doesn't exist, create a new Choix with this data.
     */
    create: XOR<ChoixCreateInput, ChoixUncheckedCreateInput>
    /**
     * In case the Choix was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoixUpdateInput, ChoixUncheckedUpdateInput>
  }

  /**
   * Choix delete
   */
  export type ChoixDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter which Choix to delete.
     */
    where: ChoixWhereUniqueInput
  }

  /**
   * Choix deleteMany
   */
  export type ChoixDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choixes to delete
     */
    where?: ChoixWhereInput
    /**
     * Limit how many Choixes to delete.
     */
    limit?: number
  }

  /**
   * Choix.chapitreDestination
   */
  export type Choix$chapitreDestinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapitre
     */
    select?: ChapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapitre
     */
    omit?: ChapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapitreInclude<ExtArgs> | null
    where?: ChapitreWhereInput
  }

  /**
   * Choix without action
   */
  export type ChoixDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
  }


  /**
   * Model Objet
   */

  export type AggregateObjet = {
    _count: ObjetCountAggregateOutputType | null
    _min: ObjetMinAggregateOutputType | null
    _max: ObjetMaxAggregateOutputType | null
  }

  export type ObjetMinAggregateOutputType = {
    id: string | null
    histoireId: string | null
    nom: string | null
    description: string | null
    type: string | null
  }

  export type ObjetMaxAggregateOutputType = {
    id: string | null
    histoireId: string | null
    nom: string | null
    description: string | null
    type: string | null
  }

  export type ObjetCountAggregateOutputType = {
    id: number
    histoireId: number
    nom: number
    description: number
    type: number
    effet: number
    _all: number
  }


  export type ObjetMinAggregateInputType = {
    id?: true
    histoireId?: true
    nom?: true
    description?: true
    type?: true
  }

  export type ObjetMaxAggregateInputType = {
    id?: true
    histoireId?: true
    nom?: true
    description?: true
    type?: true
  }

  export type ObjetCountAggregateInputType = {
    id?: true
    histoireId?: true
    nom?: true
    description?: true
    type?: true
    effet?: true
    _all?: true
  }

  export type ObjetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Objet to aggregate.
     */
    where?: ObjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objets to fetch.
     */
    orderBy?: ObjetOrderByWithRelationInput | ObjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Objets
    **/
    _count?: true | ObjetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObjetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObjetMaxAggregateInputType
  }

  export type GetObjetAggregateType<T extends ObjetAggregateArgs> = {
        [P in keyof T & keyof AggregateObjet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObjet[P]>
      : GetScalarType<T[P], AggregateObjet[P]>
  }




  export type ObjetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjetWhereInput
    orderBy?: ObjetOrderByWithAggregationInput | ObjetOrderByWithAggregationInput[]
    by: ObjetScalarFieldEnum[] | ObjetScalarFieldEnum
    having?: ObjetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObjetCountAggregateInputType | true
    _min?: ObjetMinAggregateInputType
    _max?: ObjetMaxAggregateInputType
  }

  export type ObjetGroupByOutputType = {
    id: string
    histoireId: string | null
    nom: string
    description: string | null
    type: string
    effet: JsonValue | null
    _count: ObjetCountAggregateOutputType | null
    _min: ObjetMinAggregateOutputType | null
    _max: ObjetMaxAggregateOutputType | null
  }

  type GetObjetGroupByPayload<T extends ObjetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObjetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObjetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObjetGroupByOutputType[P]>
            : GetScalarType<T[P], ObjetGroupByOutputType[P]>
        }
      >
    >


  export type ObjetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    histoireId?: boolean
    nom?: boolean
    description?: boolean
    type?: boolean
    effet?: boolean
    histoire?: boolean | Objet$histoireArgs<ExtArgs>
  }, ExtArgs["result"]["objet"]>

  export type ObjetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    histoireId?: boolean
    nom?: boolean
    description?: boolean
    type?: boolean
    effet?: boolean
    histoire?: boolean | Objet$histoireArgs<ExtArgs>
  }, ExtArgs["result"]["objet"]>

  export type ObjetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    histoireId?: boolean
    nom?: boolean
    description?: boolean
    type?: boolean
    effet?: boolean
    histoire?: boolean | Objet$histoireArgs<ExtArgs>
  }, ExtArgs["result"]["objet"]>

  export type ObjetSelectScalar = {
    id?: boolean
    histoireId?: boolean
    nom?: boolean
    description?: boolean
    type?: boolean
    effet?: boolean
  }

  export type ObjetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "histoireId" | "nom" | "description" | "type" | "effet", ExtArgs["result"]["objet"]>
  export type ObjetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histoire?: boolean | Objet$histoireArgs<ExtArgs>
  }
  export type ObjetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histoire?: boolean | Objet$histoireArgs<ExtArgs>
  }
  export type ObjetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histoire?: boolean | Objet$histoireArgs<ExtArgs>
  }

  export type $ObjetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Objet"
    objects: {
      histoire: Prisma.$HistoirePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      histoireId: string | null
      nom: string
      description: string | null
      type: string
      effet: Prisma.JsonValue | null
    }, ExtArgs["result"]["objet"]>
    composites: {}
  }

  type ObjetGetPayload<S extends boolean | null | undefined | ObjetDefaultArgs> = $Result.GetResult<Prisma.$ObjetPayload, S>

  type ObjetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObjetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObjetCountAggregateInputType | true
    }

  export interface ObjetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Objet'], meta: { name: 'Objet' } }
    /**
     * Find zero or one Objet that matches the filter.
     * @param {ObjetFindUniqueArgs} args - Arguments to find a Objet
     * @example
     * // Get one Objet
     * const objet = await prisma.objet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObjetFindUniqueArgs>(args: SelectSubset<T, ObjetFindUniqueArgs<ExtArgs>>): Prisma__ObjetClient<$Result.GetResult<Prisma.$ObjetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Objet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObjetFindUniqueOrThrowArgs} args - Arguments to find a Objet
     * @example
     * // Get one Objet
     * const objet = await prisma.objet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObjetFindUniqueOrThrowArgs>(args: SelectSubset<T, ObjetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObjetClient<$Result.GetResult<Prisma.$ObjetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Objet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetFindFirstArgs} args - Arguments to find a Objet
     * @example
     * // Get one Objet
     * const objet = await prisma.objet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObjetFindFirstArgs>(args?: SelectSubset<T, ObjetFindFirstArgs<ExtArgs>>): Prisma__ObjetClient<$Result.GetResult<Prisma.$ObjetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Objet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetFindFirstOrThrowArgs} args - Arguments to find a Objet
     * @example
     * // Get one Objet
     * const objet = await prisma.objet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObjetFindFirstOrThrowArgs>(args?: SelectSubset<T, ObjetFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObjetClient<$Result.GetResult<Prisma.$ObjetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Objets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Objets
     * const objets = await prisma.objet.findMany()
     * 
     * // Get first 10 Objets
     * const objets = await prisma.objet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const objetWithIdOnly = await prisma.objet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObjetFindManyArgs>(args?: SelectSubset<T, ObjetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Objet.
     * @param {ObjetCreateArgs} args - Arguments to create a Objet.
     * @example
     * // Create one Objet
     * const Objet = await prisma.objet.create({
     *   data: {
     *     // ... data to create a Objet
     *   }
     * })
     * 
     */
    create<T extends ObjetCreateArgs>(args: SelectSubset<T, ObjetCreateArgs<ExtArgs>>): Prisma__ObjetClient<$Result.GetResult<Prisma.$ObjetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Objets.
     * @param {ObjetCreateManyArgs} args - Arguments to create many Objets.
     * @example
     * // Create many Objets
     * const objet = await prisma.objet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObjetCreateManyArgs>(args?: SelectSubset<T, ObjetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Objets and returns the data saved in the database.
     * @param {ObjetCreateManyAndReturnArgs} args - Arguments to create many Objets.
     * @example
     * // Create many Objets
     * const objet = await prisma.objet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Objets and only return the `id`
     * const objetWithIdOnly = await prisma.objet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObjetCreateManyAndReturnArgs>(args?: SelectSubset<T, ObjetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Objet.
     * @param {ObjetDeleteArgs} args - Arguments to delete one Objet.
     * @example
     * // Delete one Objet
     * const Objet = await prisma.objet.delete({
     *   where: {
     *     // ... filter to delete one Objet
     *   }
     * })
     * 
     */
    delete<T extends ObjetDeleteArgs>(args: SelectSubset<T, ObjetDeleteArgs<ExtArgs>>): Prisma__ObjetClient<$Result.GetResult<Prisma.$ObjetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Objet.
     * @param {ObjetUpdateArgs} args - Arguments to update one Objet.
     * @example
     * // Update one Objet
     * const objet = await prisma.objet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObjetUpdateArgs>(args: SelectSubset<T, ObjetUpdateArgs<ExtArgs>>): Prisma__ObjetClient<$Result.GetResult<Prisma.$ObjetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Objets.
     * @param {ObjetDeleteManyArgs} args - Arguments to filter Objets to delete.
     * @example
     * // Delete a few Objets
     * const { count } = await prisma.objet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObjetDeleteManyArgs>(args?: SelectSubset<T, ObjetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Objets
     * const objet = await prisma.objet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObjetUpdateManyArgs>(args: SelectSubset<T, ObjetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objets and returns the data updated in the database.
     * @param {ObjetUpdateManyAndReturnArgs} args - Arguments to update many Objets.
     * @example
     * // Update many Objets
     * const objet = await prisma.objet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Objets and only return the `id`
     * const objetWithIdOnly = await prisma.objet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObjetUpdateManyAndReturnArgs>(args: SelectSubset<T, ObjetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Objet.
     * @param {ObjetUpsertArgs} args - Arguments to update or create a Objet.
     * @example
     * // Update or create a Objet
     * const objet = await prisma.objet.upsert({
     *   create: {
     *     // ... data to create a Objet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Objet we want to update
     *   }
     * })
     */
    upsert<T extends ObjetUpsertArgs>(args: SelectSubset<T, ObjetUpsertArgs<ExtArgs>>): Prisma__ObjetClient<$Result.GetResult<Prisma.$ObjetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Objets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetCountArgs} args - Arguments to filter Objets to count.
     * @example
     * // Count the number of Objets
     * const count = await prisma.objet.count({
     *   where: {
     *     // ... the filter for the Objets we want to count
     *   }
     * })
    **/
    count<T extends ObjetCountArgs>(
      args?: Subset<T, ObjetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObjetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Objet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObjetAggregateArgs>(args: Subset<T, ObjetAggregateArgs>): Prisma.PrismaPromise<GetObjetAggregateType<T>>

    /**
     * Group by Objet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetGroupByArgs} args - Group by arguments.
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
      T extends ObjetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObjetGroupByArgs['orderBy'] }
        : { orderBy?: ObjetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObjetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Objet model
   */
  readonly fields: ObjetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Objet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObjetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    histoire<T extends Objet$histoireArgs<ExtArgs> = {}>(args?: Subset<T, Objet$histoireArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Objet model
   */
  interface ObjetFieldRefs {
    readonly id: FieldRef<"Objet", 'String'>
    readonly histoireId: FieldRef<"Objet", 'String'>
    readonly nom: FieldRef<"Objet", 'String'>
    readonly description: FieldRef<"Objet", 'String'>
    readonly type: FieldRef<"Objet", 'String'>
    readonly effet: FieldRef<"Objet", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Objet findUnique
   */
  export type ObjetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objet
     */
    select?: ObjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objet
     */
    omit?: ObjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetInclude<ExtArgs> | null
    /**
     * Filter, which Objet to fetch.
     */
    where: ObjetWhereUniqueInput
  }

  /**
   * Objet findUniqueOrThrow
   */
  export type ObjetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objet
     */
    select?: ObjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objet
     */
    omit?: ObjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetInclude<ExtArgs> | null
    /**
     * Filter, which Objet to fetch.
     */
    where: ObjetWhereUniqueInput
  }

  /**
   * Objet findFirst
   */
  export type ObjetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objet
     */
    select?: ObjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objet
     */
    omit?: ObjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetInclude<ExtArgs> | null
    /**
     * Filter, which Objet to fetch.
     */
    where?: ObjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objets to fetch.
     */
    orderBy?: ObjetOrderByWithRelationInput | ObjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objets.
     */
    cursor?: ObjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objets.
     */
    distinct?: ObjetScalarFieldEnum | ObjetScalarFieldEnum[]
  }

  /**
   * Objet findFirstOrThrow
   */
  export type ObjetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objet
     */
    select?: ObjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objet
     */
    omit?: ObjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetInclude<ExtArgs> | null
    /**
     * Filter, which Objet to fetch.
     */
    where?: ObjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objets to fetch.
     */
    orderBy?: ObjetOrderByWithRelationInput | ObjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objets.
     */
    cursor?: ObjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objets.
     */
    distinct?: ObjetScalarFieldEnum | ObjetScalarFieldEnum[]
  }

  /**
   * Objet findMany
   */
  export type ObjetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objet
     */
    select?: ObjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objet
     */
    omit?: ObjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetInclude<ExtArgs> | null
    /**
     * Filter, which Objets to fetch.
     */
    where?: ObjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objets to fetch.
     */
    orderBy?: ObjetOrderByWithRelationInput | ObjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Objets.
     */
    cursor?: ObjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objets.
     */
    distinct?: ObjetScalarFieldEnum | ObjetScalarFieldEnum[]
  }

  /**
   * Objet create
   */
  export type ObjetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objet
     */
    select?: ObjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objet
     */
    omit?: ObjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetInclude<ExtArgs> | null
    /**
     * The data needed to create a Objet.
     */
    data: XOR<ObjetCreateInput, ObjetUncheckedCreateInput>
  }

  /**
   * Objet createMany
   */
  export type ObjetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Objets.
     */
    data: ObjetCreateManyInput | ObjetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Objet createManyAndReturn
   */
  export type ObjetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objet
     */
    select?: ObjetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Objet
     */
    omit?: ObjetOmit<ExtArgs> | null
    /**
     * The data used to create many Objets.
     */
    data: ObjetCreateManyInput | ObjetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Objet update
   */
  export type ObjetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objet
     */
    select?: ObjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objet
     */
    omit?: ObjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetInclude<ExtArgs> | null
    /**
     * The data needed to update a Objet.
     */
    data: XOR<ObjetUpdateInput, ObjetUncheckedUpdateInput>
    /**
     * Choose, which Objet to update.
     */
    where: ObjetWhereUniqueInput
  }

  /**
   * Objet updateMany
   */
  export type ObjetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Objets.
     */
    data: XOR<ObjetUpdateManyMutationInput, ObjetUncheckedUpdateManyInput>
    /**
     * Filter which Objets to update
     */
    where?: ObjetWhereInput
    /**
     * Limit how many Objets to update.
     */
    limit?: number
  }

  /**
   * Objet updateManyAndReturn
   */
  export type ObjetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objet
     */
    select?: ObjetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Objet
     */
    omit?: ObjetOmit<ExtArgs> | null
    /**
     * The data used to update Objets.
     */
    data: XOR<ObjetUpdateManyMutationInput, ObjetUncheckedUpdateManyInput>
    /**
     * Filter which Objets to update
     */
    where?: ObjetWhereInput
    /**
     * Limit how many Objets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Objet upsert
   */
  export type ObjetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objet
     */
    select?: ObjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objet
     */
    omit?: ObjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetInclude<ExtArgs> | null
    /**
     * The filter to search for the Objet to update in case it exists.
     */
    where: ObjetWhereUniqueInput
    /**
     * In case the Objet found by the `where` argument doesn't exist, create a new Objet with this data.
     */
    create: XOR<ObjetCreateInput, ObjetUncheckedCreateInput>
    /**
     * In case the Objet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObjetUpdateInput, ObjetUncheckedUpdateInput>
  }

  /**
   * Objet delete
   */
  export type ObjetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objet
     */
    select?: ObjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objet
     */
    omit?: ObjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetInclude<ExtArgs> | null
    /**
     * Filter which Objet to delete.
     */
    where: ObjetWhereUniqueInput
  }

  /**
   * Objet deleteMany
   */
  export type ObjetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Objets to delete
     */
    where?: ObjetWhereInput
    /**
     * Limit how many Objets to delete.
     */
    limit?: number
  }

  /**
   * Objet.histoire
   */
  export type Objet$histoireArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireInclude<ExtArgs> | null
    where?: HistoireWhereInput
  }

  /**
   * Objet without action
   */
  export type ObjetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objet
     */
    select?: ObjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objet
     */
    omit?: ObjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetInclude<ExtArgs> | null
  }


  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    titre: string | null
    slug: string | null
    extrait: string | null
    contenu: string | null
    image: string | null
    statut: string | null
    datePublication: Date | null
    dateCreation: Date | null
    dateMiseAJour: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    slug: string | null
    extrait: string | null
    contenu: string | null
    image: string | null
    statut: string | null
    datePublication: Date | null
    dateCreation: Date | null
    dateMiseAJour: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    titre: number
    slug: number
    extrait: number
    contenu: number
    image: number
    statut: number
    datePublication: number
    dateCreation: number
    dateMiseAJour: number
    _all: number
  }


  export type ArticleMinAggregateInputType = {
    id?: true
    titre?: true
    slug?: true
    extrait?: true
    contenu?: true
    image?: true
    statut?: true
    datePublication?: true
    dateCreation?: true
    dateMiseAJour?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    titre?: true
    slug?: true
    extrait?: true
    contenu?: true
    image?: true
    statut?: true
    datePublication?: true
    dateCreation?: true
    dateMiseAJour?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    titre?: true
    slug?: true
    extrait?: true
    contenu?: true
    image?: true
    statut?: true
    datePublication?: true
    dateCreation?: true
    dateMiseAJour?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    titre: string
    slug: string
    extrait: string | null
    contenu: string
    image: string | null
    statut: string
    datePublication: Date | null
    dateCreation: Date
    dateMiseAJour: Date
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    slug?: boolean
    extrait?: boolean
    contenu?: boolean
    image?: boolean
    statut?: boolean
    datePublication?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    slug?: boolean
    extrait?: boolean
    contenu?: boolean
    image?: boolean
    statut?: boolean
    datePublication?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    slug?: boolean
    extrait?: boolean
    contenu?: boolean
    image?: boolean
    statut?: boolean
    datePublication?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    titre?: boolean
    slug?: boolean
    extrait?: boolean
    contenu?: boolean
    image?: boolean
    statut?: boolean
    datePublication?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "slug" | "extrait" | "contenu" | "image" | "statut" | "datePublication" | "dateCreation" | "dateMiseAJour", ExtArgs["result"]["article"]>

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      slug: string
      extrait: string | null
      contenu: string
      image: string | null
      statut: string
      datePublication: Date | null
      dateCreation: Date
      dateMiseAJour: Date
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
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
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'String'>
    readonly titre: FieldRef<"Article", 'String'>
    readonly slug: FieldRef<"Article", 'String'>
    readonly extrait: FieldRef<"Article", 'String'>
    readonly contenu: FieldRef<"Article", 'String'>
    readonly image: FieldRef<"Article", 'String'>
    readonly statut: FieldRef<"Article", 'String'>
    readonly datePublication: FieldRef<"Article", 'DateTime'>
    readonly dateCreation: FieldRef<"Article", 'DateTime'>
    readonly dateMiseAJour: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    login: string | null
    motDePasseHashe: string | null
    role: string | null
    dateDerniereConnex: Date | null
    dateCreation: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    login: string | null
    motDePasseHashe: string | null
    role: string | null
    dateDerniereConnex: Date | null
    dateCreation: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    login: number
    motDePasseHashe: number
    role: number
    dateDerniereConnex: number
    dateCreation: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    login?: true
    motDePasseHashe?: true
    role?: true
    dateDerniereConnex?: true
    dateCreation?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    login?: true
    motDePasseHashe?: true
    role?: true
    dateDerniereConnex?: true
    dateCreation?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    login?: true
    motDePasseHashe?: true
    role?: true
    dateDerniereConnex?: true
    dateCreation?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    login: string
    motDePasseHashe: string
    role: string
    dateDerniereConnex: Date | null
    dateCreation: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    motDePasseHashe?: boolean
    role?: boolean
    dateDerniereConnex?: boolean
    dateCreation?: boolean
    histoires?: boolean | Admin$histoiresArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    motDePasseHashe?: boolean
    role?: boolean
    dateDerniereConnex?: boolean
    dateCreation?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    motDePasseHashe?: boolean
    role?: boolean
    dateDerniereConnex?: boolean
    dateCreation?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    login?: boolean
    motDePasseHashe?: boolean
    role?: boolean
    dateDerniereConnex?: boolean
    dateCreation?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "login" | "motDePasseHashe" | "role" | "dateDerniereConnex" | "dateCreation", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histoires?: boolean | Admin$histoiresArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      histoires: Prisma.$HistoirePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      login: string
      motDePasseHashe: string
      role: string
      dateDerniereConnex: Date | null
      dateCreation: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    histoires<T extends Admin$histoiresArgs<ExtArgs> = {}>(args?: Subset<T, Admin$histoiresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly login: FieldRef<"Admin", 'String'>
    readonly motDePasseHashe: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'String'>
    readonly dateDerniereConnex: FieldRef<"Admin", 'DateTime'>
    readonly dateCreation: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.histoires
   */
  export type Admin$histoiresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoireInclude<ExtArgs> | null
    where?: HistoireWhereInput
    orderBy?: HistoireOrderByWithRelationInput | HistoireOrderByWithRelationInput[]
    cursor?: HistoireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoireScalarFieldEnum | HistoireScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: string | null
    pseudo: string | null
    email: string | null
    motDePasseHashe: string | null
    dateCreation: Date | null
    dateDerniereConnex: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: string | null
    pseudo: string | null
    email: string | null
    motDePasseHashe: string | null
    dateCreation: Date | null
    dateDerniereConnex: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    pseudo: number
    email: number
    motDePasseHashe: number
    dateCreation: number
    dateDerniereConnex: number
    _all: number
  }


  export type UtilisateurMinAggregateInputType = {
    id?: true
    pseudo?: true
    email?: true
    motDePasseHashe?: true
    dateCreation?: true
    dateDerniereConnex?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    pseudo?: true
    email?: true
    motDePasseHashe?: true
    dateCreation?: true
    dateDerniereConnex?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    pseudo?: true
    email?: true
    motDePasseHashe?: true
    dateCreation?: true
    dateDerniereConnex?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: string
    pseudo: string
    email: string
    motDePasseHashe: string
    dateCreation: Date
    dateDerniereConnex: Date | null
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pseudo?: boolean
    email?: boolean
    motDePasseHashe?: boolean
    dateCreation?: boolean
    dateDerniereConnex?: boolean
    sauvegardes?: boolean | Utilisateur$sauvegardesArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pseudo?: boolean
    email?: boolean
    motDePasseHashe?: boolean
    dateCreation?: boolean
    dateDerniereConnex?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pseudo?: boolean
    email?: boolean
    motDePasseHashe?: boolean
    dateCreation?: boolean
    dateDerniereConnex?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    pseudo?: boolean
    email?: boolean
    motDePasseHashe?: boolean
    dateCreation?: boolean
    dateDerniereConnex?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pseudo" | "email" | "motDePasseHashe" | "dateCreation" | "dateDerniereConnex", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sauvegardes?: boolean | Utilisateur$sauvegardesArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      sauvegardes: Prisma.$SauvegardePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pseudo: string
      email: string
      motDePasseHashe: string
      dateCreation: Date
      dateDerniereConnex: Date | null
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
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
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sauvegardes<T extends Utilisateur$sauvegardesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$sauvegardesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'String'>
    readonly pseudo: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly motDePasseHashe: FieldRef<"Utilisateur", 'String'>
    readonly dateCreation: FieldRef<"Utilisateur", 'DateTime'>
    readonly dateDerniereConnex: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur createManyAndReturn
   */
  export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur updateManyAndReturn
   */
  export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.sauvegardes
   */
  export type Utilisateur$sauvegardesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeInclude<ExtArgs> | null
    where?: SauvegardeWhereInput
    orderBy?: SauvegardeOrderByWithRelationInput | SauvegardeOrderByWithRelationInput[]
    cursor?: SauvegardeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SauvegardeScalarFieldEnum | SauvegardeScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Sauvegarde
   */

  export type AggregateSauvegarde = {
    _count: SauvegardeCountAggregateOutputType | null
    _avg: SauvegardeAvgAggregateOutputType | null
    _sum: SauvegardeSumAggregateOutputType | null
    _min: SauvegardeMinAggregateOutputType | null
    _max: SauvegardeMaxAggregateOutputType | null
  }

  export type SauvegardeAvgAggregateOutputType = {
    pointsDeVie: number | null
  }

  export type SauvegardeSumAggregateOutputType = {
    pointsDeVie: number | null
  }

  export type SauvegardeMinAggregateOutputType = {
    id: string | null
    utilisateurId: string | null
    histoireId: string | null
    chapitreCourantId: string | null
    pointsDeVie: number | null
    dateCreation: Date | null
    dateMiseAJour: Date | null
  }

  export type SauvegardeMaxAggregateOutputType = {
    id: string | null
    utilisateurId: string | null
    histoireId: string | null
    chapitreCourantId: string | null
    pointsDeVie: number | null
    dateCreation: Date | null
    dateMiseAJour: Date | null
  }

  export type SauvegardeCountAggregateOutputType = {
    id: number
    utilisateurId: number
    histoireId: number
    chapitreCourantId: number
    pointsDeVie: number
    caracteristiques: number
    inventaire: number
    variablesEtat: number
    dateCreation: number
    dateMiseAJour: number
    _all: number
  }


  export type SauvegardeAvgAggregateInputType = {
    pointsDeVie?: true
  }

  export type SauvegardeSumAggregateInputType = {
    pointsDeVie?: true
  }

  export type SauvegardeMinAggregateInputType = {
    id?: true
    utilisateurId?: true
    histoireId?: true
    chapitreCourantId?: true
    pointsDeVie?: true
    dateCreation?: true
    dateMiseAJour?: true
  }

  export type SauvegardeMaxAggregateInputType = {
    id?: true
    utilisateurId?: true
    histoireId?: true
    chapitreCourantId?: true
    pointsDeVie?: true
    dateCreation?: true
    dateMiseAJour?: true
  }

  export type SauvegardeCountAggregateInputType = {
    id?: true
    utilisateurId?: true
    histoireId?: true
    chapitreCourantId?: true
    pointsDeVie?: true
    caracteristiques?: true
    inventaire?: true
    variablesEtat?: true
    dateCreation?: true
    dateMiseAJour?: true
    _all?: true
  }

  export type SauvegardeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sauvegarde to aggregate.
     */
    where?: SauvegardeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sauvegardes to fetch.
     */
    orderBy?: SauvegardeOrderByWithRelationInput | SauvegardeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SauvegardeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sauvegardes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sauvegardes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sauvegardes
    **/
    _count?: true | SauvegardeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SauvegardeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SauvegardeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SauvegardeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SauvegardeMaxAggregateInputType
  }

  export type GetSauvegardeAggregateType<T extends SauvegardeAggregateArgs> = {
        [P in keyof T & keyof AggregateSauvegarde]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSauvegarde[P]>
      : GetScalarType<T[P], AggregateSauvegarde[P]>
  }




  export type SauvegardeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SauvegardeWhereInput
    orderBy?: SauvegardeOrderByWithAggregationInput | SauvegardeOrderByWithAggregationInput[]
    by: SauvegardeScalarFieldEnum[] | SauvegardeScalarFieldEnum
    having?: SauvegardeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SauvegardeCountAggregateInputType | true
    _avg?: SauvegardeAvgAggregateInputType
    _sum?: SauvegardeSumAggregateInputType
    _min?: SauvegardeMinAggregateInputType
    _max?: SauvegardeMaxAggregateInputType
  }

  export type SauvegardeGroupByOutputType = {
    id: string
    utilisateurId: string
    histoireId: string
    chapitreCourantId: string
    pointsDeVie: number
    caracteristiques: JsonValue | null
    inventaire: JsonValue | null
    variablesEtat: JsonValue | null
    dateCreation: Date
    dateMiseAJour: Date
    _count: SauvegardeCountAggregateOutputType | null
    _avg: SauvegardeAvgAggregateOutputType | null
    _sum: SauvegardeSumAggregateOutputType | null
    _min: SauvegardeMinAggregateOutputType | null
    _max: SauvegardeMaxAggregateOutputType | null
  }

  type GetSauvegardeGroupByPayload<T extends SauvegardeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SauvegardeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SauvegardeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SauvegardeGroupByOutputType[P]>
            : GetScalarType<T[P], SauvegardeGroupByOutputType[P]>
        }
      >
    >


  export type SauvegardeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    histoireId?: boolean
    chapitreCourantId?: boolean
    pointsDeVie?: boolean
    caracteristiques?: boolean
    inventaire?: boolean
    variablesEtat?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    histoire?: boolean | HistoireDefaultArgs<ExtArgs>
    chapitreCourant?: boolean | ChapitreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sauvegarde"]>

  export type SauvegardeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    histoireId?: boolean
    chapitreCourantId?: boolean
    pointsDeVie?: boolean
    caracteristiques?: boolean
    inventaire?: boolean
    variablesEtat?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    histoire?: boolean | HistoireDefaultArgs<ExtArgs>
    chapitreCourant?: boolean | ChapitreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sauvegarde"]>

  export type SauvegardeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    histoireId?: boolean
    chapitreCourantId?: boolean
    pointsDeVie?: boolean
    caracteristiques?: boolean
    inventaire?: boolean
    variablesEtat?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    histoire?: boolean | HistoireDefaultArgs<ExtArgs>
    chapitreCourant?: boolean | ChapitreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sauvegarde"]>

  export type SauvegardeSelectScalar = {
    id?: boolean
    utilisateurId?: boolean
    histoireId?: boolean
    chapitreCourantId?: boolean
    pointsDeVie?: boolean
    caracteristiques?: boolean
    inventaire?: boolean
    variablesEtat?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
  }

  export type SauvegardeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "utilisateurId" | "histoireId" | "chapitreCourantId" | "pointsDeVie" | "caracteristiques" | "inventaire" | "variablesEtat" | "dateCreation" | "dateMiseAJour", ExtArgs["result"]["sauvegarde"]>
  export type SauvegardeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    histoire?: boolean | HistoireDefaultArgs<ExtArgs>
    chapitreCourant?: boolean | ChapitreDefaultArgs<ExtArgs>
  }
  export type SauvegardeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    histoire?: boolean | HistoireDefaultArgs<ExtArgs>
    chapitreCourant?: boolean | ChapitreDefaultArgs<ExtArgs>
  }
  export type SauvegardeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    histoire?: boolean | HistoireDefaultArgs<ExtArgs>
    chapitreCourant?: boolean | ChapitreDefaultArgs<ExtArgs>
  }

  export type $SauvegardePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sauvegarde"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      histoire: Prisma.$HistoirePayload<ExtArgs>
      chapitreCourant: Prisma.$ChapitrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      utilisateurId: string
      histoireId: string
      chapitreCourantId: string
      pointsDeVie: number
      caracteristiques: Prisma.JsonValue | null
      inventaire: Prisma.JsonValue | null
      variablesEtat: Prisma.JsonValue | null
      dateCreation: Date
      dateMiseAJour: Date
    }, ExtArgs["result"]["sauvegarde"]>
    composites: {}
  }

  type SauvegardeGetPayload<S extends boolean | null | undefined | SauvegardeDefaultArgs> = $Result.GetResult<Prisma.$SauvegardePayload, S>

  type SauvegardeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SauvegardeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SauvegardeCountAggregateInputType | true
    }

  export interface SauvegardeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sauvegarde'], meta: { name: 'Sauvegarde' } }
    /**
     * Find zero or one Sauvegarde that matches the filter.
     * @param {SauvegardeFindUniqueArgs} args - Arguments to find a Sauvegarde
     * @example
     * // Get one Sauvegarde
     * const sauvegarde = await prisma.sauvegarde.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SauvegardeFindUniqueArgs>(args: SelectSubset<T, SauvegardeFindUniqueArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sauvegarde that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SauvegardeFindUniqueOrThrowArgs} args - Arguments to find a Sauvegarde
     * @example
     * // Get one Sauvegarde
     * const sauvegarde = await prisma.sauvegarde.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SauvegardeFindUniqueOrThrowArgs>(args: SelectSubset<T, SauvegardeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sauvegarde that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeFindFirstArgs} args - Arguments to find a Sauvegarde
     * @example
     * // Get one Sauvegarde
     * const sauvegarde = await prisma.sauvegarde.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SauvegardeFindFirstArgs>(args?: SelectSubset<T, SauvegardeFindFirstArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sauvegarde that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeFindFirstOrThrowArgs} args - Arguments to find a Sauvegarde
     * @example
     * // Get one Sauvegarde
     * const sauvegarde = await prisma.sauvegarde.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SauvegardeFindFirstOrThrowArgs>(args?: SelectSubset<T, SauvegardeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sauvegardes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sauvegardes
     * const sauvegardes = await prisma.sauvegarde.findMany()
     * 
     * // Get first 10 Sauvegardes
     * const sauvegardes = await prisma.sauvegarde.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sauvegardeWithIdOnly = await prisma.sauvegarde.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SauvegardeFindManyArgs>(args?: SelectSubset<T, SauvegardeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sauvegarde.
     * @param {SauvegardeCreateArgs} args - Arguments to create a Sauvegarde.
     * @example
     * // Create one Sauvegarde
     * const Sauvegarde = await prisma.sauvegarde.create({
     *   data: {
     *     // ... data to create a Sauvegarde
     *   }
     * })
     * 
     */
    create<T extends SauvegardeCreateArgs>(args: SelectSubset<T, SauvegardeCreateArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sauvegardes.
     * @param {SauvegardeCreateManyArgs} args - Arguments to create many Sauvegardes.
     * @example
     * // Create many Sauvegardes
     * const sauvegarde = await prisma.sauvegarde.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SauvegardeCreateManyArgs>(args?: SelectSubset<T, SauvegardeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sauvegardes and returns the data saved in the database.
     * @param {SauvegardeCreateManyAndReturnArgs} args - Arguments to create many Sauvegardes.
     * @example
     * // Create many Sauvegardes
     * const sauvegarde = await prisma.sauvegarde.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sauvegardes and only return the `id`
     * const sauvegardeWithIdOnly = await prisma.sauvegarde.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SauvegardeCreateManyAndReturnArgs>(args?: SelectSubset<T, SauvegardeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sauvegarde.
     * @param {SauvegardeDeleteArgs} args - Arguments to delete one Sauvegarde.
     * @example
     * // Delete one Sauvegarde
     * const Sauvegarde = await prisma.sauvegarde.delete({
     *   where: {
     *     // ... filter to delete one Sauvegarde
     *   }
     * })
     * 
     */
    delete<T extends SauvegardeDeleteArgs>(args: SelectSubset<T, SauvegardeDeleteArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sauvegarde.
     * @param {SauvegardeUpdateArgs} args - Arguments to update one Sauvegarde.
     * @example
     * // Update one Sauvegarde
     * const sauvegarde = await prisma.sauvegarde.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SauvegardeUpdateArgs>(args: SelectSubset<T, SauvegardeUpdateArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sauvegardes.
     * @param {SauvegardeDeleteManyArgs} args - Arguments to filter Sauvegardes to delete.
     * @example
     * // Delete a few Sauvegardes
     * const { count } = await prisma.sauvegarde.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SauvegardeDeleteManyArgs>(args?: SelectSubset<T, SauvegardeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sauvegardes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sauvegardes
     * const sauvegarde = await prisma.sauvegarde.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SauvegardeUpdateManyArgs>(args: SelectSubset<T, SauvegardeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sauvegardes and returns the data updated in the database.
     * @param {SauvegardeUpdateManyAndReturnArgs} args - Arguments to update many Sauvegardes.
     * @example
     * // Update many Sauvegardes
     * const sauvegarde = await prisma.sauvegarde.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sauvegardes and only return the `id`
     * const sauvegardeWithIdOnly = await prisma.sauvegarde.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SauvegardeUpdateManyAndReturnArgs>(args: SelectSubset<T, SauvegardeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sauvegarde.
     * @param {SauvegardeUpsertArgs} args - Arguments to update or create a Sauvegarde.
     * @example
     * // Update or create a Sauvegarde
     * const sauvegarde = await prisma.sauvegarde.upsert({
     *   create: {
     *     // ... data to create a Sauvegarde
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sauvegarde we want to update
     *   }
     * })
     */
    upsert<T extends SauvegardeUpsertArgs>(args: SelectSubset<T, SauvegardeUpsertArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sauvegardes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeCountArgs} args - Arguments to filter Sauvegardes to count.
     * @example
     * // Count the number of Sauvegardes
     * const count = await prisma.sauvegarde.count({
     *   where: {
     *     // ... the filter for the Sauvegardes we want to count
     *   }
     * })
    **/
    count<T extends SauvegardeCountArgs>(
      args?: Subset<T, SauvegardeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SauvegardeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sauvegarde.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SauvegardeAggregateArgs>(args: Subset<T, SauvegardeAggregateArgs>): Prisma.PrismaPromise<GetSauvegardeAggregateType<T>>

    /**
     * Group by Sauvegarde.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeGroupByArgs} args - Group by arguments.
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
      T extends SauvegardeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SauvegardeGroupByArgs['orderBy'] }
        : { orderBy?: SauvegardeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SauvegardeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSauvegardeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sauvegarde model
   */
  readonly fields: SauvegardeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sauvegarde.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SauvegardeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    histoire<T extends HistoireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HistoireDefaultArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapitreCourant<T extends ChapitreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapitreDefaultArgs<ExtArgs>>): Prisma__ChapitreClient<$Result.GetResult<Prisma.$ChapitrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sauvegarde model
   */
  interface SauvegardeFieldRefs {
    readonly id: FieldRef<"Sauvegarde", 'String'>
    readonly utilisateurId: FieldRef<"Sauvegarde", 'String'>
    readonly histoireId: FieldRef<"Sauvegarde", 'String'>
    readonly chapitreCourantId: FieldRef<"Sauvegarde", 'String'>
    readonly pointsDeVie: FieldRef<"Sauvegarde", 'Int'>
    readonly caracteristiques: FieldRef<"Sauvegarde", 'Json'>
    readonly inventaire: FieldRef<"Sauvegarde", 'Json'>
    readonly variablesEtat: FieldRef<"Sauvegarde", 'Json'>
    readonly dateCreation: FieldRef<"Sauvegarde", 'DateTime'>
    readonly dateMiseAJour: FieldRef<"Sauvegarde", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sauvegarde findUnique
   */
  export type SauvegardeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeInclude<ExtArgs> | null
    /**
     * Filter, which Sauvegarde to fetch.
     */
    where: SauvegardeWhereUniqueInput
  }

  /**
   * Sauvegarde findUniqueOrThrow
   */
  export type SauvegardeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeInclude<ExtArgs> | null
    /**
     * Filter, which Sauvegarde to fetch.
     */
    where: SauvegardeWhereUniqueInput
  }

  /**
   * Sauvegarde findFirst
   */
  export type SauvegardeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeInclude<ExtArgs> | null
    /**
     * Filter, which Sauvegarde to fetch.
     */
    where?: SauvegardeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sauvegardes to fetch.
     */
    orderBy?: SauvegardeOrderByWithRelationInput | SauvegardeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sauvegardes.
     */
    cursor?: SauvegardeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sauvegardes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sauvegardes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sauvegardes.
     */
    distinct?: SauvegardeScalarFieldEnum | SauvegardeScalarFieldEnum[]
  }

  /**
   * Sauvegarde findFirstOrThrow
   */
  export type SauvegardeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeInclude<ExtArgs> | null
    /**
     * Filter, which Sauvegarde to fetch.
     */
    where?: SauvegardeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sauvegardes to fetch.
     */
    orderBy?: SauvegardeOrderByWithRelationInput | SauvegardeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sauvegardes.
     */
    cursor?: SauvegardeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sauvegardes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sauvegardes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sauvegardes.
     */
    distinct?: SauvegardeScalarFieldEnum | SauvegardeScalarFieldEnum[]
  }

  /**
   * Sauvegarde findMany
   */
  export type SauvegardeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeInclude<ExtArgs> | null
    /**
     * Filter, which Sauvegardes to fetch.
     */
    where?: SauvegardeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sauvegardes to fetch.
     */
    orderBy?: SauvegardeOrderByWithRelationInput | SauvegardeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sauvegardes.
     */
    cursor?: SauvegardeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sauvegardes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sauvegardes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sauvegardes.
     */
    distinct?: SauvegardeScalarFieldEnum | SauvegardeScalarFieldEnum[]
  }

  /**
   * Sauvegarde create
   */
  export type SauvegardeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeInclude<ExtArgs> | null
    /**
     * The data needed to create a Sauvegarde.
     */
    data: XOR<SauvegardeCreateInput, SauvegardeUncheckedCreateInput>
  }

  /**
   * Sauvegarde createMany
   */
  export type SauvegardeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sauvegardes.
     */
    data: SauvegardeCreateManyInput | SauvegardeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sauvegarde createManyAndReturn
   */
  export type SauvegardeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * The data used to create many Sauvegardes.
     */
    data: SauvegardeCreateManyInput | SauvegardeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sauvegarde update
   */
  export type SauvegardeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeInclude<ExtArgs> | null
    /**
     * The data needed to update a Sauvegarde.
     */
    data: XOR<SauvegardeUpdateInput, SauvegardeUncheckedUpdateInput>
    /**
     * Choose, which Sauvegarde to update.
     */
    where: SauvegardeWhereUniqueInput
  }

  /**
   * Sauvegarde updateMany
   */
  export type SauvegardeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sauvegardes.
     */
    data: XOR<SauvegardeUpdateManyMutationInput, SauvegardeUncheckedUpdateManyInput>
    /**
     * Filter which Sauvegardes to update
     */
    where?: SauvegardeWhereInput
    /**
     * Limit how many Sauvegardes to update.
     */
    limit?: number
  }

  /**
   * Sauvegarde updateManyAndReturn
   */
  export type SauvegardeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * The data used to update Sauvegardes.
     */
    data: XOR<SauvegardeUpdateManyMutationInput, SauvegardeUncheckedUpdateManyInput>
    /**
     * Filter which Sauvegardes to update
     */
    where?: SauvegardeWhereInput
    /**
     * Limit how many Sauvegardes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sauvegarde upsert
   */
  export type SauvegardeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeInclude<ExtArgs> | null
    /**
     * The filter to search for the Sauvegarde to update in case it exists.
     */
    where: SauvegardeWhereUniqueInput
    /**
     * In case the Sauvegarde found by the `where` argument doesn't exist, create a new Sauvegarde with this data.
     */
    create: XOR<SauvegardeCreateInput, SauvegardeUncheckedCreateInput>
    /**
     * In case the Sauvegarde was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SauvegardeUpdateInput, SauvegardeUncheckedUpdateInput>
  }

  /**
   * Sauvegarde delete
   */
  export type SauvegardeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeInclude<ExtArgs> | null
    /**
     * Filter which Sauvegarde to delete.
     */
    where: SauvegardeWhereUniqueInput
  }

  /**
   * Sauvegarde deleteMany
   */
  export type SauvegardeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sauvegardes to delete
     */
    where?: SauvegardeWhereInput
    /**
     * Limit how many Sauvegardes to delete.
     */
    limit?: number
  }

  /**
   * Sauvegarde without action
   */
  export type SauvegardeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SauvegardeInclude<ExtArgs> | null
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


  export const HistoireScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    slug: 'slug',
    resume: 'resume',
    description: 'description',
    image: 'image',
    statut: 'statut',
    pointDeDepart: 'pointDeDepart',
    dateCreation: 'dateCreation',
    dateMiseAJour: 'dateMiseAJour',
    auteurId: 'auteurId'
  };

  export type HistoireScalarFieldEnum = (typeof HistoireScalarFieldEnum)[keyof typeof HistoireScalarFieldEnum]


  export const ChapitreScalarFieldEnum: {
    id: 'id',
    histoireId: 'histoireId',
    titreInterne: 'titreInterne',
    contenu: 'contenu',
    image: 'image',
    effetsEntree: 'effetsEntree',
    ordre: 'ordre'
  };

  export type ChapitreScalarFieldEnum = (typeof ChapitreScalarFieldEnum)[keyof typeof ChapitreScalarFieldEnum]


  export const ChoixScalarFieldEnum: {
    id: 'id',
    chapitreSourceId: 'chapitreSourceId',
    libelle: 'libelle',
    destinationChapitreId: 'destinationChapitreId',
    conditions: 'conditions',
    effets: 'effets',
    testAssocie: 'testAssocie'
  };

  export type ChoixScalarFieldEnum = (typeof ChoixScalarFieldEnum)[keyof typeof ChoixScalarFieldEnum]


  export const ObjetScalarFieldEnum: {
    id: 'id',
    histoireId: 'histoireId',
    nom: 'nom',
    description: 'description',
    type: 'type',
    effet: 'effet'
  };

  export type ObjetScalarFieldEnum = (typeof ObjetScalarFieldEnum)[keyof typeof ObjetScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    slug: 'slug',
    extrait: 'extrait',
    contenu: 'contenu',
    image: 'image',
    statut: 'statut',
    datePublication: 'datePublication',
    dateCreation: 'dateCreation',
    dateMiseAJour: 'dateMiseAJour'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    login: 'login',
    motDePasseHashe: 'motDePasseHashe',
    role: 'role',
    dateDerniereConnex: 'dateDerniereConnex',
    dateCreation: 'dateCreation'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    pseudo: 'pseudo',
    email: 'email',
    motDePasseHashe: 'motDePasseHashe',
    dateCreation: 'dateCreation',
    dateDerniereConnex: 'dateDerniereConnex'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const SauvegardeScalarFieldEnum: {
    id: 'id',
    utilisateurId: 'utilisateurId',
    histoireId: 'histoireId',
    chapitreCourantId: 'chapitreCourantId',
    pointsDeVie: 'pointsDeVie',
    caracteristiques: 'caracteristiques',
    inventaire: 'inventaire',
    variablesEtat: 'variablesEtat',
    dateCreation: 'dateCreation',
    dateMiseAJour: 'dateMiseAJour'
  };

  export type SauvegardeScalarFieldEnum = (typeof SauvegardeScalarFieldEnum)[keyof typeof SauvegardeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type HistoireWhereInput = {
    AND?: HistoireWhereInput | HistoireWhereInput[]
    OR?: HistoireWhereInput[]
    NOT?: HistoireWhereInput | HistoireWhereInput[]
    id?: StringFilter<"Histoire"> | string
    titre?: StringFilter<"Histoire"> | string
    slug?: StringFilter<"Histoire"> | string
    resume?: StringNullableFilter<"Histoire"> | string | null
    description?: StringNullableFilter<"Histoire"> | string | null
    image?: StringNullableFilter<"Histoire"> | string | null
    statut?: StringFilter<"Histoire"> | string
    pointDeDepart?: StringNullableFilter<"Histoire"> | string | null
    dateCreation?: DateTimeFilter<"Histoire"> | Date | string
    dateMiseAJour?: DateTimeFilter<"Histoire"> | Date | string
    auteurId?: StringNullableFilter<"Histoire"> | string | null
    auteur?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    chapitres?: ChapitreListRelationFilter
    objets?: ObjetListRelationFilter
    sauvegardes?: SauvegardeListRelationFilter
  }

  export type HistoireOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    resume?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    statut?: SortOrder
    pointDeDepart?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
    auteurId?: SortOrderInput | SortOrder
    auteur?: AdminOrderByWithRelationInput
    chapitres?: ChapitreOrderByRelationAggregateInput
    objets?: ObjetOrderByRelationAggregateInput
    sauvegardes?: SauvegardeOrderByRelationAggregateInput
  }

  export type HistoireWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: HistoireWhereInput | HistoireWhereInput[]
    OR?: HistoireWhereInput[]
    NOT?: HistoireWhereInput | HistoireWhereInput[]
    titre?: StringFilter<"Histoire"> | string
    resume?: StringNullableFilter<"Histoire"> | string | null
    description?: StringNullableFilter<"Histoire"> | string | null
    image?: StringNullableFilter<"Histoire"> | string | null
    statut?: StringFilter<"Histoire"> | string
    pointDeDepart?: StringNullableFilter<"Histoire"> | string | null
    dateCreation?: DateTimeFilter<"Histoire"> | Date | string
    dateMiseAJour?: DateTimeFilter<"Histoire"> | Date | string
    auteurId?: StringNullableFilter<"Histoire"> | string | null
    auteur?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    chapitres?: ChapitreListRelationFilter
    objets?: ObjetListRelationFilter
    sauvegardes?: SauvegardeListRelationFilter
  }, "id" | "slug">

  export type HistoireOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    resume?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    statut?: SortOrder
    pointDeDepart?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
    auteurId?: SortOrderInput | SortOrder
    _count?: HistoireCountOrderByAggregateInput
    _max?: HistoireMaxOrderByAggregateInput
    _min?: HistoireMinOrderByAggregateInput
  }

  export type HistoireScalarWhereWithAggregatesInput = {
    AND?: HistoireScalarWhereWithAggregatesInput | HistoireScalarWhereWithAggregatesInput[]
    OR?: HistoireScalarWhereWithAggregatesInput[]
    NOT?: HistoireScalarWhereWithAggregatesInput | HistoireScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Histoire"> | string
    titre?: StringWithAggregatesFilter<"Histoire"> | string
    slug?: StringWithAggregatesFilter<"Histoire"> | string
    resume?: StringNullableWithAggregatesFilter<"Histoire"> | string | null
    description?: StringNullableWithAggregatesFilter<"Histoire"> | string | null
    image?: StringNullableWithAggregatesFilter<"Histoire"> | string | null
    statut?: StringWithAggregatesFilter<"Histoire"> | string
    pointDeDepart?: StringNullableWithAggregatesFilter<"Histoire"> | string | null
    dateCreation?: DateTimeWithAggregatesFilter<"Histoire"> | Date | string
    dateMiseAJour?: DateTimeWithAggregatesFilter<"Histoire"> | Date | string
    auteurId?: StringNullableWithAggregatesFilter<"Histoire"> | string | null
  }

  export type ChapitreWhereInput = {
    AND?: ChapitreWhereInput | ChapitreWhereInput[]
    OR?: ChapitreWhereInput[]
    NOT?: ChapitreWhereInput | ChapitreWhereInput[]
    id?: StringFilter<"Chapitre"> | string
    histoireId?: StringFilter<"Chapitre"> | string
    titreInterne?: StringNullableFilter<"Chapitre"> | string | null
    contenu?: StringFilter<"Chapitre"> | string
    image?: StringNullableFilter<"Chapitre"> | string | null
    effetsEntree?: JsonNullableFilter<"Chapitre">
    ordre?: IntNullableFilter<"Chapitre"> | number | null
    histoire?: XOR<HistoireScalarRelationFilter, HistoireWhereInput>
    choixSortants?: ChoixListRelationFilter
    choixEntrants?: ChoixListRelationFilter
    sauvegardes?: SauvegardeListRelationFilter
  }

  export type ChapitreOrderByWithRelationInput = {
    id?: SortOrder
    histoireId?: SortOrder
    titreInterne?: SortOrderInput | SortOrder
    contenu?: SortOrder
    image?: SortOrderInput | SortOrder
    effetsEntree?: SortOrderInput | SortOrder
    ordre?: SortOrderInput | SortOrder
    histoire?: HistoireOrderByWithRelationInput
    choixSortants?: ChoixOrderByRelationAggregateInput
    choixEntrants?: ChoixOrderByRelationAggregateInput
    sauvegardes?: SauvegardeOrderByRelationAggregateInput
  }

  export type ChapitreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChapitreWhereInput | ChapitreWhereInput[]
    OR?: ChapitreWhereInput[]
    NOT?: ChapitreWhereInput | ChapitreWhereInput[]
    histoireId?: StringFilter<"Chapitre"> | string
    titreInterne?: StringNullableFilter<"Chapitre"> | string | null
    contenu?: StringFilter<"Chapitre"> | string
    image?: StringNullableFilter<"Chapitre"> | string | null
    effetsEntree?: JsonNullableFilter<"Chapitre">
    ordre?: IntNullableFilter<"Chapitre"> | number | null
    histoire?: XOR<HistoireScalarRelationFilter, HistoireWhereInput>
    choixSortants?: ChoixListRelationFilter
    choixEntrants?: ChoixListRelationFilter
    sauvegardes?: SauvegardeListRelationFilter
  }, "id">

  export type ChapitreOrderByWithAggregationInput = {
    id?: SortOrder
    histoireId?: SortOrder
    titreInterne?: SortOrderInput | SortOrder
    contenu?: SortOrder
    image?: SortOrderInput | SortOrder
    effetsEntree?: SortOrderInput | SortOrder
    ordre?: SortOrderInput | SortOrder
    _count?: ChapitreCountOrderByAggregateInput
    _avg?: ChapitreAvgOrderByAggregateInput
    _max?: ChapitreMaxOrderByAggregateInput
    _min?: ChapitreMinOrderByAggregateInput
    _sum?: ChapitreSumOrderByAggregateInput
  }

  export type ChapitreScalarWhereWithAggregatesInput = {
    AND?: ChapitreScalarWhereWithAggregatesInput | ChapitreScalarWhereWithAggregatesInput[]
    OR?: ChapitreScalarWhereWithAggregatesInput[]
    NOT?: ChapitreScalarWhereWithAggregatesInput | ChapitreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chapitre"> | string
    histoireId?: StringWithAggregatesFilter<"Chapitre"> | string
    titreInterne?: StringNullableWithAggregatesFilter<"Chapitre"> | string | null
    contenu?: StringWithAggregatesFilter<"Chapitre"> | string
    image?: StringNullableWithAggregatesFilter<"Chapitre"> | string | null
    effetsEntree?: JsonNullableWithAggregatesFilter<"Chapitre">
    ordre?: IntNullableWithAggregatesFilter<"Chapitre"> | number | null
  }

  export type ChoixWhereInput = {
    AND?: ChoixWhereInput | ChoixWhereInput[]
    OR?: ChoixWhereInput[]
    NOT?: ChoixWhereInput | ChoixWhereInput[]
    id?: StringFilter<"Choix"> | string
    chapitreSourceId?: StringFilter<"Choix"> | string
    libelle?: StringFilter<"Choix"> | string
    destinationChapitreId?: StringNullableFilter<"Choix"> | string | null
    conditions?: JsonNullableFilter<"Choix">
    effets?: JsonNullableFilter<"Choix">
    testAssocie?: JsonNullableFilter<"Choix">
    chapitreSource?: XOR<ChapitreScalarRelationFilter, ChapitreWhereInput>
    chapitreDestination?: XOR<ChapitreNullableScalarRelationFilter, ChapitreWhereInput> | null
  }

  export type ChoixOrderByWithRelationInput = {
    id?: SortOrder
    chapitreSourceId?: SortOrder
    libelle?: SortOrder
    destinationChapitreId?: SortOrderInput | SortOrder
    conditions?: SortOrderInput | SortOrder
    effets?: SortOrderInput | SortOrder
    testAssocie?: SortOrderInput | SortOrder
    chapitreSource?: ChapitreOrderByWithRelationInput
    chapitreDestination?: ChapitreOrderByWithRelationInput
  }

  export type ChoixWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChoixWhereInput | ChoixWhereInput[]
    OR?: ChoixWhereInput[]
    NOT?: ChoixWhereInput | ChoixWhereInput[]
    chapitreSourceId?: StringFilter<"Choix"> | string
    libelle?: StringFilter<"Choix"> | string
    destinationChapitreId?: StringNullableFilter<"Choix"> | string | null
    conditions?: JsonNullableFilter<"Choix">
    effets?: JsonNullableFilter<"Choix">
    testAssocie?: JsonNullableFilter<"Choix">
    chapitreSource?: XOR<ChapitreScalarRelationFilter, ChapitreWhereInput>
    chapitreDestination?: XOR<ChapitreNullableScalarRelationFilter, ChapitreWhereInput> | null
  }, "id">

  export type ChoixOrderByWithAggregationInput = {
    id?: SortOrder
    chapitreSourceId?: SortOrder
    libelle?: SortOrder
    destinationChapitreId?: SortOrderInput | SortOrder
    conditions?: SortOrderInput | SortOrder
    effets?: SortOrderInput | SortOrder
    testAssocie?: SortOrderInput | SortOrder
    _count?: ChoixCountOrderByAggregateInput
    _max?: ChoixMaxOrderByAggregateInput
    _min?: ChoixMinOrderByAggregateInput
  }

  export type ChoixScalarWhereWithAggregatesInput = {
    AND?: ChoixScalarWhereWithAggregatesInput | ChoixScalarWhereWithAggregatesInput[]
    OR?: ChoixScalarWhereWithAggregatesInput[]
    NOT?: ChoixScalarWhereWithAggregatesInput | ChoixScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Choix"> | string
    chapitreSourceId?: StringWithAggregatesFilter<"Choix"> | string
    libelle?: StringWithAggregatesFilter<"Choix"> | string
    destinationChapitreId?: StringNullableWithAggregatesFilter<"Choix"> | string | null
    conditions?: JsonNullableWithAggregatesFilter<"Choix">
    effets?: JsonNullableWithAggregatesFilter<"Choix">
    testAssocie?: JsonNullableWithAggregatesFilter<"Choix">
  }

  export type ObjetWhereInput = {
    AND?: ObjetWhereInput | ObjetWhereInput[]
    OR?: ObjetWhereInput[]
    NOT?: ObjetWhereInput | ObjetWhereInput[]
    id?: StringFilter<"Objet"> | string
    histoireId?: StringNullableFilter<"Objet"> | string | null
    nom?: StringFilter<"Objet"> | string
    description?: StringNullableFilter<"Objet"> | string | null
    type?: StringFilter<"Objet"> | string
    effet?: JsonNullableFilter<"Objet">
    histoire?: XOR<HistoireNullableScalarRelationFilter, HistoireWhereInput> | null
  }

  export type ObjetOrderByWithRelationInput = {
    id?: SortOrder
    histoireId?: SortOrderInput | SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    effet?: SortOrderInput | SortOrder
    histoire?: HistoireOrderByWithRelationInput
  }

  export type ObjetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObjetWhereInput | ObjetWhereInput[]
    OR?: ObjetWhereInput[]
    NOT?: ObjetWhereInput | ObjetWhereInput[]
    histoireId?: StringNullableFilter<"Objet"> | string | null
    nom?: StringFilter<"Objet"> | string
    description?: StringNullableFilter<"Objet"> | string | null
    type?: StringFilter<"Objet"> | string
    effet?: JsonNullableFilter<"Objet">
    histoire?: XOR<HistoireNullableScalarRelationFilter, HistoireWhereInput> | null
  }, "id">

  export type ObjetOrderByWithAggregationInput = {
    id?: SortOrder
    histoireId?: SortOrderInput | SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    effet?: SortOrderInput | SortOrder
    _count?: ObjetCountOrderByAggregateInput
    _max?: ObjetMaxOrderByAggregateInput
    _min?: ObjetMinOrderByAggregateInput
  }

  export type ObjetScalarWhereWithAggregatesInput = {
    AND?: ObjetScalarWhereWithAggregatesInput | ObjetScalarWhereWithAggregatesInput[]
    OR?: ObjetScalarWhereWithAggregatesInput[]
    NOT?: ObjetScalarWhereWithAggregatesInput | ObjetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Objet"> | string
    histoireId?: StringNullableWithAggregatesFilter<"Objet"> | string | null
    nom?: StringWithAggregatesFilter<"Objet"> | string
    description?: StringNullableWithAggregatesFilter<"Objet"> | string | null
    type?: StringWithAggregatesFilter<"Objet"> | string
    effet?: JsonNullableWithAggregatesFilter<"Objet">
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<"Article"> | string
    titre?: StringFilter<"Article"> | string
    slug?: StringFilter<"Article"> | string
    extrait?: StringNullableFilter<"Article"> | string | null
    contenu?: StringFilter<"Article"> | string
    image?: StringNullableFilter<"Article"> | string | null
    statut?: StringFilter<"Article"> | string
    datePublication?: DateTimeNullableFilter<"Article"> | Date | string | null
    dateCreation?: DateTimeFilter<"Article"> | Date | string
    dateMiseAJour?: DateTimeFilter<"Article"> | Date | string
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    extrait?: SortOrderInput | SortOrder
    contenu?: SortOrder
    image?: SortOrderInput | SortOrder
    statut?: SortOrder
    datePublication?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    titre?: StringFilter<"Article"> | string
    extrait?: StringNullableFilter<"Article"> | string | null
    contenu?: StringFilter<"Article"> | string
    image?: StringNullableFilter<"Article"> | string | null
    statut?: StringFilter<"Article"> | string
    datePublication?: DateTimeNullableFilter<"Article"> | Date | string | null
    dateCreation?: DateTimeFilter<"Article"> | Date | string
    dateMiseAJour?: DateTimeFilter<"Article"> | Date | string
  }, "id" | "slug">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    extrait?: SortOrderInput | SortOrder
    contenu?: SortOrder
    image?: SortOrderInput | SortOrder
    statut?: SortOrder
    datePublication?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Article"> | string
    titre?: StringWithAggregatesFilter<"Article"> | string
    slug?: StringWithAggregatesFilter<"Article"> | string
    extrait?: StringNullableWithAggregatesFilter<"Article"> | string | null
    contenu?: StringWithAggregatesFilter<"Article"> | string
    image?: StringNullableWithAggregatesFilter<"Article"> | string | null
    statut?: StringWithAggregatesFilter<"Article"> | string
    datePublication?: DateTimeNullableWithAggregatesFilter<"Article"> | Date | string | null
    dateCreation?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    dateMiseAJour?: DateTimeWithAggregatesFilter<"Article"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    login?: StringFilter<"Admin"> | string
    motDePasseHashe?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    dateDerniereConnex?: DateTimeNullableFilter<"Admin"> | Date | string | null
    dateCreation?: DateTimeFilter<"Admin"> | Date | string
    histoires?: HistoireListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    login?: SortOrder
    motDePasseHashe?: SortOrder
    role?: SortOrder
    dateDerniereConnex?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    histoires?: HistoireOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    login?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    motDePasseHashe?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    dateDerniereConnex?: DateTimeNullableFilter<"Admin"> | Date | string | null
    dateCreation?: DateTimeFilter<"Admin"> | Date | string
    histoires?: HistoireListRelationFilter
  }, "id" | "login">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    login?: SortOrder
    motDePasseHashe?: SortOrder
    role?: SortOrder
    dateDerniereConnex?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    login?: StringWithAggregatesFilter<"Admin"> | string
    motDePasseHashe?: StringWithAggregatesFilter<"Admin"> | string
    role?: StringWithAggregatesFilter<"Admin"> | string
    dateDerniereConnex?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
    dateCreation?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: StringFilter<"Utilisateur"> | string
    pseudo?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    motDePasseHashe?: StringFilter<"Utilisateur"> | string
    dateCreation?: DateTimeFilter<"Utilisateur"> | Date | string
    dateDerniereConnex?: DateTimeNullableFilter<"Utilisateur"> | Date | string | null
    sauvegardes?: SauvegardeListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    pseudo?: SortOrder
    email?: SortOrder
    motDePasseHashe?: SortOrder
    dateCreation?: SortOrder
    dateDerniereConnex?: SortOrderInput | SortOrder
    sauvegardes?: SauvegardeOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pseudo?: string
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    motDePasseHashe?: StringFilter<"Utilisateur"> | string
    dateCreation?: DateTimeFilter<"Utilisateur"> | Date | string
    dateDerniereConnex?: DateTimeNullableFilter<"Utilisateur"> | Date | string | null
    sauvegardes?: SauvegardeListRelationFilter
  }, "id" | "pseudo" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    pseudo?: SortOrder
    email?: SortOrder
    motDePasseHashe?: SortOrder
    dateCreation?: SortOrder
    dateDerniereConnex?: SortOrderInput | SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Utilisateur"> | string
    pseudo?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    motDePasseHashe?: StringWithAggregatesFilter<"Utilisateur"> | string
    dateCreation?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
    dateDerniereConnex?: DateTimeNullableWithAggregatesFilter<"Utilisateur"> | Date | string | null
  }

  export type SauvegardeWhereInput = {
    AND?: SauvegardeWhereInput | SauvegardeWhereInput[]
    OR?: SauvegardeWhereInput[]
    NOT?: SauvegardeWhereInput | SauvegardeWhereInput[]
    id?: StringFilter<"Sauvegarde"> | string
    utilisateurId?: StringFilter<"Sauvegarde"> | string
    histoireId?: StringFilter<"Sauvegarde"> | string
    chapitreCourantId?: StringFilter<"Sauvegarde"> | string
    pointsDeVie?: IntFilter<"Sauvegarde"> | number
    caracteristiques?: JsonNullableFilter<"Sauvegarde">
    inventaire?: JsonNullableFilter<"Sauvegarde">
    variablesEtat?: JsonNullableFilter<"Sauvegarde">
    dateCreation?: DateTimeFilter<"Sauvegarde"> | Date | string
    dateMiseAJour?: DateTimeFilter<"Sauvegarde"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    histoire?: XOR<HistoireScalarRelationFilter, HistoireWhereInput>
    chapitreCourant?: XOR<ChapitreScalarRelationFilter, ChapitreWhereInput>
  }

  export type SauvegardeOrderByWithRelationInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    histoireId?: SortOrder
    chapitreCourantId?: SortOrder
    pointsDeVie?: SortOrder
    caracteristiques?: SortOrderInput | SortOrder
    inventaire?: SortOrderInput | SortOrder
    variablesEtat?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    histoire?: HistoireOrderByWithRelationInput
    chapitreCourant?: ChapitreOrderByWithRelationInput
  }

  export type SauvegardeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    utilisateurId_histoireId?: SauvegardeUtilisateurIdHistoireIdCompoundUniqueInput
    AND?: SauvegardeWhereInput | SauvegardeWhereInput[]
    OR?: SauvegardeWhereInput[]
    NOT?: SauvegardeWhereInput | SauvegardeWhereInput[]
    utilisateurId?: StringFilter<"Sauvegarde"> | string
    histoireId?: StringFilter<"Sauvegarde"> | string
    chapitreCourantId?: StringFilter<"Sauvegarde"> | string
    pointsDeVie?: IntFilter<"Sauvegarde"> | number
    caracteristiques?: JsonNullableFilter<"Sauvegarde">
    inventaire?: JsonNullableFilter<"Sauvegarde">
    variablesEtat?: JsonNullableFilter<"Sauvegarde">
    dateCreation?: DateTimeFilter<"Sauvegarde"> | Date | string
    dateMiseAJour?: DateTimeFilter<"Sauvegarde"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    histoire?: XOR<HistoireScalarRelationFilter, HistoireWhereInput>
    chapitreCourant?: XOR<ChapitreScalarRelationFilter, ChapitreWhereInput>
  }, "id" | "utilisateurId_histoireId">

  export type SauvegardeOrderByWithAggregationInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    histoireId?: SortOrder
    chapitreCourantId?: SortOrder
    pointsDeVie?: SortOrder
    caracteristiques?: SortOrderInput | SortOrder
    inventaire?: SortOrderInput | SortOrder
    variablesEtat?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
    _count?: SauvegardeCountOrderByAggregateInput
    _avg?: SauvegardeAvgOrderByAggregateInput
    _max?: SauvegardeMaxOrderByAggregateInput
    _min?: SauvegardeMinOrderByAggregateInput
    _sum?: SauvegardeSumOrderByAggregateInput
  }

  export type SauvegardeScalarWhereWithAggregatesInput = {
    AND?: SauvegardeScalarWhereWithAggregatesInput | SauvegardeScalarWhereWithAggregatesInput[]
    OR?: SauvegardeScalarWhereWithAggregatesInput[]
    NOT?: SauvegardeScalarWhereWithAggregatesInput | SauvegardeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sauvegarde"> | string
    utilisateurId?: StringWithAggregatesFilter<"Sauvegarde"> | string
    histoireId?: StringWithAggregatesFilter<"Sauvegarde"> | string
    chapitreCourantId?: StringWithAggregatesFilter<"Sauvegarde"> | string
    pointsDeVie?: IntWithAggregatesFilter<"Sauvegarde"> | number
    caracteristiques?: JsonNullableWithAggregatesFilter<"Sauvegarde">
    inventaire?: JsonNullableWithAggregatesFilter<"Sauvegarde">
    variablesEtat?: JsonNullableWithAggregatesFilter<"Sauvegarde">
    dateCreation?: DateTimeWithAggregatesFilter<"Sauvegarde"> | Date | string
    dateMiseAJour?: DateTimeWithAggregatesFilter<"Sauvegarde"> | Date | string
  }

  export type HistoireCreateInput = {
    id?: string
    titre: string
    slug: string
    resume?: string | null
    description?: string | null
    image?: string | null
    statut?: string
    pointDeDepart?: string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    auteur?: AdminCreateNestedOneWithoutHistoiresInput
    chapitres?: ChapitreCreateNestedManyWithoutHistoireInput
    objets?: ObjetCreateNestedManyWithoutHistoireInput
    sauvegardes?: SauvegardeCreateNestedManyWithoutHistoireInput
  }

  export type HistoireUncheckedCreateInput = {
    id?: string
    titre: string
    slug: string
    resume?: string | null
    description?: string | null
    image?: string | null
    statut?: string
    pointDeDepart?: string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    auteurId?: string | null
    chapitres?: ChapitreUncheckedCreateNestedManyWithoutHistoireInput
    objets?: ObjetUncheckedCreateNestedManyWithoutHistoireInput
    sauvegardes?: SauvegardeUncheckedCreateNestedManyWithoutHistoireInput
  }

  export type HistoireUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    pointDeDepart?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: AdminUpdateOneWithoutHistoiresNestedInput
    chapitres?: ChapitreUpdateManyWithoutHistoireNestedInput
    objets?: ObjetUpdateManyWithoutHistoireNestedInput
    sauvegardes?: SauvegardeUpdateManyWithoutHistoireNestedInput
  }

  export type HistoireUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    pointDeDepart?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    chapitres?: ChapitreUncheckedUpdateManyWithoutHistoireNestedInput
    objets?: ObjetUncheckedUpdateManyWithoutHistoireNestedInput
    sauvegardes?: SauvegardeUncheckedUpdateManyWithoutHistoireNestedInput
  }

  export type HistoireCreateManyInput = {
    id?: string
    titre: string
    slug: string
    resume?: string | null
    description?: string | null
    image?: string | null
    statut?: string
    pointDeDepart?: string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    auteurId?: string | null
  }

  export type HistoireUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    pointDeDepart?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoireUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    pointDeDepart?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChapitreCreateInput = {
    id?: string
    titreInterne?: string | null
    contenu: string
    image?: string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: number | null
    histoire: HistoireCreateNestedOneWithoutChapitresInput
    choixSortants?: ChoixCreateNestedManyWithoutChapitreSourceInput
    choixEntrants?: ChoixCreateNestedManyWithoutChapitreDestinationInput
    sauvegardes?: SauvegardeCreateNestedManyWithoutChapitreCourantInput
  }

  export type ChapitreUncheckedCreateInput = {
    id?: string
    histoireId: string
    titreInterne?: string | null
    contenu: string
    image?: string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: number | null
    choixSortants?: ChoixUncheckedCreateNestedManyWithoutChapitreSourceInput
    choixEntrants?: ChoixUncheckedCreateNestedManyWithoutChapitreDestinationInput
    sauvegardes?: SauvegardeUncheckedCreateNestedManyWithoutChapitreCourantInput
  }

  export type ChapitreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titreInterne?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    histoire?: HistoireUpdateOneRequiredWithoutChapitresNestedInput
    choixSortants?: ChoixUpdateManyWithoutChapitreSourceNestedInput
    choixEntrants?: ChoixUpdateManyWithoutChapitreDestinationNestedInput
    sauvegardes?: SauvegardeUpdateManyWithoutChapitreCourantNestedInput
  }

  export type ChapitreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    histoireId?: StringFieldUpdateOperationsInput | string
    titreInterne?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    choixSortants?: ChoixUncheckedUpdateManyWithoutChapitreSourceNestedInput
    choixEntrants?: ChoixUncheckedUpdateManyWithoutChapitreDestinationNestedInput
    sauvegardes?: SauvegardeUncheckedUpdateManyWithoutChapitreCourantNestedInput
  }

  export type ChapitreCreateManyInput = {
    id?: string
    histoireId: string
    titreInterne?: string | null
    contenu: string
    image?: string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: number | null
  }

  export type ChapitreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titreInterne?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChapitreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    histoireId?: StringFieldUpdateOperationsInput | string
    titreInterne?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChoixCreateInput = {
    id?: string
    libelle: string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
    chapitreSource: ChapitreCreateNestedOneWithoutChoixSortantsInput
    chapitreDestination?: ChapitreCreateNestedOneWithoutChoixEntrantsInput
  }

  export type ChoixUncheckedCreateInput = {
    id?: string
    chapitreSourceId: string
    libelle: string
    destinationChapitreId?: string | null
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChoixUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
    chapitreSource?: ChapitreUpdateOneRequiredWithoutChoixSortantsNestedInput
    chapitreDestination?: ChapitreUpdateOneWithoutChoixEntrantsNestedInput
  }

  export type ChoixUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapitreSourceId?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    destinationChapitreId?: NullableStringFieldUpdateOperationsInput | string | null
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChoixCreateManyInput = {
    id?: string
    chapitreSourceId: string
    libelle: string
    destinationChapitreId?: string | null
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChoixUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChoixUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapitreSourceId?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    destinationChapitreId?: NullableStringFieldUpdateOperationsInput | string | null
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ObjetCreateInput = {
    id?: string
    nom: string
    description?: string | null
    type: string
    effet?: NullableJsonNullValueInput | InputJsonValue
    histoire?: HistoireCreateNestedOneWithoutObjetsInput
  }

  export type ObjetUncheckedCreateInput = {
    id?: string
    histoireId?: string | null
    nom: string
    description?: string | null
    type: string
    effet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ObjetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    effet?: NullableJsonNullValueInput | InputJsonValue
    histoire?: HistoireUpdateOneWithoutObjetsNestedInput
  }

  export type ObjetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    histoireId?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    effet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ObjetCreateManyInput = {
    id?: string
    histoireId?: string | null
    nom: string
    description?: string | null
    type: string
    effet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ObjetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    effet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ObjetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    histoireId?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    effet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ArticleCreateInput = {
    id?: string
    titre: string
    slug: string
    extrait?: string | null
    contenu: string
    image?: string | null
    statut?: string
    datePublication?: Date | string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    titre: string
    slug: string
    extrait?: string | null
    contenu: string
    image?: string | null
    statut?: string
    datePublication?: Date | string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extrait?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extrait?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyInput = {
    id?: string
    titre: string
    slug: string
    extrait?: string | null
    contenu: string
    image?: string | null
    statut?: string
    datePublication?: Date | string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extrait?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extrait?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    login: string
    motDePasseHashe: string
    role?: string
    dateDerniereConnex?: Date | string | null
    dateCreation?: Date | string
    histoires?: HistoireCreateNestedManyWithoutAuteurInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    login: string
    motDePasseHashe: string
    role?: string
    dateDerniereConnex?: Date | string | null
    dateCreation?: Date | string
    histoires?: HistoireUncheckedCreateNestedManyWithoutAuteurInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    motDePasseHashe?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateDerniereConnex?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    histoires?: HistoireUpdateManyWithoutAuteurNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    motDePasseHashe?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateDerniereConnex?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    histoires?: HistoireUncheckedUpdateManyWithoutAuteurNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    login: string
    motDePasseHashe: string
    role?: string
    dateDerniereConnex?: Date | string | null
    dateCreation?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    motDePasseHashe?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateDerniereConnex?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    motDePasseHashe?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateDerniereConnex?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurCreateInput = {
    id?: string
    pseudo: string
    email: string
    motDePasseHashe: string
    dateCreation?: Date | string
    dateDerniereConnex?: Date | string | null
    sauvegardes?: SauvegardeCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: string
    pseudo: string
    email: string
    motDePasseHashe: string
    dateCreation?: Date | string
    dateDerniereConnex?: Date | string | null
    sauvegardes?: SauvegardeUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHashe?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDerniereConnex?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sauvegardes?: SauvegardeUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHashe?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDerniereConnex?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sauvegardes?: SauvegardeUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: string
    pseudo: string
    email: string
    motDePasseHashe: string
    dateCreation?: Date | string
    dateDerniereConnex?: Date | string | null
  }

  export type UtilisateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHashe?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDerniereConnex?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHashe?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDerniereConnex?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SauvegardeCreateInput = {
    id?: string
    pointsDeVie?: number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutSauvegardesInput
    histoire: HistoireCreateNestedOneWithoutSauvegardesInput
    chapitreCourant: ChapitreCreateNestedOneWithoutSauvegardesInput
  }

  export type SauvegardeUncheckedCreateInput = {
    id?: string
    utilisateurId: string
    histoireId: string
    chapitreCourantId: string
    pointsDeVie?: number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
  }

  export type SauvegardeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsDeVie?: IntFieldUpdateOperationsInput | number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutSauvegardesNestedInput
    histoire?: HistoireUpdateOneRequiredWithoutSauvegardesNestedInput
    chapitreCourant?: ChapitreUpdateOneRequiredWithoutSauvegardesNestedInput
  }

  export type SauvegardeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    histoireId?: StringFieldUpdateOperationsInput | string
    chapitreCourantId?: StringFieldUpdateOperationsInput | string
    pointsDeVie?: IntFieldUpdateOperationsInput | number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SauvegardeCreateManyInput = {
    id?: string
    utilisateurId: string
    histoireId: string
    chapitreCourantId: string
    pointsDeVie?: number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
  }

  export type SauvegardeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsDeVie?: IntFieldUpdateOperationsInput | number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SauvegardeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    histoireId?: StringFieldUpdateOperationsInput | string
    chapitreCourantId?: StringFieldUpdateOperationsInput | string
    pointsDeVie?: IntFieldUpdateOperationsInput | number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type ChapitreListRelationFilter = {
    every?: ChapitreWhereInput
    some?: ChapitreWhereInput
    none?: ChapitreWhereInput
  }

  export type ObjetListRelationFilter = {
    every?: ObjetWhereInput
    some?: ObjetWhereInput
    none?: ObjetWhereInput
  }

  export type SauvegardeListRelationFilter = {
    every?: SauvegardeWhereInput
    some?: SauvegardeWhereInput
    none?: SauvegardeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChapitreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObjetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SauvegardeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoireCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    resume?: SortOrder
    description?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    pointDeDepart?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
    auteurId?: SortOrder
  }

  export type HistoireMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    resume?: SortOrder
    description?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    pointDeDepart?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
    auteurId?: SortOrder
  }

  export type HistoireMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    resume?: SortOrder
    description?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    pointDeDepart?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
    auteurId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type HistoireScalarRelationFilter = {
    is?: HistoireWhereInput
    isNot?: HistoireWhereInput
  }

  export type ChoixListRelationFilter = {
    every?: ChoixWhereInput
    some?: ChoixWhereInput
    none?: ChoixWhereInput
  }

  export type ChoixOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapitreCountOrderByAggregateInput = {
    id?: SortOrder
    histoireId?: SortOrder
    titreInterne?: SortOrder
    contenu?: SortOrder
    image?: SortOrder
    effetsEntree?: SortOrder
    ordre?: SortOrder
  }

  export type ChapitreAvgOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type ChapitreMaxOrderByAggregateInput = {
    id?: SortOrder
    histoireId?: SortOrder
    titreInterne?: SortOrder
    contenu?: SortOrder
    image?: SortOrder
    ordre?: SortOrder
  }

  export type ChapitreMinOrderByAggregateInput = {
    id?: SortOrder
    histoireId?: SortOrder
    titreInterne?: SortOrder
    contenu?: SortOrder
    image?: SortOrder
    ordre?: SortOrder
  }

  export type ChapitreSumOrderByAggregateInput = {
    ordre?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ChapitreScalarRelationFilter = {
    is?: ChapitreWhereInput
    isNot?: ChapitreWhereInput
  }

  export type ChapitreNullableScalarRelationFilter = {
    is?: ChapitreWhereInput | null
    isNot?: ChapitreWhereInput | null
  }

  export type ChoixCountOrderByAggregateInput = {
    id?: SortOrder
    chapitreSourceId?: SortOrder
    libelle?: SortOrder
    destinationChapitreId?: SortOrder
    conditions?: SortOrder
    effets?: SortOrder
    testAssocie?: SortOrder
  }

  export type ChoixMaxOrderByAggregateInput = {
    id?: SortOrder
    chapitreSourceId?: SortOrder
    libelle?: SortOrder
    destinationChapitreId?: SortOrder
  }

  export type ChoixMinOrderByAggregateInput = {
    id?: SortOrder
    chapitreSourceId?: SortOrder
    libelle?: SortOrder
    destinationChapitreId?: SortOrder
  }

  export type HistoireNullableScalarRelationFilter = {
    is?: HistoireWhereInput | null
    isNot?: HistoireWhereInput | null
  }

  export type ObjetCountOrderByAggregateInput = {
    id?: SortOrder
    histoireId?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    type?: SortOrder
    effet?: SortOrder
  }

  export type ObjetMaxOrderByAggregateInput = {
    id?: SortOrder
    histoireId?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type ObjetMinOrderByAggregateInput = {
    id?: SortOrder
    histoireId?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    extrait?: SortOrder
    contenu?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    datePublication?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    extrait?: SortOrder
    contenu?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    datePublication?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    extrait?: SortOrder
    contenu?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    datePublication?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type HistoireListRelationFilter = {
    every?: HistoireWhereInput
    some?: HistoireWhereInput
    none?: HistoireWhereInput
  }

  export type HistoireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    motDePasseHashe?: SortOrder
    role?: SortOrder
    dateDerniereConnex?: SortOrder
    dateCreation?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    motDePasseHashe?: SortOrder
    role?: SortOrder
    dateDerniereConnex?: SortOrder
    dateCreation?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    motDePasseHashe?: SortOrder
    role?: SortOrder
    dateDerniereConnex?: SortOrder
    dateCreation?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    pseudo?: SortOrder
    email?: SortOrder
    motDePasseHashe?: SortOrder
    dateCreation?: SortOrder
    dateDerniereConnex?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    pseudo?: SortOrder
    email?: SortOrder
    motDePasseHashe?: SortOrder
    dateCreation?: SortOrder
    dateDerniereConnex?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    pseudo?: SortOrder
    email?: SortOrder
    motDePasseHashe?: SortOrder
    dateCreation?: SortOrder
    dateDerniereConnex?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type SauvegardeUtilisateurIdHistoireIdCompoundUniqueInput = {
    utilisateurId: string
    histoireId: string
  }

  export type SauvegardeCountOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    histoireId?: SortOrder
    chapitreCourantId?: SortOrder
    pointsDeVie?: SortOrder
    caracteristiques?: SortOrder
    inventaire?: SortOrder
    variablesEtat?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
  }

  export type SauvegardeAvgOrderByAggregateInput = {
    pointsDeVie?: SortOrder
  }

  export type SauvegardeMaxOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    histoireId?: SortOrder
    chapitreCourantId?: SortOrder
    pointsDeVie?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
  }

  export type SauvegardeMinOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    histoireId?: SortOrder
    chapitreCourantId?: SortOrder
    pointsDeVie?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
  }

  export type SauvegardeSumOrderByAggregateInput = {
    pointsDeVie?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type AdminCreateNestedOneWithoutHistoiresInput = {
    create?: XOR<AdminCreateWithoutHistoiresInput, AdminUncheckedCreateWithoutHistoiresInput>
    connectOrCreate?: AdminCreateOrConnectWithoutHistoiresInput
    connect?: AdminWhereUniqueInput
  }

  export type ChapitreCreateNestedManyWithoutHistoireInput = {
    create?: XOR<ChapitreCreateWithoutHistoireInput, ChapitreUncheckedCreateWithoutHistoireInput> | ChapitreCreateWithoutHistoireInput[] | ChapitreUncheckedCreateWithoutHistoireInput[]
    connectOrCreate?: ChapitreCreateOrConnectWithoutHistoireInput | ChapitreCreateOrConnectWithoutHistoireInput[]
    createMany?: ChapitreCreateManyHistoireInputEnvelope
    connect?: ChapitreWhereUniqueInput | ChapitreWhereUniqueInput[]
  }

  export type ObjetCreateNestedManyWithoutHistoireInput = {
    create?: XOR<ObjetCreateWithoutHistoireInput, ObjetUncheckedCreateWithoutHistoireInput> | ObjetCreateWithoutHistoireInput[] | ObjetUncheckedCreateWithoutHistoireInput[]
    connectOrCreate?: ObjetCreateOrConnectWithoutHistoireInput | ObjetCreateOrConnectWithoutHistoireInput[]
    createMany?: ObjetCreateManyHistoireInputEnvelope
    connect?: ObjetWhereUniqueInput | ObjetWhereUniqueInput[]
  }

  export type SauvegardeCreateNestedManyWithoutHistoireInput = {
    create?: XOR<SauvegardeCreateWithoutHistoireInput, SauvegardeUncheckedCreateWithoutHistoireInput> | SauvegardeCreateWithoutHistoireInput[] | SauvegardeUncheckedCreateWithoutHistoireInput[]
    connectOrCreate?: SauvegardeCreateOrConnectWithoutHistoireInput | SauvegardeCreateOrConnectWithoutHistoireInput[]
    createMany?: SauvegardeCreateManyHistoireInputEnvelope
    connect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
  }

  export type ChapitreUncheckedCreateNestedManyWithoutHistoireInput = {
    create?: XOR<ChapitreCreateWithoutHistoireInput, ChapitreUncheckedCreateWithoutHistoireInput> | ChapitreCreateWithoutHistoireInput[] | ChapitreUncheckedCreateWithoutHistoireInput[]
    connectOrCreate?: ChapitreCreateOrConnectWithoutHistoireInput | ChapitreCreateOrConnectWithoutHistoireInput[]
    createMany?: ChapitreCreateManyHistoireInputEnvelope
    connect?: ChapitreWhereUniqueInput | ChapitreWhereUniqueInput[]
  }

  export type ObjetUncheckedCreateNestedManyWithoutHistoireInput = {
    create?: XOR<ObjetCreateWithoutHistoireInput, ObjetUncheckedCreateWithoutHistoireInput> | ObjetCreateWithoutHistoireInput[] | ObjetUncheckedCreateWithoutHistoireInput[]
    connectOrCreate?: ObjetCreateOrConnectWithoutHistoireInput | ObjetCreateOrConnectWithoutHistoireInput[]
    createMany?: ObjetCreateManyHistoireInputEnvelope
    connect?: ObjetWhereUniqueInput | ObjetWhereUniqueInput[]
  }

  export type SauvegardeUncheckedCreateNestedManyWithoutHistoireInput = {
    create?: XOR<SauvegardeCreateWithoutHistoireInput, SauvegardeUncheckedCreateWithoutHistoireInput> | SauvegardeCreateWithoutHistoireInput[] | SauvegardeUncheckedCreateWithoutHistoireInput[]
    connectOrCreate?: SauvegardeCreateOrConnectWithoutHistoireInput | SauvegardeCreateOrConnectWithoutHistoireInput[]
    createMany?: SauvegardeCreateManyHistoireInputEnvelope
    connect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdminUpdateOneWithoutHistoiresNestedInput = {
    create?: XOR<AdminCreateWithoutHistoiresInput, AdminUncheckedCreateWithoutHistoiresInput>
    connectOrCreate?: AdminCreateOrConnectWithoutHistoiresInput
    upsert?: AdminUpsertWithoutHistoiresInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutHistoiresInput, AdminUpdateWithoutHistoiresInput>, AdminUncheckedUpdateWithoutHistoiresInput>
  }

  export type ChapitreUpdateManyWithoutHistoireNestedInput = {
    create?: XOR<ChapitreCreateWithoutHistoireInput, ChapitreUncheckedCreateWithoutHistoireInput> | ChapitreCreateWithoutHistoireInput[] | ChapitreUncheckedCreateWithoutHistoireInput[]
    connectOrCreate?: ChapitreCreateOrConnectWithoutHistoireInput | ChapitreCreateOrConnectWithoutHistoireInput[]
    upsert?: ChapitreUpsertWithWhereUniqueWithoutHistoireInput | ChapitreUpsertWithWhereUniqueWithoutHistoireInput[]
    createMany?: ChapitreCreateManyHistoireInputEnvelope
    set?: ChapitreWhereUniqueInput | ChapitreWhereUniqueInput[]
    disconnect?: ChapitreWhereUniqueInput | ChapitreWhereUniqueInput[]
    delete?: ChapitreWhereUniqueInput | ChapitreWhereUniqueInput[]
    connect?: ChapitreWhereUniqueInput | ChapitreWhereUniqueInput[]
    update?: ChapitreUpdateWithWhereUniqueWithoutHistoireInput | ChapitreUpdateWithWhereUniqueWithoutHistoireInput[]
    updateMany?: ChapitreUpdateManyWithWhereWithoutHistoireInput | ChapitreUpdateManyWithWhereWithoutHistoireInput[]
    deleteMany?: ChapitreScalarWhereInput | ChapitreScalarWhereInput[]
  }

  export type ObjetUpdateManyWithoutHistoireNestedInput = {
    create?: XOR<ObjetCreateWithoutHistoireInput, ObjetUncheckedCreateWithoutHistoireInput> | ObjetCreateWithoutHistoireInput[] | ObjetUncheckedCreateWithoutHistoireInput[]
    connectOrCreate?: ObjetCreateOrConnectWithoutHistoireInput | ObjetCreateOrConnectWithoutHistoireInput[]
    upsert?: ObjetUpsertWithWhereUniqueWithoutHistoireInput | ObjetUpsertWithWhereUniqueWithoutHistoireInput[]
    createMany?: ObjetCreateManyHistoireInputEnvelope
    set?: ObjetWhereUniqueInput | ObjetWhereUniqueInput[]
    disconnect?: ObjetWhereUniqueInput | ObjetWhereUniqueInput[]
    delete?: ObjetWhereUniqueInput | ObjetWhereUniqueInput[]
    connect?: ObjetWhereUniqueInput | ObjetWhereUniqueInput[]
    update?: ObjetUpdateWithWhereUniqueWithoutHistoireInput | ObjetUpdateWithWhereUniqueWithoutHistoireInput[]
    updateMany?: ObjetUpdateManyWithWhereWithoutHistoireInput | ObjetUpdateManyWithWhereWithoutHistoireInput[]
    deleteMany?: ObjetScalarWhereInput | ObjetScalarWhereInput[]
  }

  export type SauvegardeUpdateManyWithoutHistoireNestedInput = {
    create?: XOR<SauvegardeCreateWithoutHistoireInput, SauvegardeUncheckedCreateWithoutHistoireInput> | SauvegardeCreateWithoutHistoireInput[] | SauvegardeUncheckedCreateWithoutHistoireInput[]
    connectOrCreate?: SauvegardeCreateOrConnectWithoutHistoireInput | SauvegardeCreateOrConnectWithoutHistoireInput[]
    upsert?: SauvegardeUpsertWithWhereUniqueWithoutHistoireInput | SauvegardeUpsertWithWhereUniqueWithoutHistoireInput[]
    createMany?: SauvegardeCreateManyHistoireInputEnvelope
    set?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    disconnect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    delete?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    connect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    update?: SauvegardeUpdateWithWhereUniqueWithoutHistoireInput | SauvegardeUpdateWithWhereUniqueWithoutHistoireInput[]
    updateMany?: SauvegardeUpdateManyWithWhereWithoutHistoireInput | SauvegardeUpdateManyWithWhereWithoutHistoireInput[]
    deleteMany?: SauvegardeScalarWhereInput | SauvegardeScalarWhereInput[]
  }

  export type ChapitreUncheckedUpdateManyWithoutHistoireNestedInput = {
    create?: XOR<ChapitreCreateWithoutHistoireInput, ChapitreUncheckedCreateWithoutHistoireInput> | ChapitreCreateWithoutHistoireInput[] | ChapitreUncheckedCreateWithoutHistoireInput[]
    connectOrCreate?: ChapitreCreateOrConnectWithoutHistoireInput | ChapitreCreateOrConnectWithoutHistoireInput[]
    upsert?: ChapitreUpsertWithWhereUniqueWithoutHistoireInput | ChapitreUpsertWithWhereUniqueWithoutHistoireInput[]
    createMany?: ChapitreCreateManyHistoireInputEnvelope
    set?: ChapitreWhereUniqueInput | ChapitreWhereUniqueInput[]
    disconnect?: ChapitreWhereUniqueInput | ChapitreWhereUniqueInput[]
    delete?: ChapitreWhereUniqueInput | ChapitreWhereUniqueInput[]
    connect?: ChapitreWhereUniqueInput | ChapitreWhereUniqueInput[]
    update?: ChapitreUpdateWithWhereUniqueWithoutHistoireInput | ChapitreUpdateWithWhereUniqueWithoutHistoireInput[]
    updateMany?: ChapitreUpdateManyWithWhereWithoutHistoireInput | ChapitreUpdateManyWithWhereWithoutHistoireInput[]
    deleteMany?: ChapitreScalarWhereInput | ChapitreScalarWhereInput[]
  }

  export type ObjetUncheckedUpdateManyWithoutHistoireNestedInput = {
    create?: XOR<ObjetCreateWithoutHistoireInput, ObjetUncheckedCreateWithoutHistoireInput> | ObjetCreateWithoutHistoireInput[] | ObjetUncheckedCreateWithoutHistoireInput[]
    connectOrCreate?: ObjetCreateOrConnectWithoutHistoireInput | ObjetCreateOrConnectWithoutHistoireInput[]
    upsert?: ObjetUpsertWithWhereUniqueWithoutHistoireInput | ObjetUpsertWithWhereUniqueWithoutHistoireInput[]
    createMany?: ObjetCreateManyHistoireInputEnvelope
    set?: ObjetWhereUniqueInput | ObjetWhereUniqueInput[]
    disconnect?: ObjetWhereUniqueInput | ObjetWhereUniqueInput[]
    delete?: ObjetWhereUniqueInput | ObjetWhereUniqueInput[]
    connect?: ObjetWhereUniqueInput | ObjetWhereUniqueInput[]
    update?: ObjetUpdateWithWhereUniqueWithoutHistoireInput | ObjetUpdateWithWhereUniqueWithoutHistoireInput[]
    updateMany?: ObjetUpdateManyWithWhereWithoutHistoireInput | ObjetUpdateManyWithWhereWithoutHistoireInput[]
    deleteMany?: ObjetScalarWhereInput | ObjetScalarWhereInput[]
  }

  export type SauvegardeUncheckedUpdateManyWithoutHistoireNestedInput = {
    create?: XOR<SauvegardeCreateWithoutHistoireInput, SauvegardeUncheckedCreateWithoutHistoireInput> | SauvegardeCreateWithoutHistoireInput[] | SauvegardeUncheckedCreateWithoutHistoireInput[]
    connectOrCreate?: SauvegardeCreateOrConnectWithoutHistoireInput | SauvegardeCreateOrConnectWithoutHistoireInput[]
    upsert?: SauvegardeUpsertWithWhereUniqueWithoutHistoireInput | SauvegardeUpsertWithWhereUniqueWithoutHistoireInput[]
    createMany?: SauvegardeCreateManyHistoireInputEnvelope
    set?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    disconnect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    delete?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    connect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    update?: SauvegardeUpdateWithWhereUniqueWithoutHistoireInput | SauvegardeUpdateWithWhereUniqueWithoutHistoireInput[]
    updateMany?: SauvegardeUpdateManyWithWhereWithoutHistoireInput | SauvegardeUpdateManyWithWhereWithoutHistoireInput[]
    deleteMany?: SauvegardeScalarWhereInput | SauvegardeScalarWhereInput[]
  }

  export type HistoireCreateNestedOneWithoutChapitresInput = {
    create?: XOR<HistoireCreateWithoutChapitresInput, HistoireUncheckedCreateWithoutChapitresInput>
    connectOrCreate?: HistoireCreateOrConnectWithoutChapitresInput
    connect?: HistoireWhereUniqueInput
  }

  export type ChoixCreateNestedManyWithoutChapitreSourceInput = {
    create?: XOR<ChoixCreateWithoutChapitreSourceInput, ChoixUncheckedCreateWithoutChapitreSourceInput> | ChoixCreateWithoutChapitreSourceInput[] | ChoixUncheckedCreateWithoutChapitreSourceInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutChapitreSourceInput | ChoixCreateOrConnectWithoutChapitreSourceInput[]
    createMany?: ChoixCreateManyChapitreSourceInputEnvelope
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
  }

  export type ChoixCreateNestedManyWithoutChapitreDestinationInput = {
    create?: XOR<ChoixCreateWithoutChapitreDestinationInput, ChoixUncheckedCreateWithoutChapitreDestinationInput> | ChoixCreateWithoutChapitreDestinationInput[] | ChoixUncheckedCreateWithoutChapitreDestinationInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutChapitreDestinationInput | ChoixCreateOrConnectWithoutChapitreDestinationInput[]
    createMany?: ChoixCreateManyChapitreDestinationInputEnvelope
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
  }

  export type SauvegardeCreateNestedManyWithoutChapitreCourantInput = {
    create?: XOR<SauvegardeCreateWithoutChapitreCourantInput, SauvegardeUncheckedCreateWithoutChapitreCourantInput> | SauvegardeCreateWithoutChapitreCourantInput[] | SauvegardeUncheckedCreateWithoutChapitreCourantInput[]
    connectOrCreate?: SauvegardeCreateOrConnectWithoutChapitreCourantInput | SauvegardeCreateOrConnectWithoutChapitreCourantInput[]
    createMany?: SauvegardeCreateManyChapitreCourantInputEnvelope
    connect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
  }

  export type ChoixUncheckedCreateNestedManyWithoutChapitreSourceInput = {
    create?: XOR<ChoixCreateWithoutChapitreSourceInput, ChoixUncheckedCreateWithoutChapitreSourceInput> | ChoixCreateWithoutChapitreSourceInput[] | ChoixUncheckedCreateWithoutChapitreSourceInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutChapitreSourceInput | ChoixCreateOrConnectWithoutChapitreSourceInput[]
    createMany?: ChoixCreateManyChapitreSourceInputEnvelope
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
  }

  export type ChoixUncheckedCreateNestedManyWithoutChapitreDestinationInput = {
    create?: XOR<ChoixCreateWithoutChapitreDestinationInput, ChoixUncheckedCreateWithoutChapitreDestinationInput> | ChoixCreateWithoutChapitreDestinationInput[] | ChoixUncheckedCreateWithoutChapitreDestinationInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutChapitreDestinationInput | ChoixCreateOrConnectWithoutChapitreDestinationInput[]
    createMany?: ChoixCreateManyChapitreDestinationInputEnvelope
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
  }

  export type SauvegardeUncheckedCreateNestedManyWithoutChapitreCourantInput = {
    create?: XOR<SauvegardeCreateWithoutChapitreCourantInput, SauvegardeUncheckedCreateWithoutChapitreCourantInput> | SauvegardeCreateWithoutChapitreCourantInput[] | SauvegardeUncheckedCreateWithoutChapitreCourantInput[]
    connectOrCreate?: SauvegardeCreateOrConnectWithoutChapitreCourantInput | SauvegardeCreateOrConnectWithoutChapitreCourantInput[]
    createMany?: SauvegardeCreateManyChapitreCourantInputEnvelope
    connect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HistoireUpdateOneRequiredWithoutChapitresNestedInput = {
    create?: XOR<HistoireCreateWithoutChapitresInput, HistoireUncheckedCreateWithoutChapitresInput>
    connectOrCreate?: HistoireCreateOrConnectWithoutChapitresInput
    upsert?: HistoireUpsertWithoutChapitresInput
    connect?: HistoireWhereUniqueInput
    update?: XOR<XOR<HistoireUpdateToOneWithWhereWithoutChapitresInput, HistoireUpdateWithoutChapitresInput>, HistoireUncheckedUpdateWithoutChapitresInput>
  }

  export type ChoixUpdateManyWithoutChapitreSourceNestedInput = {
    create?: XOR<ChoixCreateWithoutChapitreSourceInput, ChoixUncheckedCreateWithoutChapitreSourceInput> | ChoixCreateWithoutChapitreSourceInput[] | ChoixUncheckedCreateWithoutChapitreSourceInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutChapitreSourceInput | ChoixCreateOrConnectWithoutChapitreSourceInput[]
    upsert?: ChoixUpsertWithWhereUniqueWithoutChapitreSourceInput | ChoixUpsertWithWhereUniqueWithoutChapitreSourceInput[]
    createMany?: ChoixCreateManyChapitreSourceInputEnvelope
    set?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    disconnect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    delete?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    update?: ChoixUpdateWithWhereUniqueWithoutChapitreSourceInput | ChoixUpdateWithWhereUniqueWithoutChapitreSourceInput[]
    updateMany?: ChoixUpdateManyWithWhereWithoutChapitreSourceInput | ChoixUpdateManyWithWhereWithoutChapitreSourceInput[]
    deleteMany?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
  }

  export type ChoixUpdateManyWithoutChapitreDestinationNestedInput = {
    create?: XOR<ChoixCreateWithoutChapitreDestinationInput, ChoixUncheckedCreateWithoutChapitreDestinationInput> | ChoixCreateWithoutChapitreDestinationInput[] | ChoixUncheckedCreateWithoutChapitreDestinationInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutChapitreDestinationInput | ChoixCreateOrConnectWithoutChapitreDestinationInput[]
    upsert?: ChoixUpsertWithWhereUniqueWithoutChapitreDestinationInput | ChoixUpsertWithWhereUniqueWithoutChapitreDestinationInput[]
    createMany?: ChoixCreateManyChapitreDestinationInputEnvelope
    set?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    disconnect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    delete?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    update?: ChoixUpdateWithWhereUniqueWithoutChapitreDestinationInput | ChoixUpdateWithWhereUniqueWithoutChapitreDestinationInput[]
    updateMany?: ChoixUpdateManyWithWhereWithoutChapitreDestinationInput | ChoixUpdateManyWithWhereWithoutChapitreDestinationInput[]
    deleteMany?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
  }

  export type SauvegardeUpdateManyWithoutChapitreCourantNestedInput = {
    create?: XOR<SauvegardeCreateWithoutChapitreCourantInput, SauvegardeUncheckedCreateWithoutChapitreCourantInput> | SauvegardeCreateWithoutChapitreCourantInput[] | SauvegardeUncheckedCreateWithoutChapitreCourantInput[]
    connectOrCreate?: SauvegardeCreateOrConnectWithoutChapitreCourantInput | SauvegardeCreateOrConnectWithoutChapitreCourantInput[]
    upsert?: SauvegardeUpsertWithWhereUniqueWithoutChapitreCourantInput | SauvegardeUpsertWithWhereUniqueWithoutChapitreCourantInput[]
    createMany?: SauvegardeCreateManyChapitreCourantInputEnvelope
    set?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    disconnect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    delete?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    connect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    update?: SauvegardeUpdateWithWhereUniqueWithoutChapitreCourantInput | SauvegardeUpdateWithWhereUniqueWithoutChapitreCourantInput[]
    updateMany?: SauvegardeUpdateManyWithWhereWithoutChapitreCourantInput | SauvegardeUpdateManyWithWhereWithoutChapitreCourantInput[]
    deleteMany?: SauvegardeScalarWhereInput | SauvegardeScalarWhereInput[]
  }

  export type ChoixUncheckedUpdateManyWithoutChapitreSourceNestedInput = {
    create?: XOR<ChoixCreateWithoutChapitreSourceInput, ChoixUncheckedCreateWithoutChapitreSourceInput> | ChoixCreateWithoutChapitreSourceInput[] | ChoixUncheckedCreateWithoutChapitreSourceInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutChapitreSourceInput | ChoixCreateOrConnectWithoutChapitreSourceInput[]
    upsert?: ChoixUpsertWithWhereUniqueWithoutChapitreSourceInput | ChoixUpsertWithWhereUniqueWithoutChapitreSourceInput[]
    createMany?: ChoixCreateManyChapitreSourceInputEnvelope
    set?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    disconnect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    delete?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    update?: ChoixUpdateWithWhereUniqueWithoutChapitreSourceInput | ChoixUpdateWithWhereUniqueWithoutChapitreSourceInput[]
    updateMany?: ChoixUpdateManyWithWhereWithoutChapitreSourceInput | ChoixUpdateManyWithWhereWithoutChapitreSourceInput[]
    deleteMany?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
  }

  export type ChoixUncheckedUpdateManyWithoutChapitreDestinationNestedInput = {
    create?: XOR<ChoixCreateWithoutChapitreDestinationInput, ChoixUncheckedCreateWithoutChapitreDestinationInput> | ChoixCreateWithoutChapitreDestinationInput[] | ChoixUncheckedCreateWithoutChapitreDestinationInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutChapitreDestinationInput | ChoixCreateOrConnectWithoutChapitreDestinationInput[]
    upsert?: ChoixUpsertWithWhereUniqueWithoutChapitreDestinationInput | ChoixUpsertWithWhereUniqueWithoutChapitreDestinationInput[]
    createMany?: ChoixCreateManyChapitreDestinationInputEnvelope
    set?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    disconnect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    delete?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    update?: ChoixUpdateWithWhereUniqueWithoutChapitreDestinationInput | ChoixUpdateWithWhereUniqueWithoutChapitreDestinationInput[]
    updateMany?: ChoixUpdateManyWithWhereWithoutChapitreDestinationInput | ChoixUpdateManyWithWhereWithoutChapitreDestinationInput[]
    deleteMany?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
  }

  export type SauvegardeUncheckedUpdateManyWithoutChapitreCourantNestedInput = {
    create?: XOR<SauvegardeCreateWithoutChapitreCourantInput, SauvegardeUncheckedCreateWithoutChapitreCourantInput> | SauvegardeCreateWithoutChapitreCourantInput[] | SauvegardeUncheckedCreateWithoutChapitreCourantInput[]
    connectOrCreate?: SauvegardeCreateOrConnectWithoutChapitreCourantInput | SauvegardeCreateOrConnectWithoutChapitreCourantInput[]
    upsert?: SauvegardeUpsertWithWhereUniqueWithoutChapitreCourantInput | SauvegardeUpsertWithWhereUniqueWithoutChapitreCourantInput[]
    createMany?: SauvegardeCreateManyChapitreCourantInputEnvelope
    set?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    disconnect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    delete?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    connect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    update?: SauvegardeUpdateWithWhereUniqueWithoutChapitreCourantInput | SauvegardeUpdateWithWhereUniqueWithoutChapitreCourantInput[]
    updateMany?: SauvegardeUpdateManyWithWhereWithoutChapitreCourantInput | SauvegardeUpdateManyWithWhereWithoutChapitreCourantInput[]
    deleteMany?: SauvegardeScalarWhereInput | SauvegardeScalarWhereInput[]
  }

  export type ChapitreCreateNestedOneWithoutChoixSortantsInput = {
    create?: XOR<ChapitreCreateWithoutChoixSortantsInput, ChapitreUncheckedCreateWithoutChoixSortantsInput>
    connectOrCreate?: ChapitreCreateOrConnectWithoutChoixSortantsInput
    connect?: ChapitreWhereUniqueInput
  }

  export type ChapitreCreateNestedOneWithoutChoixEntrantsInput = {
    create?: XOR<ChapitreCreateWithoutChoixEntrantsInput, ChapitreUncheckedCreateWithoutChoixEntrantsInput>
    connectOrCreate?: ChapitreCreateOrConnectWithoutChoixEntrantsInput
    connect?: ChapitreWhereUniqueInput
  }

  export type ChapitreUpdateOneRequiredWithoutChoixSortantsNestedInput = {
    create?: XOR<ChapitreCreateWithoutChoixSortantsInput, ChapitreUncheckedCreateWithoutChoixSortantsInput>
    connectOrCreate?: ChapitreCreateOrConnectWithoutChoixSortantsInput
    upsert?: ChapitreUpsertWithoutChoixSortantsInput
    connect?: ChapitreWhereUniqueInput
    update?: XOR<XOR<ChapitreUpdateToOneWithWhereWithoutChoixSortantsInput, ChapitreUpdateWithoutChoixSortantsInput>, ChapitreUncheckedUpdateWithoutChoixSortantsInput>
  }

  export type ChapitreUpdateOneWithoutChoixEntrantsNestedInput = {
    create?: XOR<ChapitreCreateWithoutChoixEntrantsInput, ChapitreUncheckedCreateWithoutChoixEntrantsInput>
    connectOrCreate?: ChapitreCreateOrConnectWithoutChoixEntrantsInput
    upsert?: ChapitreUpsertWithoutChoixEntrantsInput
    disconnect?: ChapitreWhereInput | boolean
    delete?: ChapitreWhereInput | boolean
    connect?: ChapitreWhereUniqueInput
    update?: XOR<XOR<ChapitreUpdateToOneWithWhereWithoutChoixEntrantsInput, ChapitreUpdateWithoutChoixEntrantsInput>, ChapitreUncheckedUpdateWithoutChoixEntrantsInput>
  }

  export type HistoireCreateNestedOneWithoutObjetsInput = {
    create?: XOR<HistoireCreateWithoutObjetsInput, HistoireUncheckedCreateWithoutObjetsInput>
    connectOrCreate?: HistoireCreateOrConnectWithoutObjetsInput
    connect?: HistoireWhereUniqueInput
  }

  export type HistoireUpdateOneWithoutObjetsNestedInput = {
    create?: XOR<HistoireCreateWithoutObjetsInput, HistoireUncheckedCreateWithoutObjetsInput>
    connectOrCreate?: HistoireCreateOrConnectWithoutObjetsInput
    upsert?: HistoireUpsertWithoutObjetsInput
    disconnect?: HistoireWhereInput | boolean
    delete?: HistoireWhereInput | boolean
    connect?: HistoireWhereUniqueInput
    update?: XOR<XOR<HistoireUpdateToOneWithWhereWithoutObjetsInput, HistoireUpdateWithoutObjetsInput>, HistoireUncheckedUpdateWithoutObjetsInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type HistoireCreateNestedManyWithoutAuteurInput = {
    create?: XOR<HistoireCreateWithoutAuteurInput, HistoireUncheckedCreateWithoutAuteurInput> | HistoireCreateWithoutAuteurInput[] | HistoireUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: HistoireCreateOrConnectWithoutAuteurInput | HistoireCreateOrConnectWithoutAuteurInput[]
    createMany?: HistoireCreateManyAuteurInputEnvelope
    connect?: HistoireWhereUniqueInput | HistoireWhereUniqueInput[]
  }

  export type HistoireUncheckedCreateNestedManyWithoutAuteurInput = {
    create?: XOR<HistoireCreateWithoutAuteurInput, HistoireUncheckedCreateWithoutAuteurInput> | HistoireCreateWithoutAuteurInput[] | HistoireUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: HistoireCreateOrConnectWithoutAuteurInput | HistoireCreateOrConnectWithoutAuteurInput[]
    createMany?: HistoireCreateManyAuteurInputEnvelope
    connect?: HistoireWhereUniqueInput | HistoireWhereUniqueInput[]
  }

  export type HistoireUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<HistoireCreateWithoutAuteurInput, HistoireUncheckedCreateWithoutAuteurInput> | HistoireCreateWithoutAuteurInput[] | HistoireUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: HistoireCreateOrConnectWithoutAuteurInput | HistoireCreateOrConnectWithoutAuteurInput[]
    upsert?: HistoireUpsertWithWhereUniqueWithoutAuteurInput | HistoireUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: HistoireCreateManyAuteurInputEnvelope
    set?: HistoireWhereUniqueInput | HistoireWhereUniqueInput[]
    disconnect?: HistoireWhereUniqueInput | HistoireWhereUniqueInput[]
    delete?: HistoireWhereUniqueInput | HistoireWhereUniqueInput[]
    connect?: HistoireWhereUniqueInput | HistoireWhereUniqueInput[]
    update?: HistoireUpdateWithWhereUniqueWithoutAuteurInput | HistoireUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: HistoireUpdateManyWithWhereWithoutAuteurInput | HistoireUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: HistoireScalarWhereInput | HistoireScalarWhereInput[]
  }

  export type HistoireUncheckedUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<HistoireCreateWithoutAuteurInput, HistoireUncheckedCreateWithoutAuteurInput> | HistoireCreateWithoutAuteurInput[] | HistoireUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: HistoireCreateOrConnectWithoutAuteurInput | HistoireCreateOrConnectWithoutAuteurInput[]
    upsert?: HistoireUpsertWithWhereUniqueWithoutAuteurInput | HistoireUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: HistoireCreateManyAuteurInputEnvelope
    set?: HistoireWhereUniqueInput | HistoireWhereUniqueInput[]
    disconnect?: HistoireWhereUniqueInput | HistoireWhereUniqueInput[]
    delete?: HistoireWhereUniqueInput | HistoireWhereUniqueInput[]
    connect?: HistoireWhereUniqueInput | HistoireWhereUniqueInput[]
    update?: HistoireUpdateWithWhereUniqueWithoutAuteurInput | HistoireUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: HistoireUpdateManyWithWhereWithoutAuteurInput | HistoireUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: HistoireScalarWhereInput | HistoireScalarWhereInput[]
  }

  export type SauvegardeCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<SauvegardeCreateWithoutUtilisateurInput, SauvegardeUncheckedCreateWithoutUtilisateurInput> | SauvegardeCreateWithoutUtilisateurInput[] | SauvegardeUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: SauvegardeCreateOrConnectWithoutUtilisateurInput | SauvegardeCreateOrConnectWithoutUtilisateurInput[]
    createMany?: SauvegardeCreateManyUtilisateurInputEnvelope
    connect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
  }

  export type SauvegardeUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<SauvegardeCreateWithoutUtilisateurInput, SauvegardeUncheckedCreateWithoutUtilisateurInput> | SauvegardeCreateWithoutUtilisateurInput[] | SauvegardeUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: SauvegardeCreateOrConnectWithoutUtilisateurInput | SauvegardeCreateOrConnectWithoutUtilisateurInput[]
    createMany?: SauvegardeCreateManyUtilisateurInputEnvelope
    connect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
  }

  export type SauvegardeUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<SauvegardeCreateWithoutUtilisateurInput, SauvegardeUncheckedCreateWithoutUtilisateurInput> | SauvegardeCreateWithoutUtilisateurInput[] | SauvegardeUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: SauvegardeCreateOrConnectWithoutUtilisateurInput | SauvegardeCreateOrConnectWithoutUtilisateurInput[]
    upsert?: SauvegardeUpsertWithWhereUniqueWithoutUtilisateurInput | SauvegardeUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: SauvegardeCreateManyUtilisateurInputEnvelope
    set?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    disconnect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    delete?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    connect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    update?: SauvegardeUpdateWithWhereUniqueWithoutUtilisateurInput | SauvegardeUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: SauvegardeUpdateManyWithWhereWithoutUtilisateurInput | SauvegardeUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: SauvegardeScalarWhereInput | SauvegardeScalarWhereInput[]
  }

  export type SauvegardeUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<SauvegardeCreateWithoutUtilisateurInput, SauvegardeUncheckedCreateWithoutUtilisateurInput> | SauvegardeCreateWithoutUtilisateurInput[] | SauvegardeUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: SauvegardeCreateOrConnectWithoutUtilisateurInput | SauvegardeCreateOrConnectWithoutUtilisateurInput[]
    upsert?: SauvegardeUpsertWithWhereUniqueWithoutUtilisateurInput | SauvegardeUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: SauvegardeCreateManyUtilisateurInputEnvelope
    set?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    disconnect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    delete?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    connect?: SauvegardeWhereUniqueInput | SauvegardeWhereUniqueInput[]
    update?: SauvegardeUpdateWithWhereUniqueWithoutUtilisateurInput | SauvegardeUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: SauvegardeUpdateManyWithWhereWithoutUtilisateurInput | SauvegardeUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: SauvegardeScalarWhereInput | SauvegardeScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutSauvegardesInput = {
    create?: XOR<UtilisateurCreateWithoutSauvegardesInput, UtilisateurUncheckedCreateWithoutSauvegardesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutSauvegardesInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type HistoireCreateNestedOneWithoutSauvegardesInput = {
    create?: XOR<HistoireCreateWithoutSauvegardesInput, HistoireUncheckedCreateWithoutSauvegardesInput>
    connectOrCreate?: HistoireCreateOrConnectWithoutSauvegardesInput
    connect?: HistoireWhereUniqueInput
  }

  export type ChapitreCreateNestedOneWithoutSauvegardesInput = {
    create?: XOR<ChapitreCreateWithoutSauvegardesInput, ChapitreUncheckedCreateWithoutSauvegardesInput>
    connectOrCreate?: ChapitreCreateOrConnectWithoutSauvegardesInput
    connect?: ChapitreWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UtilisateurUpdateOneRequiredWithoutSauvegardesNestedInput = {
    create?: XOR<UtilisateurCreateWithoutSauvegardesInput, UtilisateurUncheckedCreateWithoutSauvegardesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutSauvegardesInput
    upsert?: UtilisateurUpsertWithoutSauvegardesInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutSauvegardesInput, UtilisateurUpdateWithoutSauvegardesInput>, UtilisateurUncheckedUpdateWithoutSauvegardesInput>
  }

  export type HistoireUpdateOneRequiredWithoutSauvegardesNestedInput = {
    create?: XOR<HistoireCreateWithoutSauvegardesInput, HistoireUncheckedCreateWithoutSauvegardesInput>
    connectOrCreate?: HistoireCreateOrConnectWithoutSauvegardesInput
    upsert?: HistoireUpsertWithoutSauvegardesInput
    connect?: HistoireWhereUniqueInput
    update?: XOR<XOR<HistoireUpdateToOneWithWhereWithoutSauvegardesInput, HistoireUpdateWithoutSauvegardesInput>, HistoireUncheckedUpdateWithoutSauvegardesInput>
  }

  export type ChapitreUpdateOneRequiredWithoutSauvegardesNestedInput = {
    create?: XOR<ChapitreCreateWithoutSauvegardesInput, ChapitreUncheckedCreateWithoutSauvegardesInput>
    connectOrCreate?: ChapitreCreateOrConnectWithoutSauvegardesInput
    upsert?: ChapitreUpsertWithoutSauvegardesInput
    connect?: ChapitreWhereUniqueInput
    update?: XOR<XOR<ChapitreUpdateToOneWithWhereWithoutSauvegardesInput, ChapitreUpdateWithoutSauvegardesInput>, ChapitreUncheckedUpdateWithoutSauvegardesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AdminCreateWithoutHistoiresInput = {
    id?: string
    login: string
    motDePasseHashe: string
    role?: string
    dateDerniereConnex?: Date | string | null
    dateCreation?: Date | string
  }

  export type AdminUncheckedCreateWithoutHistoiresInput = {
    id?: string
    login: string
    motDePasseHashe: string
    role?: string
    dateDerniereConnex?: Date | string | null
    dateCreation?: Date | string
  }

  export type AdminCreateOrConnectWithoutHistoiresInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutHistoiresInput, AdminUncheckedCreateWithoutHistoiresInput>
  }

  export type ChapitreCreateWithoutHistoireInput = {
    id?: string
    titreInterne?: string | null
    contenu: string
    image?: string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: number | null
    choixSortants?: ChoixCreateNestedManyWithoutChapitreSourceInput
    choixEntrants?: ChoixCreateNestedManyWithoutChapitreDestinationInput
    sauvegardes?: SauvegardeCreateNestedManyWithoutChapitreCourantInput
  }

  export type ChapitreUncheckedCreateWithoutHistoireInput = {
    id?: string
    titreInterne?: string | null
    contenu: string
    image?: string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: number | null
    choixSortants?: ChoixUncheckedCreateNestedManyWithoutChapitreSourceInput
    choixEntrants?: ChoixUncheckedCreateNestedManyWithoutChapitreDestinationInput
    sauvegardes?: SauvegardeUncheckedCreateNestedManyWithoutChapitreCourantInput
  }

  export type ChapitreCreateOrConnectWithoutHistoireInput = {
    where: ChapitreWhereUniqueInput
    create: XOR<ChapitreCreateWithoutHistoireInput, ChapitreUncheckedCreateWithoutHistoireInput>
  }

  export type ChapitreCreateManyHistoireInputEnvelope = {
    data: ChapitreCreateManyHistoireInput | ChapitreCreateManyHistoireInput[]
    skipDuplicates?: boolean
  }

  export type ObjetCreateWithoutHistoireInput = {
    id?: string
    nom: string
    description?: string | null
    type: string
    effet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ObjetUncheckedCreateWithoutHistoireInput = {
    id?: string
    nom: string
    description?: string | null
    type: string
    effet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ObjetCreateOrConnectWithoutHistoireInput = {
    where: ObjetWhereUniqueInput
    create: XOR<ObjetCreateWithoutHistoireInput, ObjetUncheckedCreateWithoutHistoireInput>
  }

  export type ObjetCreateManyHistoireInputEnvelope = {
    data: ObjetCreateManyHistoireInput | ObjetCreateManyHistoireInput[]
    skipDuplicates?: boolean
  }

  export type SauvegardeCreateWithoutHistoireInput = {
    id?: string
    pointsDeVie?: number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutSauvegardesInput
    chapitreCourant: ChapitreCreateNestedOneWithoutSauvegardesInput
  }

  export type SauvegardeUncheckedCreateWithoutHistoireInput = {
    id?: string
    utilisateurId: string
    chapitreCourantId: string
    pointsDeVie?: number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
  }

  export type SauvegardeCreateOrConnectWithoutHistoireInput = {
    where: SauvegardeWhereUniqueInput
    create: XOR<SauvegardeCreateWithoutHistoireInput, SauvegardeUncheckedCreateWithoutHistoireInput>
  }

  export type SauvegardeCreateManyHistoireInputEnvelope = {
    data: SauvegardeCreateManyHistoireInput | SauvegardeCreateManyHistoireInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutHistoiresInput = {
    update: XOR<AdminUpdateWithoutHistoiresInput, AdminUncheckedUpdateWithoutHistoiresInput>
    create: XOR<AdminCreateWithoutHistoiresInput, AdminUncheckedCreateWithoutHistoiresInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutHistoiresInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutHistoiresInput, AdminUncheckedUpdateWithoutHistoiresInput>
  }

  export type AdminUpdateWithoutHistoiresInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    motDePasseHashe?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateDerniereConnex?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutHistoiresInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    motDePasseHashe?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateDerniereConnex?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapitreUpsertWithWhereUniqueWithoutHistoireInput = {
    where: ChapitreWhereUniqueInput
    update: XOR<ChapitreUpdateWithoutHistoireInput, ChapitreUncheckedUpdateWithoutHistoireInput>
    create: XOR<ChapitreCreateWithoutHistoireInput, ChapitreUncheckedCreateWithoutHistoireInput>
  }

  export type ChapitreUpdateWithWhereUniqueWithoutHistoireInput = {
    where: ChapitreWhereUniqueInput
    data: XOR<ChapitreUpdateWithoutHistoireInput, ChapitreUncheckedUpdateWithoutHistoireInput>
  }

  export type ChapitreUpdateManyWithWhereWithoutHistoireInput = {
    where: ChapitreScalarWhereInput
    data: XOR<ChapitreUpdateManyMutationInput, ChapitreUncheckedUpdateManyWithoutHistoireInput>
  }

  export type ChapitreScalarWhereInput = {
    AND?: ChapitreScalarWhereInput | ChapitreScalarWhereInput[]
    OR?: ChapitreScalarWhereInput[]
    NOT?: ChapitreScalarWhereInput | ChapitreScalarWhereInput[]
    id?: StringFilter<"Chapitre"> | string
    histoireId?: StringFilter<"Chapitre"> | string
    titreInterne?: StringNullableFilter<"Chapitre"> | string | null
    contenu?: StringFilter<"Chapitre"> | string
    image?: StringNullableFilter<"Chapitre"> | string | null
    effetsEntree?: JsonNullableFilter<"Chapitre">
    ordre?: IntNullableFilter<"Chapitre"> | number | null
  }

  export type ObjetUpsertWithWhereUniqueWithoutHistoireInput = {
    where: ObjetWhereUniqueInput
    update: XOR<ObjetUpdateWithoutHistoireInput, ObjetUncheckedUpdateWithoutHistoireInput>
    create: XOR<ObjetCreateWithoutHistoireInput, ObjetUncheckedCreateWithoutHistoireInput>
  }

  export type ObjetUpdateWithWhereUniqueWithoutHistoireInput = {
    where: ObjetWhereUniqueInput
    data: XOR<ObjetUpdateWithoutHistoireInput, ObjetUncheckedUpdateWithoutHistoireInput>
  }

  export type ObjetUpdateManyWithWhereWithoutHistoireInput = {
    where: ObjetScalarWhereInput
    data: XOR<ObjetUpdateManyMutationInput, ObjetUncheckedUpdateManyWithoutHistoireInput>
  }

  export type ObjetScalarWhereInput = {
    AND?: ObjetScalarWhereInput | ObjetScalarWhereInput[]
    OR?: ObjetScalarWhereInput[]
    NOT?: ObjetScalarWhereInput | ObjetScalarWhereInput[]
    id?: StringFilter<"Objet"> | string
    histoireId?: StringNullableFilter<"Objet"> | string | null
    nom?: StringFilter<"Objet"> | string
    description?: StringNullableFilter<"Objet"> | string | null
    type?: StringFilter<"Objet"> | string
    effet?: JsonNullableFilter<"Objet">
  }

  export type SauvegardeUpsertWithWhereUniqueWithoutHistoireInput = {
    where: SauvegardeWhereUniqueInput
    update: XOR<SauvegardeUpdateWithoutHistoireInput, SauvegardeUncheckedUpdateWithoutHistoireInput>
    create: XOR<SauvegardeCreateWithoutHistoireInput, SauvegardeUncheckedCreateWithoutHistoireInput>
  }

  export type SauvegardeUpdateWithWhereUniqueWithoutHistoireInput = {
    where: SauvegardeWhereUniqueInput
    data: XOR<SauvegardeUpdateWithoutHistoireInput, SauvegardeUncheckedUpdateWithoutHistoireInput>
  }

  export type SauvegardeUpdateManyWithWhereWithoutHistoireInput = {
    where: SauvegardeScalarWhereInput
    data: XOR<SauvegardeUpdateManyMutationInput, SauvegardeUncheckedUpdateManyWithoutHistoireInput>
  }

  export type SauvegardeScalarWhereInput = {
    AND?: SauvegardeScalarWhereInput | SauvegardeScalarWhereInput[]
    OR?: SauvegardeScalarWhereInput[]
    NOT?: SauvegardeScalarWhereInput | SauvegardeScalarWhereInput[]
    id?: StringFilter<"Sauvegarde"> | string
    utilisateurId?: StringFilter<"Sauvegarde"> | string
    histoireId?: StringFilter<"Sauvegarde"> | string
    chapitreCourantId?: StringFilter<"Sauvegarde"> | string
    pointsDeVie?: IntFilter<"Sauvegarde"> | number
    caracteristiques?: JsonNullableFilter<"Sauvegarde">
    inventaire?: JsonNullableFilter<"Sauvegarde">
    variablesEtat?: JsonNullableFilter<"Sauvegarde">
    dateCreation?: DateTimeFilter<"Sauvegarde"> | Date | string
    dateMiseAJour?: DateTimeFilter<"Sauvegarde"> | Date | string
  }

  export type HistoireCreateWithoutChapitresInput = {
    id?: string
    titre: string
    slug: string
    resume?: string | null
    description?: string | null
    image?: string | null
    statut?: string
    pointDeDepart?: string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    auteur?: AdminCreateNestedOneWithoutHistoiresInput
    objets?: ObjetCreateNestedManyWithoutHistoireInput
    sauvegardes?: SauvegardeCreateNestedManyWithoutHistoireInput
  }

  export type HistoireUncheckedCreateWithoutChapitresInput = {
    id?: string
    titre: string
    slug: string
    resume?: string | null
    description?: string | null
    image?: string | null
    statut?: string
    pointDeDepart?: string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    auteurId?: string | null
    objets?: ObjetUncheckedCreateNestedManyWithoutHistoireInput
    sauvegardes?: SauvegardeUncheckedCreateNestedManyWithoutHistoireInput
  }

  export type HistoireCreateOrConnectWithoutChapitresInput = {
    where: HistoireWhereUniqueInput
    create: XOR<HistoireCreateWithoutChapitresInput, HistoireUncheckedCreateWithoutChapitresInput>
  }

  export type ChoixCreateWithoutChapitreSourceInput = {
    id?: string
    libelle: string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
    chapitreDestination?: ChapitreCreateNestedOneWithoutChoixEntrantsInput
  }

  export type ChoixUncheckedCreateWithoutChapitreSourceInput = {
    id?: string
    libelle: string
    destinationChapitreId?: string | null
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChoixCreateOrConnectWithoutChapitreSourceInput = {
    where: ChoixWhereUniqueInput
    create: XOR<ChoixCreateWithoutChapitreSourceInput, ChoixUncheckedCreateWithoutChapitreSourceInput>
  }

  export type ChoixCreateManyChapitreSourceInputEnvelope = {
    data: ChoixCreateManyChapitreSourceInput | ChoixCreateManyChapitreSourceInput[]
    skipDuplicates?: boolean
  }

  export type ChoixCreateWithoutChapitreDestinationInput = {
    id?: string
    libelle: string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
    chapitreSource: ChapitreCreateNestedOneWithoutChoixSortantsInput
  }

  export type ChoixUncheckedCreateWithoutChapitreDestinationInput = {
    id?: string
    chapitreSourceId: string
    libelle: string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChoixCreateOrConnectWithoutChapitreDestinationInput = {
    where: ChoixWhereUniqueInput
    create: XOR<ChoixCreateWithoutChapitreDestinationInput, ChoixUncheckedCreateWithoutChapitreDestinationInput>
  }

  export type ChoixCreateManyChapitreDestinationInputEnvelope = {
    data: ChoixCreateManyChapitreDestinationInput | ChoixCreateManyChapitreDestinationInput[]
    skipDuplicates?: boolean
  }

  export type SauvegardeCreateWithoutChapitreCourantInput = {
    id?: string
    pointsDeVie?: number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutSauvegardesInput
    histoire: HistoireCreateNestedOneWithoutSauvegardesInput
  }

  export type SauvegardeUncheckedCreateWithoutChapitreCourantInput = {
    id?: string
    utilisateurId: string
    histoireId: string
    pointsDeVie?: number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
  }

  export type SauvegardeCreateOrConnectWithoutChapitreCourantInput = {
    where: SauvegardeWhereUniqueInput
    create: XOR<SauvegardeCreateWithoutChapitreCourantInput, SauvegardeUncheckedCreateWithoutChapitreCourantInput>
  }

  export type SauvegardeCreateManyChapitreCourantInputEnvelope = {
    data: SauvegardeCreateManyChapitreCourantInput | SauvegardeCreateManyChapitreCourantInput[]
    skipDuplicates?: boolean
  }

  export type HistoireUpsertWithoutChapitresInput = {
    update: XOR<HistoireUpdateWithoutChapitresInput, HistoireUncheckedUpdateWithoutChapitresInput>
    create: XOR<HistoireCreateWithoutChapitresInput, HistoireUncheckedCreateWithoutChapitresInput>
    where?: HistoireWhereInput
  }

  export type HistoireUpdateToOneWithWhereWithoutChapitresInput = {
    where?: HistoireWhereInput
    data: XOR<HistoireUpdateWithoutChapitresInput, HistoireUncheckedUpdateWithoutChapitresInput>
  }

  export type HistoireUpdateWithoutChapitresInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    pointDeDepart?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: AdminUpdateOneWithoutHistoiresNestedInput
    objets?: ObjetUpdateManyWithoutHistoireNestedInput
    sauvegardes?: SauvegardeUpdateManyWithoutHistoireNestedInput
  }

  export type HistoireUncheckedUpdateWithoutChapitresInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    pointDeDepart?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    objets?: ObjetUncheckedUpdateManyWithoutHistoireNestedInput
    sauvegardes?: SauvegardeUncheckedUpdateManyWithoutHistoireNestedInput
  }

  export type ChoixUpsertWithWhereUniqueWithoutChapitreSourceInput = {
    where: ChoixWhereUniqueInput
    update: XOR<ChoixUpdateWithoutChapitreSourceInput, ChoixUncheckedUpdateWithoutChapitreSourceInput>
    create: XOR<ChoixCreateWithoutChapitreSourceInput, ChoixUncheckedCreateWithoutChapitreSourceInput>
  }

  export type ChoixUpdateWithWhereUniqueWithoutChapitreSourceInput = {
    where: ChoixWhereUniqueInput
    data: XOR<ChoixUpdateWithoutChapitreSourceInput, ChoixUncheckedUpdateWithoutChapitreSourceInput>
  }

  export type ChoixUpdateManyWithWhereWithoutChapitreSourceInput = {
    where: ChoixScalarWhereInput
    data: XOR<ChoixUpdateManyMutationInput, ChoixUncheckedUpdateManyWithoutChapitreSourceInput>
  }

  export type ChoixScalarWhereInput = {
    AND?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
    OR?: ChoixScalarWhereInput[]
    NOT?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
    id?: StringFilter<"Choix"> | string
    chapitreSourceId?: StringFilter<"Choix"> | string
    libelle?: StringFilter<"Choix"> | string
    destinationChapitreId?: StringNullableFilter<"Choix"> | string | null
    conditions?: JsonNullableFilter<"Choix">
    effets?: JsonNullableFilter<"Choix">
    testAssocie?: JsonNullableFilter<"Choix">
  }

  export type ChoixUpsertWithWhereUniqueWithoutChapitreDestinationInput = {
    where: ChoixWhereUniqueInput
    update: XOR<ChoixUpdateWithoutChapitreDestinationInput, ChoixUncheckedUpdateWithoutChapitreDestinationInput>
    create: XOR<ChoixCreateWithoutChapitreDestinationInput, ChoixUncheckedCreateWithoutChapitreDestinationInput>
  }

  export type ChoixUpdateWithWhereUniqueWithoutChapitreDestinationInput = {
    where: ChoixWhereUniqueInput
    data: XOR<ChoixUpdateWithoutChapitreDestinationInput, ChoixUncheckedUpdateWithoutChapitreDestinationInput>
  }

  export type ChoixUpdateManyWithWhereWithoutChapitreDestinationInput = {
    where: ChoixScalarWhereInput
    data: XOR<ChoixUpdateManyMutationInput, ChoixUncheckedUpdateManyWithoutChapitreDestinationInput>
  }

  export type SauvegardeUpsertWithWhereUniqueWithoutChapitreCourantInput = {
    where: SauvegardeWhereUniqueInput
    update: XOR<SauvegardeUpdateWithoutChapitreCourantInput, SauvegardeUncheckedUpdateWithoutChapitreCourantInput>
    create: XOR<SauvegardeCreateWithoutChapitreCourantInput, SauvegardeUncheckedCreateWithoutChapitreCourantInput>
  }

  export type SauvegardeUpdateWithWhereUniqueWithoutChapitreCourantInput = {
    where: SauvegardeWhereUniqueInput
    data: XOR<SauvegardeUpdateWithoutChapitreCourantInput, SauvegardeUncheckedUpdateWithoutChapitreCourantInput>
  }

  export type SauvegardeUpdateManyWithWhereWithoutChapitreCourantInput = {
    where: SauvegardeScalarWhereInput
    data: XOR<SauvegardeUpdateManyMutationInput, SauvegardeUncheckedUpdateManyWithoutChapitreCourantInput>
  }

  export type ChapitreCreateWithoutChoixSortantsInput = {
    id?: string
    titreInterne?: string | null
    contenu: string
    image?: string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: number | null
    histoire: HistoireCreateNestedOneWithoutChapitresInput
    choixEntrants?: ChoixCreateNestedManyWithoutChapitreDestinationInput
    sauvegardes?: SauvegardeCreateNestedManyWithoutChapitreCourantInput
  }

  export type ChapitreUncheckedCreateWithoutChoixSortantsInput = {
    id?: string
    histoireId: string
    titreInterne?: string | null
    contenu: string
    image?: string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: number | null
    choixEntrants?: ChoixUncheckedCreateNestedManyWithoutChapitreDestinationInput
    sauvegardes?: SauvegardeUncheckedCreateNestedManyWithoutChapitreCourantInput
  }

  export type ChapitreCreateOrConnectWithoutChoixSortantsInput = {
    where: ChapitreWhereUniqueInput
    create: XOR<ChapitreCreateWithoutChoixSortantsInput, ChapitreUncheckedCreateWithoutChoixSortantsInput>
  }

  export type ChapitreCreateWithoutChoixEntrantsInput = {
    id?: string
    titreInterne?: string | null
    contenu: string
    image?: string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: number | null
    histoire: HistoireCreateNestedOneWithoutChapitresInput
    choixSortants?: ChoixCreateNestedManyWithoutChapitreSourceInput
    sauvegardes?: SauvegardeCreateNestedManyWithoutChapitreCourantInput
  }

  export type ChapitreUncheckedCreateWithoutChoixEntrantsInput = {
    id?: string
    histoireId: string
    titreInterne?: string | null
    contenu: string
    image?: string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: number | null
    choixSortants?: ChoixUncheckedCreateNestedManyWithoutChapitreSourceInput
    sauvegardes?: SauvegardeUncheckedCreateNestedManyWithoutChapitreCourantInput
  }

  export type ChapitreCreateOrConnectWithoutChoixEntrantsInput = {
    where: ChapitreWhereUniqueInput
    create: XOR<ChapitreCreateWithoutChoixEntrantsInput, ChapitreUncheckedCreateWithoutChoixEntrantsInput>
  }

  export type ChapitreUpsertWithoutChoixSortantsInput = {
    update: XOR<ChapitreUpdateWithoutChoixSortantsInput, ChapitreUncheckedUpdateWithoutChoixSortantsInput>
    create: XOR<ChapitreCreateWithoutChoixSortantsInput, ChapitreUncheckedCreateWithoutChoixSortantsInput>
    where?: ChapitreWhereInput
  }

  export type ChapitreUpdateToOneWithWhereWithoutChoixSortantsInput = {
    where?: ChapitreWhereInput
    data: XOR<ChapitreUpdateWithoutChoixSortantsInput, ChapitreUncheckedUpdateWithoutChoixSortantsInput>
  }

  export type ChapitreUpdateWithoutChoixSortantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titreInterne?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    histoire?: HistoireUpdateOneRequiredWithoutChapitresNestedInput
    choixEntrants?: ChoixUpdateManyWithoutChapitreDestinationNestedInput
    sauvegardes?: SauvegardeUpdateManyWithoutChapitreCourantNestedInput
  }

  export type ChapitreUncheckedUpdateWithoutChoixSortantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    histoireId?: StringFieldUpdateOperationsInput | string
    titreInterne?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    choixEntrants?: ChoixUncheckedUpdateManyWithoutChapitreDestinationNestedInput
    sauvegardes?: SauvegardeUncheckedUpdateManyWithoutChapitreCourantNestedInput
  }

  export type ChapitreUpsertWithoutChoixEntrantsInput = {
    update: XOR<ChapitreUpdateWithoutChoixEntrantsInput, ChapitreUncheckedUpdateWithoutChoixEntrantsInput>
    create: XOR<ChapitreCreateWithoutChoixEntrantsInput, ChapitreUncheckedCreateWithoutChoixEntrantsInput>
    where?: ChapitreWhereInput
  }

  export type ChapitreUpdateToOneWithWhereWithoutChoixEntrantsInput = {
    where?: ChapitreWhereInput
    data: XOR<ChapitreUpdateWithoutChoixEntrantsInput, ChapitreUncheckedUpdateWithoutChoixEntrantsInput>
  }

  export type ChapitreUpdateWithoutChoixEntrantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titreInterne?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    histoire?: HistoireUpdateOneRequiredWithoutChapitresNestedInput
    choixSortants?: ChoixUpdateManyWithoutChapitreSourceNestedInput
    sauvegardes?: SauvegardeUpdateManyWithoutChapitreCourantNestedInput
  }

  export type ChapitreUncheckedUpdateWithoutChoixEntrantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    histoireId?: StringFieldUpdateOperationsInput | string
    titreInterne?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    choixSortants?: ChoixUncheckedUpdateManyWithoutChapitreSourceNestedInput
    sauvegardes?: SauvegardeUncheckedUpdateManyWithoutChapitreCourantNestedInput
  }

  export type HistoireCreateWithoutObjetsInput = {
    id?: string
    titre: string
    slug: string
    resume?: string | null
    description?: string | null
    image?: string | null
    statut?: string
    pointDeDepart?: string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    auteur?: AdminCreateNestedOneWithoutHistoiresInput
    chapitres?: ChapitreCreateNestedManyWithoutHistoireInput
    sauvegardes?: SauvegardeCreateNestedManyWithoutHistoireInput
  }

  export type HistoireUncheckedCreateWithoutObjetsInput = {
    id?: string
    titre: string
    slug: string
    resume?: string | null
    description?: string | null
    image?: string | null
    statut?: string
    pointDeDepart?: string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    auteurId?: string | null
    chapitres?: ChapitreUncheckedCreateNestedManyWithoutHistoireInput
    sauvegardes?: SauvegardeUncheckedCreateNestedManyWithoutHistoireInput
  }

  export type HistoireCreateOrConnectWithoutObjetsInput = {
    where: HistoireWhereUniqueInput
    create: XOR<HistoireCreateWithoutObjetsInput, HistoireUncheckedCreateWithoutObjetsInput>
  }

  export type HistoireUpsertWithoutObjetsInput = {
    update: XOR<HistoireUpdateWithoutObjetsInput, HistoireUncheckedUpdateWithoutObjetsInput>
    create: XOR<HistoireCreateWithoutObjetsInput, HistoireUncheckedCreateWithoutObjetsInput>
    where?: HistoireWhereInput
  }

  export type HistoireUpdateToOneWithWhereWithoutObjetsInput = {
    where?: HistoireWhereInput
    data: XOR<HistoireUpdateWithoutObjetsInput, HistoireUncheckedUpdateWithoutObjetsInput>
  }

  export type HistoireUpdateWithoutObjetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    pointDeDepart?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: AdminUpdateOneWithoutHistoiresNestedInput
    chapitres?: ChapitreUpdateManyWithoutHistoireNestedInput
    sauvegardes?: SauvegardeUpdateManyWithoutHistoireNestedInput
  }

  export type HistoireUncheckedUpdateWithoutObjetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    pointDeDepart?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    chapitres?: ChapitreUncheckedUpdateManyWithoutHistoireNestedInput
    sauvegardes?: SauvegardeUncheckedUpdateManyWithoutHistoireNestedInput
  }

  export type HistoireCreateWithoutAuteurInput = {
    id?: string
    titre: string
    slug: string
    resume?: string | null
    description?: string | null
    image?: string | null
    statut?: string
    pointDeDepart?: string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    chapitres?: ChapitreCreateNestedManyWithoutHistoireInput
    objets?: ObjetCreateNestedManyWithoutHistoireInput
    sauvegardes?: SauvegardeCreateNestedManyWithoutHistoireInput
  }

  export type HistoireUncheckedCreateWithoutAuteurInput = {
    id?: string
    titre: string
    slug: string
    resume?: string | null
    description?: string | null
    image?: string | null
    statut?: string
    pointDeDepart?: string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    chapitres?: ChapitreUncheckedCreateNestedManyWithoutHistoireInput
    objets?: ObjetUncheckedCreateNestedManyWithoutHistoireInput
    sauvegardes?: SauvegardeUncheckedCreateNestedManyWithoutHistoireInput
  }

  export type HistoireCreateOrConnectWithoutAuteurInput = {
    where: HistoireWhereUniqueInput
    create: XOR<HistoireCreateWithoutAuteurInput, HistoireUncheckedCreateWithoutAuteurInput>
  }

  export type HistoireCreateManyAuteurInputEnvelope = {
    data: HistoireCreateManyAuteurInput | HistoireCreateManyAuteurInput[]
    skipDuplicates?: boolean
  }

  export type HistoireUpsertWithWhereUniqueWithoutAuteurInput = {
    where: HistoireWhereUniqueInput
    update: XOR<HistoireUpdateWithoutAuteurInput, HistoireUncheckedUpdateWithoutAuteurInput>
    create: XOR<HistoireCreateWithoutAuteurInput, HistoireUncheckedCreateWithoutAuteurInput>
  }

  export type HistoireUpdateWithWhereUniqueWithoutAuteurInput = {
    where: HistoireWhereUniqueInput
    data: XOR<HistoireUpdateWithoutAuteurInput, HistoireUncheckedUpdateWithoutAuteurInput>
  }

  export type HistoireUpdateManyWithWhereWithoutAuteurInput = {
    where: HistoireScalarWhereInput
    data: XOR<HistoireUpdateManyMutationInput, HistoireUncheckedUpdateManyWithoutAuteurInput>
  }

  export type HistoireScalarWhereInput = {
    AND?: HistoireScalarWhereInput | HistoireScalarWhereInput[]
    OR?: HistoireScalarWhereInput[]
    NOT?: HistoireScalarWhereInput | HistoireScalarWhereInput[]
    id?: StringFilter<"Histoire"> | string
    titre?: StringFilter<"Histoire"> | string
    slug?: StringFilter<"Histoire"> | string
    resume?: StringNullableFilter<"Histoire"> | string | null
    description?: StringNullableFilter<"Histoire"> | string | null
    image?: StringNullableFilter<"Histoire"> | string | null
    statut?: StringFilter<"Histoire"> | string
    pointDeDepart?: StringNullableFilter<"Histoire"> | string | null
    dateCreation?: DateTimeFilter<"Histoire"> | Date | string
    dateMiseAJour?: DateTimeFilter<"Histoire"> | Date | string
    auteurId?: StringNullableFilter<"Histoire"> | string | null
  }

  export type SauvegardeCreateWithoutUtilisateurInput = {
    id?: string
    pointsDeVie?: number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    histoire: HistoireCreateNestedOneWithoutSauvegardesInput
    chapitreCourant: ChapitreCreateNestedOneWithoutSauvegardesInput
  }

  export type SauvegardeUncheckedCreateWithoutUtilisateurInput = {
    id?: string
    histoireId: string
    chapitreCourantId: string
    pointsDeVie?: number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
  }

  export type SauvegardeCreateOrConnectWithoutUtilisateurInput = {
    where: SauvegardeWhereUniqueInput
    create: XOR<SauvegardeCreateWithoutUtilisateurInput, SauvegardeUncheckedCreateWithoutUtilisateurInput>
  }

  export type SauvegardeCreateManyUtilisateurInputEnvelope = {
    data: SauvegardeCreateManyUtilisateurInput | SauvegardeCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type SauvegardeUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: SauvegardeWhereUniqueInput
    update: XOR<SauvegardeUpdateWithoutUtilisateurInput, SauvegardeUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<SauvegardeCreateWithoutUtilisateurInput, SauvegardeUncheckedCreateWithoutUtilisateurInput>
  }

  export type SauvegardeUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: SauvegardeWhereUniqueInput
    data: XOR<SauvegardeUpdateWithoutUtilisateurInput, SauvegardeUncheckedUpdateWithoutUtilisateurInput>
  }

  export type SauvegardeUpdateManyWithWhereWithoutUtilisateurInput = {
    where: SauvegardeScalarWhereInput
    data: XOR<SauvegardeUpdateManyMutationInput, SauvegardeUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type UtilisateurCreateWithoutSauvegardesInput = {
    id?: string
    pseudo: string
    email: string
    motDePasseHashe: string
    dateCreation?: Date | string
    dateDerniereConnex?: Date | string | null
  }

  export type UtilisateurUncheckedCreateWithoutSauvegardesInput = {
    id?: string
    pseudo: string
    email: string
    motDePasseHashe: string
    dateCreation?: Date | string
    dateDerniereConnex?: Date | string | null
  }

  export type UtilisateurCreateOrConnectWithoutSauvegardesInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutSauvegardesInput, UtilisateurUncheckedCreateWithoutSauvegardesInput>
  }

  export type HistoireCreateWithoutSauvegardesInput = {
    id?: string
    titre: string
    slug: string
    resume?: string | null
    description?: string | null
    image?: string | null
    statut?: string
    pointDeDepart?: string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    auteur?: AdminCreateNestedOneWithoutHistoiresInput
    chapitres?: ChapitreCreateNestedManyWithoutHistoireInput
    objets?: ObjetCreateNestedManyWithoutHistoireInput
  }

  export type HistoireUncheckedCreateWithoutSauvegardesInput = {
    id?: string
    titre: string
    slug: string
    resume?: string | null
    description?: string | null
    image?: string | null
    statut?: string
    pointDeDepart?: string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
    auteurId?: string | null
    chapitres?: ChapitreUncheckedCreateNestedManyWithoutHistoireInput
    objets?: ObjetUncheckedCreateNestedManyWithoutHistoireInput
  }

  export type HistoireCreateOrConnectWithoutSauvegardesInput = {
    where: HistoireWhereUniqueInput
    create: XOR<HistoireCreateWithoutSauvegardesInput, HistoireUncheckedCreateWithoutSauvegardesInput>
  }

  export type ChapitreCreateWithoutSauvegardesInput = {
    id?: string
    titreInterne?: string | null
    contenu: string
    image?: string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: number | null
    histoire: HistoireCreateNestedOneWithoutChapitresInput
    choixSortants?: ChoixCreateNestedManyWithoutChapitreSourceInput
    choixEntrants?: ChoixCreateNestedManyWithoutChapitreDestinationInput
  }

  export type ChapitreUncheckedCreateWithoutSauvegardesInput = {
    id?: string
    histoireId: string
    titreInterne?: string | null
    contenu: string
    image?: string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: number | null
    choixSortants?: ChoixUncheckedCreateNestedManyWithoutChapitreSourceInput
    choixEntrants?: ChoixUncheckedCreateNestedManyWithoutChapitreDestinationInput
  }

  export type ChapitreCreateOrConnectWithoutSauvegardesInput = {
    where: ChapitreWhereUniqueInput
    create: XOR<ChapitreCreateWithoutSauvegardesInput, ChapitreUncheckedCreateWithoutSauvegardesInput>
  }

  export type UtilisateurUpsertWithoutSauvegardesInput = {
    update: XOR<UtilisateurUpdateWithoutSauvegardesInput, UtilisateurUncheckedUpdateWithoutSauvegardesInput>
    create: XOR<UtilisateurCreateWithoutSauvegardesInput, UtilisateurUncheckedCreateWithoutSauvegardesInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutSauvegardesInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutSauvegardesInput, UtilisateurUncheckedUpdateWithoutSauvegardesInput>
  }

  export type UtilisateurUpdateWithoutSauvegardesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHashe?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDerniereConnex?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UtilisateurUncheckedUpdateWithoutSauvegardesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHashe?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDerniereConnex?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoireUpsertWithoutSauvegardesInput = {
    update: XOR<HistoireUpdateWithoutSauvegardesInput, HistoireUncheckedUpdateWithoutSauvegardesInput>
    create: XOR<HistoireCreateWithoutSauvegardesInput, HistoireUncheckedCreateWithoutSauvegardesInput>
    where?: HistoireWhereInput
  }

  export type HistoireUpdateToOneWithWhereWithoutSauvegardesInput = {
    where?: HistoireWhereInput
    data: XOR<HistoireUpdateWithoutSauvegardesInput, HistoireUncheckedUpdateWithoutSauvegardesInput>
  }

  export type HistoireUpdateWithoutSauvegardesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    pointDeDepart?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: AdminUpdateOneWithoutHistoiresNestedInput
    chapitres?: ChapitreUpdateManyWithoutHistoireNestedInput
    objets?: ObjetUpdateManyWithoutHistoireNestedInput
  }

  export type HistoireUncheckedUpdateWithoutSauvegardesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    pointDeDepart?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: NullableStringFieldUpdateOperationsInput | string | null
    chapitres?: ChapitreUncheckedUpdateManyWithoutHistoireNestedInput
    objets?: ObjetUncheckedUpdateManyWithoutHistoireNestedInput
  }

  export type ChapitreUpsertWithoutSauvegardesInput = {
    update: XOR<ChapitreUpdateWithoutSauvegardesInput, ChapitreUncheckedUpdateWithoutSauvegardesInput>
    create: XOR<ChapitreCreateWithoutSauvegardesInput, ChapitreUncheckedCreateWithoutSauvegardesInput>
    where?: ChapitreWhereInput
  }

  export type ChapitreUpdateToOneWithWhereWithoutSauvegardesInput = {
    where?: ChapitreWhereInput
    data: XOR<ChapitreUpdateWithoutSauvegardesInput, ChapitreUncheckedUpdateWithoutSauvegardesInput>
  }

  export type ChapitreUpdateWithoutSauvegardesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titreInterne?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    histoire?: HistoireUpdateOneRequiredWithoutChapitresNestedInput
    choixSortants?: ChoixUpdateManyWithoutChapitreSourceNestedInput
    choixEntrants?: ChoixUpdateManyWithoutChapitreDestinationNestedInput
  }

  export type ChapitreUncheckedUpdateWithoutSauvegardesInput = {
    id?: StringFieldUpdateOperationsInput | string
    histoireId?: StringFieldUpdateOperationsInput | string
    titreInterne?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    choixSortants?: ChoixUncheckedUpdateManyWithoutChapitreSourceNestedInput
    choixEntrants?: ChoixUncheckedUpdateManyWithoutChapitreDestinationNestedInput
  }

  export type ChapitreCreateManyHistoireInput = {
    id?: string
    titreInterne?: string | null
    contenu: string
    image?: string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: number | null
  }

  export type ObjetCreateManyHistoireInput = {
    id?: string
    nom: string
    description?: string | null
    type: string
    effet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SauvegardeCreateManyHistoireInput = {
    id?: string
    utilisateurId: string
    chapitreCourantId: string
    pointsDeVie?: number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
  }

  export type ChapitreUpdateWithoutHistoireInput = {
    id?: StringFieldUpdateOperationsInput | string
    titreInterne?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    choixSortants?: ChoixUpdateManyWithoutChapitreSourceNestedInput
    choixEntrants?: ChoixUpdateManyWithoutChapitreDestinationNestedInput
    sauvegardes?: SauvegardeUpdateManyWithoutChapitreCourantNestedInput
  }

  export type ChapitreUncheckedUpdateWithoutHistoireInput = {
    id?: StringFieldUpdateOperationsInput | string
    titreInterne?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    choixSortants?: ChoixUncheckedUpdateManyWithoutChapitreSourceNestedInput
    choixEntrants?: ChoixUncheckedUpdateManyWithoutChapitreDestinationNestedInput
    sauvegardes?: SauvegardeUncheckedUpdateManyWithoutChapitreCourantNestedInput
  }

  export type ChapitreUncheckedUpdateManyWithoutHistoireInput = {
    id?: StringFieldUpdateOperationsInput | string
    titreInterne?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    effetsEntree?: NullableJsonNullValueInput | InputJsonValue
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ObjetUpdateWithoutHistoireInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    effet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ObjetUncheckedUpdateWithoutHistoireInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    effet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ObjetUncheckedUpdateManyWithoutHistoireInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    effet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SauvegardeUpdateWithoutHistoireInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsDeVie?: IntFieldUpdateOperationsInput | number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutSauvegardesNestedInput
    chapitreCourant?: ChapitreUpdateOneRequiredWithoutSauvegardesNestedInput
  }

  export type SauvegardeUncheckedUpdateWithoutHistoireInput = {
    id?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    chapitreCourantId?: StringFieldUpdateOperationsInput | string
    pointsDeVie?: IntFieldUpdateOperationsInput | number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SauvegardeUncheckedUpdateManyWithoutHistoireInput = {
    id?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    chapitreCourantId?: StringFieldUpdateOperationsInput | string
    pointsDeVie?: IntFieldUpdateOperationsInput | number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoixCreateManyChapitreSourceInput = {
    id?: string
    libelle: string
    destinationChapitreId?: string | null
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChoixCreateManyChapitreDestinationInput = {
    id?: string
    chapitreSourceId: string
    libelle: string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SauvegardeCreateManyChapitreCourantInput = {
    id?: string
    utilisateurId: string
    histoireId: string
    pointsDeVie?: number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
  }

  export type ChoixUpdateWithoutChapitreSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
    chapitreDestination?: ChapitreUpdateOneWithoutChoixEntrantsNestedInput
  }

  export type ChoixUncheckedUpdateWithoutChapitreSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    destinationChapitreId?: NullableStringFieldUpdateOperationsInput | string | null
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChoixUncheckedUpdateManyWithoutChapitreSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    destinationChapitreId?: NullableStringFieldUpdateOperationsInput | string | null
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChoixUpdateWithoutChapitreDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
    chapitreSource?: ChapitreUpdateOneRequiredWithoutChoixSortantsNestedInput
  }

  export type ChoixUncheckedUpdateWithoutChapitreDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapitreSourceId?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChoixUncheckedUpdateManyWithoutChapitreDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapitreSourceId?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    effets?: NullableJsonNullValueInput | InputJsonValue
    testAssocie?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SauvegardeUpdateWithoutChapitreCourantInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsDeVie?: IntFieldUpdateOperationsInput | number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutSauvegardesNestedInput
    histoire?: HistoireUpdateOneRequiredWithoutSauvegardesNestedInput
  }

  export type SauvegardeUncheckedUpdateWithoutChapitreCourantInput = {
    id?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    histoireId?: StringFieldUpdateOperationsInput | string
    pointsDeVie?: IntFieldUpdateOperationsInput | number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SauvegardeUncheckedUpdateManyWithoutChapitreCourantInput = {
    id?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    histoireId?: StringFieldUpdateOperationsInput | string
    pointsDeVie?: IntFieldUpdateOperationsInput | number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoireCreateManyAuteurInput = {
    id?: string
    titre: string
    slug: string
    resume?: string | null
    description?: string | null
    image?: string | null
    statut?: string
    pointDeDepart?: string | null
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
  }

  export type HistoireUpdateWithoutAuteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    pointDeDepart?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    chapitres?: ChapitreUpdateManyWithoutHistoireNestedInput
    objets?: ObjetUpdateManyWithoutHistoireNestedInput
    sauvegardes?: SauvegardeUpdateManyWithoutHistoireNestedInput
  }

  export type HistoireUncheckedUpdateWithoutAuteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    pointDeDepart?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    chapitres?: ChapitreUncheckedUpdateManyWithoutHistoireNestedInput
    objets?: ObjetUncheckedUpdateManyWithoutHistoireNestedInput
    sauvegardes?: SauvegardeUncheckedUpdateManyWithoutHistoireNestedInput
  }

  export type HistoireUncheckedUpdateManyWithoutAuteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    pointDeDepart?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SauvegardeCreateManyUtilisateurInput = {
    id?: string
    histoireId: string
    chapitreCourantId: string
    pointsDeVie?: number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: Date | string
    dateMiseAJour?: Date | string
  }

  export type SauvegardeUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsDeVie?: IntFieldUpdateOperationsInput | number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    histoire?: HistoireUpdateOneRequiredWithoutSauvegardesNestedInput
    chapitreCourant?: ChapitreUpdateOneRequiredWithoutSauvegardesNestedInput
  }

  export type SauvegardeUncheckedUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    histoireId?: StringFieldUpdateOperationsInput | string
    chapitreCourantId?: StringFieldUpdateOperationsInput | string
    pointsDeVie?: IntFieldUpdateOperationsInput | number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SauvegardeUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    histoireId?: StringFieldUpdateOperationsInput | string
    chapitreCourantId?: StringFieldUpdateOperationsInput | string
    pointsDeVie?: IntFieldUpdateOperationsInput | number
    caracteristiques?: NullableJsonNullValueInput | InputJsonValue
    inventaire?: NullableJsonNullValueInput | InputJsonValue
    variablesEtat?: NullableJsonNullValueInput | InputJsonValue
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
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