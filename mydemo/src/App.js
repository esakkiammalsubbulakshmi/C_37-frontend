      import logo from './logo.svg';
      import './App.css';
      import EventBind from './Component/EventBind';
      // import React from 'react';
      // import CompE from './Component/CompE'; 

      import ClassComponent from './Component/ClassComponent';
      import Fuc from './Component/Fuc';
      import  Greet from'./Component/Greet';
      import FunctionalState from './Component/FunctionalState';
      import Message from './Component/Message';
      import UE from './Component/UE';

function App() {
  return (
    <div>

        <ClassComponent/> 
       <Greet name="Jothi"  value="developer"/>
     <Fuc/>
       <FunctionalState/> 
       <Message/>
      <UE/> 
      <EventBind/>
       
      
     </div>
  );
}
export default App;

// export const UserContext = React.createContext();
// export const JobContext = React.createContext();

// const App = () => {
//   return (
//     <div className="App">
//       <UserContext.Provider value={'Jothi'}>
//         <JobContext.Provider value={'Student'}>
//           <CompE />
         
//         </JobContext.Provider>
//       </UserContext.Provider>
//     </div>
//   );
// };

// export default App;


