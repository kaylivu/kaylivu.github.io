define(['managerAPI', 'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager) {

    let API = new Manager();

    API.setName('mgr');
    API.addSettings('skip',true);
	init_data_pipe(API, 'QtGIglkLcbIb', {
    file_type: 'csv',
    onSuccess: function(response) {
        console.log('Data successfully saved to OSF:', response);
    },
    onFailure: function(error) {
        console.log('Error saving data to OSF:', error);
    }
});
	


    API.addTasksSet({
        choose: [{
            type: 'quest',
            name: 'choose',
            scriptUrl: 'choose.js'
        }],

	hispanic: [{
            type: 'time',
            name: 'hispanic',
            scriptUrl: 'hispanic.js'
        }],
	questions: [{
            type: 'quest',
            name: 'questions',
            scriptUrl: 'questions.js'
        }]
});

    });

    API.addSequence([
	    {
	        mixer:'repeat',
	        times:10, 
	        data :
	        [
	            {inherit:'choose'},
	            {
	                mixer:'multiBranch', 
	                branches :
	                [
	                    { 
	                        conditions:[{compare: 'global.choose.questions.choice.response', to: 'hispanic'}],
	                        data:[{inherit:'hispanic'}]
	                    },
	                ]
	            }
                    {
                    	inherit: 'questions'  // Add this line to include the questions task
                    }
	       ]
	    }
    ]);

    return API.script;
});
