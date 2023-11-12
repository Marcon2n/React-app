import './App.css'
import { useTranslation } from 'react-i18next'
import { SignIn } from './components/sign-in/sign-in'


function App() {
  const { t, i18n } = useTranslation()

  return (
    <div>
      {/* <SignIn t={t}/> */}
      <div>{t('test')}</div>
      <div className="flex flex-row gap-x-2">
        <button className="border p-2" onClick={() => i18n.changeLanguage('en')}>English</button>
        <button className="border p-2" onClick={() => i18n.changeLanguage('vi')}>Vietnamese</button>
      </div>
    </div>
  )
}

export default App
