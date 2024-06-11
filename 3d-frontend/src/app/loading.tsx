'use client'
// app/loading.jsx 
const loadingPage = ()=>{
    return (
        <div className="loader">
            <div id="loader-wrapper">
                <div id="loader">
                <img src="/img/Spinner-1s-120px.gif"/>
                </div>
                <div className="loader-section section-left">
                
                </div>
                <div className="loader-section section-right"></div>
      </div>
        </div>

    )
}

export default loadingPage