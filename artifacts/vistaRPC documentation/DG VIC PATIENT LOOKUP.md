---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DG VIC PATIENT LOOKUP 

 property | value 
--- | --- 
 label | DG VIC PATIENT LOOKUP
 tag | RPCVIC
 routine | [DPTLK](http://code.osehra.org/dox/Routine_DPTLK_source.html)
 return value type | SINGLE VALUE
 description | This RPC will allow lookup of a patient with the input from a VIC card orDOD CAC card. The VIC card can be an old VIC card or the newer VIC 4.0card.  The entire card's input should be provided.  If the patient isknown locally the patient's DFN will be returned.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DPTX | LITERAL | 255 | true | This should be the entire input from either the Magnetic Strip or theBarcode. | 