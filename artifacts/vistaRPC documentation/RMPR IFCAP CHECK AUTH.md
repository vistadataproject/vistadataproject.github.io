---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RMPR IFCAP CHECK AUTH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}RMPR IFCAP CHECK AUTH{:/}
 tag | {::nomarkdown}EN1{:/}
 routine | [RMPR9SPC](http://code.osehra.org/dox/Routine_RMPR9SPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} Check if user has any Purchase Cards Assigened. RESULTS(0)=You are not an authorized Purchase Card User, CONTACT FISCAL!OrRESULTS(0)=You are not defined in the Prosthetics Site Parameter File.OrRESULTS(0)=9Ien to file 669.9 New X-ref in file 669.9 on Purchasing Agent Field.  Set with routine RMPR9X.\PA ,DUZ,IEN^RMPR(669.9,\PA\,88,9) = ^RMPR(669.9,\PA\,2182,9) ={:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}