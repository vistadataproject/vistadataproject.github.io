---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU TEMPLATE CREATE_MODIFY 

 property | value 
--- | --- 
 label | TIU TEMPLATE CREATE_MODIFY
 tag | SETTMPLT
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure allows creation and update of Templates.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This optional parameter is the record number of the Template to bemodified. If the Template is new, it may be passed as zero or null, toindicate that a new Template is to be created. | 
| TIUX | LIST |  | true | This array contains the data to be filed in the Template entry,subscripted by field number. It should look something like this: TIUX(.01)=\ACTIVE MEDICATIONS\TIUX(.03)=\T\TIUX(.04)=\A\TIUX(.05)=0TIUX(.06)=\\TIUX(2,1,0)=\Active Medications:\TIUX(2,2,0)=\|AMED|\ | 




 Generated on January 11th 2017, 7:15:04 am