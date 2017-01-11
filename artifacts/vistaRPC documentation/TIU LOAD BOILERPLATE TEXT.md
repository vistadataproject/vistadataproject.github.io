---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU LOAD BOILERPLATE TEXT 

 property | value 
--- | --- 
 label | TIU LOAD BOILERPLATE TEXT
 tag | BLRSHELL
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will load the boilerplate text associated with the selectedtitle, and execute the methods for any objects embedded in the boilerplatetext.


### Method description

 property | value 
--- | --- 
 Method comment | Shell for boilerplate RPC

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TITLE | LITERAL |  | true | This is a pointer to the TIU DOCUMENT DEFINITION FILE (#8925.1), whichidentifies the title of the document to be loaded. | 
| DFN | LITERAL |  | true | This is the pointer to the patient for whom the document is being entered. | 
| VSTRING | LITERAL |  | true | This optional parameter is the visit string, formatted as:HLOC;VISIT_DATE;SVC_CATIt's necessary when objects included in the boilerplate are sensitive to the attributes of the visit (e.g., the object VISIT DATE). | 




 Generated on January 11th 2017, 7:15:03 am