import burgerMenu from '../../images/burgerMenu.png'
import PartnerItem from './PartnerItem'
import add from '../../images/add.png'
import { useState } from 'react'

function PartnersTable({
    openAddPartner,
    openDeletePartner,
    idModal,
    setIdModal,
    partners,
    openEditPartner,
    setAddPartners,
}) {
    const rows = []

    if (partners !== undefined) {
        partners.forEach((partner) => {
            rows.push(
                <PartnerItem
                    partner={partner}
                    openDeletePartner={openDeletePartner}
                    key={partner.auth}
                    idModal={idModal}
                    setIdModal={setIdModal}
                    openAddPartner={openAddPartner}
                    openEditPartner={openEditPartner}
                    setAddPartners={setAddPartners}
                />
            )
        })
    }
    return (
        <>
            <table className="tableMenu" id="partners">
                <thead className="table-menu-header" id="partners-header">
                    <tr>
                        <th style={{ width: '20rem' }}>Email</th>
                        <th>Position</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="menu-partners-table-body" id="partners-body">
                    {rows}
                </tbody>
                <tfoot className="logo-table-box" id="partners-footer">
                    <tr>
                        <td>
                            <img
                                src={add}
                                alt="add"
                                className="add-img"
                                onClick={openAddPartner}
                            ></img>
                        </td>
                        <td>
                            <img
                                className="burger-logo-menu"
                                src={burgerMenu}
                                alt="burger-logo-menu"
                            ></img>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default PartnersTable
