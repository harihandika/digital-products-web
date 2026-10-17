import { Icon } from "@/components/icon";

export function HeroIllustration() {
  return (
    <figure
      className="hero-art"
      aria-label="Ilustrasi alur relay permintaan pelanggan Find People"
    >
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="floating-tag tag-learn">
        <span className="mini-icon">
          <Icon name="learn" />
        </span>
        <div>
          <strong>Belajar lebih terarah</strong>
          <span>Cerdas AI · Coming Soon</span>
        </div>
        <Icon name="spark" />
      </div>
      <div className="relay-window">
        <div className="window-bar">
          <div className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>CONTOH ALUR PRODUK</span>
          <Icon name="plus" />
        </div>
        <div className="relay-heading">
          <span className="relay-logo">
            <Icon name="chat" />
          </span>
          <div>
            <strong>Find People</strong>
            <span>Permintaan kecil. Alur yang jelas.</span>
          </div>
          <span className="illustration-badge">Ilustrasi</span>
        </div>
        <div className="example-message">
          <span>CONTOH PESAN PENGGUNA</span>
          <p>
            Halo, bagaimana cara memulai
            <br />
            layanan untuk usaha saya?
          </p>
          <span className="message-check">
            <Icon name="check" /> Diteruskan ke admin
          </span>
        </div>
        <div className="flow-line">
          <span className="flow-node">
            <Icon name="chat" />
          </span>
          <span className="flow-dash" />
          <span className="flow-label">Ditinjau admin</span>
          <span className="flow-dash" />
          <span className="flow-node flow-complete">
            <Icon name="check" />
          </span>
        </div>
        <div className="example-reply">
          <span>CONTOH BALASAN ADMIN</span>
          <p>
            Kami bantu jelaskan langkahnya.
            <br />
            Apa kebutuhan utama usaha Anda?
          </p>
        </div>
        <div className="window-footer">
          <span className="small-dot" />
          Manusia tetap memegang kendali
          <Icon name="check" />
        </div>
      </div>
      <div className="floating-tag tag-stock">
        <span className="mini-icon">
          <Icon name="chart" />
        </span>
        <div>
          <strong>Riset dengan konteks</strong>
          <span>AI Stock Analyzer · Beta</span>
        </div>
      </div>
      <figcaption>Ilustrasi konsep, bukan percakapan pelanggan.</figcaption>
    </figure>
  );
}
