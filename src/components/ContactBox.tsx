function ContactBox(props: any) {
    return (
        <>
            <div className="row" style={{ margin: "2vh 5vh", overflow: "hidden", backgroundColor: "white", borderStyle: "solid",borderColor: "#28bf64", borderRadius: "50rem"}}>
                <div className="p-2 d-flex justify-content-center col-4">
                    <img src={props.icon} alt="Github" style={{ width: "60px" }} />
                </div>
                <div className="col-8 d-flex align-items-center" style={{ fontSize: "22px" }}>{props.contact}</div>
            </div>
        </>
    )
}

export default ContactBox