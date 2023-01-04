import React, {useState, useMemo} from 'react';
import { Container ,Content} from './style';
import ContentHeader from '../../components/Content-header';


const Dashboard: React.FC = () =>{

    return( 
        <Container>
            <ContentHeader title="Conversor" lineColor="#fff">
              
            </ContentHeader>

            <Content>
                
            </Content>
        </Container>
    );
}

export default Dashboard;