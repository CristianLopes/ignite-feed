import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />

      <div className={styles.profile}>
        <img src='https://avatars.githubusercontent.com/u/13282242?v=4' />

        <strong>Cristian Lopes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
