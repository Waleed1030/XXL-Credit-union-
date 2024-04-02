import { Pending, Cancelled, Suspended, Processed, Active } from './index'


const Status = (props) => {

    const status = props.status
    
  return (
    <div>
        {
         status === "pending"   ?  <Pending/> :
         status === 'processed' ?  <Processed/> :
         status === 'active'    ?  <Active/> :
         status === 'suspended' ?  <Suspended/> : <Cancelled/>
        }
    </div>
  )
}

export default Status