---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV SET DGW CONFIG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV SET DGW CONFIG{:/}
 tag | {::nomarkdown}SETGWCFG{:/}
 routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Set DGW configuration settings in the MAGV GATEWAY CONFIGURATIONFile (#2006.9191).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HOSTNAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} |  | {::nomarkdown}NAME OF DICOM GATEWAY{:/} | 
| {::nomarkdown}MAILGROUP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}EMAIL ADDRESSEE{:/} | 
| {::nomarkdown}POSTOFFICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} |  | {::nomarkdown}POST OFFICE SERVER{:/} | 
| {::nomarkdown}POSTPORT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} |  | {::nomarkdown}POST OFFICE EMAIL PORT{:/} | 
| {::nomarkdown}IMPORTER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} |  | {::nomarkdown}Indicator to determine if DGW is using the IMPORTER.Contents are YES or NO.{:/} | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} |  | {::nomarkdown}DICOM GATEWAY LOCATION CODE(Site Location/Station number){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}