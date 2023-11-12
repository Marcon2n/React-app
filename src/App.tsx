import './App.css'
import { useTranslation } from 'react-i18next'
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import ReactCountryFlag from "react-country-flag"
import { CVComponent } from './components/CV/cv-component';


function App() {
  const [language, setLanguage] = useState<string>('vi')
  const { t, i18n } = useTranslation()
  const onChange = (lng:string) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
  }

  return (
    <div className='flex flex-row w-full relative border w-full'>
      <div className="fixed top-2 right-5">
        {language !== 'en'?
        <IconButton onClick={() => onChange('en')}>
            <ReactCountryFlag countryCode="US" svg/>
        </IconButton>:
        <IconButton onClick={() => onChange('vi')}>
            <ReactCountryFlag countryCode="VN" svg/>
        </IconButton>}
      </div>
      <CVComponent t={t}/>
    </div>
  )
}

export default App
