import React, {useState, useMemo} from 'react';
import { Container ,Content, FormTitle, Form} from './style';
import ContentHeader from '../../components/Content-header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SelectInput from '../../components/select';

const Conversor: React.FC = () =>{

    return( 
        <Container>
            <ContentHeader title="Conversor" lineColor="#fff">
            </ContentHeader>

            <Content>
                <Form >
                    <FormTitle>Formulário</FormTitle>
                    <Input 
                        required
                        placeholder="Valor"
                    />
                    <Button type="submit">
                            Converter
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

export default Conversor;