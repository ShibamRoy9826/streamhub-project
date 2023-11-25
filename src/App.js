import logo from './logo.svg';
import './App.css';
import StreamHubBox from './Components/StreamHubBox'
import Steps from './Components/Steps'
import QNA from './Components/QNA'
import Slider from './Components/Slider'

function App() {
  return (
    <>
    {/*// First Section
    // Middle Section*/}
    <section className="flex flex-row justify-center min-h-screen bg-[#0C0602] items-center firstSection">
    {/*Left Division*/}
    <div className="mr-10 welcomeContent">
    <h1 className="text-5xl font-bold text-white welcomeHuge">
      The ultimate host <br />to all your content
    </h1>
    <p className="text-2sm text-[#FB5008] my-8 w-full smallPara">
      Stream, Share, Save all kind of media to your local<br/> devices all at your own leisure.
    </p>
    {/*The buttons*/}
    <div className="flex flex-row buttonsContainer">
      <button className="mr-4 text-[#FB5008] border border-[#FB5008] bg-[#0C0602] px-2 py-2 text-base coolButtons" id="coolButton2"><b>Become a member</b></button>
      <button className="ml-4 text-[#0C0602] bg-[#FB5008] px-2 py-2 text-base coolButtons" id="coolButton"><b>Become a member</b></button>
    </div>
    </div>

    {/*Right Division*/}
    <StreamHubBox/>
    </section>

    {/*// Second Section*/}
    <section className="flex flex-col justify-evenly min-h-screen bg-[#FB5008] py-8 secondSection">
    
    <div className="flex flex-col justify-center px-8">
      <h1 className="text-5xl text-[#0C0602] text-center headingText m-8"><b>How to become a user</b></h1>
      <Steps firstStep="Log on to our multipurpose website" secondStep="Setup a simple user account" thirdStep="Enjoy unlimited access to our content" />
    </div>

    <div className="flex flex-col justify-center px-8">
      <h1 className="text-5xl text-[#0C0602] text-center headingText m-8"><b>How to become a member</b></h1>
      <Steps firstStep="Log on to our multipurpose website" secondStep="Setup a simple user account" thirdStep="Enjoy unlimited access to our content" />
    
    </div>
    </section>

    {/*FAQ Section*/}
    <section className="flex flex-col justify-evenly h-screen bg-[#FB5008]">
    
    <div className="">
      <h1 className="text-5xl text-[#0C0602] text-center headingText"><b>FAQs</b></h1>
      <div className="rounded-xl bg-[#FD692A] my-4 mx-8 shadow-xl">
        <QNA question="What is StreamHub?" answer="Some Random Text"/>
        <QNA question="What is StreamHub?" answer="Some Random Text"/>
        <QNA question="What is StreamHub?" answer="Some Random Text"/>
        <QNA question="What is StreamHub?" answer="Some Random Text"/>
        <QNA question="What is StreamHub?" answer="Some Random Text"/>
        <QNA question="What is StreamHub?" answer="Some Random Text"/>

      </div>
    </div>
    </section>

    <section className="flex flex-col justify-evenly h-screen bg-[#FB5008]">
    
    <div className="">
      <h1 className="text-5xl text-[#0C0602] text-center headingText"><b>Our Team</b></h1>
      <div className="rounded-xl bg-[#FD692A] my-4 mx-8 shadow-xl">
        <Slider/>
      </div>
    </div>
    </section>

    </>

  );
}

export default App;
