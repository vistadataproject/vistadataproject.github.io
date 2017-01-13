---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG4 INDEX GET SPECIALTY 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 INDEX GET SPECIALTY{:/}
 tag | {::nomarkdown}IGS{:/}
 routine | [MAGSIXGT](http://code.osehra.org/dox/Routine_MAGSIXGT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call will return an array of INDEX SPECIALTY/SUBSPECIALTIESbased on the input parameters CLS (Class)and EVENT (Procedure/Event)When images are displayed, it is desirable to limit thelist of presented images to only those that are likelyto be relevant in the current context. This procedure accepts an \image category\ (either an IENor the name of a category) and returns all \(sub)specialties\that generate images in that category.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}90{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is a ',' (comma) delimited string of classesonly those specialties that match a 'class' in the stringwill be listed in the result array.{:/} | 
| {::nomarkdown}EVENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a ','(comma) delimited string of Procedure/Eventsonly those Specialties associated with one of these Proc/Events will be listed in the output.{:/} | 
| {::nomarkdown}FLGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown};  FLGS : An '^' delimited string;     1 IGN: Flag to IGNore the Status field;     2 INCL: Include Class in the Output string;     3 INST: Include Status in the Output String;     4 INSP: Include Specialty in the OutPut String{:/} | 




 Generated on January 13th 2017, 6:55:29 am