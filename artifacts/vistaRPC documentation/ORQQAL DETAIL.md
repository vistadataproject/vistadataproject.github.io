---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQAL DETAIL 

 property | value 
--- | --- 
 label | ORQQAL DETAIL
 tag | DETAIL
 routine | [ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 return value type | ARRAY
 description | This function returns a string of information for a specific allergy/adverse reaction.  Returned data is delimited by \^\ and includes:allergen/reactant, originator, originator title, verified/not verified, observed/historical,<blank>,type, observation date, severity, drug class, symptoms/reactions (mulitple symptoms possible - delimited by \;\), comments.


### Method description

 property | value 
--- | --- 
 Method comment | RETURN DETAILED ALLERGY INFO FOR SPECIFIED ALLERGIC REACTION:

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ALLERGY ID | LITERAL | 16 | true | The record number of the allergy/adverse reaction from the PatientAllergies file (#120.8). | 




Generated on January 11th 2017, 6:34:23 am