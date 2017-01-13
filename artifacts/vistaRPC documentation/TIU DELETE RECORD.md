---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU DELETE RECORD 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU DELETE RECORD{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Deletes TIU Document records...Evaluates authorization.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | delete document

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Record number of TIU Document to be deleted.{:/} | 
| {::nomarkdown}TIURSN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This optional parameter specifies the reason for deletion (i.e., PrivacyAct, or Administrative Action). It only needs to be passed if the document has already been signed, and the user is still authorized to delete therecord.{:/} | 




 Generated on January 13th 2017, 5:52:13 am