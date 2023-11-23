import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // First Part
    // Middle Section
    <div className="flex flex-row justify-center min-h-screen bg-[#0C0602] items-center">
    {/*Left Division*/}
    <div className="mr-10 welcomeContent">
    <h1 className="text-5xl font-bold text-white">
      The ultimate host <br />to all your content
    </h1>
    <p className="text-2sm text-[#FB5008] my-8 w-full">
      Stream, Share, Save all kind of media to your local<br/> devices all at your own leisure.
    </p>
    {/*The buttons*/}
    <div className="flex flex-row">
      <button className="mr-4 text-[#FB5008] border border-[#FB5008] bg-[#0C0602] px-2 py-2 text-base" id="coolButton2"><b>Become a member</b></button>
      <button className="ml-4 text-[#0C0602] bg-[#FB5008] px-2 py-2 text-base" id="coolButton"><b>Become a member</b></button>
    </div>
    </div>

    {/*Right Division*/}
    <div className="flex flex-row rounded-xl bg-[#632101] h-52 px-8 items-center justify-center logoBox">
      <h1 className="text-white text-4xl"><b><span className="text-[#FB5008]">Stream</span>Hub</b></h1>
    </div>
    </div>
  );
}

export default App;
