import React from "react";
import ReactDOM from "react-dom";

import styled from "@emotion/styled";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./images/", false, /\.(png|jpe?g|svg)$/)
);

const Content1 = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 0.17fr 0.83fr;
  width: 100%;
  height: 840px;
  opacity: 1;
  z-index: 1;
`;

const Aside = styled.div`
  display: flex;
  align-items: center;
`;
const Aside_list = styled.ul`
  padding: 0;
`;
const Aside__element = styled.li`
  list-style-type: none;
  margin-top: 20px;
`;
const Aside__link = styled.a`
  position: relative;
  display: inline-block;
  font: ${(props) =>
    props.primary
      ? "normal bold 14px/16px Roboto"
      : "normal 300 13px/15px Roboto"};
  text-transform: ${(props) => (props.primary ? "uppercase" : "")};
  transition: color 0.2s linear;
  text-decoration: none;
  letter-spacing: 0.03em;
  color: #262525;
  &:after {
    content: "";
    position: relative;
    display: block;
    left: -5px;
    top: -7px;
    height: 9px;
    width: ${(props) => (props.primary ? "calc(100% + 10px)" : "0")};
    background-color: #ebd8cc;
    opacity: 1;
    z-index: -1;
    transition-duration: 0.8s;
  }

  &:hover:after {
    width: calc(100% + 10px);
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: flex-end;

  height: 840px;
  z-index: 0;
`;
const Description = styled.div`
  position: relative;
  left: 0;
  background-color: #f0f0f0;
  flex-grow: 5;
  min-width: 558px;
`;
const Description__item = styled.div`
  position: relative;
  top: 155px;
  transition-duration: 0.8s;
  height: 0px;
  overflow: hidden;
  opacity: ${(props) => (props.primary ? "1" : "0")};
  height: ${(props) => (props.primary ? "440px" : "0px")};
`;
const Description__main_text = styled.div`
  padding-top: 175px;
  padding-left: 178px;
  width: 435px;
  font: normal 800 44px/54px Gilroy;

  letter-spacing: 0.004em;
  text-transform: uppercase;

  color: #262525;
`;
const Description__semi_text = styled.div`
  position: relative;
  top: 40px;
  margin-left: 180px;
  width: 435px;
  overflow: hidden;
  word-break: inherit;

  font: normal normal 18px/30px Roboto;
  letter-spacing: -0.01em;
  text-transform: none;

  color: #262525;
`;
const Description__navigacia = styled.div`
  position: absolute;
  z-index: 1;
  top: 660px;
  left: 185px;
`;

const Description__navigacia_firstnumber = styled.span`
  font: normal normal 18px/30px Gilroy;
`;

const Description__navigacia_second = styled.span`
  font: normal normal 18px/30px Gilroy-lite;
`;

const Picture = styled.div`
  overflow: hidden;
  height: 840px;
  flex-grow: 5;
  width: 758px;
  max-width: 758px;
`;
const Picture__slaider = styled.img`
  display: block;
  width: 100%;
  transition-duration: 0.8s;
  opacity: ${(props) => (props.primary ? "1" : "0")};
  height: ${(props) => (props.primary ? "840px" : "0px")};
`;

export default class divmain1 extends React.Component {
  constructor(props) {
    super();
    this.state = { description__item_position: 0 };
  }

  render() {
    return (
      <Content1>
        <Aside>
          <Aside_list>
            <Aside__element>
              <Aside__link
                primary={this.state.description__item_position == 0}
                href="#"
                onClick={() => this.setState({ description__item_position: 0 })}
              >
                {" "}
                Архитектура{" "}
              </Aside__link>
            </Aside__element>
            <Aside__element>
              <Aside__link
                primary={this.state.description__item_position == 1}
                href="#"
                onClick={() => this.setState({ description__item_position: 1 })}
              >
                {" "}
                Благоустройство{" "}
              </Aside__link>
            </Aside__element>
            <Aside__element>
              <Aside__link
                primary={this.state.description__item_position == 2}
                href="#"
                onClick={() => this.setState({ description__item_position: 2 })}
              >
                {" "}
                Безопастность{" "}
              </Aside__link>
            </Aside__element>
            <Aside__element>
              <Aside__link
                primary={this.state.description__item_position == 3}
                href="#"
                onClick={() => this.setState({ description__item_position: 3 })}
              >
                {" "}
                Инженерия{" "}
              </Aside__link>
            </Aside__element>
            <Aside__element>
              <Aside__link
                primary={this.state.description__item_position == 4}
                href="#"
                onClick={() => this.setState({ description__item_position: 4 })}
              >
                {" "}
                Инфраструктура{" "}
              </Aside__link>
            </Aside__element>
            <Aside__element>
              <Aside__link
                primary={this.state.description__item_position == 5}
                href="#"
                onClick={() => this.setState({ description__item_position: 5 })}
              >
                Транспортная доступность
              </Aside__link>
            </Aside__element>
          </Aside_list>
        </Aside>
        <Main>
          <Description>
            <Description__item
              primary={this.state.description__item_position == 0}
            >
              <Description__main_text>Архитектура</Description__main_text>
              <Description__semi_text>
                Оригинальная архитктура жилого комплекса бизнес-класса
                «Первомайская» формирует современный стиль жизни qw wq w wd wd w
                w dwd
              </Description__semi_text>
            </Description__item>
            <Description__item
              primary={this.state.description__item_position == 1}
            >
              <Description__main_text>Благоустройство</Description__main_text>
              <Description__semi_text>
                Запроектированные большие окна, которые пропускают много
                солнечного света, наполнят Ваши квартиры теплотой и уютом текст
                тексттексттексттексттексттексттексттекст
              </Description__semi_text>
            </Description__item>
            <Description__item
              primary={this.state.description__item_position == 2}
            >
              <Description__main_text>Безопастность</Description__main_text>
              <Description__semi_text>
                Современный двор европейского уровня - територия для детей, игр
                на свежем воздуху и вечерних текст
                тексттексттексттексттексттексттексттекст
              </Description__semi_text>
            </Description__item>
            <Description__item
              primary={this.state.description__item_position == 3}
            >
              <Description__main_text>Инженерия</Description__main_text>
              <Description__semi_text>
                Оригинальная архитектура жилого комплекса бизнес-класса
                «Первомайская» формирует современный стиль жизни текст
                тексттексттексттексттексттексттексттекст
              </Description__semi_text>
            </Description__item>
            <Description__item
              primary={this.state.description__item_position == 4}
            >
              <Description__main_text>Инфраструктура</Description__main_text>
              <Description__semi_text>
                Прекрасный вариант для тех, кто предпочитает жить в спокойном
                районе среди интеллигенции, но при этом чувствовать ритм
                мегаполиса текст тексттексттексттексттексттексттексттекст
              </Description__semi_text>
            </Description__item>
            <Description__item
              primary={this.state.description__item_position == 5}
            >
              <Description__main_text>
                Транспортная доступность
              </Description__main_text>
              <Description__semi_text>
                Жилой комплекс «Первомайска» расположен в престижном
                Академическом районе
              </Description__semi_text>
            </Description__item>
            <Description__navigacia>
              <Description__navigacia_firstnumber>
                {this.state.description__item_position + 1}
              </Description__navigacia_firstnumber>
              <Description__navigacia_second>/6</Description__navigacia_second>
            </Description__navigacia>
          </Description>
          <Picture>
            <Picture__slaider
              primary={this.state.description__item_position == 5}
              src={images[5]}
            />
            <Picture__slaider
              primary={this.state.description__item_position == 4}
              src={images[4]}
            />
            <Picture__slaider
              primary={this.state.description__item_position == 3}
              src={images[3]}
            />
            <Picture__slaider
              primary={this.state.description__item_position == 2}
              src={images[2]}
            />
            <Picture__slaider
              primary={this.state.description__item_position == 1}
              src={images[1]}
            />
            <Picture__slaider
              primary={this.state.description__item_position == 0}
              src={images[0]}
            />
          </Picture>
        </Main>
      </Content1>
    );
  }
}
