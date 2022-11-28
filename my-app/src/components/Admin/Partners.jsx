import NavBars from '../NavBars'
import Header from './Header'
import './Admin.css'
import PartnersTable from './PartnersTable'
function Partners() {
    return (
        <>
            <NavBars />
            <div className="partners-layout">
                <Header />
                <PartnersTable />
            </div>
        </>
    )
}

export default Partners
