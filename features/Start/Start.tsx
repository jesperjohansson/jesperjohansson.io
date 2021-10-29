import styles from '../../styles/Start.module.css'

function Start() {
  return (
    <>
      <h1 className={styles.hugeTitle}>Hello!</h1>
      <h2 className={styles.hugeTitleSub}>... and welcome to my website!</h2>
      <section className={styles.intro}>
        <h1 className={styles.introTitle}>My name is Jesper Johansson</h1>
        <p>I&apos;m a developer.</p>
      </section>
    </>
  )
}

export default Start
