---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DG VIC PATIENT LOOKUP 

 property | value 
--- | --- 
 label | {::nomarkdown}DG VIC PATIENT LOOKUP{:/}
 tag | {::nomarkdown}RPCVIC{:/}
 routine | [DPTLK](http://code.osehra.org/dox/Routine_DPTLK_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will allow lookup of a patient with the input from a VIC card orDOD CAC card. The VIC card can be an old VIC card or the newer VIC 4.0card.  The entire card's input should be provided.  If the patient isknown locally the patient's DFN will be returned.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DPTX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This should be the entire input from either the Magnetic Strip or theBarcode.{:/} | 




 Generated on January 13th 2017, 5:52:13 am