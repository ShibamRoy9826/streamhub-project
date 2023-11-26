import React from 'react'

const Steps=(props)=>{
        return(
                <div className="flex flex-row justify-evenly items-center w-full h-30 ChangeToCol">
        <div className="flex flex-col items-center border-2 border-[#0C0602] w-full mx-6  my-4 p-4 rounded-md borderedStep">
          <p className="text-center  m-2">{props.firstStep}</p>
          <svg width="6rem" height="6rem" viewBox="0 0 225 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.62141 97.1784H162.434C164.034 97.181 165.573 97.7905 166.741 98.8838C167.909 99.9771 168.619 101.473 168.727 103.069C168.834 104.665 168.333 106.243 167.323 107.483C166.313 108.724 164.87 109.535 163.285 109.753L162.434 109.812H6.62983C5.01799 109.828 3.46087 109.228 2.27731 108.134C1.09376 107.039 0.373316 105.534 0.263521 103.926C0.153726 102.318 0.662882 100.728 1.68673 99.4833C2.71058 98.2383 4.17165 97.4318 5.77075 97.229L6.62141 97.1784ZM137.167 0.321655C145.303 0.321655 151.907 6.92476 151.907 15.0607V78.2282C151.907 82.1372 150.354 85.8862 147.59 88.6503C144.825 91.4144 141.077 92.9673 137.167 92.9673H31.8884C27.9793 92.9673 24.2304 91.4144 21.4663 88.6503C18.7022 85.8862 17.1493 82.1372 17.1493 78.2282V15.0607C17.1493 6.92476 23.7524 0.321655 31.8884 0.321655H137.167ZM137.167 12.9551H31.8884C31.33 12.9551 30.7944 13.177 30.3995 13.5719C30.0046 13.9667 29.7828 14.5023 29.7828 15.0607V78.2282C29.7828 79.3905 30.7261 80.3338 31.8884 80.3338H137.167C137.726 80.3338 138.262 80.1119 138.656 79.7171C139.051 79.3222 139.273 78.7866 139.273 78.2282V15.0607C139.273 14.5023 139.051 13.9667 138.656 13.5719C138.262 13.177 137.726 12.9551 137.167 12.9551Z" fill="black"/>
<path d="M200.774 100.713C200.774 99.348 201.881 98.2412 203.246 98.2412C204.611 98.2412 205.718 99.348 205.718 100.713C205.718 102.079 204.611 103.185 203.246 103.185C201.881 103.185 200.774 102.079 200.774 100.713Z" fill="black"/>
<path d="M219.972 42.9075H186.52C185.252 42.9075 184.037 43.411 183.141 44.3072C182.244 45.2034 181.741 46.4189 181.741 47.6864V105.033C181.741 106.301 182.244 107.516 183.141 108.413C184.037 109.309 185.252 109.812 186.52 109.812H219.972C221.24 109.812 222.455 109.309 223.351 108.413C224.248 107.516 224.751 106.301 224.751 105.033V47.6864C224.751 46.4189 224.248 45.2034 223.351 44.3072C222.455 43.411 221.24 42.9075 219.972 42.9075ZM186.52 47.6864H219.972V90.6966H186.52V47.6864ZM186.52 105.033V95.4755H219.972V105.033H186.52Z" fill="black"/>
</svg>
        </div>
        <div className="flex flex-col items-center border-2 border-[#0C0602] w-full mx-6  my-4  p-4  rounded-md borderedStep">
          <p className="text-center m-2">{props.secondStep}</p>
          <svg width="6rem" height="6rem" viewBox="0 0 78 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M67.5376 41.3919C66.6281 40.8563 65.5558 40.459 64.3291 40.1925L63.9875 36.3224L63.9473 35.8663H63.4895H58.3608H57.903L57.8627 36.3224L57.5211 40.1925C56.294 40.4591 55.2215 40.8566 54.3118 41.3925C53.4374 41.9075 52.6565 42.5332 51.9703 43.2686L48.6432 41.6214L48.2298 41.4167L47.9926 41.8123L45.3667 46.1922L45.1325 46.5829L45.4997 46.8524L48.5619 49.0999C48.1888 50.2899 47.9983 51.4279 47.9983 52.5115C47.9983 53.5953 48.1889 54.7349 48.5621 55.9279L45.4997 58.1756L45.1383 58.4408L45.3626 58.8289L47.927 63.2652L48.1629 63.6734L48.5842 63.4618L51.9682 61.7628C52.6538 62.5125 53.4341 63.15 54.3083 63.6745C55.2189 64.2209 56.2927 64.6241 57.5211 64.8918L57.8627 68.7621L57.903 69.2181L67.2847 41.8233M67.5376 41.3919C67.5379 41.3921 67.5382 41.3923 67.5385 41.3925L67.2847 41.8233M67.5376 41.3919C67.5375 41.3919 67.5374 41.3918 67.5373 41.3918L67.2847 41.8233M67.5376 41.3919C68.4127 41.9043 69.1941 42.5301 69.8806 43.2683M67.2847 41.8233C68.225 42.3737 69.0507 43.061 69.7618 43.885M69.8806 43.2683L69.54 43.4369L69.7618 43.885M69.8806 43.2683C69.9687 43.3631 70.0553 43.4598 70.1404 43.5583L69.7618 43.885M69.8806 43.2683L69.7618 43.885M4.01244 101.762L4.01281 101.762C5.72408 103.47 7.80524 104.329 10.2281 104.329H55.2066C57.6327 104.329 59.7141 103.47 61.4223 101.762L61.4227 101.762C63.1303 100.05 63.9895 97.9691 63.9895 95.5462V78.5806V78.0806H63.4895H58.3608H57.8608V78.5806V85.3787H7.57394V19.7058H57.8608V26.5039V27.0039H58.3608H63.4895H63.9895V26.5039V9.5382C63.9895 7.11214 63.1304 5.0307 61.4223 3.32256L61.4219 3.32218C59.7106 1.61454 57.6295 0.755371 55.2066 0.755371H10.2281C7.80202 0.755371 5.72058 1.61441 4.01244 3.32256L4.01206 3.32293C2.30442 5.03419 1.44525 7.11536 1.44525 9.5382V95.5462C1.44525 97.9723 2.30429 100.054 4.01244 101.762ZM73.2884 49.0999C73.252 48.9838 73.2138 48.8671 73.1739 48.75L72.7006 48.9111L72.9964 49.3142L73.2884 49.0999ZM73.2886 55.9231L72.9964 55.7087L72.7006 56.1118L73.1738 56.2733C73.2138 56.1561 73.2521 56.0394 73.2886 55.9231ZM69.8827 61.7632C69.9713 61.666 70.0583 61.5669 70.1437 61.4659L69.7618 61.143L69.5375 61.5899L69.8827 61.7632ZM67.5414 63.6749C67.5416 63.6748 67.5417 63.6746 67.5419 63.6745L67.2847 63.2458L67.5408 63.6752C67.541 63.6751 67.5412 63.675 67.5414 63.6749ZM64.3292 64.8918L64.3619 64.5206L63.8639 64.4767L63.9578 64.9678C64.0831 64.9438 64.2069 64.9185 64.3292 64.8918ZM7.57394 95.5462V91.5074H57.8608V95.5462C57.8608 96.1761 57.6036 96.7775 57.0229 97.3618C56.4384 97.943 55.8367 98.2004 55.2066 98.2004H10.2281C9.59806 98.2004 8.99646 97.9431 8.41201 97.3619C7.83114 96.7776 7.57394 96.1761 7.57394 95.5462ZM66.1824 57.7994C64.7617 59.2201 63.0202 59.9301 60.9251 59.9301C58.8301 59.9301 57.0886 59.2201 55.6679 57.7994C54.2472 56.3787 53.5372 54.6373 53.5372 52.5422C53.5372 50.4472 54.2472 48.7057 55.6679 47.285C57.0886 45.8643 58.8301 45.1543 60.9251 45.1543C63.0202 45.1543 64.7617 45.8643 66.1824 47.285C67.6031 48.7057 68.313 50.4472 68.313 52.5422C68.313 54.6373 67.6031 56.3787 66.1824 57.7994ZM57.8608 9.5382V13.5771H7.57394V9.5382C7.57394 8.90824 7.83121 8.30668 8.41224 7.72228C8.99661 7.1413 9.59815 6.88406 10.2281 6.88406H55.2066C55.8366 6.88406 56.4382 7.14135 57.0227 7.72246C57.6036 8.30681 57.8608 8.9083 57.8608 9.5382Z" fill="black" stroke="black"/>
</svg>


        </div>
        <div className="flex flex-col items-center border-2 border-[#0C0602] w-full mx-6  my-4  p-4  rounded-md borderedStep">
          <p className="text-center m-2">{props.thirdStep}</p>
          <svg width="6rem" height="6rem" viewBox="0 0 210 103" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M84.7904 0.321655C71.1993 0.321655 55.483 8.62294 40.623 18.5299C25.7626 28.4369 12.0622 40.1758 4.03853 48.1999L0.94751 51.2885L4.03804 54.3771C12.0617 62.4008 25.7625 74.1406 40.6225 84.0471C55.4835 93.9541 71.1993 102.255 84.7904 102.255H86.601L87.879 100.975C92.0748 96.7801 95.542 91.9373 98.3102 86.6707C88.3741 86.1474 80.3913 81.7633 75.1242 75.4434C69.5062 68.7007 66.8307 59.9645 66.8307 51.2885C66.8307 42.612 69.5062 33.8758 75.1242 27.1341C80.3908 20.8142 88.3741 16.4296 98.3107 15.9068C95.542 10.6403 92.0748 5.79695 87.8795 1.60214L86.6 0.321655H84.7904ZM100.323 24.5916C91.7802 24.5916 85.9263 27.8195 81.8363 32.7278C77.7463 37.6352 75.5678 44.4323 75.5678 51.2885C75.5678 58.1448 77.7463 64.9413 81.8363 69.8492C85.9263 74.7566 91.7802 77.9854 100.323 77.9854H102.119C103.038 75.4118 103.816 72.7896 104.447 70.1307C103.234 70.7909 101.863 71.1899 100.323 71.1899C95.8177 71.1899 92.7267 67.8309 90.9244 64.2254C89.1211 60.6198 88.1882 56.1677 88.1882 51.2885C88.1882 46.4088 89.1211 41.9572 90.9244 38.3517C92.7267 34.7452 95.8172 31.3872 100.323 31.3872C101.863 31.3872 103.233 31.7862 104.447 32.4463C103.816 29.7872 103.039 27.165 102.119 24.5916H100.323ZM185.753 27.9894V43.5221H139.155V59.0549H185.753V74.5877L209.052 51.2885L185.753 27.9894ZM104.206 35.7558C103.176 35.7558 102.189 36.574 101.461 38.0305C100.732 39.487 100.323 41.4624 100.323 43.5221C100.323 45.5819 100.732 47.5573 101.461 49.0138C102.189 50.4703 103.176 51.2885 104.206 51.2885C105.236 51.2885 106.224 50.4703 106.952 49.0138C107.68 47.5573 108.09 45.5819 108.09 43.5221C108.09 41.4624 107.68 39.487 106.952 38.0305C106.224 36.574 105.236 35.7558 104.206 35.7558Z" fill="black"/>
</svg>

        </div>
      </div>
        )
}

export default Steps;
