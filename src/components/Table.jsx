import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import { DUMMY_DATA } from '../DUMMY_DATA'
import "./Table.css"

const Table = () => {
    const [Dummy, setDummy] = useState(DUMMY_DATA);
    const [show, setShow] = useState(false);
    const [background,setBackground]=useState([]);
    function showSort() {
        setShow(!show)
    }
    function handleSelection(selected){
        if (selected === "unsort") {
            setDummy(DUMMY_DATA)
        } else if (selected === "asc") {
            const sorted = [...Dummy].sort((a, b) => {
                return a.first_name.toLowerCase() > b.first_name.toLowerCase() ? 1 : -1
            })
            setDummy(sorted)
        }else if (selected === "desc") {
            const sorted = [...Dummy].sort((a, b) => {
                return a.first_name.toLowerCase() < b.first_name.toLowerCase() ? 1 : -1
            })
            setDummy(sorted)
        }
        setShow(false)
    }
    function handleBackground(id){
        if(background.includes(id)){
            setBackground(background.filter(bid=>bid!==id))
        }else{
            setBackground((prevBg=>{
                return [...prevBg,id]
            }))
        }
    }
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className='tableHeading'>
                                <span className="heading">ID </span>
                            </div>
                        </th>
                        <th scope="col">
                            <div className='tableHeading'>
                                <span className="heading">First Name </span><BsThreeDotsVertical className='threeDots' size={20} onClick={showSort} />
                                {show && <div className='sort'>
                                    <ul className='sortLists'>
                                        <li className='sortList' onClick={e => handleSelection("unsort")}>Unsort</li>
                                        <li className='sortList' onClick={e => handleSelection("asc")}>Sort by ASC</li>
                                        <li className='sortList' onClick={e => handleSelection("desc")}>Sort by DESC</li>
                                    </ul>
                                </div>}
                            </div>
                        </th>
                        <th scope="col">
                            <div className='tableHeading'>
                                <span className="heading">Last Name </span>
                            </div>
                        </th>
                        <th scope="col">
                            <div className='tableHeading'>
                                <span className="heading">Email </span>
                            </div>
                        </th>
                        <th scope="col">
                            <div className='tableHeading'>
                                <span className="heading">Gender </span>
                            </div>
                        </th>
                        <th scope="col">
                            <div className='tableHeading'>
                                <span className="heading">Ip_Address </span>
                            </div>
                        </th>
                        <th scope="col">
                            <div className='tableHeading'>
                                <span className="heading">Airport_Code </span>
                            </div>
                        </th>
                        <th scope="col">
                            <div className='tableHeading'>
                                <span className="heading">Time </span>
                            </div>
                        </th>
                        <th scope="col">
                            <div className='tableHeading'>
                                <span className="heading">Status </span>
                            </div>
                        </th>
                        <th scope="col">
                            <div className='tableHeading'>
                                <span className="heading">Mobile </span>
                            </div>
                        </th>
                        <th scope="col">
                            <div className='tableHeading'>
                                <span className="heading">Area </span>
                            </div>
                        </th>
                        <th scope="col">
                            <div className='tableHeading'>
                                <span className="heading">Show </span>
                            </div>
                        </th>
                        <th scope="col">
                            <div className='tableHeading'>
                                <span className="heading">Edit </span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Dummy.map(data => {
                        return (
                            <tr key={data.id} onClick={e=>handleBackground(data.id)} className={`${background.find(id=>id===data.id) && "background"} rowBg`}>
                                <th scope="row">{data.id}</th>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.email}</td>
                                <td>{data.gender}</td>
                                <td>{data.ip_address}</td>
                                <td>{data['airport code']}</td>
                                <td>{data.time}</td>
                                <td className={`${data.status==="true" ? "statusGreen" : "statusRed"}`}>{data.status}</td>
                                <td>{data.mobile}</td>
                                <td>{data.area}</td>
                                <td>{data.show}</td>
                                <td>{data.edit}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table