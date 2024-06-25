import React from 'react'
import InnerBanner from './common/InnerBanner'
import SectionTopInfo from './common/SectionTopInfo'
import { sitemapDataUSA } from './data/sitemapData'

const USAstatesData = [
    {
        id: 1,
        title: "California"
    },
    {
        id:2,
        title: "Hawaii"
    },
    {
        id:3,
        title: "Washington"
    },
    {
        id:4,
        title:"Georgia"
    },
    {
        id:5,
        title:"Kansas"
    },
    {
        id:6,
        title:"NewJersey"
    },
    {
        id:7,
        title:"NewYork"
    },
    {
        id:8,
        title:"Texas"
    },
    {
        id:9,
        title:"Florida"
    }
]

const AustraliaStatesData = [
    {
        id:1,
        title:"WesternAustralia"
    },
    {
        id:2,
        title:"Victoria"
    },
    {
        id:3,
        title:"SouthAustralia"
    },
    {
        id:4,
        title:"SouthWales"
    },
    {
        id:5,
        title:"Queensland"
    },
    {
        id:6,
        title:"Tasmania"
    }
]

const CanadaStatesData = [
    {
        id:1,
        title:"NovaScotia"
    },
    {
        id:2,
        title:"Quebec"
    },
    {
        id:3,
        title:"Ontario"
    },
    {
        id:4,
        title:"Alberta"
    },
    {
        id:5,
        title:"BritishColumbia"
    },
    {
        id:6,
        title:"Saskatchewan"
    },

]

const LocationsFront = () => {
  return (
    <>
    <InnerBanner
                title={'Locations We Serve In'}
                // info={'WTechy helps businesses thrive online with expert Digital Marketing Strategies and Web Design Solutions. We turn possibilities into reality for your Brand.'}
            />
    <section className="sectionPadding bg-gray">
                <div className="container">
                    <SectionTopInfo
                        smallTitle={'SEO services'}
                        title={'USA'}
                        text={'Services we offer in the states of USA'}
                    />
                </div>
                <div className='Wrapper' style={{display: 'flex',gap:'2rem', marginLeft: '18rem', marginTop: '4rem'}}>
                {USAstatesData && USAstatesData.map((item, index) => {
                    return (
                        <section key={item.id}>
                            <div className="container" >
                                <div className="row" >
                                    <div className="col-md-6">
                                        <a href='hello' className='title-xl fw' style={{textDecoration: 'none', fontSize: '25px'}}>{item.title}</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}
                    
                </div>

                <div className="container">
                    <SectionTopInfo
                        //smallTitle={'SEO services'}
                        title={'Australia'}
                        text={'Services we offer in the states of Australia'}
                    />
                </div>
                <div className='Wrapper' style={{display: 'flex',gap:'2rem', marginLeft: '18rem', marginTop: '4rem'}}>
                {AustraliaStatesData && AustraliaStatesData.map((item, index) => {
                    return (
                        <section key={item.id}>
                            <div className="container" >
                                <div className="row" >
                                    <div className="col-md-6">
                                        <a href='hello' className='title-xl fw' style={{textDecoration: 'none', fontSize: '25px'}}>{item.title}</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}
                    
                </div>

                <div className="container">
                    <SectionTopInfo
                        //smallTitle={'SEO services'}
                        title={'Canada'}
                        text={'Services we offer in the states of Canada'}
                    />
                </div>
                <div className='Wrapper' style={{display: 'flex',gap:'2rem', marginLeft: '18rem', marginTop: '4rem'}}>
                {CanadaStatesData && CanadaStatesData.map((item, index) => {
                    return (
                        <section key={item.id}>
                            <div className="container" >
                                <div className="row" >
                                    <div className="col-md-6">
                                        <a href='hello' className='title-xl fw' style={{textDecoration: 'none', fontSize: '25px'}}>{item.title}</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}
                    
                </div>

            </section>
    </>
  )
}

export default LocationsFront