define(['questAPI'], function(Quest){
    var API = new Quest();

    // Define the set of questions
    API.addQuestionsSet('basicQuestions', {
        decline: false,
        type: 'text',  // Use 'text' type to allow text box input
    });

    // Define page prototype
    API.addPagesSet('basicPage', {
        header: 'Please answer the following questions:',
        noSubmit: false,
        decline: false,
        numbered: false
    });

    // ### Sequence: the order of questions
    API.addSequence([
        {
            inherit: 'basicPage',
            questions: [
                {
                    inherit: 'basicQuestions',
                    stem: 'What is your age?', // The question text
                    name: 'age', // Variable name for the response
                },
                {
                    inherit: 'basicQuestions',
                    stem: 'What is your race?', // The question text
                    name: 'race', // Variable name for the response
                },
                {
                    inherit: 'basicQuestions',
                    stem: 'How many years experience do you have in O&P?', // The question text
                    name: 'experience', // Variable name for the response
                }
            ]
        }
    ]);

    return API.script;
});
