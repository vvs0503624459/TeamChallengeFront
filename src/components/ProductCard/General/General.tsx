import info from '../../../data/general.json';


const General = () => {
//     const sameInternalMemory =  [
//         {
//             "id": "abc10",
//             "memory": "128 GB"
//         },
//         {
//             "id": "abc11",
//             "memory": "256 GB"
//         },
//         {
//         "id": "abc12",
//         "memory": "512 GB"
//     }, 
//     {
//         "id": "abc13",
//         "memory": "1 T"
//     }
// ]
const internalMemory = info.map(({ sameInternalMemory }) => {
    return sameInternalMemory;
})
console.log(internalMemory)

    return (
        <div>
        <h1>Hi</h1>
           {/* <ul>
            {internalMemory.map(({}) => ( 
                <li key={}>
                    <p>{}</p>
                </li>
                 ))}
           </ul> */}

       
            {/* {info.map(({ general }) => ( 
           <ul>
            {general.map(({ color }) => ( 
                <li><p>{color}</p></li>
                 ))}
           </ul>

            ))} */}
 
            {/* {info.map(({ general }) => (  */}
            {/* <ul>
            {info.map(({ general }) => ( 
                <li>
                <button>{general.gb}</button>
                </li>
          
             ))}
            </ul> */}

 
            {/* <ul>
            {info.map(({ diagonal }) => ( //icon, right
               <li>
                    <p>{diagonal}</p>
               </li>
            ))}
 
            </ul> */}
        </div>
    )
}
export default General;