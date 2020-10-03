import React from 'react';

import {useStore} from "./hooks/store";

import './App.scss'

//fonts
import './assets/fonts/stylesheet.css'

import {Sidebar} from "./components/Sidebar/Sidebar";
import {SidebarItem} from "./components/Sidebar/SidebarItem/SidebarItem";
import {SidebarMenu} from "./components/Sidebar/SidebarMenu/SidebarMenu";
import {Chat} from "./components/Chat/Chat";

function App() {
  const {state, actions} = useStore()

  return (
    <div className='app'>
      <Sidebar>
        {/*<SidebarMenu name='home'>*/}
        {/*  <SidebarItem name='welcome' id='1'/>*/}
        {/*</SidebarMenu>*/}
        {/*<SidebarMenu name='info'>*/}
        {/*  <SidebarItem name='info test' id='7'/>*/}
        {/*</SidebarMenu>*/}
        {/*<SidebarMenu name='work'>*/}
        {/*  <SidebarItem name='work test' id='2'/>*/}
        {/*  <SidebarItem name='work test' id='3'/>*/}
        {/*  <SidebarItem name='work test' id='4'/>*/}
        {/*  <SidebarItem name='work test' id='5'/>*/}
        {/*  <SidebarItem name='work test' id='6'/>*/}
        {/*</SidebarMenu>*/}

        {/*{state.server.map(s=> <SidebarMenu name={s.name} key={s.id}>*/}
        {/*  {state.rooms.map(r=> r.serverId === s.id ? <SidebarItem key={r.id} name={r.name} id={r.id}/> : null)}*/}
        {/*</SidebarMenu>)}*/}
        {state.server.map(s=> <SidebarMenu name={s.name} key={s.id}>
          {s.rooms && s.rooms.map(r=> <SidebarItem key={r.id} name={r.name} id={r.id}/>)}
        </SidebarMenu>)}
      </Sidebar>

      <Chat/>

    </div>
  );
}

export default App;
