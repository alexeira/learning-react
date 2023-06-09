export default function Horizontal ({ customStyle }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={254}
      height={4}
      fill='none'
      className={`line horizontal ${customStyle}`}
    >
      <path
        stroke='#572D1C'
        strokeLinecap='round'
        strokeWidth={3.5}
        d='M2 2H252'
      />
    </svg>
  )
}
