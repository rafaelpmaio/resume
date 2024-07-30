import App from "App"
import { BrowserRouter } from "react-router-dom"
import {
    Provider,
    Link
} from "react-awesome-slider/dist/navigation";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Provider slug="page-one">
                <App />
            </Provider>
        </BrowserRouter>
    )
}