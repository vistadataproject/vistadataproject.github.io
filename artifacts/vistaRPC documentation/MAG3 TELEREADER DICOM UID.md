---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 TELEREADER DICOM UID 

 property | value 
--- | --- 
 label | MAG3 TELEREADER DICOM UID
 tag | GETUID
 routine | [MAGNGMR](http://code.osehra.org/dox/Routine_MAGNGMR_source.html)
 return value type | SINGLE VALUE
 description | Returns a new TELEREADER DICOM Study, Series or SOP Instance UID

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGPARAM | LIST |  | true | MAGPARAM - array with input values           MAGPARAM(\TYPE\)= Type UID - \STUDY\, \SERIES\, \SOP\           MAGPARAM(\ACNUM\)= Accession number - Patient consult ID           MAGPARAM(\DFN\)= Patient DFN | 




Generated on January 11th 2017, 6:34:23 am