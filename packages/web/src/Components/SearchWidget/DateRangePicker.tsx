import { useEffect, useState } from "react";
import { getMonth } from "../../utils/constant";
import { addDays } from "date-fns";
import { DateRange, Range } from "react-date-range"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { setSearchDestinationFromDate, setSearchDestinationToDate } from "../../appStore/hotelSlice";

function DateRangePicker() {
    const [onClick, setOnClick] = useState(false);
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(addDays(new Date(), 7))
    const [dateSelectionCount, setDateSelectionCount] = useState(1);
    const [dateDragCounts,setDateDragCounts] = useState(0);
    const [state, setState]: any = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: addDays(new Date(),7),
            key: 'selection'
        }])      

return <>
        <div className="daterange-picker" onClick={ ()=> setOnClick(false)}>
        <span>{String(startDate.getDate()) + ' ' + (String(getMonth(startDate.getMonth() + 1))) + ' ' + String(startDate.getFullYear())}</span> &nbsp; - &nbsp; <span>{String(endDate.getDate()) + ' ' + (String(getMonth(endDate.getMonth() + 1))) + ' ' + String(endDate.getFullYear())}</span>
            <div className="date-ranges">
                { onClick && onClick? 
                (<DateRange
                onChange={(item: any) => {
                        setDateSelectionCount(dateSelectionCount + 1)
                        setStartDate(item.selection.startDate)
                        setEndDate(item.selection.endDate)
                        if (dateSelectionCount == 1) {
                            setOnClick(false)
                            setDateSelectionCount(1)
                            setDateDragCounts(dateDragCounts+1)
                        }
                        setState([item.selection])
                    }
                }
                moveRangeOnFirstSelection={false}
                retainEndDateOnFirstSelection= {true}
                months={1}
                ranges={state}
                direction="horizontal"
                editableDateInputs={true}
                preventSnapRefocus={true}
                calendarFocus="forward"
                minDate={startDate}
                />):(<></>)}
            </div>
        </div>
    </>;
}

export default DateRangePicker;