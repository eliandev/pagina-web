const data = {
  products: [
    {
      id: 1,
      name: "Derby shoes Takeo para hombre color café",
      gender: "Caballero",
      category: "Casuales",
      price: 54.99,
      image: "shoe1.webp",
      description:
        "¡Prueba la elegancia y comodidad con nuestros Derby shoes Takeo para hombre en color café! Fabricados con material sintético, estos zapatos son perfectos para cualquier ocasión. Combina estilo y confort con nuestro diseño que te hará lucir y sentir increíble. ¡Compra los tuyos hoy mismo!",
    },
    {
      id: 2,
      name: "Derby shoes Takeo para hombre color marino",
      gender: "Caballero",
      category: "Casuales",
      price: 54.99,
      image: "shoe2.webp",
      description:
        "¡Prueba la elegancia y comodidad con nuestros Derby shoes Takeo para hombre en color café! Fabricados con material sintético, estos zapatos son perfectos para cualquier ocasión. Combina estilo y confort con nuestro diseño que te hará lucir y sentir increíble. ¡Compra los tuyos hoy mismo!",
    },
    {
      id: 3,
      name: "Slip on Xavy color marino",
      gender: "Caballero",
      category: "Casuales",
      price: 49.99,
      image: "shoe3.webp",
      description:
        "¡Camina con estilo y comodidad con los Zapatos Slip on Xavy color marino para hombre! Hechos de material sintético, estos zapatos están diseñados para brindar comodidad duradera y un aspecto elegante. ¡El calzado perfecto para cualquier ocasión, con un toque moderno y casual que atraerá todas las miradas!",
    },
    {
      id: 4,
      name: "Mocasines Arnold color tan",
      gender: "Caballero",
      category: "Casuales",
      price: 25.0,
      image: "shoe4.webp",
      description:
        "¡Da un paso con estilo con nuestros mocasines Arnold para hombre! Estos zapatos están hechos de material sintético de alta calidad para mayor durabilidad y comodidad. Combínalos con cualquier atuendo, ya sea casual o elegante, y siéntete seguro y a la moda. ¡Ordena los tuyos hoy!",
    },
    {
      id: 5,
      name: "Zapatos casuales Dax slip-on color café",
      gender: "Caballero",
      category: "Casuales",
      price: 59.99,
      image: "shoe5.webp",
      description:
        "Slip clásico en cuero, perfecto para los atuendos de todos los días que te dará durabilidad y comodidad en cada paso.",
    },
    {
      id: 6,
      name: "Zapatos casuales Dax slip-on color café",
      gender: "Caballero",
      category: "Casuales",
      price: 59.99,
      image: "shoe5.webp",
      description:
        "Slip clásico en cuero, perfecto para los atuendos de todos los días que te dará durabilidad y comodidad en cada paso.",
    },
    {
      id: 7,
      name: "Slip on Xavy color marino",
      gender: "Caballero",
      category: "Casuales",
      price: 49.99,
      image: "shoe3.webp",
      description:
        "¡Camina con estilo y comodidad con los Zapatos Slip on Xavy color marino para hombre! Hechos de material sintético, estos zapatos están diseñados para brindar comodidad duradera y un aspecto elegante. ¡El calzado perfecto para cualquier ocasión, con un toque moderno y casual que atraerá todas las miradas!",
    },
    {
      id: 7,
      name: "Loafers Sloane para mujer color café",
      gender: "Dama",
      category: "Casuales",
      price: 39.99,
      image: "shoe6.webp",
      description:
        "¡Realza tu estilo con estos elegantes Loafers Sloane en color café! Diseñados para mujeres con su material sintético de alta calidad y una altura de tacón de 2 cm. Su plantilla con espuma de doble densidad y superficie geométrica protege tus pies en cada paso, brindándote comodidad y confianza. ¡No te los pierdas!",
    },
    {
      id: 8,
      name: "Mocasines Zephirah para mujer color negro",
      gender: "Dama",
      category: "Casuales",
      price: 45.99,
      image: "shoe7.webp",
      description:
        "¡Camina con confianza y comodidad con nuestros Mocasines Zephirah color negro! Hechos con material sintético de alta calidad y una altura de tacón de 5 cm, su plantilla con espuma de doble densidad te brindará una amortiguación excepcional en cada paso. ¡No querrás quitártelos nunca!",
    },
    {
      id: 9,
      name: "Mocasines Naava para mujer color negro",
      gender: "Dama",
      category: "Casuales",
      price: 20.0,
      image: "shoe8.webp",
      description:
        "¡Descubre tu estilo y comodidad con los mocasines Naava para mujer! Su elegante diseño en color negro y su material sintético te garantizan un look sofisticado y duradero. ¡Ideal para cualquier ocasión! ¡Hazlos parte de tu armario hoy mismo!",
    },
    {
      id: 10,
      name: "Loafers Sloane para mujer color café",
      gender: "Dama",
      category: "Casuales",
      price: 39.99,
      image: "shoe6.webp",
      description:
        "¡Realza tu estilo con estos elegantes Loafers Sloane en color café! Diseñados para mujeres con su material sintético de alta calidad y una altura de tacón de 2 cm. Su plantilla con espuma de doble densidad y superficie geométrica protege tus pies en cada paso, brindándote comodidad y confianza. ¡No te los pierdas!",
    },
    {
      id: 11,
      name: "Mocasines Naava para mujer color negro",
      gender: "Dama",
      category: "Casuales",
      price: 20.0,
      image: "shoe8.webp",
      description:
        "¡Descubre tu estilo y comodidad con los mocasines Naava para mujer! Su elegante diseño en color negro y su material sintético te garantizan un look sofisticado y duradero. ¡Ideal para cualquier ocasión! ¡Hazlos parte de tu armario hoy mismo!",
    },

    {
      id: 12,
      name: "Tennis Noah color azul",
      gender: "Caballero",
      category: "Deportes",
      price: 45.99,
      image: "shoe9.webp",
      description:
        "¡Descubre tu estilo y comodidad con los mocasines Naava para mujer! Su elegante diseño en color negro y su material sintético te garantizan un look sofisticado y duradero. ¡Ideal para cualquier ocasión! ¡Hazlos parte de tu armario hoy mismo!",
    },
    {
      id: 13,
      name: "Tennis Xanti color negro",
      gender: "Caballero",
      category: "Deportes",
      price: 45.99,
      image: "shoe10.webp",
      description:
        "¡Descubre tu estilo y comodidad con los mocasines Naava para mujer! Su elegante diseño en color negro y su material sintético te garantizan un look sofisticado y duradero. ¡Ideal para cualquier ocasión! ¡Hazlos parte de tu armario hoy mismo!",
    },
    {
      id: 14,
      name: "Sneakers Tod color negro",
      gender: "Caballero",
      category: "Deportes",
      price: 39.99,
      image: "shoe11.webp",
      description:
        "¡Descubre tu estilo y comodidad con los mocasines Naava para mujer! Su elegante diseño en color negro y su material sintético te garantizan un look sofisticado y duradero. ¡Ideal para cualquier ocasión! ¡Hazlos parte de tu armario hoy mismo!",
    },
    {
      id: 15,
      name: "Tennis Noah color azul",
      gender: "Caballero",
      category: "Deportes",
      price: 45.99,
      image: "shoe9.webp",
      description:
        "¡Descubre tu estilo y comodidad con los mocasines Naava para mujer! Su elegante diseño en color negro y su material sintético te garantizan un look sofisticado y duradero. ¡Ideal para cualquier ocasión! ¡Hazlos parte de tu armario hoy mismo!",
    },
    {
      id: 16,
      name: "Sneakers Urania para mujer color amarillo",
      gender: "Dama",
      category: "Deportes",
      price: 45.99,
      image: "shoe12.webp",
      description:
        "¡Descubre tu estilo y comodidad con los mocasines Naava para mujer! Su elegante diseño en color negro y su material sintético te garantizan un look sofisticado y duradero. ¡Ideal para cualquier ocasión! ¡Hazlos parte de tu armario hoy mismo!",
    },
    {
      id: 17,
      name: "Tennis Wander para mujer color blanco",
      gender: "Dama",
      category: "Deportes",
      price: 45.99,
      image: "shoe13.webp",
      description:
        "¡Descubre tu estilo y comodidad con los mocasines Naava para mujer! Su elegante diseño en color negro y su material sintético te garantizan un look sofisticado y duradero. ¡Ideal para cualquier ocasión! ¡Hazlos parte de tu armario hoy mismo!",
    },
    {
      id: 18,
      name: "Tennis Wander para mujer color negro",
      gender: "Dama",
      category: "Deportes",
      price: 45.99,
      image: "shoe14.webp",
      description:
        "¡Descubre tu estilo y comodidad con los mocasines Naava para mujer! Su elegante diseño en color negro y su material sintético te garantizan un look sofisticado y duradero. ¡Ideal para cualquier ocasión! ¡Hazlos parte de tu armario hoy mismo!",
    },
    {
      id: 18,
      name: "Tacones Chunky Tara para mujer color plateado",
      gender: "Dama",
      category: "Fiesta",
      price: 45.99,
      image: "shoe15.webp",
      description:
        "¡Descubre tu estilo y comodidad con los mocasines Naava para mujer! Su elegante diseño en color negro y su material sintético te garantizan un look sofisticado y duradero. ¡Ideal para cualquier ocasión! ¡Hazlos parte de tu armario hoy mismo!",
    },
    {
      id: 19,
      name: "Tacones Chunky Tami para mujer color rojo",
      gender: "Dama",
      category: "Fiesta",
      price: 45.99,
      image: "shoe16.webp",
      description:
        "¡Descubre tu estilo y comodidad con los mocasines Naava para mujer! Su elegante diseño en color negro y su material sintético te garantizan un look sofisticado y duradero. ¡Ideal para cualquier ocasión! ¡Hazlos parte de tu armario hoy mismo!",
    },
  ],
};

export default data;
