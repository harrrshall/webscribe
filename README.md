### 19. What is the Entropy Principle?
The **Entropy Principle** (also known as the Principle of Increase of Entropy) is a statement derived from the Second Law of Thermodynamics. It states that for an **isolated system** (a system that does not exchange energy or mass with its surroundings), the total entropy can only increase or remain constant; it can never decrease.
* **Mathematically:**
    $$(dS)_{isolated} \geq 0$$
* **Interpretation:**
    * **For Reversible Processes:** The entropy of an isolated system remains constant ($dS = 0$).
    * **For Irreversible (Real) Processes:** The entropy of an isolated system increases ($dS > 0$).
* **Implication:** Since the Universe can be considered an isolated system, the entropy of the Universe is continuously increasing. This principle dictates the direction of natural processes
### 20. Explain the Clausius Inequality.
The **Clausius Inequality** provides a criterion to determine whether a thermodynamic cycle is reversible, irreversible, or impossible. It applies the Second Law of Thermodynamics to cyclic processes.
**Statement:**
For any system undergoing a thermodynamic cycle involving heat transfer $\delta Q$ at a boundary temperature $T$, the cyclic integral of $\frac{\delta Q}{T}$ is less than or equal to zero.
**Mathematical Expression:**
$$\oint \frac{\delta Q}{T} \leq 0$$
**Conditions:**
1.  **$\oint \frac{\delta Q}{T} = 0$:** The cycle is **Reversible**.
2.  **$\oint \frac{\delta Q}{T} < 0$:** The cycle is **Irreversible** (Real cycle).
3.  **$\oint \frac{\delta Q}{T} > 0$:** The cycle is **Impossible** (Violates the Second Law).
### 21. Explain Exergy (Availability) and Anergy.
These concepts classify energy based on its "quality" or usefulness.
* **Exergy (Availability):**
    Exergy is the **maximum useful work** that can be obtained from a system as it comes into equilibrium with its surroundings (often called the "dead state," typically at pressure $P_0$ and temperature $T_0$).
    * It represents the "high-grade" or useful portion of energy.
    * Exergy is destroyed in irreversible processes due to entropy generation.
* **Anergy (Unavailable Energy):**
    Anergy is the portion of energy that **cannot be converted into work**, even by a reversible heat engine. It must be rejected to the surroundings to satisfy the Second Law of Thermodynamics.
    * It represents the "low-grade" or useless portion of energy.
**Relationship:**
$$\text{Total Energy} = \text{Exergy} + \text{Anergy}$$
### 22. Derive loss of available energy due to heat transfer across a finite temperature difference.
**Scenario:**
Consider a quantity of heat $Q$ being transferred from a high-temperature source at $T_1$ to a lower-temperature body at $T_2$. The surroundings are at ambient temperature $T_0$. We assume $T_1 > T_2 > T_0$.
**1. Entropy Change of the Source (Source loses heat):**
$$\Delta S_{source} = -\frac{Q}{T_1}$$
**2. Entropy Change of the Body (Body gains heat):**
$$\Delta S_{body} = +\frac{Q}{T_2}$$
**3. Net Entropy Generation ($\Delta S_{gen}$):**
$$\Delta S_{gen} = \Delta S_{source} + \Delta S_{body}$$
$$\Delta S_{gen} = -\frac{Q}{T_1} + \frac{Q}{T_2} = Q \left( \frac{1}{T_2} - \frac{1}{T_1} \right)$$
$$\Delta S_{gen} = Q \left( \frac{T_1 - T_2}{T_1 T_2} \right)$$
**4. Loss of Available Energy (Irreversibility $I$):**
According to the Gouy-Stodola theorem, the loss of available energy is the product of the ambient temperature and the entropy generation.
$$I = T_0 \cdot \Delta S_{gen}$$
Substituting $\Delta S_{gen}$:
$$\text{Loss of Available Energy} = T_0 Q \left( \frac{T_1 - T_2}{T_1 T_2} \right)$$
### 23. Derive entropy change for a polytropic process in terms of $(v_1, v_2)$.
**Recall General Entropy Equation for Ideal Gas:**
$$s_2 - s_1 = c_v \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{v_2}{v_1}\right) \quad \text{--- (Equation A)}$$
**Polytropic Process Relation:**
For a polytropic process $Pv^n = C$, the relationship between temperature and volume is:
$$\frac{T_2}{T_1} = \left( \frac{v_1}{v_2} \right)^{n-1}$$
**Substitution:**
Substitute the temperature ratio into Equation A:
$$s_2 - s_1 = c_v \ln\left[ \left( \frac{v_1}{v_2} \right)^{n-1} \right] + R \ln\left(\frac{v_2}{v_1}\right)$$
Using logarithm power rules ($\ln(x^a) = a \ln x$):
$$s_2 - s_1 = c_v (n-1) \ln\left(\frac{v_1}{v_2}\right) + R \ln\left(\frac{v_2}{v_1}\right)$$
Note that $\ln(v_1/v_2) = -\ln(v_2/v_1)$:
$$s_2 - s_1 = -c_v (n-1) \ln\left(\frac{v_2}{v_1}\right) + R \ln\left(\frac{v_2}{v_1}\right)$$
Factor out $\ln(v_2/v_1)$:
$$s_2 - s_1 = \left[ R - c_v(n-1) \right] \ln\left(\frac{v_2}{v_1}\right)$$
**Simplify using $R = c_p - c_v$:**
$$\text{Coefficient} = (c_p - c_v) - (n c_v - c_v)$$
$$\text{Coefficient} = c_p - c_v - n c_v + c_v$$
$$\text{Coefficient} = c_p - n c_v = c_v \left( \frac{c_p}{c_v} - n \right)$$
Since $\gamma = c_p/c_v$:
$$\text{Coefficient} = c_v (\gamma - n)$$
**Final Result:**
$$s_2 - s_1 = c_v (\gamma - n) \ln\left(\frac{v_2}{v_1}\right)$$
### 24. Show that entropy change for a non-flow process is: $s_2 - s_1 = c_p \ln(T_2/T_1) - R \ln(p_2/p_1)$
**Step 1: Start with the First Law and Entropy Definition**
From the first TdS equation (property relation):
$$Tds = dh - vdp$$
**Step 2: Substitute Property Relations for Ideal Gas**
For an ideal gas, the change in enthalpy is:
$$dh = c_p dT$$
From the ideal gas equation of state ($Pv = RT$), specific volume is:
$$v = \frac{RT}{p}$$
**Step 3: Substitute into TdS equation**
$$Tds = c_p dT - \left(\frac{RT}{p}\right) dp$$
**Step 4: Divide by T**
$$ds = c_p \frac{dT}{T} - R \frac{dp}{p}$$
**Step 5: Integrate between state 1 and state 2**
Assuming $c_p$ is constant:
$$\int_{1}^{2} ds = \int_{1}^{2} c_p \frac{dT}{T} - \int_{1}^{2} R \frac{dp}{p}$$
$$s_2 - s_1 = c_p \ln\left(\frac{T_2}{T_1}\right) - R \ln\left(\frac{p_2}{p_1}\right)$$

**(Hence Shown)**
