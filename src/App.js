import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { AiOutlineCheck } from 'react-icons/ai';
import { HiX } from "react-icons/hi";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');
</style>



const data = [
  {
    subscription: 'FREE',

    Price: '$0/month',

    user: 'Single User',
    Storage: '5GB Storage',
    Capacity: 'Unlimited Public Projects',
    Access: 'Community Access',
    Projects: 'Unlimited Private Projects',
    Support: 'Dedicated Phone Support',
    Domain: 'Free Subdomain',
    Status: 'Monthly Status Reports',


  },
  {
    subscription: 'PLUS',

    Price: '$9/month',

    user: '5 User',
    Storage: '50GB Storage',
    Capacity: 'Unlimited Public Projects',
    Access: 'Community Access',
    Projects: 'Unlimited Private Projects',
    Support: 'Dedicated Phone Support',
    Domain: 'Free Subdomain',
    Status: 'Monthly Status Reports',


  },
  {
    subscription: 'PRO',

    Price: '$49/month',

    user: 'Unlimited Users',
    Storage: '150GB Storage',
    Capacity: 'Unlimited Public Projects',
    Access: 'Community Access',
    Projects: 'Unlimited Private Projects',
    Support: 'Dedicated Phone Support',
    Domain: ' Unlimited Free Subdomain',
    Status: 'Monthly Status Reports',


  }
]


function App() {
  return (
    <div className="App">
      {data.map((item,idx) => (
  <Container 
  Key={idx}
subscription={item.subscription}
price={item.Price}
user={item.user}
Storage={item.Storage}
Capacity={item.Capacity}
Access={item.Access}
Projects={item.Projects}
Support={item.Support}
Domain={item.Domain}
Status={item.Status}
      
  />
      )
      )}
    
    </div>
  );
}

function Container(props) {
  return(
    <div className="card">
      <p>{props.subscription}</p> 
      <div className="price">
      <p style={{fontWeight: "Bold"}} >{props.price}</p> 
      </div>
      <hr />
      <br />
      <div class='break'>
      <p>  
      {props.subscription === 'PRO' && <AiOutlineCheck />}
      {props.subscription === 'PLUS' && <AiOutlineCheck />}
      {props.subscription === 'FREE' && <AiOutlineCheck />}
        {props.user}
      </p> 
      <p>
      {props.subscription === 'PRO' && <AiOutlineCheck />}
      {props.subscription === 'PLUS' && <AiOutlineCheck />}
      {props.subscription === 'FREE' && <AiOutlineCheck />}
        {props.Storage}</p> 
      <p>
      {props.subscription === 'PRO' && <AiOutlineCheck />}
      {props.subscription === 'PLUS' && <AiOutlineCheck />}
      {props.subscription === 'FREE' && <AiOutlineCheck />}
        {props.Capacity}</p> 
      <p>
      {props.subscription === 'PRO' && <AiOutlineCheck />}
      {props.subscription === 'PLUS' && <AiOutlineCheck />}
      {props.subscription === 'FREE' && <AiOutlineCheck />}
        {props.Access}</p> 
      <p style={{ color: props.subscription === 'FREE' ? 'grey' : 'black',fontWeight: props.subscription === 'FREE' ? 'light' : 'bold'}}>
      {props.subscription === 'PRO' && <AiOutlineCheck />}
      {props.subscription === 'PLUS' && <AiOutlineCheck />}
      {props.subscription === 'FREE' && <HiX />}

      {props.Projects}
      </p> 
      <p style={{ color: props.subscription === 'FREE'? 'grey' : 'black',fontWeight: props.subscription === 'FREE' ? 'light' : 'bold' }}>
      {props.subscription === 'PRO' && <AiOutlineCheck />}
      {props.subscription === 'PLUS' && <AiOutlineCheck />}
      {props.subscription === 'FREE' && <HiX />}
        
        {props.Support}</p> 
      <p style={{ color: props.subscription === 'FREE' ? 'grey' : 'black',fontWeight: props.subscription === 'FREE' ? 'light' : 'bold' }} >
        
      {props.subscription === 'PRO' && <AiOutlineCheck />}
      {props.subscription === 'PLUS' && <AiOutlineCheck />}
      {props.subscription === 'FREE' && <HiX />}
        
        {props.Domain}</p> 
      <p style={{ color: props.subscription === 'FREE' || props.subscription === 'PLUS' ? 'grey' : 'black',fontWeight: props.subscription === 'FREE'||props.subscription ==='PLUS' ? 'light' : 'bold' }} >
        
      {props.subscription === 'PRO' && <AiOutlineCheck />}
      {props.subscription === 'PLUS' && <HiX />}
      {props.subscription === 'FREE' && <HiX />}
        
        
        {props.Status}</p> 

      <button class="btn">Button</button>
      


      </div>

    </div>
  )
}

export default App;
