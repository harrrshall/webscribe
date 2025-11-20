### **Example 5.10: Natural Frequency of Coupled Pendulums (Newton's Method)**

**Problem Statement:**
Consider two pendulums of length $L$ as shown in the figure. Determine the natural frequency of each pendulum.
**Given Data:**
* Spring stiffness, $k = 100 \text{ N/m}$
* Mass 1, $m_1 = 2 \text{ kg}$
* Mass 2, $m_2 = 5 \text{ kg}$
* Length, $L = 0.20 \text{ m}$
* Distance of spring from pivot, $a = 0.10 \text{ m}$

**Solution:**

**1. Equations of Motion (Taking Moments):**
Let us say $\theta_1$ and $\theta_2$ are very small angular displacements. Taking moments about pivot points $A$ and $B$:

For mass 1:
$$m_1 L^2 \ddot{\theta}_1 = -m_1 g L \theta_1 - k a^2 (\theta_1 - \theta_2)$$

For mass 2:
$$m_2 L^2 \ddot{\theta}_2 = -m_2 g L \theta_2 - k a^2 (\theta_2 - \theta_1)$$

**2. Assuming Harmonic Solution:**
Let us assume the solution of the form:
$$\theta_1 = \phi_1 \sin \omega t$$
$$\theta_2 = \phi_2 \sin \omega t$$

Substituting these values (where $\ddot{\theta} = -\omega^2 \phi \sin \omega t$) into the equations of motion:

$$-m_1 \omega^2 L^2 \phi_1 + m_1 g L \phi_1 + k a^2 (\phi_1 - \phi_2) = 0$$
$$-m_2 \omega^2 L^2 \phi_2 + m_2 g L \phi_2 + k a^2 (\phi_2 - \phi_1) = 0$$

Rearranging terms:
$$(-m_1 \omega^2 L^2 + m_1 g L + k a^2) \phi_1 - k a^2 \phi_2 = 0$$
$$(-m_2 \omega^2 L^2 + m_2 g L + k a^2) \phi_2 - k a^2 \phi_1 = 0$$

**3. Amplitude Ratio and Frequency Equation:**
$$\frac{\phi_1}{\phi_2} = \frac{k a^2}{-m_1 \omega^2 L^2 + m_1 g L + k a^2} = \frac{-m_2 \omega^2 L^2 + m_2 g L + k a^2}{k a^2}$$

The frequency equation is obtained by cross-multiplying (determinant equals zero):
$$(-m_1 \omega^2 L^2 + m_1 g L + k a^2)(-m_2 \omega^2 L^2 + m_2 g L + k a^2) - k^2 a^4 = 0$$

Expanding and simplifying this leads to the characteristic equation:
$$\omega^4 - \left[ \frac{g}{L} + \frac{k a^2}{m_1 L^2} + \frac{g}{L} + \frac{k a^2}{m_2 L^2} \right] \omega^2 + \frac{g^2}{L^2} + \frac{k a^2 g}{m_2 L^3} + \frac{k a^2 g}{m_1 L^3} = 0$$

**4. Numerical Calculation:**
Substituting the given values ($g=9.81, L=0.2, a=0.1, k=100, m_1=2, m_2=5$):

$$\omega^4 - \omega^2 \left[ \frac{2 \times 9.81}{0.2} + \frac{100 \times 0.1 \times 0.1}{5 \times 0.2 \times 0.2} + \frac{100 \times 0.1 \times 0.1}{2 \times 0.2 \times 0.2} \right] + \dots = 0$$
*(Note: The simplified equation from the image is used below)*

$$\omega^4 - \omega^2 (98.1 + 5 + 12.5) + 2405.9 + 245.25 + 613.125 = 0$$
$$\omega^4 - 115.6 \omega^2 + 3264.275 = 0$$

Solving the quadratic for $\omega^2$:
$$\omega^2 = \frac{115.6 \pm \sqrt{13363.36 - 13057.1}}{2}$$
$$\omega^2 = \frac{115.6 \pm 17.5}{2}$$

This gives two values for $\omega^2$:
1.  $\omega_1 = \sqrt{66.55} \approx 8.15 \text{ rad/sec}$
2.  $\omega_2 = \sqrt{49.05} \approx 7 \text{ rad/sec}$

**Final Answer:**
$$\omega_1 = 8.15 \text{ rad/sec}, \quad \omega_2 = 7 \text{ rad/sec}$$

### **Example 5.11: Solution using Lagrange's Equation**

**Problem Statement:**
Solve Example 5.10 by using Lagrange's equation.

**Solution:**

**1. Energy Formulations:**
* **Kinetic Energy (K.E.):**
    $$K.E. = \frac{1}{2} m_1 L^2 \dot{\theta}_1^2 + \frac{1}{2} m_2 L^2 \dot{\theta}_2^2$$

* **Potential Energy (P.E.):**
    $$P.E. = m_1 g L (1 - \cos \theta_1) + m_2 g L (1 - \cos \theta_2) + \frac{1}{2} k (a \theta_2 - a \theta_1)^2$$

**2. Applying Lagrange's Equation:**
For coordinate $\theta_1$:
$$\frac{d}{dt} \left( \frac{\partial K.E.}{\partial \dot{\theta}_1} \right) - \frac{\partial K.E.}{\partial \theta_1} + \frac{\partial P.E.}{\partial \theta_1} = 0$$

* Derivatives:
    $$\frac{d}{dt} \left( \frac{\partial K.E.}{\partial \dot{\theta}_1} \right) = m_1 L^2 \ddot{\theta}_1$$
    $$\frac{\partial K.E.}{\partial \theta_1} = 0$$
    $$\frac{\partial P.E.}{\partial \theta_1} = m_1 g L \sin \theta_1 - k a (a \theta_2 - a \theta_1)$$

* First Equation of Motion:
    $$m_1 L^2 \ddot{\theta}_1 + m_1 g L \sin \theta_1 - k a^2 (\theta_2 - \theta_1) = 0$$
    Assuming small angles ($\sin \theta_1 \approx \theta_1$):
    $$m_1 L^2 \ddot{\theta}_1 + m_1 g L \theta_1 - k a^2 (\theta_2 - \theta_1) = 0$$

* Second Equation of Motion (Similarly derived):
    $$m_2 L^2 \ddot{\theta}_2 + m_2 g L \theta_2 + k a^2 (\theta_2 - \theta_1) = 0$$

*(Note: These equations match those derived in Example 5.10, so the frequency calculation follows the same steps as above.)*
