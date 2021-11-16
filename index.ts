/**
 * This is a class.
 */
class BaseClass {}

/**
 * @class NoDocs1
 *
 * This is another class.
 */
class NoDocs1 {}

/**
 * @extends BaseClass
 *
 * This is an other class.
 */
class NoDocs2 extends BaseClass {}

/**
 * @class NoDocs3
 * @extends BaseClass
 *
 * Some docs.
 */
class NoDocs3 extends BaseClass {}

/**
 * @class WithDocs1
 * @madeupTag
 *
 * This is a different class.
 */
class WithDocs1 {}

/**
 * @class WithDocs2
 * @extends BaseClass
 * @anotherMadeupTag
 *
 * This is a different class.
 */
class WithDocs2 extends BaseClass {}

export { BaseClass, NoDocs1, NoDocs2, NoDocs3, WithDocs1, WithDocs2 };
