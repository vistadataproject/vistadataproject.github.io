---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB CHECK IV 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB CHECK IV{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [PSBCHKIV](http://code.osehra.org/dox/Routine_PSBCHKIV_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC PSB CHECK IV - When given a patient's data file number(DFN), this process will return infusing IV information pertaining to the given DFN.  The information will be returned at the location presented bythe \RESULTS\ parameter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient IENentry number (IEN) and a pointer to the PATIENT FILE (File#2 - ^DPT).{:/} | 
| {::nomarkdown}ORDIV{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}LIST OF ORDER NUMBERSto contain the output from PSB CHECK IV processing.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}