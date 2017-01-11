---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ ABP 

 property | value 
--- | --- 
 label | MAGQ ABP
 tag | ENTRY
 routine | [MAGQBTM](http://code.osehra.org/dox/Routine_MAGQBTM_source.html)
 return value type | ARRAY
 description | Provides a list of Active Background Processes.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| WORKSTAT | LITERAL | 30 | true | This value is the actual workstation name as specified bythe network operating system.  It is identical to the fieldin the VISTA workstation file (#2006.8) named WRKS COMPUTERNAME (#50). | 
| PROCESS | LITERAL | 8 | true | This value is by design either \B-PROC\ or \Purge\ and is used to renamethe VISTA Job name on DSM systems.  This value has the last two IP octetconcatenated to it for easy identification for system management purposes.It is also displayed in the title bar of the workstation process form.of the workstation process form. | 




 ###### Generated on January 11th 2017, 6:39:42 am