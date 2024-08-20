import {useEffect, useState} from "react";

/**
 * deps : 의존성 배열 (element 를 기준 으로 effect 처리)
 * clearTimeout(timer) : id (number) 값을 대기 큐에서 삭제
 *
 *
 * */

function Validation() {

    const [text, setText] = useState("");
    const [isValid, setIsValid] = useState(true);

    const textChangeHandler = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {

        let timer;

        if(text.length === 0) {
            setIsValid(true);
        } else {
            timer = setTimeout(() => {
                console.log("유효성 검사 중 입니다...")
                setIsValid(text.trim().length >= 10) /* gte 10 */
            }, 500)
        }
        return () => {
            console.log("clean-Up")
            clearTimeout(timer)
        }
    }, [text]);


    return (
        <>
            <form>
                <input type="text" name="text" value={text} placeholder="10자 이상 작성하세요." onChange={textChangeHandler} />
                <button type="button">확인</button>
            </form>
            {!isValid && "불가능!"}
            {isValid && "가능!"}
        </>
    )
}

export default Validation;
