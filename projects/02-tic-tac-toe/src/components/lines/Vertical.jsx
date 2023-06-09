export default function Vertical ({ customStyle }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={4}
      height={254}
      fill='none'
      className={`line vertical ${customStyle}`}
    >
      <path
        stroke='#572D1C'
        strokeLinecap='round'
        strokeWidth={3.5}
        d='M2 2v250'
      />
    </svg>
  )
}
