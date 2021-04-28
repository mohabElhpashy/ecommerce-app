import React from 'react'

function ShowDataWhenHover({showdata}) {
    return (
        <div>
            {showdata.map(Ele=>{
                return<div>
                    {Ele._id}
                    </div>
            })}
        </div>
    )
}

export default ShowDataWhenHover
