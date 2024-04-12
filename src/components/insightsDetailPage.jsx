import React from 'react'

const InsightsDetailPage = ({ InsightsCardData }) => {

    return (
        <div>
            
            <section className='innerBanner text-center'>
                <div className="container position-relative">
                    <div className="col-lg-7 mx-auto ">
                        <h1 className='title-xl fw-bold'>{InsightsCardData.title}</h1>
                        <p className=''>{InsightsCardData.shortInfo}</p>
                    </div>
                </div>
            </section>

            
            <div className={`sectionTopInfo container col-md-10 align-items-center`} >
                <h2 className='title-xl fw-bold py-4'>{InsightsCardData.title}</h2>
                <img src={InsightsCardData.imageUrl} alt={InsightsCardData.title} />
                <div className='py-4' dangerouslySetInnerHTML={{ __html: InsightsCardData.content }} />
            </div>

        </div>
    )
}

export default InsightsDetailPage