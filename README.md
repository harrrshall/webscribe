**1. Key Definitions**
* **Tribology:** Science of interacting surfaces in relative motion (Friction, Wear, Lubrication).
* **Tribos:** Greek word for "Rubbing".
* **Friction:** Resistance to relative motion.
* **Wear:** Undesirable removal of material.
**2.History Timeline**
* **1880 BC:** Egyptians used lubricant on sleds.
* **1500 AD:** **Da Vinci** introduced the concept of Coefficient of Friction ($\mu$).
* **1699:** **Amontons** laws: $F \propto Load$ (Independent of Area).
* **1785:** **Coulomb** distinguished Static vs. Kinetic friction.
* **1966:** **Jost Report** coined "Tribology" and highlighted economic savings.
**3. Economic Benefits (The "Why" of Tribology) **
* Reduces **Energy** consumption (Friction loss).
* Reduces **Material** loss (Wear).
* Reduces **Maintenance** costs.
* Increases **Reliability**.
**4. Interdisciplinary Fields**
* **Fluid Dynamics:** Lubrication flow.
* **Material Science:** Surface hardening, coatings.
* **Chemistry:** Lubricant additives, corrosion.
* **Physics:** Atomic interactions, forces.

**5.Essential Formula**
* $$F = \mu \times N$$
    * $F$ = Friction Force
    * $\mu$ = Coefficient of Friction
    * $N$ = Normal Load (Weight)

### Unit II Cheatsheet (Formulas & Key Definitions)**
#### **1. Surface Texture Parameters**
* **$R_a$ (CLA - Arithmetic Mean Deviation):**
    $$R_a = \frac{1}{L} \int_0^L |y(x)| dx \approx \frac{\sum |y|}{n}$$
    *Average height of irregularities from the mean line.*
* **$R_q$ (RMS - Root Mean Square):**
    $$R_q = \sqrt{\frac{1}{L} \int_0^L y^2 dx} \approx \sqrt{\frac{\sum y^2}{n}}$$
    *More sensitive to large peaks/valleys than $R_a$.*
* **$R_z$ (Ten-Point Average):**
    $$R_z = \frac{\sum(\text{5 highest peaks}) + \sum(\text{absolute val. of 5 deepest valleys})}{5}$$
* **$R_y$ / $R_{max}$:** Distance between the highest peak and the lowest valley within the sampling length.
* **Skewness ($R_{sk}$):** Measure of symmetry of the profile.
    * $R_{sk} = 0$: Symmetric (Gaussian).
    * $R_{sk} > 0$: High spikes (peaks).
    * $R_{sk} < 0$: Deep scratches (valleys—good for lubricant retention).
#### **2. Contact Geometry Types**
| Type | Geometry | Contact Area | Stress Level | Example |
| :--- | :--- | :--- | :--- | :--- |
| **Conformal** | Surfaces fit together | Large Area | Low | Journal Bearing |
| **Non-Conformal** | Do not fit perfectly | Point or Line | Very High | Ball Bearing, Gears |
#### **3. Hertzian Contact (Non-Conformal)**
* **Point Contact (Sphere on Sphere/Plane):**
    * Contact Shape: Ellipse (or Circle).
    * Pressure Distribution: Hemispherical.
    * $P_{max}$ occurs at the center ($r=0$).
    * **Max Shear Stress:** Occurs **subsurface** (at depth $\approx 0.48a$). This causes fatigue/pitting[cite: 5016].
* **Line Contact (Cylinder on Cylinder/Plane):**
    * Contact Shape: Rectangular strip.
    * $P_{max} = \frac{2F}{\pi b l}$ (where $b$ is half-width, $l$ is length).
#### **4. Measurement Techniques**
* **Tomlinson Surface Meter:** Mechanical-cum-optical. Uses a diamond stylus and smoked glass trace. Reliable but slow.
* **Profilometer:** Direct reading instrument. Stylus movement converts to voltage via induction coil. Good for deep bores.
* **Talysurf:** Carrier modulating principle. Very accurate, gives direct numerical assessment and profile recording.
Based on the syllabus provided and the detailed analysis of your study materials (specifically `MSD_204_Unit_I...pdf`, `FT.pdf`, and `faq of module 2.pdf`), I have curated the **High-Probability Question Bank** for Unit III.
### **Part 3: Unit III Cheat Sheet**
| **Concept** | **Key Definition / Formula** | **Key Notes** |
| :--- | :--- | :--- |
| **First Law of Friction** | $F \propto W$ (Load) | Friction is independent of area. |
| **Static vs. Kinetic** | $\mu_s > \mu_k$ | Caused by time-dependent junction growth (creep) during static contact. |
| **Adhesion Theory** | $\mu = \frac{s}{H}$ | $s$ = Shear strength, $H$ = Hardness. Predicts low friction ($\approx 0.2$). |
| **Ploughing (Deformation)**| $\mu_d = \frac{2}{\pi} \cot\theta$ | $\theta$ = Semi-cone angle. Sharper asperity (lower $\theta$) = Higher friction. |
| **Total Friction** | $\mu = \mu_{adh} + \mu_{plough}$ | Friction is the sum of shearing junctions and grooving surface. |
| **Junction Growth** | Area $A$ increases under shear | Explains why real friction is higher than simple adhesion theory predicts. |
| **Stick-Slip** | Friction Instability | Caused by $\mu_s > \mu_k$. Results in jerky motion (squeaking brakes). |
| **Polymers** | Viscoelastic friction | Friction depends on speed/temp. Hysteresis loss is a major factor. |
| **Ceramics** | Brittle / Hard | Low adhesion, but prone to micro-fracture/abrasion. |
