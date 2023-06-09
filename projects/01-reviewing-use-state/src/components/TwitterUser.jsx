export default function TwitterUser ({ userName, name }) {
  return (
    <>
      <section>
        <header>
          <img alt='user-icon' src={`https://unavatar.io/${userName}`} />
          <div>
            <strong>{name}</strong>
            <span>@{userName}</span>
          </div>
        </header>

        <aside>
          <button>Seguir</button>
        </aside>
      </section>
    </>
  )
}
