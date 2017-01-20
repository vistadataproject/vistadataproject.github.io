---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGGLAB START 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGGLAB START{:/}
 tag | {::nomarkdown}START{:/}
 routine | [MAGGTLB](http://code.osehra.org/dox/Routine_MAGGTLB_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown};The line tag START is used for selection of the specimen that the image relates to. This line tag will require a lab section (Autopsy/ Gross, Autopsy/Microscopic, EM, Surgical Path, or Cytology),the Accession year, and either an Accession # or Autopsy #.  Based onthis information it will return an array of specimens for selection.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SECT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Lab section, i.e. SP, CY, etc.{:/} | 
| {::nomarkdown}YEAR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Lab specimen year.{:/} | 
| {::nomarkdown}ACNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Lab accession number.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}PATIENT'S DFN{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}