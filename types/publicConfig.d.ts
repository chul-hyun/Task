/*
  eslint-disable
*/

interface Confing {
  ROOT_TAG_ID: string
}

declare var CONFIG: Confing

// T 인터페이스에서 K 키를 제외한 인터페이스 타입
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// extends And infer https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
type Payload<A> = A extends { payload: infer U } ? U : never;

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
    ? U
    : T extends Promise<infer U> ? U : T;

declare module '*.png'
declare module '*.jpg'

declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}