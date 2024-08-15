import {useState} from "react";
import "./Counter.css"

/*

        Hook 의 기본

    useState : 상태 관리
    useEffect : 사이드 이펙트
    useContext : 컨텍스트 관리
    useReducer : 리듀서 사용
    useMemo : 메모
    useCallback : 콜백 메모
    useRef : ref 사용
    useImperativeHandle : ref 사용
    useLayoutEffect : useEffect 와 비슷하지만 동기적으로 처리
    useDebugValue : 디버깅에 사용


    const [getter(현재 데이터), setter(변경될 데이터)] = useState(시작 타입)


*/

export default function Counter() {

    const [count, setCount] = useState(0)

    const increase = () => {
        setCount((count) => {
            if ( count >= 10 ) {
                return count;
            }
            return ++count;
        });
    };

    const decrease = () => {
        setCount(count - 1);
    };

    const multiply = () => {
        if ( count === 0 ) {
            alert("0 으로 곱할 수 없습니다.")
        }
        setCount(count * 2);
    };
    const divide = () => {
        if ( count === 0 ) {
            alert("0 에서 나눌 수 없습니다.")
        }
        setCount(count / 2);
    };

    const reset = () => {
        setCount(0)
    };


    return (
            <div className="counter">
                <button onClick={increase}>+</button>
                <span>{count}</span>
                <button onClick={decrease}>-</button>
                <button onClick={multiply}>x</button>
                <button onClick={divide}>/</button>
                <button onClick={reset}>R</button>
            </div>
    )

}

