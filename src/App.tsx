import './App.css'

const navLinks = [
  { label: 'Центр', href: '#hero' },
  { label: 'Помощь', href: '#mission' },
  { label: 'Психолог', href: '#leader' },
  { label: 'Поддержка', href: '#support' },
]

function App() {
  return (
    <div className="page">
      <header className="header">
        <nav className="nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero__overlay" />
          <div className="hero__content">
            <h1>Центр социальной реабилитации</h1>
            <p className="hero__tagline">военный психолог</p>
          </div>
        </section>

        <section id="mission" className="mission">
          <p>
            Беспокоят ли вас флешбеки с войны? Не можете заснуть без алкоголя?
            Чувствуете, что близкие вас не понимают? Меня зовут Денис. Я помогаю
            участникам СВО и их семьям вернуться к нормальной жизни без постоянной
            тревоги и страха. Вы сможете контролировать свои эмоции, наладите
            отношения с семьей и почувствуете себя дома в безопасности.
          </p>
        </section>

        <section id="leader" className="leader">
          <div className="leader__text">
            <h2>Давыдов Денис</h2>
            <p className="leader__role">
              Руководитель Центра социальной реабилитации
            </p>
            <span className="leader__divider" />
            <p>
              Я работаю военным психологом и знаю, как травматический опыт службы
              меняет восприятие себя и мира. В Центре социальной реабилитации мы
              выстраиваем индивидуальные программы, которые позволяют постепенно
              вернуть чувство контроля, восстановить сон и научиться проживать
              сложные воспоминания без разрушительных реакций. Вместе с семьёй мы
              учимся говорить о пережитом и находить поддержку друг в друге, чтобы
              каждый участник СВО чувствовал себя дома принятым и защищённым.
            </p>
          </div>
          <div className="leader__photo">
            <img src="/usefull/hero.jpg" alt="Давыдов Денис" />
          </div>
        </section>

        <section id="support" className="donation">
          <p className="donation__title">Вы не одни</p>
          <h3>Спасибо за доверие и готовность меняться!</h3>
          <img
            className="donation__qr"
            src="/usefull/photo_2025-11-15_13-19-14.jpg"
            alt="QR-код для пожертвований"
          />
          <div className="donation__note">
            <p>Пусть каждый день станет немного спокойнее, чем вчера.</p>
            <p>Мы рядом, чтобы поддержать, выслушать и помочь сделать следующий шаг.</p>
          </div>
          <a className="donation__cta" href="https://e-omlet.vercel.app/" target="_blank" rel="noreferrer">
            Made by
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
