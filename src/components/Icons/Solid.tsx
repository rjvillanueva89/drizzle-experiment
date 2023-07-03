import { SVGProps } from "react"

type Props = SVGProps<SVGSVGElement>

const GLOBAL_PROPS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
}

export const IconCheckCircle = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
)

export const IconChevronDown = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path
      fillRule="evenodd"
      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
      clipRule="evenodd"
    />
  </svg>
)

export const IconPlusCircle = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
      clipRule="evenodd"
    />
  </svg>
)

export const IconMinusCircle = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
      clipRule="evenodd"
    />
  </svg>
)

export const IconDocumentMagnifyingGlass = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path d="M11.625 16.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
    <path
      fillRule="evenodd"
      d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 001.06-1.06l-1.047-1.048A3.375 3.375 0 1011.625 18z"
      clipRule="evenodd"
    />
    <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
  </svg>
)

export const IconDocumentPlus = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path
      fillRule="evenodd"
      d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z"
      clipRule="evenodd"
    />
    <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
  </svg>
)

export const IconUserPlus = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
  </svg>
)

export const IconAdjustmentsHorizontal = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
  </svg>
)

export const IconUsers = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
  </svg>
)

export const IconArrowSmallUp = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path
      fillRule="evenodd"
      d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z"
      clipRule="evenodd"
    />
  </svg>
)

export const IconArrowSmallDown = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path
      fillRule="evenodd"
      d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
      clipRule="evenodd"
    />
  </svg>
)

export const IconArrowSmallLeft = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path
      fillRule="evenodd"
      d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
      clipRule="evenodd"
    />
  </svg>
)

export const IconArrowSmallRight = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path
      fillRule="evenodd"
      d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
      clipRule="evenodd"
    />
  </svg>
)

export const IconPencilSquare = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
  </svg>
)

export const IconLoader = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} {...GLOBAL_PROPS}>
    <path
      d="M23.75 12.0138C23.75 18.5032 18.4893 23.7639 12 23.7639 5.5107 23.7639.25 18.5032.25 12.0138.25 5.5245 5.5107.2638 12 .2638 18.4893.2638 23.75 5.5245 23.75 12.0138ZM2.3841 12.0138C2.3841 17.3245 6.6893 21.6297 12 21.6297 17.3107 21.6297 21.6159 17.3245 21.6159 12.0138 21.6159 6.7031 17.3107 2.398 12 2.398 6.6893 2.398 2.3841 6.7031 2.3841 12.0138Z"
      fill="currentColor"
    />
    <path
      d="M22.3024 9.2746C22.8724 9.1249 23.2177 8.5392 23.0169 7.9852 22.6139 6.8733 22.0447 5.8268 21.3269 4.8818 20.3936 3.653 19.2274 2.6201 17.8949 1.842 16.5624 1.064 15.0897.556 13.5609.347 12.3852.1864 11.1939.205 10.0276.4005 9.4464.4979 9.1061 1.0865 9.2558 1.6565 9.4055 2.2265 9.9888 2.5608 10.5719 2.4752 11.465 2.3439 12.374 2.3388 13.2719 2.4615 14.5231 2.6325 15.7283 3.0482 16.8188 3.685 17.9093 4.3217 18.8637 5.167 19.6275 6.1726 20.1756 6.8943 20.6179 7.6885 20.9426 8.5308 21.1545 9.0807 21.7324 9.4244 22.3024 9.2746Z"
      fill="currentFill"
    />
  </svg>
)

export const IconXCircle = (props: Props) => (
  <svg {...GLOBAL_PROPS} {...props}>
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
      clipRule="evenodd"
    />
  </svg>
)
