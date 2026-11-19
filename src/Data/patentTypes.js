const patentTypes = [
	{
		id: "utility-patent",
		label: "Utility Patent",
		classification: "A functional-invention term used in some jurisdictions",
		title: "Protecting how an invention works.",
		description:
			"Utility patent is a familiar term for protection of functional inventions in some jurisdictions. India does not have a separate patent class by that name.",
		heading: "Functional inventions follow the applicable national patent route.",
		intro:
			"An invention may be eligible for patent protection when it is new, involves an inventive step, is capable of industrial application and is not excluded by law. A patent application must explain the invention and define its scope in claims.",
		paragraphs: [
			"In India, qualifying functional inventions are filed under the ordinary patent system in the Patents Act, 1970. The label \"utility patent\" is used in some other countries and should not be assumed to have identical requirements across jurisdictions.",
			"Examples may include a new engine mechanism, a technical improvement to a machine or a water-purification process, provided the claimed subject matter meets the applicable patentability requirements.",
		],
		protection:
			"Technical features of how an invention works, including a product, machine, composition or process, as defined by the patent claims.",
		indiaNote:
			"India has no separate utility-patent category. The invention must qualify under Indian patent law; the US term is not a direct substitute for Indian filing advice.",
		example: "A new engine mechanism or a technically improved water-purification system.",
		term: "20 years",
		termNote:
			"If granted, an Indian patent generally runs for 20 years from its filing date, subject to required renewal fees and applicable law.",
		heroSlides: [
			{
				image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=90",
				alt: "Electronic components illustrating a functional invention",
			},
			{
				image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=90",
				alt: "Engineer developing and testing a technical prototype",
			},
		],
		featureImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Research equipment used to examine a technical invention",
	},
	{
		id: "design-registration",
		label: "Design Registration",
		classification: "A design right under separate legislation",
		title: "Protecting a product's visual appearance.",
		description:
			"Design registration protects eligible visual features of a product. In India this is a design right under the Designs Act, not a patent.",
		heading: "Appearance protection is different from protection for function.",
		intro:
			"A registered design can protect new or original visual features such as shape, configuration, pattern or ornamentation applied to an article. It does not protect the product's technical function.",
		paragraphs: [
			"In India, registration is under the Designs Act, 2000. The initial term is 10 years from registration and can be extended once for a further 5 years, for a maximum of 15 years. The design must meet statutory requirements, including novelty and originality.",
			"A bottle's distinctive shape or a chair's surface pattern may be considered for design registration. Whether a particular product look is protected or infringed depends on the registered design and the facts.",
		],
		protection:
			"The visual appearance of an article, including qualifying shape, configuration, pattern or ornamentation, rather than how it functions.",
		indiaNote:
			"This is design registration under the Designs Act, 2000—not a patent. India provides 10 years initially, with one 5-year extension.",
		example: "The distinctive shape of a bottle or an original pattern applied to a chair.",
		term: "10 + 5 years",
		termNote:
			"India's design term is 10 years from registration, extendable once by 5 years; this is separate from patent term.",
		heroSlides: [
			{
				image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2000&q=90",
				alt: "Product and visual design displayed in a creative setting",
			},
			{
				image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=2000&q=90",
				alt: "Visual identity and design references arranged for review",
			},
		],
		featureImage: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Carefully selected objects in a design workspace",
	},
	{
		id: "plant-variety-protection",
		label: "Plant Variety Protection",
		classification: "A plant-variety right under separate legislation",
		title: "Protecting eligible new plant varieties.",
		description:
			"India protects eligible plant varieties through a dedicated plant-variety framework, not by granting plant patents under the Patents Act.",
		heading: "Plant varieties have a distinct protection route in India.",
		intro:
			"The Protection of Plant Varieties and Farmers' Rights Act, 2001 provides a separate system for eligible plant varieties and recognizes the rights and interests of breeders and farmers.",
		paragraphs: [
			"India's plant-variety system is separate from patent law. Registration criteria, applicant rights and duration depend on the variety category and the applicable rules; the term for new varieties is generally 15 years, or 18 years for trees and vines. Extant varieties have a distinct term rule.",
			"A new rose or mango variety developed through breeding may be assessed under the relevant plant-variety route. A plant patent available in another country is not automatically equivalent to Indian protection.",
		],
		protection:
			"Rights in plant varieties that qualify for registration under the plant-variety legislation and its prescribed criteria.",
		indiaNote:
			"Plant-variety protection is governed by the Protection of Plant Varieties and Farmers' Rights Act, 2001, not the Patents Act. Duration depends on variety category.",
		example: "A new rose variety or a mango variety developed through breeding.",
		term: "Varies",
		termNote:
			"Generally 15 years for new varieties and 18 years for trees and vines; extant-variety terms follow separate rules.",
		heroSlides: [
			{
				image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=2000&q=90",
				alt: "Young plants growing in a greenhouse",
			},
			{
				image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=2000&q=90",
				alt: "Rows of crops growing in an agricultural field",
			},
		],
		featureImage: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Healthy plants being cultivated in a greenhouse",
	},
	{
		id: "product-patent",
		label: "Product Patent",
		classification: "A claim category, not a separate patent term",
		title: "Claims directed to a product itself.",
		description:
			"A product claim defines protection for the product as claimed, subject to patentability requirements, statutory exclusions and the claims' scope.",
		heading: "Product claims focus on what the invention is.",
		intro:
			"A product patent may cover a product such as a device, composition or material as defined in the granted claims. The scope is determined by the claims and applicable law, not by the label alone.",
		paragraphs: [
			"India permits product patents subject to the Patents Act and its exclusions. The 2005 amendments introduced product-patent protection in fields including pharmaceuticals; specific requirements and exclusions, including those affecting incremental pharmaceutical inventions, still apply.",
			"A new medicine molecule is an example of a product that may be considered for a product claim if it satisfies all legal requirements. A product patent does not automatically provide freedom to operate against earlier rights.",
		],
		protection:
			"The claimed product itself, potentially restricting unauthorized making, using, offering for sale, selling or importing within the patent's territory and scope.",
		indiaNote:
			"Product claims are available in India subject to statutory exclusions and patentability requirements. They are not a guarantee of broad or unrestricted control.",
		example: "A new medicine molecule or a novel technical device, if patentable.",
		term: "20 years",
		termNote:
			"If granted, the Indian patent term is generally 20 years from the filing date, with required renewals.",
		heroSlides: [
			{
				image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=2000&q=90",
				alt: "Technical team examining a product prototype",
			},
			{
				image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=90",
				alt: "Engineer testing a newly developed product",
			},
		],
		featureImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Electronic components in a product-development setting",
	},
	{
		id: "process-patent",
		label: "Process Patent",
		classification: "A claim category for a method or process",
		title: "Claims directed to how a product is made.",
		description:
			"A process claim protects a qualifying method or sequence of steps, as defined in the patent claims.",
		heading: "Process claims focus on the steps that produce a result.",
		intro:
			"A process patent may cover a new or improved industrial method, manufacturing sequence or technical procedure. Patentability and claim scope depend on the disclosure, prior art and applicable law.",
		paragraphs: [
			"In India, a process patent generally has a 20-year term from the filing date if granted, subject to required renewal fees. Statutory provisions can also address products directly obtained by a patented process.",
			"A new method for manufacturing a medicine at lower cost is an example of a process invention. Protecting the method does not necessarily mean that every product made by every other method is covered.",
		],
		protection:
			"The claimed steps or method; in India, rights may also extend to products directly obtained by the patented process as provided by law.",
		indiaNote:
			"Process claims are available under Indian patent law when patentability requirements are met. Their reach is defined by the granted claims and statute.",
		example: "A new, technically improved method for manufacturing a medicine.",
		term: "20 years",
		termNote:
			"If granted, the Indian patent term is generally 20 years from filing, with required renewals.",
		heroSlides: [
			{
				image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=2000&q=90",
				alt: "Industrial equipment used in a manufacturing process",
			},
			{
				image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=90",
				alt: "Engineers evaluating a production process",
			},
		],
		featureImage: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Technician working with industrial process equipment",
	},
	{
		id: "provisional-filing",
		label: "Provisional Filing",
		classification: "A preliminary specification—not a granted patent",
		title: "Secure a filing date while development continues.",
		description:
			"A provisional specification can support an early filing, but it is not an independently granted or enforceable patent.",
		heading: "A provisional filing starts a deadline, not a guarantee.",
		intro:
			"An Indian provisional specification may be filed when an invention is still being developed. The priority benefit is limited to subject matter adequately disclosed in that filing.",
		paragraphs: [
			"A complete specification must be filed within 12 months of the provisional filing. If it is not filed in time, the application is treated as abandoned. The complete specification must support the protection later sought.",
			"An early filing for a solar-cooker concept may be considered while testing continues, but the technical disclosure should be sufficiently complete. Filing \"Patent Pending\" does not mean a patent has been granted.",
		],
		protection:
			"It does not grant patent rights by itself; it may establish an earlier filing date for adequately disclosed subject matter, subject to a timely complete specification.",
		indiaNote:
			"A provisional specification is an application-stage filing under Indian law, not a temporary patent. The complete specification deadline is 12 months.",
		example: "An early, adequately described solar-cooker invention filed while the prototype is being tested.",
		term: "12 months",
		termNote:
			"Deadline to file the complete specification after a provisional filing; this is not the term of a patent.",
		heroSlides: [
			{
				image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=2000&q=90",
				alt: "Calendar and planning materials for an early filing deadline",
			},
			{
				image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=90",
				alt: "Inventor's technical notes being reviewed",
			},
		],
		featureImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Inventor developing an early-stage technical prototype",
	},
	{
		id: "complete-specification",
		label: "Standard / Complete Patent",
		classification: "A complete specification for examination",
		title: "A complete disclosure and claims for examination.",
		description:
			"A complete specification describes the invention and sets out the claims. It is an application document; patent rights arise only if a patent is granted.",
		heading: "Describe the invention and define the protection sought.",
		intro:
			"An Indian complete specification includes a full description, claims, an abstract and drawings where required. It must meet statutory disclosure requirements and clearly define the scope sought.",
		paragraphs: [
			"A complete specification can be filed directly or after a provisional specification within the 12-month period. Filing a complete specification does not itself mean a patent has been examined or granted.",
			"After publication, examination must be requested under the applicable rules. The applicant may need to respond to objections before the application can proceed to grant. If granted, the general Indian patent term is 20 years from the filing date.",
		],
		protection:
			"The invention defined in the claims of a patent that is ultimately granted; the specification itself is not a granted right.",
		indiaNote:
			"Use the accurate term complete specification for the full application document. Grant follows examination and compliance; it is not automatic.",
		example: "A fully described technical invention with claims, abstract and required drawings.",
		term: "20 years",
		termNote:
			"General Indian patent term if granted, measured from the filing date; filing the specification alone creates no granted term.",
		heroSlides: [
			{
				image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=90",
				alt: "Technical and filing documents prepared for detailed review",
			},
			{
				image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2000&q=90",
				alt: "Technical research material supporting an invention disclosure",
			},
		],
		featureImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Team reviewing an invention disclosure and application materials",
	},
	{
		id: "patent-of-addition",
		label: "Patent of Addition",
		classification: "A related application for an improvement",
		title: "Protecting an improvement to a main invention.",
		description:
			"A patent of addition may be sought for an improvement or modification related to an invention in a main patent application.",
		heading: "Link a qualifying improvement to the main invention.",
		intro:
			"Under Indian patent law, a patent of addition is a route for an improvement or modification of an invention described in the main application or patent, subject to statutory requirements.",
		paragraphs: [
		"The route is intended for a related improvement, not an unrelated invention. Ownership and the relationship to the main patent must meet the Act's requirements.",
			"A patent of addition generally expires with the main patent and does not require a separate renewal fee while it remains a patent of addition. The main patent's status and the facts should be reviewed before choosing this route.",
		],
		protection:
			"A qualifying improvement or modification to the invention covered by the main patent, as defined by its own application and claims.",
		indiaNote:
			"An Indian patent of addition is tied to a main patent and generally shares its expiry; the Patents Act provides for no separate renewal fee.",
		example: "A technically improved component designed to work with an already patented machine.",
		term: "Main patent term",
		termNote:
			"Generally expires with the main patent; no separate renewal fee applies while it remains a patent of addition.",
		heroSlides: [
			{
				image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=2000&q=90",
				alt: "Engineering team refining a technical prototype",
			},
			{
				image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=90",
				alt: "Engineers reviewing an improved machine component",
			},
		],
		featureImage: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Technical equipment being refined by an engineer",
	},
	{
		id: "divisional-application",
		label: "Divisional Application",
		classification: "A separate application arising from a parent",
		title: "Separate inventions disclosed in a parent application.",
		description:
			"A divisional application may separate an invention disclosed in a parent application when statutory requirements are met.",
		heading: "Separate the claims without adding new subject matter.",
		intro:
			"Where an application discloses more than one invention, a divisional application may be available under Indian patent law. Its claims must be supported by the disclosure in the parent and cannot introduce new matter.",
		paragraphs: [
			"A divisional application is a separate application and is examined on its own merits. The parent disclosure, unity issues, timing and applicable rules affect whether and how the route is available.",
			"The patent term is generally calculated from the filing date of the parent application, not as a fresh 20-year term from the divisional filing date.",
		],
		protection:
			"Claims directed to an invention disclosed in the parent application, in a separate application that satisfies statutory requirements.",
		indiaNote:
			"India permits divisional applications in prescribed circumstances. The disclosure must support the subject matter, and no new matter may be added.",
		example: "A parent application disclosing two distinct inventions, with one pursued in a divisional application.",
		term: "Parent filing date",
		termNote:
			"The general 20-year term is reckoned from the parent application's filing date, subject to the applicable patent rules.",
		heroSlides: [
			{
				image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=90",
				alt: "Separate workstreams organized in a digital project dashboard",
			},
			{
				image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=90",
				alt: "Team reviewing related invention documents",
			},
		],
		featureImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Application documents reviewed for separate invention claims",
	},
	{
		id: "convention-application",
		label: "Convention Application",
		classification: "A Paris Convention priority route",
		title: "Claiming priority from an earlier foreign filing.",
		description:
			"A convention application in India may claim priority from an earlier application in a convention country, subject to deadlines and formal requirements.",
		heading: "Carry an earlier priority claim into an Indian filing.",
		intro:
			"Under the Paris Convention route, an applicant may file in India and claim priority from an earlier filing in a convention country. For patents, the usual priority period is 12 months from the first filing.",
		paragraphs: [
			"The priority date can affect assessment of prior art, but it is not generally the date from which the Indian patent's 20-year term is counted. That term is generally measured from the Indian filing date for a convention application.",
			"Applicants should coordinate filing dates, priority documents, ownership and claim support across countries. Requirements and available remedies depend on the application record and applicable law.",
		],
		protection:
			"The invention defined by the claims in the Indian application if granted; the Convention route concerns the claimed priority from an earlier foreign application.",
		indiaNote:
			"File within the applicable 12-month Paris Convention priority period. The priority date and Indian patent-term start date are different concepts.",
		example: "An Indian filing claiming priority from an earlier filing in another Paris Convention country.",
		term: "20 years",
		termNote:
			"Generally from the Indian filing date for the convention application; the earlier foreign filing supplies the priority date.",
		heroSlides: [
			{
				image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=2000&q=90",
				alt: "Map representing coordinated filings across countries",
			},
			{
				image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90",
				alt: "Team coordinating an international filing plan",
			},
		],
		featureImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Team coordinating an international business plan",
	},
];

export default patentTypes;
