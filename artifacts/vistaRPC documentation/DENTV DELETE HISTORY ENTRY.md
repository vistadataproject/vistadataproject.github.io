---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV DELETE HISTORY ENTRY 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTV DELETE HISTORY ENTRY{:/}
 tag | {::nomarkdown}DELH{:/}
 routine | [DENTVRHD](http://code.osehra.org/dox/Routine_DENTVRHD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will mark records in file 228.1 as deleted.   Through indexes on theDATE DELETED field in file 228.1, the associated transactions in file228.2 will be marked as deleted.  Since these two files are considered part of the official medical record, then, according to HIPAA, once a permenant record has been filed, it cannot be deleted unless an audit trail is maintained.  So we will keep these deleted records in these two files but will mark the records as having been deleted.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number in file 228.1 to be deleted{:/} | 
| {::nomarkdown}REASON{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}You can provide a reason as to why this record was deleted.{:/} | 




 Generated on January 13th 2017, 6:24:32 am