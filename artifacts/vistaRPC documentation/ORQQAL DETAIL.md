---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQAL DETAIL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQAL DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This function returns a string of information for a specific allergy/adverse reaction.  Returned data is delimited by \^\ and includes:allergen/reactant, originator, originator title, verified/not verified, observed/historical,<blank>,type, observation date, severity, drug class, symptoms/reactions (mulitple symptoms possible - delimited by \;\), comments.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | RETURN DETAILED ALLERGY INFO FOR SPECIFIED ALLERGIC REACTION:

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ALLERGY ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the allergy/adverse reaction from the PatientAllergies file (#120.8).{:/} | 




 Generated on January 13th 2017, 5:52:13 am