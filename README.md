### Q1: Explain steam generation at constant pressure and show stages on P-v, T-s, P-T diagrams.
**Solution:**
Consider $1 \text{ kg}$ of ice at a temperature below freezing (e.g., $-10^\circ\text{C}$) in a cylinder fitted with a frictionless piston exerting a constant pressure $P$. When heat is supplied, the substance undergoes the following stages:
1.  **Solid Stage (Ice):** The temperature of the ice rises from $-10^\circ\text{C}$ to $0^\circ\text{C}$. Volume increases slightly.
2.  **Melting (Fusion):** At $0^\circ\text{C}$, ice converts to water at constant temperature. The volume *decreases* (an anomaly specific to water).
3.  **Liquid Stage (Sensible Heating):** The temperature of the water rises from $0^\circ\text{C}$ to the saturation temperature ($T_{sat}$) corresponding to pressure $P$. Volume increases slightly.
4.  **Boiling (Vaporization):** At $T_{sat}$, water converts to steam. The temperature remains constant. The volume increases enormously. This region is the "Wet Region."
5.  **Superheating:** After all water is converted to dry steam, further heating increases both temperature and volume. This is the "Superheated Region."
**Diagram Representations:**
* **T-s Diagram (Temperature vs. Entropy):**
    * Draw a bell-shaped saturation dome.
    * The process line starts from the bottom left (liquid).
    * It slopes **upward** (liquid heating) until it hits the liquid saturation line.
    * It moves **horizontally** across the dome (phase change at constant $T$).
    * It slopes **upward** again into the superheated region (gas heating).
* **P-v Diagram (Pressure vs. Volume):**
    * Draw the saturation dome.
    * Since pressure is constant, the process is a **horizontal straight line**.
    * It starts from the left (compressed liquid), crosses the wet region (volume increases significantly), and extends into the superheated region on the right.
* **P-T Diagram (Phase Diagram):**
    * This diagram shows the Fusion, Vaporization, and Sublimation curves separating the phases.
    * A constant pressure process is represented by a **horizontal line** moving from left (Liquid region) across the Vaporization curve into the right (Vapor region).
### Q2: Define Triple Point and Critical Point.
**Solution:**
**1. Triple Point:**
The Triple Point is a unique state where all three phases of a substance (solid, liquid, and vapor) coexist in thermodynamic equilibrium.
* On a P-T diagram, it appears as a single point.
* On a P-v or T-s diagram, it appears as a line (Triple Point Line).
* **For Water:** $P_{tp} = 0.611 \text{ kPa}$ and $T_{tp} = 0.01^\circ\text{C}$ ($273.16 \text{ K}$).
**2. Critical Point:**
The Critical Point is the state at which the liquid and vapor phases become indistinguishable. At this point, the latent heat of vaporization becomes zero, and the liquid directly flashes into vapor without a distinct phase change process.
* It represents the highest pressure and temperature at which a distinct liquid and gas phase can exist.
* **For Water:** $P_{cr} = 22.09 \text{ MPa}$ and $T_{cr} = 374.14^\circ\text{C}$.
### Q3: Define Wet saturated, Dry saturated, and Superheated steam.
**Solution:**
These terms describe the condition (quality) of steam:
**1. Wet Saturated Steam:**
* Steam that contains water droplets in suspension. It is a mixture of liquid water and water vapor in equilibrium at the saturation temperature.
* **Dryness Fraction ($x$):** $0 < x < 1$.
* **Example:** Steam at the exhaust of a turbine is usually wet.
**2. Dry Saturated Steam:**
* Steam that has completely evaporated and contains no water droplets ($0\%$ moisture), but is still at the saturation temperature ($T_{sat}$). It is on the verge of becoming superheated.
* **Dryness Fraction ($x$):** $x = 1$.
* **Location:** It lies exactly on the Saturated Vapor curve on the T-s or P-v diagram.
**3. Superheated Steam:**
* Steam heated to a temperature *higher* than its saturation temperature ($T_{sup} > T_{sat}$) at a given pressure.
* **Degree of Superheat:** The difference $(T_{sup} - T_{sat})$.
* It behaves more like an ideal gas and is used in power plants to prevent condensation in turbine blades.
### Q4: What is a Throttling process? Write its salient aspects.
**Solution:**
**Definition:**
A Throttling process (or wire-drawing process) occurs when a fluid flows through a restricted passage, such as a partially opened valve, an orifice, or a porous plug, causing a significant drop in pressure.
**Governing Equation:**
The process is isenthalpic, meaning the initial enthalpy equals the final enthalpy:
$$h_1 = h_2$$
**Salient Aspects (Characteristics):**
1.  **Adiabatic:** It is assumed that no heat is transferred to or from the surroundings ($Q = 0$) because the process occurs very rapidly in a small area.
2.  **No Work Done:** There is no external work done by or on the fluid ($W = 0$).
3.  **Irreversible:** The process is highly irreversible due to fluid friction and eddies. It cannot be retraced.
4.  **Pressure Drop:** The pressure always decreases ($P_2 < P_1$). The expansion happens without controlling the volume.
5.  **Constant Enthalpy:** As stated, $h_1 = h_2$. Ideally, internal energy + flow work remains constant.
### Q8: State the limitations of the First Law of Thermodynamics.
**Solution:**
While the First Law (Conservation of Energy) is fundamental, it has significant shortcomings:
1.  **No Indication of Direction:** It states that energy is conserved but does not specify the direction of the process. For example, it does not explain why heat flows spontaneously from hot to cold but not vice versa.
2.  **Feasibility of Process:** It does not determine whether a process is physically possible. A process (like water flowing uphill without a pump) could satisfy the energy balance but still be impossible.
3.  **Quality of Energy:** It treats all forms of energy (Heat and Work) as equivalent. It fails to account that Work is "high-grade energy" (fully convertible to heat) while Heat is "low-grade energy" (only partially convertible to work).
4.  **Extent of Reaction:** It does not predict how much of a chemical reaction will proceed before reaching equilibrium.
### Q9: Derive the Steady Flow Energy Equation (SFEE).
**Solution:**
Consider a control volume (open system) where fluid enters at section 1 and leaves at section 2 steadily.
**Assumptions:**
* Mass flow rate is constant ($\dot{m}_1 = \dot{m}_2 = \dot{m}$).
* Properties at any point within the control volume do not change with time.
**Energy Balance:**
Rate of Energy In = Rate of Energy Out
$$\dot{Q} + \dot{m}\left(Internal\ Energy + Flow\ Work + KE + PE\right)_{in} = \dot{W} + \dot{m}\left(Internal\ Energy + Flow\ Work + KE + PE\right)_{out}$$
The energy transported by the fluid is given by enthalpy $h = u + Pv$, where $Pv$ is the flow work.
Therefore:
$$\dot{Q} + \dot{m}\left(u_1 + P_1v_1 + \frac{C_1^2}{2} + gz_1\right) = \dot{W} + \dot{m}\left(u_2 + P_2v_2 + \frac{C_2^2}{2} + gz_2\right)$$
Substituting $h = u + Pv$:
$$\dot{Q} - \dot{W} = \dot{m} \left[ (h_2 - h_1) + \frac{C_2^2 - C_1^2}{2} + g(z_2 - z_1) \right]$$
### Q10: Apply SFEE to obtain heat transfer for an Evaporator and a Condenser.
**Solution:**
**For Evaporator & Condenser:**
1.  **No Shaft Work:** $\dot{W} = 0$.
2.  **Negligible Changes in KE & PE:** $\Delta KE \approx 0$, $\Delta PE \approx 0$.
**Applying SFEE:**
$$\dot{Q} - 0 = \dot{m}(h_2 - h_1)$$
* **For Evaporator (Heat Addition):** Heat is added to turn liquid to vapor.
    $$Q = \dot{m}(h_{out} - h_{in})$$
    (Where $h_{out} > h_{in}$, so $Q$ is positive).
* **For Condenser (Heat Rejection):** Heat is removed to turn vapor to liquid.
    $$Q = \dot{m}(h_{out} - h_{in})$$
    (Where $h_{out} < h_{in}$, so $Q$ is negative).
### Q11: Write energy equations for filling and emptying of a tank (unsteady flow).
**Solution:**
These are Unsteady State Uniform Flow (USUF) processes. The general equation for a time interval is:
$$Q - W + \sum m_{in}h_{in} - \sum m_{out}h_{out} = (m_2u_2 - m_1u_1)_{system}$$
**1. Filling a Tank (Bottle filling):**
* Ideally insulated ($Q=0$) and rigid ($W=0$).
* No mass leaves ($m_{out} = 0$).
* Initial mass $m_1$, Final mass $m_2$, Mass entering $m_{in} = m_2 - m_1$.
* **Equation:**
    $$(m_2 - m_1)h_{in} = m_2u_2 - m_1u_1$$
    *(If the tank is initially evacuated, $m_1=0$, leading to the famous result $h_{in} = u_2$, or $C_p T_{in} = C_v T_2$, implying $T_2 = \gamma T_{in}$).*
**2. Emptying a Tank (Discharge):**
* No mass enters ($m_{in} = 0$).
* Mass leaving $m_{out} = m_1 - m_2$.
* **Equation:**
    $$Q - W - (m_1 - m_2)h_{avg\_exit} = m_2u_2 - m_1u_1$$
    *(Note: For emptying, enthalpy leaving is often approximated as the average enthalpy of the tank contents during the process).*
### Q12: State the Kelvin–Planck and Clausius statements of the Second Law.
**Solution:**
**1. Kelvin-Planck Statement:**
It is impossible for any device that operates on a thermodynamic cycle to receive heat from a single thermal reservoir and produce a net amount of work.
* *Implication:* No heat engine can have a thermal efficiency of 100%.
**2. Clausius Statement:**
It is impossible to construct a device that operates in a cycle and produces no other effect than the transfer of heat from a lower-temperature body to a higher-temperature body.
* *Implication:* Heat cannot flow from cold to hot spontaneously; work input (like in a refrigerator) is required.
### Q13: Prove the equivalence of Kelvin-Planck and Clausius statements.
**Solution:**
We prove this by contradiction: showing that violating one statement inevitably violates the other.

1.  **Assume Clausius is violated:** Imagine a device that transfers $Q$ heat from Cold ($T_L$) to Hot ($T_H$) without work.
2.  **Couple with a Heat Engine:** Operate a standard Heat Engine between $T_H$ and $T_L$. Let it draw $Q$ from $T_H$, do Work $W$, and reject $(Q-W)$ to $T_L$.
3.  **Net Result:**
    * The Cold reservoir receives $(Q-W)$ and loses $Q$. Net change: loses $W$.
    * The Hot reservoir receives $Q$ (from violator) and loses $Q$ (to engine). Net change: 0.
    * **Result:** The combined system draws heat $W$ from the Cold reservoir and converts it entirely into Work $W$ without rejecting heat elsewhere.
4.  **Conclusion:** This violates the **Kelvin-Planck statement**. Thus, the Clausius and Kelvin-Planck statements are equivalent.
### Q14: Explain why two reversible adiabatic lines cannot intersect.
**Solution:**
If two reversible adiabatic (isentropic) lines were to intersect at a point (State A), we could form a cycle that violates the Second Law:
1.  Let the two adiabatic lines be intersected by a single Isothermal line.
2.  This forms a triangular cycle bounded by 2 Adiabatics and 1 Isotherm.
3.  In the adiabatic processes, $Q = 0$.
4.  Heat is only exchanged during the Isothermal process ($Q_{iso}$).
5.  The system performs a cycle exchanging heat with only **one** reservoir (the isotherm temperature).
6.  According to the **Kelvin-Planck statement**, a cycle cannot produce net work while exchanging heat with a single reservoir. Therefore, such an intersection is impossible.
### Q15: Show that for a polytropic process, $Q = \left( \frac{\gamma - n}{\gamma - 1} \right) W$.
**Solution:**
From the First Law:
$$\delta Q = dU + \delta W$$
For an ideal gas:
1.  **Internal Energy:** $dU = mC_v dT$.
    Since $C_v = \frac{R}{\gamma - 1}$, we have $dU = \frac{mR(T_2 - T_1)}{\gamma - 1}$.
2.  **Polytropic Work:** $W_{poly} = \frac{P_1V_1 - P_2V_2}{n-1} = \frac{mR(T_1 - T_2)}{n-1}$.
    Note that $(T_2 - T_1) = - (T_1 - T_2)$.
    So, $dU = - \frac{mR(T_1 - T_2)}{\gamma - 1} = - W \left(\frac{n-1}{\gamma - 1}\right)$.
Substitute into the energy equation:
$$Q = - W \left(\frac{n-1}{\gamma - 1}\right) + W$$
$$Q = W \left[ 1 - \frac{n-1}{\gamma - 1} \right]$$
$$Q = W \left[ \frac{(\gamma - 1) - (n - 1)}{\gamma - 1} \right]$$
$$\boldsymbol{Q = \left( \frac{\gamma - n}{\gamma - 1} \right) W}$$
### Q16: Account for the existence of two specific heats ($C_p$ and $C_v$) and derive the relation ($C_p - C_v = R$).
**Solution:**
**Existence:** Gases have two specific heats because gases expand significantly when heated.
* **$C_v$ (Const. Volume):** All heat goes into increasing internal energy (Temperature). No work is done.
* **$C_p$ (Const. Pressure):** Heat must increase internal energy **AND** provide energy for expansion work ($PdV$). Thus, $C_p > C_v$.
**Derivation (Mayer's Relation):**
Enthalpy is defined as: $h = u + Pv$.
Differentiating: $dh = du + d(Pv)$.
For an ideal gas, $Pv = RT$.
$$dh = du + d(RT)$$
$$dh = du + R dT$$
Since $dh = C_p dT$ and $du = C_v dT$:
$$C_p dT = C_v dT + R dT$$
Dividing by $dT$:
$$\boldsymbol{C_p - C_v = R}$$
### Q17: Prove Carnot Theorem.
**Statement:**
No heat engine operating between two given heat reservoirs can be more efficient than a reversible (Carnot) engine operating between the same reservoirs.
**Proof:**
1.  Assume an irreversible engine ($E_{irr}$) is **more** efficient than a reversible engine ($E_{rev}$). ($\eta_{irr} > \eta_{rev}$).
2.  Let both engines draw the same heat $Q_H$.
3.  Since $\eta_{irr} > \eta_{rev}$, work output $W_{irr} > W_{rev}$.
4.  Run the reversible engine in reverse (as a Heat Pump/Refrigerator). It requires $W_{rev}$ to pump $Q_H$ back to the source.
5.  Couple the engines. Use part of $W_{irr}$ to drive the reversible pump.
6.  **Net Result:** The Hot reservoir receives $Q_H$ (from pump) and gives $Q_H$ (to engine) $\to$ Net 0.
7.  The combined system delivers net work $(W_{irr} - W_{rev}) > 0$ by drawing heat purely from the Cold reservoir.
8.  This violates the **Kelvin-Planck statement**.
9.  Therefore, the assumption is false. $\eta_{irr}$ cannot be greater than $\eta_{rev}$.
### Q18: Explain the processes of the Carnot Cycle.
**Solution:**
The Carnot cycle consists of four totally reversible processes:
1.  **Reversible Isothermal Expansion (Process 1-2):** Heat is supplied ($Q_{in}$) from the high-temperature source at constant temperature $T_H$. Volume increases, Pressure decreases.
2.  **Reversible Adiabatic Expansion (Process 2-3):** The working fluid expands isentropically. No heat transfer. Temperature drops from $T_H$ to $T_L$. Work is done by the system.
3.  **Reversible Isothermal Compression (Process 3-4):** Heat is rejected ($Q_{out}$) to the sink at constant temperature $T_L$. Volume decreases, Pressure increases.
4.  **Reversible Adiabatic Compression (Process 4-1):** The fluid is compressed isentropically. Temperature rises from $T_L$ to $T_H$ to complete the cycle.
**Efficiency:** $\eta = 1 - \frac{T_L}{T_H}$
