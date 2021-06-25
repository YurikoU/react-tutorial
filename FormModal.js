import React from 'react';
import styled from 'styled-components';
import { Modal } from './components/modal';
import { Button } from './components/button';



//styled-componentsでCSS実装---------------------------------------------------------------------------------------
const Container = styled.div`
    width: 240px;
    border-radius: 10px;
    padding: 24px 36px;
    background-color: white;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 24px;
`
//End of styled-components---------------------------------------------------------------------------------------


export const FormModal = ({ confirm, cancel }) => {
    return (
        <Modal>
            <Container>
                <p> Are you sure to add the new language to the existing list? </p>
                <ButtonWrapper>
                    <Button onClick={ cancel }> cancel </Button>
                    <Button onClick={ confirm }> OK </Button>
                </ButtonWrapper>
            </Container>
        </Modal>
    );
};