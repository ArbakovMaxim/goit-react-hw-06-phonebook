import { Container } from 'ui/Container.styled';
import { Contacts } from './components/Contacts/Contacts';
import { FormName } from './components/Form/Form';
import { Section } from 'ui/Section/Section';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <Container>
      <Section title="PhoneBook">
        <FormName />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </Container>
  );
};
