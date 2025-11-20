### **Question 1: Derivation of Equation of Motion for Support Motion**
**Problem Statement:** Derive the differential equation and its solution for support (base) motion using complex algebra ($y = Ye^{i\omega t}$). 
**1. System Definition:**
* A spring-mass-damper system where the base moves.
* **Variables:**
    * $m$: Mass 
    * $k$: Stiffness 
    * $c$: Damping coefficient 
    * $x$: Displacement of mass (absolute) 
    * $y$: Displacement of base/support 
**2. Relative Motion:**
* Let relative motion between mass and base be $z = x - y$. 
* **Forces acting on the mass:**
    * Spring Force: $k(x-y) = kz$ 
    * Damping Force: $c(\dot{x}-\dot{y}) = c\dot{z}$ 
**3. Equation of Motion (Newton's 2nd Law):**
* Net Force = $ma$ 
* $-k(x-y) - c(\dot{x}-\dot{y}) = m\ddot{x}$ 
* Substituting $x = z + y$ (so $\ddot{x} = \ddot{z} + \ddot{y}$):
    $$m(\ddot{z} + \ddot{y}) + c\dot{z} + kz = 0$$ 
    $$m\ddot{z} + c\dot{z} + kz = -m\ddot{y}$$ 
**4. Solution using Harmonic Support Motion:**
* Assume support motion $y = Ye^{i\omega t}$. 
* Then velocity $\dot{y} = Y(i\omega)e^{i\omega t}$ and acceleration $\ddot{y} = -Y\omega^2 e^{i\omega t}$. 
* Substitute into the differential equation:
    $$m\ddot{z} + c\dot{z} + kz = m\omega^2 Y e^{i\omega t}$$ 
* Assume a harmonic response for relative motion $z = Z e^{i\omega t}$. 
* Substituting derivatives of $z$ into the equation and solving for amplitude $Z$:
    $$Z = \frac{m\omega^2 Y}{-m\omega^2 + ic\omega + k}$$ 
**5. Absolute Amplitude ($X$):**
* Since $x = z + y$:
    $$X = \left( \frac{k + ic\omega}{k - m\omega^2 + ic\omega} \right) Y$$ 
**6. Steady State Amplitude & Phase (Transmissibility):**
* The magnitude ratio (Transmissibility) is:
    $$\left| \frac{X}{Y} \right| = \sqrt{ \frac{k^2 + (c\omega)^2}{(k - m\omega^2)^2 + (c\omega)^2} }$$ 
* Phase angle $\phi$:
    $$\tan \phi = \frac{mc\omega^3}{k(k - m\omega^2) + (c\omega)^2}$$ 
### **Question 2: Natural Frequencies and Mode Shapes (2-DOF System)**
**Problem Statement:** Determine the natural frequencies, nodal frequencies, and mode shapes for the given system. 
**1. System Configuration:**
* **Arrangement:** Fixed Support — Spring ($k$) — Mass ($m$) — Spring ($k$) — Mass ($2m$) — Spring ($k$) — Fixed Support. 
**2. Equations of Motion (Free Vibration):**
Using D'Alembert's Principle: 
* **For Mass 1 ($m$):**
    $$m\ddot{x}_1 + kx_1 + k(x_1 - x_2) = 0 \Rightarrow m\ddot{x}_1 + 2kx_1 - kx_2 = 0$$ 
* **For Mass 2 ($2m$):**
    $$2m\ddot{x}_2 + kx_2 - k(x_1 - x_2) = 0 \Rightarrow 2m\ddot{x}_2 + 2kx_2 - kx_1 = 0$$ 
**3. Harmonic Solution Assumption:**
* Assume $x_1 = A_1 \sin(\omega t)$ and $x_2 = A_2 \sin(\omega t)$. 
* Substitute into equations to get algebraic equations:
    1.  $A_1(2k - m\omega^2) - kA_2 = 0$ 
    2.  $-kA_1 + A_2(2k - 2m\omega^2) = 0$ 
**4. Frequency Equation (Characteristic Equation):**
* Set the determinant of coefficients to zero:
    $$(2k - m\omega^2)(2k - 2m\omega^2) - k^2 = 0$$ 
* Simplifies to: $2m^2\omega^4 - 6mk\omega^2 + 3k^2 = 0$. 
* Solving for roots ($\lambda = \omega^2$) using quadratic formula:
    $$\omega^2 = \frac{k}{m} \left( \frac{3 \pm \sqrt{3}}{2} \right)$$ 
**5. Natural Frequencies:**
* $\omega_1 = \sqrt{0.634 \frac{k}{m}}$ (Fundamental frequency) 
* $\omega_2 = \sqrt{2.366 \frac{k}{m}}$ (Second frequency) 
**6. Mode Shapes (Amplitude Ratios):**
Using the first equation $\frac{A_1}{A_2} = \frac{k}{2k - m\omega^2}$: 
* **For $\omega_1$ (First Mode):** Ratio $\frac{A_1}{A_2} \approx 0.731$. 
    * Mode Vector: $\begin{Bmatrix} 0.731 \\ 1 \end{Bmatrix}$ 
* **For $\omega_2$ (Second Mode):** Ratio $\frac{A_1}{A_2} \approx -2.73$. 
    * Mode Vector: $\begin{Bmatrix} -2.73 \\ 1 \end{Bmatrix}$ 
### **Question 3: Vibration Absorber Analysis**
**Problem Statement:** Discuss the vibration absorber with the main system. 
**1. Concept:**
* A vibration absorber is a secondary system ($m_2, k_2$) attached to the main vibrating body ($m_1, k_1$) to reduce or eliminate vibration amplitude at a specific excitation frequency. 
**2. System Setup:**
* **Main System:** Mass $m_1$, Stiffness $k_1$, Excited by force $F \sin \omega t$. 
* **Absorber:** Mass $m_2$, Stiffness $k_2$. 
**3. Equations of Motion:**
* **Main Mass ($m_1$):**
    $$m_1\ddot{x}_1 + (k_1 + k_2)x_1 - k_2x_2 = F \sin \omega t$$ 
* **Absorber Mass ($m_2$):**
    $$m_2\ddot{x}_2 - k_2x_1 + k_2x_2 = 0$$ 
**4. Solution for Amplitudes:**
* Using matrix method for amplitudes $A_1$ and $A_2$: 
* The denominator (Determinant $\Delta$) is:
    $$\beta = m_1 m_2 \omega^4 - \{m_1 k_2 + m_2(k_1 + k_2)\} \omega^2 + k_1 k_2$$ 
* **Amplitude of Main Mass ($A_1$):**
    $$A_1 = \frac{(k_2 - m_2\omega^2)F}{\beta}$$ 
* **Amplitude of Absorber Mass ($A_2$):**
    $$A_2 = \frac{k_2 F}{\beta}$$ 
**5. Tuning Condition (Zero Vibration):**
* To make the main mass stationary ($A_1 = 0$), the numerator of the $A_1$ equation must be zero. 
* $$k_2 - m_2\omega^2 = 0$$
* **Result:** The absorber is tuned such that its natural frequency equals the excitation frequency:
    $$\omega = \sqrt{\frac{k_2}{m_2}}$$ 
**6. Frequency Response Ratios:**
* The notes derive the ratios of amplitudes with respect to static deflection ($A_{st} = F/k_1$).
* Mass ratio $\mu = m_2/m_1$. 
* At the tuning frequency, the absorber amplitude is:
    $$A_2 = -\frac{F}{k_2} = -\frac{k_1}{k_2} A_{st}$$ 
