document.addEventListener('DOMContentLoaded', function () {
    // Datos de ejemplo (modifica con tus datos reales)
    const datosSalidas = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
        datasets: [
            {
                label: 'Aguascalientes',
                data: [70203.90, 21911.10, 101715.96, 163682.70, 71260.82],
                backgroundColor: 'rgba(52, 152, 219, 0.7)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 2
            },
            {
                label: 'Mazatlán',
                data: [0.0, 7.50, 0.0, 24091.74, 88232.30],
                backgroundColor: 'rgba(46, 204, 113, 0.7)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 2
            },
            {
                label: 'Guadalajara',
                data: [287598.49, 240867.34, 224152.09, 393117.43, 340065.76],
                backgroundColor: 'rgba(51, 10, 93, 0.7)',
                borderColor: 'rgb(69, 101, 152)',
                borderWidth: 2
            }
        ]
    };

    const datosMateriales = {
        labels: ['Calentadores', 'Mangueras', 'Bases', 'Pintura'],
        datasets: [
            {
                label: 'Materiales',
                data: [120, 85, 60, 500],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderWidth: 1
            }
        ]
    };

    const configComun = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'var(--text-color)'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    color: 'var(--text-color)'
                }
            },
            x: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    color: 'var(--text-color)'
                }
            }
        }
    };

    // Gráfico de Barras
    const ctxSalidas = document.getElementById('chartSalidas').getContext('2d', { willReadFrequently: true });
    new Chart(ctxSalidas, {
        type: 'bar',
        data: datosSalidas,
        options: {
            ...configComun,
            title: {
                display: true,
                text: 'Salidas de Materiales por Mes',
                fontColor: 'var(--text-color)'
            }
        }
    });

    // Gráfico Doughnut
   // const ctxMateriales = document.getElementById('chartMateriales').getContext('2d', { willReadFrequently: true });
    //new Chart(ctxMateriales, {
       // type: 'doughnut',
       // data: datosMateriales,
      //  options: {
       //     ...configComun,
          //  title: {
            //    display: true,
             //   text: 'Distribución de Materiales',
             //   fontColor: 'var(--text-color)'
           // }
       // }
   // });

    // Gráfico Radar Comparativo
    const datosRadar = {
        labels: ['Productividad', 'Entregas a tiempo', 'Calidad', 'Eficiencia', 'Satisfacción'],
        datasets: [
            {
                label: 'Aguascalientes',
                data: [75, 75, 75, 75, 75],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(52, 152, 219, 1)'
            },
            {
                label: 'Mazatlán',
                data: [70, 80, 74, 75, 75],
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(46, 204, 113, 1)'
            }
        ]
    };

    const ctxRadar = document.getElementById('chartRadar').getContext('2d', { willReadFrequently: true });
    new Chart(ctxRadar, {
        type: 'radar',
        data: datosRadar,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: getComputedStyle(document.body).getPropertyValue('--text-color')
                    }
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(200, 200, 200, 0.3)'
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.3)'
                    },
                    pointLabels: {
                        color: getComputedStyle(document.body).getPropertyValue('--text-color')
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: getComputedStyle(document.body).getPropertyValue('--text-color')
                    }
                }
            }
        }
    });

    // Radar por Meses
    const datosRadarMeses = {
        labels: ['Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
        datasets: [
            {
                label: 'Aguascalientes',
                data: [120, 190, 170, 220, 250, 210],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(52, 152, 219, 1)'
            },
            {
                label: 'Mazatlán',
                data: [80, 110, 130, 150, 180, 200],
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(46, 204, 113, 1)'
            }
        ]
    };

    const ctxRadarMeses = document.getElementById('chartRadarMeses').getContext('2d', { willReadFrequently: true });
    new Chart(ctxRadarMeses, {
        type: 'radar',
        data: datosRadarMeses,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: getComputedStyle(document.body).getPropertyValue('--text-color')
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${context.dataset.label}: ${context.raw} unidades`;
                        }
                    }
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(200, 200, 200, 0.3)'
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.3)'
                    },
                    pointLabels: {
                        color: getComputedStyle(document.body).getPropertyValue('--text-color'),
                        font: {
                            size: 12
                        }
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: getComputedStyle(document.body).getPropertyValue('--text-color'),
                        stepSize: 50
                    }
                }
            }
        }
    });
});
