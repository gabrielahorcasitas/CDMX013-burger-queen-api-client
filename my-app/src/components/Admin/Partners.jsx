import NavBars from '../NavBars'
import Header from './Header'
import './Admin.css'
import PartnersTable from './PartnersTable'
import Modals from '../Modals'
import { useModal } from '../useModal'

function Partners() {
    const [isAddPartner, openAddPartner, closeAddPartner] = useModal(false)
    const [isOpenDeletePartner, openDeletePartner, closeDeletePartner] =
        useModal(false)
    return (
        <>
            <NavBars />
            <Modals
                isAddPartner={isAddPartner}
                closeAddPartner={closeAddPartner}
                isOpenDeletePartner={isOpenDeletePartner}
                closeDeletePartner={closeDeletePartner}
            />
            <div className="partners-layout">
                <Header />
                <PartnersTable
                    openAddPartner={openAddPartner}
                    openDeletePartner={openDeletePartner}
                />
            </div>
        </>
    )
}

export default Partners
