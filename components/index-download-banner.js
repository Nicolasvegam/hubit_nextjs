import Home from './addHome.js'
import { useState} from 'react'

export default function DownloadSection(props) {
    const { device } = props;
    const [showAndroid, setShowAndroid] = useState(false);
    const [showIOS, setShowIOS] = useState(false);

    return (
      <div className="bg-white">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            Descarga Nuestra App:
          </p>
          <div className="flexi social-btns">
            <a className="app-btn blu flexi vert bg-indigo-700 p-2 hover:bg-indigo-700" onClick={() => {setShowAndroid(false);
                                                                                                        setShowIOS(!showIOS)}}>
                <i className="fa fa-apple"></i>
                <p className="font-medium">Descarga para <br/> <span className="big-txt">iPhone</span></p>
            </a>

            <a className="app-btn blu flexi vert bg-indigo-700 p-2 hover:bg-indigo-700" onClick={() => {setShowIOS(false);
                                                                                                        setShowAndroid(!showAndroid)}}>
                <i className="fa fa-play"></i>
                <p className="font-medium">Descarga para  <br/> <span className="big-txt">Android</span></p>
            </a>
            <>
            {showIOS ? (
                <Home
                ios={true}
                />
            ) : showAndroid ? (
                <Home
                ios={false}
                />
            ) : (
                null
            )}
            </>
        </div>
        </div>
      </div>
    )
  }