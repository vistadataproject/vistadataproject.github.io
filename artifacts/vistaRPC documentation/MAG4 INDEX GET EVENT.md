---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAG4 INDEX GET EVENT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 INDEX GET EVENT{:/}
 tag | {::nomarkdown}IGE{:/}
 routine | [MAGSIXGT](http://code.osehra.org/dox/Routine_MAGSIXGT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call will return an array of INDEX PROCEDURE/EVENT(s)based on the input parameters CLS (Class)and SPEC (Specialty/subspecialty)When images are displayed, it is desirable to limit thelist of presented images to only those that are likelyto be relevant in the current context. This procedure accepts an \image category\ (either an IENor the name of a category) and returns all \image events\that belong to that category.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}90{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is a ',' (comma) delimited string of classesonly those index types, that match a 'class' in the stringwill be returned in the array{:/} | 
| {::nomarkdown}FLGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown};  FLGS : An '^' delimited string;     1 IGN: Flag to IGNore the Status field;     2 INCL: Include Class in the Output string;     3 INST: Include Status in the Output String{:/} | 
| {::nomarkdown}SPEC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a comma delimited list of Specialty/SubSpecialtiesOnly Procedure/Events that are associated with one of these will bereturned in the list.If a Procedure/Event is not associated with any Specialty/Subspecialtiesit is considered valid for all, and will be returned.{:/} | 




 Generated on January 14th 2017, 7:26:36 am