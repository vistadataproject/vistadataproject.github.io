---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS PATIENT PRE-REGISTRATION 

 property | value 
--- | --- 
 label | {::nomarkdown}VPS PATIENT PRE-REGISTRATION{:/}
 tag | {::nomarkdown}PREREG{:/}
 routine | [VPSRPC3](http://code.osehra.org/dox/Routine_VPSRPC3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}There are  2 input parameters for the RPC call  sent by the Vetlink kiosk Pre-registration event.Inputs:  DFN and Status Code.Patient DFN -1st input parameter of the RPC call, required. Status Code - code that represents the outcome of the pre-registration interview with the patient, required.  List of possible codes that could be sent:B = BUSYC = CONNECTEDD = DEATHK = CALL BACKM =LEFT CALLBACK MESSAGEN = NO ANSWERP = NO PHONET = DON'T CALLU = UNCOOPERATIVEV = PREVIOUSLY UPDATEDW =WRONG NUMBERX = CHANGE INFORMATION Output:  string consisting of a single digit to denote success or failure of the pre-registration, followed by a short message:     1 if pre-registration was successful or 0 if there was a problem.Syntax to indicate success: VPSRES=\1,Pre-Registration completed.\Syntax to indicate a failure: VPSRES=\0,Patient nof found.\ VPSRES=\0,Invalid SSN for this patient.\ VPSRES=\0,Unable to add Pre-Registration.\{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input: the patient's internal entry number (IEN) from file #2. Only one DFN is allowed to be passed in, required.{:/} | 
| {::nomarkdown}VPSCST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input: the call status code, either 'C' (Connected) or 'X' (Change Information), required.{:/} | 




 Generated on January 13th 2017, 7:11:27 am