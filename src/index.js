import React, {
  useState,
  useEffect
} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';



let pageData = []
let theadpreview = []


// const setPreviewHtml = html => {
// document.getElementById("preview").innerHTML = html;
// };



const AdReport = ({adid, spend, cpl, cac, adpreview}) => {
	return (

    <>

    <div className ="col-12 col-lg-6">
     <div className ="p-3">
      <div id="preview"> {adpreview} </div>
      <div id="preview2">TEST2</div>
      <h2># {adid}</h2>
      <p>Spend: {spend}</p>
			<p>CPL: {cpl}</p>
			<p>CAC: {cac}</p>



{ console.log(adpreview) }
{ adpreview = theadpreview }


     </div>
     </div>

  </>

	)



}



function AdData() {

const [data, setData] = useState(null);
  useEffect(() => {
   fetch(`https://jf-na-cdn.justfab.com/image/site/en_US/dm/acquisition/feed/justfab/topconvert/jsonTest.json`)

      .then(res => res.json())
      // .then(json => console.log(json))
      .then(setData)

      .catch(console.error);
  }, []);

  if (data) {


     pageData = data

     // console.log(pageData)

       // document.getElementById("preview").innerHTML = pageData.adpreview?.length ? pageData.adpreview.body : pageData.adpreview.message
       // document.getElementById("preview").innerHTML = "test"

    return (

      <>

      <div className ="container p-4 mx-auto">
       <h2 className ="TopAdsTitle"> TOP SPENDING ADS </h2>
       <div className ="row">


      {pageData.map(
           (adreport, i) => <AdReport key={i} adid={i+1} spend={pageData[i].spend} cpl={pageData[i].cpl} cac={pageData[i].cac}  adpreview=
         {pageData[i].adpreview}/>
      )}

    </div>
  </div>


      </>

    );
  }
  return null;
}

// function setPreviewHtml() {
//
// document.getElementById("preview").innerHTML = "test"
//
// }


function TopAdsPage() {

return <AdData/>;

}


ReactDOM.render(

  <TopAdsPage/>,
  document.getElementById("root"),

);
