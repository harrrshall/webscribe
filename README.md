### 1. Write Maxwell’s Relationships
Maxwell’s equations relate the properties of pressure ($P$), volume ($V$), temperature ($T$), and entropy ($S$) to each other. They are derived from the exact differentials of the four thermodynamic potentials ($U, H, A, G$).
Here are the four fundamental Maxwell relations:
1.  **From Internal Energy ($U$):**
    $$\left( \frac{\partial T}{\partial V} \right)_S = - \left( \frac{\partial P}{\partial S} \right)_V$$
2.  **From Enthalpy ($H$):**
    $$\left( \frac{\partial T}{\partial P} \right)_S = \left( \frac{\partial V}{\partial S} \right)_P$$
3.  **From Helmholtz Function ($A$ or $F$):**
    $$\left( \frac{\partial P}{\partial T} \right)_V = \left( \frac{\partial S}{\partial V} \right)_T$$
4.  **From Gibbs Function ($G$):**
    $$\left( \frac{\partial V}{\partial T} \right)_P = - \left( \frac{\partial S}{\partial P} \right)_T$$
### 2. Define Volume Expansivity ($\beta$) and Isothermal Compressibility ($\alpha$)
These coefficients describe how the volume of a substance changes with temperature and pressure.
* **Volume Expansivity ($\beta$):** Also called the coefficient of volume expansion. It represents the fractional change in volume per unit change in temperature while keeping pressure constant.
    $$\beta = \frac{1}{v} \left( \frac{\partial v}{\partial T} \right)_P$$
* **Isothermal Compressibility ($\alpha$ or $k_T$):** It represents the fractional change in volume per unit change in pressure while keeping temperature constant. (The negative sign indicates that volume decreases as pressure increases).
    $$\alpha = - \frac{1}{v} \left( \frac{\partial v}{\partial P} \right)_T$$
### 3. Explain the Joule–Thomson Coefficient ($\mu$)
The Joule–Thomson coefficient measures the rate of change of temperature with respect to pressure during a throttling process (which is isenthalpic, meaning Enthalpy $H$ is constant).
**Mathematically:**
$$\mu_{JT} = \left( \frac{\partial T}{\partial P} \right)_h$$
* If $\mu > 0$: The gas cools upon expansion (Temperature drops as Pressure drops).
* If $\mu < 0$: The gas heats upon expansion.
* If $\mu = 0$: No temperature change (Ideal gas behavior).
### 4. Explain the Joule–Thomson Effect and Inversion Temperature
**The Joule–Thomson Effect:**
When a real gas is forced through a valve or porous plug (throttling) from a region of high pressure to low pressure under adiabatic conditions, its temperature changes. This phenomenon is called the Joule-Thomson effect. For most gases at room temperature, this causes cooling.
**Inversion Temperature ($T_i$):**
There is a specific temperature for every gas called the **Inversion Temperature**.
* If the initial temperature of the gas is **below** the Inversion Temperature, the gas will **cool** on expansion.
* If the initial temperature is **above** the Inversion Temperature, the gas will **heat up** on expansion.
At the inversion point, the Joule-Thomson coefficient $\mu = 0$.
### 5. Why Hydrogen gas cannot be cooled by the Joule–Thomson effect (or why it needs to be precooled)
For cooling to occur during throttling, the gas must be below its Maximum Inversion Temperature.
* Most gases (like $N_2$, $O_2$, Air) have very high inversion temperatures (well above room temperature). So, when we throttle them at room temperature, they cool down.
* **Hydrogen (and Helium)** are exceptions. The inversion temperature of Hydrogen is very low (approx **-80°C** or **193 K**).
* **The Problem:** Room temperature ($\approx 25^\circ C$) is *higher* than Hydrogen’s inversion temperature. Therefore, if you throttle Hydrogen at room temperature, its temperature will **rise** (heating effect) instead of falling.
* **The Solution:** Hydrogen must be **pre-cooled** (using a heat exchanger or liquid nitrogen) to a temperature below -80°C *before* it enters the throttling valve to experience the cooling effect.
### 6. Define Gibbs’ and Helmholtz’ Functions. Compare their importance.
These are thermodynamic potentials used to determine the spontaneity of a process.
**Helmholtz Function ($A$ or $F$):**
* **Definition:** $A = U - TS$ (Internal Energy $-$ Temperature $\times$ Entropy).
* **Importance:** It measures the "useful work" obtainable from a closed system at a constant temperature and volume. In equilibrium, $dA \le 0$.
**Gibbs Function ($G$):**
* **Definition:** $G = H - TS$ (Enthalpy $-$ Temperature $\times$ Entropy).
* **Importance:** It measures the maximum useful work (other than expansion work) obtainable from a system at a constant temperature and pressure.
**Comparison/Importance:**
* **Gibbs is generally more important for Engineers:** Most engineering processes (chemical reactions, phase changes, turbines) occur at constant pressure and temperature (open to the atmosphere). Therefore, the Gibbs function is the primary criterion for equilibrium and spontaneity in these systems.
### 7. Mole Fraction and Volume Fraction
Consider a mixture of gases.
* **Mole Fraction ($x_i$):** The ratio of the number of moles of a specific component ($n_i$) to the total number of moles of the mixture ($n_{total}$).
    $$x_i = \frac{n_i}{\Sigma n}$$
* **Volume Fraction ($v_f$):** The ratio of the volume a specific gas would occupy if it were alone at the mixture temperature and pressure ($V_i$) to the total volume of the mixture ($V_{total}$).
    $$v_f = \frac{V_i}{V_{total}}$$
* **Note:** For Ideal Gases, **Mole Fraction = Volume Fraction = Pressure Fraction.**
### 8. Explain Dalton’s Law of Partial Pressure
**Statement:**
Dalton’s Law states that the total pressure exerted by a mixture of non-reacting ideal gases is equal to the sum of the partial pressures of the individual gases.
**Partial Pressure ($p_i$):**
The pressure that a single component would exert if it alone occupied the entire volume of the mixture at the same temperature.
**Formula:**
$$P_{total} = p_1 + p_2 + p_3 + \dots + p_n$$
Where for any component $i$, the partial pressure is related to the total pressure by the mole fraction ($x_i$):
$$p_i = x_i \times P_{total}$$
