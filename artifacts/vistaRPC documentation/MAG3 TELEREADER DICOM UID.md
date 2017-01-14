---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG3 TELEREADER DICOM UID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG3 TELEREADER DICOM UID{:/}
 tag | {::nomarkdown}GETUID{:/}
 routine | [MAGNGMR](http://code.osehra.org/dox/Routine_MAGNGMR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a new TELEREADER DICOM Study, Series or SOP Instance UID{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}MAGPARAM - array with input values           MAGPARAM(\TYPE\)= Type UID - \STUDY\, \SERIES\, \SOP\           MAGPARAM(\ACNUM\)= Accession number - Patient consult ID           MAGPARAM(\DFN\)= Patient DFN{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}