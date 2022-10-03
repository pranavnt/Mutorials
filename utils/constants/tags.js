// tags
const tags = {
    "Physics": {
        "Units": {
            "01P": "Measurement",
            "02P": "Kinematics",
            "03P": "Newton's Laws",
            "04P": "Forces",
            "05P": "Linear Momentum",
            "06P": "Rotation",
            "07P": "Energy Basics",
            "08P": "Gravitation",
            "09P": "Fluids",
            "10P": "Oscillations",
            "11P": "Wave Motion",
            "12P": "Sound",
            "13P": "Ray Optics",
            "14P": "Wave Optics",
            "15P": "Thermodynamics",
            "16P": "Simple Machines",
            "17P": "Modern Physics",
            "18P": "Nuclear Physics",
            "19P": "Electric Fields and Forces",
            "20P": "Electrical Properties of Materials",
            "21P": "Capacitors",
            "22P": "DC Circuits",
            "23P": "AC Circuits",
            "24P": "Magnetic Fields",
            "25P": "Magnetic Forces",
            "26P": "Induction",
            "27P": "Magnetic Properties of Materials",
            "28P": "Electromagnetic Waves - Advanced",
            "29P": "Astrophysics",
            "30P": "Lab Skills",
            "CALC": "Calculus-Based"
        },
        "Concepts": {
            "DIM": "Dimensional Analysis",
            "UNC": "Uncertainty",

            "ONE": "1D Motion",
            "PRO": "Projectile Motion",
            "REM": "Relative Motion",
            "CIR": "Circular Motion",

            "INE": "Newton's First Law",
            "FMA": "Newton's Second Law",
            "REA": "Newton's Third Law",

            "FRI": "Friction",
            "TEN": "Tension",
            "NOR": "Normal Force",
            "CTP": "Centripetal Force",
            "COM": "Center of Mass",

            "CON": "Conservation of Momentum",
            "COL": "Collision Mechanics",
            "IMP": "Impulse",

            "TOR": "Torque",
            "MOI": "Moment of Inertia",
            "RKE": "Rotational Kinetic Energy",
            "AMO": "Angular Momentum",
            "REQ": "Rotational Equilibrium",

            "WOR": "Work",
            "POW": "Power",
            "KIN": "Kinetic Energy",
            "COE": "Conservation of Energy",

            "ULG": "Universal Law of Gravitation",
            "GPE": "Gravitational Potential Energy",
            "GRF": "Gravitational Field",
            "KEP": "Kepler's Laws of Planetary Motion",

            "DEN": "Density",
            "PRE": "Pressure",
            "BUO": "Buoyant Force",
            "PAS": "Pascal's Principle",
            "ARC": "Archimedes' Principle",
            "EOC": "Equation of Continuity",
            "BER": "Bernoulli's Equation",
            "POI": "Poiseuille's Law",
            "FLO": "Types of Fluid Flow",

            "HOO": "Hooke's Law",
            "SHM": "Simple Harmonic Motion",
            "EPE": "Elastic Potential Energy",
            "DHM": "Damped Harmonic Motion",

            "WIS": "Wave Interference and Superposition",
            "STA": "Standing Waves",

            "SOU": "Properties of Sound Waves",
            "BEA": "Beats",
            "DOP": "The Doppler Effect",

            "EMS": "The Electromagnetic Spectrum",
            "RFL": "Reflection",
            "RFR": "Refraction",
            "THL": "Thin Lenses",
            "PLM": "Plane Mirrors",
            "SPM": "Spherical Mirrors",

            "DIF": "Diffraction",
            "TFI": "Thin-Film Interference",
            "DSI": "Double Silt Interference",
            "POL": "Polarization",
            "PHO": "The Photoelectric Effect",

            "TEM": "Temperature and its Scales",
            "IDG": "Ideal Gases",
            "TDC": "Thermodynamic Cycles",
            "HTR": "Heat Transfer",
            "STA": "State Variables and Equations",
            "FLT": "First Law of Thermodynamics",
            "SLT": "Second Law of Thermodynamics",
            "EFI": "Engine Efficiency",

            "RAM": "Ramps",
            "PUL": "Pulleys",
            "LEV": "Levers",
            "MAD": "Mechanical Advantage",

            "LOR": "Lorentz Transformation",
            "STR": "Special Theory of Relativity",
            "HEI": "Heisenberg's Uncertainty Principle",
            "DEB": "DeBroglie's Wavelength",
            "EMC": "Mass-Energy Equivalence",
            "STD": "Particles in the Standard Model",
            "WAV": "The Wave Function",

            "NUC": "Atomic and Nuclear Structure",
            "RAD": "Radioactivity and Decay",
            "ALF": "Alpha Decay",
            "BET": "Beta Decay",
            "FIS": "Nuclear Fission",
            "FUS": "Thermonuclear Fusion",
            "TFF": "The Fundamental Forces",
            "DEF": "Mass Defect and Binding Energy",

            "COU": "Coulumb's Law",
            "ELF": "Electric Fields",
            "GAU": "Gauss' Law",
            "EPS": "Equipotential Surfaces",

            "CDT": "Conductors",
            "DSM": "Doped Semiconductors",
            "CNY": "Conductivity",
            "PNJ": "The PN Junction",
            "RTY": "Resisitivity",

            "CAP": "Capacitance",
            "ELE": "Electrical Energy",

            "OHM": "Ohm's Law",
            "EMF": "Voltage, Potential Difference, Electromotive Force",
            "KIR": "Kirchoff's Laws",
            "RCC": "RC Circuits",
            "SSP": "Simple Series/Parallel Circuits",

            "TRA": "Transformers",
            "ACP": "Power in AC Circuits",

            "HAL": "The Hall Effect",
            "LRF": "Lorentz Force",

            "MCH": "Magnetic Force due to a moving charge",
            "MSO": "Magnetic Force due to a solenoid",
            "MWI": "Magnetic Force due to/between current carrying wires",
            "AMP": "Ampere's Law",
            "RHR": "The Right Hand Rule",

            "FAR": "Faraday's Law of Induction",
            "LEN": "Lenz' Law",
            "GEN": "Electrical Generators",
            "IND": "Inductance",
            "LRC": "LR Circuits",
            "EMO": "Electromagnetic Oscillations",

            "DIP": "Magnetic Dipoles",
            "MGN": "Magnetization",
            "GLM": "Gauss' Law for Magnetism",
            "ATO": "atomic Magnetism",

            "MAX": "Maxwell's Equations and Travelling Waves",
            "POY": "Energy Transport and the Poynting Vector",

            "STQ": "Stellar Quantities",
            "CNE": "Stellar Characteristics and Evolution",
            "COS": "Cosmology",
            "STP": "Stellar Processes",
            "BLB": "Black Bodies",

            "LAB": "Lab Skills",

            "CALC": "Calculus-Based"
        }
    },
    "Chemistry": {
        "Units": {
            "01C": "Measurement",
            "02C": "Atomic Structure",
            "03C": "Compound Nomenclature",
            "04C": "Stoichiometry",
            "05C": "Solutions",
            "06C": "Types of Reactions",
            "07C": "Gases",
            "08C": "Thermochemistry",
            "09C": "Atomic Periodicity",
            "10C": "Atomic Bonding",
            "11C": "Liquids and Solids",
            "12C": "Kinetics",
            "13C": "Chemical Equilibria",
            "14C": "Acids and Bases",
            "15C": "Physical Chemistry",
            "16C": "Electrochemistry",
            "17C": "Nuclear Chemistry",
            "18C": "Coordination Chemistry",
            "19C": "Organic Chemistry",
            "20C": "Biochemistry",
            "21C": "Lab Skills"
        },
        "Concepts": {
            "DIMEN": "Dimensional Analysis",
            "SIGFG": "Significant Figures in Calculations",

            "ASPEC": "Atomic Spectrums",
            "BOHRM": "The Bohr Model",
            "DALTT": "Dalton's Atomic Theory",
            "QMMOA": "The Quantum Mechanical Model of the Atom",
            "ORBTL": "Orbital Shapes, Energies, and Principles",

            "COVCO": "Covalent Compounds",
            "IONCO": "Ionic Compounds",
            "ACICO": "Acids",

            "TMOLE": "The Mole",
            "MSPEC": "Mass Spectrometry",
            "ATOMM": "Atomic and Molar Mass",
            "PERCC": "Percent Composition",
            "BALEQ": "Balancing Equations",
            "LIMRE": "Limiting Reactant",
            "GSSTI": "Gas and Solution Stoichiometry",

            "SOLUB": "Solubility",
            "ELECT": "Electrolytes",
            "MOLAR": "Molarity",
            "ENESF": "Energies of Solution Formation",
            "COLGP": "Colligative Properties of Solution",
            "KAYSP": "Solubility Product",
            "QUALI": "Qualitative Analysis of Precipitation",

            "PRECI": "Precipitation Reactions",
            "PHREA": "Acid-Base Reactions",
            "REDOX": "Oxidation-Reduction Reactions",
            "COMBS": "Combustion Reactions",

            "PRESU": "Pressure",
            "BGLAL": "The Gas Laws of Boyle, Charles, and Avogadro",
            "IDEAL": "The Ideal Gas Law",
            "DLOPP": "Dalton's Law of Partial Pressures",
            "KMTOG": "Kinetic Molecular Theory of Gases",
            "EFADF": "Effusion and Diffusion",
            "REALG": "Real Gases",

            "ENTHP": "Enthalpy",
            "CALOR": "Calorimetry",
            "HESSL": "Hess' Law",

            "PTABL": "The Periodic Table",
            "AUFBW": "The Aufbau Principle",
            "PTRND": "Periodic Trends",
            "REPEL": "The Representative Elements",

            "BTYPE": "Bond Types",
            "DPOLE": "Dipole Moment",
            "BONDE": "Bond Energies",
            "IOCHA": "Ionic Character of Bonds",
            "LEWIS": "Lewis Structures",
            "RESON": "Resonance Structures",
            "VSEPR": "The VSEPR Model",
            "HYBRD": "Hybridization",

            "INTMF": "Intermolecular Forces",
            "METAL": "Metallic Solids",
            "NETSO": "Network Solids",
            "MOLSO": "Molecular Solids",
            "IONSO": "Ionic Solids",
            "VAPPS": "Vapor Pressure",
            "PHASC": "Phase Changes and Diagrams",

            "RATEL": "Rate Laws",
            "RMECH": "Reaction Mechanisms",
            "CATAL": "Catalysts",
            "INTEG": "Integrated Rate Laws",
            "KINMD": "The Collision Model for Kinetics",

            "EQLCS": "The Equilibrium Constant",
            "REQUO": "Reaction Quotients",
            "KAYPE": "Equilibrium Involving Pressure",
            "LECHA": "Le Chatellier's Principle",

            "STREN": "Acid and Base Strength",
            "PHVAL": "The pH Scale",
            "CALCK": "Calculating equilibrium constants and pH for Acids and Bases",
            "POLYP": "Polyprotic Acids",
            "SALTS": "Acid-Base Properties of Salts",
            "ABMOD": "Acid-Base Models",
            "BUFFR": "Buffers",
            "ABTIT": "Titrations and pH Curves",
            "ABIND": "Acid-Base Indicators",

            "ENTRP": "Entropy",
            "GIBBS": "Gibbs Free Energy",
            "GEQUI": "Free Energy and Equilibrium",

            "BALRD": "Balancing Oxidation-Reduction Reactions",
            "GALVN": "Galvanic Cells",
            "SRPOC": "Standard Reduction Potentials",
            "GENFE": "Cell Potential and Free Energy",
            "NERNS": "Cell Potential and Concentration",
            "BATCO": "Batteries and Corrosion",
            "ELTRS": "Electrolysis",

            "RDDEC": "Types of Radioactive Decay",
            "HALFL": "Half Lives",
            "RDKIN": "Radioactive Decay Kinetics",
            "MDABE": "Mass Defect and Binding Energy",
            "FISFU": "Nuclear Fission and Fusion",

            "TRNSM": "Transition Metals and Their Properties",
            "COORC": "Coordination Compounds and Complex Ions",

            "ALKAN": "Alkanes and Cycloalkanes",
            "ISOMR": "Isomerism and Stereoisomerism",
            "ALKYL": "Alkyl Halide Reactions",
            "ALKEN": "Addition Reactinos and Alkenes",
            "ALKYN": "Alkynes",
            "SUBEL": "Substitution and Elimination Reactions",
            "PLYMR": "Synthetic and Natural Polymers",
            "SPECS": "Spectroscopy",
            "AROSB": "Aromatic Substitutions",
            "AMINE": "Amines",
            "FRDCL": "Free Radical Reactions",
            "ORGMT": "Organometallics",
            "ORGCF": "Organic Chemistry Foundations",
            "AETEP": "Alcohols, Ethers, and Epoxides",

            "BIOMO": "Biomolecules",
            "METAB": "Metabolismic Processes",

            "LABSK": "Lab Skills"
        }
    },
    "Biology": {
        "Units": {
            "01B": "Molecular Biology",
            "02B": "Cell Biology",
            "03B": "Metabolism",
            "04B": "Heredity and Genetics",
            "05B": "Evolution",
            "06B": "Biosystematics",
            "07B": "Ecology",
            "08B": "Human Anatomy and Physiology",
            "09B": "Plant Anatomy and Physiology",
            "10B": "Lab Skills"
        },
        "Concepts": {
            "MACM": "Macromolecules",
            "ENZY": "Enzymes",
            "SOLU": "Solutions",
            "WATE": "Properties of Water",

            "ORGL": "Organelles",
            "CMEM": "Membrane Structure and Function",
            "CELT": "Cell Transport",
            "CELC": "Cell Communication",
            "CELY": "Cell Cycle",

            "CELR": "Cellular Respiration",
            "PHOT": "Photosynthesis",
            "FERM": "Fermentation",

            "DNAR": "DNA Replication",
            "MUTA": "Mutations",
            "MITO": "Mitosis",
            "MEIO": "Meiosis",
            "INHT": "Inheritance",
            "CHRO": "Chromosomes",
            "PEDI": "Pedigrees",
            "TRSC": "Transcription",
            "TRSL": "Translation",
            "GEXP": "Gene Expression",
            "ELEC": "Electrophrosis and PCR",
            "EDIT": "Gene Editing",

            "NATS": "Natural Selection",
            "DIFF": "Diffrentiation",
            "SPEC": "Species Diversity",
            "ADAP": "Adaptation",
            "POPD": "Population Dynamics",

            "TAXO": "Taxonomy",
            "PHYL": "Phylogeny",
            "PLNT": "Plant Classification",
            "ANIM": "Animal Classification",
            "FNGI": "Fungi",
            "PROK": "Prokaryotes",
            "PROT": "Protists",
            "NHAP": "Non-Human Animal Physiology",

            "ECOS": "Ecosystems",
            "CLIM": "Climate Change",
            "POPE": "Population Ecology",

            "DIGT": "Digestive System",
            "RESP": "Respiratory System",
            "CARD": "Cardiovascular System",
            "INTG": "Intergumentary System",
            "MUSK": "Musculoskeletal System",
            "IMMU": "Immune System",
            "LYMP": "Lymphatic System",
            "OSMO": "Osmoregulatory System",
            "ENCR": "Endocrine System",
            "REPR": "Reproductive System",
            "NERV": "Nervous System",
            "DEVT": "Animal Development",
            "SPCO": "Special Organs in Animals",
            "PATH": "Pathology",
            "ETHO": "Ethology",

            "PSTR": "Plant Structure",
            "PDEV": "Plant Development",
            "PPHY": "Plant Physiology",
            "PREP": "Plant Reproduction",

            "LABS": "Lab Skills"
        }
    }
};

module.exports = { tags: tags };
