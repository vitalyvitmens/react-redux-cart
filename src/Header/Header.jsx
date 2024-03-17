import { useStore } from 'react-redux'

export function Header() {
  const store = useStore()

  const onTitleClick = () => {
    console.log('Вы кликнули на загловок', store.getState())
  }

  return (
    <div className="header" onClick={onTitleClick}>
      <h1>Your cart</h1>
      <p>"I say let the world go to hell, but I should always have my tea."</p>
      <p>― Fyodor Dostoyevsky, Notes from Underground</p>
    </div>
  )
}
