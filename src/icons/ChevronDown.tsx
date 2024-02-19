import { IconProps } from './util'

const ChevronDown: React.FC<IconProps> = ({ className }) => {
    return (
        <svg
            className={`flex-shrink-0 text-black ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 407.436 407.436"
            fill="currentColor"
        >
            <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " />
        </svg>
    )
}

export default ChevronDown
