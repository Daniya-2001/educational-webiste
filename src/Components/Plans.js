import React from 'react'
import './Plans.css'

function Plans() {
    const pricingData=[
        {
            title:'Regular member',
            price:'$8',
            color:"gray",
            features:['Access to all content',
                'No ads',
                'Downloadable content',
                'Access to all episodes',
                'Access to all seasons'
            ],
            duration:'/month'
           
        },
        {
            title:'Premium member',
            price:'$15',
            color:'#6f55f2',
            features:['Access to all content','Access to exclusive content',
                'No ads',
                'Downloadable content',
                'Access to all episodes',
                
                
            ],
            duration:'/month'
            
        },
        {
            title:'Business member',
            price:'$25',
            color:"gray",
            features:['Access to all content','Access to exclusive content','Access to business content'
                ,'No ads',
                'Downloadable content',
            ],
            duration:'/month'
        },
        
    ]
  return (
    <div className='container'> 
   <div className='pricing_top'>
    <h2 className='secion_title'>Premium pricing plan</h2>
    <p>Unlock the elite tech service with pur Premium plan and soar ahead of the  compelition</p>


   </div>
   <div className='pricing_wrapper'>
    {
        pricingData.map((pricingItem,index)=>(
            <div className='pricing_item' key={index}>
                <div className='pricing_card-top'  style={{background:pricingItem.color}}>
                   <h2 className='section_title'>{pricingItem.title}</h2>
                   <h2 className='pricing_section_title'>{pricingItem.price}
                    <span>{pricingItem.duration}</span>
                   </h2>

                </div>
                <div className='services'>
                    <ul>
                        {pricingItem.features.map((feature,index)=>(
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <button className='register-button'>Join</button>

                </div>


            </div>
        ))}
    



   </div>

    </div>
  )
}

export default Plans