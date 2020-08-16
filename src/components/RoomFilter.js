import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';


const getUnique = (items,value) => {
    return [...new Set(items.map(item =>item[value]))]
}
export default function RoomFilter({rooms}) {
const context = useContext(RoomContext)
 const {handelChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
 } = context;

 let types = getUnique(rooms,"type")
 types = ["all",...types]
//  console.table(types)

 types = types.map((item,index)=> {
     return <option value={item} key={index}>{item}</option>
 })
 let people =getUnique(rooms,'capacity');
 people = people.map((item,index)=> {
 return <option key={index} value={item}>{item}</option>
 })
    return (
        <section className="filter-container">
                <Title title="search rooms"/>
                <form className="filter-form">
                    {/* select type */}
                    <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control"
                    onChange={handelChange}>
                            {types}
                    </select>
                    </div>
                    {/* {end select type} */}

                     {/* select guest*/}
                     <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control"
                    onChange={handelChange}>{people}</select>
                    </div>
                    {/* {end select guest} */}

                    {/*room price */}
                    <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input className="form-control" type="range" name="price" min={minPrice} max={maxPrice}id="price" value={price} onChange={handelChange}/>
                    </div>
                    {/*end price */}

                    {/* {room size} */}
                    <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                     <input className="size-input" type="number" name="minSize" id="size" value={minSize} onChange={handelChange} />
                     <input className="size-input" type="number" name="maxSize" id="size" value={maxSize} onChange={handelChange} />
                    </div>
                    </div>
                    {/* {end of size} */}

                    {/* {extras} */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" id="breackfast" checked={breakfast} onChange={handelChange}/>
                            <label htmlFor="breakfast">breakfast</label>
                        </div>

                        <div className="single-extra">
                            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handelChange}/>
                            <label htmlFor="pets">Pets</label>
                        </div>
                   </div>
                    {/* {end of extras} */}
                </form>
        </section>
    )
}
