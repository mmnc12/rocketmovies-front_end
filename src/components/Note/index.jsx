/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { Tag } from "../Tag";
import { Star } from "../Star";

export function Note({ data, icon: Icon, ...rest }) {
  return (
    <Container {...rest }>
      <div>
        <h1>{data.title}</h1>
        {Icon && <Star rating={data.rating}></Star>}
      </div>
      <p>
        {data.description}
      </p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}