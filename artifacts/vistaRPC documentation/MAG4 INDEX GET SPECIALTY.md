---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 INDEX GET SPECIALTY 

 property | value 
--- | --- 
 label | MAG4 INDEX GET SPECIALTY
 tag | IGS
 routine | [MAGSIXGT](http://code.osehra.org/dox/Routine_MAGSIXGT_source.html)
 return value type | ARRAY
 description | This call will return an array of INDEX SPECIALTY/SUBSPECIALTIESbased on the input parameters CLS (Class)and EVENT (Procedure/Event)When images are displayed, it is desirable to limit thelist of presented images to only those that are likelyto be relevant in the current context. This procedure accepts an \image category\ (either an IENor the name of a category) and returns all \(sub)specialties\that generate images in that category.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLS | LITERAL | 90 | true | This parameter is a ',' (comma) delimited string of classesonly those specialties that match a 'class' in the stringwill be listed in the result array. | 
| EVENT | LITERAL | 50 | true | This is a ','(comma) delimited string of Procedure/Eventsonly those Specialties associated with one of these Proc/Events will be listed in the output. | 
| FLGS | LITERAL | 40 | true | ;  FLGS : An '^' delimited string;     1 IGN: Flag to IGNore the Status field;     2 INCL: Include Class in the Output string;     3 INST: Include Status in the Output String;     4 INSP: Include Specialty in the OutPut String | 




Generated on January 11th 2017, 6:34:23 am