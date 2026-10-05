import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function HashSectionNav({ basePath, items, defaultId, className = "" }) {
	const location = useLocation();
	const [activeId, setActiveId] = useState(defaultId);
	const itemIds = items.map((item) => item.id).join("|");

	useEffect(() => {
		const hash = location.hash.slice(1);
		const validIds = itemIds.split("|");
		const selectedId = validIds.includes(hash) ? hash : defaultId;
		setActiveId(selectedId);

		if (hash && validIds.includes(hash)) {
			requestAnimationFrame(() => {
				document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
			});
		} else {
			requestAnimationFrame(() => {
				document.getElementById(defaultId)?.scrollIntoView({ behavior: "smooth", block: "start" });
			});
		}
	}, [defaultId, itemIds, location.hash, location.pathname]);

	return (
		<>
			<style>{`
				.hash-section-nav { position: sticky; top: 82px; z-index: 5; display: flex; justify-content: center; gap: 26px; min-height: 58px; padding: 0 20px; overflow-x: auto; border-bottom: 1px solid #e1e5eb; background: rgba(255,255,255,.97); }
				.hash-section-nav a { flex: 0 0 auto; display: flex; align-items: center; border-bottom: 2px solid transparent; color: #596372; font-size: 13px; font-weight: 600; text-decoration: none; transition: color .2s ease, border-color .2s ease; }
				.hash-section-nav a:hover, .hash-section-nav a.is-active { border-bottom-color: #315ba8; color: #315ba8; }
				.corporate-page [id], .litigation-page [id], .transactions-page [id] { scroll-margin-top: 145px; }
				@media (max-width: 900px) { .hash-section-nav { top: 72px; justify-content: flex-start; gap: 22px; min-height: 54px; } }
				@media (max-width: 500px) { .hash-section-nav { top: 64px; gap: 20px; padding-inline: 14px; } .hash-section-nav a { font-size: 12px; } }
			`}</style>
			<nav className={`hash-section-nav ${className}`.trim()} aria-label="Page sections">
				{items.map((item) => (
					<Link
						key={item.id}
						to={item.id === defaultId ? basePath : `${basePath}#${item.id}`}
						className={activeId === item.id ? "is-active" : ""}
						aria-current={activeId === item.id ? "location" : undefined}
					>
						{item.label}
					</Link>
				))}
			</nav>
		</>
	);
}

export default HashSectionNav;