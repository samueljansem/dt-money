import { useState } from 'react';
import { Dashboard, Header, NewTransactionModal } from './components';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyles } from './styles/global';

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <TransactionsProvider>
            <GlobalStyles />

            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

            <Dashboard />

            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
        </TransactionsProvider>
    );
}
