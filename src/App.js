import './style/style.scss';
import About from "./components/About/about";
import Hero from "./components/Hero/hero";
import Contact from "./components/contact/Contact";
import TabsGen from "./components/Tabs/tabs";
import Header from "./components/header";

function App() {
    return (
        <>
            <div className="App">
                <Hero/>
                <Header/>
                <About/>
                <TabsGen/>
                <Contact/>
            </div>
        </>
    );
}

export default App;
