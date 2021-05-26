import logo from './logo.svg';
import './App.css';
import Item from './Item.js'
import {useState, useCallback, useMemo} from "react";
import Btn from './Btn'
import RangeInput from './RangeInput'


function App() {
    const [items, setItems] = useState([-1,90,55,49,80]);
    const [itemsCount, setItemsCount] = useState(0);
    const [parentVal, setParentVal] = useState(4);

    //let items = it;
    function swapItems(id1) {
        setItems(items.map((i, id, arr) => {

            if (id === 0 && id1 !== 0) {
                arr[0] = id1;
            }
            if (id === id1) {
                console.log('rSwap', id);
                let t = arr[id];
                arr[id] = arr[id + 1];
                arr[id + 1] = t;
            }

            return arr[id]
        }));

        console.log('swapItems',items);
    }

    function cleanSwap() {
        setItems(items.map((i, id, arr) => {
            if (id === 0) {
                arr[0] = -1;
            }
            return arr[id]
        }));
    }

    async function sort() {

        for (let i = 1; i < items.length; i++) {

            for (let j = 1; j < items.length - i; j++) {
                console.log(items[j], items[j + 1]);
                if (items[j] > items[j + 1]) {
                    let p = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            console.log('swap ', j);
                            swapItems(j);
                            resolve(j);
                        }, 0);
                    });
                    let res = await p;
                    let pp = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            console.log('final clean ');
                            cleanSwap();
                            resolve();
                        }, 1300);
                    });
                    let r = await pp;
                    console.log(res,' swaped with',res+1)
                }
            }
        }

        let p = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('final clean ');
                cleanSwap();;
                resolve();
            }, 1200);
        });
    }

    const sliderValueChanged = useCallback(val => {
        setParentVal(val);
        let arr = [-1];
        for (let i = 0; i < val; i++) {
            arr.push(Math.round(Math.random() * 99));
        }
        setItems(arr);
    });

    const sliderProps = useMemo(
        () => ({
            min: 0,
            max: 25,
            value: parentVal,
            step: 1,
            label: "Сортировка пузырьком",
            label2: "Количество элементов",
            onChange: e => sliderValueChanged(e)
        }),
        [parentVal]
    );

    console.log('render ',items);
    return (
        <div className="App">
            <header className="App-header">
                <RangeInput {...sliderProps}/>
                <div className="array">

                    {items.map((ind, i) => {
                        return (
                            i === 0 ? "": <Item index={ind} key={i} swap={items[0]} i={i} clean={cleanSwap}/>
                        )
                    })}

                </div>
                <Btn sort={sort}/>
            </header>
        </div>
    );
}

export default App;
