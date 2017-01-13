---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET PATIENT VITALS 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM GET PATIENT VITALS{:/}
 tag | {::nomarkdown}GETPAT{:/}
 routine | [MAGDHWR](http://code.osehra.org/dox/Routine_MAGDHWR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure returns some information about a patient.At this time, the values returned are   VIP-code   Height   WeightThis list may be extended in the future.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is the VA-defined DFN patient identifier.This is the internal entry number for the patient at the local hospital.{:/} | 




 Generated on January 13th 2017, 6:24:32 am