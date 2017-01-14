---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DVBAB FORM COPY 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB FORM COPY{:/}
 tag | {::nomarkdown}COPY{:/}
 routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} Copies a CAPRI form in file 396.17 to a new entry.  Clears key field so the form becomes editable as a new draft document. DVBAB1 = IEN in 396.17 to copyDVBAB2 = IEN in patient file If DVBAB2 is null, the copied form will be filed under the same patient it previously belonged to. If DVBAB2 has a value, it'll be copied to the new patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DVBAB1{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DVBAB2{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}