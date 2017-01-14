---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQ ABP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ ABP{:/}
 tag | {::nomarkdown}ENTRY{:/}
 routine | [MAGQBTM](http://code.osehra.org/dox/Routine_MAGQBTM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Provides a list of Active Background Processes.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}WORKSTAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This value is the actual workstation name as specified bythe network operating system.  It is identical to the fieldin the VISTA workstation file (#2006.8) named WRKS COMPUTERNAME (#50).{:/} | 
| {::nomarkdown}PROCESS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This value is by design either \B-PROC\ or \Purge\ and is used to renamethe VISTA Job name on DSM systems.  This value has the last two IP octetconcatenated to it for easy identification for system management purposes.It is also displayed in the title bar of the workstation process form.of the workstation process form.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}