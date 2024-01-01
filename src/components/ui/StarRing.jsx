import React from 'react'

const StarRing = ({ color = 'fill-white' }) => {
    return (
        <div className={`${color}`}>
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 423.55 365.36">
                <g id="Layer_1-2" data-name="Layer 1">
                    <g id="_27" data-name="27">
                        <g>
                            <path className="cls-1" d="m421.51,181.33v-.33c-2.84.23-5.72.35-8.62.35h-99.31c-58.48,0-105.89-47.41-105.89-105.89V15.48c0-5.14.37-10.19,1.08-15.14h-3.99c.6,4.56.91,9.22.91,13.94v59.99c0,58.48-47.41,105.89-105.89,105.89H.48v2.41c.33-.01.67-.01,1-.01h99.32c12.71,0,27.14.06,42.54.15-14.64.08-28.39.13-40.54.13H3.48c-.33,0-.67,0-1-.01v2.41h99.32c58.48,0,105.89,47.41,105.89,105.89v59.99c0,4.72-.31,9.38-.91,13.94h3.99c-.71-4.95-1.08-10-1.08-15.14v-59.99c0-58.48,47.41-105.89,105.89-105.89h99.31c2.9,0,5.78.12,8.62.35v-3.19c-.66.06-1.33.09-2,.14Z" />
                            <path className="cls-1" d="m421.49,181.36s0-.35,0-.35c0,0,.03.03.03.03-6.03.38-15.67.41-21.84.38-13.5.02-51.45.06-65.52.08-14.53-.12-29.27.88-43.54-2.47-28.58-6.17-54.14-24.79-68.76-50.12-7.37-12.6-12.09-26.74-13.75-41.25-.9-7.26-.7-14.58-.73-21.85,0-10.83-.02-32.84-.02-43.68-.05-7.28-.03-14.62,1.07-21.84,0,0,.33.38.33.38,0,0-3.99,0-3.99,0l.33-.38c.46,3.52.75,7.06.86,10.61.14,6.73.02,24.77.07,31.85-.22,12.76.57,29.98-.54,42.47-5.31,55.19-54.22,97.44-109.5,95.37-5.33,0-88.27.04-95.52.04,0,0,.48-.48.48-.48,0,0,0,2.41,0,2.41,0,0-.5-.48-.5-.48,0,0,71.45-.02,71.45-.02,17.85,0,53.6.08,71.43.17,0,0,0,.93,0,.93-17.51.07-52.92.13-70.43.11,0,0-70.44-.03-70.44-.03,0,0,.43-.42.43-.42,0,0,0,2.41,0,2.41-4.07-1.11,86.1-.05,84.49-.39,6.46.05,14.93-.15,21.25.25,50.75,2.63,94.23,44.48,98.83,95.08,1.11,12.49.33,29.84.55,42.47-.03,6.75.06,25.13-.06,31.85-.11,3.55-.4,7.09-.86,10.6,0,0-.3-.34-.3-.34h3.99s-.3.35-.3.35c-1.11-7.22-1.13-14.55-1.08-21.83,0-10.95,0-32.75.01-43.68-3.26-53.74,30.2-101.22,83.21-113.19,14.27-3.35,29-2.36,43.53-2.48,13.95.01,51.9.05,65.52.06,5.81-.03,15.97,0,21.84.37,0,0-.04.03-.04.03,0,0,0-3.19,0-3.19,0,0,.03.03.03.03,0,0-2.02.13-2.02.13h0Zm.04-.04l1.98-.15h.03s0,.03,0,.03,0,3.19,0,3.19c0,0,0,.04,0,.04,0,0-.04,0-.04,0-6.02-.37-15.67-.37-21.83-.33-13.49.01-51.46.05-65.52.06-14.51.15-29.22-.82-43.46,2.56-43.08,9.05-77.53,47.3-82.01,91.09-1.34,12.74-.47,30.69-.7,43.62.25,12.48-.77,31.28,1.09,43.59,0,0,.05.35.05.35,0,0-.35,0-.35,0,0,0-3.99,0-3.99,0h-.35s.05-.34.05-.34c1.6-11.94.66-30.12.89-42.37-.22-12.7.54-30.01-.57-42.4-4.6-50.26-47.82-91.8-98.22-94.38-14.97-.58-89.86-.05-106.1-.21,0,0-.42,0-.42,0,0,0,0-.42,0-.42,0,0,0-2.41,0-2.41,0,0,0-.42,0-.42h.43s70.42-.01,70.42-.01c17.6,0,52.85-.07,70.43-.16,0,0,0,.93,0,.93-40.04-.18-102.4-.11-142.85-.12,0,0-.5,0-.5,0,0,0,0-.48,0-.48,0,0,0-2.41,0-2.41,0,0,0-.48,0-.48,0,0,.48,0,.48,0,16.73-.15,91.08.38,106.1-.19,21.12-1.27,41.74-9.17,58.35-22.27,29.24-23.08,42.31-56.48,40.4-93.23,0-10.52.01-31.92.02-42.45.03-7.07.09-14.13-.9-21.14,0,0-.05-.38-.05-.38h.38s3.99,0,3.99,0c0,0,.39,0,.39,0,0,0-.05.38-.05.38-1.11,7.2-1.13,14.47-1.09,21.74,0,10.95-.02,32.75-.02,43.68.02,7.28-.18,14.57.7,21.78,4.47,43.78,38.95,82,82,91.06,14.24,3.38,28.95,2.41,43.46,2.57,0,0,43.68.05,43.68.05,12.19-.09,31.55.33,43.67-.3,0,0,.03,0,.03,0,0,0,0,.03,0,.03,0,0,0,.31,0,.31h0Z" />
                        </g>
                        <path className="cls-1" d="m101.94,298.8C36.63,256.55,1.77,164.92,36.78,92.42,68.51,27.7,147.25-3.11,216.16,8.5c0,0,8.18,1.49,8.18,1.49,1.25.37,8.91,2.03,10.09,2.4,7.19,2.08,14.63,4.37,21.52,7.3,15.09,6.1,29.61,14.59,42.47,24.44,0,0-.56.83-.56.83-9.43-5.27-19.09-9.95-29.01-13.89-29.49-11.45-61.74-15.82-93.12-12-40.73,4.93-80.78,23.66-107.33,55.36-41.23,48.39-35.84,120.84-5.28,173.54,10.38,18.35,23.79,35.14,39.44,50.05,0,0-.62.78-.62.78h0Z" />
                        <path className="cls-1" d="m115.15,305.38c78.47,51.46,199.17,47.23,240.23-48.22,16.62-38.1,17.72-82.13,5.69-121.77-6.07-20.22-15.7-39.42-27.9-56.68-6.25-8.65-13.16-16.87-20.58-24.72,0,0,.67-.74.67-.74,12.7,10.05,24.49,22.05,34.11,35.18,4.52,5.96,8.58,12.61,12.35,19.07.63.98,4.12,8,4.8,9.19,0,0,3.45,7.56,3.45,7.56,28.15,63.95,17.59,147.86-37.37,194.48-43.88,36.95-108.16,42.03-160.26,21.7-20.69-7.92-39.78-19.56-55.8-34.26,0,0,.61-.79.61-.79h0Z" />
                    </g>
                </g>
            </svg>
        </div>

    )
}

export default StarRing