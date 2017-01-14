---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIV DPT GET DEMO 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV DPT GET DEMO{:/}
 tag | {::nomarkdown}DEM{:/}
 routine | [DSIVDPT](http://code.osehra.org/dox/Routine_DSIVDPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will return specific patient demographic elements for a patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's DFN or pointer (IEN) to the PATIENT file.{:/} | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's 9 (or 10) digit SSN. You must pass either DFN or SSN.{:/} | 
| {::nomarkdown}PERM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a boolean flag (1 or 0). The default value is zero. If one, then always return the patient's permanent address information. Otherwise return what is configured in the MAS software.{:/} | 
| {::nomarkdown}DSICONF{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}13{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This flag determins whether or not to return the confidential address information. It is optional. If this is passed, then TODAY will be default date to use to check to see if a confidential address is active for that date.    DSICONF - optional - p1^p2        p1 - required - confidential address category - this is a string of                        one or more numerics, e.g, 134, where category                        numbers are                          1 for Eligibility/Enrollment                          2 for Appointment/Scheduling                          3 for Co-payments/Veterans Billing                          4 for Medical Records                          5 for All Others         p2 - optional - fileman date to determine if confidential date is                        effective.  Default value is TODAY{:/} | 
| {::nomarkdown}DSIVFLG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This boolean value (1 or 0) will determine the data returned for certaindata elements.  The default value is 0.  Any state, county or zip codedata elements return value will be affected by this flag   If DSIVFLG=0, return state abbreviation, a 5 or 9 zip-code, and county                name   If DSIVFLG=1, return ien to file 5^state name^state abbreviation                internal form of zip code^external zip code                multiple ien value^county name{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}