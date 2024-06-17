
// Создаем массив и заполняем его случайными оценками от 1 до 100 для 12 студентов
let grades = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1);

// Рассчитаем средний балл студентов
let averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

// Найдем максимальный балл среди студентов
let maxGrade = Math.max(...grades);

// Найдем минимальный балл среди студентов
let minGrade = Math.min(...grades);

// Посчитаем количество студентов, получивших положительную оценку (>= 60)
let positiveGrades = grades.filter(grade => grade >= 60);

// Посчитаем количество студентов, получивших отрицательную оценку (< 60)
let negativeGrades = grades.filter(grade => grade < 60);

// Преобразуем числовые оценки в буквенные (A/B/C/D/E)
let letterGrades = grades.map(grade => {
    if (grade >= 80) return 'A';
    if (grade >= 60) return 'B';
    if (grade >= 40) return 'C';
    if (grade >= 20) return 'D';
    return 'E';
});

// Выводим результаты на экран
let resultsDiv = document.getElementById('results');
resultsDiv.innerHTML = `
    <p><span>Оценки студентов:</span> ${grades.join(', ')}</p>
    <p><span>Средний балл студентов:</span> ${averageGrade.toFixed(2)}</p>
    <p><span>Максимальный балл среди студентов:</span> ${maxGrade}</p>
    <p><span>Минимальный балл среди студентов:</span> ${minGrade}</p>
    <p><span>Количество студентов с положительной оценкой:</span> ${positiveGrades.length}</p>
    <p><span>Количество студентов с отрицательной оценкой:</span> ${negativeGrades.length}</p>
    <p><span>Буквенные оценки студентов:</span> ${letterGrades.join(', ')}</p>
`;
