import React from "react";
import { Route } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from "date-fns/locale/ru";
import { Message } from "components";
import classNames from "classnames";


const Home = () => (
  <section className="home">
      <Message avatar="https://images.unsplash.com/photo-1612972614627-5b6617d6c1c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
      text="az bjn ;na jndvffdsbsdbjfgsosbdpogsjbobobosjnbjdnzjvfaj;dnb;sjgbn sbn  nbdb"
      date={formatDistanceToNow(new Date(2021, 1, 12, 16, 55), { addSuffix: true, locale: ruLocale})}
      />

    <Message avatar="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80"
      text=";sjgbn sbn  nascdsabsbdagabnsfgn sg snshsnhxnnmsh snsfnngngnbdb"
      date={formatDistanceToNow(new Date(2021, 1, 12, 17, 12), { addSuffix: true, locale: ruLocale})}
      isMe={true}
      />
      <Message avatar="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80"
      text=";sjgbn sbn  nbdb"
      date={formatDistanceToNow(new Date(2021, 1, 12, 17, 48), { addSuffix: true, locale: ruLocale})}
      isMe={true}
      />
      <Message avatar="https://images.unsplash.com/photo-1612972614627-5b6617d6c1c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
      text="az bjn ;na jndvffdsbsdbjfgsosbdpogsjbobobosjnbjdnzjvfaj;dnb;sjgbn sbn  nbdb"
      date={formatDistanceToNow(new Date(2021, 1, 12, 17, 53), { addSuffix: true, locale: ruLocale})}
      />
  </section>
);

export default Home;