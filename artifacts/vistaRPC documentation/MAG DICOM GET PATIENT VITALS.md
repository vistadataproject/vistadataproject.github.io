---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM GET PATIENT VITALS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM GET PATIENT VITALS{:/}
 tag | {::nomarkdown}GETPAT{:/}
 routine | [MAGDHWR](http://code.osehra.org/dox/Routine_MAGDHWR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure returns some information about a patient.At this time, the values returned are   VIP-code   Height   WeightThis list may be extended in the future.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is the VA-defined DFN patient identifier.This is the internal entry number for the patient at the local hospital.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}