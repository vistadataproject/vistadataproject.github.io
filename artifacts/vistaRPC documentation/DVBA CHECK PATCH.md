---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBA CHECK PATCH 

 property | value 
--- | --- 
 label | {::nomarkdown}DVBA CHECK PATCH{:/}
 tag | {::nomarkdown}CHECK{:/}
 routine | [DVBAB1B](http://code.osehra.org/dox/Routine_DVBAB1B_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is a wrapper for the supported $$PATCH^XPDUTL API to determinewhether a given patch is installed or not.  \1^Patch Is Installed\ is returned on success; otherwise \0^Patch Is Not Installed\ is returned.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DVBPATCH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the patch designation (ex. DVBA*2.7*142).{:/} | 




 Generated on January 13th 2017, 5:52:13 am