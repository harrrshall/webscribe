### **1. Stefan–Boltzmann Law (Stefan’s Law)**
This governing law of radiation states that the **total emissive power ($E_b$)** of a black body is directly proportional to the fourth power of its absolute temperature ($T$).
**Mathematical Expression:**
$$E_b = \sigma T^4$$
Where:
* $E_b$ = Total emissive power of a black body ($W/m^2$)
* $\sigma$ = Stefan–Boltzmann constant ($5.67 \times 10^{-8} \, W/m^2K^4$)
* $T$ = Absolute temperature ($K$)
**Note:** For a non-black (real) body with emissivity $\varepsilon$, the equation becomes $E = \varepsilon \sigma T^4$.
### **2. Monochromatic Emissive Power ($E_\lambda$)**
Also known as spectral emissive power, this is defined as the rate of energy radiated per unit area, per unit time, per unit wavelength interval ($d\lambda$) at a specific wavelength ($\lambda$).
* **Unit:** $W/m^2 \cdot \mu m$
* It varies with both wavelength and temperature.
### **3. Total Emissive Power ($E$)**
Total emissive power is the total amount of radiant energy emitted by a body per unit area per unit time over the entire spectrum of wavelengths (from $\lambda = 0$ to $\lambda = \infty$).
It is obtained by integrating the monochromatic emissive power over all wavelengths:
$$E = \int_{0}^{\infty} E_\lambda \, d\lambda$$
* **Unit:** $W/m^2$
### **4. Wien’s Displacement Law**
This law relates the temperature of a black body to the wavelength at which the emission is maximum. It states that the product of the absolute temperature ($T$) and the wavelength corresponding to maximum monochromatic emissive power ($\lambda_{max}$) is a constant.
$$\lambda_{max} T = C_w$$
Where $C_w$ is Wien’s constant ($2898 \, \mu m \cdot K$).
* **Significance:** As the temperature increases, the peak of the radiation curve shifts toward shorter wavelengths (e.g., red hot $\to$ white hot).
### **5. Planck’s Law**
This is the fundamental law of quantum theory applied to radiation. It describes the spectral distribution of emissive power of a black body. It implies that radiation is emitted in discrete packets (quanta) rather than continuously.
$$E_{b\lambda} = \frac{C_1}{\lambda^5 (e^{C_2 / \lambda T} - 1)}$$
Where $C_1$ and $C_2$ are experimental radiation constants.
* **Note:** Both Stefan’s Law and Wien’s Law can be mathematically derived from Planck’s Law.
### **6. Black Body**
A black body is an idealized physical body that serves as a standard for radiation comparison.
* **Key Properties:**
    1.  It absorbs all incident radiation, regardless of wavelength or direction ($\alpha = 1$).
    2.  It is a perfect emitter; for a given temperature and wavelength, no surface can emit more energy than a black body.
    3.  It is a diffuse emitter (follows Lambert’s Cosine Law).
* **Visual approximation:** A small hole in a large, insulated hollow sphere (cavity radiator). Any ray entering the hole is trapped by multiple internal reflections.
### **7. White Body**
A theoretical body that reflects all incident thermal radiation.
* It does not absorb or transmit any radiation.
* **Properties:** Reflectivity $\rho = 1$, Absorptivity $\alpha = 0$, Transmissivity $\tau = 0$.
### **8. Grey Body**
A grey body is a real surface for which the **monochromatic emissivity ($\varepsilon_\lambda$)** is constant and independent of the wavelength ($\lambda$).
* **Mathematical Condition:** $\varepsilon_\lambda = \varepsilon = \text{constant}$.
* The spectral distribution curve of a grey body is identical in shape to that of a black body but reduced by the factor of emissivity $\varepsilon$. This assumption simplifies engineering calculations significantly.
### **9. Lambert’s Cosine Law**
This law states that the total emissive power ($E_\theta$) from a diffuse radiating surface in a particular direction is proportional to the cosine of the angle ($\theta$) made by that direction with the normal to the surface.
$$I_\theta = I_n \cos \theta$$
Where:
* $I_\theta$ = Intensity of radiation at angle $\theta$
* $I_n$ = Intensity of radiation normal to the surface
* **Implication:** A black body (diffuse emitter) appears equally bright from all viewing directions.
### **Radiation Properties ($\alpha, \rho, \tau, \varepsilon$)**
When radiation ($G$) strikes a surface, it is divided into three parts: reflected ($G_\rho$), absorbed ($G_\alpha$), and transmitted ($G_\tau$). By conservation of energy:
$$G_\alpha + G_\rho + G_\tau = G$$
Dividing by total irradiation $G$:
$$\alpha + \rho + \tau = 1$$
#### **10. Reflectivity ($\rho$)**
The fraction of total incident radiation that is reflected by the surface.
$$\rho = \frac{G_\rho}{G}$$
* Depends on the surface finish and direction of incidence.
#### **11. Transmissivity ($\tau$)**
The fraction of total incident radiation that passes (transmits) through the body.
$$\tau = \frac{G_\tau}{G}$$
* For opaque bodies (solids/liquids), $\tau = 0$.
* For gases, $\tau$ is significant.
#### **12. Absorptivity ($\alpha$)**
The fraction of total incident radiation that is absorbed by the surface.
$$\alpha = \frac{G_\alpha}{G}$$
* According to Kirchhoff's Law, for a body in thermal equilibrium, $\alpha = \varepsilon$.
#### **13. Emissivity ($\varepsilon$)**
A measure of how effectively a real surface radiates energy compared to a black body. It is defined as the ratio of the emissive power of a real body ($E$) to the emissive power of a black body ($E_b$) at the same temperature.
$$\varepsilon = \frac{E}{E_b}$$
* **Range:** $0 \le \varepsilon \le 1$
* For a perfect black body, $\varepsilon = 1$.
* For highly polished metals, $\varepsilon$ is very low (near 0).
