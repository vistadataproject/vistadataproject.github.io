---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS GET ALLERGIES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPS GET ALLERGIES{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [VPSALL01](http://code.osehra.org/dox/Routine_VPSALL01_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Called by the Vetlink Kiosk system.   VPS GET ALLEGIES retrieves patient allergy data stored in an entry or entries in the PATIENT ALLERGIES file (120.8).  The retrieved data is made available to the Vetlink system. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The patient DFN is used to collect the various allergy related fields stored in the Adverse Reaction Tracking package.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}