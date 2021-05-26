let stiles ={
    div :{

        opacity: "0.5"
    },
    p : {
        margin: "0px"
    }
};

function Item(props) {
    //stiles.div.opacity = 0.5+props.index/200;
    return (
        <div className={props.swap === props.i ? "swap1":props.swap === props.i - 1 ?"swap2": ""} style={{opacity: 0.5+props.index/200}} >
            <p className={props.swap === props.i ? "isAntiorbit":props.swap === props.i - 1?"isAntiorbit":""} style={stiles.p}>{props.index}</p>
        </div>
    );

}



export default Item;