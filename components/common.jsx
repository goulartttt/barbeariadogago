export function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export function Rows({ rows, product = false }) {
  return (
    <div className={product ? "price-rows product-rows" : "price-rows"}>
      {rows.map(([name, price]) => (
        <div className="price-row" key={`${name}-${price}`}>
          <strong>{name}</strong>
          <span>{price}</span>
        </div>
      ))}
    </div>
  );
}

export function Logo({ className = "" }) {
  return (
    <span className={`logo-lockup logo-image-lockup ${className}`}>
      <img src="/Imagens/logo-gago.png" alt="Barbearia DoGago" />
      <i>SANTANA · SP</i>
    </span>
  );
}
