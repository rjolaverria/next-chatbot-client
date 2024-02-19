import { IconProps } from './util'

const ChevronUp: React.FC<IconProps> = ({ className }) => {
    return (
        <svg
            className={`flex-shrink-0 text-black ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 407.436 407.436"
            fill="currentColor"
        >
            <polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 " />
        </svg>
    )
}

export default ChevronUp
