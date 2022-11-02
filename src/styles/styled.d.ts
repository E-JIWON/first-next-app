import "styled-components"; 

// theme파일에 들어갈 변수들의 타입을 정하는 부분
// theme.ts에서 사용할 변수들의 타입을 지정해준다.
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      orange: string;
    };
  }
}