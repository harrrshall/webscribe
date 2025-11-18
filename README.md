### 1. Derive the First and Second Tds Equations
These equations relate entropy changes ($ds$) to measurable properties like $T, P, V, C_p,$ and $C_v$.
#### **First Tds Equation (in terms of T and V)**
Assume Entropy ($S$) is a function of Temperature ($T$) and Volume ($V$): $S = f(T, V)$.
By the chain rule of differentiation:
$$dS = \left( \frac{\partial S}{\partial T} \right)_V dT + \left( \frac{\partial S}{\partial V} \right)_T dV$$
Multiply the whole equation by $T$:
$$TdS = T \left( \frac{\partial S}{\partial T} \right)_V dT + T \left( \frac{\partial S}{\partial V} \right)_T dV$$
We know that specific heat at constant volume is $C_v = T \left( \frac{\partial S}{\partial T} \right)_V$.
Using Maxwell’s 3rd relation: $\left( \frac{\partial S}{\partial V} \right)_T = \left( \frac{\partial P}{\partial T} \right)_V$.
Substitute these back:
$$TdS = C_v dT + T \left( \frac{\partial P}{\partial T} \right)_V dV$$
*(This is the First Tds Equation)*
#### **Second Tds Equation (in terms of T and P)**
Assume Entropy ($S$) is a function of Temperature ($T$) and Pressure ($P$): $S = f(T, P)$.
By the chain rule:
$$dS = \left( \frac{\partial S}{\partial T} \right)_P dT + \left( \frac{\partial S}{\partial P} \right)_T dP$$
Multiply the whole equation by $T$:
$$TdS = T \left( \frac{\partial S}{\partial T} \right)_P dT + T \left( \frac{\partial S}{\partial P} \right)_T dP$$
We know that specific heat at constant pressure is $C_p = T \left( \frac{\partial S}{\partial T} \right)_P$.
Using Maxwell’s 4th relation: $\left( \frac{\partial S}{\partial P} \right)_T = -\left( \frac{\partial V}{\partial T} \right)_P$.
Substitute these back:
$$TdS = C_p dT - T \left( \frac{\partial V}{\partial T} \right)_P dP$$
*(This is the Second Tds Equation)*
### 2 & 3. Derive the General Expression for ($C_p - C_v$)
*This covers both Question 2 and Question 3.*
**Step 1: Equate the two Tds equations derived above.**
$$C_v dT + T \left( \frac{\partial P}{\partial T} \right)_V dV = C_p dT - T \left( \frac{\partial V}{\partial T} \right)_P dP$$
Rearrange to solve for $dT$:
$$(C_p - C_v) dT = T \left( \frac{\partial P}{\partial T} \right)_V dV + T \left( \frac{\partial V}{\partial T} \right)_P dP$$
Divide by $(C_p - C_v)$:
$$dT = \frac{T}{C_p - C_v} \left( \frac{\partial P}{\partial T} \right)_V dV + \frac{T}{C_p - C_v} \left( \frac{\partial V}{\partial T} \right)_P dP \quad \dots \text{(Equation A)}$$
**Step 2: Consider T as a function of independent variables V and P.**
$$T = f(V, P)$$
$$dT = \left( \frac{\partial T}{\partial V} \right)_P dV + \left( \frac{\partial T}{\partial P} \right)_V dP \quad \dots \text{(Equation B)}$$
**Step 3: Compare Coefficients.**
Compare the coefficient of $dV$ in Equation A and Equation B:
$$\left( \frac{\partial T}{\partial V} \right)_P = \frac{T}{C_p - C_v} \left( \frac{\partial P}{\partial T} \right)_V$$
**Step 4: Solve for ($C_p - C_v$).**
$$C_p - C_v = \frac{T \left( \frac{\partial P}{\partial T} \right)_V}{\left( \frac{\partial T}{\partial V} \right)_P}$$
Using the reciprocal relation $\frac{1}{(\partial T / \partial V)_P} = \left( \frac{\partial V}{\partial T} \right)_P$:
$$C_p - C_v = T \left( \frac{\partial P}{\partial T} \right)_V \left( \frac{\partial V}{\partial T} \right)_P$$
**Step 5: Apply the Cyclic Rule.**
For variables P, V, T:
$$\left( \frac{\partial P}{\partial T} \right)_V \left( \frac{\partial T}{\partial V} \right)_P \left( \frac{\partial V}{\partial P} \right)_T = -1$$
Rearranging for $\left( \frac{\partial P}{\partial T} \right)_V$:
$$\left( \frac{\partial P}{\partial T} \right)_V = - \frac{1}{\left( \frac{\partial T}{\partial V} \right)_P \left( \frac{\partial V}{\partial P} \right)_T} = - \left( \frac{\partial V}{\partial T} \right)_P \left( \frac{\partial P}{\partial V} \right)_T$$

Substitute this into the result from Step 4:
$$C_p - C_v = T \left[ - \left( \frac{\partial V}{\partial T} \right)_P \left( \frac{\partial P}{\partial V} \right)_T \right] \left( \frac{\partial V}{\partial T} \right)_P$$
**Final Result:**
$$C_p - C_v = -T \left( \frac{\partial V}{\partial T} \right)^2_P \left( \frac{\partial P}{\partial V} \right)_T$$
### 4. Prove ideal gas relations for $\beta$ and $\alpha$
**Ideal Gas Equation:** $Pv = RT$ $\rightarrow$ $v = \frac{RT}{P}$
#### **Part A: Prove $\beta = \frac{1}{T}$**
Definition of Volume Expansivity ($\beta$):
$$\beta = \frac{1}{v} \left( \frac{\partial v}{\partial T} \right)_P$$
Differentiating $v = \frac{RT}{P}$ with respect to $T$ (holding $P$ constant):
$$\left( \frac{\partial v}{\partial T} \right)_P = \frac{R}{P}$$
Substitute this into the definition:
$$\beta = \frac{1}{v} \cdot \frac{R}{P}$$
Since $v = RT/P$, substitute $v$:
$$\beta = \frac{P}{RT} \cdot \frac{R}{P}$$
$$\beta = \frac{1}{T}$$
*(Proved)*
#### **Part B: Prove $\alpha = \frac{1}{P}$**
Definition of Isothermal Compressibility ($\alpha$):
$$\alpha = -\frac{1}{v} \left( \frac{\partial v}{\partial P} \right)_T$$
Differentiating $v = \frac{RT}{P}$ with respect to $P$ (holding $T$ constant):
$$\left( \frac{\partial v}{\partial P} \right)_T = RT \cdot (-P^{-2}) = -\frac{RT}{P^2}$$
Since $RT/P = v$, this simplifies to:
$$\left( \frac{\partial v}{\partial P} \right)_T = -\frac{v}{P}$$
Substitute this into the definition:
$$\alpha = -\frac{1}{v} \left( -\frac{v}{P} \right)$$
$$\alpha = \frac{1}{P}$$
*(Proved)*
