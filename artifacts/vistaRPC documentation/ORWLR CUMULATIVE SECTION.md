---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWLR CUMULATIVE SECTION 

 property | value 
--- | --- 
 label | ORWLR CUMULATIVE SECTION
 tag | RPT
 routine | [ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
 return value type | GLOBAL ARRAY
 description | This rpc retrieves the part of the lab cumulative report selected by the user on the Labs tab.


### Method description

 property | value 
--- | --- 
 Method comment | return cum report text
 Leading comment lines | RPC: ORWLR REPORT TEXT

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file. | 
| PART OF CUMULATIVE | LITERAL | 20 | true | Name that uniquely identifies the desired part of the lab cumulative. | 
| DATE RANGE | LITERAL | 5 | true | This parameter indicates the number of days from TODAYthat the cumulative should search for information. | 
| REPORT SECTION | LITERAL | 2 | true | This parameter specifics which section of the lab cumulative partshould be retrieved. (An example of a part is 'Miscellaneous Tests'.)If REPORT SECTION equals 0 then the entire part is re-compiled and thefirst section is passed back. If the part is large then it isnecessary to divide it into sections. Currently, each section cannot be more than be more than 20,000 characters | 




Generated on January 11th 2017, 6:34:23 am