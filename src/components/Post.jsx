import Comment from './Comment'
import styles from './Post.module.css'

export default function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src='https://avatars.githubusercontent.com/u/13282242?v=4'
              alt=''
            />

            <div className={styles.authorInfo}>
              <strong>Cristian Lopes</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time
            title='19 de fevereiro de 2024 ás 16:21:00'
            dateTime='2024-02-19 16:21:00'
          >
            Publicado há 1h
          </time>
        </header>

        <main className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do é DoctorCare 🚀
          </p>
          <p>
            👉 <a href='#'> jane.design/doctorcare</a> projeto
          </p>
          <p>
            <a href='#'>#novoprojeto</a> <a href='#'> #nlw</a>{' '}
            <a href='#'>#rocketseat</a>
          </p>
        </main>

        <form className={styles.commentForm}>
          <strong>Deixe seu comentário</strong>

          <textarea placeholder='Deixe um comentário' />

          <footer>
            <button type='submit'> Publicar </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  )
}
