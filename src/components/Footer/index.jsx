import React from 'react';
import { Container, Content, Icon } from './style';

export const Footer = () => {

  return (
    <Container>
      <Content>
        <Content.Title>Contact</Content.Title>
        <Content.Item>
          <Icon.Email /> Manzil...
        </Content.Item>
        <Content.Item>
          {' '}
          <Icon.Phone />99 7182192
        </Content.Item>
        <Content.Item>
          <Icon.Email />uylar@gmail.com
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Viloyatlar</Content.Title>

        <Content.Item>Toshkent</Content.Item>
        <Content.Item> Sirdaryo</Content.Item>
        <Content.Item> Jizzax</Content.Item>
        <Content.Item> Samarqand</Content.Item>
        <Content.Item> Buxoro</Content.Item>
        <Content.Item> Qashqadaryo</Content.Item>
        <Content.Item> Surxandaryo</Content.Item>
      </Content>
      <Content>
        <Content.Title>Viloyatlar</Content.Title>

        <Content.Item>Andijon </Content.Item>
        <Content.Item>Namangan </Content.Item>
        <Content.Item>Farg'ona </Content.Item>
        <Content.Item>Xorazim </Content.Item>
        <Content.Item>Navoiy </Content.Item>
        <Content.Item>Nukus </Content.Item>
      </Content>
      <Content>
        <Content.Title>Contacts</Content.Title>

        <Content.Item>Uylar...</Content.Item>
        <Content.Item>Uylar...</Content.Item>
        <Content.Item>Uylar...</Content.Item>
        <Content.Item>Uylar...</Content.Item>
      </Content>
    </Container>
  );
};

export default Footer;
