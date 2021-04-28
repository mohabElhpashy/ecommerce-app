    import React,{Fragment,useState} from 'react'
    function Filter({count,filter}) {
        const [filterSize,setfilterSize]=useState('')
        const Filter=(e)=>{
            const size=e.target.value;
            setfilterSize(size)
            filter(size)
                }
        return (
            <Fragment>
                <div className='Filter'> 
                    <div>{count}{" "}Orders</div>
                    <div className='Filter_Size'>
                    Filter{" "}

                    <select value={filterSize} onChange={Filter}>
                        <option value=''>All</option>
                        <option value='XS'>XS</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                        <option value='XXL'>XXL</option>

                        </select>
                        </div>
                </div>
            </Fragment>
        )
    }

    export default Filter
