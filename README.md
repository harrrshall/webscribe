### 1. Perpetual Motion Machine of the First Kind (PMM-1)
**Definition:**
A Perpetual Motion Machine of the First Kind (PMM-1) is a hypothetical device that can produce work continuously without absorbing energy from its surroundings, or a machine that creates energy out of nothing.
**Violation of First Law:**
The First Law of Thermodynamics states that energy cannot be created or destroyed, only converted from one form to another (Conservation of Energy).
$$\oint \delta W \neq \oint \delta Q$$
* In a PMM-1, the machine purports to deliver work ($W_{out} > 0$) while heat input is zero ($Q_{in} = 0$), or it generates more energy than it consumes.
* Since this violates the conservation of energy principle, **PMM-1 is impossible.**
### 2. Show that Internal Energy is a Property of the System
To prove this, we use the First Law of Thermodynamics for a cycle and a change of state.
**Proof:**
1.  Consider a system undergoing a cycle from State 1 to State 2 via Path A, and returning to State 1 via Path B.
    * For the cycle 1-A-2-B-1:
    $$\oint (\delta Q - \delta W) = 0$$
    $$\int_{1,A}^{2} (\delta Q - \delta W) + \int_{2,B}^{1} (\delta Q - \delta W) = 0$$
2.  Now, consider a different cycle where the system goes from 1 to 2 via Path A, but returns via a new Path C.
    * For the cycle 1-A-2-C-1:
    $$\int_{1,A}^{2} (\delta Q - \delta W) + \int_{2,C}^{1} (\delta Q - \delta W) = 0$$
3.  Comparing the two equations:
    $$\int_{2,B}^{1} (\delta Q - \delta W) = \int_{2,C}^{1} (\delta Q - \delta W)$$
**Conclusion:**
The quantity $(\delta Q - \delta W)$ is the same regardless of whether the system follows path B or path C. A quantity that depends only on the end states and not the path history is a **point function** or a **property**. We call this property **Internal Energy ($dE$ or $dU$)**.
$$dE = \delta Q - \delta W$$
### 3. Show that Work is a Path Function
**Definition:**
A path function is a quantity whose value depends on the particular path followed during a process.
**Proof:**
1.  Work done in a quasi-static process is given by the area under the curve on a P-V (Pressure-Volume) diagram:
    $$W = \int_{1}^{2} P \, dV$$
2.  Consider two states, State 1 and State 2, on a P-V diagram.
3.  Connect them via **Path A** (a higher pressure path) and **Path B** (a lower pressure path).
4.  The area under Path A represents $W_A$. The area under Path B represents $W_B$.
5.  Visually and mathematically, **Area A $\neq$ Area B**.
**Conclusion:**
Since the work done differs depending on which path is taken between the same two states, **Work is a path function**, not a property. It is an inexact differential ($\delta W$).
### 4. Quasi-static Process
**Definition:**
A quasi-static (meaning "almost static") process is a thermodynamic process that happens infinitely slowly. The system remains infinitesimally close to an equilibrium state at all times.
**Characteristics:**
* **Infinite Slowness:** The process occurs so slowly that the departure from thermodynamic equilibrium is negligible.
* **Reversibility:** Quasi-static processes involving no friction are reversible.
* **Uniform Properties:** Properties like pressure and temperature are uniform throughout the system at any given instant.
* **Graphical Representation:** It can be represented as a continuous solid line on a property diagram (like P-V or T-s diagrams).
### 5. The Zeroth Law of Thermodynamics
**Statement:**
If Body A is in thermal equilibrium with Body B, and Body B is in thermal equilibrium with Body C, then **Body A must be in thermal equilibrium with Body C**.
**Explanation:**
* **Thermal Equilibrium:** When two bodies are in contact and there is no net transfer of heat between them, they are at the same temperature.
* **Significance:** This law provides the basis for the measurement of temperature. If Body B is a thermometer, we can use it to verify that Body A and Body C are at the same temperature without bringing them into direct contact.
### 6. Intensive and Extensive Properties
**1. Intensive Properties:**
These are properties that are **independent** of the mass or size of the system. If you divide a system in half, these properties remain unchanged in each part.
* *Examples:* Pressure ($P$), Temperature ($T$), Density ($\rho$), Viscosity, Specific Volume ($v$).
**2. Extensive Properties:**
These are properties that **depend** on the mass or size of the system. If you divide the system, the value of the property gets divided.
* *Examples:* Total Volume ($V$), Total Mass ($m$), Total Internal Energy ($U$), Enthalpy ($H$), Entropy ($S$).
> **Note:** The ratio of two extensive properties usually results in an intensive property (e.g., Mass/Volume = Density).
### 7. Derivation of Displacement Work
**Problem:**
Derive displacement work for constant-temperature expansion for a gas obeying:
$$\left(p+\frac{a}{V^2}\right)(V-b) = mRT$$
**Solution:**
**Step 1: Express Pressure ($p$) in terms of Volume ($V$).**
Rearrange the given equation to solve for $p$:
$$p + \frac{a}{V^2} = \frac{mRT}{V-b}$$
$$p = \frac{mRT}{V-b} - \frac{a}{V^2}$$
**Step 2: Apply the formula for Displacement Work.**
$$W_{1-2} = \int_{V_1}^{V_2} p \, dV$$
Substitute the expression for $p$:
$$W_{1-2} = \int_{V_1}^{V_2} \left( \frac{mRT}{V-b} - \frac{a}{V^2} \right) dV$$
**Step 3: Integrate.**
We treat Temperature ($T$) as constant (isothermal process). $m$, $R$, $a$, and $b$ are also constants.
$$W_{1-2} = mRT \int_{V_1}^{V_2} \frac{1}{V-b} \, dV - a \int_{V_1}^{V_2} V^{-2} \, dV$$
* Integration of first term: $\ln(V-b)$
* Integration of second term: $\frac{V^{-1}}{-1} = -\frac{1}{V}$
**Step 4: Apply Limits.**
$$W_{1-2} = mRT \left[ \ln(V-b) \right]_{V_1}^{V_2} - a \left[ -\frac{1}{V} \right]_{V_1}^{V_2}$$
$$W_{1-2} = mRT (\ln(V_2-b) - \ln(V_1-b)) + a \left( \frac{1}{V_2} - \frac{1}{V_1} \right)$$
**Final Formula:**
$$W_{1-2} = mRT \ln\left(\frac{V_2-b}{V_1-b}\right) - a\left(\frac{1}{V_1} - \frac{1}{V_2}\right)$$
*(Alternatively written as)*:
$$W_{1-2} = mRT \ln\left(\frac{V_2-b}{V_1-b}\right) + a\left(\frac{1}{V_2} - \frac{1}{V_1}\right)$$
