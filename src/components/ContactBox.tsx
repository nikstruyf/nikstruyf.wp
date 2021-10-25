function ContactBox(props: any) {
    return (
        <>
            <div className="border border-3 rounded-3 row" style={{ margin: "2vh 5vh", overflow: "hidden", backgroundColor: "white" }}>
                <div className="p-2 d-flex justify-content-center col-4">
                    <img src={props.icon} alt="Github" style={{ width: "60px" }} />
                </div>
                <div className="col-8 d-flex align-items-center" style={{ fontSize: "22px" }}>{props.contact}</div>
            </div>
        </>
    )
}

export default ContactBox