import NavBars from '../NavBars'
import Header from './Header'
import './Admin.css'
import PartnersTable from './PartnersTable'
import Modals from '../Modals'
import { useModal } from '../useModal'
import { useState } from 'react'

function Partners() {
    const [isAddPartner, openAddPartner, closeAddPartner] = useModal(false)
    const [isOpenDeletePartner, openDeletePartner, closeDeletePartner] =
        useModal(false)
    const [idModal, setIdModal] =useState('')
    return (
        <>
            <NavBars />
            <Modals
                isAddPartner={isAddPartner}
                closeAddPartner={closeAddPartner}
                isOpenDeletePartner={isOpenDeletePartner}
                closeDeletePartner={closeDeletePartner}
                idPartner={idModal}
            />
            <div className="partners-layout">
                <Header />
                <PartnersTable
                    openAddPartner={openAddPartner}
                    openDeletePartner={openDeletePartner}
                    idModal={idModal}
                    setIdModal={setIdModal}

                />
            </div>
        </>
    )
}

export default Partners
