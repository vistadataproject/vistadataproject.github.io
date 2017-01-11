---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET ALLERGIES 

 property | value 
--- | --- 
 label | VPS GET ALLERGIES
 tag | GET
 routine | [VPSALL01](http://code.osehra.org/dox/Routine_VPSALL01_source.html)
 return value type | ARRAY
 description | Called by the Vetlink Kiosk system.   VPS GET ALLEGIES retrieves patient allergy data stored in an entry or entries in the PATIENT ALLERGIES file (120.8).  The retrieved data is made available to the Vetlink system. 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 30 | true | The patient DFN is used to collect the various allergy related fields stored in the Adverse Reaction Tracking package. | 