// Partial<Type>
// type User = {
//   name: string;
//   email: string;
// };

// type User2 = {
//     name?: string,
//     email?: string
// }
// type User2 = Partial<User>;

// Required<Type> - opposite of partial
// type User = {
//   name: string;
//   email: string;
// };

// type User2 = Required<User>;

// Readonly<Type>
// type User = {
//   name: string;
//   email: string;
// };

// type User2 = Readonly<User>;
// By this, you can only read the value.

// Record<Key,Value>
// interface UserInfo {
//   age: number;
// }

// type Username = "john" | "levi" | "elon" | "jack";

// const users: Record<Username, UserInfo> = {
//   john: {
//     age: 23,
//   },
//   levi: {
//     age: 23,
//   },
//   elon: {
//     age: 23,
//   },
//   jack: {
//     age: 23,
//   },
// };

// Pick<Type, Keys>
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }

// type shippingInfo = Pick<OrderInfo, "city" | "state" | "country">

// Omit<Type, Keys>
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }

// type shippingInfo = Omit<OrderInfo, "city" | "state" | "country">

// Exclude<Type, ExcludedUnion>
// type MyUnion = string | number | boolean;
// type Random = Exclude<MyUnion, boolean>

// Extract<Type, Union>
// type MyUnion = string | number | boolean;
// type Random = Extract<MyUnion, boolean>

// NonNullable<Type>
// type MyUnion = string | number | boolean | undefined | null;
// type Random = NonNullable<MyUnion>

// Parameters<Type>
// const myFunc = (a: number, b: number): number => {
//   return a + b;
// };

// type Random = Parameters<typeof myFunc>


// ReturnType
// ConstructorType
// InstanceType 

// All these utility classes are same and they are used to get the respective parameters. 
