---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP GET TOOTH NOTES 

 property | value 
--- | --- 
 label | DENTV TP GET TOOTH NOTES
 tag | GET
 routine | [DENTVTP6](http://code.osehra.org/dox/Routine_DENTVTP6_source.html)
 return value type | GLOBAL ARRAY
 description | This returns all the tooth notes for all dates for a patient.  The data will be sorted by tooth number and then by reverse date.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | This is a pointer to the PATIENT file. | 




Generated on January 11th 2017, 6:34:23 am