

**Topic:** Derivation of the Differential Continuity Equation (Conservation of Mass)
**Coordinate System:** Cylindrical Polar $(r, \theta, z)$
### 1. Fundamental Principle
The continuity equation is the mathematical expression of the **Law of Conservation of Mass**. For any fixed control volume within a fluid flow field, the principle states:
$$\text{Rate of accumulation of mass within CV} = \text{Mass flow rate IN} - \text{Mass flow rate OUT}$$
### 2. Control Volume Specification
We consider an infinitesimal, stationary control volume (CV) in a cylindrical coordinate system defined by $(r, \theta, z)$.
* **Radial coordinate:** $r$ to $r + dr$
* **Azimuthal (Tangential) coordinate:** $\theta$ to $\theta + d\theta$
* **Axial coordinate:** $z$ to $z + dz$
**Key Geometric Properties:**
Unlike Cartesian coordinates, the cross-sectional area in the radial direction changes with distance $r$.
* **Volume of element ($dV$):** $r \, dr \, d\theta \, dz$
* **Face Area perpendicular to $r$:** $A_r = (r \, d\theta) \, dz$
* **Face Area perpendicular to $\theta$:** $A_\theta = dr \, dz$
* **Face Area perpendicular to $z$:** $A_z = (r \, d\theta) \, dr$
**Velocity Vector:** $\mathbf{V} = v_r \hat{e}_r + v_\theta \hat{e}_\theta + v_z \hat{e}_z$
**Density:** $\rho = \rho(r, \theta, z, t)$
### 3. Mass Flux Analysis
We analyze the mass flow rate ($\dot{m} = \rho \cdot \text{Velocity} \cdot \text{Area}$) across the faces in all three directions.
#### A. Radial Direction ($r$)
* **Mass In (at face $r$):**
    $$\dot{m}_r = \rho v_r (r \, d\theta \, dz)$$
* **Mass Out (at face $r + dr$):**
    Using a Taylor Series expansion and neglecting higher-order terms:
    $$\dot{m}_{r+dr} = \dot{m}_r + \frac{\partial}{\partial r}(\dot{m}_r) dr$$
    $$\dot{m}_{r+dr} = \left[ \rho v_r r \, d\theta \, dz \right] + \frac{\partial}{\partial r}(\rho v_r r \, d\theta \, dz) dr$$
* **Net Mass Flux in $r$ (In - Out):**
    $$\text{Net}_r = - \frac{\partial}{\partial r}(\rho v_r r) \, dr \, d\theta \, dz$$
#### B. Azimuthal Direction ($\theta$)
* **Mass In (at face $\theta$):**
    $$\dot{m}_\theta = \rho v_\theta (dr \, dz)$$
* **Mass Out (at face $\theta + d\theta$):**
    $$\dot{m}_{\theta+d\theta} = \dot{m}_\theta + \frac{\partial}{\partial \theta}(\dot{m}_\theta) d\theta$$
    $$\dot{m}_{\theta+d\theta} = \left[ \rho v_\theta dr \, dz \right] + \frac{\partial}{\partial \theta}(\rho v_\theta dr \, dz) d\theta$$
* **Net Mass Flux in $\theta$ (In - Out):**
    $$\text{Net}_\theta = - \frac{\partial}{\partial \theta}(\rho v_\theta) \, d\theta \, dr \, dz$$
#### C. Axial Direction ($z$)
* **Mass In (at face $z$):**
    $$\dot{m}_z = \rho v_z (r \, d\theta \, dr)$$
* **Mass Out (at face $z + dz$):**
    $$\dot{m}_{z+dz} = \dot{m}_z + \frac{\partial}{\partial z}(\dot{m}_z) dz$$
    $$\dot{m}_{z+dz} = \left[ \rho v_z r \, d\theta \, dr \right] + \frac{\partial}{\partial z}(\rho v_z r \, d\theta \, dr) dz$$
* **Net Mass Flux in $z$ (In - Out):**
    Since $r$, $d\theta$, and $dr$ are independent of $z$:
    $$\text{Net}_z = - \frac{\partial}{\partial z}(\rho v_z) \, r \, dr \, d\theta \, dz$$
### 4. Rate of Accumulation
The rate of change of mass stored inside the control volume is the time derivative of the mass ($m = \rho dV$). Since the volume element is fixed in space:
$$\frac{\partial m}{\partial t} = \frac{\partial (\rho \, dV)}{\partial t} = \frac{\partial \rho}{\partial t} (r \, dr \, d\theta \, dz)$$
### 5. Assembling the Continuity Equation
Applying the conservation law:
$$\frac{\partial m}{\partial t} = \text{Net}_r + \text{Net}_\theta + \text{Net}_z$$
Substitute the derived terms:
$$\frac{\partial \rho}{\partial t} (r \, dr \, d\theta \, dz) = - \left[ \frac{\partial}{\partial r}(\rho v_r r) + \frac{\partial}{\partial \theta}(\rho v_\theta) + r \frac{\partial}{\partial z}(\rho v_z) \right] dr \, d\theta \, dz$$
**Simplification:**
Divide the entire equation by the volume of the element $(r \, dr \, d\theta \, dz)$. *Note that in the $\theta$ term, dividing by $r$ is necessary because the original volume term contains $r$.*
1.  Divide by $dr \, d\theta \, dz$:
    $$r \frac{\partial \rho}{\partial t} = - \left[ \frac{\partial}{\partial r}(\rho v_r r) + \frac{\partial}{\partial \theta}(\rho v_\theta) + r \frac{\partial}{\partial z}(\rho v_z) \right]$$
2.  Divide by $r$ and rearrange all terms to the left side:
$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{1}{r}\frac{\partial (\rho v_\theta)}{\partial \theta} + \frac{\partial (\rho v_z)}{\partial z} = 0$$
### 6. Final Result and Special Cases
**The General Continuity Equation (Compressible Flow):**
$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (\rho r v_r)}{\partial r} + \frac{1}{r}\frac{\partial (\rho v_\theta)}{\partial \theta} + \frac{\partial (\rho v_z)}{\partial z} = 0$$
This equation is valid for unsteady, compressible flow in cylindrical coordinates.
**Special Case 1: Steady Flow**
For steady flow, fluid properties do not change with time ($\frac{\partial \rho}{\partial t} = 0$):
$$\frac{1}{r}\frac{\partial (\rho r v_r)}{\partial r} + \frac{1}{r}\frac{\partial (\rho v_\theta)}{\partial \theta} + \frac{\partial (\rho v_z)}{\partial z} = 0$$
**Special Case 2: Incompressible Flow**
For incompressible flow, density is constant ($\rho = C$). We can divide the entire equation by $\rho$:
$$\frac{1}{r}\frac{\partial (r v_r)}{\partial r} + \frac{1}{r}\frac{\partial v_\theta}{\partial \theta} + \frac{\partial v_z}{\partial z} = 0$$
Or, expanded:
$$\frac{v_r}{r} + \frac{\partial v_r}{\partial r} + \frac{1}{r}\frac{\partial v_\theta}{\partial \theta} + \frac{\partial v_z}{\partial z} = 0$$
### 7. Conclusion
The derivation successfully accounts for the changing cross-sectional area in the radial direction (represented by the term $\frac{1}{r}\frac{\partial(r...)}{\partial r}$), which distinguishes cylindrical coordinates from Cartesian. This equation is the fundamental requirement for mass conservation in fluid dynamics analysis involving pipes, rotating machinery, and axisymmetric flows.
