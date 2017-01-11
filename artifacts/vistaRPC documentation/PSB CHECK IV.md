---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB CHECK IV 

 property | value 
--- | --- 
 label | PSB CHECK IV
 tag | RPC
 routine | [PSBCHKIV](http://code.osehra.org/dox/Routine_PSBCHKIV_source.html)
 return value type | ARRAY
 description | RPC PSB CHECK IV - When given a patient's data file number(DFN), this process will return infusing IV information pertaining to the given DFN.  The information will be returned at the location presented bythe \RESULTS\ parameter.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | Patient IENentry number (IEN) and a pointer to the PATIENT FILE (File#2 - ^DPT). | 
| ORDIV | LIST |  | true | LIST OF ORDER NUMBERSto contain the output from PSB CHECK IV processing. | 




 Generated on January 11th 2017, 7:15:04 am