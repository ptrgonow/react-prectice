// default export setting
import "./Box.css";
import InnerBox from "./InnerBox";


export default function Box({backgroundColor, title, children}) {

    return (<div className="box" style={{backgroundColor}}>
        <div>
            {title}
            {children}
        </div>

        <div className="innerBoxWrapper">
            <InnerBox backgroundColor="#ccc">InnerBox1</InnerBox>
            <InnerBox backgroundColor="#fff">InnerBox2</InnerBox>
        </div>
    </div>)



    /*

        props : 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 사용하는 객체

        - props.children : 자식 컴포넌트를 받아올 수 있다.
        - props.속성명 : 부모 컴포넌트에서 넘겨준 속성을 받아올 수 있다.

        {} : JSX 내부에서 자바스크립트 코드를 실행할 때 사용하는 구문 / 바인드 연산자


     */


}
