"use client";

import { useEffect, useMemo, useState } from "react";

export default function PanelPage() {
  const topAssets = [
    {
      rank: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$56,092.59",
      change24h: "-14.45%",
      trend: "down",
      marketCap: "4.3T",
      vol24h: "$542B",
      sector: "Storage",
      vsAth: "—",
      icon: "B",
    },
    {
      rank: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "$22,043.25",
      change24h: "-10.38%",
      trend: "down",
      marketCap: "428B",
      vol24h: "100B",
      sector: "Gaming",
      vsAth: "—",
      icon: "E",
    },
    {
      rank: 3,
      name: "Solana",
      symbol: "SOL",
      price: "$83.45",
      change24h: "-18.25%",
      trend: "down",
      marketCap: "6.7B",
      vol24h: "140M",
      sector: "Gaming",
      vsAth: "—",
      icon: "S",
    },
    {
      rank: 4,
      name: "BNB",
      symbol: "BNB",
      price: "$41.54",
      change24h: "+11.08%",
      trend: "up",
      marketCap: "3.8B",
      vol24h: "223M",
      sector: "Infrastructure",
      vsAth: "—",
      icon: "B",
    },
    {
      rank: 5,
      name: "XRP",
      symbol: "XRP",
      price: "$76.22",
      change24h: "+0.02%",
      trend: "flat",
      marketCap: "3.1B",
      vol24h: "125M",
      sector: "AI",
      vsAth: "—",
      icon: "X",
    },
    {
      rank: 6,
      name: "Cardano",
      symbol: "ADA",
      price: "$79.21",
      change24h: "-7.67%",
      trend: "down",
      marketCap: "4.5B",
      vol24h: "479M",
      sector: "Gaming",
      vsAth: "—",
      icon: "C",
    },
    {
      rank: 7,
      name: "Avalanche",
      symbol: "AVA",
      price: "$88.32",
      change24h: "-15.62%",
      trend: "down",
      marketCap: "5.1M",
      vol24h: "517M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "A",
    },
    {
      rank: 8,
      name: "Dogecoin",
      symbol: "DOGE",
      price: "$41.53",
      change24h: "-4.83%",
      trend: "down",
      marketCap: "38B",
      vol24h: "328M",
      sector: "Gaming",
      vsAth: "—",
      icon: "D",
    },
  ];

  const extraAssets = [
    {
      rank: 9,
      name: "Polkadot",
      symbol: "DOT",
      price: "$6.12",
      marketCap: "9.4B",
      vol24h: "520M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "P",
    },
    {
      rank: 10,
      name: "Tron",
      symbol: "TRX",
      price: "$0.155",
      marketCap: "11.1B",
      vol24h: "310M",
      sector: "Infrastructure",
      vsAth: "—",
      icon: "T",
    },
    {
      rank: 11,
      name: "Chainlink",
      symbol: "LINK",
      price: "$11.2",
      marketCap: "8.8B",
      vol24h: "430M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "C",
    },
    {
      rank: 12,
      name: "Polygon",
      symbol: "POL",
      price: "$0.86",
      marketCap: "9.6B",
      vol24h: "610M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "P",
    },
    {
      rank: 13,
      name: "Litecoin",
      symbol: "LTC",
      price: "$86.0",
      marketCap: "6.2B",
      vol24h: "210M",
      sector: "Storage",
      vsAth: "—",
      icon: "L",
    },
    {
      rank: 14,
      name: "Shiba Inu",
      symbol: "SHIB",
      price: "$0.000026",
      marketCap: "15.4B",
      vol24h: "790M",
      sector: "Meme",
      vsAth: "—",
      icon: "S",
    },
    {
      rank: 15,
      name: "Dai",
      symbol: "DAI",
      price: "$1.00",
      marketCap: "6.8B",
      vol24h: "980M",
      sector: "Payment",
      vsAth: "—",
      icon: "D",
    },
    {
      rank: 16,
      name: "Bitcoin Cash",
      symbol: "BCH",
      price: "$520",
      marketCap: "9.1B",
      vol24h: "240M",
      sector: "Storage",
      vsAth: "—",
      icon: "B",
    },
    {
      rank: 17,
      name: "Uniswap",
      symbol: "UNI",
      price: "$7.2",
      marketCap: "6.4B",
      vol24h: "360M",
      sector: "DeFi",
      vsAth: "—",
      icon: "U",
    },
    {
      rank: 18,
      name: "Cosmos",
      symbol: "ATOM",
      price: "$11.4",
      marketCap: "7.7B",
      vol24h: "410M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "C",
    },
    {
      rank: 19,
      name: "Toncoin",
      symbol: "TON",
      price: "$2.50",
      marketCap: "7.1B",
      vol24h: "290M",
      sector: "Infrastructure",
      vsAth: "—",
      icon: "T",
    },
    {
      rank: 20,
      name: "Stellar",
      symbol: "XLM",
      price: "$0.12",
      marketCap: "4.8B",
      vol24h: "180M",
      sector: "Payment",
      vsAth: "—",
      icon: "S",
    },
    {
      rank: 21,
      name: "Monero",
      symbol: "XMR",
      price: "$150",
      marketCap: "3.4B",
      vol24h: "120M",
      sector: "Infrastructure",
      vsAth: "—",
      icon: "M",
    },
    {
      rank: 22,
      name: "Ethereum Classic",
      symbol: "ETC",
      price: "$22.5",
      marketCap: "3.2B",
      vol24h: "210M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "E",
    },
    {
      rank: 23,
      name: "Filecoin",
      symbol: "FIL",
      price: "$4.10",
      marketCap: "5.9B",
      vol24h: "260M",
      sector: "Storage",
      vsAth: "—",
      icon: "F",
    },
    {
      rank: 24,
      name: "Hbar",
      symbol: "HBAR",
      price: "$0.055",
      marketCap: "3.7B",
      vol24h: "190M",
      sector: "Infrastructure",
      vsAth: "—",
      icon: "H",
    },
    {
      rank: 25,
      name: "Aptos",
      symbol: "APT",
      price: "$9.30",
      marketCap: "4.2B",
      vol24h: "330M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "A",
    },
    {
      rank: 26,
      name: "Cronos",
      symbol: "CRO",
      price: "$0.14",
      marketCap: "2.1B",
      vol24h: "130M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "C",
    },
    {
      rank: 27,
      name: "Near",
      symbol: "NEAR",
      price: "$5.60",
      marketCap: "6.1B",
      vol24h: "210M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "N",
    },
    {
      rank: 28,
      name: "Lido",
      symbol: "LDO",
      price: "$3.70",
      marketCap: "2.9B",
      vol24h: "170M",
      sector: "Infrastructure",
      vsAth: "—",
      icon: "L",
    },
    {
      rank: 29,
      name: "Arbitrum",
      symbol: "ARB",
      price: "$1.10",
      marketCap: "2.8B",
      vol24h: "220M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "A",
    },
    {
      rank: 30,
      name: "VeChain",
      symbol: "VET",
      price: "$0.020",
      marketCap: "5.0B",
      vol24h: "140M",
      sector: "Infrastructure",
      vsAth: "—",
      icon: "V",
    },
    {
      rank: 31,
      name: "Maker",
      symbol: "MKR",
      price: "$2,350",
      marketCap: "3.1B",
      vol24h: "80M",
      sector: "DeFi",
      vsAth: "—",
      icon: "M",
    },
    {
      rank: 32,
      name: "Optimism",
      symbol: "OP",
      price: "$2.20",
      marketCap: "2.6B",
      vol24h: "240M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "O",
    },
    {
      rank: 33,
      name: "Aave",
      symbol: "AAVE",
      price: "$150",
      marketCap: "2.4B",
      vol24h: "180M",
      sector: "DeFi",
      vsAth: "—",
      icon: "A",
    },
    {
      rank: 34,
      name: "Graph",
      symbol: "GRT",
      price: "$0.17",
      marketCap: "1.9B",
      vol24h: "120M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "G",
    },
    {
      rank: 35,
      name: "Algorand",
      symbol: "ALGO",
      price: "$0.18",
      marketCap: "1.7B",
      vol24h: "90M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "A",
    },
    {
      rank: 36,
      name: "Injective",
      symbol: "INJ",
      price: "$27.0",
      marketCap: "1.8B",
      vol24h: "260M",
      sector: "DeFi",
      vsAth: "—",
      icon: "I",
    },
    {
      rank: 37,
      name: "Render",
      symbol: "RNDR",
      price: "$7.20",
      marketCap: "3.0B",
      vol24h: "210M",
      sector: "AI",
      vsAth: "—",
      icon: "R",
    },
    {
      rank: 38,
      name: "Stacks",
      symbol: "STX",
      price: "$1.60",
      marketCap: "1.5B",
      vol24h: "140M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "S",
    },
    {
      rank: 39,
      name: "Theta",
      symbol: "THETA",
      price: "$1.20",
      marketCap: "1.1B",
      vol24h: "110M",
      sector: "Gaming",
      vsAth: "—",
      icon: "T",
    },
    {
      rank: 40,
      name: "Fantom",
      symbol: "FTM",
      price: "$0.35",
      marketCap: "1.3B",
      vol24h: "150M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "F",
    },
    {
      rank: 41,
      name: "Pepe",
      symbol: "PEPE",
      price: "$0.0000090",
      marketCap: "1.6B",
      vol24h: "220M",
      sector: "Meme",
      vsAth: "—",
      icon: "P",
    },
    {
      rank: 42,
      name: "Sui",
      symbol: "SUI",
      price: "$1.40",
      marketCap: "2.2B",
      vol24h: "190M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "S",
    },
    {
      rank: 43,
      name: "Sei",
      symbol: "SEI",
      price: "$0.45",
      marketCap: "1.2B",
      vol24h: "130M",
      sector: "Smart contract",
      vsAth: "—",
      icon: "S",
    },
    {
      rank: 44,
      name: "Celestia",
      symbol: "CEL",
      price: "$0.80",
      marketCap: "0.9B",
      vol24h: "60M",
      sector: "Infrastructure",
      vsAth: "—",
      icon: "C",
    },
    {
      rank: 45,
      name: "Bonk",
      symbol: "BONK",
      price: "$0.000028",
      marketCap: "1.8B",
      vol24h: "170M",
      sector: "Meme",
      vsAth: "—",
      icon: "B",
    },
    {
      rank: 46,
      name: "Fetch.ai",
      symbol: "FET",
      price: "$1.30",
      marketCap: "0.9B",
      vol24h: "110M",
      sector: "AI",
      vsAth: "—",
      icon: "F",
    },
    {
      rank: 47,
      name: "Gala",
      symbol: "GALA",
      price: "$0.03",
      marketCap: "1.1B",
      vol24h: "140M",
      sector: "Gaming",
      vsAth: "—",
      icon: "G",
    },
    {
      rank: 48,
      name: "Sandbox",
      symbol: "SAND",
      price: "$0.65",
      marketCap: "1.2B",
      vol24h: "160M",
      sector: "Gaming",
      vsAth: "—",
      icon: "S",
    },
    {
      rank: 49,
      name: "Mana",
      symbol: "MANA",
      price: "$0.55",
      marketCap: "1.0B",
      vol24h: "130M",
      sector: "Gaming",
      vsAth: "—",
      icon: "M",
    },
  ];

  const assets = [
    ...topAssets,
    ...extraAssets.map((a) => {
      const trend = a.rank % 3 === 0 ? "flat" : a.rank % 2 === 0 ? "down" : "up";
      const magnitude = 1.2 + (a.rank % 7) * 0.9;
      const change24h =
        trend === "flat" ? "+0.00%" : `${trend === "up" ? "+" : "-"}${magnitude.toFixed(2)}%`;

      return {
        ...a,
        trend,
        change24h,
      };
    }),
  ];

  function parseMoney(value: string): number {
    // Example: "$56,092.59" -> 56092.59
    const cleaned = value.replace(/[^0-9.-]/g, "");
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : 0;
  }

  function formatMoney(value: number): string {
    return `$${value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }

  function getSparklinePoints(rank: number, trend: string): string {
    // SVG viewBox: 0 0 60 16
    const xs = [6, 16, 26, 36, 46, 56];

    const baseYs =
      trend === "up"
        ? [12, 10, 9, 7, 6, 4]
        : trend === "down"
          ? [4, 6, 7, 9, 10, 12]
          : [8, 8.2, 8, 7.9, 8.1, 8];

    const jitter = xs.map((_, i) => ((rank + i) % 3 - 1) * 0.6);
    const ys = baseYs.map((y, i) => Math.max(1, Math.min(15, y + jitter[i])));

    return xs.map((x, i) => `${x},${ys[i].toFixed(1)}`).join(" ");
  }

  type AssetRow = (typeof assets)[number] & {
    priceValue: number;
    priceFlashDir: "up" | "down" | "flat";
    priceFlashToken: number;
  };

  const initialRows = useMemo<AssetRow[]>(
    () =>
      assets.map((a) => ({
        ...a,
        priceValue: parseMoney(a.price),
        priceFlashDir: "flat",
        priceFlashToken: 0,
      })),
    []
  );

  const [rows, setRows] = useState<AssetRow[]>(initialRows);

  const [tab, setTab] = useState<"all" | "gainers" | "losers">("all");
  const [searchInput, setSearchInput] = useState("");
  const [appliedQuery, setAppliedQuery] = useState("");
  const [sectorFilter, setSectorFilter] = useState<string>("all");

  const displayedRows = rows.filter((row) => {
    const q = appliedQuery.trim().toLowerCase();
    const matchesQuery = !q || row.name.toLowerCase().includes(q) || row.symbol.toLowerCase().includes(q);

    if (!matchesQuery) return false;

    if (tab !== "all") {
      const isUp = row.change24h.startsWith("+");
      const isDown = row.change24h.startsWith("-");

      if (tab === "gainers" && !isUp) return false;
      if (tab === "losers" && !isDown) return false;
    }

    if (sectorFilter !== "all" && row.sector !== sectorFilter) return false;

    return true;
  });

  useEffect(() => {
    const id = window.setInterval(() => {
      setRows((prev) =>
        prev.map((row) => {
          // Update every 5s with up to ~15% jump.
          const maxAbs = row.rank <= 3 ? 0.1 : row.rank <= 6 ? 0.13 : 0.15;
          const deltaRatio = (Math.random() * 2 - 1) * maxAbs; // +/- up to maxAbs
          const nextValue = Math.max(0, row.priceValue * (1 + deltaRatio));

          const dir: "up" | "down" = nextValue >= row.priceValue ? "up" : "down";
          const pct = deltaRatio * 100;
          const nextChange24h = `${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%`;

          return {
            ...row,
            priceValue: nextValue,
            change24h: nextChange24h,
            priceFlashDir: dir,
            priceFlashToken: Date.now() + row.rank,
          };
        })
      );
    }, 5000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div>
      <header className="nav">
        <div className="nav-inner">
          <div className="logo">YDYL</div>
          <nav className="nav-links">
            <div className="nav-dropdown">
              <span className="nav-dropdown-toggle">Developers</span>
              <div className="nav-dropdown-menu">
                <a className="nav-dropdown-link" href="/developers">
                  <strong>Developer hub</strong>
                  <span>Overview of building on YDYL</span>
                </a>
                <a className="nav-dropdown-link" href="/docs">
                  <strong>Documentation</strong>
                  <span>Concepts, auth, and guides</span>
                </a>
                <a className="nav-dropdown-link" href="/api-reference">
                  <strong>API reference</strong>
                  <span>Endpoints, parameters, and models</span>
                </a>
                <a className="nav-dropdown-link" href="/changelog">
                  <strong>Changelog</strong>
                  <span>What shipped and what&apos;s next</span>
                </a>
                <a className="nav-dropdown-link" href="/status">
                  <strong>Status</strong>
                  <span>Live view of platform health</span>
                </a>
              </div>
            </div>
            <a href="/solutions">Solutions</a>
            <a href="/scale">Scale</a>
            <a href="/pricing">Pricing</a>
            <a href="/why-ydyl">Why YDYL</a>
            <a href="/panel">Panel</a>
          </nav>
          <div className="nav-cta">
            <a className="btn ghost" href="/#contact">
              Contact us
            </a>
            <a className="btn primary" href="/">
              Home
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="panel">
          <div className="panel-shell">
            <aside className="panel-sidebar" aria-label="Panel sidebar">
              <div className="panel-sidebar-header">Market Intelligence</div>
              <div className="panel-sidebar-section">
                <div className="panel-sidebar-section-title">Screener</div>
                <a className="panel-sidebar-link is-active" href="#">
                  Assets Screener
                </a>
              </div>

              <div className="panel-sidebar-section">
                <div className="panel-sidebar-section-title">Sectors</div>
                <div className="panel-sidebar-sublist">
                  <a
                    className={`panel-sidebar-subitem ${sectorFilter === "all" ? "is-active" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSectorFilter("all");
                    }}
                  >
                    All Sectors
                  </a>
                  <a
                    className={`panel-sidebar-subitem ${sectorFilter === "Smart contract" ? "is-active" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSectorFilter("Smart contract");
                    }}
                  >
                    Smart Contract
                  </a>
                  <a
                    className={`panel-sidebar-subitem ${sectorFilter === "DeFi" ? "is-active" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSectorFilter("DeFi");
                    }}
                  >
                    DeFi
                  </a>
                  <a
                    className={`panel-sidebar-subitem ${sectorFilter === "Payment" ? "is-active" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSectorFilter("Payment");
                    }}
                  >
                    Payment
                  </a>
                  <a
                    className={`panel-sidebar-subitem ${sectorFilter === "Meme" ? "is-active" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSectorFilter("Meme");
                    }}
                  >
                    Meme
                  </a>
                  <a
                    className={`panel-sidebar-subitem ${sectorFilter === "Infrastructure" ? "is-active" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSectorFilter("Infrastructure");
                    }}
                  >
                    Infrastructure
                  </a>
                  <a
                    className={`panel-sidebar-subitem ${sectorFilter === "AI" ? "is-active" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSectorFilter("AI");
                    }}
                  >
                    AI
                  </a>
                  <a
                    className={`panel-sidebar-subitem ${sectorFilter === "Gaming" ? "is-active" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSectorFilter("Gaming");
                    }}
                  >
                    Gaming
                  </a>
                  <a
                    className={`panel-sidebar-subitem ${sectorFilter === "Storage" ? "is-active" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSectorFilter("Storage");
                    }}
                  >
                    Storage
                  </a>
                </div>
              </div>
            </aside>

            <div className="panel-main">
              <div className="panel-main-header">
                <div className="panel-main-title-wrap">
                  <div className="panel-kicker">Assets Screener</div>
                  <h1 className="panel-title">Real-time market data simulation</h1>
                </div>

                <div className="panel-controls">
                  <div className="panel-search">
                      <input
                        type="text"
                        placeholder="Search assets (e.g., BTC or Bitcoin...)"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") setAppliedQuery(searchInput);
                        }}
                      />
                      <button
                        type="button"
                        className="panel-search-btn"
                        aria-label="Search"
                        onClick={() => setAppliedQuery(searchInput)}
                      >
                      Search
                    </button>
                      <button
                        type="button"
                        className="panel-reset-btn"
                        onClick={() => {
                          setSearchInput("");
                          setAppliedQuery("");
                          setTab("all");
                          setSectorFilter("all");
                        }}
                      >
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              <div className="panel-tabs" role="tablist" aria-label="Assets tabs">
                <button
                  type="button"
                  className={`panel-tab ${tab === "all" ? "is-active" : ""}`}
                  onClick={() => setTab("all")}
                >
                  All Assets
                </button>
                <button
                  type="button"
                  className={`panel-tab ${tab === "gainers" ? "is-active" : ""}`}
                  onClick={() => setTab("gainers")}
                >
                  Top Gainers
                </button>
                <button
                  type="button"
                  className={`panel-tab ${tab === "losers" ? "is-active" : ""}`}
                  onClick={() => setTab("losers")}
                >
                  Top Losers
                </button>
              </div>

              <div className="panel-table-meta">Showing {displayedRows.length} assets</div>

              <div className="panel-table-wrap" role="region" aria-label="Assets table">
                <table className="panel-table">
                  <thead>
                    <tr>
                      <th className="panel-col-rank">#</th>
                      <th>Asset Name</th>
                      <th className="panel-col-price">Price</th>
                      <th className="panel-col-change">24h Change</th>
                      <th className="panel-col-trend">7d Trend</th>
                      <th className="panel-col-cap">Market Cap</th>
                      <th className="panel-col-vol">Vol (24h)</th>
                      <th className="panel-col-sector">Sector</th>
                      <th className="panel-col-ath">vs ATH</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedRows.length === 0 ? (
                      <tr>
                        <td colSpan={9} style={{ textAlign: "center", padding: "18px 10px", color: "var(--muted)" }}>
                          No assets match your search.
                        </td>
                      </tr>
                    ) : (
                      displayedRows.map((a) => (
                      <tr key={a.rank}>
                        <td className="panel-col-rank">{a.rank}</td>
                        <td>
                          <div className="panel-asset-name">
                            <span className={`panel-asset-icon ${a.trend}`}>
                              {a.icon}
                            </span>
                            <div className="panel-asset-text">
                              <div className="panel-asset-title">{a.name}</div>
                              <div className="panel-asset-symbol">{a.symbol}</div>
                            </div>
                          </div>
                        </td>
                        <td className="panel-col-price">
                          <span
                            key={a.priceFlashToken}
                            className={`panel-price ${a.priceFlashDir === "up" ? "is-up" : ""} ${
                              a.priceFlashDir === "down" ? "is-down" : ""
                            }`}
                          >
                            {formatMoney(a.priceValue)}
                          </span>
                        </td>
                        <td
                          className={`panel-col-change ${a.change24h.startsWith("+") ? "is-up" : "is-down"}`}
                        >
                          {a.change24h}
                        </td>
                        <td className="panel-col-trend">
                          <svg
                            className={`panel-sparkline panel-sparkline-${a.trend}`}
                            viewBox="0 0 60 16"
                            aria-hidden="true"
                          >
                            <polyline points={getSparklinePoints(a.rank, a.trend)} />
                          </svg>
                        </td>
                        <td className="panel-col-cap">{a.marketCap}</td>
                        <td className="panel-col-vol">{a.vol24h}</td>
                        <td className="panel-col-sector">
                          <span className="panel-sector-pill">{a.sector}</span>
                        </td>
                        <td className="panel-col-ath">{a.vsAth}</td>
                      </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">YDYL</div>
          <div className="footer-meta">
            <span>© {new Date().getFullYear()} YDYL. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

