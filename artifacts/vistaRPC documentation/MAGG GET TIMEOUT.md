---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG GET TIMEOUT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG GET TIMEOUT{:/}
 tag | {::nomarkdown}TIMEOUT{:/}
 routine | [MAGGTU6](http://code.osehra.org/dox/Routine_MAGGTU6_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Called by imaging application to get the Site defined timeout for the Imaging applications. Accepted input is \DISPLAY\, \CAPTURE\, \VISTARAD\, \TELEREADER\,or \IMPORTER\.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}APP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Either \DISPLAY\, \CAPTURE\, \VISTARAD\, \TELEREADER\,or \IMPORTER\.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}