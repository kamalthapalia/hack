import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import AuthProvider from './context/AuthContext.tsx';
import SocketProvider from './context/SocketContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AuthProvider>
            <SocketProvider>
                <App/>
            </SocketProvider>
        </AuthProvider>
    </BrowserRouter>,
)
