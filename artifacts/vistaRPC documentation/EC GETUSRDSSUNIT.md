---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETUSRDSSUNIT 

 property | value 
--- | --- 
 label | {::nomarkdown}EC GETUSRDSSUNIT{:/}
 tag | {::nomarkdown}USRUNT{:/}
 routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns an array of DSS units for which the user has access.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The input variable ECARY contains a value from the location or New Person file.   1. ECL   - Location IEN, #4(if define gives User's DSS units for a location)   2. ECDUZ - New Person IEN, #200 (if define gives list of DSS Units available              to user){:/} | 




 Generated on January 13th 2017, 5:52:13 am