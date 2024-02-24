

// import React from 'react'
// import Style from "./ProjectDetails.module.scss"
// import Image from 'next/image'

// const ProjectDetails = ({ data }) => {
//     return (
//         <section className={Style.profileListing}>

//             <div className="wrap">

//                 <div className="row ">

//                     <div className='col-12 col-lg-4'>

//                         <div className={`${Style.profile_info} position-sticky`}>

//                             <h2 className={Style.name}>

//                                 {data?.profile.name}
//                             </h2>

//                             <span className={Style.designation}>
//                                 {data?.profile.designation}
//                             </span>

//                             <p className={Style.description}>
//                                 {data?.profile.description}
//                             </p>

//                             <div className={`${Style.service} row row-cols-2`}>

//                                 <div className={Style.servicelist}>

//                                     {data?.services?.length > 0 &&

//                                         <>
//                                             <span className={Style.service_type}>
//                                                 Services -
//                                             </span>

//                                             <ul>
//                                                 {data?.services?.map((data, i) => {
//                                                     return (
//                                                         <li key={i}>{data?.service}</li>
//                                                     )
//                                                 })}

//                                             </ul>

//                                         </>

//                                     }

//                                 </div>

//                                 <div className={Style.totalservice}>

//                                     <span>
//                                         ({data?.services?.length})
//                                     </span>

//                                 </div>

//                             </div>

//                             <div className={Style.modal_btn}>
//                                 You want a similar project? Let's talk!
//                             </div>

//                         </div>

//                     </div>

//                     <div className='col-12 col-lg-8'>

//                         <div className={Style.image_case}>

//                             {
//                                 data?.image_area?.map((data, i) => {
//                                     return (
//                                         <>

//                                             {data?.type == "image" ?

//                                                 <figure>
//                                                     <Image alt="" src={data?.image?.url} height={100} width={100} sizes="(max-width:768px) 50vw, 50vw "></Image>
//                                                 </figure>

//                                                 :

//                                                 data?.type === "twoimage" ?

//                                                     <div className='row row-cols-2 '>

//                                                         <div className='pe-0'>
//                                                             <figure>
//                                                                 <Image alt="" src={data?.two_image?.image1?.url} height={100} width={100} sizes="(max-width:768px) 50vw, 50vw "></Image>
//                                                             </figure>
//                                                         </div>

//                                                         <div className='ps-0'>
//                                                             <figure>
//                                                                 <Image alt="" src={data?.two_image?.image2?.url} height={100} width={100} sizes="(max-width:768px) 50vw, 50vw "></Image>
//                                                             </figure>
//                                                         </div>
//                                                     </div>

//                                                     :

//                                                     data?.type === "content" ?

//                                                         <div className={Style.content_area}>

//                                                             <div className="row">
//                                                                 <div className='col-12 col-lg-6'>

//                                                                 </div>

//                                                                 <div className='col-12 col-lg-6'>

//                                                                     <div className={Style.content}>

//                                                                         <span>
//                                                                            {data?.content_area?.title}
//                                                                         </span>

//                                                                         <p>
//                                                                          {data?.content_area?.description}
 
//                                                                         </p>

//                                                                     </div>

//                                                                 </div>

//                                                             </div>

//                                                         </div>

//                                                         : ""

//                                             }


//                                         </>
//                                     )
//                                 })
//                             }






//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </section>
//     )
// }

// export default ProjectDetails