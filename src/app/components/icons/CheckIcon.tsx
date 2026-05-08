type Props = {
    className?: string;
};

export default function CheckIcon({ className }: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 11"
            fill="none"
            className={className}
        >
            <path
                d="M1.00024 7.10733C1.00024 7.10733 3.00024 8.28057 4.00024 10.0002C4.00024 10.0002 7.00024 3.25018 11.0002 1.00018"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}