---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL SAVEVIEW 

 property | value 
--- | --- 
 label | ORQQPL SAVEVIEW
 tag | SAVEVIEW
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | ARRAY
 description | Saves preferred view (inpatient/outpatient) and list of preferredclinics/services to NEW PERSON file, field 125.nn.  Also sets value ofparameter [ORCH CONTEXT PROBLEMS], which controls the default status ofthe problems shown, as well as whether comments should be displayed.Preferences take effect for both GUI and List Manager, and can be changedfrom either interface.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMPLVIEW | LITERAL | 64 | true | See field 125.nn of the NEW PERSON file for format of the first piece,related to inpatient/outpatient and clinics/services. Piece 2 is in the format 'a;b;c;d'. The first two ';' pieces are ignored.The third piece represents the status of the problems to be displayed(A,I,R,B) for Active, Inactive, Removed, and Both Active/Inactive.  The4th ';' piece is a 1 to show comments, and a 0 to hide comments.  Seeparameter ORCH CONTEXT PROBLEMS for description. | 