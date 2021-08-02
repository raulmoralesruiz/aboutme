import { CompanyInterface } from './company.interface';

export let companies: CompanyInterface[] = [
  {
    name: 'Everis',
    duration: 'Actualmente',
    job: 'Desarrollador junior',
    location: 'Sevilla, España'
  },
  {
    name: 'Everis',
    duration: '2021',
    job: 'Desarrollador web en prácticas',
    location: 'Sevilla, España',
    experience: [
        'Desarrollo web en varios proyectos, utilizando diferentes tecnologías.',
        'Java, JSF, Microsoft SQL Server, Subversion, Tests unitarios.',
        'Python, MongoDB, AWS, Git, Tests unitarios y de regresión.',
    ]
  },
  {
    name: 'Everis',
    duration: '2019 - 2021',
    job: 'Estudiante en prácticas FP Dual',
    location: 'Sevilla, España',
    experience: [
        'Estudiante de formación dual profesional aprendiendo varias tecnologías',
        'Front-end. Angular, Javascript, Typescript, HTML, CSS',
        'Back-end. Spring, MongoDB, Git y Apache Tomcat.',
    ]
  },
  {
    name: 'MGS Soft',
    duration: '2013 - 2019',
    job: 'Técnico Informático de Sistemas',
    location: 'Sevilla, España',
    experience: [
        '- Administración y mantenimiento de Sistemas Informáticos Windows/Linux.',
        '- Configuración de red, scripts, línea de comandos, configuración de servicios',
        '- Resolución de incidencias en equipos y servidores/Documentación/Reporting en Dpto de Sistemas',
        '- Soporte IT en Planta envasadora Coca Cola y almacén automático.',
        '- Asesoramiento personalizado en equipos según las necesidades informáticas de cada cliente.',
        '- Mantenimiento de CPD.',
    ]
  },
];