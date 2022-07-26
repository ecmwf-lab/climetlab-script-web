export const DownArrow = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19 13-7 7-7-7m14-8-7 7-7-7"
        />
    </svg>
)

export const UpArrow = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5 11 7-7 7 7M5 19l7-7 7 7"
        />
    </svg>
)
