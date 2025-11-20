### **Topic 1: Torsional Vibrations of a Uniform Rod**
**Question:** Determine the equation for natural frequency of a uniform rod in torsional oscillations with one end fixed and the other free.
**1. [cite_start]Assumptions & Setup** [cite: 5, 6, 7, 8]
* Consider a uniform rod of length $L$.
* Select a small element of length $dx$ at a distance $x$ from the fixed end.
* Let $\theta$ be the angle of twist at distance $x$.
* [cite_start]At distance $x + dx$, the twist is $\theta + \frac{\partial \theta}{\partial x}dx$. [cite: 16]
* Let $T$ be the torque acting on the element.

**2. [cite_start]Equation of Motion (Newton's Second Law)** [cite: 29, 32]
Using Newton's second law for rotation: $\text{Net Torque} = \text{Mass Moment of Inertia} \times \text{Angular Acceleration}$
$$(T + \frac{\partial T}{\partial x}dx) - T = I \cdot \frac{\partial^2 \theta}{\partial t^2}$$
Simplifying the net torque:
$$\frac{\partial T}{\partial x}dx = (J \rho dx) \frac{\partial^2 \theta}{\partial t^2}$$
* [cite_start]Where $J$ is the polar moment of inertia ($\frac{\pi}{32}d^4$) and $\rho$ is the density. [cite: 27, 40]

**3. [cite_start]Torque-Twist Relationship** [cite: 35]
From the torsion equation $\frac{T}{J} = \frac{G \theta}{L}$, for an element it becomes:
$$T = GJ \frac{\partial \theta}{\partial x}$$
Differentiating with respect to $x$:
$$\frac{\partial T}{\partial x} = GJ \frac{\partial^2 \theta}{\partial x^2}$$

**4. [cite_start]The Wave Equation** [cite: 42, 43]
Substituting the torque derivative back into the equation of motion:
$$GJ \frac{\partial^2 \theta}{\partial x^2} dx = \rho J dx \frac{\partial^2 \theta}{\partial t^2}$$
Canceling common terms ($J, dx$):
$$\frac{\partial^2 \theta}{\partial x^2} = \frac{\rho}{G} \left( \frac{\partial^2 \theta}{\partial t^2} \right)$$
Let wave speed $c = \sqrt{\frac{G}{\rho}}$. The equation becomes:
$$\frac{\partial^2 \theta}{\partial x^2} = \frac{1}{c^2} \frac{\partial^2 \theta}{\partial t^2}$$

**5. [cite_start]General Solution** [cite: 48, 53]
Using separation of variables, let $\theta(x,t) = \theta(x)\sin(\omega t)$. The general solution for the spatial part is:
$$\theta(x) = A \cos(kx) + B \sin(kx)$$
Where $k = \omega \sqrt{\frac{\rho}{G}}$.

**6. [cite_start]Boundary Conditions (Fixed-Free)** [cite: 55, 59]
* **Condition 1 (Fixed End, $x=0$):** Twist $\theta = 0$.
    $$A \cos(0) + B \sin(0) = 0 \implies A = 0$$
    [cite_start]Therefore, equation reduces to: $\theta(x) = B \sin(kx)$. [cite: 58]

* **Condition 2 (Free End, $x=L$):** Torque is zero, which means strain/slope $\frac{\partial \theta}{\partial x} = 0$.
    $$\frac{\partial}{\partial x} (B \sin(kx)) = 0$$
    $$Bk \cos(kL) = 0$$
    [cite_start]Since $B \neq 0$ and $k \neq 0$, then $\cos(kL) = 0$. [cite: 65, 66]

**7. [cite_start]Final Frequency Equation** [cite: 66, 68]
The condition $\cos(kL) = 0$ implies:
$$kL = \frac{(2n-1)\pi}{2} \quad \text{for } n=1, 2, 3...$$
Substituting $k = \omega \sqrt{\frac{\rho}{G}}$:
$$\omega_n \sqrt{\frac{\rho}{G}} L = \frac{(2n-1)\pi}{2}$$

**Result:**
$$\omega_n = \frac{(2n-1)\pi}{2L} \sqrt{\frac{G}{\rho}}$$
### **Topic 2: Longitudinal Vibrations of a Uniform Bar**
**Question:** Develop the expression for longitudinal vibration for a rectangular uniform bar. Derive specifically for:
1.  One end fixed, one end free.
2.  Both ends free.
**Derivation / Answer:**

**1. [cite_start]Assumptions & Setup** [cite: 71, 83]
* Consider a uniform bar of length $L$, Cross-sectional Area $A$, Density $\rho$, and Modulus of Elasticity $E$.
* Let $u$ be the displacement of a cross-section at distance $x$.
* Consider an element of length $dx$.
* Displacement at $x$ is $u$. [cite_start]Displacement at $x+dx$ is $u + \frac{\partial u}{\partial x}dx$. [cite: 86]

**2. [cite_start]Equation of Motion** [cite: 93]
Net Force = Mass $\times$ Acceleration
$$(F + \frac{\partial F}{\partial x}dx) - F = m \frac{\partial^2 u}{\partial t^2}$$
$$\frac{\partial F}{\partial x}dx = (\rho A dx) \frac{\partial^2 u}{\partial t^2}$$

**3. [cite_start]Stress-Strain Relationship** [cite: 95]
Force $F = \text{Stress} (\sigma) \times \text{Area} (A)$.
Using Hooke's Law ($\sigma = E \epsilon$) and Strain $\epsilon = \frac{\partial u}{\partial x}$:
$$F = AE \frac{\partial u}{\partial x}$$
Differentiating with respect to $x$:
$$\frac{\partial F}{\partial x} = AE \frac{\partial^2 u}{\partial x^2}$$

**4. [cite_start]The Wave Equation** [cite: 97]
Substituting Force derivative back into the equation of motion:
$$AE \frac{\partial^2 u}{\partial x^2} dx = \rho A dx \frac{\partial^2 u}{\partial t^2}$$
$$\frac{\partial^2 u}{\partial x^2} = \frac{\rho}{E} \frac{\partial^2 u}{\partial t^2}$$
Let wave speed $a = \sqrt{\frac{E}{\rho}}$. The equation is:
$$\frac{\partial^2 u}{\partial x^2} = \frac{1}{a^2} \frac{\partial^2 u}{\partial t^2}$$

**5. [cite_start]General Solution** [cite: 115]
$$X(x) = A \cos(px) + B \sin(px)$$
Where $p = \frac{\omega}{a} = \omega \sqrt{\frac{\rho}{E}}$.

**6. [cite_start]Case 1: One End Fixed, One End Free** [cite: 119, 120]
* **At Fixed End ($x=0$):** Displacement $u=0$.
    $$A \cos(0) + B \sin(0) = 0 \implies A = 0$$
    [cite_start]Solution becomes: $X(x) = B \sin(px)$. [cite: 128]
* **At Free End ($x=L$):** Stress is zero, so slope $\frac{\partial u}{\partial x} = 0$.
    $$\frac{d}{dx}(B \sin(px)) = pB \cos(pL) = 0$$
    [cite_start]$$\cos(pL) = 0 \implies pL = \frac{(2n-1)\pi}{2}$$ [cite: 132]
* **Final Frequency:**
    [cite_start]$$\omega_n = \frac{(2n-1)\pi}{2L} \sqrt{\frac{E}{\rho}}$$ [cite: 133]

**7. [cite_start]Case 2: Both Ends Free** [cite: 134]
* Boundary Conditions: Strain (slope) is zero at both ends. [cite_start]$\frac{\partial u}{\partial x} = 0$ at $x=0$ and $x=L$. [cite: 135]
* **At $x=0$:**
    $$X'(x) = -pA \sin(px) + pB \cos(px)$$
    [cite_start]$$X'(0) = pB(1) = 0 \implies B = 0$$ [cite: 139]
    Therefore, $X(x) = A \cos(px)$.
* **At $x=L$:**
    $$X'(L) = -pA \sin(pL) = 0$$
    [cite_start]$$\sin(pL) = 0$$ [cite: 140]
    [cite_start]$$pL = n\pi \quad \text{for } n=0, 1, 2...$$ [cite: 142]
* **Final Frequency:**
    [cite_start]$$\omega_n = \frac{n\pi}{L} \sqrt{\frac{E}{\rho}}$$ [cite: 144]
