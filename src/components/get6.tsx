const get = () => {
    return(
        <div className="h-[550px] w-screen sm:px-20 sm:bg-[#F9F9F9] sm:py-12">
          <div className="h-[451] w-[1100px] box-border bg-[white]">
<div className="sm:pl-[280px] pl-20 sm:pb-4 sm:py-20 ">
    <h1 className="w-[571] h-[50px] font-[clash display] font-normal sm:text-[36px] text-[25px] leading-6 sm:leading-[50.4px] sm:text-center ">
    Join the club and get the benefits
    </h1></div>
   <div className="sm:text-center px-20 sm:px-[330px]"> <p className="sm:w-[450px] w-[360px] h-[38px] font-normal font-[satoshi] text-base sm:text-base leading-[21px] sm:leading-6">
    Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
    </p>
    
</div>
{/* <div className="flex"><div className="py-20 px-[418px]">
<p className="w-[354px] h-[56px] bg-[red] ">
    <h1 className=" py-[17px] px-[32px] opacity-[0.2px] text-base leading-[21.6px] font-[satoshi] font-normal">  your@email.com</h1>
    </p></div> <div className="py-[80px] px-[1px]">
  <div className=" box border w-[118px] h-[56px] bg-[blue] ">  <h2 className="  font-[satoshi] font-normal text-base leading-6">Sign up</h2> 
</div>
        </div>
       </div> */}
      <div className="flex items-center">
  {/* Email Input Section */}
  <div className="sm:pl-[320px] pl-20 py-20 sm:py-24 ">
   
      
      <input className="box  w-[250] sm:w-[354px] px-4 h-[56px] bg-[#F9F9F9]"
      type="text" placeholder="your@email.com" />
  </div>
  {/* Sign-Up Button Section */}
    <div className="border w-[118px] h-[56px] bg-[#2A254B] flex items-center justify-center">
      <h2 className="font-[satoshi] font-normal text-base text-white leading-6">Sign up</h2>
    
  </div></div>

    </div>

        </div>
    )
}
export default get