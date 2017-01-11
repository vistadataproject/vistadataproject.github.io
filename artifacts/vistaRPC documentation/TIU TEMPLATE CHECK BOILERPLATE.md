---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU TEMPLATE CHECK BOILERPLATE 

 property | value 
--- | --- 
 label | TIU TEMPLATE CHECK BOILERPLATE
 tag | BPCHECK
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | ARRAY
 description | This RPC will evaluate boilerplate passed in the input array, checking tosee whether any of the embedded objects are inactive, faulty, orambiguous.


### Method description

 property | value 
--- | --- 
 Method comment | Checks objects in boilerplate text.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUX | LIST |  | true | This is a local array containg boilerplate text for the template in wordprocessing subscript format, e.g.: TIUX(2,1,0)=\The pt. is a |AGE| yo |RACE| |SEX| who presented to the\TIUX(2,2,0)=\PULMONARY clinic on |VISIT DATE| for pulmonary function\TIUX(2,3,0)=\tests to rule out Asthma/COPD.\ | 




 ###### Generated on January 11th 2017, 6:39:42 am