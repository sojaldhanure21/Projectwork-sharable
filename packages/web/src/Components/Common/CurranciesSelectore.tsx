import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { currencies } from "../../utils/constant";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import closeCurrencyTag from '../../Assets/currency-close-tag.png';
import dollarSign from "../../Assets/ant-design_dollar-circle-filled.png";
import checkMark from "../../Assets/akar-icons_circle-check-fill.png"

function CurranciesSelector() {
    const [onClick, setOnclick] = useState(false)
    const [currencyInput, setCurrencyInput] = useState("");
    const [currancySelected, setCurrancySelected] = useState("USD")

    const setInputCurrecy = (e: any) => {
        setCurrencyInput(e.target.value)
        console.log("selectorcurrancy", e.target.value)
    }

    const currancySelector = (e: any) => {
        setCurrancySelected(e)
    }

    return (<>
        <div className="currency-container">
            <div className="currency-selected" onClick={() => setOnclick(true)}>
                <img src={dollarSign} alt="dollar"></img>
                <label>{currancySelected}</label>
                <FontAwesomeIcon icon={faSortDown} />
            </div>
            {onClick && onClick == true ?
                (<div className="currency-selector">
                    <div className="currency-titlebar">
                        <label>Select Currency</label>
                        <button onClick={() => setOnclick(false)}><img src={closeCurrencyTag} alt="close" /></button>
                    </div>
                    <div className="currency-searchbar">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" placeholder="Search currency" onChange={(e) => setInputCurrecy(e)} ></input>
                    </div>
                    <div className="currency-list">
                        <div className="popular-currency-selector">
                            <label>Popular Currencies</label>
                            <div className="popular-currencies">
                                <ul>
                                    {currencies.map((currancy: any) => {
                                        if (currancy.currancy == "USD") {
                                            return (<>
                                                <li onClick={(e) => currancySelector(currancy.currancy)}>
                                                    <img src={dollarSign} alt="dollar" />
                                                    <div className="popular-currency">
                                                        <label>{currancy.label}</label>
                                                        <small>{currancy.currancy} - {currancy.symbol}</small>
                                                    </div>
                                                    <small>
                                                        <img src={checkMark} alt="check" />
                                                    </small>
                                                </li>
                                            </>)
                                        }
                                    }
                                    )}
                                </ul>
                            </div>
                            {currencyInput && currencyInput.length > 0 ?
                                (<div className="other-currency-selector">
                                    <label htmlFor="">Others</label>
                                    <div className="other-currencies">
                                        <ul>
                                            {currencies.map((currancy: any) => {
                                                if (currancy.currancy == currencyInput) {
                                                    return (<>
                                                        <li onClick={(e) => currancySelector(currancy.currancy)}>
                                                            <img src={dollarSign} alt="dollar" />
                                                            <div className="other-currency">
                                                                <label>{currancy.label} </label>
                                                                <small>{currancy.currancy} - {currancy.symbol}</small>
                                                            </div>
                                                            <small>
                                                                <img src={checkMark} alt="check" />
                                                            </small>
                                                        </li>
                                                    </>)
                                                }
                                            }
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                ) : ('')}
                        </div>
                    </div>
                </div>) : ('')}
        </div>
    </>);
}
export default CurranciesSelector;