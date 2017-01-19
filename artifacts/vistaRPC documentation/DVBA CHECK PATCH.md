---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBA CHECK PATCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBA CHECK PATCH{:/}
 tag | {::nomarkdown}CHECK{:/}
 routine | [DVBAB1B](http://code.osehra.org/dox/Routine_DVBAB1B_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is a wrapper for the supported $$PATCH^XPDUTL API to determinewhether a given patch is installed or not.  \1^Patch Is Installed\ is returned on success; otherwise \0^Patch Is Not Installed\ is returned.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DVBPATCH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the patch designation (ex. DVBA*2.7*142).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}