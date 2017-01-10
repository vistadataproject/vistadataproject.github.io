---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET PATIENT VITALS 

 property | value 
--- | --- 
 label | MAG DICOM GET PATIENT VITALS
 tag | GETPAT
 routine | [MAGDHWR](http://code.osehra.org/dox/Routine_MAGDHWR_source.html)
 return value type | ARRAY
 description | This Remote Procedure returns some information about a patient.At this time, the values returned are   VIP-code   Height   WeightThis list may be extended in the future.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | The value of this parameter is the VA-defined DFN patient identifier.This is the internal entry number for the patient at the local hospital. | 