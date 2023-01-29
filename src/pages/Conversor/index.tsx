import React, { useState } from 'react';
import { Container ,Content, FormTitle, Form} from './style';
import ContentHeader from '../../components/Content-header';
import Button from '../../components/Button';
import Input from '../../components/Input';


const Conversor: React.FC = () =>{
    const [number, setNumber] = useState({
        value: " "
    });


    const onSubmit =(e: React.FormEvent) =>{
        let mult_real_dolar = (parseFloat(number.value) * 5.11);
        alert(mult_real_dolar.toLocaleString('pt-br', { style: 'currency', currency: 'EUA'}));
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
      ) => {
        setNumber({
          ...number,
          [e.target.name]: e.target.value,
        });
    };

    return( 
        
        <Container>
            <ContentHeader title="Conversor de moedas" lineColor="#fff">
            </ContentHeader>

            <Content>
                <Form onSubmit={onSubmit}>
                    
                    <FormTitle>Real - Dollar</FormTitle>

                     <Input           
                        required              
                        type='number'
                        name="value"
                        value={number.value}  
                        onChange={handleChange}
                        placeholder="Insira o valor em real"
                     />

                    <Button type="submit">Converter</Button>
                  
                </Form>
            </Content>
        </Container>
    );
}

export default Conversor;