import Image from "next/image";
import { zero18 } from "@/data/zero18";

function Route({ children = "Como chegar", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <a className={className} href={zero18.mapsUrl} target="_blank" rel="noopener noreferrer">{children} <span aria-hidden="true">↗</span></a>;
}

function Kicker({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="kicker"><span>{number}</span>{children}</p>;
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConvenienceStore",
    name: zero18.name,
    address: { "@type": "PostalAddress", streetAddress: zero18.street, addressLocality: zero18.city, addressRegion: "SP", postalCode: zero18.postalCode, addressCountry: "BR" },
    sameAs: [zero18.instagramUrl, zero18.mapsUrl],
    openingHoursSpecification: zero18.schemaHours,
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Zero18, início"><Image src="/zero18/logo-zero18.png" alt="Logo oficial da Zero18" width={48} height={48} priority /><span>ZERO<b>18</b></span></a>
      <nav className="nav" aria-label="Navegação principal"><a href="#zero18">A Zero18</a><a href="#bebidas">Bebidas</a><a href="#galeria">Galeria</a><a href="#localizacao">Localização</a></nav>
      <Route className="header-cta" />
      <details className="menu"><summary aria-label="Abrir menu"><span></span><span></span><span></span></summary><nav aria-label="Navegação mobile"><a href="#zero18">A Zero18</a><a href="#bebidas">Bebidas</a><a href="#galeria">Galeria</a><a href="#localizacao">Localização</a><Route /></nav></details>
    </header>
    <main id="conteudo">
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-image"><Image src="/zero18/heineken-zero18.png" alt="Duas cervejas Heineken geladas em frente à Zero18" fill priority sizes="(max-width: 760px) 100vw, 58vw" /></div>
        <div className="hero-overlay"></div>
        <div className="hero-body wrap"><p className="hero-kicker"><i></i> PRESIDENTE PRUDENTE · SP</p><h1 id="hero-title">SUA PARADA<br />ANTES DO<br /><em>ROLÊ.</em></h1><p className="hero-description">Bebida gelada, encontro marcado e o clima certo pra começar. A Zero18 espera por você no Jardim Maracanã.</p><div className="hero-actions"><Route className="button orange" /><a href="#zero18" className="inline-link">Conheça a Zero18 <span aria-hidden="true">↓</span></a></div></div>
        <span className="hero-vertical" aria-hidden="true">CONVENIÊNCIA · BEBIDAS · ENCONTRO</span><span className="hero-index" aria-hidden="true">01 / ZERO18</span>
      </section>
      <div className="marquee" aria-hidden="true">ZERO18 <b>✦</b> SUA CONVENIÊNCIA NO MARACANÃ <b>✦</b> ZERO18 <b>✦</b> SUA CONVENIÊNCIA NO MARACANÃ <b>✦</b></div>
      <section className="intro section wrap" id="zero18"><Kicker number="01">A ZERO18</Kicker><div className="intro-grid"><h2>O PONTO DE<br /><em>PARTIDA</em> DO<br />SEU ROLÊ.</h2><div className="intro-copy"><p>Tem lugar que combina com o momento. Na Zero18, você encontra bebidas para escolher com calma, levar pro encontro e brindar do seu jeito.</p><p>Uma conveniência de bairro com energia de quem sabe que toda boa história começa em algum lugar.</p><a href={zero18.instagramUrl} target="_blank" rel="noopener noreferrer" className="lined-link">Acompanhe no Instagram ↗</a></div></div></section>
      <section className="drinks" id="bebidas"><div className="drinks-image"><Image src="/zero18/beefeater-zero18.png" alt="Garrafas de gin Beefeater na Zero18" fill sizes="(max-width: 760px) 100vw, 52vw" /></div><div className="drinks-body"><Kicker number="02">O QUE VOCÊ ENCONTRA</Kicker><h2>PRA<br />BRINDAR.<br /><em>PRA LEVAR.</em></h2><p>Cervejas, gin, destilados e bebidas para acompanhar seus planos.</p><div className="drink-list"><span>CERVEJAS</span><span>GIN</span><span>DESTILADOS</span><span>COPÃO</span></div><Route className="lined-link">Passe na Zero18</Route></div></section>
      <section className="copao section wrap" aria-labelledby="copao-title"><Kicker number="03">UM CLÁSSICO DA CASA</Kicker><div className="copao-grid"><div className="copao-body"><h2 id="copao-title">COPÃO<br /><em>É AQUI!</em></h2><p>O encontro tem endereço. O copão também.</p><Route className="button dark">Encontrar a Zero18</Route></div><div className="copao-image"><Image src="/zero18/copao-zero18.png" alt="Arte oficial da Zero18: Copão é aqui!" fill sizes="(max-width: 760px) 100vw, 48vw" /></div></div></section>
      <section className="gallery section wrap" id="galeria"><div className="gallery-heading"><div><Kicker number="04">POR DENTRO DA ZERO18</Kicker><h2>O CLIMA<br /><em>É NOSSO.</em></h2></div><p>Da escolha da bebida à parada antes de sair: a Zero18 faz parte do caminho.</p></div><div className="gallery-grid"><figure className="gallery-one"><Image src="/zero18/heineken-zero18.png" alt="Cervejas em frente à fachada da Zero18" fill sizes="(max-width: 760px) 100vw, 50vw" /><figcaption>01 / SUA PARADA</figcaption></figure><figure className="gallery-two"><Image src="/zero18/beefeater-zero18.png" alt="Seleção de gins na Zero18" fill sizes="(max-width: 760px) 100vw, 30vw" /><figcaption>02 / SUA ESCOLHA</figcaption></figure><figure className="gallery-three"><Image src="/zero18/fachada-zero18.png" alt="Fachada real da Zero18 ao entardecer" fill sizes="(max-width: 760px) 100vw, 48vw" /><figcaption>03 / NOSSO ENDEREÇO</figcaption></figure></div></section>
      <section className="rating wrap" aria-label="Avaliação no Google"><div className="rating-score">{zero18.rating.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}<span>★★★★★</span></div><div><strong>BEM AVALIADA NO GOOGLE.</strong><p>Nota {zero18.rating.toLocaleString("pt-BR", { minimumFractionDigits: 1 })} em {zero18.reviewCount} avaliações da Conveniência Zero18.</p></div><Route className="lined-link">Ver no Google Maps</Route></section>
      <section className="location section wrap" id="localizacao"><div className="location-body"><Kicker number="05">ONDE NOS ENCONTRAR</Kicker><h2>SEU PONTO<br />NO <em>JARDIM<br />MARACANÃ.</em></h2><address><strong>{zero18.street}</strong><br />{zero18.neighborhood}<br />{zero18.city} – SP · CEP {zero18.postalCode}</address><Route className="button orange">Traçar rota</Route></div><div className="location-aside"><div className="location-image"><Image src="/zero18/fachada-zero18.png" alt="Fachada da Zero18 na Rua Júlio Peruche" fill sizes="(max-width: 760px) 100vw, 42vw" /></div><Route className="map-bar">Ver no Google Maps</Route></div></section>
      <section className="hours section wrap"><div><Kicker number="06">PLANEJE SUA VISITA</Kicker><h2>QUANDO<br /><em>PASSAR.</em></h2></div><div className="hours-list">{zero18.hours.map(item => <div className="hour" key={item.day}><span>{item.day}</span><strong>{item.time}</strong></div>)}<p>Horários consultados no Google. Confira antes de sair.</p></div></section>
      <section className="last-cta section wrap"><p className="last-kicker">A GENTE SE VÊ NA ZERO18</p><h2>SEU ROLÊ<br />PODE COMEÇAR<br /><em>AQUI.</em></h2><Route className="button orange" /><span className="giant" aria-hidden="true">18</span></section>
    </main>
    <footer className="footer wrap"><div className="footer-top"><a href="#inicio" className="footer-brand"><Image src="/zero18/logo-zero18.png" alt="Logo oficial da Zero18" width={64} height={64} /><span>ZERO18</span></a><p>Sua conveniência no Jardim Maracanã.<br />Presidente Prudente · SP</p><div><a href={zero18.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={zero18.mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps ↗</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} CONVENIÊNCIA ZERO18</span><span>BEBA COM MODERAÇÃO.</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div></footer>
  </>;
}
