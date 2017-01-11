---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGLAB START 

 property | value 
--- | --- 
 label | MAGGLAB START
 tag | START
 routine | [MAGGTLB](http://code.osehra.org/dox/Routine_MAGGTLB_source.html)
 return value type | ARRAY
 description | ;The line tag START is used for selection of the specimen that the image relates to. This line tag will require a lab section (Autopsy/ Gross, Autopsy/Microscopic, EM, Surgical Path, or Cytology),the Accession year, and either an Accession # or Autopsy #.  Based onthis information it will return an array of specimens for selection.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SECT | LITERAL | 60 | true | Lab section, i.e. SP, CY, etc. | 
| YEAR | LITERAL | 30 | true | Lab specimen year. | 
| ACNUM | LITERAL | 60 | true | Lab accession number. | 
| DFN | LITERAL |  |  | PATIENT'S DFN | 