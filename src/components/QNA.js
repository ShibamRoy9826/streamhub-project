import React from 'react'

const QNA=(props)=>{
	return(
	<>
		<div className="flex flex-row items-center justify-center shadow-md">
        <h2 className="m-2 text-center"><b>{props.question}</b></h2>
        <button className="text-black bg-[#FB5008] rounded-lg w-12 h-full"><b>+</b></button>
        </div>

        <div className="bg-white hidden">
        <p className="m-2 text-center">{props.answer}</p>
        </div>
       </>

	)
}

export default QNA;