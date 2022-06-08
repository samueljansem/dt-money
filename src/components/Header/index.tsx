import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logo} alt="dtmoney logo" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Adicionar transação
                </button>
            </Content>
        </Container>
    );
}
