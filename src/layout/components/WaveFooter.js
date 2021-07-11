import * as React from "react"

function WaveFooter(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
      <path
        fill="#f37fc4"
        d="M0 96l48 10.7C96 117 192 139 288 133.3 384 128 480 96 576 112c96 16 192 80 288 90.7 96 10.3 192-31.7 288-42.7 96-11 192 11 240 21.3l48 10.7v128H0z"
      />
    </svg>
  )
}

export default WaveFooter
