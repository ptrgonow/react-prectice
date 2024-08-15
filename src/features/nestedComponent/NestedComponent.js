import Box from "./Box";
import "./NestedComponent.css"

export default function NestedComponent() {
    return (
        <div className="boxWrapper">
            <Box title="민찌님" backgroundColor="red">
                <div>어어 이게 칠드런</div> {/* <= 칠드런 속성 부분 */}
            </Box>
            <Box title="프린님" backgroundColor="blue" />
            <Box title="행수님" backgroundColor="pink" />
            <Box title="콜라님" backgroundColor="green" />
        </div>
    )
}
