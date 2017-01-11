---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBA CHECK PATCH 

 property | value 
--- | --- 
 label | DVBA CHECK PATCH
 tag | CHECK
 routine | [DVBAB1B](http://code.osehra.org/dox/Routine_DVBAB1B_source.html)
 return value type | SINGLE VALUE
 description | This RPC is a wrapper for the supported $$PATCH^XPDUTL API to determinewhether a given patch is installed or not.  \1^Patch Is Installed\ is returned on success; otherwise \0^Patch Is Not Installed\ is returned.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DVBPATCH | LITERAL | 20 | true | This parameter contains the patch designation (ex. DVBA*2.7*142). | 