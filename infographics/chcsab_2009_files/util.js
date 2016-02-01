define(['underscore'],
    function(_) {

        var Util = {};

        Util.parseQueryString = function(queryString) {
            var params = {};
            if (queryString) {
                _.each(
                    _.map(decodeURI(queryString).split(/&/g), function(el, i) {
                        var aux = el.split('='),
                            o = {};
                        if (aux.length >= 1) {
                            var val = undefined;
                            if (aux.length == 2)
                                val = aux[1];
                            o[aux[0]] = val;
                        }
                        return o;
                    }),
                    function(o) {
                        _.extend(params, o);
                    }
                );
            }
            return params;
        };

        Util.numberWithCommas = function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };

        Util.CHCS_Cllection_Labels = {
            '2': 'PATIENT',
            '107': 'ORDER TASK',
            '101': 'ORDER',
            '8501': 'APPOINTMENT AUDIT TRAIL',
            '52_01': 'FILL DATES',
            '44_2': 'PATIENT APPOINTMENT',
            '190_3': 'RECORD MOVEMENT HISTORY',
            '52': 'PRESCRIPTION',
            '8738': 'PLI CENTRAL INFO',
            '8810': 'CLINICAL HISTORY',
            '8810_3': 'MEDICATION PROFILE',
            '100501': 'KG ADC DATA',
            '74': 'RADIOLOGY REPORTS',
            '66': 'ACCESSION',
            '100417': 'KG PATIENT DIAGNOSIS',
            '8717': 'CPT WORKLOAD DATA',
            '8554': 'MCP REFERRAL',
            '55_5': 'DRUG WARNING LOG',
            '190': 'RECORDS',
            '8917': 'SECURITY AUDIT LOG',
            '109': 'ORDER ENTRY PAGES',
            '109_3': 'ORDER ENTRY EPISODE TRACKING',
            '63': 'LAB RESULT',
            '70_5': 'RADIOLOGY EXAM',
            '55': 'PHARMACY PATIENT',
            '311': 'ENCOUNTER',
            '8810_2': 'CLINICAL EVENT TRACKING'
        };

        return Util;


    });