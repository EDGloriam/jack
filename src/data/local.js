const local = {
    "en" : {
        "title_start" : "The show from the honest show producer ",
        "title_end": "is about to begin",
        "show" : "show",
        "will_1" : "I will start my show in",
        "will_2": "and tell you the secrets of my success.",
        "days": "days",
        "hours": "hours",
        "minutes": "minutes",
        "griteen": "Hello, my dear slave.",
        "text": {
            "begin": "My name is ",
            "main": "and I am a producer and project manager in charge of execution and producing shows. Recently I produced several shows for ",
            "end": "who is the main vendor of show production for the "
        },
        "name": "Jack Halajian"
    },
    "ar" : {
        "title_start" : "العرض من منتج العرض الصادق",
        "title_end": "على وشك أن تبدأ",
        "show" : "تبين",
        "will_1" : "سأبدأ عرضي في",
        "will_2": "وأقول لك أسرار نجاحي.",
        "days": "أيام",
        "hours": "ساعات",
        "minutes": "الدقائق",
        "griteen": "مرحبا يا عزيزي العزيز.",
        "text": {
            "begin": "اسمي هو",
            "main": "وأنا منتج ومدير مشروع مسؤول عن تنفيذ وإنتاج العروض. أنتجت مؤخرا العديد من العروض ل",
            "end": "من هو المورد الرئيسي لإنتاج المعرض لل"
        },
        "name": "جاك هلاجيان"
    }
}

var userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.split("-")[0];
let loc = '';

if(userLang === "ar"){
    loc = local['ar']
} else {
    loc = local['en']
}


export default loc;