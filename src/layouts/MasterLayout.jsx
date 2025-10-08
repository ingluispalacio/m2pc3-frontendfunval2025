import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";


function MasterLayout() {
    return (
        <div className="min-h-screen flex flex-col  bg-gray-100 font-primary">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default MasterLayout;