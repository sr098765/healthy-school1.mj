const meals = {
    meal1: {
        title: "خبز أسمر مع جبن وزيتون",
        ingredients: ["شريحة خبز أسمر", "جبن قليل الدسم", "زيتون"],
        preparation: "يتم وضع الجبن على الخبز وإضافة الزيتون.",
        benefits: "يحتوي على الكالسيوم والبروتينات والألياف."
    },
    meal2: {
        title: "فطائر محشوة بالخضار",
        ingredients: ["عجينة الفطائر", "خضروات مشكلة", "جبن"],
        preparation: "يتم حشو العجين بالخضروات والجبن وخبزها في الفرن.",
        benefits: "غنية بالفيتامينات والمعادن."
    },
    meal3: {
        title: "تمر مع حليب",
        ingredients: ["كوب حليب", "3 تمرات"],
        preparation: "يتم تناول التمر مع الحليب الدافئ.",
        benefits: "يعطي طاقة سريعة ويحتوي على عناصر غذائية مفيدة."
    },
    meal4: {
        title: "زبادي يوناني مع عسل وفواكه",
        ingredients: ["زبادي يوناني", "عسل طبيعي", "فواكه مقطعة"],
        preparation: "يتم خلط الزبادي مع العسل وإضافة الفواكه.",
        benefits: "غني بالبروتين والكالسيوم ومضادات الأكسدة."
    },
    meal5: {
        title: "ساندويتش جبن وخيار مع خبز أسمر",
        ingredients: ["خبز أسمر", "جبن", "خيار مقطع"],
        preparation: "يتم وضع الجبن والخيار داخل الخبز وتقديمه.",
        benefits: "يحتوي على الألياف والبروتينات والمعادن."
    },
    meal6: {
        title: "بيض مسلوق مع توست وحليب",
        ingredients: ["بيضة مسلوقة", "توست أسمر", "كوب حليب"],
        preparation: "يتم سلق البيض وتقديمه مع التوست والحليب.",
        benefits: "غني بالبروتين والكالسيوم والمعادن."
    }
};

function showMeal(mealKey) {
    const meal = meals[mealKey];

    document.getElementById("meal-title").textContent = meal.title;
    document.getElementById("meal-ingredients").innerHTML = meal.ingredients.map(ing => <li>${ing}</li>).join('');
    document.getElementById("meal-preparation").textContent = meal.preparation;
    document.getElementById("meal-benefits").textContent = meal.benefits;

    document.getElementById("meal-details").style.display = "block";
}
