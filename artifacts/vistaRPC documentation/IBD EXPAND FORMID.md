---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBD EXPAND FORMID 

 property | value 
--- | --- 
 label | IBD EXPAND FORMID
 tag | IDPAT
 routine | [IBDFRPC3](http://code.osehra.org/dox/Routine_IBDFRPC3_source.html)
 return value type | SINGLE VALUE
 description | This call will convert a form id (printed at the top of an encounter form)and return information about the patient, the appointment, and the form.See routine IBDRPC3 for output descritpion.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FORMID | LITERAL | 40 | true | This is the form id printed at the top of the encounter form, and shouldmatch and internal entry number from the FORM TRACKING file (357.96). | 




 Generated on January 11th 2017, 7:15:03 am