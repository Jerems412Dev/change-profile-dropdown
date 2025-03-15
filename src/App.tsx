import { useState } from 'react'
import './App.css'
import { Check, ChevronsUpDown, Search } from 'lucide-react';

function App() {
  const [change, setChange] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [profiles, setProfiles] = useState([
    {
      id: 0,
      name: "Arc",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="18.06" height="24" viewBox="0 0 256 219"><path fill="#fff" d="M123.632.012c13.836.398 26.332 8.52 32.32 21.089l23.761 49.984l.382-.966a59 59 0 0 0 2.315-7.64l.332-1.548c4.004-20.02 23.463-32.977 43.52-29.016a36.98 36.98 0 0 1 29.018 43.526c-5.337 26.652-19.095 51.387-38.829 70.983l-.625.607l8.33 17.514c9.668 20.33-.349 44.903-21.4 51.799l-.95.297l-.725.219a36.7 36.7 0 0 1-9.897 1.373a37.01 37.01 0 0 1-33.42-21.102l-6.43-13.518l-1.622.402c-8.692 2.054-17.508 3.192-26.328 3.367l-2.405.024c-8.488 0-17.116-.987-25.736-2.9l-1.7-.396l-6.177 12.987a36.97 36.97 0 0 1-20.713 18.852l-1.1.382a36.96 36.96 0 0 1-28.96-2.484c-17.56-9.334-24.256-31.186-15.688-49.235l7.67-16.129l-.67-.65C17.39 137.46 9.054 125.67 3.524 112.996l-.737-1.733l-.106-.281C-4.93 92.058 4.21 70.517 23.122 62.86c14.834-6.005 31.278-1.693 41.39 9.578l.19.218l24.446-51.422A36.86 36.86 0 0 1 121.535.01L122.57 0z"/><path fill="#1a007f" d="m87.118 170.045l21.896-46.068c-16.724-3.552-33.551-13.897-43.068-26.482L43.05 145.63c12.723 10.793 27.999 19.276 44.068 24.414"/><path fill="#4e000a" d="M178.495 96.115c-11 13.483-26.275 23.483-42.62 27.379l21.827 45.93c15.931-5.38 30.827-14.069 43.69-25.206z"/><path fill="#1a007f" d="M43.05 145.631L31.602 169.7c-5.828 12.241-1.449 27.31 10.551 33.689c12.724 6.758 28.379 1.483 34.517-11.38l10.448-21.964A130.6 130.6 0 0 1 43.05 145.63"/><path fill="#ff9396" d="M223.942 43.565a25.137 25.137 0 0 0-29.585 19.723c-2.414 12.07-8.069 23.31-15.862 32.862l22.862 48.137c21.103-18.31 36.688-43.24 42.275-71.137c2.724-13.655-6.104-26.896-19.69-29.585"/><path fill="#002dc8" d="M135.875 123.494c-4.896 1.172-9.896 1.793-14.896 1.793c-3.896 0-7.93-.448-11.965-1.31c-16.724-3.552-33.551-13.897-43.068-26.482c-2.38-3.138-4.31-6.414-5.655-9.759c-5.207-12.862-19.862-19.068-32.724-13.896C14.705 79.047 8.5 93.702 13.671 106.563c5.896 14.62 16.31 28.034 29.379 39.068a130.5 130.5 0 0 0 44.033 24.414c11.069 3.551 22.551 5.517 33.862 5.517c12.551 0 24.93-2.173 36.723-6.138z"/><path fill="#ff536a" d="m213.425 169.596l-12.068-25.378l-22.862-48.103l-.034.035s0-.035.034-.035l-33.24-69.93a25.14 25.14 0 0 0-22.69-14.344c-9.69 0-18.517 5.586-22.689 14.345L65.98 97.495c9.517 12.585 26.344 22.93 43.068 26.482l10.965-23.034c1.035-2.173 4.138-2.173 5.173 0l10.724 22.551h.069h-.07l21.828 45.93l10.724 22.551a25.1 25.1 0 0 0 22.723 14.345c2.242 0 4.483-.31 6.69-.931c15.138-4.173 22.31-21.586 15.551-35.793"/></svg>,
      svgActive: <svg xmlns="http://www.w3.org/2000/svg" width="28.06" height="24" viewBox="0 0 256 219"><path fill="#fff" d="M123.632.012c13.836.398 26.332 8.52 32.32 21.089l23.761 49.984l.382-.966a59 59 0 0 0 2.315-7.64l.332-1.548c4.004-20.02 23.463-32.977 43.52-29.016a36.98 36.98 0 0 1 29.018 43.526c-5.337 26.652-19.095 51.387-38.829 70.983l-.625.607l8.33 17.514c9.668 20.33-.349 44.903-21.4 51.799l-.95.297l-.725.219a36.7 36.7 0 0 1-9.897 1.373a37.01 37.01 0 0 1-33.42-21.102l-6.43-13.518l-1.622.402c-8.692 2.054-17.508 3.192-26.328 3.367l-2.405.024c-8.488 0-17.116-.987-25.736-2.9l-1.7-.396l-6.177 12.987a36.97 36.97 0 0 1-20.713 18.852l-1.1.382a36.96 36.96 0 0 1-28.96-2.484c-17.56-9.334-24.256-31.186-15.688-49.235l7.67-16.129l-.67-.65C17.39 137.46 9.054 125.67 3.524 112.996l-.737-1.733l-.106-.281C-4.93 92.058 4.21 70.517 23.122 62.86c14.834-6.005 31.278-1.693 41.39 9.578l.19.218l24.446-51.422A36.86 36.86 0 0 1 121.535.01L122.57 0z"/><path fill="#1a007f" d="m87.118 170.045l21.896-46.068c-16.724-3.552-33.551-13.897-43.068-26.482L43.05 145.63c12.723 10.793 27.999 19.276 44.068 24.414"/><path fill="#4e000a" d="M178.495 96.115c-11 13.483-26.275 23.483-42.62 27.379l21.827 45.93c15.931-5.38 30.827-14.069 43.69-25.206z"/><path fill="#1a007f" d="M43.05 145.631L31.602 169.7c-5.828 12.241-1.449 27.31 10.551 33.689c12.724 6.758 28.379 1.483 34.517-11.38l10.448-21.964A130.6 130.6 0 0 1 43.05 145.63"/><path fill="#ff9396" d="M223.942 43.565a25.137 25.137 0 0 0-29.585 19.723c-2.414 12.07-8.069 23.31-15.862 32.862l22.862 48.137c21.103-18.31 36.688-43.24 42.275-71.137c2.724-13.655-6.104-26.896-19.69-29.585"/><path fill="#002dc8" d="M135.875 123.494c-4.896 1.172-9.896 1.793-14.896 1.793c-3.896 0-7.93-.448-11.965-1.31c-16.724-3.552-33.551-13.897-43.068-26.482c-2.38-3.138-4.31-6.414-5.655-9.759c-5.207-12.862-19.862-19.068-32.724-13.896C14.705 79.047 8.5 93.702 13.671 106.563c5.896 14.62 16.31 28.034 29.379 39.068a130.5 130.5 0 0 0 44.033 24.414c11.069 3.551 22.551 5.517 33.862 5.517c12.551 0 24.93-2.173 36.723-6.138z"/><path fill="#ff536a" d="m213.425 169.596l-12.068-25.378l-22.862-48.103l-.034.035s0-.035.034-.035l-33.24-69.93a25.14 25.14 0 0 0-22.69-14.344c-9.69 0-18.517 5.586-22.689 14.345L65.98 97.495c9.517 12.585 26.344 22.93 43.068 26.482l10.965-23.034c1.035-2.173 4.138-2.173 5.173 0l10.724 22.551h.069h-.07l21.828 45.93l10.724 22.551a25.1 25.1 0 0 0 22.723 14.345c2.242 0 4.483-.31 6.69-.931c15.138-4.173 22.31-21.586 15.551-35.793"/></svg>,
      state: false,
      colorOpacity: "#ff536a14"
    },
    {
      id: 1,
      name: "Linear",
      svg: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Linear--Streamline-Simple-Icons" height="18" width="18"><desc>Linear Streamline Icon: https://streamlinehq.com</desc><title>Linear</title><path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64 -1.62 6.903 -4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-0.524 0.33 -1.075 0.62 -1.65 0.866L0.951 7.277c0.247 -0.575 0.537 -1.126 0.866 -1.65ZM0.322 9.163l14.515 14.515c-0.71 0.172 -1.443 0.282 -2.195 0.322L0 11.358a12 12 0 0 1 0.322 -2.195Zm-0.17 4.862 9.823 9.824a12.02 12.02 0 0 1 -9.824 -9.824Z" fill="#535fd9" stroke-width="1"></path></svg>,
      svgActive: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Linear--Streamline-Simple-Icons" height="24" width="24"><desc>Linear Streamline Icon: https://streamlinehq.com</desc><title>Linear</title><path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64 -1.62 6.903 -4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-0.524 0.33 -1.075 0.62 -1.65 0.866L0.951 7.277c0.247 -0.575 0.537 -1.126 0.866 -1.65ZM0.322 9.163l14.515 14.515c-0.71 0.172 -1.443 0.282 -2.195 0.322L0 11.358a12 12 0 0 1 0.322 -2.195Zm-0.17 4.862 9.823 9.824a12.02 12.02 0 0 1 -9.824 -9.824Z" fill="#535fd9" stroke-width="1"></path></svg>,
      state: false,
      colorOpacity: "#535fd917"
    },
    {
      id: 2,
      name: "Obsidian",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="15.51" height="24" viewBox="0 0 256 332"><defs><radialGradient id="logosObsidianIcon0" cx="72.819%" cy="96.934%" r="163.793%" fx="72.819%" fy="96.934%" gradientTransform="rotate(-104 11141.322 0)"><stop offset="0%" stop-color="#fff" stop-opacity="0.4"/><stop offset="100%" stop-opacity="0.1"/></radialGradient><radialGradient id="logosObsidianIcon1" cx="52.917%" cy="90.632%" r="190.361%" fx="52.917%" fy="90.632%" gradientTransform="rotate(-82 10746.75 0)"><stop offset="0%" stop-color="#fff" stop-opacity="0.6"/><stop offset="100%" stop-color="#fff" stop-opacity="0.1"/></radialGradient><radialGradient id="logosObsidianIcon2" cx="31.174%" cy="97.138%" r="178.714%" fx="31.174%" fy="97.138%" gradientTransform="rotate(-77 10724.606 0)"><stop offset="0%" stop-color="#fff" stop-opacity="0.8"/><stop offset="100%" stop-color="#fff" stop-opacity="0.4"/></radialGradient><radialGradient id="logosObsidianIcon3" cx="71.813%" cy="99.994%" r="92.086%" fx="71.813%" fy="99.994%" gradientTransform="translate(0 22251839.658)skewY(-90)"><stop offset="0%" stop-color="#fff" stop-opacity="0.3"/><stop offset="100%" stop-opacity="0.3"/></radialGradient><radialGradient id="logosObsidianIcon4" cx="117.013%" cy="34.769%" r="328.729%" fx="117.013%" fy="34.769%" gradientTransform="rotate(102 -1004.443 0)"><stop offset="0%" stop-color="#fff" stop-opacity="0"/><stop offset="100%" stop-color="#fff" stop-opacity="0.2"/></radialGradient><radialGradient id="logosObsidianIcon5" cx="-9.431%" cy="8.712%" r="153.492%" fx="-9.431%" fy="8.712%" gradientTransform="rotate(45 1674.397 0)"><stop offset="0%" stop-color="#fff" stop-opacity="0.2"/><stop offset="100%" stop-color="#fff" stop-opacity="0.4"/></radialGradient><radialGradient id="logosObsidianIcon6" cx="103.902%" cy="-22.172%" r="394.771%" fx="103.902%" fy="-22.172%" gradientTransform="rotate(80 3757.522 0)"><stop offset="0%" stop-color="#fff" stop-opacity="0.1"/><stop offset="100%" stop-color="#fff" stop-opacity="0.3"/></radialGradient><radialGradient id="logosObsidianIcon7" cx="99.348%" cy="89.193%" r="203.824%" fx="99.348%" fy="89.193%" gradientTransform="translate(0 -38783246.548)skewY(-90)"><stop offset="0%" stop-color="#fff" stop-opacity="0.2"/><stop offset="50%" stop-color="#fff" stop-opacity="0.2"/><stop offset="100%" stop-color="#fff" stop-opacity="0.3"/></radialGradient></defs><path fill-opacity="0.3" d="M209.056 308.305c-2.043 14.93-16.738 26.638-31.432 22.552c-20.823-5.658-44.946-14.616-66.634-16.266l-33.317-2.515a22 22 0 0 1-14.144-6.522L6.167 246.778a21.77 21.77 0 0 1-4.244-24.124s35.36-77.478 36.775-81.485c1.257-4.008 6.13-39.211 8.958-58.07a22 22 0 0 1 7.072-12.965L122.462 9.47a22 22 0 0 1 31.903 2.672l57.048 71.978a23.18 23.18 0 0 1 4.872 14.38c0 13.594 1.179 41.646 8.8 59.72a236.8 236.8 0 0 0 27.974 45.732a11 11 0 0 1 .786 12.258c-4.95 8.408-14.851 24.595-28.76 45.26a111.7 111.7 0 0 0-16.108 46.834z"/><path fill="#6c31e3" d="M209.606 305.79c-2.043 15.009-16.737 26.717-31.432 22.71c-20.744-5.737-44.79-14.695-66.555-16.345L78.38 309.64a21.92 21.92 0 0 1-14.144-6.6L6.874 244.106a21.92 21.92 0 0 1-4.243-24.36s35.438-77.792 36.774-81.878c1.336-4.007 6.13-39.289 8.958-58.305a22 22 0 0 1 7.072-13.044L123.17 5.621a22 22 0 0 1 31.902 2.75l56.97 72.292a23.34 23.34 0 0 1 4.871 14.38c0 13.673 1.18 41.804 8.723 59.955a238 238 0 0 0 27.974 45.969a11 11 0 0 1 .864 12.336c-5.03 8.487-14.851 24.674-28.838 45.497a112.6 112.6 0 0 0-16.03 46.99"/><path fill="url(#logosObsidianIcon0)" d="M70.365 307.44c26.638-53.983 25.93-92.722 14.537-120.225c-10.372-25.459-29.781-41.489-45.025-51.468a19.2 19.2 0 0 1-1.415 4.243L2.631 219.747a21.92 21.92 0 0 0 4.321 24.36l57.284 58.933a23.8 23.8 0 0 0 6.129 4.4"/><path fill="url(#logosObsidianIcon1)" d="M142.814 197.902a86 86 0 0 1 21.06 4.793c21.844 8.172 41.724 26.56 58.147 61.999c1.179-2.043 2.357-4.008 3.615-5.894a960 960 0 0 0 28.838-45.497a11 11 0 0 0-.786-12.336a238 238 0 0 1-28.052-45.969c-7.544-18.073-8.644-46.282-8.723-59.955c0-5.186-1.65-10.294-4.871-14.38l-56.97-72.292l-.943-1.178c4.165 13.75 3.93 24.752 1.336 34.731c-2.357 9.272-6.757 17.68-11.394 26.56c-1.571 2.986-3.143 6.05-4.636 9.193a110 110 0 0 0-12.415 45.576c-.786 19.016 3.064 42.825 15.716 74.65z"/><path fill="url(#logosObsidianIcon2)" d="M142.736 197.902c-12.652-31.824-16.502-55.633-15.716-74.65c.786-18.858 6.286-33.002 12.415-45.575l4.715-9.193c4.558-8.88 8.88-17.288 11.315-26.56a61.7 61.7 0 0 0-1.336-34.731c-8.136-8.94-21.96-9.642-30.96-1.572L55.436 66.519a22 22 0 0 0-7.072 13.044l-8.25 54.69c0 .55-.158 1.022-.236 1.572c15.244 9.901 34.574 25.931 45.025 51.312c2.043 5.029 3.772 10.294 5.029 16.03a157.2 157.2 0 0 1 52.805-5.343z"/><path fill="url(#logosObsidianIcon3)" d="M178.253 328.5c14.616 4.007 29.31-7.701 31.353-22.789a120.2 120.2 0 0 1 12.494-41.017c-16.502-35.44-36.382-53.827-58.148-61.999c-23.18-8.643-48.404-5.736-74.021.472c5.736 26.01 2.357 60.034-19.487 104.273c2.436 1.257 5.186 1.965 7.936 2.2l34.496 2.593c18.701 1.336 46.597 11.001 65.377 16.266"/><path fill="url(#logosObsidianIcon4)" d="M127.177 122.074c-.864 18.859 1.493 40.39 14.144 72.135l-3.929-.393c-11.394-33.081-13.908-50.054-13.044-69.149c.786-19.094 6.994-33.789 13.123-46.361c1.571-3.143 5.186-9.037 6.758-12.023c4.557-8.879 7.622-13.515 10.215-21.609c3.772-11.315 2.986-16.658 2.514-22.001c2.908 19.251-8.172 35.988-16.501 53.04a113.9 113.9 0 0 0-13.358 46.361z"/><path fill="url(#logosObsidianIcon5)" d="M88.674 188.551c1.571 3.458 2.907 6.287 3.85 10.608l-3.379.786c-1.336-5.029-2.357-8.643-4.322-12.965c-11.472-26.953-29.86-40.861-44.79-51.076c18.074 9.744 36.697 25.066 48.64 52.647"/><path fill="url(#logosObsidianIcon6)" d="M92.681 202.617c6.286 29.467-.786 66.948-21.609 103.409c17.445-36.146 25.931-70.8 18.859-102.938l2.75-.55z"/><path fill="url(#logosObsidianIcon7)" d="M164.659 199.867c34.181 12.808 47.383 40.86 57.205 64.355c-12.18-24.516-29.074-51.626-58.462-61.684c-22.317-7.7-41.175-6.758-73.471.55l-.707-3.143c34.26-7.858 52.176-8.8 75.435 0z"/></svg>,
      svgActive: <svg xmlns="http://www.w3.org/2000/svg" width="18.51" height="24" viewBox="0 0 256 332"><defs><radialGradient id="logosObsidianIcon0" cx="72.819%" cy="96.934%" r="163.793%" fx="72.819%" fy="96.934%" gradientTransform="rotate(-104 11141.322 0)"><stop offset="0%" stop-color="#fff" stop-opacity="0.4"/><stop offset="100%" stop-opacity="0.1"/></radialGradient><radialGradient id="logosObsidianIcon1" cx="52.917%" cy="90.632%" r="190.361%" fx="52.917%" fy="90.632%" gradientTransform="rotate(-82 10746.75 0)"><stop offset="0%" stop-color="#fff" stop-opacity="0.6"/><stop offset="100%" stop-color="#fff" stop-opacity="0.1"/></radialGradient><radialGradient id="logosObsidianIcon2" cx="31.174%" cy="97.138%" r="178.714%" fx="31.174%" fy="97.138%" gradientTransform="rotate(-77 10724.606 0)"><stop offset="0%" stop-color="#fff" stop-opacity="0.8"/><stop offset="100%" stop-color="#fff" stop-opacity="0.4"/></radialGradient><radialGradient id="logosObsidianIcon3" cx="71.813%" cy="99.994%" r="92.086%" fx="71.813%" fy="99.994%" gradientTransform="translate(0 22251839.658)skewY(-90)"><stop offset="0%" stop-color="#fff" stop-opacity="0.3"/><stop offset="100%" stop-opacity="0.3"/></radialGradient><radialGradient id="logosObsidianIcon4" cx="117.013%" cy="34.769%" r="328.729%" fx="117.013%" fy="34.769%" gradientTransform="rotate(102 -1004.443 0)"><stop offset="0%" stop-color="#fff" stop-opacity="0"/><stop offset="100%" stop-color="#fff" stop-opacity="0.2"/></radialGradient><radialGradient id="logosObsidianIcon5" cx="-9.431%" cy="8.712%" r="153.492%" fx="-9.431%" fy="8.712%" gradientTransform="rotate(45 1674.397 0)"><stop offset="0%" stop-color="#fff" stop-opacity="0.2"/><stop offset="100%" stop-color="#fff" stop-opacity="0.4"/></radialGradient><radialGradient id="logosObsidianIcon6" cx="103.902%" cy="-22.172%" r="394.771%" fx="103.902%" fy="-22.172%" gradientTransform="rotate(80 3757.522 0)"><stop offset="0%" stop-color="#fff" stop-opacity="0.1"/><stop offset="100%" stop-color="#fff" stop-opacity="0.3"/></radialGradient><radialGradient id="logosObsidianIcon7" cx="99.348%" cy="89.193%" r="203.824%" fx="99.348%" fy="89.193%" gradientTransform="translate(0 -38783246.548)skewY(-90)"><stop offset="0%" stop-color="#fff" stop-opacity="0.2"/><stop offset="50%" stop-color="#fff" stop-opacity="0.2"/><stop offset="100%" stop-color="#fff" stop-opacity="0.3"/></radialGradient></defs><path fill-opacity="0.3" d="M209.056 308.305c-2.043 14.93-16.738 26.638-31.432 22.552c-20.823-5.658-44.946-14.616-66.634-16.266l-33.317-2.515a22 22 0 0 1-14.144-6.522L6.167 246.778a21.77 21.77 0 0 1-4.244-24.124s35.36-77.478 36.775-81.485c1.257-4.008 6.13-39.211 8.958-58.07a22 22 0 0 1 7.072-12.965L122.462 9.47a22 22 0 0 1 31.903 2.672l57.048 71.978a23.18 23.18 0 0 1 4.872 14.38c0 13.594 1.179 41.646 8.8 59.72a236.8 236.8 0 0 0 27.974 45.732a11 11 0 0 1 .786 12.258c-4.95 8.408-14.851 24.595-28.76 45.26a111.7 111.7 0 0 0-16.108 46.834z"/><path fill="#6c31e3" d="M209.606 305.79c-2.043 15.009-16.737 26.717-31.432 22.71c-20.744-5.737-44.79-14.695-66.555-16.345L78.38 309.64a21.92 21.92 0 0 1-14.144-6.6L6.874 244.106a21.92 21.92 0 0 1-4.243-24.36s35.438-77.792 36.774-81.878c1.336-4.007 6.13-39.289 8.958-58.305a22 22 0 0 1 7.072-13.044L123.17 5.621a22 22 0 0 1 31.902 2.75l56.97 72.292a23.34 23.34 0 0 1 4.871 14.38c0 13.673 1.18 41.804 8.723 59.955a238 238 0 0 0 27.974 45.969a11 11 0 0 1 .864 12.336c-5.03 8.487-14.851 24.674-28.838 45.497a112.6 112.6 0 0 0-16.03 46.99"/><path fill="url(#logosObsidianIcon0)" d="M70.365 307.44c26.638-53.983 25.93-92.722 14.537-120.225c-10.372-25.459-29.781-41.489-45.025-51.468a19.2 19.2 0 0 1-1.415 4.243L2.631 219.747a21.92 21.92 0 0 0 4.321 24.36l57.284 58.933a23.8 23.8 0 0 0 6.129 4.4"/><path fill="url(#logosObsidianIcon1)" d="M142.814 197.902a86 86 0 0 1 21.06 4.793c21.844 8.172 41.724 26.56 58.147 61.999c1.179-2.043 2.357-4.008 3.615-5.894a960 960 0 0 0 28.838-45.497a11 11 0 0 0-.786-12.336a238 238 0 0 1-28.052-45.969c-7.544-18.073-8.644-46.282-8.723-59.955c0-5.186-1.65-10.294-4.871-14.38l-56.97-72.292l-.943-1.178c4.165 13.75 3.93 24.752 1.336 34.731c-2.357 9.272-6.757 17.68-11.394 26.56c-1.571 2.986-3.143 6.05-4.636 9.193a110 110 0 0 0-12.415 45.576c-.786 19.016 3.064 42.825 15.716 74.65z"/><path fill="url(#logosObsidianIcon2)" d="M142.736 197.902c-12.652-31.824-16.502-55.633-15.716-74.65c.786-18.858 6.286-33.002 12.415-45.575l4.715-9.193c4.558-8.88 8.88-17.288 11.315-26.56a61.7 61.7 0 0 0-1.336-34.731c-8.136-8.94-21.96-9.642-30.96-1.572L55.436 66.519a22 22 0 0 0-7.072 13.044l-8.25 54.69c0 .55-.158 1.022-.236 1.572c15.244 9.901 34.574 25.931 45.025 51.312c2.043 5.029 3.772 10.294 5.029 16.03a157.2 157.2 0 0 1 52.805-5.343z"/><path fill="url(#logosObsidianIcon3)" d="M178.253 328.5c14.616 4.007 29.31-7.701 31.353-22.789a120.2 120.2 0 0 1 12.494-41.017c-16.502-35.44-36.382-53.827-58.148-61.999c-23.18-8.643-48.404-5.736-74.021.472c5.736 26.01 2.357 60.034-19.487 104.273c2.436 1.257 5.186 1.965 7.936 2.2l34.496 2.593c18.701 1.336 46.597 11.001 65.377 16.266"/><path fill="url(#logosObsidianIcon4)" d="M127.177 122.074c-.864 18.859 1.493 40.39 14.144 72.135l-3.929-.393c-11.394-33.081-13.908-50.054-13.044-69.149c.786-19.094 6.994-33.789 13.123-46.361c1.571-3.143 5.186-9.037 6.758-12.023c4.557-8.879 7.622-13.515 10.215-21.609c3.772-11.315 2.986-16.658 2.514-22.001c2.908 19.251-8.172 35.988-16.501 53.04a113.9 113.9 0 0 0-13.358 46.361z"/><path fill="url(#logosObsidianIcon5)" d="M88.674 188.551c1.571 3.458 2.907 6.287 3.85 10.608l-3.379.786c-1.336-5.029-2.357-8.643-4.322-12.965c-11.472-26.953-29.86-40.861-44.79-51.076c18.074 9.744 36.697 25.066 48.64 52.647"/><path fill="url(#logosObsidianIcon6)" d="M92.681 202.617c6.286 29.467-.786 66.948-21.609 103.409c17.445-36.146 25.931-70.8 18.859-102.938l2.75-.55z"/><path fill="url(#logosObsidianIcon7)" d="M164.659 199.867c34.181 12.808 47.383 40.86 57.205 64.355c-12.18-24.516-29.074-51.626-58.462-61.684c-22.317-7.7-41.175-6.758-73.471.55l-.707-3.143c34.26-7.858 52.176-8.8 75.435 0z"/></svg>,
      state: false,
      colorOpacity: "#7b46e61c"
    },
    {
      id: 3,
      name: "Raycast",
      svg: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Raycast--Streamline-Simple-Icons" height="18" width="18"><desc>Raycast Streamline Icon: https://streamlinehq.com</desc><title>Raycast</title><path d="M6.004 15.492v2.504L0 11.992l1.258 -1.249Zm2.504 2.504H6.004L12.008 24l1.253 -1.253zm14.24 -4.747L24 11.997 12.003 0 10.75 1.251 15.491 6h-2.865L9.317 2.692 8.065 3.944l2.06 2.06H8.691v9.31H18v-1.432l2.06 2.06 1.252 -1.252L18 11.37V8.506ZM6.63 5.372 5.38 6.625l1.342 1.343 1.251 -1.253Zm10.655 10.655 -1.247 1.251 1.342 1.343 1.253 -1.251zM3.944 8.059 2.692 9.31l3.312 3.314v-2.506zm9.936 9.937h-2.504l3.314 3.312 1.25 -1.252z" fill="#ff6364" stroke-width="1"></path></svg>,
      svgActive: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Raycast--Streamline-Simple-Icons" height="24" width="24"><desc>Raycast Streamline Icon: https://streamlinehq.com</desc><title>Raycast</title><path d="M6.004 15.492v2.504L0 11.992l1.258 -1.249Zm2.504 2.504H6.004L12.008 24l1.253 -1.253zm14.24 -4.747L24 11.997 12.003 0 10.75 1.251 15.491 6h-2.865L9.317 2.692 8.065 3.944l2.06 2.06H8.691v9.31H18v-1.432l2.06 2.06 1.252 -1.252L18 11.37V8.506ZM6.63 5.372 5.38 6.625l1.342 1.343 1.251 -1.253Zm10.655 10.655 -1.247 1.251 1.342 1.343 1.253 -1.251zM3.944 8.059 2.692 9.31l3.312 3.314v-2.506zm9.936 9.937h-2.504l3.314 3.312 1.25 -1.252z" fill="#ff6364" stroke-width="1"></path></svg>,
      state: false,
      colorOpacity: "#ff536a14"
    },
    {
      id: 4,
      name: "Spotify",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 256 256"><path fill="#1ed760" d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.98 7.98 0 0 1-9.552-6.007a7.97 7.97 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975m15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187z"/></svg>,
      svgActive: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#1ed760" d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.98 7.98 0 0 1-9.552-6.007a7.97 7.97 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975m15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187z"/></svg>,
      state: false,
      colorOpacity: "#1ed76017"
    },
    {
      id: 5,
      name: "TailwindCss",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="23.9" height="24" viewBox="0 0 256 154"><defs><linearGradient id="logosTailwindcssIcon0" x1="-2.778%" x2="100%" y1="32%" y2="67.556%"><stop offset="0%" stop-color="#2298bd"/><stop offset="100%" stop-color="#0ed7b5"/></linearGradient></defs><path fill="url(#logosTailwindcssIcon0)" d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"/></svg>,
      svgActive: <svg xmlns="http://www.w3.org/2000/svg" width="33.9" height="24" viewBox="0 0 256 154"><defs><linearGradient id="logosTailwindcssIcon0" x1="-2.778%" x2="100%" y1="32%" y2="67.556%"><stop offset="0%" stop-color="#2298bd"/><stop offset="100%" stop-color="#0ed7b5"/></linearGradient></defs><path fill="url(#logosTailwindcssIcon0)" d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"/></svg>,
      state: true,
      colorOpacity: "#17bbb912"
    },
  ]);

  const [profilesSearch, setProfilesSearch] = useState<typeof profiles>(profiles);
  const [input, setInput] = useState("");
  const handleChange = (value: string) => {
    setInput(value);
    const list = profiles.filter(profile => profile.name.toLowerCase().includes(value.toLowerCase()));
    setProfilesSearch(list);
  };

  const [isChecked, setIsChecked] = useState(5);

  const handleChecked = (index: number) => {
    setIsChecked(index);
    const newProfiles = profiles.map((profile) => {
      if (profile.id === index) {
        return {
          ...profile,
          state: true
        }
      }
      return {
        ...profile,
        state: false
      }
    });
    const newProfilesSearch = profilesSearch.map((profile) => {
      if (profile.id === index) {
        return {
          ...profile,
          state: true
        }
      }
      return {
        ...profile,
        state: false
      }
    });
    setProfiles(newProfiles);
    setProfilesSearch(newProfilesSearch);
    setIsActive(false);
    setInput("");
  };

  const handleClear = () => {
    setInput("");
    setProfilesSearch(profiles);
  };

  return (
    <>
      <div className={"w-full h-screen flex flex-row items-center justify-center " + (change ? "bg-[#fdfdfb]" : "bg-[#0e0e0e]")}>
        <div className="max-lg:w-[35%] max-md:w-[50%] max-sm:w-[80%] w-1/4 h-120 flex flex-col items-center justify-start gap-y-2">
          <div className="w-full flex flex-row items-center justify-start">
            <button 
              onClick={() => setChange(!change)}
              className={"outline-none cursor-pointer relative w-[4rem] h-[2rem] flex flex-row items-center justify-between rounded-full inset-ring-1 " + (change ? "bg-[#fdfdfb] inset-ring-[#d4d3d3]" : "bg-[#0e0e0e] inset-ring-[#202020]")}>
              <span className="flex flex-row items-center justify-center p-2 rounded-full">
                {!change ?
                  <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    width="15px" 
                    className="transition-change-sun"
                    viewBox="0 0 24 24" 
                    fill="#aeaeb6"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                  :
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="15px" 
                    className="transition-change-back-sun"
                    viewBox="0 0 24 24" 
                    fill="#696871"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                }
              </span>
              <span className="flex flex-row items-center justify-center p-2 rounded-full">
                {!change ?
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="15px" 
                    className="transition-change-moon"
                    viewBox="0 0 24 24" 
                    fill="white"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
                :
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="15px" 
                    className="transition-change-back-moon"
                    viewBox="0 0 24 24" 
                    fill="currentColor"><path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path></svg>
                }
              </span>
              <span
                className={"outline-none absolute text-transparent bg-[#aeaeb634] flex flex-row items-center justify-center p-[0.97rem] rounded-full inset-ring-1" + (!change ? "  transition-change inset-ring-[#202020]" : " inset-ring-[#d4d3d3] transition-change-back")}
              >
              </span>
            </button>
          </div>
          <button
            onClick={() => setIsActive(!isActive)}
            className={"w-full flex flex-row items-center justify-between p-2.5 rounded-3xl border-[#202020] cursor-pointer outline-none inset-ring-1 " + (change ? "bg-[#fdfdfb] inset-ring-[#d4d3d3]" : "bg-[#0e0e0e] inset-ring-[#202020]")}
          >
            <div className="flex flex-row items-center justify-between gap-x-4">
              <span
                style={{ backgroundColor: profiles[isChecked].colorOpacity }} 
                className={"flex flex-row items-center justify-center rounded-2xl w-[3rem] h-[3rem] inset-ring-1 " + (change ? "inset-ring-[#d4d3d3]" : "inset-ring-[#202020]")}>
                {profiles[isChecked].svgActive}
              </span>
              <div className="flex flex-col items-start justify-between">
                <p className="text-sm text-[#737373]">Profile</p>
                <p className={(change) ? "text-black" : "text-white"}>{profiles[isChecked].name}</p>
              </div>
            </div>
            <ChevronsUpDown size={32} color="#737373" />
          </button>
          <div className={"hidden w-full flex-col items-center justify-between gap-y-2 p-2.5 rounded-3xl border-[#202020] inset-ring-1 " + (change ? "bg-[#fdfdfb] inset-ring-[#d4d3d3]" : "bg-[#0e0e0e] inset-ring-[#202020]") + (isActive ? " transition-active" : " transition-active-back")}>
            <div className="w-full flex flex-row items-center justify-between px-5 py-2">
              <div className="flex flex-row items-center justify-between gap-x-1">
                <Search size={22} color="#737373" />
                <input 
                  type="text"
                  onChange={(event) => handleChange(event.target.value)}
                  value={input}
                  className={"w-[90%] bg-transparent outline-none placeholder:text-[#737373] " + (change ? "text-black" : "text-white")} placeholder="Search..." 
                />
              </div>
              <span className={"flex flex-row items-center justify-center rounded-lg text-xs py-1 px-2 inset-ring-1 " + (change ? "inset-ring-[#d4d3d3] text-black" : "inset-ring-[#202020] text-white")}>
                Esc
              </span>
            </div>
            <hr className={"w-full border-[solid 0.5px] " + (change ? "border-[#d4d3d3]" : "border-[#202020]")} />
            {input.length <= 0 ?
              <div className="w-full flex flex-col items-center justify-center p-0.5">
                {
                  profiles.map((profile, index) => (
                    <div 
                      key={index} 
                      onClick={() => handleChecked(profile.id)}
                      className={"w-full cursor-pointer flex flex-row items-center py-2 px-4 rounded-xl justify-between " + (change ? " hover:bg-[#aeaeb617]" : "hover:bg-[#aeaeb613]")}>
                        <div className="flex flex-row items-center gap-x-2">
                          <span 
                            style={{ backgroundColor: profile.colorOpacity }}
                            className={"flex flex-row items-center justify-center rounded-xl w-[2rem] h-[2rem] inset-ring-1 " + (change ? "inset-ring-[#d4d3d3]" : "inset-ring-[#202020]")}>
                            {profile.svg}
                          </span>
                          <p className={(change) ? "text-black" : "text-white"}>{profile.name}</p>
                        </div>
                        {profile.state &&
                          <Check size={20} color={(change ? "#737373" : "#ffffff")} />
                        }
                    </div>
                  ))
                }
              </div>
            :
              profilesSearch.length !== 0 ?
              <div className="w-full flex flex-col items-center justify-center p-0.5">
                {
                  profilesSearch.map((profile, index) => (
                    <div 
                      key={index} 
                      onClick={() => handleChecked(profile.id)}
                      className={"w-full cursor-pointer flex flex-row items-center py-2 px-4 rounded-xl justify-between " + (change ? " hover:bg-[#aeaeb617]" : "hover:bg-[#aeaeb613]")}>
                        <div className="flex flex-row items-center gap-x-2">
                          <span 
                            style={{ backgroundColor: profile.colorOpacity }}
                            className={"flex flex-row items-center justify-center rounded-xl w-[2rem] h-[2rem] inset-ring-1 " + (change ? "inset-ring-[#d4d3d3]" : "inset-ring-[#202020]")}>
                            {profile.svg}
                          </span>
                          <p className={(change) ? "text-black" : "text-white"}>{profile.name}</p>
                        </div>
                        {profile.state &&
                          <Check size={20} color={(change ? "#737373" : "#ffffff")} />
                        }
                    </div>
                  ))
                }
              </div>
              :
              <div className="w-full flex flex-col items-center justify-center p-0.5 gap-y-5">
                <div className="w-full flex flex-col items-center justify-center">
                  <p className={change ? "text-black" : "text-white"}>No Profile Found.</p>
                  <p className="text-[#737373] w-60 justify-center text-center">Your search did not match any profiles.</p>
                </div>
                <button 
                  onClick={() => handleClear()}
                  className={"cursor-pointer w-full flex flex-row items-center justify-center rounded-xl p-2 inset-ring-1 " + (change ? "bg-[#fdfdfb] hover:bg-[#aeaeb617] text-black inset-ring-[#d4d3d3]" : "bg-[#0e0e0e] hover:bg-[#aeaeb613] text-white inset-ring-[#202020]")}>
                  Clear Search
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
