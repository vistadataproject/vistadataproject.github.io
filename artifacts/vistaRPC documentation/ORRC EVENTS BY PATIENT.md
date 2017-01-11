---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC EVENTS BY PATIENT 

 property | value 
--- | --- 
 label | ORRC EVENTS BY PATIENT
 tag | LIST
 routine | [ORRCEVT](http://code.osehra.org/dox/Routine_ORRCEVT_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns a list of the patient's alerted events.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2. | 
| USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200. | 
| DETAILS | LITERAL |  | true | This flag indicates whether to return the details or note text with eachevent (true) or just the list of event ID's (false). | 




Generated on January 11th 2017, 6:34:23 am