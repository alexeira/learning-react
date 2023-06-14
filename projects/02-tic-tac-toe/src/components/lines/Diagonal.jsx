export default function Diagonal ({ customStyle }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={255}
      height={255}
      fill='none'
      className={`diagonal-line ${customStyle}`}
    >
      <path
        stroke='#572D1C'
        strokeLinecap='round'
        strokeWidth={3.5}
        d='M2 2L253.023 253.023'
      />
    </svg>
  )
}
