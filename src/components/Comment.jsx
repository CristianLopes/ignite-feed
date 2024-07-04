import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export default function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/diego3g.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title='19 de fevereiro de 2024 ás 16:21:00'
                dateTime='2024-02-19 16:21:00'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏 </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
