import React, { useState } from 'react'
import { BsEnvelopeOpen, BsMap } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector'
import ButtonComponent from '../../components/button'

const data = [
  {
    icon: <BsEnvelopeOpen color="white" />,
    title: 'Chat to a Team Member',
    descr: 'Speak to our friendly team',
    contact: 'admin@gcmuk.org',
  },

  {
    icon: <BsMap color="white" />,
    title: 'Visit us',
    descr: 'Visit our main campus',
    contact: '102 Longbridge Rd, IG11 8SF',
  },

  {
    icon: <BiPhoneCall color="white" />,
    title: 'Call or WhatsApp',
    descr: 'Mon - Sat from 8am to 9pm',
    contact: '+44 7485 226 869',
  },
]
function ContactPage() {
  const [country, setCountry] = useState('United Kingdom')

  return (
    <div className="w-full flex flex-col items-center bg-gray-200">
      <div className="w-full bg-white flex flex-row">
        {/* Contact Form */}
        <div className="w-[50%]">
          <form className="p-10">
            <div className="flex flex-row justify-between items-center my-4">
              <div className="flex flex-col w-[45%]">
                <label>First Name</label>
                <input
                  type="text"
                  className=" box-border border-2 border-gray-300 rounded-lg p-2 w-full"
                  placeholder="First Name"
                />
              </div>

              <div className="flex flex-col w-[45%]">
                <label>Second Name</label>
                <input
                  type="text"
                  className=" box-border border-2 border-gray-300 rounded-lg p-2 w-full"
                  placeholder="Second Name"
                />
              </div>
            </div>

            <div className="flex flex-col w-full my-4">
              <label>Email</label>
              <input
                type="text"
                className=" box-border border-2 border-gray-300 rounded-lg p-2 w-full"
                placeholder="Your email address"
              />
            </div>

            <div className="flex flex-row w-full my-4">
              <CountryDropdown
                value={country}
                onChange={setCountry}
                className="  w-40 border-2 border-gray-300 p-2 rounded-lg"
              />

              <input
                type="text"
                className=" box-border border-2 border-gray-300 rounded-lg p-2 w-full ml-4"
                placeholder="Phone number"
              />
            </div>

            <div className="flex flex-col w-full my-4 h-40">
              <label>Messgae</label>
              <textarea className=" box-border border-2 border-gray-300 rounded-lg p-2 w-full h-40" />
            </div>

            <ButtonComponent title="Submit" />
          </form>

          <div className="w-full flex flex-row justify-around items-center my-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-46 h-36 bg-gray-200 p-4 rounded-lg flex flex-col justify-center"
              >
                <div className=" w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <div className="font-bold">{item.title}</div>
                <div className="text-sm text-gray-700">{item.descr}</div>
                <div className="font-bold">{item.contact}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Map */}
        <div className="w-[50%] bg-gray-500">Map here</div>
      </div>
    </div>
  )
}

export default ContactPage
