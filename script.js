function analyze() {
  let symptoms = document.getElementById("symptoms").value.toLowerCase();

  let diagnosis = "";
  let advice = "";

  if (symptoms.includes("حرارة")) {
    diagnosis = "قد تكون مصاب بعدوى";
    advice = "اشرب سوائل واستشر طبيب";
  } 
  else if (symptoms.includes("صداع")) {
    diagnosis = "إجهاد أو توتر";
    advice = "الراحة وتقليل استخدام الموبايل";
  } 
  else if (symptoms.includes("بطن")) {
    diagnosis = "مشكلة في الجهاز الهضمي";
    advice = "تجنب الأكل الدسم واشرب ماء";
  } 
  else {
    diagnosis = "غير واضح";
    advice = "يفضل استشارة طبيب متخصص";
  }

  document.getElementById("diagnosis").innerText = "التشخيص: " + diagnosis;
  document.getElementById("advice").innerText = "النصيحة: " + advice;
}
