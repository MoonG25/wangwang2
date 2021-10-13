import styles from './ads.module.css';
/**
 * @todo 광고 보여줄 영역
 */
const Ads: React.FC = (props) => {
  return (
    <div className={styles.container}>
      {props.children || <span className={styles.hint}>여기에 광고를 넣어주세요.</span>}
    </div>
  )
}

export default Ads;