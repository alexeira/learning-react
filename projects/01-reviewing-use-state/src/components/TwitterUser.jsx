import { useState } from 'react'
import Verified from './Verified'

const MAX_LENGTH_NAME = 13

export default function TwitterUser ({ userName, name, isVerified }) {
  const [isFollowing, setIsFollowing] = useState(false)

  const followText = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followed-btn' : 'tw-follow-btn'

  const truncateName = (name) => {
    if (name.length <= MAX_LENGTH_NAME) return name
    return `${name.substring(0, MAX_LENGTH_NAME - 1)}...`
  }

  return (
    <section>
      <header>
        <img alt='user-icon' src={`https://unavatar.io/${userName}`} />
        <div>
          <strong>
            {truncateName(name)}
            {isVerified && <Verified />}
          </strong>
          <span>@{userName}</span>
        </div>
      </header>

      <aside>
        <button
          onClick={() => setIsFollowing(!isFollowing)}
          className={buttonClassName}
        >
          <span className='tw-followed-text'>{followText}</span>
          <span className='tw-unfollow-text'>Dejar de seguir</span>
        </button>
      </aside>
    </section>
  )
}
