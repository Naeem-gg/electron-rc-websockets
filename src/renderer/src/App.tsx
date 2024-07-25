import { Button } from '@nextui-org/react'
import Versions from './components/Versions'
import { ThemeSwitcher } from './components/ThemeSwitcher'

function App(): JSX.Element {
  const count = 10
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping', count)

  return (
    <>
      <ThemeSwitcher />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        <Button variant="ghost" color="secondary" onClick={ipcHandle}>
          Hurray!
        </Button>
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
