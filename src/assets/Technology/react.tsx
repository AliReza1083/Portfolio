import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {}

export default function Reactjs({ className, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 73 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-16", className)}
      {...props}
    >
      <path
        d="M59.9791 20.7437C59.2129 20.481 58.4401 20.2377 57.6616 20.014C57.7924 19.4801 57.9128 18.9527 58.0196 18.4345C59.7741 9.92589 58.6271 3.07116 54.7096 0.814257C50.9535 -1.34936 44.8107 0.906703 38.6069 6.30085C37.9955 6.83342 37.3977 7.38134 36.8139 7.94408C36.4232 7.56987 36.0255 7.20293 35.6212 6.84344C29.1192 1.07586 22.6021 -1.35498 18.6888 0.908389C14.9361 3.07875 13.8249 9.52267 15.4044 17.5865C15.5615 18.3851 15.7389 19.1797 15.9365 19.9693C15.014 20.2312 14.1238 20.5099 13.2719 20.8066C5.64892 23.462 0.780762 27.6231 0.780762 31.9394C0.780762 36.3973 6.00695 40.8687 13.9466 43.58C14.5903 43.7989 15.2394 44.0017 15.8932 44.1883C15.6808 45.0388 15.4923 45.895 15.3279 46.756C13.822 54.6799 14.9979 60.9715 18.7405 63.1281C22.606 65.3552 29.0939 63.0663 35.4111 57.5491C35.9233 57.1005 36.4243 56.6393 36.9135 56.1657C37.5456 56.7751 38.1946 57.3667 38.8598 57.9399C44.9792 63.2006 51.0227 65.3249 54.7616 63.1624C58.6235 60.9288 59.8787 54.1699 58.2491 45.9467C58.1208 45.3025 57.9768 44.6615 57.8174 44.0242C58.273 43.8893 58.7202 43.7505 59.1562 43.6061C67.4103 40.874 72.7808 36.4569 72.7808 31.9394C72.7808 27.6074 67.7554 23.4181 59.9791 20.7437ZM58.1889 40.6894C57.7952 40.8195 57.3913 40.9451 56.9796 41.0674C56.0683 38.1852 54.8387 35.1208 53.3337 31.9543C54.7698 28.8634 55.9522 25.838 56.8378 22.9747C57.5744 23.1877 58.2891 23.4122 58.9781 23.6491C65.6409 25.9409 69.705 29.3288 69.705 31.9394C69.705 34.7201 65.3158 38.33 58.1889 40.6894ZM55.2319 46.5436C55.9524 50.1796 56.0551 53.4671 55.5778 56.0373C55.1492 58.3468 54.2869 59.8863 53.2204 60.5031C50.9515 61.8153 46.0991 60.1097 40.8659 55.6105C40.2473 55.0776 39.6436 54.5276 39.0555 53.9611C41.0844 51.7444 43.112 49.1674 45.0909 46.3053C48.5716 45.9967 51.86 45.4921 54.8421 44.8034C54.9857 45.3803 55.1157 45.9605 55.2319 46.5436ZM25.3271 60.2763C23.1103 61.0583 21.3446 61.0808 20.2773 60.466C18.0062 59.1574 17.062 54.1055 18.3499 47.3292C18.503 46.5285 18.6783 45.7321 18.8755 44.9411C21.8247 45.593 25.0892 46.0617 28.5781 46.3443C30.5705 49.1449 32.6565 51.7191 34.7589 53.9732C34.3121 54.4051 33.8547 54.826 33.3872 55.2354C30.5935 57.6749 27.7943 59.4058 25.3271 60.2763ZM14.9417 40.6723C11.4309 39.4733 8.53145 37.9152 6.54414 36.215C4.7582 34.6872 3.85679 33.1702 3.85679 31.9394C3.85679 29.32 7.76532 25.9791 14.2844 23.7084C15.0756 23.433 15.9036 23.1731 16.7628 22.9292C17.6639 25.8571 18.8457 28.9185 20.2719 32.0142C18.8272 35.1556 17.6285 38.2659 16.7186 41.2284C16.1219 41.0576 15.5294 40.8722 14.9417 40.6723ZM18.423 16.9961C17.0699 10.0875 17.9685 4.87596 20.23 3.56795C22.6387 2.17481 27.965 4.16112 33.579 9.14137C33.9451 9.46686 34.3052 9.79895 34.6593 10.1375C32.5674 12.3817 30.5005 14.9368 28.5258 17.7208C25.1395 18.0344 21.8981 18.5379 18.918 19.2126C18.7344 18.4781 18.5694 17.7389 18.423 16.9961ZM49.4806 24.6581C48.7767 23.4434 48.0467 22.244 47.2911 21.0606C49.5883 21.3509 51.7894 21.7361 53.8563 22.2071C53.2359 24.1942 52.4624 26.2716 51.552 28.4015C50.8866 27.1401 50.1959 25.892 49.4806 24.6581ZM36.8154 12.3337C38.234 13.8693 39.6549 15.5836 41.0524 17.4438C38.2174 17.31 35.3777 17.3094 32.5426 17.4421C33.9415 15.5991 35.3745 13.887 36.8154 12.3337ZM24.0688 24.6792C23.3624 25.9032 22.6847 27.1434 22.0362 28.399C21.1407 26.2766 20.3743 24.1897 19.7485 22.1745C21.8028 21.7154 23.9935 21.3399 26.2761 21.055C25.512 22.2456 24.7761 23.4542 24.0688 24.6792ZM26.3416 43.0424C23.9833 42.7794 21.7598 42.4234 19.7061 41.9766C20.3417 39.9254 21.125 37.7941 22.0399 35.6263C22.6909 36.8828 23.3715 38.1238 24.0809 39.3483C24.8105 40.6071 25.5659 41.8401 26.3416 43.0424ZM36.9003 51.7615C35.4423 50.1902 33.9882 48.4518 32.5682 46.5821C33.9469 46.636 35.3523 46.6635 36.7808 46.6635C38.2483 46.6635 39.699 46.6307 41.1269 46.5672C39.7249 48.4706 38.3094 50.2116 36.9003 51.7615ZM51.581 35.5156C52.5434 37.7073 53.3545 39.8273 53.9986 41.8434C51.9112 42.3194 49.6572 42.7027 47.2824 42.9874C48.0434 41.7821 48.7803 40.5618 49.4927 39.3272C50.217 38.0723 50.9133 36.8014 51.581 35.5156ZM46.8284 37.7919C45.7378 39.6847 44.5858 41.5416 43.3744 43.3597C41.18 43.5149 38.9807 43.5921 36.7808 43.5909C34.54 43.5909 32.3606 43.5212 30.2619 43.3852C29.0189 41.5714 27.845 39.7112 26.7427 37.8087C25.6456 35.9163 24.6211 33.9829 23.6709 32.0128C24.6187 30.0422 25.6403 28.1079 26.7337 26.214L26.7334 26.2143C27.8263 24.3199 28.9909 22.4677 30.2245 20.6616C32.3657 20.4998 34.5614 20.4155 36.7805 20.4155C39.0097 20.4155 41.2085 20.5006 43.3491 20.6636C44.5703 22.467 45.7274 24.3128 46.8183 26.1977C47.9153 28.0874 48.9505 30.0123 49.9222 31.9692C48.9604 33.9462 47.9285 35.8883 46.8284 37.7919ZM53.1734 3.47635C55.5843 4.86556 56.522 10.4676 55.0072 17.8141C54.9104 18.2828 54.8019 18.7602 54.6837 19.2443C51.6963 18.5553 48.4526 18.0431 45.0565 17.7247C43.0782 14.9101 41.0282 12.3511 38.9703 10.1358C39.5096 9.61638 40.0618 9.11045 40.6263 8.61845C45.9419 3.99702 50.9099 2.17228 53.1734 3.47635ZM36.7808 25.516C40.3315 25.516 43.2101 28.3919 43.2101 31.9394C43.2101 35.4869 40.3315 38.3628 36.7808 38.3628C33.23 38.3628 30.3514 35.4869 30.3514 31.9394C30.3514 28.3919 33.23 25.516 36.7808 25.516Z"
        fill="#00D8FF"
      />
    </svg>
  );
}
