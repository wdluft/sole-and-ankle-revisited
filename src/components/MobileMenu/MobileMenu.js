/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label='Mobile Menu'>
        <UnstyledButton onClick={onDismiss}>
          <VisuallyHidden>Close</VisuallyHidden>
          <Icon id='close' strokeWidth={1} />
        </UnstyledButton>
        <nav>
          <a href='/sale'>Sale</a>
          <a href='/new'>New&nbsp;Releases</a>
          <a href='/men'>Men</a>
          <a href='/women'>Women</a>
          <a href='/kids'>Kids</a>
          <a href='/collections'>Collections</a>
        </nav>
        <footer>
          <a href='/terms'>Terms and Conditions</a>
          <a href='/privacy'>Privacy Policy</a>
          <a href='/contact'>Contact Us</a>
        </footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0 0% 0%/ 0.5);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default MobileMenu;
