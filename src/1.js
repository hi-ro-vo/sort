setTimeout(() => {
    setItems(items.map(
        i => {
            return {i: i.i, swap: 0}
        }
    ))
    {props.swap === -props.index ? "isAntiorbit":props.swap === -(props.index + 1)?"isAntiorbit":""}