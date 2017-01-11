---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DPT GET DEMO 

 property | value 
--- | --- 
 label | DSIC DPT GET DEMO
 tag | DEM
 routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
 return value type | ARRAY
 description | This will return specific patient demographic elements for a patient

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | This is the patient's DFN or pointer to the PATIENT file You must pass either DFN or SSN | 
| SSN | LITERAL | 10 | true | This is the patient's 9 (or 10) digit SSN. | 
| PERM | LITERAL | 1 | true | This is a boolean flag (1 or 0).   The default value is zero.If one, then always return the patient's permanent address information.  Otherwise return was is configured in the MAS software. | 
| DSICONF | LITERAL | 13 | true | This flag determines whether or not to return the confidential address information.  It is optional.  If this is passed, then TODAY will be thedefault date to use to check to see if a confidential address is activefor that date.   DSICONF - optional - p1^p2       p1 - required - confidential address category - this is a string of                       one or more numerics, e.g, 134, where category                        numbers are                         1 for Eligibility/Enrollment                         2 for Appointment/Scheduling                         3 for Co-payments/Veterans Billing                         4 for Medical Records                         5 for All Others       p2 - optional - fileman date to determine if confidential date is                       effective.  Default value is TODAY | 
| DSIFLG | LITERAL | 1 | true | This boolean value (1 or 0) will determine the data returned for certain data elements.  The default value is 0.  Any state, county or zip codedata elements return value will be affected by this flag  If DSIFLG=0, return state abbreviation, a 5 or 9 zip-code, and county name  If DSIFLG=1, return ien to file 5^state name^state abbreviation                      internal form of zip code^external zip code                      multiple ien value^county name | 