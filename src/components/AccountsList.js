import React, { Component } from 'react'
import AccountListItem from './AccountListItem'

class AccountsList extends Component {
  render() {
    const { onAccountChange, onAccountUpdate, onDelete, season, accounts } = this.props

    return (
      <ul className="list-style-none mb-4">
        {accounts.map(account => (
          <AccountListItem
            key={account._id}
            season={season}
            account={account}
            onDelete={onDelete}
            onAccountChange={onAccountChange}
            onAccountUpdate={onAccountUpdate}
          />
        ))}
        {accounts.length < 1 ? (
          <li className="text-gray text-italic">
            No accounts have been added.
          </li>
        ) : ''}
      </ul>
    )
  }
}

export default AccountsList
