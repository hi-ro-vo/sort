function Btn({sort}) {
    return (
        <button
            style={styles}
            onClick={() => {
                console.log("sort");
                sort();
            }}>
            Начать сортировку
        </button>
    )
}

let styles = {
    margin: "10px",
    backgroundColor: "khaki",
    border: "none",
    borderRadius: "5px",
    color : "#282c34",
    height: "30px"

}

export default Btn;