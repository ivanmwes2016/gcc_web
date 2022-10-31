import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useState } from 'react'
import ButtonComponent from '../../components/button';
import { client, urlFor } from '../../lib/client';


const groups = ({group}:any) => {

  const [details, setDetails] = useState(null)
  const [email, setEmail] = useState(null)
  const [name, setName] = useState(null)
  const [mobile, setMobile] = useState(null)
  const [message, setMessage] = useState(null)

   // onchange function
  const HandleSumbit = (e:any) => {
    e.preventDefault()

    const {name, email, mobile, message } = e.target.elements
    let details = {
      name: name.value,
      email: email.value,
      
    }

  
  }

  return (
    <div className="flex-col flex justify-center items-center">
      {/* Head */}
      <div className={`w-full h-[20rem] bg-gray-500 flex justify-center items-center flex-col bg-[url(${urlFor(group.image).toString()})] bg-cover bg-no-repeat`}>
      <ButtonComponent urlLink='/' title="Back Home" isOutline/>
      <div className="text-center text-5xl font-extrabold py-[5rem]">{group.title}</div>
      </div>

      {/* Main Details */}
      <div className="w-[70%] text-center text-2xl py-7">
        {group.desc.map((item:any) => 
              item.children.map((_text:any) => 
                <p>{_text.text}</p>
              ))}

        <h4 className="my-4 font-extrabold text-cyan-900">Register below to join the {group.title} group</h4>
        <form className="my-8 flex-col flex justify-center items-center">
            <input type="text" 
            className=" 
            border 
            border-gray-500 
            border-solid rounded-[10px] 
            text-xs w-[500px] h-[40px] pl-2 my-2" 
      
            id="name"
            onChange ={(e:any) => setName(e.target.value)} 
            
            />

            <input type="text" 
            className=" 
            border 
            border-gray-500 
            border-solid rounded-[10px] 
            text-xs w-[500px] h-[40px] pl-2 my-2" 
            placeholder="Email *" required={true}
            id="email"
            onChange = {(e:any) => setEmail(e.target.value)} 
            
            />

            <input type="text" 
            className=" 
            border 
            border-gray-500 
            border-solid rounded-[10px] 
            text-xs w-[500px] h-[40px] pl-2 my-2" 
            placeholder="Telephone/Mobile" required={true}
            id="mobile"
            onChange = {(e:any) => setMobile(e.target.value)} 
          
            />

          <textarea rows={4} cols={50}
            className=" 
            border 
            border-gray-500 
            border-solid rounded-[10px] 
            text-xs w-[500px] h-[200px] pl-2 my-2" 
            placeholder="Message" required={true}
            id="message"
            onChange = {(e:any) => setMessage(e.target.value)} 
            
            />

          <ButtonComponent title="REGISTER" />

        </form>


      </div>
     


      <div>


      </div>
    </div>
  )
}

export const getStaticProps = async ({params:{slug}}:any) => {
  const group = await client.fetch(

    `*[_type == "groups" && slug.current == '${slug}'][0]`
  )
console.log('group :>> ', group);

  return{
    props:{
      group,
    }
  }
 

}

export const getStaticPaths = async() => {
  const query = `
    *[_type == "groups"]{
        slug {
          current
        }
    }
  `
  const groupsSlugs = await client.fetch(query)
  const paths = groupsSlugs.map((item:any) => ({
    params:{
      slug:item.slug.current
    }
  }))

  // console.log('groupsSlugs :>> ', groupsSlugs);

  return{
    paths,
    fallback:'blocking'
  }
}



export default groups
