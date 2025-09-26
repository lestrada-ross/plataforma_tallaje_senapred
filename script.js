document.addEventListener('DOMContentLoaded', () => {

    const sizeData = {
        'parka-mujer': {
            measurements: ['contornoPecho', 'contornoCintura', 'contornoCadera', 'largoTotal', 'largoMangas'],
            data: [
                { talla: 'XS', contornoPecho: 51 * 2, contornoCintura: 49 * 2, contornoCadera: 52 * 2, largoTotal: 65, largoMangas: 57 },
                { talla: 'S', contornoPecho: 53 * 2, contornoCintura: 51 * 2, contornoCadera: 54 * 2, largoTotal: 67, largoMangas: 59 },
                { talla: 'M', contornoPecho: 55 * 2, contornoCintura: 53 * 2, contornoCadera: 56 * 2, largoTotal: 69, largoMangas: 61 },
                { talla: 'L', contornoPecho: 57 * 2, contornoCintura: 55 * 2, contornoCadera: 58 * 2, largoTotal: 71, largoMangas: 62 },
                { talla: 'XL', contornoPecho: 59 * 2, contornoCintura: 57 * 2, contornoCadera: 60 * 2, largoTotal: 72.5, largoMangas: 63 },
                { talla: '2XL', contornoPecho: 61 * 2, contornoCintura: 59 * 2, contornoCadera: 62 * 2, largoTotal: 74, largoMangas: 64 },
                { talla: '3XL', contornoPecho: 63 * 2, contornoCintura: 61 * 2, contornoCadera: 64 * 2, largoTotal: 75.5, largoMangas: 65 },
                { talla: '4XL', contornoPecho: 65 * 2, contornoCintura: 63 * 2, contornoCadera: 66 * 2, largoTotal: 77, largoMangas: 66 }
            ]
        },
        'parka-hombre': {
            measurements: ['contornoPecho', 'contornoCadera', 'largoTotal', 'largoMangas'],
            data: [
                { talla: 'S', contornoPecho: 60 * 2, contornoCadera: 59 * 2, largoTotal: 75, largoMangas: 69 },
                { talla: 'M', contornoPecho: 62 * 2, contornoCadera: 61 * 2, largoTotal: 77, largoMangas: 70 },
                { talla: 'L', contornoPecho: 64 * 2, contornoCadera: 63 * 2, largoTotal: 79, largoMangas: 71 },
                { talla: 'XL', contornoPecho: 66 * 2, contornoCadera: 65 * 2, largoTotal: 80.5, largoMangas: 72 },
                { talla: '2XL', contornoPecho: 68 * 2, contornoCadera: 67 * 2, largoTotal: 82, largoMangas: 73 },
                { talla: '3XL', contornoPecho: 70 * 2, contornoCadera: 69 * 2, largoTotal: 83.5, largoMangas: 74 },
                { talla: '4XL', contornoPecho: 72 * 2, contornoCadera: 71 * 2, largoTotal: 85, largoMangas: 75 }
            ]
        },
        'polar-hombre': {
            measurements: ['contornoPecho', 'contornoCintura', 'contornoCadera', 'largoMangas'],
            data: [
                { talla: 'S', contornoPecho: 55 * 2, contornoCintura: 53 * 2, contornoCadera: 53 * 2, largoMangas: 62 },
                { talla: 'M', contornoPecho: 57 * 2, contornoCintura: 55 * 2, contornoCadera: 55 * 2, largoMangas: 64 },
                { talla: 'L', contornoPecho: 59 * 2, contornoCintura: 57 * 2, contornoCadera: 57 * 2, largoMangas: 66 },
                { talla: 'XL', contornoPecho: 61 * 2, contornoCintura: 59 * 2, contornoCadera: 59 * 2, largoMangas: 68 },
                { talla: 'XXL', contornoPecho: 63 * 2, contornoCintura: 61 * 2, contornoCadera: 61 * 2, largoMangas: 70 },
                { talla: '3XL', contornoPecho: 65 * 2, contornoCintura: 63 * 2, contornoCadera: 63 * 2, largoMangas: 72 },
                { talla: '4XL', contornoPecho: 67 * 2, contornoCintura: 65 * 2, contornoCadera: 65 * 2, largoMangas: 74 }
            ]
        },
        'polar-mujer': {
            measurements: ['contornoPecho', 'contornoCintura', 'contornoCadera', 'largoMangasCuello'],
            data: [
                { talla: 'XS', contornoPecho: 47 * 2, contornoCintura: 44 * 2, contornoCadera: 48 * 2, largoMangasCuello: 69 },
                { talla: 'S', contornoPecho: 49.5 * 2, contornoCintura: 46.5 * 2, contornoCadera: 50.5 * 2, largoMangasCuello: 71 },
                { talla: 'M', contornoPecho: 52 * 2, contornoCintura: 48 * 2, contornoCadera: 53 * 2, largoMangasCuello: 73 },
                { talla: 'L', contornoPecho: 54.5 * 2, contornoCintura: 51.5 * 2, contornoCadera: 55.5 * 2, largoMangasCuello: 75 },
                { talla: 'XL', contornoPecho: 57 * 2, contornoCintura: 54 * 2, contornoCadera: 58 * 2, largoMangasCuello: 77 },
                { talla: '2XL', contornoPecho: 59.5 * 2, contornoCintura: 56.5 * 2, contornoCadera: 60.5 * 2, largoMangasCuello: 79 },
                { talla: '3XL', contornoPecho: 62 * 2, contornoCintura: 59 * 2, contornoCadera: 63 * 2, largoMangasCuello: 81 },
                { talla: '4XL', contornoPecho: 64 * 2, contornoCintura: 61.5 * 2, contornoCadera: 65.5 * 2, largoMangasCuello: 83 }
            ]
        },
        'camisa-hombre': {
            measurements: ['contornoPecho', 'contornoCadera', 'largoTotal', 'anchoEspalda', 'largoManga'],
            data: [
                { talla: 'S', contornoPecho: 56 * 2, contornoCadera: 56 * 2, largoTotal: 74, anchoEspalda: 47, largoManga: 63 },
                { talla: 'M', contornoPecho: 58 * 2, contornoCadera: 58 * 2, largoTotal: 76, anchoEspalda: 48.5, largoManga: 64 },
                { talla: 'L', contornoPecho: 60 * 2, contornoCadera: 60 * 2, largoTotal: 78, anchoEspalda: 50, largoManga: 65 },
                { talla: 'XL', contornoPecho: 62 * 2, contornoCadera: 62 * 2, largoTotal: 80, anchoEspalda: 51.5, largoManga: 66 },
                { talla: 'XXL', contornoPecho: 64 * 2, contornoCadera: 64 * 2, largoTotal: 82, anchoEspalda: 53, largoManga: 67 },
                { talla: 'XXXL', contornoPecho: 66 * 2, contornoCadera: 66 * 2, largoTotal: 84, anchoEspalda: 48, largoManga: 68 },
                { talla: '4XL', contornoPecho: 68 * 2, contornoCadera: 68 * 2, largoTotal: 86, anchoEspalda: 50, largoManga: 70 }
            ]
        },
        'camisa-mujer': {
            measurements: ['contornoPecho', 'contornoCintura', 'contornoCadera', 'largoTotal', 'anchoEspalda', 'largoManga'],
            data: [
                { talla: 'XS', contornoPecho: 46 * 2, contornoCintura: 41 * 2, contornoCadera: 48 * 2, largoTotal: 61, anchoEspalda: 38, largoManga: 59.5 },
                { talla: 'S', contornoPecho: 48 * 2, contornoCintura: 43 * 2, contornoCadera: 50 * 2, largoTotal: 63, anchoEspalda: 39.5, largoManga: 60.5 },
                { talla: 'M', contornoPecho: 50 * 2, contornoCintura: 45 * 2, contornoCadera: 52 * 2, largoTotal: 65, anchoEspalda: 41, largoManga: 61.5 },
                { talla: 'L', contornoPecho: 52 * 2, contornoCintura: 47 * 2, contornoCadera: 54 * 2, largoTotal: 67, anchoEspalda: 42.5, largoManga: 62.5 },
                { talla: 'XL', contornoPecho: 54 * 2, contornoCintura: 49 * 2, contornoCadera: 56 * 2, largoTotal: 69, anchoEspalda: 44, largoManga: 63.5 },
                { talla: 'XXL', contornoPecho: 56 * 2, contornoCintura: 51 * 2, contornoCadera: 58 * 2, largoTotal: 71, anchoEspalda: 45.5, largoManga: 64.5 },
                { talla: 'XXXL', contornoPecho: 58 * 2, contornoCintura: 53 * 2, contornoCadera: 60 * 2, largoTotal: 73, anchoEspalda: 47, largoManga: 65.5 },
                { talla: '4XL', contornoPecho: 60 * 2, contornoCintura: 55 * 2, contornoCadera: 62 * 2, largoTotal: 75, anchoEspalda: 48.5, largoManga: 66.5 }
            ]
        },
        'polera-hombre': {
            measurements: ['contornoPecho', 'contornoCadera', 'largoTotalEspalda', 'largoManga'],
            data: [
                { talla: 'S', contornoPecho: 108, contornoCadera: 108, largoTotalEspalda: 75, largoManga: 63 },
                { talla: 'M', contornoPecho: 113, contornoCadera: 113, largoTotalEspalda: 77.5, largoManga: 64.5 },
                { talla: 'L', contornoPecho: 118, contornoCadera: 118, largoTotalEspalda: 78.5, largoManga: 66 },
                { talla: 'XL', contornoPecho: 124, contornoCadera: 124, largoTotalEspalda: 82, largoManga: 67.5 },
                { talla: 'XXL', contornoPecho: 130, contornoCadera: 130, largoTotalEspalda: 85.5, largoManga: 69 },
                { talla: 'XXXL', contornoPecho: 134, contornoCadera: 134, largoTotalEspalda: 88, largoManga: 70 },
                { talla: '4XL', contornoPecho: 138, contornoCadera: 138, largoTotalEspalda: 90, largoManga: 71 }
            ]
        },
        'polera-mujer': {
            measurements: ['contornoPecho', 'contornoCintura', 'contornoCadera', 'largoTotalEspalda', 'largoManga'],
            data: [
                { talla: 'XS', contornoPecho: 95, contornoCintura: 85, contornoCadera: 103, largoTotalEspalda: 61, largoManga: 59.5 },
                { talla: 'S', contornoPecho: 101, contornoCintura: 91, contornoCadera: 109, largoTotalEspalda: 63, largoManga: 60.5 },
                { talla: 'M', contornoPecho: 107, contornoCintura: 97, contornoCadera: 111, largoTotalEspalda: 65, largoManga: 61.5 },
                { talla: 'L', contornoPecho: 113, contornoCintura: 103, contornoCadera: 121, largoTotalEspalda: 67, largoManga: 62.5 },
                { talla: 'XL', contornoPecho: 116, contornoCintura: 106, contornoCadera: 124, largoTotalEspalda: 69, largoManga: 62.5 },
                { talla: '2XL', contornoPecho: 120, contornoCintura: 110, contornoCadera: 128, largoTotalEspalda: 71, largoManga: 63.5 },
                { talla: '3XL', contornoPecho: 124, contornoCintura: 114, contornoCadera: 132, largoTotalEspalda: 73, largoManga: 63.5 },
                { talla: '4XL', contornoPecho: 128, contornoCintura: 118, contornoCadera: 136, largoTotalEspalda: 75, largoManga: 63.5 }
            ]
        },
        'pantalon-unisex': {
            measurements: ['contornoCintura', 'contornoCadera', 'largoTotal'],
            data: [
                { talla: 'XS', contornoCintura: 38 * 2, contornoCadera: 48 * 2, largoTotal: 98, altoPretina: 4 },
                { talla: 'S', contornoCintura: 40 * 2, contornoCadera: 51 * 2, largoTotal: 99, altoPretina: 4 },
                { talla: 'M', contornoCintura: 42 * 2, contornoCadera: 54 * 2, largoTotal: 100, altoPretina: 4 },
                { talla: 'L', contornoCintura: 44 * 2, contornoCadera: 57 * 2, largoTotal: 101, altoPretina: 4 },
                { talla: 'XL', contornoCintura: 46 * 2, contornoCadera: 60 * 2, largoTotal: 102, altoPretina: 4 },
                { talla: '2XL', contornoCintura: 48 * 2, contornoCadera: 63 * 2, largoTotal: 103, altoPretina: 4 },
                { talla: '3XL', contornoCintura: 50 * 2, contornoCadera: 66 * 2, largoTotal: 104, altoPretina: 4 },
                { talla: '4XL', contornoCintura: 52 * 2, contornoCadera: 69 * 2, largoTotal: 105, altoPretina: 4 }
            ]
        }
    };

    const measurementLabels = {
        contornoPecho: '1/2 Contorno Pecho',
        contornoCintura: '1/2 Contorno Cintura',
        contornoCadera: '1/2 Contorno Cadera',
        largoTotal: 'Largo Total',
        largoMangas: 'Largo Mangas',
        largoMangasCuello: 'Largo Manga (cuello)',
        anchoEspalda: 'Ancho Espalda',
        largoManga: 'Largo Manga',
        largoTotalEspalda: 'Largo Espalda',
    };

    let currentGarment = 'parka';
    let currentGender = 'hombre';

    const garmentSelector = document.getElementById('garment-selector');
    const genderSelectorContainer = document.getElementById('gender-selector-container');
    const genderSelector = document.getElementById('gender-selector');
    const measurementInputsContainer = document.getElementById('measurement-inputs');
    const recommendedSizeEl = document.getElementById('recommended-size');
    const resultMessageEl = document.getElementById('result-message');

    function populateTables() {
        for (const key in sizeData) {
            const tableId = `#table-${key.replace('-unisex', '')}`;
            const tableBody = document.querySelector(`${tableId} tbody`);
            if (!tableBody) continue;

            tableBody.innerHTML = '';
            sizeData[key].data.forEach(rowData => {
                const row = document.createElement('tr');
                row.className = 'bg-white border-b';
                row.dataset.talla = rowData.talla;
                
                const headers = Object.keys(rowData);
                headers.forEach(prop => {
                    const cell = document.createElement('td');
                    cell.className = 'px-6 py-4';
                     if(prop === 'talla') {
                        cell.className += ' font-medium text-gray-900 whitespace-nowrap';
                        cell.setAttribute('scope', 'row');
                    }
                    cell.textContent = rowData[prop];
                    row.appendChild(cell);
                });
                tableBody.appendChild(row);
            });
        }
    }

    function createInputFields() {
        measurementInputsContainer.innerHTML = '';
        let key = currentGarment;
        if (currentGarment === 'pantalon') {
            key = 'pantalon-unisex';
        } else {
            key += `-${currentGender}`;
        }
        
        const measurements = sizeData[key].measurements;
        
        measurements.forEach(m => {
            const div = document.createElement('div');
            div.className = "fade-in";
            const label = document.createElement('label');
            label.htmlFor = `input-${m}`;
            label.className = 'block text-sm font-medium text-gray-600 mb-1';
            label.textContent = measurementLabels[m];

            const input = document.createElement('input');
            input.type = 'number';
            input.id = `input-${m}`;
            input.dataset.measure = m;
            input.placeholder = 'ej: ' + (sizeData[key].data[0][m] / (m.includes('contorno') ? 2 : 1)).toFixed(0);
            input.className = 'mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500';
            input.addEventListener('input', calculateSize);
            
            div.appendChild(label);
            div.appendChild(input);
            measurementInputsContainer.appendChild(div);
        });
    }
    
    function calculateSize() {
        const inputs = measurementInputsContainer.querySelectorAll('input');
        const userMeasurements = {};
        let hasInput = false;

        inputs.forEach(input => {
            if (input.value) {
                const measureName = input.dataset.measure;
                // Si la medida es de contorno, se multiplica por 2 lo ingresado por el usuario
                userMeasurements[measureName] = parseFloat(input.value) * (measureName.includes('contorno') ? 2 : 1);
                hasInput = true;
            }
        });

        document.querySelectorAll('tbody tr').forEach(row => row.classList.remove('highlight-row'));

        if (!hasInput) {
            recommendedSizeEl.textContent = '...';
            resultMessageEl.textContent = 'Ingresa tus medidas';
            return;
        }

        let key = currentGarment;
        if (currentGarment === 'pantalon') {
            key = 'pantalon-unisex';
        } else {
            key += `-${currentGender}`;
        }

        const garmentInfo = sizeData[key];
        let bestMatch = null;
        let minDifference = Infinity;

        garmentInfo.data.forEach(sizeProfile => {
            let totalDifference = 0;
            let isViable = true;

            garmentInfo.measurements.forEach(m => {
                if (userMeasurements[m]) {
                    const profileValue = sizeProfile[m];
                    const userValue = userMeasurements[m];
                    
                    if (userValue > profileValue + 2) { 
                        isViable = false;
                    }
                    totalDifference += Math.abs(profileValue - userValue);
                }
            });

            if (isViable && totalDifference < minDifference) {
                minDifference = totalDifference;
                bestMatch = sizeProfile;
            }
        });
        
        if (bestMatch) {
            recommendedSizeEl.textContent = bestMatch.talla;
            resultMessageEl.textContent = 'Basado en el ajuste más cercano.';
            const tableKey = `#table-${key.replace('-unisex', '')}`;
            const highlightedRow = document.querySelector(`${tableKey} tr[data-talla="${bestMatch.talla}"]`);
            if (highlightedRow) {
                highlightedRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                highlightedRow.classList.add('highlight-row');
            }
        } else {
            recommendedSizeEl.textContent = '¿Fuera de rango?';
            resultMessageEl.textContent = 'Tus medidas superan nuestra talla más grande.';
        }
    }

    function switchGarment(garment) {
        currentGarment = garment;
        
        document.querySelectorAll('.garment-btn').forEach(btn => {
            btn.classList.remove('active-btn', 'inactive-btn');
            btn.classList.add(btn.dataset.garment === garment ? 'active-btn' : 'inactive-btn');
        });

        const hasGender = ['parka', 'polar', 'camisa', 'polera'].includes(garment);
        genderSelectorContainer.style.display = hasGender ? 'block' : 'none';
        
        if (!hasGender) {
            currentGender = 'unisex';
        } else {
            currentGender = document.querySelector('.gender-btn.active-btn').dataset.gender;
        }

        createInputFields();
        calculateSize();
    }

    function switchGender(gender) {
        currentGender = gender;
        
        document.querySelectorAll('.gender-btn').forEach(btn => {
            btn.classList.remove('active-btn', 'inactive-btn');
            btn.classList.add(btn.dataset.gender === gender ? 'active-btn' : 'inactive-btn');
        });

        createInputFields();
        calculateSize();
    }

    garmentSelector.addEventListener('click', e => e.target.matches('.garment-btn') && switchGarment(e.target.dataset.garment));
    genderSelector.addEventListener('click', e => e.target.matches('.gender-btn') && switchGender(e.target.dataset.gender));

    // Initial setup
    // populateTables(); // Descomentar si aún quieres las tablas visibles
    switchGarment('parka');

    // FORMULARIO

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwNZZqw5TnIo-mEaD5nJbudDauhJewn0xrQeOtGNqATsWdI99Sr9qmI1SSu3X7rQqLM3w/exec'; 

    const tallasForm = document.getElementById('tallas-form');
    const rutInput = document.getElementById('rut');
    const submitBtn = document.getElementById('submit-btn');
    const userFeedback = document.getElementById('user-feedback');
    const submitFeedback = document.getElementById('submit-feedback');

    rutInput.addEventListener('blur', async () => {
        const rut = rutInput.value.trim();
        if (rut.length < 9) return; 

        userFeedback.textContent = 'Buscando tu registro...';
        submitBtn.disabled = true;
        
        try {
            const response = await fetch(`${SCRIPT_URL}?rut=${encodeURIComponent(rut)}`);
            const result = await response.json();

            if (result.status === 'success') {
                const userData = result.data;
                userFeedback.textContent = '¡Hola de nuevo! Encontramos tu registro.';
                document.getElementById('email').value = userData.Email || '';
                document.getElementById('talla-parka').value = userData.Parka || '';
                document.getElementById('talla-polar').value = userData.Polar || '';
                document.getElementById('talla-camisa').value = userData.Camisa || '';
                document.getElementById('talla-polera').value = userData.Polera || '';
                document.getElementById('talla-pantalon').value = userData.Pantalon || '';
                submitBtn.textContent = 'Actualizar Mis Tallas';
            } else {
                userFeedback.textContent = 'Parece que eres un usuario nuevo.';
                submitBtn.textContent = 'Registrar Mis Tallas';
            }
        } catch (error) {
            console.error('Error al buscar usuario:', error);
            userFeedback.textContent = 'No se pudo verificar el RUT.';
        } finally {
            submitBtn.disabled = false;
        }
    });

    tallasForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        submitFeedback.textContent = '';

        const formData = new FormData(tallasForm);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Cambiado a 'no-cors' para Google Scripts
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            // Con no-cors, no podemos leer la respuesta, así que asumimos éxito.
            const action = submitBtn.textContent.includes('Actualizar') ? 'actualizadas' : 'registradas';
            submitFeedback.textContent = `¡Tallas ${action} con éxito!`;
            
            setTimeout(() => {
                tallasForm.reset();
                userFeedback.textContent = '';
                submitBtn.textContent = 'Registrar Mis Tallas';
                submitFeedback.textContent = '';
            }, 3000);

        } catch (error) {
            console.error('Error al enviar formulario:', error);
            submitFeedback.textContent = 'Hubo un error. Intenta de nuevo.';
        } finally {
            // El botón se reactivará después del reseteo del formulario
            setTimeout(() => {
                 submitBtn.disabled = false;
            }, 3000);
        }
    });
});