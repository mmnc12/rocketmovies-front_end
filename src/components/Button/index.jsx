/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Button({ title, icon: Icon, loading=false, ...rest}) {
  return (
    <Container 
      type="button"
      
      disabled={loading}
      {...rest}
      >
        {Icon && <Icon size={24} />}
        {loading ? "carregando..." : title}
    </Container>
  )
}