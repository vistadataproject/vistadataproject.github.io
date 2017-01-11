---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RMPR IFCAP CHECK AUTH 

 property | value 
--- | --- 
 label | RMPR IFCAP CHECK AUTH
 tag | EN1
 routine | [RMPR9SPC](http://code.osehra.org/dox/Routine_RMPR9SPC_source.html)
 return value type | ARRAY
 description |  Check if user has any Purchase Cards Assigened. RESULTS(0)=You are not an authorized Purchase Card User, CONTACT FISCAL!OrRESULTS(0)=You are not defined in the Prosthetics Site Parameter File.OrRESULTS(0)=9Ien to file 669.9 New X-ref in file 669.9 on Purchasing Agent Field.  Set with routine RMPR9X.\PA ,DUZ,IEN^RMPR(669.9,\PA\,88,9) = ^RMPR(669.9,\PA\,2182,9) =




 ###### Generated on January 11th 2017, 6:39:43 am