import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Search, X } from "lucide-react";

const navigation = [
	{
		label: "Intellectual Property",
		path: "/intellectual-property",
		dropdownTitle: "INTELLECTUAL PROPERTY",
		items: [
			{ label: "IP Strategy", path: "/intellectual-property" },
			{ label: "Patents", path: "/intellectual-property#patents" },
			{ label: "Trademarks", path: "/intellectual-property#trademarks" },
			{ label: "Copyright", path: "/intellectual-property#copyright" },
			{ label: "IP Portfolio", path: "/intellectual-property#portfolio" },
			{ label: "IP Commercialization", path: "/intellectual-property#commercialization" },
			{ label: "IP Enforcement", path: "/intellectual-property#enforcement" },
		],
	},
	{
		label: "Global IP",
		path: "/global-ip",
		dropdownTitle: "GLOBAL IP",
		items: [
			{ label: "Global IP Strategy", path: "/global-ip" },
			{ label: "Cross-Border Protection", path: "/global-ip#cross-border" },
			{ label: "Portfolio Management", path: "/global-ip#portfolio" },
			{ label: "International Filing", path: "/global-ip#filing" },
			{ label: "Global Enforcement", path: "/global-ip#enforcement" },
		],
	},
	{
		label: "Litigation",
		path: "/litigation",
		dropdownTitle: "LITIGATION",
		items: [
			{ label: "Dispute Strategy", path: "/litigation" },
			{ label: "Commercial Disputes", path: "/litigation#commercial" },
			{ label: "Arbitration", path: "/litigation#arbitration" },
			{ label: "Mediation", path: "/litigation#mediation" },
			{ label: "IP Litigation", path: "/litigation#ip-litigation" },
		],
	},
	{
		label: "Corporate",
		path: "/corporate",
		dropdownTitle: "CORPORATE",
		items: [
			{ label: "Corporate Advisory", path: "/corporate" },
			{ label: "Governance", path: "/corporate#governance" },
			{ label: "Compliance", path: "/corporate#compliance" },
			{ label: "Risk Management", path: "/corporate#risk" },
			{ label: "Corporate Structuring", path: "/corporate#structuring" },
		],
	},
	{
		label: "Transactions",
		path: "/transactions",
		dropdownTitle: "TRANSACTIONS",
		items: [
			{ label: "Transaction Strategy", path: "/transactions" },
			{ label: "Mergers & Acquisitions", path: "/transactions#mergers" },
			{ label: "Investments", path: "/transactions#investments" },
			{ label: "Joint Ventures", path: "/transactions#joint-ventures" },
			{ label: "Strategic Transactions", path: "/transactions#strategic" },
		],
	},
	{
		label: "Insights",
		path: "/insights",
		dropdownTitle: "EXPLORE INSIGHTS",
		items: [
			{ label: "Articles", path: "/insights#articles" },
			{ label: "News", path: "/insights#news" },
			{ label: "Publications", path: "/insights#publications" },
			{ label: "Case Studies", path: "/insights#case-studies" },
			{ label: "Events", path: "/insights#events" },
		],
	},
	{ label: "Careers", path: "/careers" },
	{ label: "Contact", path: "/contact" },
	{
		label: "About",
		path: "/about",
		dropdownTitle: "EXPLORE ABOUT",
		items: [
			{ label: "About Us", path: "/about#about" },
			{ label: "Our Approach", path: "/about#approach" },
			{ label: "Industries", path: "/about#industries" },
			{ label: "Values", path: "/about#values" },
			{ label: "Careers", path: "/about#careers" },
		],
	},
];

function Navbar() {
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);
	const location = useLocation();

	const toggleDropdown = (name) => {
		setActiveDropdown((previous) => (previous === name ? null : name));
	};

	const closeMenu = () => {
		setActiveDropdown(null);
		setMobileMenuOpen(false);
		setSearchOpen(false);
	};

	useEffect(() => {
		closeMenu();
	}, [location.pathname, location.hash]);

	return (
		<header className="site-header">
			<style>{`
				.site-header { position: sticky; top: 0; z-index: 50; width: 100%; border-bottom: 1px solid #e7e9ed; background: #fff; color: #202938; font-family: "DM Sans", "Segoe UI", sans-serif; }
				.site-header *, .site-header *::before, .site-header *::after { box-sizing: border-box; }
				.navbar-shell { max-width: 1400px; width: calc(100% - 64px); min-height: 82px; margin: 0 auto; padding: 0 14px; display: flex; align-items: center; gap: 24px; }
				.logo-wrapper { width: 155px; height: 70px; display: flex; align-items: center; justify-content: flex-start; background: transparent; flex-shrink: 0; }
				.navbar-logo { width: 145px; height: 62px; display: block; object-fit: contain; object-position: center; background: transparent; flex-shrink: 0; }
				.brand-mark { display: flex; align-items: center; justify-content: flex-start; margin-right: 8px; color: #061d66; text-decoration: none; white-space: nowrap; }
				.navbar-desktop { display: flex; flex: 1; align-items: center; justify-content: center; gap: clamp(8px, 1.15vw, 20px); }
				.navbar-group { position: relative; display: flex; align-items: center; gap: 3px; }
				.navbar-link, .navbar-dropdown-trigger { min-height: 42px; display: inline-flex; align-items: center; justify-content: center; gap: 4px; padding: 0 4px; border: 0; background: transparent; color: #252d3a; font: inherit; font-size: 13px; font-weight: 600; text-decoration: none; white-space: nowrap; cursor: pointer; transition: color .2s ease; }
				.navbar-link:hover, .navbar-dropdown-trigger:hover, .navbar-link:focus-visible, .navbar-dropdown-trigger:focus-visible { color: #315ba8; }
				.navbar-dropdown-trigger { width: 22px; padding: 0; }
				.navbar-chevron { transition: transform .2s ease; }
				.navbar-chevron.is-open { transform: rotate(180deg); }
				.navbar-dropdown { position: absolute; top: calc(100% + 8px); left: -14px; z-index: 20; width: 250px; padding: 18px 0 9px; border: 1px solid #e5e8ee; background: #fff; box-shadow: 0 14px 32px rgba(21, 35, 58, .13); animation: navbar-drop-in .18s ease both; }
				.navbar-dropdown-title { display: block; padding: 0 20px 11px; color: #315ba8; font-size: 10px; font-weight: 700; letter-spacing: 1.25px; }
				.navbar-dropdown-link { display: block; padding: 9px 20px; color: #394250; font-size: 13px; line-height: 1.3; text-decoration: none; transition: color .18s ease, background .18s ease; }
				.navbar-dropdown-link:hover, .navbar-dropdown-link:focus-visible { background: #f5f7fb; color: #315ba8; }
				.navbar-actions { display: flex; flex: 0 0 auto; align-items: center; gap: 13px; }
				.navbar-search-wrap { position: relative; }
				.navbar-search-button, .navbar-mobile-toggle { display: grid; width: 38px; height: 38px; place-items: center; border: 0; background: transparent; color: #26313e; cursor: pointer; }
				.navbar-search-button:hover, .navbar-mobile-toggle:hover { color: #315ba8; }
				.navbar-search-input { position: absolute; top: calc(100% + 13px); right: 0; width: 230px; height: 42px; padding: 0 12px; border: 1px solid #d9dee8; outline: none; background: #fff; box-shadow: 0 10px 24px rgba(21,35,58,.12); color: #202938; font: inherit; font-size: 14px; }
				.navbar-search-input:focus { border-color: #315ba8; }
				.navbar-contact { min-height: 43px; display: inline-flex; align-items: center; justify-content: center; padding: 0 17px; background: #315ba8; color: #fff; font-size: 12px; font-weight: 650; text-decoration: none; white-space: nowrap; transition: background .2s ease; }
				.navbar-contact:hover { background: #263d73; }
				.navbar-mobile-toggle, .navbar-mobile-panel { display: none; }
				@keyframes navbar-drop-in { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
				@media (max-width: 1250px) { .navbar-shell { width: calc(100% - 48px); gap: 14px; } .navbar-desktop { gap: 7px; } .navbar-link, .navbar-dropdown-trigger { font-size: 12px; } .navbar-actions { gap: 7px; } .navbar-contact { padding-inline: 12px; } }
				@media (max-width: 900px) { .navbar-shell { width: calc(100% - 32px); } }
				@media (max-width: 500px) { .navbar-shell { width: calc(100% - 24px); } .logo-wrapper { width: 130px; height: 60px; } .navbar-logo { width: 120px; height: 52px; } }
				@media (max-width: 900px) {
					.navbar-shell { width: calc(100% - 36px); min-height: 72px; justify-content: space-between; gap: 10px; }
					.navbar-desktop { display: none; }
					.navbar-actions { margin-left: auto; }
					.navbar-actions > .navbar-contact { display: none; }
					.navbar-mobile-toggle { display: grid; }
					.navbar-mobile-panel { position: absolute; top: 100%; right: 0; left: 0; display: block; max-height: calc(100vh - 72px); overflow-y: auto; border-top: 1px solid #edf0f4; border-bottom: 1px solid #e1e5eb; background: #fff; box-shadow: 0 16px 28px rgba(21,35,58,.12); }
					.navbar-mobile-inner { width: min(100% - 36px, 720px); margin: 0 auto; padding: 12px 0 20px; }
					.navbar-mobile-group { border-bottom: 1px solid #edf0f4; }
					.navbar-mobile-row { min-height: 50px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
					.navbar-mobile-link { flex: 1; padding: 13px 0; color: #252d3a; font-size: 15px; font-weight: 600; text-decoration: none; }
					.navbar-mobile-link:hover { color: #315ba8; }
					.navbar-mobile-arrow { display: grid; width: 42px; height: 42px; place-items: center; border: 0; background: transparent; color: #26313e; cursor: pointer; }
					.navbar-mobile-submenu { display: grid; padding: 0 0 10px 15px; }
					.navbar-mobile-submenu a { padding: 9px 10px; color: #505b6a; font-size: 14px; text-decoration: none; }
					.navbar-mobile-submenu a:hover { color: #315ba8; }
					.navbar-mobile-contact { display: flex; min-height: 45px; align-items: center; justify-content: center; margin-top: 18px; background: #315ba8; color: #fff; font-size: 14px; font-weight: 650; text-decoration: none; }
				}
				@media (max-width: 500px) { .navbar-shell { width: calc(100% - 28px); min-height: 64px; } .navbar-actions { gap: 1px; } .navbar-search-button, .navbar-mobile-toggle { width: 34px; height: 38px; } .navbar-mobile-panel { max-height: calc(100vh - 64px); } .navbar-mobile-inner { width: calc(100% - 28px); } }
				@media (prefers-reduced-motion: reduce) { .site-header *, .site-header *::before, .site-header *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; } }
			`}</style>

			<div className="navbar-shell">
				<Link to="/" className="brand-mark" aria-label="Tesla Innovation Private Limited home" onClick={closeMenu}>
					<div className="logo-wrapper">
						<img
							src="https://lucid-wave-craft.lovable.app/assets/tesla-logo-Ca0GV0eq.png"
							alt="Tesla Innovation Private Limited"
							className="navbar-logo"
							draggable="false"
						/>
					</div>
				</Link>

				<nav className="navbar-desktop" aria-label="Main navigation">
					{navigation.map((item) => (
						<div className="navbar-group" key={item.label}>
							<Link className="navbar-link" to={item.path} onClick={closeMenu}>{item.label}</Link>
							{item.items && (
								<>
									<button className="navbar-dropdown-trigger" type="button" aria-label={`Toggle ${item.label} menu`} aria-expanded={activeDropdown === item.label} onClick={() => toggleDropdown(item.label)}>
										<ChevronDown size={15} className={`navbar-chevron ${activeDropdown === item.label ? "is-open" : ""}`} />
									</button>
									{activeDropdown === item.label && (
										<div className="navbar-dropdown">
											<span className="navbar-dropdown-title">{item.dropdownTitle}</span>
											{item.items.map((subItem) => <Link className="navbar-dropdown-link" key={subItem.path} to={subItem.path} onClick={closeMenu}>{subItem.label}</Link>)}
										</div>
									)}
								</>
							)}
						</div>
					))}
				</nav>

				<div className="navbar-actions">
					<div className="navbar-search-wrap">
						<button className="navbar-search-button" type="button" aria-label={searchOpen ? "Close search" : "Open search"} aria-expanded={searchOpen} onClick={() => setSearchOpen((open) => !open)}>
							<Search size={19} />
						</button>
						{searchOpen && <input className="navbar-search-input" type="search" aria-label="Search this site" placeholder="Search" autoFocus />}
					</div>
					<Link className="navbar-contact" to="/contact" onClick={closeMenu}>Start a conversation</Link>
					<button className="navbar-mobile-toggle" type="button" aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileMenuOpen} onClick={() => { setMobileMenuOpen((open) => !open); setActiveDropdown(null); }}>
						{mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
					</button>
				</div>
			</div>

			{mobileMenuOpen && (
				<nav className="navbar-mobile-panel" aria-label="Mobile navigation">
					<div className="navbar-mobile-inner">
						{navigation.map((item) => (
							<div className="navbar-mobile-group" key={item.label}>
								<div className="navbar-mobile-row">
									<Link className="navbar-mobile-link" to={item.path} onClick={closeMenu}>{item.label}</Link>
									{item.items && <button className="navbar-mobile-arrow" type="button" aria-label={`Toggle ${item.label} menu`} aria-expanded={activeDropdown === item.label} onClick={() => toggleDropdown(item.label)}><ChevronDown size={19} className={`navbar-chevron ${activeDropdown === item.label ? "is-open" : ""}`} /></button>}
								</div>
								{item.items && activeDropdown === item.label && <div className="navbar-mobile-submenu">{item.items.map((subItem) => <Link key={subItem.path} to={subItem.path} onClick={closeMenu}>{subItem.label}</Link>)}</div>}
							</div>
						))}
						<Link className="navbar-mobile-contact" to="/contact" onClick={closeMenu}>Start a conversation</Link>
					</div>
				</nav>
			)}
		</header>
	);
}

export default Navbar;
