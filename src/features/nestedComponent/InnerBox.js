import "./InnerBox.css"

export default function InnerBox({children, backgroundColor}) {
    return (<div className="inner" style={{backgroundColor}}>
        InnerBox {children}
    </div>)
}
