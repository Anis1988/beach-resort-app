import React,{ Component } from 'react';
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state= {
    services:[
      {
        icon:<FaCocktail/>,
        title:"Free Cocktails",
        info: "Eiusmod adipisicing pariatur ullamco do mollit tempor amet exercitation tempor."
      },
       {
         icon: <FaHiking/> ,
         title:"Endless Cocktails",
         info: "Eiusmod adipisicing pariatur ullamco do mollit tempor amet exercitation tempor."
       },
        {
          icon: <FaShuttleVan/> ,
          title: "Free Shuttle",
          info: "Eiusmod adipisicing pariatur ullamco do mollit tempor amet exercitation tempor."
        },
         {
           icon: <FaBeer/> ,
           title: "Strongest Beer",
           info: "Eiusmod adipisicing pariatur ullamco do mollit tempor amet exercitation tempor."
         },
    ]
  }
render(){
  return (

      <section className="services">
        <Title title = "Services"/>

          <div className="services-center">
            {this.state.services.map((item,index) => {
              return <article key={index} className="service">
                      <span>{item.icon}</span>
                      <h6>{item.title}</h6>
                      <p>{item.info}</p>

                  </article>
                })}
           </div>

      </section>

        )
    }
}
