import { Grid, Image } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link"

export default function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item, idx) => (
            <Grid.Column key={idx}>
              <Link href="/view/[id]" as={`/view/${item.id}`}>
              <a>
              <div className={styles.wrap}>
                <img
                  className={styles.img_item}
                  src={item.image_link}
                  alt={item.name}
                />
                <strong className={styles.tit_item}>{item.name}</strong>
                <span className={styles.txt_info}>
                  {item.category} {item.product_type}
                </span>
                <strong className={styles.num_price}>${item.price}</strong>
              </div>
              </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
