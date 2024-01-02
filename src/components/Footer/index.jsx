import {
  Container,
  Content,
  Email,
  Icon,
  Item,
  Maps,
  Phone,
  Title,
} from "./style";

export const Why = () => {
  return (
    <Container>
      <Content>
        <Title>Contact Us</Title>
        <Icon>
          <Maps />
          <Item>
            Bunyodkor kochasi, Chilonzor 64-dom, 2-etaj, 1-hone, Webbrain
            Academy
          </Item>
        </Icon>
        <Icon>
          <Phone />
          <Item>998 33 576 2020</Item>
        </Icon>
        <Icon>
          <Email />
          <Item> webbrain academy@gmail.com</Item>
        </Icon>
      </Content>
      <Content>
        <Title>Wide Renge Of Properties</Title>

        <Item> Uzbekistan</Item>
        <Item> India</Item>
        <Item> UAE</Item>
        <Item> Korea</Item>
      </Content>
      <Content>
        <Title>Financing Made Easy</Title>

        <Item>Frontend </Item>
        <Item>Backend </Item>
        <Item>Mobile </Item>
        <Item>Flutter </Item>
        <Item>Android </Item>
      </Content>
      <Content>
        <Title>See Neighborhoods</Title>

        <Item>t.me/webbrain_admin</Item>
        <Item>t.me/webbrain_ceo</Item>
        <Item>instagram.com/webbrain_admin</Item>
        <Item>instagram.com/smd_94</Item>
      </Content>
    </Container>
  );
};

export default Why;
