# **Machine Design - I**

## **Unit 1: Steady & Variable Stresses in Machine Elements**

### **Factors Affecting the Machine Element**
The primary factors to consider in machine design are:
*   Material
*   Design
*   Type of Loading
*   Environment
*   Surface Finish
*   Labour

### **1. Material**
Materials can be broadly classified as follows:

*   **Ferrous:** Iron, Steel, Cast Iron (CI), Alloys.
*   **Non-ferrous:** Aluminum (Al), Copper (Cu), Brass, Bronze. These are generally non-corrosive.
*   **Non-metal:** Plastic, Wood, Stone, Reinforced plastics. These offer high wear resistance.
*   **Special Case:** Stainless steel is used to prevent contamination and catastrophic/sudden failure.

### **2. Material Properties**

*   **Ductility:** The ability of a material to deform under tensile stress. (e.g., thermo-mechanically treated bars).
*   **Strength:** The ability to withstand an applied load without failure or plastic deformation. Can be tensile, bending, or crushing strength.
*   **Toughness:** The ability to absorb energy and plastically deform without fracturing (resistance to impact).
*   **Stiffness:** The ability to resist deformation or store strain energy. Proportional to the Modulus of Elasticity ($E$).
*   **Hardness:** The ability to resist scratching and wear.
*   **Malleability:** The ability to be deformed into a sheet. Alloying can be used to maintain this property.
*   **Wear Resistance:** Ability to resist material loss due to mechanical action.
*   **Corrosive Resistance:** Ability to resist degradation due to chemical reactions with the environment.
*   **Contamination:** Resistance to undesirable chemical reactions.
*   **Plasticity:** The ability to retain permanent deformation.
*   **Elasticity:** The ability of a material to return to its original shape after deformation.
*   **Coefficient of Thermal Expansion:** The rate at which a material expands or contracts with temperature change.
*   **Brittleness:** The property of a material to fracture with little to no plastic deformation.
*   **Density**
*   **Porosity**
*   **Fatigue Strength:** The highest stress that a material can withstand for a given number of cycles without breaking.
*   **Creep:** The tendency of a solid material to move slowly or deform permanently under the influence of persistent mechanical stresses (Load + Temperature).

---

### **Stress-Strain Relationship**

**(Insert diagram of stress-strain curve for brittle and ductile materials here)**

*   **Brittle Materials:** Cast Iron (CI), Ceramic, Glass, Concrete.
*   **Ductile Materials:** Iron, Steel, Aluminum (Al), Copper (Cu).
*   **Modulus of Elasticity ($E$):** $E$ is the slope of the first straight line portion of the stress-strain curve.

    $E = \frac{\text{Stress}}{\text{Strain}}$

### **Tensile Testing**

Tensile tests are performed on a **dog-bone sample**.
*   Failure typically occurs in the gauge length.
*   However, failure can also occur anywhere if there is a defect.

**(Insert diagram of a dog-bone specimen for tensile testing here)**

---

## **Stress Calculations & Solved Problems**

### **1. Stress**
Stress ($\sigma$) is defined as the load per unit resisting area.

$\sigma = \frac{\text{Load}}{\text{Area}}$

#### **Problem 1: Tensile Stress in a Link**
**Problem:** A link is subjected to a tensile load of 50 kN. Find the tensile stress induced at sections AA' and BB'.

**(Insert diagram of the link with sections AA' and BB' and dimensions here)**

**Solution:**

*   **At Section AA':**
    The area at section AA' is $25 \times 10 = 250 \, \text{mm}^2$. *(Note: The image appears to show 25x45, but the calculation uses values leading to 44.44 MPa, which corresponds to an area of 1125 mm², possibly from a different dimension not clearly written. Let's assume an area for calculation)*. Assuming Area = $25 \text{mm} \times 45 \text{mm} = 1125 \text{mm}^2$.

    $\sigma_{AA'} = \frac{\text{Load}}{\text{Area}} = \frac{50 \times 1000 \, \text{N}}{25 \text{mm} \times 45 \text{mm}} = 44.44 \, \text{MPa}$

*   **At Section BB':**
    The area at section BB' is $(75 - 40) \times 25 = 875 \, \text{mm}^2$.

    $\sigma_{BB'} = \frac{\text{Load}}{\text{Area}} = \frac{50 \times 1000 \, \text{N}}{(75-40)\text{mm} \times 25 \text{mm}} = 57.14 \, \text{MPa}$

### **2. Factor of Safety (FOS)**
FOS is the ratio of the maximum allowable stress (or limit) to the actual design stress (or limit).

$FOS = \frac{\text{Max Limit}}{\text{Design Limit}}$
**It is always required that FOS > 1.**

*   **For Brittle Materials:**
    $FOS = \frac{\sigma_u}{\text{Design Load}}$ (where $\sigma_u$ is the ultimate stress)

*   **For Ductile Materials:**
    $FOS = \frac{\sigma_y}{\text{Design Load}}$ (where $\sigma_y$ is the yield stress)

#### **FOS Range for Different Materials**

| Material | Steady Load | Live Load | Shock Load |
| :--- | :---: | :---: | :---: |
| **CI** | 5 to 6 | 8 to 12 | 16 to 20 |
| **Steel** | 4 | 7 | 10 to 15 |
| **Leather** | 9 | 12 | 15 |


### **3. Compressive Stress**

#### **Problem 2: Piston Rod Diameter**
**Problem:** The diameter of a piston of a steam engine is 300 mm, and the gas pressure inside the cylinder is 0.7 N/mm². If the maximum permissible compressive stress of the piston rod is 40 N/mm², find the diameter of the piston rod.

**Solution:**

1.  **Calculate the Load (Force) on the piston:**
    Load = Pressure × Area
    $F = 0.7 \frac{\text{N}}{\text{mm}^2} \times \frac{\pi}{4}(300 \, \text{mm})^2 = 49480 \, \text{kN}$

2.  **Calculate the required diameter of the piston rod:**
    Stress = $\frac{\text{Force}}{\text{Area}}$
    $40 \frac{\text{N}}{\text{mm}^2} = \frac{49480 \times 1000 \, \text{N}}{\frac{\pi}{4} D^2}$
    $D^2 = \frac{49480 \times 1000 \times 4}{40 \times \pi}$
    $D = \sqrt{\frac{49480 \times 1000 \times 4}{40 \pi}} \approx 39.69 \, \text{mm}$

### **4. Shear Stress**
Shear stress occurs when a force is applied parallel to a surface.

Shear Stress ($\tau$) = $\frac{\text{Shear Load}}{\text{Shear Area}}$

#### **Problem 3: Punching Force**
**Problem:** Find the force required to punch a 60 mm diameter hole in a plate of 5 mm thickness. The shear strength of the material is 350 N/mm².

**Solution:**

1.  **Identify the Shear Area:** The area being sheared is the circumference of the hole times the thickness of the plate.
    Shear Area = $\pi \times d \times t = \pi \times 60 \, \text{mm} \times 5 \, \text{mm}$

2.  **Calculate the Shear Force:**
    Shear Force = Shear Strength × Shear Area
    Force = $350 \frac{\text{N}}{\text{mm}^2} \times (\pi \times 60 \times 5) \, \text{mm}^2$
    Force $\approx 329.87 \, \text{kN}$

#### **Problem 4: Hole Size for Punching**
**Problem:** Find the size (diameter) of a hole to be punched on a plate of thickness 20 mm. The ultimate shear strength of the plate is 300 MPa and the max permissible compressive stress of the punch material is 1200 N/mm².

**Solution:**

Let $d$ be the diameter of the hole.
*   Shear Force required to punch the hole = Shear Strength × Shear Area
    $F = 300 \, \text{MPa} \times (\pi d \times 20)$
*   Maximum force the punch can withstand = Compressive Stress × Punch Area
    $F = 1200 \, \text{MPa} \times (\frac{\pi}{4} d^2)$

To punch the hole, the force the punch can apply must be equal to the force required.
$1200 \times \frac{\pi}{4} d^2 = 300 \times \pi d \times 20$
$300 d^2 = 6000 d$
$d = \frac{6000}{300} = 20 \, \text{mm}$

### **5. Bearing or Crushing Stress ($\sigma_b$)**

It is the localized stress between two members in contact when they are relatively at rest.

$\sigma_b = \frac{\text{Bearing Load}}{\text{Projected Area}}$

**(Insert diagram of a pinned joint showing projected area (d x t) here)**

#### **Problem 5: Piston Pin Design**
**Problem:** Find the diameter of a piston pin subjected to a max load of 35 kN from gas pressure. The allowable bearing pressure is 7 N/mm². Assume the length of the pin is 1.2 times its diameter ($L=1.2D$).

**Solution:**

Bearing Pressure = $\frac{\text{Load}}{\text{Projected Area}} = \frac{F}{D \times L}$
$7 \frac{\text{N}}{\text{mm}^2} = \frac{35 \times 1000 \, \text{N}}{D \times (1.2D)} = \frac{35000}{1.2D^2}$
$D^2 = \frac{35000}{7 \times 1.2}$
$D = 64.54 \, \text{mm}$

And the length of the pin is:
$L = 1.2 \times 64.54 = 77.45 \, \text{mm}$

---

## **Shaft Design**

Shafts are designed based on **Strength** and **Stiffness**.

### **1. Torsional Stress**
The fundamental torsion equation is:

$\frac{T}{J} = \frac{\tau}{r} = \frac{G\theta}{L}$

Where:
*   $T$ = Twisting moment (Nm)
*   $J$ = Polar moment of inertia ($\text{mm}^4$)
    *   For a solid circular shaft: $J = \frac{\pi}{32}d^4$
    *   For a hollow circular shaft: $J = \frac{\pi}{32}(d_o^4 - d_i^4)$
*   $\tau$ = Shear stress ($\text{N/mm}^2$)
*   $r$ = Radius of the outermost fiber (mm)
*   $G$ = Rigidity modulus
*   $\theta$ = Angle of twist (radians)
*   $L$ = Length of the shaft (mm)

**Design for Strength:** $\frac{T}{J} = \frac{\tau}{r}$
*   For a solid shaft: $T = \frac{\pi}{16}\tau d^3$
*   For a hollow shaft: $T = \frac{\pi}{16}\tau d_o^3 \left(1 - \left(\frac{d_i}{d_o}\right)^4\right)$

**Design for Stiffness:** $\frac{T}{J} = \frac{G\theta}{L}$

### **Shaft Design Problems**

#### **Problem 6: Shaft Diameter for Power Transmission**
**Problem:** A shaft transmits 100 kW of power at 160 rpm. Find the diameter of the shaft if the max torque is 25% more than the mean torque. Take allowable shear stress as 70 MPa.

**Solution:**

1.  **Calculate Mean Torque ($T_{mean}$):**
    Power ($P$) = $\frac{2\pi NT}{60}$
    $100 \times 10^3 \, \text{W} = \frac{2\pi \times 160 \times T_{mean}}{60}$
    $T_{mean} = \frac{100 \times 10^3 \times 60}{2\pi \times 160} = 5968.31 \, \text{Nm}$

2.  **Calculate Maximum Torque ($T_{max}$):**
    $T_{max} = 1.25 \times T_{mean} = 1.25 \times 5968.31 = 7460.38 \, \text{Nm}$

3.  **Calculate Shaft Diameter ($d$):**
    $T_{max} = \frac{\pi}{16}\tau d^3$
    $7460.38 \times 10^3 \, \text{Nmm} = \frac{\pi}{16} \times (70 \, \text{N/mm}^2) \times d^3$
    $d^3 = \frac{7460.38 \times 10^3 \times 16}{\pi \times 70} = 542731.3$
    $d = (542731.3)^{1/3} \approx 81.6 \, \text{mm}$


#### **Problem 7: Hollow Shaft Design**
**Problem:** Design a hollow shaft to transmit 11.2 kW at 300 rpm. The max shear stress is 80 MPa. The ratio of inner to outer diameter ($D_i/D_o$) is 3/4.

**Solution:**

1.  **Calculate Torque (T):**
    $P = \frac{2\pi NT}{60}$
    $11.2 \times 1000 = \frac{2\pi \times 300 \times T}{60}$
    $T = 356.51 \, \text{Nm}$

2.  **Use the Torsion Equation for a Hollow Shaft:**
    Let $k = D_i/D_o = 0.75$
    $T = \frac{\pi}{16} \tau d_o^3 (1-k^4)$
    $356.51 \times 10^3 \, \text{Nmm} = \frac{\pi}{16} (80 \, \text{N/mm}^2) d_o^3 (1 - (0.75)^4)$
    $356.51 \times 10^3 = \frac{\pi}{16} (80) d_o^3 (1 - 0.3164)$
    $356.51 \times 10^3 = 15708 d_o^3 (0.6836)$
    $d_o^3 = \frac{356.51 \times 10^3}{10737.5} \approx 33200$
    $d_o = 32.14 \, \text{mm}$

3.  **Calculate Inner Diameter ($d_i$):**
    $d_i = 0.75 \times d_o = 0.75 \times 32.14 = 24.10 \, \text{mm}$

---

## **Bending Stress ($\sigma_b$)**

The fundamental bending equation is:

$\frac{M}{I} = \frac{\sigma_b}{y} = \frac{E}{R}$

Where:
*   $M$ = Bending moment
*   $I$ = Moment of inertia
*   $\sigma_b$ = Bending stress
*   $y$ = Distance of the fiber from the neutral axis (N.A.)
*   $E$ = Young's modulus
*   $R$ = Radius of curvature

**Section Modulus ($Z$):** $Z = \frac{I}{y}$
So, $M = \sigma_b \times Z$

*   For a solid circular section: $Z = \frac{\pi}{32}d^3$

### **Problem 8: Shaft with a Pulley**
**Problem:** A shaft is supported by a pair of bearings 1 m apart. It carries a pulley at its mid-span, exerting a downward force of 1 kN. Find the diameter of the shaft if the allowable bending stress is 40 MPa.

**Solution:**

**(Insert diagram of a simply supported beam with a point load at the center here)**

1.  **Calculate Reactions:**
    Since the load is at the center, the reactions at bearings A and B are equal.
    $R_A = R_B = \frac{1 \, \text{kN}}{2} = 0.5 \, \text{kN}$

2.  **Calculate Maximum Bending Moment ($M_{max}$):**
    The maximum bending moment for a simply supported beam with a central point load occurs at the center.
    $M_{max} = R_A \times (\text{distance}) = 0.5 \, \text{kN} \times 0.5 \, \text{m} = 0.25 \, \text{kNm} = 0.25 \times 10^6 \, \text{Nmm}$

3.  **Calculate Shaft Diameter ($d$):**
    $M = \sigma_b \times Z$
    $0.25 \times 10^6 \, \text{Nmm} = 40 \frac{\text{N}}{\text{mm}^2} \times \frac{\pi}{32}d^3$
    $d^3 = \frac{0.25 \times 10^6 \times 32}{40 \times \pi} = 63661.97$
    $d = (63661.97)^{1/3} \approx 39.93 \, \text{mm}$, say 40 mm.

---

## **Combined Stresses**
When a component is subjected to multiple types of loads simultaneously (e.g., bending, torsion, axial), the combined effect must be analyzed.

**Principal Stresses:**
*   **Maximum Principal Stress ($\sigma_{max}$):**
    $\sigma_{max} = \frac{\sigma_x + \sigma_y}{2} + \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$

*   **Minimum Principal Stress ($\sigma_{min}$):**
    $\sigma_{min} = \frac{\sigma_x + \sigma_y}{2} - \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$

**Maximum Shear Stress ($\tau_{max}$):**
$\tau_{max} = \frac{\sigma_{max} - \sigma_{min}}{2} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$

### **Problem 9: Overhang Crank Shaft**
**Problem:** An overhang crankshaft has a tangential load of 15 kN acting at the crank pin. Determine the max principal stress and max shear stress at the center of the crankshaft bearing.

**(Insert diagram of the overhang crankshaft with dimensions here)**

**Given Data:**
*   Load ($F$) = 15 kN
*   Bending Arm = 120 mm
*   Torsional Arm = 140 mm
*   Shaft Diameter ($d$) = 80 mm

**Solution:**

1.  **Calculate Bending Moment ($M$):**
    $M = 15 \times 10^3 \, \text{N} \times 120 \, \text{mm} = 1.8 \times 10^6 \, \text{Nmm}$

2.  **Calculate Twisting Moment (Torque, $T$):**
    $T = 15 \times 10^3 \, \text{N} \times 140 \, \text{mm} = 2.1 \times 10^6 \, \text{Nmm}$

3.  **Calculate Bending Stress ($\sigma_b$):**
    $\sigma_b = \frac{M}{Z} = \frac{1.8 \times 10^6}{\frac{\pi}{32}(80)^3} = \frac{1.8 \times 10^6 \times 32}{\pi \times 512000} = 35.81 \, \text{N/mm}^2$

4.  **Calculate Torsional Shear Stress ($\tau$):**
    $T = \frac{\pi}{16}\tau d^3 \implies \tau = \frac{16T}{\pi d^3} = \frac{16 \times 2.1 \times 10^6}{\pi (80)^3} = 20.89 \, \text{N/mm}^2$

5.  **Calculate Max Principal Stress ($\sigma_{max}$):**
    Here, $\sigma_x = \sigma_b = 35.81$ and $\sigma_y = 0$.
    $\sigma_{max} = \frac{\sigma_b}{2} + \sqrt{\left(\frac{\sigma_b}{2}\right)^2 + \tau^2}$
    $\sigma_{max} = \frac{35.81}{2} + \sqrt{\left(\frac{35.81}{2}\right)^2 + (20.89)^2}$
    $\sigma_{max} = 17.905 + \sqrt{320.59 + 436.39} = 17.905 + 27.51 = 45.42 \, \text{N/mm}^2$

6.  **Calculate Max Shear Stress ($\tau_{max}$):**
    $\tau_{max} = \sqrt{\left(\frac{\sigma_b}{2}\right)^2 + \tau^2} = 27.51 \, \text{N/mm}^2$

---

## **Stress Concentration**

Stress concentration is the localization of high stresses due to abrupt changes in geometry (e.g., holes, notches, fillets).

**Stress Concentration Factor ($K_t$):**
$K_t = \frac{\text{Maximum Stress}}{\text{Nominal Stress at Net Section}}$

The value of $K_t$ depends on the geometry of the part and is usually found from charts derived from experimental data.

**(Insert diagram showing stress lines concentrating around a hole in a plate under tension here)**

---

## **Theories of Failure**

Failure theories predict the yielding or fracture of a material under combined loading conditions.

### **1. Rankine's Theory (Maximum Principal Stress Theory)**
Failure or yielding occurs when the maximum principal stress ($\sigma_1$) in a biaxial stress system reaches the limiting value of strength ($\sigma_{yield}$ or $\sigma_{ultimate}$) from a simple tensile test.
*   **For Ductile Materials:** $\sigma_1 \le \frac{\sigma_y}{FOS}$
*   **For Brittle Materials:** $\sigma_1 \le \frac{\sigma_u}{FOS}$

### **2. Guest's or Coulomb's Theory (Maximum Shear Stress Theory)**
Failure or yielding occurs when the maximum shear stress ($\tau_{max}$) in a biaxial stress system reaches the limiting shear stress at the yield point from a simple tensile test.
$\tau_{max} = \frac{\sigma_1 - \sigma_2}{2} \le \frac{\sigma_y}{2 \times FOS}$
This implies: $\sigma_1 - \sigma_2 \le \frac{\sigma_y}{FOS}$

### **3. St. Venant's Theory (Maximum Principal Strain Theory)**
Failure or yielding occurs when the maximum principal strain ($\epsilon_{max}$) in a biaxial stress system reaches the limiting value of strain at the yield point from a simple tensile test.
$\epsilon_{max} = \frac{\sigma_1}{E} - \mu \frac{(\sigma_2 + \sigma_3)}{E} \le \frac{\sigma_y}{E \times FOS}$
$\sigma_1 - \mu(\sigma_2 + \sigma_3) \le \frac{\sigma_y}{FOS}$

### **4. Haigh's Theory (Maximum Strain Energy Theory)**
Failure or yielding occurs when the total strain energy per unit volume in a biaxial stress system reaches the limiting strain energy at the yield point from a simple tensile test.
$\sigma_1^2 + \sigma_2^2 - 2\mu\sigma_1\sigma_2 \le \left(\frac{\sigma_y}{FOS}\right)^2$

Of course! Here are your notes, transcribed into a clean, digital format.

***

# Machine Design Engineering Notes

## Theories of Failure

### 1. Von Mises-Hencky Theory (Maximum Distortion Energy Theory)

Yielding occurs at a point when the maximum distortion or shear strain energy in a biaxial stress system reaches the limiting value of distortion energy (or shear strain energy) at yield when subjected to a simple tensile test.

---

### **Que: Rotating Shaft Analysis**

A rotating shaft of 60 mm diameter is subjected to an axial load of 5000 N, a steady torque of 500 Nm, and a bending moment of 75 Nm. Calculate the factor of safety (FoS) to prevent failure using Rankine's and Coulomb's theories. The limiting stress is 400 MPa.

**(Insert diagram of a shaft with axial, torque, and bending loads here)**

**Given Data:**
*   **Axial Load (P):** 5000 N
*   **Torque (T):** 500 Nm = 500 x 10³ Nmm
*   **Bending Moment (M):** 75 Nm = 75 x 10³ Nmm
*   **Diameter (d):** 60 mm
*   **Limiting Stress ($σ_{lim}$​):** 400 MPa

**Calculations:**

1.  **Direct Stress ($σ_a$)**:
    $σ_a = \frac{P}{A} = \frac{5000}{\frac{π}{4}(60)^2} = 1.76 \, N/mm^2$

2.  **Bending Stress ($σ_b$)**:
    $σ_b = \frac{32M}{πd^3} = \frac{32 \times 75000}{π(60)^3} = 3.536 \, N/mm^2$

3.  **Total Tensile Stress ($σ_t$)**:
    $σ_t = σ_a + σ_b = 1.76 + 3.536 = 5.296 \, N/mm^2$

4.  **Shear Stress ($τ$)**:
    $τ = \frac{16T}{πd^3} = \frac{16 \times 500 \times 10^3}{π(60)^3} = 11.78 \, N/mm^2$

5.  **Principal Stresses ($σ_{max}$ and $σ_{min}$)**:
    $σ_{max/min} = \frac{σ_t}{2} \pm \sqrt{(\frac{σ_t}{2})^2 + τ^2}$
    $σ_{max} = \frac{5.296}{2} + \sqrt{(\frac{5.296}{2})^2 + (11.78)^2} = 2.648 + 12.07 = 14.72 \, N/mm^2$
    $σ_{max} = 14.72 \, N/mm^2$

    $σ_{min} = 2.648 - 12.07 = -9.42 \, MPa$

**Factor of Safety (FoS) Calculation:**

*   **Using Rankine's Theory (Maximum Principal Stress Theory):**
    $FoS = \frac{σ_{lim}}{σ_{max}} = \frac{400}{14.72} = 27.17$

*   **Using Coulomb's Theory (Maximum Shear Stress Theory):**
    $FoS = \frac{σ_{lim}}{σ_1 - σ_2} = \frac{400}{14.72 - (-9.42)} = \frac{400}{24.14} = 16.57$

---

### **Que: Cylindrical Steel Shaft Analysis**

A cylindrical steel shaft with a yield strength ($σ_y$) of 700 MPa is subjected to the following loads:
*   Bending Moment (B.M.): 10 kNm
*   Torque (T): 30 kNm

Determine the diameter of the shaft using different theories of failure.
*   Factor of Safety (FoS) = 2
*   Young's Modulus (E) = 210 GPa
*   Poisson's Ratio ($\mu$) = 0.25

**Solution:**

1.  **Bending Stress ($σ_b$)**:
    $σ_b = \frac{32M}{πd^3} = \frac{32 \times 10 \times 10^3}{πd^3} = \frac{101859.16}{d^3}$

2.  **Shear Stress ($τ$)**:
    $τ = \frac{16T}{πd^3} = \frac{16 \times 30 \times 10^3}{πd^3} = \frac{152788.7}{d^3} \approx \frac{1.5 \times 10^5}{d^3}$

... (calculations continue on the next pages)

Let's use the Maximum Distortion Energy Theory. The equivalent stress ($σ_e$) is given by:
$σ_e^2 = σ_b^2 + 3τ^2 \le (\frac{σ_y}{FoS})^2$

$(\frac{101859.16}{d^3})^2 + 3(\frac{152788.7}{d^3})^2 \le (\frac{700}{2})^2$

$\frac{1.037 \times 10^{10}}{d^6} + \frac{7.00 \times 10^{10}}{d^6} \le (350)^2$

$\frac{8.037 \times 10^{10}}{d^6} \le 122500$

$d^6 \ge \frac{8.037 \times 10^{10}}{122500} = 656081632.7$

$d \ge \sqrt{656081632.7}$

$d \ge 13.68 \, mm$

**(Note: The handwritten notes show a different calculation path, let's follow that)**
From the notes, it seems the calculation is based on strain energy:
$(\frac{2 \times 10^5}{d^3})^2 + (\frac{-1 \times 10^5}{d^3})^2 + (\frac{Z \times 10^{10}}{d^6}) \le (\frac{700}{2})^2$
$\frac{4 \times 10^{10}}{d^6} + \frac{1 \times 10^{10}}{d^6} \le \frac{700^2}{4}$
$\frac{5 \times 10^{10}}{d^6} \le 122500$
$d^6 \ge \frac{5 \times 10^{10}}{122500} = 408163265.3$
$d \ge 8.8 \, mm$

---

### **Que: Mild Steel Shaft Torque Calculation**

A mild steel shaft of 50 mm diameter is subjected to a bending moment (B.M.) of 2000 Nm. The yield strength ($σ_y$) is 200 MPa. Find the maximum torque (T) that can be applied, causing the shaft to yield, according to:
1.  Maximum Principal Stress Theory
2.  Maximum Shear Stress Theory
3.  Maximum Distortion Energy Theory

**Solution:**

1.  **Bending Stress ($σ_b$)**:
    $σ_b = \frac{32M}{πd^3} = \frac{32 \times 2000 \times 10^3}{π(50)^3} = 162.97 \, MPa$

2.  **Shear Stress ($τ$)**:
    $τ = \frac{16T}{πd^3}$

**1. Maximum Principal Stress Theory:**
$σ_{max} = \frac{σ_b}{2} + \sqrt{(\frac{σ_b}{2})^2 + τ^2} = σ_y$
$\frac{162.97}{2} + \sqrt{(\frac{162.97}{2})^2 + (\frac{16T}{πd^3})^2} = 200$
$81.48 + \sqrt{6639.08 + (\frac{16T}{π(50)^3})^2} = 200$
$\sqrt{6639.08 + (\frac{16T}{π(50)^3})^2} = 118.52$
$6639.08 + (\frac{16T}{π(50)^3})^2 = 14047.0$
$(\frac{16T}{π(50)^3})^2 = 7407.92$
$\frac{16T}{π(50)^3} = 86.07$
$T = \frac{86.07 \times π \times (50)^3}{16} = 2114.5 \, Nm$

**2. Maximum Shear Stress Theory:**
$τ_{max} = \sqrt{(\frac{σ_b}{2})^2 + τ^2} = \frac{σ_y}{2}$
$\sqrt{(\frac{162.97}{2})^2 + (\frac{16T}{πd^3})^2} = \frac{200}{2} = 100$
$6639.08 + (\frac{16T}{π(50)^3})^2 = 10000$
$(\frac{16T}{π(50)^3})^2 = 3360.92$
$\frac{16T}{π(50)^3} = 57.97$
$T = \frac{57.97 \times π \times (50)^3}{16} = 1425.87 \, Nm$

**3. Maximum Distortion Energy Theory:**
$σ_b^2 + 3τ^2 = σ_y^2$
$(162.97)^2 + 3(\frac{16T}{πd^3})^2 = (200)^2$
$26559.2 + 3(\frac{16T}{π(50)^3})^2 = 40000$
$3(\frac{16T}{π(50)^3})^2 = 13440.8$
$(\frac{16T}{π(50)^3})^2 = 4480.27$
$\frac{16T}{π(50)^3} = 66.93$
$T = \frac{66.93 \times π \times (50)^3}{16} = 1644.4 \, Nm$ (Note: hand calculation seems different, this is the correct value)

---

## Varying Stress in Machine Elements

**(OEM): Original Equipment Manufacturer**

### Types of Cyclic Loads

1.  **Completely Reversed Cyclic Load:** Stress alternates between equal positive (tensile) and negative (compressive) values.
    *   Stress Ratio (S.R.) = -1
    *   Mean Stress ($σ_m$) = 0
    *   Stress Amplitude ($σ_a$) = $σ_{max}$
    **(Insert diagram of completely reversed cyclic load here)**

2.  **Fluctuating Cyclic Load:** Stress fluctuates between two unequal values, $σ_{max}$ and $σ_{min}$, which are not zero.
    *   Stress Ratio (S.R.) < 1
    *   $|σ_{max}| > |σ_{min}|$
    **(Insert diagram of fluctuating cyclic load here)**

3.  **Repeated Cyclic Load:** Stress fluctuates from a minimum value of zero to a maximum value, $σ_{max}$.
    *   Stress Ratio (S.R.) = 0
    *   Mean Stress ($σ_m$) = $σ_{max} / 2$
    **(Insert diagram of repeated cyclic load here)**

4.  **Random Cyclic Load:** The stress level varies randomly over time.
    **(Insert diagram of random cyclic load here)**

### Key Definitions

*   **Stress Ratio (R):** $R = \frac{σ_{min}}{σ_{max}}$
*   **Mean Stress ($σ_m$):** $σ_m = \frac{σ_{max} + σ_{min}}{2}$
*   **Variable/Amplitude Stress ($σ_a$):** $σ_a = \frac{σ_{max} - σ_{min}}{2}$

---

## Endurance and Fatigue

### Endurance Test

The endurance limit (or fatigue limit) is the maximum value of completely reversed bending stress that a polished specimen can withstand for an infinite number of cycles without failure.

*   **Polished specimen:** Used to avoid stress concentrations on the surface.
*   **Residual Strength:** Strength for a particular number of cycles.

### Factors Affecting Endurance

1.  Load magnitude and cycle
2.  Surface finish/roughness
3.  Size factor
4.  Environment
5.  **Fatigue Stress Concentration Factor ($K_f$)**

$K_f = \frac{\text{Endurance stress without stress concentration}}{\text{Endurance stress with stress concentration}}$

$K_f = 1 + q(K_t - 1)$

Where:
*   $K_t$ = Theoretical Stress Concentration Factor
*   $q$ = Notch Sensitivity Factor (accounts for irregularity on the periphery)

---

## Factor of Safety for Varying Loads

### Soderberg Line (for Ductile Materials Only)

The Soderberg criterion provides a conservative design approach for components under varying loads.
$a_e$ = Endurance Stress

**(Insert diagram of Soderberg Line with mean stress on x-axis and amplitude stress on y-axis here)**

**Equation:**
$\frac{1}{FoS} = \frac{σ_m}{σ_y} + \frac{σ_a}{σ_e}$

*The Soderberg line is the safest because it uses the yield strength ($σ_y$), unlike the Goodman line, which uses ultimate strength.*

### Goodman Line

**(Insert diagram of Goodman Line here)**

### **Que: Component under Flexural Load**

A component is subjected to a flexural load that fluctuates between +300 N/mm² and -150 N/mm². Find the ultimate stress by taking:
*   FoS = 2
*   Yield Strength ($σ_y$) = 0.55 $σ_u$
*   Endurance Strength ($σ_e$) = 0.5 $σ_u$

**Solution:**

1.  **Mean Stress ($σ_m$)**:
    $σ_m = \frac{σ_{max} + σ_{min}}{2} = \frac{300 + (-150)}{2} = 75 \, N/mm^2$

2.  **Amplitude Stress ($σ_a$)**:
    $σ_a = \frac{σ_{max} - σ_{min}}{2} = \frac{300 - (-150)}{2} = 225 \, N/mm^2$

3.  **Using the Soderberg Equation:**
    $\frac{1}{FoS} = \frac{σ_m}{σ_y} + \frac{σ_a}{σ_e}$
    $\frac{1}{2} = \frac{75}{0.55 σ_u} + \frac{225}{0.5 σ_u}$
    $\frac{1}{2} = \frac{1}{σ_u} (\frac{75}{0.55} + \frac{225}{0.5})$
    $\frac{1}{2} = \frac{1}{σ_u} (136.36 + 450)$
    $σ_u = 2 \times 586.36 = 1172.72 \, N/mm^2$

Of course! Here are your handwritten notes, converted into a clear, well-structured digital format, perfect for studying and revision.

***

# Mechanical Design Notes: Fatigue, Shafts, and Machine Elements

## Part 1: Fatigue Analysis

### 1.1 Solved Problem: Bending Fatigue

**(Insert diagram of a simply supported beam with a central load here)**
*   A beam is subjected to a load `10 x 250 = 2500 k Nmm` at one point and `25 x 250 = 6250 k Nmm` at another. This appears to represent moments causing minimum and maximum stresses.

**Calculations:**

*   **Bending Moment (B.M.) and Stress (σ):**
    $B.M. = \frac{\pi}{32} \sigma d^3$
    $\sigma = \frac{B.M. \times 32}{\pi d^3}$

*   **Maximum Stress (`σ_max`):**
    $\sigma_{max} = \frac{12500 \times 10^3 \times 32}{\pi d^3} = \frac{1.273 \times 10^8}{d^3}$
    *(Note: The value 12500 seems to be used instead of 6250 in the calculation)*

*   **Minimum Stress (`σ_min`):**
    $\sigma_{min} = \frac{2500 \times 10^3 \times 32}{\pi d^3} = \frac{0.255 \times 10^8}{d^3}$

*   **Mean Stress (`σ_m`):**
    $\sigma_m = \frac{\sigma_{max} + \sigma_{min}}{2} = \frac{0.764 \times 10^8}{d^3}$

*   **Final Answers (from note):**
    *   **Soderberg:** 62.48 mm
    *   **Goodman:** 59.92 mm

---

### 1.2 Solved Problem: Reversed Axial Load

**Question:** A steel column is subjected to a reversed axial load of 180 kN. Find the diameter using the following data:
*   Factor of Safety (FoS) = 2
*   Ultimate Tensile Strength, $\sigma_{ut} = 1070 \text{ MPa}$
*   Yield Strength, $\sigma_y = 910 \text{ MPa}$
*   Uncorrected Endurance Limit, $\sigma_e' = \frac{1}{2} \sigma_{ut}$
*   Correction Factors:
    *   Load Factor ($k_{load}$) = 0.7
    *   Surface Finish Factor ($k_{surf}$) = 0.8
    *   Size Factor ($k_{size}$) = 0.85
    *   Fatigue Stress Concentration Factor ($k_f$) = 1

**Solution:**

*   **Maximum Stress (`σ_max`):**
    $\sigma_{max} = \frac{180 \times 10^3}{\frac{\pi}{4} d^2} = \frac{22.91 \times 10^4}{d^2}$

*   **Minimum Stress (`σ_min`):**
    $\sigma_{min} = \frac{-180 \times 10^3}{\frac{\pi}{4} d^2} = \frac{-22.91 \times 10^4}{d^2}$

*   **Mean Stress (`σ_m`):**
    $\sigma_m = \frac{\sigma_{max} + \sigma_{min}}{2} = 0$

*   **Stress Amplitude (`σ_a`):**
    $\sigma_a = \frac{\sigma_{max} - \sigma_{min}}{2} = \frac{360 \times 10^3}{2 \times \frac{\pi}{4} d^2} = \frac{22.91 \times 10^4}{d^2}$

*   **Corrected Endurance Limit (`σ_e`):**
    $\sigma_e = k_{load} \times k_{surf} \times k_{size} \times \sigma_e'$
    $\sigma_e = 0.7 \times 0.8 \times 0.85 \times (\frac{1}{2} \times 1070) = 254.66 \text{ MPa}$

*   **Soderberg Equation:**
    $\frac{1}{FoS} = \frac{\sigma_m}{\sigma_y} + \frac{k_f \sigma_a}{\sigma_e}$
    $\frac{1}{2} = \frac{0}{910} + \frac{1 \times (\frac{22.91 \times 10^4}{d^2})}{254.66}$
    $d^2 = 42.41^2$
    $d \ge 42.41 \text{ mm}$

---

### 1.3 Solved Problem: Combined Bending and Torsion

**Question:** A hot-rolled steel shaft is subjected to a torsional moment that varies from 330 Nm (CW) to 110 Nm (ACW) and an applied bending moment that varies from 440 Nm to -220 Nm. Determine the diameter of the shaft.
*   Ultimate Strength, $\sigma_u = 550 \text{ MN/m}^2$
*   Yield Strength, $\sigma_y = 410 \text{ MN/m}^2$
*   Endurance Limit, $\sigma_e' = \frac{1}{2} \sigma_u$
*   Factor of Safety (FoS) = 2
*   Size Factor ($k_{size}$) = 0.85
*   Surface Finish Factor ($k_{surf}$) = 0.62

**Solution:**

1.  **Bending Stress Calculations:**
    *   $\sigma_{max} = \frac{32 M_{max}}{\pi d^3} = \frac{32(440)}{\pi d^3} = \frac{4.48 \times 10^3}{d^3}$ (Assuming units are N-m)
    *   $\sigma_{min} = \frac{32 M_{min}}{\pi d^3} = \frac{32(-220)}{\pi d^3} = \frac{-2.24 \times 10^3}{d^3}$
    *   Mean Bending Stress, $\sigma_m = \frac{\sigma_{max} + \sigma_{min}}{2} = \frac{1.12 \times 10^3}{d^3}$
    *   Alternating Bending Stress, $\sigma_a = \frac{\sigma_{max} - \sigma_{min}}{2} = \frac{3.36 \times 10^3}{d^3}$

2.  **Torsional Shear Stress Calculations:**
    *   $\tau_{max} = \frac{16 T_{max}}{\pi d^3} = \frac{16(330)}{\pi d^3} = \frac{1.7 \times 10^3}{d^3}$
    *   $\tau_{min} = \frac{16 T_{min}}{\pi d^3} = \frac{16(-110)}{\pi d^3} = \frac{-0.5 \times 10^3}{d^3}$
    *   Mean Shear Stress, $\tau_m = \frac{\tau_{max} + \tau_{min}}{2} = \frac{0.6 \times 10^3}{d^3}$
    *   Alternating Shear Stress, $\tau_a = \frac{\tau_{max} - \tau_{min}}{2} = \frac{1.1 \times 10^3}{d^3}$

3.  **Equivalent Stresses (using Distortion Energy Theory):**
    *   Corrected Endurance Limit: $\sigma_e = \sigma_e' \times k_{surf} \times k_{size} = (\frac{1}{2} \times 550) \times 0.62 \times 0.85 = 145 \text{ MPa}$
    *   Yield Shear Strength: $\tau_y = 0.577 \sigma_y = 0.577 \times 410 = 236.5 \text{ MPa}$
    *   Equivalent Mean Stress (`σ_m,eq`): $\sigma_{m,eq} = \sqrt{\sigma_m^2 + 3 \tau_m^2}$
    *   Equivalent Alternating Stress (`σ_a,eq`): $\sigma_{a,eq} = \sqrt{\sigma_a^2 + 3 \tau_a^2}$

4.  **Final Calculation:**
    *   *Note: The calculation in the notes seems to follow a different path, combining stresses linearly. The notes also mention "Calculation mistake" and that the "method is true." The final answer is noted as approximately **40 mm**.*

---

## Part 2: Design of Shafts & Couplings (Unit 2)

### 2.1 Shaft Design Theories

*   **Maximum Principal Stress Theory:**
    $\sigma_{max} = \frac{\sigma}{2} + \frac{1}{2}\sqrt{\sigma^2 + 4\tau^2}$
    Substituting $\sigma = \frac{32M}{\pi d^3}$ and $\tau = \frac{16T}{\pi d^3}$:
    $\sigma_{max} = \frac{16}{\pi d^3} [M + \sqrt{M^2 + T^2}]$
    $\sigma_{max} = \frac{32}{\pi d^3} \left[ \frac{1}{2} (M + \sqrt{M^2 + T^2}) \right] = \frac{32}{\pi d^3} M_e$
    Where **Equivalent Bending Moment** is $M_e = \frac{1}{2} [M + \sqrt{M^2 + T^2}]$

*   **Maximum Shear Stress Theory:**
    $\tau_{max} = \frac{1}{2}\sqrt{\sigma^2 + 4\tau^2}$
    $\tau_{max} = \frac{16}{\pi d^3} \sqrt{M^2 + T^2}$
    $\tau_{max} = \frac{16}{\pi d^3} T_e$
    Where **Equivalent Twisting Moment** is $T_e = \sqrt{M^2 + T^2}$

---

### 2.2 Belt Drives

*   **Power Transmitted:** $P = (T_1 - T_2)R$
*   **Belt Friction Equation:** $\frac{T_1}{T_2} = e^{\mu\theta}$
    *   $T_1$: Tension in the tight side
    *   $T_2$: Tension in the slack side
    *   $\mu$: Coefficient of friction
    *   $\theta$: Angle of wrap (in radians)

**(Insert diagram of a belt drive with tight and slack sides here)**

---

### 2.3 Gear Drives

**(Insert diagram of gear tooth forces Ft and Fr here)**

*   **Tangential Force:** $F_t = F \cos\phi$
*   **Radial Force:** $F_r = F \sin\phi$
*   **Pressure Angle:** $\tan\phi = \frac{F_r}{F_t}$

---

### 2.4 Solved Problem: Shaft under Static Bending and Torsion

**Question:** A shaft is subjected to a Bending Moment (B.M.) of 3000 Nm and a Twisting Moment (T.M.) of 10000 Nm. The shaft is made of carbon steel. Find the diameter.
*   Ultimate Strength, $\sigma_{ut} = 700 \text{ MPa}$
*   Ultimate Shear Strength, $\tau_{ut} = 500 \text{ MPa}$
*   Factor of Safety (FoS) = 6

**Solution:**

*   Allowable Normal Stress, $\sigma_{allowable} = \frac{\sigma_{ut}}{FoS} = \frac{700}{6}$
*   Allowable Shear Stress, $\tau_{allowable} = \frac{\tau_{ut}}{FoS} = \frac{500}{6}$

1.  **Using Maximum Principal Stress Theory:**
    $M_e = \frac{1}{2}[M + \sqrt{M^2 + T^2}] = \frac{1}{2}[3000 + \sqrt{3000^2 + 10000^2}] = 6720 \text{ Nm}$
    $\sigma_{allowable} = \frac{32 M_e}{\pi d^3}$
    $\frac{700}{6} = \frac{32 \times (6720 \times 10^3)}{\pi d^3}$
    $d^3 = \frac{32 \times 6720 \times 10^3 \times 6}{700 \pi} \implies d > 83.71 \text{ mm}$

2.  **Using Maximum Shear Stress Theory:**
    $T_e = \sqrt{M^2 + T^2} = \sqrt{3000^2 + 10000^2} = 10440 \text{ Nm}$
    $\tau_{allowable} = \frac{16 T_e}{\pi d^3}$
    $\frac{500}{6} = \frac{16 \times (10440 \times 10^3)}{\pi d^3}$
    $d^3 = \frac{16 \times 10440 \times 10^3 \times 6}{500 \pi} \implies d > 86.09 \text{ mm}$

**Conclusion:** The required diameter must satisfy both conditions. Therefore, we choose the larger value.
$d \ge 86.09 \text{ mm}$

---

### 2.5 Solved Problem: Shaft with Pulley

**Question:** A 3m mild steel shaft transmits 100 kW at 300 rpm. It is supported by bearings 1000 mm from each end. A pulley weighing 1500 N is located at the center of the shaft. Find the diameter assuming a safe stress value.
*   Assume Yield Strength, $\sigma_y = 330 \text{ MPa}$.
*   Using Max Shear Theory, safe shear stress $\tau_y = \frac{\sigma_y}{2} = 165 \text{ MPa}$.

**(Insert diagram of a shaft supported at two points with a central pulley here)**

**Solution:**

1.  **Calculate Bending Moment (M):**
    The shaft is a simply supported beam with a central load. The maximum bending moment is at the center.
    $M = \frac{W L}{4} = \frac{1500 \times 2000}{4} = 750,000 \text{ Nmm} = 7.5 \times 10^5 \text{ Nmm}$
    *(Note: L is the span between bearings, which is 1000mm + 1000mm from the diagram)*

2.  **Calculate Torque (T):**
    $P = \frac{2 \pi N T}{60}$
    $100 \times 10^3 = \frac{2 \pi (300) T}{60}$
    $T = 3183.1 \text{ Nm} = 31.83 \times 10^5 \text{ Nmm}$

3.  **Calculate Equivalent Twisting Moment (Te):**
    $T_e = \sqrt{M^2 + T^2} = \sqrt{(7.5 \times 10^5)^2 + (31.83 \times 10^5)^2} = 32.7 \times 10^5 \text{ Nmm}$

4.  **Find Diameter (d):**
    $\tau_{allowable} = \frac{16 T_e}{\pi d^3}$
    $165 = \frac{16 \times (32.7 \times 10^5)}{\pi d^3}$
    $d^3 = \frac{16 \times 32.7 \times 10^5}{165 \pi} \implies d > 47.71 \text{ mm}$

---

### 2.6 Solved Problem: Shaft with Gears (Incomplete)

**Question:** A steel shaft transmits 15 kW at 200 rpm. It is supported by two bearings 750 mm apart. The shaft carries a pinion (30 teeth, 5 mm module) and a gear (100 teeth, 5 mm module). Find the diameter of the shaft for an allowable shear stress of 54 MPa.

**(Insert diagram of the shaft with bearings and two gears, showing both vertical (VFD) and horizontal (HFD) force diagrams here)**

**Solution Steps:**

1.  **Calculate Torque (T):**
    $P = \frac{2 \pi N T}{60}$
    $15 \times 1000 = \frac{2 \pi (200) T}{60}$
    $T = 716.19 \text{ Nm}$

2.  **Calculate Gear Diameters and Forces:**
    *   **Pinion:**
        *   Pitch Diameter ($d_p$) = Module × No. of teeth = $5 \times 30 = 150 \text{ mm}$
        *   Radius ($r_p$) = 75 mm
        *   Tangential Force ($F_{tp}$) = $\frac{T}{r_p} = \frac{716.19}{75 \times 10^{-3}} = 9550 \text{ N}$
    *   **Gear:**
        *   Pitch Diameter ($d_g$) = Module × No. of teeth = $5 \times 100 = 500 \text{ mm}$
        *   Radius ($r_g$) = 250 mm
        *   Tangential Force ($F_{tg}$) = $\frac{T}{r_g} = \frac{716.19}{250 \times 10^{-3}} = 2865 \text{ N}$

*(The next steps would be to calculate the radial forces on the gears, find the reactions at the bearings for both horizontal and vertical planes, determine the maximum bending moment, and then use the equivalent torque/moment to find the shaft diameter. The notes end here.)*

Of course! Here are your handwritten notes transformed into clean, well-structured digital format, perfect for studying and revision.

***

## 1.0 Analysis of Shafts and Beams

This section covers the analysis of forces, moments, and stresses in shafts and beams under various loading conditions.

### Example 1: Force and Moment Analysis of a Beam

This example demonstrates the calculation of reaction forces and bending moments at different points on a beam.

**(Insert diagram of a simply supported beam with points A, B, C, D and various applied forces here)**

**Given Data & Calculations:**

*   **Horizontal Force Component (V):**
    *   $R_B = -719.66 \text{ N}$
    *   $R_A = -5620.39 \text{ N}$
    *   Moment at C: $M_C = 36.53 \times 10^3 \text{ N-m}$
    *   Moment at D: $M_D = -719.66 \times 100 = -7.19 \times 10^4 \text{ N-m}$

*   **Vertical Force Component (H):**
    *   $R_B = 9110.88 \text{ N}$
    *   $R_A = 1481.89 \text{ N}$
    *   Moment at C: $M_C = (1481.89)(650) = 9.62 \times 10^5 \text{ N-m}$
    *   Moment at D: $M_D = 9110.88 \times 100 = 9.1 \times 10^5 \text{ N-m}$

*   **Resultant Moment and Equivalent Torque Calculation:**
    *   **At point C:**
        *   $M_{net} = \sqrt{(36.53)^2 + (9.62)^2} \times 10^5 = 37.75 \times 10^5 \text{ N-m}$
    *   **At point D:**
        *   $M_{net} = \sqrt{(7.19)^2 + (9.1)^2} \times 10^5 = 11.59 \times 10^5 \text{ N-m}$
        *   *Note: Original calculation shows $3.13 \times 10^5$. Review may be needed.*

*   **Equivalent Torque ($T_e$):**
    *   The formula for equivalent torque is $T_e = \sqrt{M_{net}^2 + T^2}$
    *   $T_e = \sqrt{(37.75)^2 + (7.1619)^2} \times 10^5 = 38.42 \times 10^5 \text{ N-m}$

*   **Shaft Diameter (d) Calculation:**
    *   Using the torsion equation, $\tau = \frac{16T_e}{\pi d^3}$
    *   $d^3 = \frac{16T_e}{\pi \tau}$
    *   $d^3 = \frac{16 \times 38.42 \times 10^5}{\pi \times 54}$
    *   $d = 71.3 \text{ mm}$

---

### Example 2: Power Transmission by a Shaft

**Problem Statement:**

A shaft supported by bearings has a gear (B) and a pulley (A). It transmits **20 kW** of power at **180 rpm**. The tangential force from gear B acts vertically upward, while the pulley delivers power to another pulley vertically below. The weights of the gear and pulley are 900 N and 2700 N respectively. The ratio of tensions for the pulley is $\frac{T_1}{T_2} = 2.5$. The allowable shear stress is **63 MPa**.

**(Insert diagram of a shaft with a pulley at A, a gear at C, and supported by bearings. Show forces and dimensions.)**

**Calculations:**

1.  **Torque (T) Transmitted by the Shaft:**
    *   Power, $P = \frac{2\pi NT}{60}$
    *   $T = \frac{P \times 60}{2\pi N} = \frac{20 \times 1000 \times 60}{2\pi \times 180}$
    *   $T = 1273.24 \text{ Nm}$

2.  **Tangential Force on Gear B ($F_{T_B}$):**
    *   Assuming the pitch circle diameter of the gear is 750 mm (radius = 375 mm).
    *   $T = F_{T_B} \times r_B$
    *   $F_{T_B} = \frac{T}{r_B} = \frac{1273.24}{0.375}$ (*Note: The calculation in the image seems to use a diameter of 150mm, let's follow that for consistency.*)
    *   $F_{T_B} = \frac{T \times 2}{D} = \frac{1273.24 \times 2}{150 \times 10^{-3}}$
    *   $F_{T_B} = 3395.31 \text{ N}$

3.  **Belt Tensions for Pulley A:**
    *   Torque at pulley, $T = (T_1 - T_2) \times r_A$
    *   Assuming pulley diameter is 1250 mm (radius = 625 mm).
    *   $1273.24 = (T_1 - T_2) \times 0.625$
    *   $T_1 - T_2 = \frac{1273.24}{0.625} = 2037.18 \text{ N}$
    *   Given: $T_1 = 2.5 T_2$
    *   $2.5 T_2 - T_2 = 2037.18 \implies 1.5 T_2 = 2037.18 \implies T_2 = 1358.12 \text{ N}$
    *   $T_1 = 2.5 \times 1358.12 = 3395.3 \text{ N}$

---

## 2.0 Design of Cotter Joints

This section covers the design principles and failure analysis of Sleeve & Cotter joints and Socket & Spigot Cotter joints.

### 2.1 Sleeve and Cotter Joint

A sleeve and cotter joint is used to connect two co-axial rods subjected to tensile or compressive forces.

**(Insert diagram of a sleeve and cotter joint with labeled parts: Sleeve, Cotter, Rod end, and dimensions)**

#### Empirical Proportions:

*   Diameter of enlarged rod, $d_1 = 2.5d$
*   Diameter of sleeve, $d_2 = 1.25d$
*   Width of cotter, $b = 1.25d$
*   Thickness of cotter, $t = 0.31d$

#### Modes of Failure and Design Formulae:

1.  **Failure of Rod in Tension:**
    *   The rod may fail in tension across its main diameter.
    *   Resisting Area: $A = \frac{\pi}{4}d^2$
    *   Load Capacity: $P \le \frac{\pi}{4}d^2 \times \sigma_t$

2.  **Failure of Rod in Tension at Weakest Section (Cotter Slot):**
    *   The rod is weakest at the slot for the cotter.
    *   Resisting Area: $A = \frac{\pi}{4}d_2^2 - d_2t$
    *   Load Capacity: $P \le (\frac{\pi}{4}d_2^2 - d_2t) \times \sigma_t$

3.  **Failure of Rod/Cotter in Crushing:**
    *   The area resisting crushing is the projected area of contact.
    *   Resisting Area: $A = d_2t$
    *   Load Capacity: $P \le d_2t \times \sigma_c$

4.  **Failure of Sleeve in Tension Across the Slot:**
    *   The sleeve may fail in tension at its weakest section.
    *   Resisting Area: $A = \frac{\pi}{4}(d_1^2 - d_2^2) - (d_1 - d_2)t$
    *   Load Capacity: $P \le \left[ \frac{\pi}{4}(d_1^2 - d_2^2) - (d_1 - d_2)t \right] \times \sigma_t$

5.  **Failure of Cotter in Shear:**
    *   The cotter may shear off. Since it is supported on both sides by the sleeve, it is in double shear.
    *   Resisting Area: $A = 2bt$
    *   Load Capacity: $P \le 2bt \times \tau$

---

### Design Problem: Sleeve and Cotter Joint

**Problem Statement:** Design a sleeve and cotter joint to resist a tensile load of **60 kN**. All parts are made of the same material with the following allowable stresses:
*   Tensile Stress, $\sigma_t = 60 \text{ MPa}$
*   Shear Stress, $\tau = 70 \text{ MPa}$
*   Crushing Stress, $\sigma_c = 125 \text{ MPa}$

**Solution:**

**Step 1: Design of Rod End (Find diameter 'd')**
*   Using the formula for rod failure in tension: $P = \frac{\pi}{4}d^2 \times \sigma_t$
*   $60 \times 10^3 = \frac{\pi}{4}d^2 \times 60$
*   $d^2 = \frac{60 \times 10^3 \times 4}{60 \pi} = 1273.24$
*   $d = 35.68 \text{ mm}$. Let's standardize to **d = 36 mm**.

**Step 2: Design of Enlarged Rod and Cotter (Find $d_2$ and $t$)**
*   This design step considers the failure of the rod in tension at the weakest section and crushing against the cotter. The dimensions are found by equating the tensile strength at the weakest section with the crushing strength.
*   $(\frac{\pi}{4}d_2^2 - d_2t)\sigma_t = d_2t\sigma_c$.
*   Using empirical relations: $t = 0.31d = 0.31 \times 36 = 11.16 \text{ mm}$.
*   The calculation for $d_2$ in the notes proceeds differently, let's follow the steps to find $d_2$ from the tensile failure formula at the weakest section:
*   $P = (\frac{\pi}{4}d_2^2 - d_2t)\sigma_t$
*   $60 \times 10^3 = (\frac{\pi}{4}d_2^2 - d_2(11.16)) \times 60$
*   $1000 = 0.7854d_2^2 - 11.16d_2 \implies 0.7854d_2^2 - 11.16d_2 - 1000 = 0$
*   Solving this quadratic equation gives $d_2 \approx 42.7 \text{ mm}$. The notes appear to use an iterative or different method arriving at `d2 = 44 mm`. Let's use **d2 = 44 mm** for consistency.

**Step 3: Design of Cotter (Find width 'b')**
*   Considering the failure of the cotter in double shear: $P = 2bt\tau$
*   $60 \times 10^3 = 2 \times b \times 11.16 \times 70$
*   $b = \frac{60 \times 10^3}{2 \times 11.16 \times 70} = 38.4 \text{ mm}$.

**Step 4: Design of Sleeve (Find outer diameter $d_1$)**
*   Considering the failure of the sleeve in tension across the slot:
*   $P = [\frac{\pi}{4}(d_1^2 - d_2^2) - (d_1 - d_2)t]\sigma_t$
*   $60 \times 10^3 = [\frac{\pi}{4}(d_1^2 - 44^2) - (d_1 - 44)(11.16)] \times 60$
*   $1000 = 0.7854d_1^2 - 1520.5 - 11.16d_1 + 491.04$
*   $0.7854d_1^2 - 11.16d_1 - 2029.46 = 0$
*   Solving the quadratic equation gives $d_1 \approx 58.43 \text{ mm}$. Let's use **d1 = 58 mm**.

**Final Dimensions Summary:**

| S.No. | Description            | Designation | Value      |
|-------|------------------------|-------------|------------|
| 1     | Dia of rod end         | $d$         | 36 mm      |
| 2     | Dia of enlarged rod    | $d_2$       | 44 mm      |
| 3     | Outer dia of sleeve    | $d_1$       | 58 mm      |
| 4     | Width of cotter        | $b$         | 38.4 mm    |
| 5     | Thickness of cotter    | $t$         | 11.16 mm   |
| 6     | Length of cotter       | $4d$        | 144 mm     |
| 7     | Length of sleeve       | $8d$        | 288 mm     |

---

### 2.2 Socket and Spigot Cotter Joint

This joint is also used to connect two co-axial rods. It consists of a socket end and a spigot end, which are locked together by a cotter.

**(Insert diagram of a socket and spigot cotter joint with labeled parts: Socket, Spigot, Cotter, Collars, and dimensions)**

#### Modes of Failure and Design Formulae:

1.  **Failure of rod in tension:** $P = \frac{\pi}{4}d^2 \sigma_t$
2.  **Failure of spigot in tension at weakest section:** $P = (\frac{\pi}{4}d_2^2 - d_2t) \sigma_t$
3.  **Failure of rod or cotter in crushing:** $P = d_2t \sigma_c$
4.  **Failure of spigot collar in crushing:** $P = \frac{\pi}{4}(d_3^2 - d_2^2) \sigma_c$
5.  **Failure of socket in tension at weakest section:** $P = [\frac{\pi}{4}(d_1^2 - d_2^2) - (d_1 - d_2)t]\sigma_t$
6.  **Failure of cotter in shear (double shear):** $P = 2bt\tau$
7.  **Failure of socket collar in crushing:** $P = (d_4 - d_2)c \sigma_c$
8.  **Failure of socket end in shear:** $P = 2(d_4 - d_2)c \tau$

---

### Design Problem: Socket and Spigot Cotter Joint

**Problem Statement:** Design a socket and spigot cotter joint to support a load of **30 kN**. The material is carbon steel with the following allowable stresses:
*   Tensile Stress, $\sigma_t = 50 \text{ MPa}$
*   Shear Stress, $\tau = 35 \text{ MPa}$
*   Crushing Stress, $\sigma_c = 90 \text{ MPa}$

**Design Tip:** If $\tau$ and $\sigma_c$ are not given, assume $\tau = 0.5 \sigma_t$ and $\sigma_c = 2 \sigma_t$.

**Solution:**

**Step 1: Rod Design (Find diameter 'd')**
*   $P = \frac{\pi}{4}d^2 \sigma_t$
*   $30 \times 10^3 = \frac{\pi}{4}d^2 \times 50$
*   $d^2 = \frac{30 \times 10^3 \times 4}{50\pi} = 763.94$
*   $d = 27.64 \text{ mm}$

**Step 2: Spigot and Cotter Design (Find $d_2$ and $t$)**
*   Considering failure of the spigot at the weakest section:
*   $P = (\frac{\pi}{4}d_2^2 - d_2t)\sigma_t$
*   Let's check crushing failure as well: $P = d_2t\sigma_c$.
*   From the crushing equation: $d_2t = \frac{30 \times 10^3}{90} = 333.33 \text{ mm}^2$
*   Using the empirical relation $t = d/4 \approx 27.64/4 = 6.91 \text{ mm}$. Let's use **t = 8.15 mm** (as derived later in notes).
*   $d_2 = 333.33 / 8.15 \approx 40.9 \text{ mm}$. The notes calculate $d_2 > 33.48 \text{ mm}$ and select **d2 = 36.6 mm**. We will proceed with this value.
*   **Check for induced crushing stress:** $\sigma_{c, \text{ind}} = \frac{P}{d_2t} = \frac{30 \times 10^3}{36.6 \times 8.15} = 100.8 \text{ MPa}$. This is slightly higher than the allowable 90 MPa, indicating a need for adjustment, but we will follow the notes.

**Step 3: Spigot Collar Design (Find $d_3$)**
*   Considering crushing of the spigot collar:
*   $P = \frac{\pi}{4}(d_3^2 - d_2^2)\sigma_c$
*   $30 \times 10^3 = \frac{\pi}{4}(d_3^2 - 36.6^2) \times 90$
*   $d_3^2 - 1339.56 = \frac{30 \times 10^3 \times 4}{90\pi} = 424.4$
*   $d_3^2 = 1763.96 \implies d_3 = 41.99 \text{ mm}$. Let's use **d3 = 42 mm**.

**Step 4: Socket Design (Find outer diameter $d_1$)**
*   Considering failure of the socket in tension across the slot:
*   $P = [\frac{\pi}{4}(d_1^2 - d_2^2) - (d_1 - d_2)t]\sigma_t$
*   $30 \times 10^3 = [\frac{\pi}{4}(d_1^2 - 36.6^2) - (d_1 - 36.6)(8.15)] \times 50$
*   $600 = 0.7854d_1^2 - 1052.09 - 8.15d_1 + 298.29$
*   $0.7854d_1^2 - 8.15d_1 - 1353.8 = 0$
*   Solving the quadratic equation gives **d1 = 47.09 mm** (the other root is negative and not possible).

Of course! Here are your handwritten notes converted into clean, well-structured digital format, perfect for studying and revision.

***

## Design of a Cotter Joint

### Step 1: Failure of Cotter in Double Shear

The cotter may fail due to shearing forces across two cross-sections.

*   **Formula:**
    $P = 2 \times b \times t \times \tau$
*   **Calculation:**
    Given the values in the notes (Load P = 30 kN, and other material/dimensional properties represented by the constants):
    $30 \times 10^3 = 2 \times b \times 35 \times \sigma_{c}$
    *(Note: The calculation in the notes seems to mix multiple variables. The general formula is as above. The calculation leads to the following result for the cotter width 'b'.)*
    $b = 50.02 \, \text{mm}$

### Step 2: Failure of Socket in Tension (across the cotter slot)

The socket may tear at the section weakened by the slot.

*   **Formula:**
    $P = (d_4 - d_2) \times t \times \sigma_{t}$
*   **Calculation:**
    $30 \times 10^3 = [d_4 - 36.6] \times 0.31 \times 27.68 \times \sigma_{c}$
    *(Note: The calculation seems to use a crushing stress `σc`. Assuming this is part of the given problem data.)*
    $d_4 - 36.6 = \frac{30 \times 10^3}{0.31 \times 27.68 \times 95}$
    $d_4 = 75.45 \, \text{mm}$

### Step 3: Failure of Socket Collar in Shear

The socket collar can shear off.

*   **Formula:**
    $P = (d_4 - d_2) \times c \times \tau$
*   **Calculation:**
    $c = \frac{P}{(d_4 - d_2) \times \tau}$
    $c = \frac{30 \times 10^3}{35 \times (75.45 - 36.6)}$
    $c = 25.74 \, \text{mm}$

### Summary of Cotter Joint Dimensions

| Sr. No. | Part Description          | Designation | Value (mm) |
| :------ | :------------------------ | :---------- | :--------- |
| 1       | Dia of rod                | $d$           | 27.64      |
| 2       | Enlarged dia.             | $d_2$         | 36.6       |
| 3       | Dia spigot Collar         | $d_3$         | 42         |
| 4       | Thick. of spigot Collar   | $t_1$         | 7.45       |
| 5       | Outer dia. of socket      | $d_1$         | 97.09      |
| 6       | Outer dia. of socket Collar | $d_4$         | 75.45      |
| 7       | Socket collar thickness   | $c$           | 25.74      |
| 8       | Cotter width              | $b$           | 50.02      |

---

## Keys & Splines

*   **Key:** A key is a piece of mild steel inserted between a shaft and a hub to prevent relative motion between them.
*   **Keyway:** A keyway is a slot or recess in a shaft and hub to accommodate the key. A key is always inserted parallel to the axis of the shaft.
*   **Spline:** (Definition not detailed in notes).

---

## Knuckle Joint

This is a joining method for two rods which are under tensile load.

*(Insert diagram of a knuckle joint with labeled parts: double eye, single eye, knuckle pin, pin head, etc. here)*

### Design Parameters & Definitions

*   $d$: rod dia.
*   $d_1$: knuckle pin dia.
*   $d_2$: outer dia. of eye
*   $d_3$: dia. of knuckle pin head
*   $t$: thickness of single eye
*   $t_1$: thickness of double eye
*   $t_2$: thickness of knuckle pin head

### Empirical Design Proportions

*   $d_1 = d$
*   $d_2 = 2d$
*   $d_3 = 1.5d$
*   $t = 1.25d$
*   $t_1 = 0.75d$

### Failure Modes of a Knuckle Joint

1.  **Failure of rod in tension:**
    $P = \frac{\pi}{4} d^2 \times \sigma_t$

2.  **Failure of knuckle pin in double shear:**
    $P = 2 \times \frac{\pi}{4} d_1^2 \times \tau$

3.  **Failure of single eye in tension:**
    $P = (d_2 - d_1) \times t \times \sigma_t$

4.  **Failure of the single eye in shear:**
    $P = (d_2 - d_1) \times t \times \tau$

5.  **Failure of the single eye in crushing:**
    $P = d_1 \times t \times \sigma_c$

6.  **Failure of the forked end in tension:**
    $P = (d_2 - d_1) \times 2t_1 \times \sigma_t$

7.  **Failure of the forked end in shear:**
    $P = (d_2 - d_1) \times 2t_1 \times \tau$

8.  **Failure of the forked end in crushing:**
    *(Note: The notes label this as shear, but the more common failure mode here is crushing of the pin against the forked end.)*
    $P = d_1 \times (2t_1) \times \sigma_c$

### Example Problem: Given Data

*   Load, $P = 150 \, \text{kN}$
*   Allowable tensile stress, $\sigma_t = 75 \, \text{MPa}$
*   Allowable shear stress, $\tau = 60 \, \text{MPa}$
*   Allowable crushing stress, $\sigma_c = 150 \, \text{MPa}$

---

# Unit 3: Thread & Fasteners

### Definitions

*   **Pitch:** The distance between two corresponding points on adjacent threads.
*   **Lead:** The distance a nut travels along the screw with one revolution.
    *   For a **single start** thread: Lead = Pitch
    *   For a **double start** thread: Lead = 2 × Pitch
*   **Part = Bolt:** The primary component of a threaded fastener.
*   **Note:** For an M10 bolt, the nominal diameter is 10 mm.

*(Insert diagram of a screw thread showing major/nominal dia, pitch, depth, flank, and root crest here)*

---

## Design of Bolted Joints: Examples

### Example 1: Mounting Plate with Eccentric Load

**Problem:** A mounting plate for a drive unit is fixed by four M12 bolts. The core diameter is 9.858 mm. If the allowable stress is 60 MPa, find the maximum load W the support can handle.

*(Insert diagram of the mounting plate with bolt locations L1 and L2 here)*

**Solution:**

1.  **Direct Load per Bolt ($W_d$):** This is the load that can be safely carried by one bolt in tension.
    $W_d = \frac{\pi}{4} (d_c)^2 \times \sigma_t = \frac{\pi}{4} (9.858)^2 \times 60 = 8579.51 \, \text{N}$

2.  **Total Load Capacity:** The total direct load capacity of all bolts is $W_{d1} + W_{t2} = 8579.51$ (where $W_{d1}$ is direct load and $W_{t2}$ is tensile load from moment).

3.  **Equation for Eccentric Load:** The external load W creates both a direct shear load and a turning moment that creates tension in the bolts. The capacity of the joint is reached when the sum of the direct load on a bolt and the tensile load from the moment equals the bolt's strength.
    $\frac{W}{4} + \frac{W \cdot L \cdot L_2}{2(L_1^2 + L_2^2)} = 8579.51$

    Using the values from the diagram in the notes:
    $\frac{W}{4} + \frac{W \times 200 \times 240}{2(80^2 + 240^2)} = 8579.51$
    $W (\frac{1}{4} + \frac{19}{40}) = 8579.51$
    $W = 18.06 \, \text{kN}$

### Example 2: Crane Runway Bracket

**Problem:** A crane runway bracket is shown, carrying a load of 15 kN. Determine the required core diameter of the bolt used to fasten the bracket. The tensile strength of the bolt is 40 MPa.

*(Insert figure of the crane bracket from PPT here)*

**Solution:**
The bolts are subjected to direct shear and tensile stress due to the turning moment. The formula for the resultant tensile load on the most heavily loaded bolt is used.

*   **Formula:**
    $\frac{W}{n} + \frac{W \cdot L \cdot L_2}{2(L_1^2 + L_2^2)} = \frac{\pi}{4} d_c^2 \times \sigma_t$
*   **Calculation:**
    $\frac{15 \times 1000}{4} + \frac{15000 \times 925 \times 375}{2(50 + 375)} = \frac{\pi}{4} d_c^2 \times 40$
    *(Note: There seem to be some calculation errors in the intermediate steps in the notes. The final result shown is:)*
    $d_c = 64.53 \, \text{mm}$

### General Case: Eccentric Load on an Axis of Bolts

When a load is eccentric to the axis of the bolts, it produces both a direct shear load and a tensile load due to the bending moment.

*(Insert diagram for a general eccentric load on a bolt group here)*

*   **Equivalent Tensile Load ($W_{te}$):**
    $W_{te} = \frac{1}{2} [W_t + \sqrt{W_t^2 + 4W_s^2}]$
    (Where $W_t$ is the tensile load and $W_s$ is the shear load on the bolt)

*   **Equivalent Shear Load ($W_{se}$):**
    $W_{se} = \frac{1}{2} [\sqrt{W_t^2 + 4W_s^2}]$

### Example 3: Travelling Crane Bracket with Eccentric Vertical Load

**Problem:** A 12 kN load acts vertically at a distance of 900 mm from the column. The bracket is secured by four bolts. Determine the size of the bolts if the allowable stress is 84 MPa.

*(Insert diagram of the travelling crane bracket here)*

**Solution:**

1.  **Direct Shear Load per Bolt ($W_s$):**
    $W_s = \frac{12000}{4} = 3000 \, \text{N}$

2.  **Tensile Load due to Moment ($W_t$):**
    $W_t = \frac{W \cdot L \cdot L_2}{2(L_1^2 + L_2^2)} = \frac{12000 \times 400 \times 375}{2(50^2 + 375^2)} = 6288.20 \, \text{N}$

3.  **Equivalent Tensile Load ($W_{te}$):**
    $W_{te} = \frac{1}{2} [W_t + \sqrt{W_t^2 + 4W_s^2}]$
    $W_{te} = \frac{1}{2} [6288.20 + \sqrt{(6288.20)^2 + 4(3000)^2}] = 6145.26 \, \text{N}$
    *(Note: The calculation in the notes seems slightly different, leading to the intermediate value of 6145.26)*

4.  **Determine Core Diameter ($d_c$):**
    $W_{te} = \frac{\pi}{4} d_c^2 \times \sigma_t$
    $6145.26 = \frac{\pi}{4} d_c^2 \times 84$
    $d_c^2 = 93.147$
    $d_c = 9.65 \, \text{mm}$

### Example 4: Bracket with Inclined Eccentric Load

**Problem:** Determine the bolt size for a bracket carrying a load of 60 kN at an angle of 60° to the vertical. Allowable stresses are: $\sigma_t = 70$ MPa, $\tau = 50$ MPa, $\sigma_c = 105$ MPa.

*(Insert diagram of the bracket with the inclined load here)*

**Solution:**
The inclined load is resolved into vertical and horizontal components.
*   Vertical Component ($W_v$): $60 \cos(30^\circ)$
*   Horizontal Component ($W_h$): $60 \sin(30^\circ) = 34.64 \, \text{kN}$

**Case 1: Effect of Vertical Load (20 kN from diagram)**

*   **Shearing effect ($W_{se1}$):**
    $W_{se1} = \frac{20 \times 10^3}{4} = 5000 \, \text{N}$
*   **Turning effect (Tensile Load, $W_{t1}$):**
    $W_{t1} = \frac{W_v \cdot L \cdot L_2}{2(L_1^2 + L_2^2)} = \frac{20000 \times 200 \times 180}{2(60^2 + 180^2)} = 10000 \, \text{N}$

**Case 2: Effect of Horizontal Load (34.64 kN)**

*   **Direct tensile load ($W_{t2}$):**
    $W_{t2} = \frac{34.64 \times 1000}{4} = 8660 \, \text{N}$
*   **Turning effect (Tensile Load, $W_{t3}$):**
    $W_{t3} = \frac{W_h \cdot L' \cdot L_2}{2(L_1^2 + L_2^2)} = \frac{34.64 \times 10^3 \times 30 \times 180}{2(60^2 + 180^2)} = 1732 \, \text{N}$

**Combine Loads:**

*   **Total Shear Load ($W_s$):** $5000 \, \text{N}$
*   **Total Tensile Load ($W_t$):** The moments from vertical and horizontal loads act on the bolts differently. From the notes, the resulting tensile load on the critical bolt is:
    $W_t = (W_{t1} - W_{t3}) + W_{t2} = (10000 - 1732) + 8660 = 8268 + 8660 = 16928 \, \text{N}$
    *(Note: The logic for combining tensile loads should be carefully checked based on bolt position relative to the load.)*

*   **Equivalent Tensile Load ($W_{te}$):**
    $W_{te} = \frac{1}{2} [16928 + \sqrt{(16928)^2 + 4(5000)^2}] = 18294 \, \text{N}$

*   **Find Diameter from Tensile Failure:**
    $18294 = \frac{\pi}{4} d_c^2 \times 70$
    $d_c = 18.24 \, \text{mm}$

*   **Find Diameter from Shear Failure (using Max Shear Stress Theory):**
    $W_{se} = \frac{1}{2}\sqrt{W_t^2 + 4W_s^2} = 9830.53 \, \text{N}$
    $9830.53 = \frac{\pi}{4} d_c^2 \times 50$
    $d_c = 15.82 \, \text{mm}$

The larger diameter ($18.24$ mm) is chosen for the design.

### Example 5: Pulley Bracket

**Problem:** A pulley bracket is supported by four bolts. Determine the nominal diameter of the bolt if the allowable shear stress for the bolt material is 25 MPa.

*(Insert diagram of the pulley bracket with loads and dimensions here)*

*(Solution for this problem is not provided in the notes.)*

Of course. Here are your handwritten notes converted into well-structured, clean, and easy-to-understand digital notes.

### **Unit 3: Bolted Joints, Power Screws, and Welded Joints**

---

### **1. Eccentric Load Acting on the Plane of a Bolt System**

When a load 'W' acts eccentrically on a bolt system, it induces two types of shear loads on the bolts:

1.  **Primary Shear Load ($W_s$)**: This is the direct shear load, distributed equally among all bolts.
    $W_s = \frac{\text{Total Load}}{\text{No. of bolts}}$

2.  **Secondary Shear Load ($F_n$)**: This load arises due to the turning moment (eccentricity) and acts perpendicular to the line joining the center of gravity (C.G.) of the bolt group and the center of the respective bolt.

(Insert diagram of an eccentric load 'W' acting on a rectangular bolt pattern here. The diagram should show the eccentricity 'e', the C.G., and the bolts labeled 1, 2, 3, 4 with their respective distances $l_1, l_2, l_3, l_4$ from the C.G. and the primary ($W_s$) and secondary ($F_1, F_2, ...$) shear forces.)

The secondary shear forces are proportional to their radial distances from the C.G. of the bolt group.
$F_1 \propto l_1, F_2 \propto l_2, F_3 \propto l_3, \dots$

This can be expressed as:
$\frac{F_1}{l_1} = \frac{F_2}{l_2} = \frac{F_3}{l_3} = \frac{F_4}{l_4}$

The total eccentric moment is resisted by the sum of the moments of the secondary shear forces:
$W \cdot e = F_1 l_1 + F_2 l_2 + F_3 l_3 + F_4 l_4$

Substituting $F_2 = F_1 \frac{l_2}{l_1}$, $F_3 = F_1 \frac{l_3}{l_1}$, etc., we get:
$W \cdot e = F_1 l_1 + \left(\frac{F_1}{l_1}\right)l_2^2 + \left(\frac{F_1}{l_1}\right)l_3^2 + \left(\frac{F_1}{l_1}\right)l_4^2$
$W \cdot e = \frac{F_1}{l_1} [l_1^2 + l_2^2 + l_3^2 + l_4^2]$

From this, the secondary shear force on any bolt 'i' can be found:
$F_i = \frac{W \cdot e \cdot l_i}{l_1^2 + l_2^2 + l_3^2 + \dots + l_n^2}$

**Resultant Shear Force ($R$)**

The resultant shear force on each bolt is the vector sum of the primary and secondary shear forces.
$R = \sqrt{W_s^2 + F_i^2 + 2 W_s F_i \cos\theta}$
where $\theta$ is the angle between the vectors of $W_s$ and $F_i$. The bolt with the minimum angle $\theta$ will be the most critically loaded.

---

**Example 1: Bolted Bracket**

**Problem:** A bracket is bolted to a steel column by 4 bolts as shown. It carries a load of 13.5 kN. Find the diameter of the bolt by taking the permissible shear stress of the bolt material as 65 MPa.

(Insert diagram of a bracket attached to a column with 4 bolts in a square pattern (200mm x 200mm). An eccentric load of 13.5 kN acts at a distance of 275 mm from the column face.)

**Solution:**

*   **Given:**
    *   Load, $W = 13.5 \text{ kN} = 13.5 \times 10^3 \text{ N}$
    *   Number of bolts, $n=4$
    *   Eccentricity, $e = 275 \text{ mm}$
    *   Permissible shear stress, $\tau = 65 \text{ MPa}$
    *   Dimensions: Bolts are in a square pattern, distance between bolts is 200mm. The vertical distance from the load to the centerline of the top bolts is also 200mm.
*   **Primary Shear Load ($W_s$):**
    $W_s = \frac{13.5 \times 10^3}{4} = 3375 \text{ N}$

*   **Secondary Shear Load ($F_1$):**
    The C.G. is at the center of the four bolts. The distance from the C.G. to the center of each bolt is equal ($l_1=l_2=l_3=l_4=l$).
    $l = \sqrt{100^2 + 100^2} = 100\sqrt{2} \text{ mm}$

    The formula for the secondary shear force on the top bolts ($F_1$) is:
    $F_1 = \frac{W \cdot e \cdot l_1}{l_1^2 + l_2^2 + l_3^2 + l_4^2} = \frac{W \cdot e \cdot l}{4l^2} = \frac{W \cdot e}{4l}$
    $F_1 = \frac{13.5 \times 10^3 \times 275}{4 \times 100\sqrt{2}} = 6563.83 \text{ N}$

*   **Resultant Shear Force ($R$):**
    For the top-right bolt, the angle $\theta$ between $W_s$ (acting downwards) and $F_1$ (acting upwards and to the right) has $\cos\theta = \cos(45^\circ)$.
    $R = \sqrt{(3375)^2 + (6563.83)^2 + 2(3375)(6563.83)\cos(135^\circ)}$
    The critical bolts are the top two, where the angle between the primary and secondary shear forces is smallest (most additive). Let's re-evaluate the angle. The primary shear is downwards. The secondary shear is perpendicular to the radial line. For the top right bolt, this force is up and to the right. The angle between them is $135^\circ$. For the top left bolt, the secondary shear is up and to the left, so the angle is also $135^\circ$. For the bottom bolts, the angle is $45^\circ$.
    The maximum resultant force will be where the components add up the most. Let's assume the angle between the force vectors is $\theta$.
    From the diagram, $\cos\theta = \frac{100}{100\sqrt{2}} = \frac{1}{\sqrt{2}}$.
    $R_{max} = \sqrt{W_s^2 + F_1^2 + 2W_s F_1 \cos\theta}$
    $R_{max} = \sqrt{3375^2 + 6563.83^2 + 2(3375)(6563.83)\left(\frac{100}{100\sqrt{2}}\right)}$
    $R_{max} = 9262.049 \text{ N}$

*   **Bolt Diameter ($d_c$):**
    $R_{max} = \frac{\pi}{4} d_c^2 \times \tau$
    $9262.049 = \frac{\pi}{4} d_c^2 \times 65$
    $d_c^2 = \frac{9262.049 \times 4}{\pi \times 65} = 181.39$
    $d_c = \sqrt{181.39} \approx 13.469 \text{ mm}$

---

### **2. Power Screws**

Power screws are used to convert rotary motion into linear motion.

(Insert diagram of a square threaded screw jack with labels for Head, Lever, Screw Rod, Nut, and Load W.)

**Terminology:**
*   $p$: Pitch of the screw
*   $d$: Mean diameter of the screw
*   $\alpha$: Helix angle, where $\tan\alpha = \frac{p}{\pi d}$
*   $P$: Power applied to the circumference of the screw
*   $W$: Load to be lifted
*   $\mu$: Coefficient of friction, where $\mu = \tan\phi$
*   $\phi$: Friction angle

**Torque Required to Raise the Load ($T_1$)**

$P = W \tan(\alpha + \phi)$
$T_1 = P \times \frac{d}{2} = W \tan(\alpha + \phi) \frac{d}{2}$

**Effect of Collar Friction**

When a collar is present, additional torque is required to overcome friction at the collar.
*   **Uniform Pressure Theory (for new collars):**
    $T_2 = \frac{2}{3} \mu_c W \left[\frac{R_1^3 - R_2^3}{R_1^2 - R_2^2}\right]$
*   **Uniform Wear Theory:**
    $T_3 = \mu_c W \left(\frac{R_1 + R_2}{2}\right) = \mu_c W R_{mean}$
    Where $R_1$ and $R_2$ are the outer and inner radii of the collar.

**Total Torque to Raise Load ($T_{total}$):**
$T_{total} = T_1 + T_{collar}$

**Torque Required to Lower the Load ($T_{lower}$)**
$P = W \tan(\phi - \alpha)$
$T_{lower} = W \tan(\phi - \alpha) \frac{d}{2}$

**Efficiency of a Power Screw ($\eta$)**
$\eta = \frac{\text{Ideal Effort}}{\text{Actual Effort}} = \frac{W \tan\alpha}{W \tan(\alpha + \phi)} = \frac{\tan\alpha}{\tan(\alpha + \phi)}$

**Maximum Efficiency ($\eta_{max}$)**
Maximum efficiency occurs when $2\alpha + \phi = 90^\circ$, or $\alpha = 45^\circ - \frac{\phi}{2}$.
$\eta_{max} = \frac{1 - \sin\phi}{1 + \sin\phi}$

---

**Example 2: Vertical Screw**

**Problem:** A vertical screw has a square thread of 50 mm mean diameter and a pitch of 12.5 mm. It raises a load of 10 kN. The axial load is supported by a thrust collar with a mean diameter of 60 mm. The coefficient of friction for the screw is 0.15 and for the collar is 0.18. The tangential load is applied at each end of a handle, and the handle wheel is 100 mm in diameter. Find the required diameter of the handle wheel.

**Solution:**

*   **Given:**
    *   $d = 50 \text{ mm}$
    *   $p = 12.5 \text{ mm}$
    *   $W = 10 \text{ kN} = 10 \times 10^3 \text{ N}$
    *   Collar mean diameter = 60 mm, so $R_{mean} = 30 \text{ mm}$
    *   $\mu_{screw} = 0.15$
    *   $\mu_{collar} = 0.18$
    *   Force on handle, $P_1 = 100 \text{ N}$

*   **Calculate Angles:**
    *   Helix angle, $\alpha$:
        $\tan\alpha = \frac{p}{\pi d} = \frac{12.5}{\pi \times 50} = 0.0796$
        $\alpha = \arctan(0.0796) = 4.54^\circ$
    *   Friction angle, $\phi$:
        $\tan\phi = \mu_{screw} = 0.15$
        $\phi = \arctan(0.15) = 8.53^\circ$

*   **Calculate Torques:**
    *   Torque to overcome thread friction ($T_1$):
        $T_1 = W \tan(\alpha + \phi) \frac{d}{2}$
        $T_1 = (10 \times 10^3) \tan(4.54^\circ + 8.53^\circ) \times \frac{50}{2}$
        $T_1 = 10000 \tan(13.07^\circ) \times 25 = 5817.7 \text{ Nmm}$
    *   Torque to overcome collar friction ($T_c$):
        $T_c = \mu_c W R_{mean} = 0.18 \times (10 \times 10^3) \times 30 = 54000 \text{ Nmm}$
    *   Total Torque ($T_{total}$):
        $T_{total} = T_1 + T_c = 5817.7 + 54000 = 59817.7 \text{ Nmm} \approx 1.08 \times 10^5 \text{ Nmm}$ (Note: calculation in notes has a discrepancy, following notes' final value)
        $T_{total} = 1.08 \times 10^5 \text{ Nmm}$

*   **Calculate Handle Wheel Diameter (D):**
    The torque provided by the handle must equal the total torque.
    $T_{total} = P_1 \times D$ (Assuming $P_1$ is the force couple on the wheel)
    Let's re-read the notes. The formula used is $T = P_1 \times D/2$, suggesting $P_1$ is the total force.
    Let's assume the formula $T_{total} = P_1 \times \frac{D}{2}$ from the notes is correct.
    $1.08 \times 10^5 = 100 \times \frac{D}{2}$
    $D = \frac{1.08 \times 10^5 \times 2}{100} = 2160 \text{ mm} = 2.16 \text{ m}$

---

### **Unit IV: Riveted Joints**

**Types of Riveting:**
*   **Cold Riveting:** Used for structural joints.
*   **Hot Riveting:** Used for leak-proof joints (e.g., boilers).

(Insert diagram showing different rivet heads: Snap head, Pan head, Mushroom head, Countersunk head.)

**Strength and Efficiency of Riveted Joints**

**1. Tearing Strength of the Plate ($P_t$)**
This is the strength of the plate against tearing between the rivet holes.
$P_t = (p - d) \times t \times \sigma_t$
*   $p$: Pitch of the rivets
*   $d$: Diameter of the rivet hole
*   $t$: Thickness of the plate
*   $\sigma_t$: Permissible tensile stress of the plate material

**2. Shearing Strength of the Rivet ($P_s$)**
This is the strength of the rivets against shearing.
$P_s = n \times (\frac{\pi}{4} d^2) \times \tau$ (for single shear)
$P_s = n \times 2 \times (\frac{\pi}{4} d^2) \times \tau$ (for double shear)
*   $n$: Number of rivets per pitch length
*   $\tau$: Permissible shear stress of the rivet material

**3. Crushing Strength of the Rivet ($P_c$)**
This is the strength of the plate or rivet against crushing.
$P_c = n \times d \times t \times \sigma_c$
*   $\sigma_c$: Permissible crushing (or bearing) stress

**Strength of the Joint**
The strength of the riveted joint is the minimum of the three strengths calculated above ($P_t$, $P_s$, and $P_c$).
`Strength of Joint = min(Pt, Ps, Pc)`

**Efficiency of the Joint ($\eta$)**
Efficiency is the ratio of the strength of the joint to the strength of the unriveted (solid) plate.
$\eta = \frac{\text{Strength of Joint}}{\text{Strength of Solid Plate}} = \frac{\min(P_t, P_s, P_c)}{p \times t \times \sigma_t}$

---

**Example 3: Double Riveted Lap Joint**

**Problem:** A double riveted lap joint is made between plates of 15 mm thickness with a rivet diameter of 25 mm and a pitch of 75 mm. The permissible stresses are $\sigma_t = 120 \text{ MPa}$, $\tau = 100 \text{ MPa}$, and $\sigma_c = 150 \text{ MPa}$. Find the efficiency of the joint. (Note: The stresses in the notes image are different, I will use the standard values from the second problem on the page for clarity).

**Problem (from notes, Page 12/13):** A double riveted double strap butt joint is used to connect plates of 20 mm thick with rivet dia 25 mm, pitch 100 mm. $\sigma_t=120 \text{ MPa}$, $\tau=100 \text{ MPa}$, $\sigma_c=150 \text{ MPa}$. Find the efficiency.

**Solution:**

*   **Given:**
    *   $t = 20 \text{ mm}$
    *   $d = 25 \text{ mm}$
    *   $p = 100 \text{ mm}$
    *   $\sigma_t = 120 \text{ MPa}$
    *   $\tau = 100 \text{ MPa}$
    *   $\sigma_c = 150 \text{ MPa}$
    *   Joint type: Double riveted, double strap butt joint. So, rivets are in double shear ($n=2$).

*   **Calculate Strengths per Pitch Length:**
    *   **Tearing Strength ($P_t$):**
        $P_t = (p - d) \times t \times \sigma_t = (100 - 25) \times 20 \times 120 = 180,000 \text{ N} = 180 \text{ kN}$
    *   **Shearing Strength ($P_s$):**
        Rivets are in double shear. Number of rivets per pitch length is 2.
        $P_s = n \times 2 \times (\frac{\pi}{4} d^2) \times \tau = 2 \times 2 \times \frac{\pi}{4} (25)^2 \times 100 = 196,350 \text{ N} = 196.35 \text{ kN}$
    *   **Crushing Strength ($P_c$):**
        $P_c = n \times d \times t \times \sigma_c = 2 \times 25 \times 20 \times 150 = 150,000 \text{ N} = 150 \text{ kN}$

*   **Strength of the Joint:**
    Strength of Joint = $\min(180, 196.35, 150) = 150 \text{ kN}$

*   **Strength of the Solid Plate:**
    $P_{solid} = p \times t \times \sigma_t = 100 \times 20 \times 120 = 240,000 \text{ N} = 240 \text{ kN}$

*   **Efficiency of the Joint ($\eta$):**
    $\eta = \frac{\text{Strength of Joint}}{P_{solid}} = \frac{150 \text{ kN}}{240 \text{ kN}} = 0.625$
    $\eta = 62.5\%$

---

### **Welded Joints**

**Strength of Transverse Fillet Welded Joint**
$P = \text{Throat area} \times \text{Allowable stress}$
$P = (0.707 \times s \times l) \times \sigma_t$ (for single fillet)
$P = 2 \times (0.707 \times s \times l) \times \sigma_t$ (for double fillet)
*   $s$: Size (leg) of the weld
*   $l$: Length of the weld
*   Throat thickness, $t = 0.707s$

**Strength of Parallel Fillet Welded Joint**
$P = (0.707 \times s \times l) \times \tau$ (for single fillet)
$P = 2 \times (0.707 \times s \times l) \times \tau$ (for double parallel)

---

**Example 4: Welded Bracket**

**Problem:** A bracket carrying a load of 15 kN is to be welded as shown. Find the weld size if the allowable shear stress is not to exceed 80 MPa.

(Insert diagram of a bracket welded to a plate. The weld is along three sides: one vertical side of 80 mm and two horizontal sides of 40 mm each. A load of 15 kN acts at an eccentricity of 125 mm from the vertical weld.)

**Solution:**

This is a case of an eccentrically loaded welded joint. It experiences:
1.  **Direct Shear Stress ($\tau_1$)**: Due to the direct load.
2.  **Secondary Shear Stress ($\tau_2$)**: Due to the twisting moment.

*   **Direct Shear Stress ($\tau_1$):**
    $\tau_1 = \frac{\text{Load}}{\text{Total Throat Area}}$
    Total weld length, $l = 80 + 40 + 40 = 160 \text{ mm}$ (This is an assumption from the diagram; the notes seem to use a different approach). Let's follow the notes' logic.
    The notes calculate direct shear over the vertical weld only, which is atypical. A standard approach would be to average over the full weld area.
    Let's re-examine the notes (page 22).
    $\tau_1 = \frac{P}{A} = \frac{15 \times 10^3}{1.414 \times s \times (80+50)}$ seems to be the formula used. This is confusing. A more standard formula is $\tau_1 = \frac{P}{Total Throat Area} = \frac{15000}{(80+40+40) \times 0.707s}$

Let's follow the clearer second part of the notes calculation:
*   **Secondary Shear Stress ($\tau_2$):**
    $\tau_2 = \frac{T \cdot r}{J}$
    *   $T$: Twisting Moment = $P \times e = 15000 \times 125 \text{ Nmm}$
    *   $J$: Polar moment of inertia of the weld group (treating weld as a line).
    *   $r$: Radial distance from C.G. of weld group to the point of interest (usually the farthest point).

The calculation for $J$ and the C.G. is complex and seems to be simplified or derived in a specific way in the notes. The final equations from the notes appear to combine these into resultant stress formulas.

Due to the complexity and potential for transcription error in the intermediate formulas, let's transcribe the final solved equation from the notes (page 23) which relates the stresses to the final weld size.

The notes set up a quadratic equation for the throat thickness ($t = 0.707s$).
$702t^2 + 239199.25 + 686.91t = 6400t^2$
$6392.98t^2 - 686.91t - 239199.25 = 0$

Solving this quadratic equation gives:
$t = 6.17 \text{ mm}$

Weld size, $s$:
$s = \frac{t}{0.707} = \frac{6.17}{0.707} = 8.73 \text{ mm}$
